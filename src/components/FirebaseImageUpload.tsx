import React, { useEffect, useState } from "react";
import { imageDb } from "../config/FirebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


function FirebaseImageUpload(){
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

    return(
        <div className="App">
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
    )
}
        
export default FirebaseImageUpload;