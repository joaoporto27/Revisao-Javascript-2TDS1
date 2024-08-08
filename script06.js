let armas = ['Laser', 'Espada', 'Mísseis', 'Machado', 'Granada'];
let ataques = [];

ataques.push('Coringa')
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[1]);
ataques.push(armas[2]);


for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log("Nome do Robô:", ataques[i])
    } else {
        console.log("Ataque", [i] + ":", ataques[i])
    }
}