const produtos = require('./database')
const read = require('readline-sync')

const carrinho = []
let cupom1 = 0
produtos.sort((a, b) => a.preco - b.preco)

class Pedido {
    constructor(){
        this.produtos = []
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
    
    adicionarProduto(produto, quantidade){
        this.produtos.push({nome: produto.nome, quantidade})
        console.table(this.produtos[0])
        
    }  

    mostrarProdutos(){
        console.table(this.produtos)
    }
}

class Order {
    constructor(carrinho){
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calcSubtotal (){
        this.subTotal = this.newProducts.reduce((acumulator, item) => acumulator + (item.preco * item.quantidade), 0)
    }
}

function printDadosIniciais(){
    console.log('--------------------------------------')
    console.log('     Projeto Carrinho de Compras     ')
    console.log('     Realizado por Livia Oliveira    ')
    console.log('--------------------------------------')
}

function buscarProdutos() {

    const produtosCategorias = read.question('Voce deseja procurar produtos por categoria?(S/N)')

    if(produtosCategorias.toLocaleUpperCase() == 'S'){
        console.log('Qual categoria deseja escolher?')
        console.log('------------------------------------------------------------------')
        console.log('Alimento, Casa, Bebida, Higiene, Informática')  
        console.log('------------------------------------------------------------------')

        const categoriaDesejada = read.question('Qual a categoria desejada?')
        const produtosDaCategoria = produtos.filter(produto => produto.categoria === categoriaDesejada.toLocaleLowerCase()) 
        console.table(produtosDaCategoria)

    } else {
        console.log('Esses sao todos os produtos')
        console.table(produtos)
    }  
}

function selecionarProdutos(){
    let numeroId = parseInt(read.question('Por favor insira os itens desejados atraves do numero do ID: '))
    let produtoPorId = produtos.find(produto => produto.id === parseInt(numeroId))
    const pedido = new Pedido()

    if(produtoPorId){
        console.log('Produto encontrado', produtoPorId.nome)

        let quantidadeItem = parseInt(read.question('Informe a quantidade do produto escolhido: '))
        
        if(quantidadeItem > 0){
            pedido.adicionarProduto(produtoPorId, quantidadeItem)
            const adicionarCarrinho = {...numeroId, quantidade: quantidadeItem, preco: produtoPorId.preco, nome: produtoPorId.nome}
            carrinho.push(adicionarCarrinho)
            console.log('Inserido no carrinho!')
            console.log('------------------------------------------------------------------') 
            return pedido
        
        } else {
            console.log('Quantidade inválida') 
            selecionarProdutos()
        }

    } else {
        console.log('Produto inválido')
        selecionarProdutos()
    }   
}


function adicionarCupom(){

    const cupomPergunta = read.question('Voce tem cupom de desconto?(S/N)')

    if(cupomPergunta.toLocaleUpperCase() == 'S') {

        cupom1 = parseInt(read.question('Informe o codigo do cupom: '))
        
    } else {
        console.log('Ok, estamos processando a sua compra sem o cupom')  
    }
    
    for(i = 0; i < 1000; i++){
        if(cupom1 > 15 || cupom1 < 0){
            cupom1 = parseInt(read.question('Informe o codigo do cupom novamente, cupom invalido: '))
            
        } else{
            console.log('Cupom valido')
            break
        }
    }
} 




function run(){
    printDadosIniciais()
    let continuarComprando = 'S'
    let pedidos
    do{
        buscarProdutos()
        pedidos = selecionarProdutos()
        continuarComprando = read.question('Voce deseja continuar comprando?(S/N)')
    } while (continuarComprando.toLocaleUpperCase() === 'S')
    //pedidos.mostrarProdutos()
    adicionarCupom()
    const order = new Order(carrinho)  
    console.table(order.newProducts)
    order.calcSubtotal()
    console.log(`Valor do pedido R$ ${order.subTotal.toFixed(2)}.`)
    const desconto = order.subTotal * (cupom1/100)
    console.log(`Valor descontado R$ ${desconto.toFixed(2)}.`)
    const total = order.subTotal - desconto
    console.log(`O valor total com o desconto aplicado é R$ ${total.toFixed(2)}.`) 

}

run()

