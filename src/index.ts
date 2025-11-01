import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
   <!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <title>Nono Pain Chaud</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Hello world</h1>
    <p>Ce fut mon premier pas dans cet univers. Appelé "niveau 0" par certains, je l'appelle "le pont". C'est devenu ma passion. Mais s'il faut revenir au début... Je sais ! Mais pas toi (cheh)</p>
    <script src="script.js"></script>
  </body>
</html>
  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
