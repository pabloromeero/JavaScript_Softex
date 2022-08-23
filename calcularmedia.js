const array = [7, 7, 8];

console.log(mediadoaluno(array));

function mediadoaluno(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma/(notas.length);

    if (media <= 6.9) return "REPROVADO";
    return "APROVADO"

    

}
function calcularmedia(array) {
    letsoma + 0; 
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.letsoma);
}
