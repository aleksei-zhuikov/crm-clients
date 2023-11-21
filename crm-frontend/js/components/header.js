import { getInputSearch } from "./input.js"

// Создаем шапку
export function getHeader() {
  const header = document.createElement('header')
  header.classList.add('header')

  const container = document.createElement('div')
  container.classList.add('container', 'header__container')

  //создаем logo
  const img = document.createElement('img')
  img.classList.add('logo')
  img.src = './assets/logo.svg'
  img.alt = 'logo'

  const form = getInputSearch()



  container.append(img, form)

  header.append(container)
  return header
}
