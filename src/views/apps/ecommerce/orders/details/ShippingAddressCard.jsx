// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Component Imports
import AddAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Vars
const data = {
  firstName: 'Warehouse',
  lastName: 'Riyadh',
  email: 'warehouse@acme.com',
  country: 'Saudi Arabia',
  address1: '123 King Fahd Road',
  address2: 'Riyadh 12271',
  landmark: 'Near Kingdom Centre',
  city: 'Riyadh',
  state: 'Riyadh',
  zipCode: '12271',
  taxId: 'KSA-123456',
  vatNumber: 'KSA-VAT-987654',
  contact: '+966 11 123 4567'
}

const ShippingAddress = () => {
  // Vars
  const typographyProps = (children, color, className) => ({
    children,
    color,
    className
  })

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          <Typography variant='h5'>Shipping Address</Typography>
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
      </CardContent>
    </Card>
  )
}

export default ShippingAddress
