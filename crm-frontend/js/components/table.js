// Создаем таблице клиентов
export function getTable() {
  const tableWrapper = document.createElement('div')
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  const tbody = document.createElement('tbody')


  // Создаем ячейки-заголовки
  const thID = document.createElement('th')
  const thFIO = document.createElement('th')
  const thDataCreate = document.createElement('th')
  const thLastChange = document.createElement('th')
  const thContacts = document.createElement('th')
  const thActions = document.createElement('th')

  thID.append(createContentTH('ID', 'arrow.svg'))
  thFIO.append(createContentTH('Фамилия Имя Отчество', 'arrow.svg', 'А-Я'))
  thDataCreate.append(createContentTH('Дата и время создания', 'arrow.svg'))
  thLastChange.append(createContentTH('Последние изменения', 'arrow.svg'))
  thContacts.append(createContentTH('Контакты'))
  thActions.append(createContentTH('Действия'))

  tableWrapper.classList.add('tableWrapper')
  tbody.setAttribute('id', 'clients-list')

  tr.append(thID, thFIO, thDataCreate, thLastChange, thContacts, thActions)
  thead.append(tr)
  table.append(thead, tbody)
  tableWrapper.append(table)

  return tableWrapper
}


// Вспомогающая функция по созданию контента в TH
function createContentTH(text = '', name_svg, text2 = '') {

  const path = './assets/svg/'

  const buttonTH = document.createElement('button')
  const spanText1 = document.createElement('span')
  const spanText2 = document.createElement('span')

  buttonTH.classList.add('btn-reset', 'btn-th--color')

  spanText1.textContent = text
  buttonTH.append(spanText1)

  if (name_svg) {
    const img = document.createElement('img')
    Object.assign(img, {
      src: `${path}${name_svg}`,
      alt: 'arrow',
      id: 'svg_arrow',
    })
    buttonTH.append(img)
  }

  spanText2.textContent = text2
  buttonTH.append(spanText2)

  return buttonTH
}
