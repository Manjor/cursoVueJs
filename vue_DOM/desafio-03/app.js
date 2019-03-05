new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed:{
        resultado(){
            if(this.valor !== 37){
                return 'Valor Diferente'
            }else{
                return 'Valor Igual'
            }
        }
    },
    watch:{
        resultado(){
            setTimeout(() =>{
                this.valor = 0
            },5000)
        }
    }
});