const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('./dist'))

app.listen(PORT, function () {
 console.log(`My app is listening on port ${PORT}!`)
})

app.get('/', function (req, res) {
 res.send(__dirname + 'index.html')
})

// app.get('*', (req, res) => {
//  res.sendFile(`${__dirname}/dist/index.html`)
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })
