export class App {

    constructor () {
        console.log('App cargada')
        // this.nodoMenu = document.querySelector('body>header>a')
        this.nodoMenu = document.querySelector('#menu-icon')
        this.nodoMenu.addEventListener('click', this.onMenu.bind(this) )
    }

    onMenu(ev) {
        const nodoA = ev.target.parentElement
        console.dir(nodoA)
        nodoA.nextElementSibling.classList.toggle('hide')
        ev.target.classList.toggle('fa-bars')
        ev.target.classList.toggle('fa-times')
    }

}