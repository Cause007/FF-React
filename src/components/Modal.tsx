
import ContactForm from "./ContactForm"

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div onClick={ props.onClose } className="fixed w-full h-full flex z-1 overflow-scroll justify-center bg-gray-600 bg-opacity-60">
            <div onClick={(e) => { e.stopPropagation() }} className="w-auto max-h-screen fixed flex z-1 mb-5 sm:p-1 sm:mt-20 bg-gray-300 shadow-2xl rounded">
                <div className="w-full flex flex-row sm:flex-col">
                    <div className="hidden sm:flex flex-row space-apart rounded">
                        <p onClick={props.onClose} className="flex justify-start bg-blue-500 ml-2 mt-1 py-1 px-3 rounded hover:bg-orange-700 text-white">X</p>
                    </div>
                    <div className="flex flex-col items-center text-center ">
                        <ContactForm id={ props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
