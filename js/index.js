const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue!!!',
        frutas: ['Manzana', 'Banana', 'Pera', 'Naranja'],
        clubes: [
            { nombre: 'River', torneos: 37 },
            { nombre: 'Boca', torneos: 30 },
            { nombre: 'Racing', torneos: 13 },
            { nombre: 'Independiente', torneos: 20 },
            { nombre: 'San Lorenzo', torneos: 22 },
            { nombre: 'Temperley', torneos: 0 }
        ]
    }
});