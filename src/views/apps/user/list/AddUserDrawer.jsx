// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Vars
const initialData = {
  company: '',
  country: '',
  contact: ''
}

const AddUserDrawer = props => {
  // Props
  const { open, handleClose, userData, setData } = props

  // States
  const [formData, setFormData] = useState(initialData)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      role: '',
      status: ''
    }
  })

  const onSubmit = data => {
    const newUser = {
      id: (userData?.length && userData?.length + 1) || 1,
      avatar: `/images/avatars/${Math.floor(Math.random() * 8) + 1}.png`,
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      role: data.role,
      status: data.status,
      company: formData.company,
      country: formData.country,
      contact: formData.contact
    }

    setData([...(userData ?? []), newUser])
    handleClose()
    setFormData(initialData)
    resetForm({ fullName: '', username: '', email: '', role: '', status: '' })
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Add New User</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='fullName'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Full Name'
                placeholder='John Doe'
                {...(errors.fullName && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='username'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Username'
                placeholder='johndoe'
                {...(errors.username && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                {...(errors.email && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <FormControl fullWidth>
            <InputLabel id='country' error={Boolean(errors.role)}>
              Select Role
            </InputLabel>
            <Controller
              name='role'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select label='Select Role' {...field} error={Boolean(errors.role)}>
                  <MenuItem value='admin'>Admin</MenuItem>
                  <MenuItem value='hub_manager'>Hub Manager</MenuItem>
                  <MenuItem value='dispatcher'>Dispatcher</MenuItem>
                  <MenuItem value='driver'>Driver</MenuItem>
                  <MenuItem value='warehouse_staff'>Warehouse Staff</MenuItem>
                  <MenuItem value='customer_service'>Customer Service</MenuItem>
                </Select>
              )}
            />
            {errors.role && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl>
          {/* <FormControl fullWidth>
            <InputLabel id='country' error={Boolean(errors.plan)}>
              Select Plan
            </InputLabel>
            <Controller
              name='plan'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select label='Select Plan' {...field} error={Boolean(errors.plan)}>
                  <MenuItem value='basic'>Basic</MenuItem>
                  <MenuItem value='company'>Company</MenuItem>
                  <MenuItem value='enterprise'>Enterprise</MenuItem>
                  <MenuItem value='team'>Team</MenuItem>
                </Select>
              )}
            />
            {errors.plan && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl> */}
          <FormControl fullWidth>
            <InputLabel id='country' error={Boolean(errors.status)}>
              Select Status
            </InputLabel>
            <Controller
              name='status'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select label='Select Status' {...field} error={Boolean(errors.status)}>
                  <MenuItem value='pending'>Pending</MenuItem>
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
              )}
            />
            {errors.status && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl>
          <TextField
            label='Company'
            fullWidth
            placeholder='Company PVT LTD'
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel id='country'>Select Country / City</InputLabel>
            <Select
              fullWidth
              id='country'
              value={formData.country}
              onChange={e => setFormData({ ...formData, country: e.target.value })}
              label='Select Country / City'
              labelId='country'
            >
              <MenuItem value='Saudi Arabia'>Saudi Arabia</MenuItem>
              <MenuItem value='Riyadh'>Riyadh</MenuItem>
              <MenuItem value='Jeddah'>Jeddah</MenuItem>
              <MenuItem value='Dammam'>Dammam</MenuItem>
              <MenuItem value='Mecca'>Mecca</MenuItem>
              <MenuItem value='Medina'>Medina</MenuItem>
              <MenuItem value='Tabuk'>Tabuk</MenuItem>
              <MenuItem value='Abha'>Abha</MenuItem>
              <MenuItem value='Hail'>Hail</MenuItem>
              <MenuItem value='Najran'>Najran</MenuItem>
              <MenuItem value='Buraydah'>Buraydah</MenuItem>
              <MenuItem value='Khamis Mushait'>Khamis Mushait</MenuItem>
              <MenuItem value='Yanbu'>Yanbu</MenuItem>
              <MenuItem value='Jazan'>Jazan</MenuItem>
              <MenuItem value='Bisha'>Bisha</MenuItem>
              <MenuItem value='Al Khobar'>Al Khobar</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Contact'
            type='number'
            fullWidth
            placeholder='(397) 294-5153'
            value={formData.contact}
            onChange={e => setFormData({ ...formData, contact: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddUserDrawer
