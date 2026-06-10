function somaAteN(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

alert(somaAteN(10));