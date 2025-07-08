// MUI Imports
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Fleet management status chips
const fleetStatus = {
  in_transit: { text: 'In Transit', color: 'primary' },
  delivered: { text: 'Delivered', color: 'success' },
  pending: { text: 'Pending Dispatch', color: 'warning' },
  cancelled: { text: 'Cancelled', color: 'secondary' }
}

const OrderDetailHeader = ({ orderData, order }) => {
  // Mock fleet data for demonstration
  const assignedTrip = 2
  const vehicle = 'XYZ-5678'
  const status = 'in_transit' // could be in_transit, delivered, pending, cancelled

  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <div className='flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4'>
      <div className='flex flex-col items-start gap-1'>
        <div className='flex items-center gap-2'>
          <Typography variant='h5'>{`Order #${order}`}</Typography>
          <Chip
            variant='tonal'
            label={`Trip #${assignedTrip}`}
            color='info'
            size='small'
          />
          <Chip
            variant='tonal'
            label={`Vehicle: ${vehicle}`}
            color='default'
            size='small'
          />
          <Chip
            variant='tonal'
            label={fleetStatus[status].text}
            color={fleetStatus[status].color}
            size='small'
          />
        </div>
        <Typography>{`Last updated: ${new Date().toLocaleString()}`}</Typography>
      </div>
      <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps('Delete Order', 'error', 'outlined')}
        dialog={ConfirmationDialog}
        dialogProps={{ type: 'delete-order' }}
      />
    </div>
  )
}

export default OrderDetailHeader
