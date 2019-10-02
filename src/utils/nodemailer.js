import axios from 'axios'

export default function () {
  const name = 'dsfsdf'
  const email = 'dsvllv'
  const message = 'fnsdjnf'
  axios.post({
    url: 'http://localhost:8060/send',
    data: {
      name: name,
      email: email,
      messsage: message
    }
  }).then((response) => {
    if (response.data.msg === 'success') {
      alert('Message Sent.')
      this.resetForm()
    } else if (response.data.msg === 'fail') {
      alert('Message failed to send.')
    }
  })
}
