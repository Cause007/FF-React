import { useState } from 'react'
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {field: 'Photo', headerName: "", width: 130,
    renderCell: (params) => {console.log(params); 
        return(
          <div>
            <Avatar src={params.value} sx={{ width: 120, height: 120 }} />
          </div>
          );
        }
    },
    {field: 'fullName', headerName: 'Student', width: 160, cellClassName: 'super-app-theme--cell',
        valueGetter: (value, row) => {
            return `${row.FirstName || ''} ${row.LastName || ''}`}
    },
    {field: 'Address1', headerName: "Neighborhood", minWidth: 150},
    {field: 'Parent1', headerName: "Primary Contact", minWidth: 150},
    {field: 'Phone1', headerName: "Phone", width: 150},
    {field: 'Email1', headerName: "Email", minWidth: 150},


    {field: 'Parent2', headerName: "2nd Contact", minWidth: 150},
    {field: 'Phone2', headerName: "Phone", minWidth: 150},
    {field: 'Email2', headerName: "Email", minWidth: 150}
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
            <DataGrid rows={contactData} columns={columns} rowHeight={120}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable