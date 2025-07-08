export const db = {
  trips: [
    {
      id: 1,
      vehicle: 'ABC-1234',
      driver: 'Fahad Al Saud',
      startLocation: 'Riyadh, Saudi Arabia',
      stops: ['Buraydah, Saudi Arabia', 'Hail, Saudi Arabia'],
      endLocation: 'Tabuk, Saudi Arabia',
      startTime: '2024-07-01T08:00:00',
      endTime: '2024-07-01T20:00:00',
      status: 'active',
      distanceKm: 1290,
      notes: 'Multi-stop delivery route'
    },
    {
      id: 2,
      vehicle: 'XYZ-5678',
      driver: 'Aisha Al Harbi',
      startLocation: 'Jeddah, Saudi Arabia',
      stops: ['Mecca, Saudi Arabia'],
      endLocation: 'Medina, Saudi Arabia',
      startTime: '2024-07-02T09:00:00',
      endTime: '2024-07-02T18:30:00',
      status: 'completed',
      distanceKm: 420,
      notes: 'Delivered on time'
    },
    {
      id: 3,
      vehicle: 'JKL-9101',
      driver: 'Salman Al Qahtani',
      startLocation: 'Dammam, Saudi Arabia',
      stops: [],
      endLocation: 'Al Khobar, Saudi Arabia',
      startTime: '2024-07-03T07:30:00',
      endTime: '2024-07-03T11:00:00',
      status: 'cancelled',
      distanceKm: 25,
      notes: 'Trip cancelled due to maintenance'
    },
    {
      id: 4,
      vehicle: 'MNO-2345',
      driver: 'Noura Al Zahrani',
      startLocation: 'Abha, Saudi Arabia',
      stops: ['Khamis Mushait, Saudi Arabia'],
      endLocation: 'Jazan, Saudi Arabia',
      startTime: '2024-07-04T10:00:00',
      endTime: '2024-07-04T22:00:00',
      status: 'active',
      distanceKm: 220,
      notes: ''
    },
    {
      id: 5,
      vehicle: 'PQR-6789',
      driver: 'Abdullah Al Dossary',
      startLocation: 'Najran, Saudi Arabia',
      stops: ['Bisha, Saudi Arabia'],
      endLocation: 'Jeddah, Saudi Arabia',
      startTime: '2024-07-05T07:00:00',
      endTime: '2024-07-05T19:00:00',
      status: 'active',
      distanceKm: 950,
      notes: 'Long haul with one stop'
    },
    {
      id: 6,
      vehicle: 'STU-3456',
      driver: 'Yousef Al Shammari',
      startLocation: 'Hail, Saudi Arabia',
      stops: ['Buraydah, Saudi Arabia', 'Riyadh, Saudi Arabia'],
      endLocation: 'Dammam, Saudi Arabia',
      startTime: '2024-07-06T08:30:00',
      endTime: '2024-07-06T21:00:00',
      status: 'completed',
      distanceKm: 1200,
      notes: 'Multi-city delivery route'
    },
    {
      id: 7,
      vehicle: 'VWX-7890',
      driver: 'Fatimah Al Ghamdi',
      startLocation: 'Jazan, Saudi Arabia',
      stops: ['Abha, Saudi Arabia'],
      endLocation: 'Mecca, Saudi Arabia',
      startTime: '2024-07-07T09:00:00',
      endTime: '2024-07-07T18:00:00',
      status: 'maintenance',
      distanceKm: 700,
      notes: 'Vehicle scheduled for maintenance after trip'
    },
    {
      id: 8,
      vehicle: 'YZA-1235',
      driver: 'Saad Al Mutairi',
      startLocation: 'Medina, Saudi Arabia',
      stops: ['Yanbu, Saudi Arabia'],
      endLocation: 'Tabuk, Saudi Arabia',
      startTime: '2024-07-08T06:00:00',
      endTime: '2024-07-08T16:00:00',
      status: 'active',
      distanceKm: 850,
      notes: 'Direct delivery with one stop'
    }
  ]
}
