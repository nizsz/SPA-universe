import { Router } from "./router.js"

const homeLink = document.querySelector('.link-home')
const universeLink = document.querySelector('.link-universe')
const explorationLink = document.querySelector('.link-exploration')
const body = document.querySelector('body')
const router = new Router()

homeLink.addEventListener('click', function () {
  router.route()
  body.classList.remove('hide')
  
})

universeLink.addEventListener('click', function () {
  router.route()
  body.classList.add('hide')
  
})

explorationLink.addEventListener('click', function(){
  router.route()
  body.classList.add('hide')
  
 
})

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle() 
window.route = () => router.route()