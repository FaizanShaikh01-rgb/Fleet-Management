'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    },
    '& .MuiTimelineContent-root:last-child': {
      paddingBottom: 0
    },
    '&:nth-last-child(2) .MuiTimelineConnector-root': {
      backgroundColor: 'transparent',
      borderInlineStart: '1px dashed var(--mui-palette-divider)'
    },
    '& .MuiTimelineConnector-root': {
      backgroundColor: 'var(--mui-palette-primary-main)'
    }
  }
})

const ShippingActivity = ({ order }) => {
  // Mocked fleet management events
  const events = [
    {
      label: 'Order Created',
      time: '2024-07-01 08:00',
      desc: `Order #${order} created in system`,
      location: 'Paris, France'
    },
    {
      label: 'Loaded on Vehicle',
      time: '2024-07-01 09:00',
      desc: 'Cargo loaded onto vehicle XYZ-5678',
      location: 'Paris, France'
    },
    {
      label: 'Departed Origin',
      time: '2024-07-01 09:30',
      desc: 'Vehicle departed origin',
      location: 'Paris, France'
    },
    {
      label: 'Arrived at Stop',
      time: '2024-07-01 14:00',
      desc: 'Arrived at Hamburg, Germany for partial delivery',
      location: 'Hamburg, Germany'
    },
    {
      label: 'Delivered',
      time: '2024-07-02 16:00',
      desc: 'Cargo delivered to final destination',
      location: 'Amsterdam, Netherlands'
    }
  ]

  return (
    <Card>
      <CardHeader title='Fleet Activity Timeline' />
      <CardContent>
        <Timeline>
          {events.map((event, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                {idx < events.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                  <Typography color='text.primary' className='font-medium'>
                    {event.label}
                  </Typography>
                  <Typography variant='caption'>{event.time}</Typography>
                </div>
                <Typography className='mbe-1'>{event.desc}</Typography>
                <Typography variant='caption' color='text.secondary'>Location: {event.location}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ShippingActivity
