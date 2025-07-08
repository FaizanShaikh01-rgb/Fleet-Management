import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'

import CustomAvatar from '@core/components/mui/Avatar'

const VehicleLeftOverview = ({ vehicle }) => {
    // Vars
    const buttonProps = (children, color, variant) => ({
        children,
        color,
        variant
    })

    return (
        <Card>
            <CardContent className='flex flex-col pbs-12 gap-6'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center justify-around flex-wrap gap-4'>
                        <div className='flex items-center gap-4'>
                            <CustomAvatar variant='rounded' color='primary' skin='light'>
                                <i className='ri-user-line' />
                            </CustomAvatar>
                            <div>
                                <Typography variant='h5'>{vehicle.driver}</Typography>
                                <Typography>Driver</Typography>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <CustomAvatar variant='rounded' color='primary' skin='light'>
                                <i className='ri-calendar-2-line' />
                            </CustomAvatar>
                            <div>
                                <Typography variant='h5'>{vehicle.year}</Typography>
                                <Typography>Year</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant='h5'>Details</Typography>
                    <Divider className='mlb-4' />
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Make:</Typography>
                            <Typography>{vehicle.make}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Model:</Typography>
                            <Typography>{vehicle.model}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Type:</Typography>
                            <Typography>{vehicle.type}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Location:</Typography>
                            <Typography>{vehicle.location}</Typography>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-1.5'>
                            <Typography color='text.primary' className='font-medium'>Last Service:</Typography>
                            <Typography>{vehicle.lastServiceDate}</Typography>
                        </div>
                        {vehicle.warnings && vehicle.warnings !== '' && (
                            <div className='flex items-center flex-wrap gap-x-1.5'>
                                <Typography color='text.primary' className='font-medium'>Warnings:</Typography>
                                <Typography color='error'>{vehicle.warnings}</Typography>
                            </div>
                        )}
                        {vehicle.progress && vehicle.progress > 0 && (
                            <div className='flex items-center flex-wrap gap-x-1.5 w-full'>
                                <Typography color='text.primary' className='font-medium' style={{ minWidth: 80 }}>Progress:</Typography>
                                <div className='flex-1 flex items-center gap-2'>
                                    <LinearProgress variant='determinate' value={vehicle.progress} sx={{ flex: 1, height: 8, borderRadius: 4 }} />
                                    <Typography variant='body2' color='text.secondary'>{vehicle.progress}%</Typography>
                                </div>
                            </div>
                        )}
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

export default VehicleLeftOverview 
