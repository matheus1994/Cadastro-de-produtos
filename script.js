class Produto{
    constructor(){
        this.id = id
        this.arrayProdutos = []
    }

    Adicionar(){
        let produto = this.lerDados();

        if(this.Validar(produto) == true){
            this.Salvar(produto)
        }

        this.Listar()
        this.Cancelar()

    }

    lerDados(){
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoPrdouto = document.getElementById('pdpreco').value
        return produto;
    }

    Validar(produto){
        let msg = ''

        if(produto.nomeProduto ==''){
            msg += 'Insira o nome do produto corretamente!'
        }

        if(produto.precoProduto ==''){
            msg += 'Insira o preço do produto corretamente!'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(Produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        for(let i = 0; i < this.arrayProdutos.lengt; i++){

           let tr = tbody.insertRow();

           let td_id = tr.insertCell();
           let td_nome = tr.insertCell();
           let td_preco = tr.insertCell();
           let td_del = tr.insertCell();

           td_id.innerText = this.arrayProdutos[i].id;
           td_nome.innerText = this.arrayProdutos[i].id;
           td_preco.innerText = this.arrayProdutos[i].id;
           let imagem = document.createElement('img')
           imagem.src('C:\Users\User\Desktop\delete.png')
           imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
           td_del.appendChild(imagem)


        }
    }

    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }

    Deletar(id){

        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayProdutos.lengt; i++{
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i);
            }
        }
        alert('O item foi apagado com sucesso')
    }

}

var produto = new Produto()