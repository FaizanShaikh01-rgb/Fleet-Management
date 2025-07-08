// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid2'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const TableFilters = ({ setData, tableData, onRemoveSelected }) => {
  // States
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (role && user.role !== role) return false
      if (status && user.status !== status) return false
      if (search && !(
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      )) return false

      return true
    })

    setData(filteredData || [])
  }, [role, status, search, tableData, setData])

  return (
    <CardContent>
      <div className='flex flex-wrap gap-3 items-center justify-between mb-4'>
        <div className='flex flex-wrap gap-3 items-center'>
          <TextField
            size='small'
            label='Search User'
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ minWidth: 180, maxWidth: 220 }}
          />
          <FormControl sx={{ minWidth: 180, maxWidth: 200 }} size='small'>
            <InputLabel id='role-select'>Role</InputLabel>
            <Select
              fullWidth
              id='select-role'
              value={role}
              onChange={e => setRole(e.target.value)}
              label='Role'
              labelId='role-select'
              inputProps={{ placeholder: 'Role' }}
            >
              <MenuItem value=''>All Roles</MenuItem>
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='hub_manager'>Hub Manager</MenuItem>
              <MenuItem value='dispatcher'>Dispatcher</MenuItem>
              <MenuItem value='driver'>Driver</MenuItem>
              <MenuItem value='warehouse_staff'>Warehouse Staff</MenuItem>
              <MenuItem value='customer_service'>Customer Service</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, maxWidth: 140 }} size='small'>
            <InputLabel id='status-select'>Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              label='Status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              labelId='status-select'
              inputProps={{ placeholder: 'Status' }}
            >
              <MenuItem value=''>All Status</MenuItem>
              <MenuItem value='pending'>Pending</MenuItem>
              <MenuItem value='active'>Active</MenuItem>
              <MenuItem value='inactive'>Inactive</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='flex gap-3'>
          <Button
            color='secondary'
            variant='outlined'
            startIcon={<i className='ri-upload-2-line' />}
          >
            Export
          </Button>
          {/* <Button
            color='error'
            variant='outlined'
            startIcon={<i className='ri-delete-bin-7-line' />}
            onClick={onRemoveSelected}
          >
            Remove Selected
          </Button> */}
        </div>
      </div>
    </CardContent>
  )
}

export default TableFilters
