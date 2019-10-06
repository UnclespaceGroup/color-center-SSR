const httpProxy = require('http-proxy')
const crypto = require('crypto')
const pako = require('pako')
const axios = require('axios')
const bodyParser = require('body-parser')

var nodemailer = require('nodemailer')

const passwd = 'vanya8'
const userEmail = 'dmitrachkovivan@yandex.ru'

const urlencodedParser = bodyParser.urlencoded({ extended: false })

var transport = {
  host: 'smtp.yandex.ru',
  port: 465,
  auth: {
    user: userEmail,
    pass: passwd
  },
  secure: true
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

module.exports = (app) => {
  const proxy = httpProxy.createProxyServer()
  app.disable('x-powered-by')
  proxy.on('error', (err, req, res) => {
    console.log('Error', err.message)
    res.end()
  })

  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  // add proxy like this
  app.post('/send/', urlencodedParser, (req, res) => {
    console.log('req', req.body)
    if (!req.body || !req.body.message) {
      console.log('message is null')
      return
    }
    var name = userEmail // req.body.name || 'name'
    var email = 'dmitrachkovivan@gmail.com'
    var message = req.body.message
    var title = req.body.title
    var UserData = req.body.user

    var mail = {
      from: name,
      to: email,
      subject: title,
      text: message + UserData
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err)
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'OK'
        })
      }
    })
  })
}

const encodeXml = (xml, key) => {
  const compressed = pako.gzip(xml, { level: 5 })
  const ctr = crypto.createCipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
  return ctr.update(compressed, 'binary', 'base64') + ctr.final('base64')
}

const decodeXml = (encodedXml, key) => {
  const dctr = crypto.createDecipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
  const compressed = dctr.update(encodedXml, 'base64', 'binary') + dctr.final('binary')
  return pako.ungzip(compressed, { to: 'string' })
}

const createRequest = (xml, username, password) => {
  const nonce = crypto.randomBytes(16).toString('hex')
  const created = new Date().toISOString().replace(/\.\d\d\dZ$/, 'Z')

  const shaPassword = crypto.createHash('sha1').update(nonce + created + password).digest('hex')
  const base64Password = Buffer.from(shaPassword).toString('base64')
  const base64Nonce = Buffer.from(nonce).toString('base64')

  return `
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
xmlns:ns6="http://www.samo.ru/xml" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
<SOAP-ENV:Header>
<wsse:Security SOAP-ENV:actor="http://schemas.xmlsoap.org/soap/actor/next" SOAP-ENV:mustUnderstand="0">
<wsse:UsernameToken>
<wsse:Username>${username}</wsse:Username>
<wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wssusername-token-profile-1.0#PasswordDigest">${base64Password}</wsse:Password>
<wsse:Nonce>${base64Nonce}</wsse:Nonce>
<wsse:Created>${created}</wsse:Created>
</wsse:UsernameToken>
</wsse:Security>
<ns6:agentinfo SOAP-ENV:actor="http://schemas.xmlsoap.org/soap/actor/next" SOAP-ENV:mustUnderstand="0">
<version>3.0</version>
</ns6:agentinfo>
</SOAP-ENV:Header>
  <SOAP-ENV:Body>
  <ns6:WORK>
  <data xsi:type="xsd:string">${encodeXml(xml, password)}</data>
  </ns6:WORK>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`.trim()
}
