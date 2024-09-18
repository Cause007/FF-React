import { useState } from 'react'
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

// Cloudinary --------------------------------------
// import {Cloudinary} from "@cloudinary/url-gen";
// import {AdvancedImage, lazyload} from '@cloudinary/react';
// import { transformationStringFromObject } from "@cloudinary/url-gen";

  // Cloudinary --------------------------------------
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "dmf0ynlth"
//     }
//   });
//   const transformation = transformationStringFromObject([
//     {gravity: "face", height: 150, width: 150, crop: "thumb"},
//     {radius: 100}
//     ]);


const columns: GridColDef[] = [
    // {field: 'id', headerName: "ID", hide: true},
    // {field: 'Photo', headerName: "Student", renderCell: () => 
    //     <AdvancedImage cldImg={cld.image('ESC_Qual_Photo_ha5gxj').addTransformation(transformation)} plugins={[lazyload()]} />},
    {field: 'FirstName', headerName: "First Name", width: 100},
    {field: 'LastName', headerName: "Last Name", width: 100},
 
    {field: 'Parent1', headerName: "1st Contact", minWidth: 150},
    {field: 'Phone1', headerName: "1st Phone", width: 100},
    {field: 'Email1', headerName: "1st Email", minWidth: 150},
    {field: 'Address1', headerName: "1st Neighborhood", minWidth: 150},

    {field: 'Parent2', headerName: "2nd Contact", minWidth: 150},
    {field: 'Phone2', headerName: "2nd Phone", minWidth: 100},
    {field: 'Email2', headerName: "2nd Email", minWidth: 150},
    {field: 'Address2', headerName: "2nd Neighborhood", minWidth: 150}
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const[ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 1000)
    }


  return (
    <>
        <Modal
        id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Contact
                </button>
            </div>
            <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>   
        <div className={ open ? "hidden" : "container ml-10 my-5 flex flex-col"}
        style={{ height: 800}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">Parent Directory</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[50]} rowHeight={70}
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable