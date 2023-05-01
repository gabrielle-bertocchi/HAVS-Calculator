function calculateHAVS() {
	const time = parseFloat(document.getElementById("time").value);
	const frequency = parseFloat(document.getElementById("frequency").value);
	const acceleration = parseFloat(document.getElementById("acceleration").value);

	if (isNaN(time) || isNaN(frequency) || isNaN(acceleration)) {
		document.getElementById("result").innerHTML = "Please fill in all fields.";
	} else {
		const dose = time * Math.pow(frequency, 2) * acceleration;
		const result = `The vibration dose is ${dose.toFixed(2)} m/s².h.`;
		document.getElementById("result").innerHTML = result;
	}
}
