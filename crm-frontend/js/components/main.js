import { getMainTitle } from "./mainTitle.js"
import { getTable } from "./table.js"


export function getPageContainer() {
  const main = document.createElement('main')
  main.classList.add('main', 'container')

  const title = getMainTitle('Клиенты CRM')
  const table = getTable()

  main.append(title, table)

  return main
}
