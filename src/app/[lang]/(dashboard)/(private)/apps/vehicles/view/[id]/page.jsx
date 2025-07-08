'use client'
import Grid from '@mui/material/Grid'

import VehicleLeftOverview from '@views/apps/vehicles/details/VehicleLeftOverview'
import VehicleRight from '@views/apps/vehicles/details/VehicleRight'

const dummyVehicle = {
    id: 1,
    licensePlate: 'DUMMY-123',
    make: 'DemoMake',
    model: 'DemoModel',
    year: 2022,
    type: 'SUV',
    status: 'Active',
    location: 'Demo City',
    driver: 'Jane Doe',
    lastServiceDate: '2024-01-01',
    warnings: 'None',
    progress: 100
}

export default function VehicleDetailsPage() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
                <VehicleLeftOverview vehicle={dummyVehicle} />
            </Grid>
            <Grid item xs={12} md={8}>
                <VehicleRight vehicle={dummyVehicle} />
            </Grid>
        </Grid>
    )
} 
