'use client'
import { useParams, useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid'

export default function VehicleDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const vehicle = router?.location?.state || router?.state

    if (!vehicle) return <div>No vehicle data found. Please navigate from the list page.</div>

    return (
        <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
                <h2>Vehicle Details: {vehicle.licensePlate}</h2>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12 }}>
                        <div>
                            <strong>Make:</strong> {vehicle.make}<br />
                            <strong>Model:</strong> {vehicle.model}<br />
                            <strong>Year:</strong> {vehicle.year}<br />
                            <strong>Type:</strong> {vehicle.type}<br />
                            <strong>Status:</strong> {vehicle.status}<br />
                            <strong>Location:</strong> {vehicle.location}<br />
                            <strong>Driver:</strong> {vehicle.driver}<br />
                            <strong>Last Service Date:</strong> {vehicle.lastServiceDate}<br />
                            <strong>Warnings:</strong> {vehicle.warnings}<br />
                            <strong>Progress:</strong> {vehicle.progress}%
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12 }}>
                        <div>
                            <strong>Vehicle ID:</strong> {vehicle.id}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
} 
