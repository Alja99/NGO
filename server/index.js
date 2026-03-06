const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// simple health check
app.get('/', (req, res) => {
  res.send('NGO server running')
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Mock mode for testing (no actual email sending)
    if (process.env.MOCK_EMAIL === 'true') {
      console.log('MOCK MODE: Contact message received')
      console.log(`From: ${name} (${email})`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      return res.json({ success: true, mock: true })
    }

    // configure transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || 'contact@risinghopeglobal.org',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true })
  } catch (err) {
    console.error('Error sending email:', err.message || err)
    res.status(500).json({ error: 'Failed to send message', details: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})