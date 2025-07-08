import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

import { db as tripsDb } from '../../../../fake-db/apps/trips.js'

const VehicleRight = ({ vehicle: propVehicle }) => {
    // Dummy fallback if no prop
    const vehicle = propVehicle || {
        licensePlate: 'ABC-1234',
        insurance: 'Valid until 2025-01-01',
        registration: 'Valid',
        features: ['GPS Tracking', 'Remote Diagnostics', '24/7 Support'],
    }

    // Show the first trip in the dummy data
    const activeTrip = tripsDb.trips[0]

    return (
        <Card className='border-2 border-primary rounded'>
            <CardContent className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <i className='ri-shield-check-line text-[16px] text-success' />
                        <Typography component='span'>Insurance: {vehicle.insurance}</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='ri-file-check-line text-[16px] text-primary' />
                        <Typography component='span'>Registration: {vehicle.registration}</Typography>
                    </div>
                </div>
                {/* Active Trip Section */}
                <div className='flex flex-col gap-2'>
                    <Typography variant='h6' color='text.primary' fontWeight='bold'>Active Trip</Typography>
                    {activeTrip ? (
                        <>
                            <div className='flex items-center gap-2'>
                                <i className='ri-map-pin-line text-[16px] text-info' />
                                <Typography component='span'>Destination: {activeTrip.endLocation}</Typography>
                            </div>
                            <div className='flex items-center gap-2'>
                                <i className='ri-calendar-line text-[16px] text-warning' />
                                <Typography component='span'>Start: {new Date(activeTrip.startTime).toLocaleString()}</Typography>
                            </div>
                            {/* Show stops if any */}
                            {activeTrip.stops && activeTrip.stops.length > 0 && (
                                <div className='flex flex-col gap-1 ml-6'>
                                    <Typography variant='body2' color='text.primary'>Stops:</Typography>
                                    {activeTrip.stops.map((stop, idx) => (
                                        <div key={idx} className='flex items-center gap-2'>
                                            <i className='ri-map-pin-2-line text-[14px] text-info' />
                                            <Typography component='span'>{stop}</Typography>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className='flex items-center gap-2'>
                                <i className='ri-road-map-line text-[16px] text-secondary' />
                                <Typography component='span'>Distance: {activeTrip.distanceKm} km</Typography>
                            </div>
                            {activeTrip.notes && (
                                <div className='flex items-center gap-2'>
                                    <i className='ri-information-line text-[16px] text-primary' />
                                    <Typography component='span'>{activeTrip.notes}</Typography>
                                </div>
                            )}
                            <div className='flex items-center gap-2'>
                                <i className='ri-timer-flash-line text-[16px] text-success' />
                                <Chip label={activeTrip.status} size='small' color='success' variant='tonal' />
                            </div>
                        </>
                    ) : (
                        <Typography variant='body2' color='text.secondary'>No active trip</Typography>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography variant='h6' color='text.primary' fontWeight='bold'>Features</Typography>
                    <div className='flex flex-wrap gap-2'>
                        {(vehicle.features || []).map((feature, idx) => (
                            <Chip key={idx} label={feature} size='small' variant='outlined' color='primary' />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Chip label='Production Ready' color='success' variant='tonal' size='small' />
                    <Typography variant='caption' color='text.secondary'>This vehicle is ready for deployment and meets all operational requirements.</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default VehicleRight 
