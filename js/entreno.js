const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hola mundo",
        frutas: ['Manzana', 'Pera', 'Durazno'],
        frutas_objetos: [
            {
                nombre: 'Pera',
                estado: 'disponible',
                precio: 1000
            },
            {
                nombre: 'Manzana',
                estado: 'disponible',
                precio: 1500
            },
            {
                nombre: 'Durazno',
                estado: 'Sin Stock',
                precio: 2000
            }
        ],
        
        fruta_nombre: "",
        fruta_estado: "",
        fruta_precio: null,
        totalFruta: 0

    },
    methods: {
        agregarFruta(){
            this.frutas_objetos.push({
                nombre: this.fruta_nombre,
                estado: this.fruta_estado,
                precio: this.fruta_precio
            })
            this.nuevaFruta = ""
        }
    },
    computed: {
        sumarPrecios(){
            this.totalFruta = 0;
            for(precios of this.frutas_objetos){
                this.totalFruta = this.totalFruta + precios.precio
            }
            return this.totalFruta
        }
    }
})

// modificar datos
// app.titulo = "Otro mensaje"