export const scrollTo = (id) => {
  if (typeof window === 'undefined' || !id) {
    return null
  }
  const element = document.getElementById(id)
  const bodyRect = document.body.getBoundingClientRect()
  const rect = element.getBoundingClientRect()
  const offset = rect.top - bodyRect.top
  window.scrollTo({
    top: offset - 100,
    behavior: 'smooth'
  })
}
