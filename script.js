let meta = 1000;  // Defina o valor da meta
let valorArrecadado = 0;

const barra = document.getElementById('barra');
const valorInput = document.getElementById('valor-input');
const valorArrecadadoTexto = document.getElementById('valor-arrecadado');

function atualizarProgresso() {
    valorArrecadado = parseFloat(valorInput.value) || 0;
    valorArrecadadoTexto.textContent = valorArrecadado.toFixed(2);
    
    let progresso = (valorArrecadado / meta) * 100;
    
    if (progresso > 100) progresso = 100;  // Limitar a barra em 100%
    
    barra.style.width = progresso + '%';
}
