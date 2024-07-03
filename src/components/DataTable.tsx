import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    {field: 'id', headerName: "ID", width: 90},
    {field: 'Photo', headerName: "Student", flex: 2},
    {field: 'FirstName', headerName: "First Name", flex: 2},
    {field: 'LastName', headerName: "Last Name", flex: 2},

    {field: 'Parent1', headerName: "Primary Contact", flex: 2},
    {field: 'Phone1', headerName: "Primary Phone", flex: 2},
    {field: 'Email1', headerName: "Primary Email", flex: 2},
    {field: 'Address1', headerName: "Primary Neighborhood", flex: 2},

    {field: 'Parent2', headerName: "Secondary Contact", flex: 2},
    {field: 'Phone2', headerName: "Secondary Phone", flex: 2},
    {field: 'Email2', headerName: "Secondary Email", flex: 2},
    {field: 'Address2', headerName: "Secondary Neighborhood", flex: 2},
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
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 700, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">Parent Directory</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[50]}
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