// Lógica da calculadora usada em index2.html
const display = document.getElementById('display');

function pressed(ch) {
	if (!display) return;
	display.textContent += String(ch);
}

function clearAll() {
	if (!display) return;
	display.textContent = '';
}

function backspace() {
	if (!display) return;
	display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
	if (!display) return;
	const expr = display.textContent.replace(/[^0-9.+\-*/()%]/g, '');
	try {
		// Avaliação controlada (Function) — evita alguns problemas com eval
		// ATENÇÃO: Apenas para uso local/educacional
		const result = Function('return (' + expr + ')')();
		display.textContent = result;
	} catch (e) {
		display.textContent = 'Erro';
		setTimeout(() => (display.textContent = ''), 1200);
	}
}

