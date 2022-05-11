module.exports = {getProduto,getProdutos,salvarProduto,removeProduto}

const sequence = {
    __id:0,
    get id() {
        return this.__id++
    } 
}
const produtos = {}

function salvarProduto(produto){ 
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}
function removeProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
  
}
console.log(getProdutos(produtos))

