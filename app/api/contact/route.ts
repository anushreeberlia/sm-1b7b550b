import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  console.log('POST /api/contact - Contact form submission received')
  
  try {
    const data = await request.json()
    console.log('Contact data:', { ...data, phone: data.phone?.substring(0, 4) + '****' })
    
    // Ensure data directory exists
    const dataDir = '/data'
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir, { recursive: true })
      console.log('Created data directory')
    }
    
    // Load existing messages
    const filePath = path.join(dataDir, '/data/contact-messages.json')
    let messages = []
    
    try {
      const fileData = await fs.readFile(filePath, 'utf-8')
      messages = JSON.parse(fileData)
    } catch (error) {
      console.log('Creating new messages file')
    }
    
    // Add new message with timestamp and ID
    const newMessage = {
      id: Date.now().toString(),
      ...data,
      timestamp: new Date().toISOString(),
      status: 'new'
    }
    
    messages.push(newMessage)
    
    // Save to file
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2))
    console.log('Contact message saved successfully:', newMessage.id)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully',
      messageId: newMessage.id
    })
  } catch (error) {
    console.error('Error processing contact message:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}