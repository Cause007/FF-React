import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Icon from '@mdi/react'
import { mdiBarn, mdiCow } from '@mdi/js'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

function Navbar() {
  
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };
    
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

    const navigation = [
        { name: 'About', href: '/About', current: true },
        { name: 'Directory', href: '/Directory', current: false },
        { name: 'Moos', href: '/Moos', current: false },

    ]

  return (
    <Disclosure as="nav" className="bg-blue-400">
    {({ open }) => (
        <>
        <div className="mx-auto rounded-lg px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="pangolin-regular absolute items-center inset-y-0 text-white hover:text-gray-200">
                <div>
                    <Link to='/' className='text-2xl tracking-tight'>Funny Farm ELC</Link>
                </div>
                <div>
                    <Link to='/' className='text-lg tracking-tight'>Parent Directory</Link>
                </div>
            </div>
            <div className="absolute right-14 flex items-center md:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-200">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <Icon path={mdiCow} size={2} className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Icon path={mdiBarn} size={2} className="block h-6 w-6" aria-hidden="true"/>
                    )}
                </DisclosureButton>
            </div>
            <div className="absolute right-14 justify-center items-center hidden md:ml-6 md:block">
                <div className="flex flex-row space-x-2 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'bg-blue-400 text-white font-medium hover:bg-blue-500'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
            </div>
        </div>
        
        <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'bg-blue-400 hover:bg-blue-500 text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </DisclosureButton>
            ))}
            
        </div>
        </DisclosurePanel>
                        <button className='absolute top-2.5 right-3 px-2 py-3 bg-blue-400 hover:bg-blue-500 text-white text-sm font-medium rounded items-center justify-center'>
                            <div>
                              {!isAuthenticated ?
                                <Link to="/" onClick={signInOnClick} className="flex place-items-center">
                                    Log In
                                </Link>
                        :
                                <Link to="/" onClick={signOutOnClick} className="flex place-items-center">
                                    Log Out
                                </Link>
                              }
                            </div>
                        </button>
                    
    </>
  )}
  
</Disclosure>  
  )
}

export default Navbar
