const form = document.getElementById('form-atividade');
const atividades = [];
const notas = [];
let linhas = ' ';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});
function adicionaLinha() {
    const inputnomeContato = document.getElementById('nome-atividade');
    const inputnumeroContato = document.getElementById('numero-atividade');

    if (atividades.includes(inputnomeContato.value)) {
        alert(`A atividade: ${inputnomeContato.value} já foi inserida`);
    } else {
        atividades.push(inputnomeContato.value);
        notas.push(parseFloat(inputnumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputnomeContato.value}</td>`;
        linha += `<td>${inputnumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputnomeContato.value = '';
    inputnumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}