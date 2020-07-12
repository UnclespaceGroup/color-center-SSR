import useLocalData from 'hooks/useLocalData'

const usePageHome = () => {
  const { data: usingMdf } = useLocalData({ url: 'home/usingMdf.json' })
  const { data: advantages } = useLocalData({ url: 'home/advantagesList.json' })
  const { data: products } = useLocalData({ url: 'home/products.json' })
  const { data: { guarantee, delivery, mainBanner } = {} } = useLocalData({ url: 'home/bannersList.json' })

  return {
    usingMdf,
    advantages,
    products,
    guarantee,
    delivery,
    mainBanner
  }
}
export default usePageHome
