import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

import { db as tripsDb } from '../../../../fake-db/apps/trips.js'
import TripActivityTimeline from './TripActivityTimeline'

const TripRight = ({ trip }) => {
    const t = trip || tripsDb.trips[0]


    // Dummy order data
    const order = {
        orderId: 'ORD-1001',
        customer: 'John Doe',
        amount: 1200,
        status: 'Paid'
    }


    return (
        <>
            <Card className='rounded'>
                <CardContent className='flex flex-col gap-6'>
                    {/* Assigned Vehicle Section */}
                    {/* <div className='flex flex-col gap-2'>
                        <Typography variant='subtitle2' color='text.primary'>Assigned Vehicle</Typography>
                        <div className='flex items-center gap-2'>
                            <i className='ri-truck-line text-[16px] text-primary' />
                            <Typography component='span'>Vehicle: {t.vehicle}</Typography>
                        </div>
                        <div className='flex items-center gap-2'>
                            <i className='ri-user-line text-[16px] text-info' />
                            <Typography component='span'>Driver: {t.driver}</Typography>
                        </div>
                    </div>
                    <Divider /> */}
                    {/* Order Details and Stops in same row */}
                    <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='flex-1 flex flex-col gap-2'>
                            <Typography variant='h6' color='text.primary' fontWeight='bold'>Order Details</Typography>
                            <div className='flex items-center gap-2'>
                                <i className='ri-hashtag text-[16px] text-secondary' />
                                <Typography component='span'>Order ID: {order.orderId}</Typography>
                            </div>
                            <div className='flex items-center gap-2'>
                                <i className='ri-user-3-line text-[16px] text-primary' />
                                <Typography component='span'>Customer: {order.customer}</Typography>
                            </div>
                            <div className='flex items-center gap-2'>
                                <i className='ri-money-dollar-circle-line text-[16px] text-success' />
                                <Typography component='span'>Amount: ${order.amount}</Typography>
                            </div>
                            {/* <div className='flex items-center gap-2'>
                                <Chip label={order.status} size='small' color={order.status === 'Paid' ? 'success' : 'warning'} variant='tonal' />
                            </div> */}
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <Typography variant='h6' color='text.primary' fontWeight='bold'>Stops</Typography>
                            {t.stops && t.stops.length > 0 ? (
                                <div className='flex flex-col gap-1 ml-2'>
                                    {t.stops.map((stop, idx) => (
                                        <div key={idx} className='flex items-center gap-2'>
                                            <i className='ri-map-pin-2-line text-[14px] text-info' />
                                            <Typography component='span'>{stop}</Typography>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Typography variant='body2' color='text.secondary'>No stops</Typography>
                            )}
                        </div>
                    </div>
                    <Divider />
                    {/* Notes Section */}
                    <div className='flex flex-col gap-2'>
                        <Typography variant='h6' color='text.primary' fontWeight='bold'>Notes</Typography>
                        <Typography variant='body2'>{t.notes || 'No notes'}</Typography>
                    </div>
                    {/* <div className='flex flex-col gap-2'>
                        <Chip label={t.status === 'active' ? 'In Progress' : t.status === 'completed' ? 'Completed' : 'Other'} color={t.status === 'active' ? 'success' : t.status === 'completed' ? 'primary' : 'default'} variant='tonal' size='small' />
                        <Typography variant='caption' color='text.secondary'>Trip status: {t.status}</Typography>
                    </div> */}
                </CardContent>
            </Card>
            {/* Trip Activity Timeline as separate container */}
            <div className='mt-6'>
                <TripActivityTimeline />
            </div>
        </>
    )
}

export default TripRight 
