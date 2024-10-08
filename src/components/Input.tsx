import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef(( props: InputType, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="dense"
            
            size="small"
            inputRef={ref}
            fullWidth
            type='text'
            {...props}
        >
        </TextField>
    )
})

export default Input