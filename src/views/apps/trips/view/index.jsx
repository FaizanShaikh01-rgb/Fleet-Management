import Grid from '@mui/material/Grid'

import TripLeftOverview from '../view/TripLeftOverview'
import TripRight from './TripRight'

const TripDetails = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
                <TripLeftOverview />
            </Grid>
            <Grid item xs={12} md={8}>
                <TripRight />
            </Grid>
        </Grid>
    )
}

export default TripDetails 
