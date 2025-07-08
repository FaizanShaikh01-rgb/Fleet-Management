// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import EditUserInfo from '@components/dialogs/edit-user-info'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Util Imports
import { getInitials } from '@/utils/getInitials'

const getAvatar = params => {
  const { avatar, customer } = params

  if (avatar) {
    return <Avatar src={avatar} />
  } else {
    return <Avatar>{getInitials(customer)}</Avatar>
  }
}

// Mock sender and receiver data for fleet management
const sender = {
  name: 'Acme Corp. (Sender)',
  contact: '+966 11 123 4567',
  address: '123 King Fahd Road, Riyadh 12271, Saudi Arabia',
  email: 'logistics@acme.com'
}

const receiver = {
  name: 'Global Imports (Receiver)',
  contact: '+966 12 987 6543',
  address: '456 Corniche Road, Jeddah 23412, Saudi Arabia',
  email: 'receiving@globalimports.sa'
}

const CustomerDetails = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <Typography variant='h5'>Sender & Receiver Details</Typography>
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='primary.main' className='font-medium'>Sender</Typography>
          <Typography color='text.primary'>{sender.name}</Typography>
          <Typography>Email: {sender.email}</Typography>
          <Typography>Contact: {sender.contact}</Typography>
          <Typography>Address: {sender.address}</Typography>
        </div>
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='success.main' className='font-medium'>Receiver</Typography>
          <Typography color='text.primary'>{receiver.name}</Typography>
          <Typography>Email: {receiver.email}</Typography>
          <Typography>Contact: {receiver.contact}</Typography>
          <Typography>Address: {receiver.address}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerDetails
