import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

import { db as tripsDb } from '../../../../fake-db/apps/trips.js'
import CustomAvatar from '@core/components/mui/Avatar'

const TripLeftOverview = ({ trip }) => {
    const t = trip || tripsDb.trips[0]
    const durationHours = ((new Date(t.endTime) - new Date(t.startTime)) / 1000 / 60 / 60).toFixed(1)


    return (
        <Card>
            <CardContent className='flex flex-col gap-6'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <Typography variant='h5'>Trip #{t.id}</Typography>
                    <Chip label={t.status} variant='tonal' color={t.status === 'active' ? 'success' : t.status === 'completed' ? 'primary' : 'default'} size='small' />
                </div>
                {/* Quick Stats Row */}
                <div className='flex items-center justify-around flex-wrap gap-4'>
                    <div className='flex flex-col items-center'>
                        <Typography variant='h6'>{t.distanceKm}</Typography>
                        <Typography variant='caption' color='text.secondary'>km</Typography>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Typography variant='h6'>{durationHours}</Typography>
                        <Typography variant='caption' color='text.secondary'>hours</Typography>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Typography variant='h6'>{t.stops.length}</Typography>
                        <Typography variant='caption' color='text.secondary'>stops</Typography>
                    </div>
                </div>
                <div>
                    <Typography variant='h5'>Details</Typography>
                    <Divider className='mlb-4' />
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Start:</Typography>
                            <Typography>{t.startLocation}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>End:</Typography>
                            <Typography>{t.endLocation}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Driver:</Typography>
                            <Typography>{t.driver}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Vehicle:</Typography>
                            <Typography>{t.vehicle}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Start Time:</Typography>
                            <Typography>{new Date(t.startTime).toLocaleString()}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>End Time:</Typography>
                            <Typography>{new Date(t.endTime).toLocaleString()}</Typography>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 justify-center'>
                    <Button variant='contained' color='primary'>Edit</Button>
                    <Button variant='outlined' color='error'>Remove</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default TripLeftOverview 
