// 🚫 BLOQUEAR LETRAS EN CAMPOS NUMÉRICOS
function soloNumerosInput(e) {
    // Permitir teclas especiales (backspace, flechas, etc.)
    if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Tab"
    ) {
        return;
    }

    // Bloquear si no es número
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}

// Aplicar a los campos
document.getElementById("documento").addEventListener("keypress", soloNumerosInput);
document.getElementById("telFijo").addEventListener("keypress", soloNumerosInput);
document.getElementById("celular").addEventListener("keypress", soloNumerosInput);

function limpiarNumerosInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
}

document.getElementById("documento").addEventListener("input", limpiarNumerosInput);
document.getElementById("telFijo").addEventListener("input", limpiarNumerosInput);
document.getElementById("celular").addEventListener("input", limpiarNumerosInput);