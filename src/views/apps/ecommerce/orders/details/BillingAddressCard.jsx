// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Component Imports
import AddAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Vars
const data = {
  firstName: 'Finance',
  lastName: 'Acme Corp',
  email: 'finance@acme.com',
  country: 'Saudi Arabia',
  address1: '789 Olaya Street',
  address2: 'Riyadh 11564',
  landmark: 'Near Al Faisaliah Tower',
  city: 'Riyadh',
  state: 'Riyadh',
  zipCode: '11564',
  taxId: 'KSA-654321',
  vatNumber: 'KSA-VAT-123456',
  contact: '+966 11 765 4321'
}

const BillingAddress = () => {
  // Vars
  const typographyProps = (children, color, className) => ({
    children,
    color,
    className
  })

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between items-center'>
            <Typography variant='h5'>Billing Address</Typography>
            <OpenDialogOnElementClick
              element={Typography}
              elementProps={typographyProps('Edit', 'primary', 'cursor-pointer font-medium')}
              dialog={AddAddress}
              dialogProps={{ type: 'Add address for billing address', data }}
            />
          </div>
          <div className='flex flex-col'>
            <Typography>45 Roker Terrace</Typography>
            <Typography>Latheronwheel</Typography>
            <Typography>KW5 8NW, London</Typography>
            <Typography>UK</Typography>
          </div>
        </div>
        <div className='flex flex-col items-start gap-1'>
          <Typography variant='h5'>Mastercard</Typography>
          <Typography>Card Number: ******4291</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default BillingAddress
