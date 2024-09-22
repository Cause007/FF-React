import { useSubmit } from "react-router-dom"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import {server_calls } from "../api/server"
import {useDispatch, useStore} from "react-redux"
import { chooseFirstName, chooseLastName, choosePhoto, chooseParent1, chooseParent2, choosePhone1, choosePhone2, chooseEmail1, chooseEmail2, 
    chooseAddress1, chooseAddress2 } from "../redux/slices/RootSlice"

interface ContactFormProps {
    id?: string[];
    onClose: () => void;
}

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

// Standard uploads ------------------------------------------ 
    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)


        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 200);
            event.target.reset()
        } else {
            dispatch(chooseFirstName(data.FirstName));
            dispatch(chooseLastName(data.LastName));
            dispatch(choosePhoto(data.Photo));
            dispatch(chooseParent1(data.Parent1));
            dispatch(chooseParent2(data.Parent2));
            dispatch(choosePhone1(data.Phone1));
            dispatch(choosePhone2(data.Phone2));
            dispatch(chooseEmail1(data.Email1));
            dispatch(chooseEmail2(data.Email2));
            dispatch(chooseAddress1(data.Address1));
            dispatch(chooseAddress2(data.Address2));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 200);
            event.target.reset()
            props.onClose();
        }
    }

  return (
    <div>
        <form className="max-h-[90vh] overflow-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="font-bold text-start rounded -mb-9 pl-2 m-2 underline shadow-md bg-opacity-0">Student Info</div>
                <div className="flex flex-col sm:flex-row justify-center border rounded pt-8 p-2 m-2 text-sm shadow-md bg-white">

                    <div className="px-3">
                        <label htmlFor="FirstName" className= "flex flex-start -mb-2 mt-2">First Name</label>
                        <Input {...register('FirstName')} name='FirstName' placeholder="Student First Name" />
                    </div>
                    <div className="px-3">
                        <label htmlFor="LastName" className= "flex flex-start -mb-2 mt-2">Last Name</label>
                        <Input {...register('LastName')} name='LastName' placeholder="Student Last Name" />
                    </div>
                    <div className="px-3">
                        <label htmlFor="Address1" className= "flex flex-start -mb-2 mt-2">Neighborhood</label>
                        <Input {...register('Address1')} name='Address1' placeholder="Neighborhood" />
                    </div>
                    <div className="px-3">
                        <label htmlFor="Photo" className= "flex flex-start -mb-2 mt-2">Photo Hyperlink</label>
                        <Input {...register('Photo')} name='Photo' placeholder="https:// (paste full path)" />
                    </div>
                </div>
            
{/* Parent 1 */}
            <div className="font-bold text-start rounded -mb-9 pl-2 m-2 underline shadow-md bg-opacity-0">Primary Contact</div>
                <div className="flex flex-col sm:flex-row justify-center border rounded pt-8 p-2 m-2 text-sm shadow-md bg-white">
                    <div className="px-3">
                        <label htmlFor="Parent1" className= "flex flex-start -mb-2">Full Name</label>
                        <Input {...register('Parent1')} name='Parent1' placeholder="Name" />
                    </div>
                    <div className="px-3">
                        <label htmlFor="Phone1" className= "flex flex-start -mb-2">Preferred Phone</label>
                        <Input {...register('Phone1')} name='Phone1' placeholder="Phone Number" />
                    </div>
                    <div className="px-3">
                        <label htmlFor="Email1" className= "flex flex-start -mb-2">Preferred Email</label>
                        <Input {...register('Email1')} name='Email1' placeholder="Email" />
                    </div>

                </div>

{/* Parent 2 */}
            <div className="font-bold text-start rounded -mb-9 pl-2 m-2 underline shadow-md bg-opacity-0">Secondary Contact</div>
            <div className="flex flex-col sm:flex-row justify-center border rounded pt-8 p-2 m-2 text-sm shadow-md bg-white">
                <div className="px-3">
                    <label htmlFor="Parent2" className= "flex flex-start -mb-2">Full Name</label>
                    <Input {...register('Parent2')} name='Parent2' placeholder="(optional) Full Name" />
                </div>
                <div className="px-3">
                    <label htmlFor="Phone2" className= "flex flex-start -mb-2">Secondary Phone</label>
                    <Input {...register('Phone2')} name='Phone2' placeholder="(optional)" />
                </div>
                <div className="px-3">
                    <label htmlFor="Email2" className= "flex flex-start -mb-2">Secondary Email</label>
                    <Input {...register('Email2')} name='Email2' placeholder="(optional)" />
                </div>
                <div className="px-3 hidden">
                    <label htmlFor="Address2" className= "flex flex-start -mb-2">Secondary Neighborhood</label>
                    <Input {...register('Address2')} name='Address2' placeholder="(optional)" />
                </div>
            </div>

            <div className="flex justify-center">
                <button className="flex justify-center mb-2 mr-3 bg-blue-500 hover:bg-blue-600 text-white p-2 px-6 rounded">Submit</button>
                <button onClick={props.onClose} className="sm:hidden flex justify-center mb-2 bg-blue-500 hover:bg-orange-700 text-white p-2 px-6 rounded">Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
