import useLocalData from 'hooks/useLocalData'

const usePageHome = () => {
  const { data: usingMdf } = useLocalData({ url: 'home/usingMdf.json' })
  const { data: advantages } = useLocalData({ url: 'home/advantagesList.json' })

  return {
    usingMdf,
    advantages
  }
}
export default usePageHome
