import { getMainTitle } from "./mainTitle.js"

export function getPageContainer() {
  const main = document.createElement('main')
  main.classList.add('main', 'container')

  const title = getMainTitle('Клиенты')

  main.append(title)

  return main
}
