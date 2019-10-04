import axios from 'axios'

export default function sendMail ({ email, name, message }) {
  axios.post({
    url: 'http://localhost:8060/send/',
    data: {
      name: name,
      email: email,
      message: message
    }
  }).then((response) => {
    if (response.data.msg === 'success') {
      alert('Message Sent.')
    } else if (response.data.msg === 'fail') {
      alert('Message failed to send.')
    }
  })
}
