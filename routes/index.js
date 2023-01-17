var express = require('express')
var router = express.Router()
const path = require('path')
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('request.qurey()', req.query)
  res.render('index', { title: 'Express' })
})

router.post('/submit', function (req, res) {
  console.log(req.body.senderName, req.body.msg)
  let content = `Sender Name: ${req.body.senderName} , Message: ${req.body.msg}`

  fs.writeFile(
    path.join(__dirname, '../serveData.txt'),
    content,
    function (err) {
      if (err) {
        console.log('error occured')
        return
      }
      // res.send('submitted successfully')
      res.render('submitted')
    }
  )
})

module.exports = router
