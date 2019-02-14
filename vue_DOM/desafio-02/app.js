new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Clicado 1')
        },
        store(e){
            this.valor = e.target.value
            console.log(e.target.value)
        }
    }
})