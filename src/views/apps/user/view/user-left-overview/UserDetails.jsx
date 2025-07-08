// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const userData = {
  firstName: 'Fahad',
  lastName: 'Al Saud',
  userName: '@falsaud',
  billingEmail: 'fahad.alsaud@riyadhlogistics.sa',
  status: 'active',
  role: 'Driver',
  employeeId: 'DRV-1023',
  contact: '+966 11 123 4567',
  language: ['Arabic'],
  country: 'Saudi Arabia',
  company: 'Riyadh Logistics Co.',
  address: '123 King Fahd Rd, Riyadh 12271, Saudi Arabia',
  tripsCompleted: 128,
  deliveriesMade: 97,
  useAsBillingAddress: true
}

const UserDetails = () => {
  // Vars
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card>
        <CardContent className='flex flex-col pbs-12 gap-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center justify-center gap-4'>
              <CustomAvatar
                alt='user-profile'
                src='/images/avatars/1.png'
                variant='rounded'
                className='rounded-lg'
                size={120}
              />
              <Typography variant='h5'>{`${userData.firstName} ${userData.lastName}`}</Typography>
              <Chip label={userData.role} variant='tonal' color='error' size='small' />
            </div>
            {/* <div className='flex items-center justify-around flex-wrap gap-4'>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' color='primary' skin='light'>
                  <i className='ri-check-line' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>{userData.tripsCompleted}</Typography>
                  <Typography>Trips Completed</Typography>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' color='primary' skin='light'>
                  <i className='ri-briefcase-line' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>{userData.deliveriesMade}</Typography>
                  <Typography>Deliveries Made</Typography>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <Typography variant='h5'>Details</Typography>
            <Divider className='mlb-4' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Username:
                </Typography>
                <Typography>{userData.userName}</Typography>
              </div>
              {/* <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Billing Email:
                </Typography>
                <Typography>{userData.billingEmail}</Typography>
              </div> */}
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Status:
                </Typography>
                <Typography>{userData.status}</Typography>
              </div>
              {/* <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Role:
                </Typography>
                <Typography>{userData.role}</Typography>
              </div> */}
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Employee ID:
                </Typography>
                <Typography>{userData.employeeId}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Contact:
                </Typography>
                <Typography>{userData.contact}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Language:
                </Typography>
                <Typography>{userData.language}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Country:
                </Typography>
                <Typography>{userData.country}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Company:
                </Typography>
                <Typography>{userData.company}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Address:
                </Typography>
                <Typography>{userData.address}</Typography>
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Edit', 'primary', 'contained')}
              dialog={EditUserInfo}
              dialogProps={{ data: userData }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Suspend', 'error', 'outlined')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'suspend-account' }}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default UserDetails
