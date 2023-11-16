// импорты модулей
import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/main.js"

// Находим корневой элемент
const app = document.getElementById('app')



const header = getHeader()
const main = getPageContainer()

app.append(header, main)
