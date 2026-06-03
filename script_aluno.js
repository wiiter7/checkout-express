function calcularCompra() {
    
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value;

    let desconto = 0;
    
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    let valorComDesconto = valorOriginal - desconto;
    
    let frete = 0;

    if (valorComDesconto >= 100) {
        frete = 0;
    } else {
        frete = 15;
    }

    let totalFinal = valorComDesconto + frete;
    
    painel.className = "resultado sucesso";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: R$ ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}