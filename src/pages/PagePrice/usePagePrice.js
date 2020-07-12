import useLocalData from 'hooks/useLocalData'

const usePagePrice = () => {
  const { data } = useLocalData({ url: 'price/prices.json' })

  return {
    ...data
  }
}
export default usePagePrice
