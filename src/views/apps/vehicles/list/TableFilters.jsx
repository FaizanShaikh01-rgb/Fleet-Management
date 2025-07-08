// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid2'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const TableFilters = ({ setData, tableData }) => {
    // States
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        const filteredData = tableData?.filter(vehicle => {
            if (type && vehicle.type !== type) return false
            if (status && vehicle.status !== status) return false

            return true
        })

        setData(filteredData || [])
    }, [type, status, tableData, setData])

    return (
        <CardContent>
            <div className='flex flex-wrap gap-2 items-center'>
                <FormControl sx={{ minWidth: 150, maxWidth: 200 }} size='small'>
                    <InputLabel id='vehicle-type-select'>Vehicle Type</InputLabel>
                    <Select
                        fullWidth
                        id='select-vehicle-type'
                        value={type}
                        onChange={e => setType(e.target.value)}
                        label='Vehicle Type'
                        labelId='vehicle-type-select'
                        inputProps={{ placeholder: 'Vehicle Type' }}
                    >
                        <MenuItem value=''>All</MenuItem>
                        <MenuItem value='Truck'>Truck</MenuItem>
                        <MenuItem value='Trailer'>Trailer</MenuItem>
                        <MenuItem value='Tanker'>Tanker</MenuItem>
                        <MenuItem value='Van'>Van</MenuItem>
                        <MenuItem value='SUV'>SUV</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 150, maxWidth: 200 }} size='small'>
                    <InputLabel id='status-select'>Select Status</InputLabel>
                    <Select
                        fullWidth
                        id='select-status'
                        label='Select Status'
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        labelId='status-select'
                        inputProps={{ placeholder: 'Select Status' }}
                    >
                        <MenuItem value=''>Select Status</MenuItem>
                        <MenuItem value='pending'>Pending</MenuItem>
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='maintenance'>Maintenance</MenuItem>
                        <MenuItem value='inactive'>Inactive</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </CardContent>
    )
}

export default TableFilters
