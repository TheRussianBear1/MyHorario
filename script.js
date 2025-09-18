// script.js
// Mapeo de cursos a archivos de imagen
const horarios = {
    '6TOA': '6TOA.jpg',
    '6TOC': '6TOC.jpg',
    '6TOE': '6TOE.jpg',
    '6TOF': '6TOF.jpg',
    '6OD': '6OD.jpg',
    '5TOA': '5TOA.jpg',
    '5TOC': '5TOC.jpg',
    '5TOD': '5TOD.jpg',
    '5TOE': '5TOE.jpg',
    '5TOF': '5TOF.jpg',
    '5TOG': '5TO G.jpg',
    '4C': '4C.jpg',
    '4D': '4D.jpg',
    '4E': '4toE.jpg',
    '4F': '4toF.jpg',
    '4G': '4TOG.jpg',
    '4B': '4toB.jpg',
    '3A': '3A.jpg',
    '3B': '3B.jpg',
    '3C': '3C.jpg',
    '2A': '2A.jpg',
    '2B': '2B.jpg',
    '2C': '2C.jpg',
    '1A': '1A.jpg',
    '1B': '1b.jpg',
    '1C': '1C.jpg'
};

// Elementos del DOM
const cursoSelect = document.getElementById('cursoSelect');
const buscarBtn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');

// Función para mostrar el horario
function mostrarHorario() {
    const cursoSeleccionado = cursoSelect.value;
    
    if (!cursoSeleccionado) {
        mostrarError('Por favor, selecciona un curso');
        return;
    }
    
    const imagenHorario = horarios[cursoSeleccionado];
    
    if (!imagenHorario) {
        mostrarError('No se encontró el horario para este curso');
        return;
    }
    
    // Mostrar el horario
    resultado.innerHTML = `
        <div class="horario-container">
            <img src="${imagenHorario}" alt="Horario ${cursoSeleccionado}" class="horario-imagen">
        </div>
    `;
}

// Función para mostrar errores
function mostrarError(mensaje) {
    resultado.innerHTML = `
        <div class="error">
            <p>⚠️ ${mensaje}</p>
        </div>
    `;
}

// Función para mostrar placeholder
function mostrarPlaceholder() {
    resultado.innerHTML = `
        <div class="placeholder">
            <div class="placeholder-icon">📅</div>
            <p>Selecciona un curso y presiona "Buscar Horario" para ver el horario correspondiente</p>
        </div>
    `;
}

// Event listeners
buscarBtn.addEventListener('click', mostrarHorario);

cursoSelect.addEventListener('change', () => {
    if (cursoSelect.value === '') {
        mostrarPlaceholder();
    }
});

// Permitir buscar con Enter
cursoSelect.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        mostrarHorario();
    }
});
