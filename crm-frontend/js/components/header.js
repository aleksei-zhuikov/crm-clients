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

  // создаем input
  const input = document.createElement('input')
  input.classList.add('input-search')
  Object.assign(input, {
    type: 'text',
    name: 'input-search',
    id: 'search',
    placeholder: 'Введите запрос'
  })

  container.append(img, input)

  header.append(container)
  return header
}
