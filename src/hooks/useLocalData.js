import { useState, useEffect } from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api/'
})

const useLocalData = ({ url }) => {
  const [ data, setData ] = useState()

  useEffect(() => {
    instance.get(url)
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [url])

  return { data }
}
export default useLocalData
