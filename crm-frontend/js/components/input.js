// Создаем форму с поиском
export function getInputSearch() {
  const form = document.createElement('form')
  form.classList.add('form')

  // создаем input
  const input = document.createElement('input')
  input.classList.add('input-search')
  Object.assign(input, {
    type: 'text',
    name: 'input-search',
    id: 'search',
    placeholder: 'Введите запрос'
  })


  form.append(input)

  return form

}
