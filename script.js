function calcularHAVS() {
	const tempo = parseFloat(document.getElementById("tempo").value);
	const frequencia = parseFloat(document.getElementById("frequencia").value);
	const aceleracao = parseFloat(document.getElementById("aceleracao").value);

	if (isNaN(tempo) || isNaN(frequencia) || isNaN(aceleracao)) {
		document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos.";
	} else {
		const dose = tempo * Math.pow(frequencia, 2) * aceleracao;
		const resultado = `A dose de vibração é de ${dose.toFixed(2)} m/s².h.`;
		document.getElementById("resultado").innerHTML = resultado;
	}
}
