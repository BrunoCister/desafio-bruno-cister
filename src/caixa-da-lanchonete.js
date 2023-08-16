
import promptSync from 'prompt-sync';

class CaixaDaLanchonete {

    listaCodigos = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    mostrarMenu() {
        console.log("| codigo    | descrição                   | valor   |");
        console.log("|-----------|-----------------------------|---------|");
        console.log("| cafe      | Café                        | R$ 3,00 |");
        console.log("| chantily  | Chantily (extra do Café)    | R$ 1,50 |");
        console.log("| suco      | Suco Natural                | R$ 6,20 |");
        console.log("| sanduiche | Sanduíche                   | R$ 6,50 |");
        console.log("| queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |");
        console.log("| salgado   | Salgado                     | R$ 7,25 |");
        console.log("| combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |");
        console.log("| combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |");
    }

    fazerPedido(listaCodigos) {

        let listaPedido = [];
        let input = promptSync();
        let pedido;
        
        do{
            this.mostrarMenu()
            pedido = input('Digite o código do produto de acordo com a tabela acima para incluí-lo no pedido ou digite sair para concluir o pedido: ');
            if (pedido == "sair") {
                if (listaPedido.length == 0) {
                    console.log("Não há itens no carrinho de compra!");
                }                
                break
            }
            if (listaCodigos.includes(pedido)) {
                if ((pedido == "chantily" && !listaPedido.includes("cafe")) || (pedido == "queijo" && !listaPedido.includes("sanduiche"))) {
                    console.log("Item extra não pode ser pedido sem o principal.");
                } else {
                    listaPedido.push(pedido);
                }
            } else {
                console.log("Item inválido!");
            }
        } while (pedido != "sair");
        
        return listaPedido;
    }

    criarConta(listaPedido) {

        let produto;
        let itens = [];
        
        listaPedido.forEach(item => {
            if (!itens.includes(item)) {
                produto = item;
                itens.push(produto);
            }
        });

        itens;
    }

    obterMetodoDePagamento() {

        let listaMetodosDePagamento = ["dinheiro", "debito", "credito"];
        let input;
        let metodoDePagamento;

        do {
            input = promptSync();
            metodoDePagamento = input('Digite o método de pagamento: ');
            if (!listaMetodosDePagamento.includes(metodoDePagamento)) {
                console.log("Forma de pagamento inválida!");
            }
        } while (!listaMetodosDePagamento.includes(metodoDePagamento));

        return metodoDePagamento;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }
}

let pedido = new CaixaDaLanchonete();
let listaDePedidos = pedido.fazerPedido(pedido.listaCodigos);
let itens = pedido.criarConta(listaDePedidos);
let metodoDePagamento = pedido.obterMetodoDePagamento();
pedido.calcularValorDaCompra(metodoDePagamento, itens)

export { CaixaDaLanchonete };
