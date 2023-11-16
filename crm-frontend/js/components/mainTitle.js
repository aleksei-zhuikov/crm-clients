export function getMainTitle(title) {
  const titleEl = document.createElement('h1')
  titleEl.classList.add('title')
  titleEl.innerHTML = `${title}`

  return titleEl
}
