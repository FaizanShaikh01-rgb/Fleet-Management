import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

const Timeline = styled(MuiTimeline)({
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiTimelineItem-root': {
        width: '100%',
        '&:before': {
            display: 'none'
        }
    }
})

const TripActivityTimeline = () => {
    return (
        <Card>
            <CardHeader title='Trip Activity Timeline' />
            <CardContent>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='primary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                                <Typography className='font-medium' color='text.primary'>
                                    Trip Assigned
                                </Typography>
                                <Typography variant='caption'>10 min ago</Typography>
                            </div>
                            <Typography className='mbe-2'>Assigned to Trip #1023 (Riyadh → Dammam)</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='success' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                                <Typography className='font-medium' color='text.primary'>
                                    Cargo Loaded
                                </Typography>
                                <Typography variant='caption'>30 min ago</Typography>
                            </div>
                            <Typography className='mbe-2'>Cargo loaded at Riyadh Distribution Hub</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='info' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                                <Typography className='font-medium' color='text.primary'>
                                    Departed from Hub
                                </Typography>
                                <Typography variant='caption'>1 hour ago</Typography>
                            </div>
                            <Typography className='mbe-2'>Vehicle departed for Dammam</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='warning' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                                <Typography className='font-medium' color='text.primary'>
                                    Arrived at Destination
                                </Typography>
                                <Typography variant='caption'>2 hours ago</Typography>
                            </div>
                            <Typography className='mbe-2'>Arrived at Dammam Delivery Center</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='success' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                                <Typography className='font-medium' color='text.primary'>
                                    Delivery Completed
                                </Typography>
                                <Typography variant='caption'>2 hours ago</Typography>
                            </div>
                            <Typography className='mbe-2'>Cargo delivered to consignee</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardContent>
        </Card>
    )
}

export default TripActivityTimeline 
