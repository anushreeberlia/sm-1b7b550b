import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  console.log('POST /api/book-test-drive - Test drive booking request received')
  
  try {
    const data = await request.json()
    console.log('Booking data:', { ...data, phone: data.phone?.substring(0, 4) + '****' })
    
    // Ensure data directory exists
    const dataDir = '/data'
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir, { recursive: true })
      console.log('Created data directory')
    }
    
    // Load existing bookings
    const filePath = path.join(dataDir, '/data/test-drive-bookings.json')
    let bookings = []
    
    try {
      const fileData = await fs.readFile(filePath, 'utf-8')
      bookings = JSON.parse(fileData)
    } catch (error) {
      console.log('Creating new bookings file')
    }
    
    // Add new booking with timestamp and ID
    const newBooking = {
      id: Date.now().toString(),
      ...data,
      timestamp: new Date().toISOString(),
      status: 'pending'
    }
    
    bookings.push(newBooking)
    
    // Save to file
    await fs.writeFile(filePath, JSON.stringify(bookings, null, 2))
    console.log('Test drive booking saved successfully:', newBooking.id)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test drive booking received successfully',
      bookingId: newBooking.id
    })
  } catch (error) {
    console.error('Error processing test drive booking:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    )
  }
}