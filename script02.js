// cada 3 ingressos = 1 batata frita

let quantidadeIngressos = 9;

let batatas = 0;

let nome = "Kevin"

for (let i = 1; i <= quantidadeIngressos; i++) {
    if (i % 3 === 0)
        batatas++;
}

console.log("Olá " + nome + " você ganhou " + batatas + " de porções de batata frita!");
