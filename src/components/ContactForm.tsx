import Input from "./Input"

import { useForm } from 'react-hook-form'
import {server_calls } from "../api/server"
import {useDispatch, useStore} from "react-redux"
import { chooseFirstName, chooseLastName, choosePhoto, chooseParent1, chooseParent2, choosePhone1, choosePhone2, chooseEmail1, chooseEmail2, 
    chooseAddress1, chooseAddress2 } from "../redux/slices/RootSlice"

// FIREBASE ==============================================================================
import React, { useEffect, useState } from "react";
import { imageDb } from "../config/FirebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


interface ContactFormProps {
    id?: string[];
    onClose: () => void;
}

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

// FIREBASE UPLOAD FUNCTIONS -------------------------------------

    const [img,setImg] = useState('')
    const [imgURL,setImgURL] =useState([])

    const handleClick = () => {
        if(img !==null){
            const imgRef = ref(imageDb,`files/${v4()}`)
            uploadBytes(imgRef,img).then(value=>{
                console.log(value)
                getDownloadURL(value.ref).then(url=>{
                    setImgURL(data=>[...data,url])
                })
            })
        }

    useEffect(()=>{
        listAll(ref(imageDb,"files")).then(imgs=>{
            console.log(imgs)
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgURL(data=>[...data,url])
                })
            })
        })
    },[])
}


    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)

        // Standard uploads ------------------------------------------ 
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            // setTimeout(() => {window.location.reload()}, 1000);
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
            // setTimeout(() => {window.location.reload()}, 1000);
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
                        <Input {...register('LastName')} name='LastName' placeholder="Student First Name" />
                    </div>
                    <div className="px-3">
                            <input type="file" onChange={(e)=>setImg(e.target.files[0])} />
                            <button onClick={handleClick}>Upload</button>
                            <br/>
                            {
                            imgURL.map(dataVal=><div>
                                <img src={dataVal} height="200px" width="200px" />
                                <br/>
                            </div>)
                            }
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
                    <div className="px-3">
                        <label htmlFor="Address1" className= "flex flex-start -mb-2">Neighborhood</label>
                        <Input {...register('Address1')} name='Address1' placeholder="Neighborhood" />
                    </div>
                </div>

{/* Parent 2 */}
            <div className="font-bold text-start rounded -mb-9 pl-2 m-2 underline shadow-md bg-opacity-0">Secondary Contact</div>
            <div className="flex flex-col sm:flex-row justify-center border rounded pt-8 p-2 m-2 text-sm shadow-md bg-white">
                <div className="px-3">
                    <label htmlFor="Parent2" className= "flex flex-start -mb-2">Full Name</label>
                    <Input {...register('name')} name='name' placeholder="(optional)" />
                </div>
                <div className="px-3">
                    <label htmlFor="Phone2" className= "flex flex-start -mb-2">Phone Number</label>
                    <Input {...register('Phone2')} name='Phone2' placeholder="(optional)" />
                </div>
                <div className="px-3">
                    <label htmlFor="Email2" className= "flex flex-start -mb-2">Email</label>
                    <Input {...register('Email2')} name='Email2' placeholder="(optional)" />
                </div>
                <div className="px-3">
                    <label htmlFor="Address2" className= "flex flex-start -mb-2">Neighborhood</label>
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
