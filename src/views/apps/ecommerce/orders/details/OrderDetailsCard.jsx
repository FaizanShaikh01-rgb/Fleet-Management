'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import Link from '@components/Link'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

// Replace orderData with cargo manifest for fleet management
const cargoManifest = [
  {
    description: 'Electronics - Laptops',
    weightKg: 120,
    volumeM3: 1.2,
    specialHandling: 'Fragile',
    origin: '123 King Fahd Road, Riyadh 12271, Saudi Arabia',
    destination: '456 Corniche Road, Jeddah 23412, Saudi Arabia'
  },
  {
    description: 'Furniture - Chairs',
    weightKg: 200,
    volumeM3: 3.5,
    specialHandling: 'None',
    origin: 'Warehouse 5, Dammam 32241, Saudi Arabia',
    destination: '789 Olaya Street, Riyadh 11564, Saudi Arabia'
  },
  {
    description: 'Medical Supplies',
    weightKg: 80,
    volumeM3: 0.8,
    specialHandling: 'Temperature Controlled',
    origin: 'Industrial Area, Jeddah 22425, Saudi Arabia',
    destination: 'King Khalid Hospital, Najran 66241, Saudi Arabia'
  }
]

// Column Definitions
const columnHelper = createColumnHelper()

const CargoTable = () => {
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState([...cargoManifest])

  const columns = useMemo(
    () => [
      columnHelper.accessor('description', {
        header: 'Cargo Description',
        cell: ({ row }) => (
          <Typography color='text.primary' className='font-medium'>
            {row.original.description}
          </Typography>
        )
      }),
      columnHelper.accessor('weightKg', {
        header: 'Weight (kg)',
        cell: ({ row }) => <Typography>{row.original.weightKg}</Typography>
      }),
      columnHelper.accessor('volumeM3', {
        header: 'Volume (m³)',
        cell: ({ row }) => <Typography>{row.original.volumeM3}</Typography>
      }),
      columnHelper.accessor('specialHandling', {
        header: 'Special Handling',
        cell: ({ row }) => <Typography>{row.original.specialHandling}</Typography>
      }),
      columnHelper.accessor('origin', {
        header: 'Origin',
        cell: ({ row }) => <Typography>{row.original.origin}</Typography>
      }),
      columnHelper.accessor('destination', {
        header: 'Destination',
        cell: ({ row }) => <Typography>{row.original.destination}</Typography>
      })
    ],
    []
  )

  const table = useReactTable({
    data: data,
    columns,
    state: { rowSelection },
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection
  })

  return (
    <div className='overflow-x-auto'>
      <table className={tableStyles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const OrderDetailsCard = () => {
  // Calculate totals
  const totalWeight = cargoManifest.reduce((sum, item) => sum + item.weightKg, 0)
  const totalVolume = cargoManifest.reduce((sum, item) => sum + item.volumeM3, 0)
  const estimatedDelivery = '2024-07-05 16:00' // Mocked for demo

  return (
    <Card>
      <CardHeader
        title='Cargo Manifest'
        action={
          <Typography component={Link} color='primary.main' className='font-medium'>
            Edit
          </Typography>
        }
      />
      <CargoTable />
      <CardContent className='flex flex-col items-end gap-2'>
        <div className='flex items-center gap-12'>
          <Typography color='text.primary' className='min-is-[120px]'>Total Weight:</Typography>
          <Typography color='text.primary' className='font-medium'>{totalWeight} kg</Typography>
        </div>
        <div className='flex items-center gap-12'>
          <Typography color='text.primary' className='min-is-[120px]'>Total Volume:</Typography>
          <Typography color='text.primary' className='font-medium'>{totalVolume} m³</Typography>
        </div>
        <div className='flex items-center gap-12'>
          <Typography color='text.primary' className='min-is-[120px]'>Estimated Delivery:</Typography>
          <Typography color='text.primary' className='font-medium'>{estimatedDelivery}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderDetailsCard
