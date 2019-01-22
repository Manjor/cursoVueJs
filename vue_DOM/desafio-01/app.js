new Vue({
    el: '#desafio',
    data:{
        nome: 'Manoel',
        idade: 21,
        imagem: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizo8KNooHgAhUyIrkGHatkDCUQjRx6BAgBEAU&url=https%3A%2F%2Fmarketingcomcafe.com.br%2Fbancos-de-imagens-gratis%2F&psig=AOvVaw283ykeupJll2ZSZWqUwSr_&ust=1548242276578445'
    },
    methods:{
        idadex3(){
            return this.idade * 3
        },
        ramdomico(){
            return Math.random()  * (1 - 0) + 0
        }
    }
})