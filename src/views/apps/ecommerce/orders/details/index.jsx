'use client'
import { useEffect, useState } from 'react'


// MUI Imports
import Grid from '@mui/material/Grid2'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

// Component Imports
import OrderDetailHeader from './OrderDetailHeader'
import OrderDetailsCard from './OrderDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import ShippingAddress from './ShippingAddressCard'
import BillingAddress from './BillingAddressCard'
import { db as tripDb } from '@/fake-db/apps/trips'
import { db as logisticsDb } from '@/fake-db/apps/logistics'

const OrderDetails = ({ orderData, order }) => {
  // State for popup dialog
  const [open, setOpen] = useState(false)
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [assigning, setAssigning] = useState(false)
  const [assignedTrip, setAssignedTrip] = useState(null)

  // Merge trip and vehicle data, filter only active trips
  const trips = tripDb.trips
    .filter(trip => trip.status === 'active')
    .map(trip => {
      const vehicle = logisticsDb.vehicles.find(v => v.licensePlate === trip.vehicle)


      return {
        ...trip,
        vehicleInfo: vehicle || {}
      }
    })

  useEffect(() => {
    setOpen(true)
  }, [])

  const handleAssign = () => {
    setAssigning(true)
    setTimeout(() => {
      setAssignedTrip(selectedTrip)
      setAssigning(false)
      setOpen(false)
    }, 1000)
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogContent>
          <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Assign Order to a Trip
          </Typography>
          <Typography gutterBottom align="center" sx={{ color: 'text.secondary', mb: 3 }}>
            Select an <b>active trip</b> to assign this order. Each card shows trip, vehicle, and available space details.
          </Typography>
          <Grid container spacing={3}>
            {trips.length === 0 && (
              <Grid item xs={12}>
                <Typography align="center" color="error">No active trips available.</Typography>
              </Grid>
            )}
            {trips.map(trip => (
              <Grid item xs={12} sm={6} md={4} key={trip.id}>
                <Card
                  variant={selectedTrip === trip.id ? 'outlined' : 'elevation'}
                  sx={{
                    borderColor: selectedTrip === trip.id ? 'primary.main' : 'divider',
                    boxShadow: selectedTrip === trip.id ? 4 : 1,
                    transition: 'box-shadow 0.2s',
                    cursor: 'pointer',
                    '&:hover': { boxShadow: 6, borderColor: 'primary.light' },
                    position: 'relative',
                    p: 2,
                    minHeight: 260,
                    height: 260,
                    width: '100%',
                    maxWidth: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    mx: 'auto',
                  }}
                  onClick={() => setSelectedTrip(trip.id)}
                >
                  {/* Radio button at top left */}
                  <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }} onClick={e => e.stopPropagation()}>
                    <input
                      type="radio"
                      name="trip"
                      value={trip.id}
                      checked={selectedTrip === trip.id}
                      onChange={() => setSelectedTrip(trip.id)}
                      style={{ accentColor: '#1976d2', marginRight: 0, width: 20, height: 20 }}
                    />
                  </div>
                  <div style={{ marginLeft: 0, marginTop: 8, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 0.5 }}>
                      Trip #{trip.id} - {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      <b>Vehicle:</b> {trip.vehicle} ({trip.vehicleInfo.make || 'Unknown'} {trip.vehicleInfo.model || ''}, {trip.vehicleInfo.type || 'Unknown'})
                    </Typography>
                    <Typography variant="body2"><b>Driver:</b> {trip.driver}</Typography>
                    <Typography variant="body2"><b>From:</b> {trip.startLocation} → <b>To:</b> {trip.endLocation}</Typography>
                    <Typography variant="body2"><b>Stops:</b> {trip.stops.length > 0 ? trip.stops.join(', ') : 'None'}</Typography>
                    <Typography variant="body2"><b>Start:</b> {new Date(trip.startTime).toLocaleString()}</Typography>
                    <Typography variant="body2"><b>End:</b> {new Date(trip.endTime).toLocaleString()}</Typography>
                    <Typography variant="body2"><b>Distance:</b> {trip.distanceKm} km</Typography>
                    <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 500 }}>
                      <b>Available Space:</b> {trip.vehicleInfo.progress !== undefined ? (100 - trip.vehicleInfo.progress) + '%' : 'Unknown'}
                    </Typography>
                    {trip.notes && (
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                        {trip.notes}
                      </Typography>
                    )}
                  </div>
                  {selectedTrip === trip.id && (
                    <span style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      color: '#1976d2',
                      fontWeight: 700,
                      fontSize: 18
                    }}>
                      ✓
                    </span>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button onClick={() => setOpen(false)} color="secondary" variant="outlined" disabled={assigning}>
            Cancel
          </Button>
          <Button onClick={handleAssign} color="primary" variant="contained" disabled={!selectedTrip || assigning} sx={{ minWidth: 180 }}>
            {assigning ? 'Assigning...' : 'Assign to Selected Trip'}
          </Button>
        </DialogActions>
      </Dialog>
      {assignedTrip && (
        <Dialog open={true} onClose={() => setAssignedTrip(null)}>
          <DialogContent>
            <Typography variant="h6">Order Assigned</Typography>
            <Typography>The order has been assigned to Trip #{assignedTrip}.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAssignedTrip(null)} color="primary" variant="contained">OK</Button>
          </DialogActions>
        </Dialog>
      )}
      <Grid container spacing={6}>
        <Grid size={{ xs: 12 }}>
          <OrderDetailHeader orderData={orderData} order={order} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <OrderDetailsCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <ShippingActivity order={order} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <CustomerDetails orderData={orderData} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <ShippingAddress />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <BillingAddress />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default OrderDetails
