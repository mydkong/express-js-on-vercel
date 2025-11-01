import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'components', 'index.html'))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'favicon.ico'))
})


// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
