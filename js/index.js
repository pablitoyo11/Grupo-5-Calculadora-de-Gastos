//formulario de gasto
const formularioGastos = document.getElementById("formularioGastos");
const arrayDeGastos = [];
//contenedor para el resumen de gastos
const resumenGastos = document.getElementById("resumenGastos");

//.value presupuesto maximo
const inputPresupuestoMaxElement = document.getElementById(
  "inputPresupuestoMax"
);

//bloque invisible emergente para agregar gastos
const btnAbrirAgregarGastosModal = document.getElementById(
  "btnAbrirAgregarGastosModal"
);
const agregarGastosModal = document.getElementById("agregarGastosModal");
const btnCerrarAgregarGastosModal = document.getElementById(
  "btnCerrarAgregarGastosModal"
);
btnAbrirAgregarGastosModal.addEventListener("click", () => {
  agregarGastosModal.style.display = "block"; //mostrar el modal
});
btnCerrarAgregarGastosModal.addEventListener("click", () => {
  agregarGastosModal.style.display = "none"; //ocultar el modal
});

formularioGastos.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputPresupuestoMax = inputPresupuestoMaxElement.value;
  if (inputPresupuestoMax <= 0) {
    alert(
      "Por favor, ingrese un presupuesto maximo para mejorar la experiencia"
    );
    return;
  }
  const gastoCategoria = document.getElementById("gastoCategoria").value;
  const gastoMonto = document.getElementById("gastoMonto").value;
  if (!gastoCategoria || !gastoMonto) {
    alert("Por favor, complete todos los campos correctamente!"); //esto no se activa porque el form ya pide que se complete antes del submit? como evitar?
  } else {
    arrayDeGastos.push({
      categoria: gastoCategoria,
      monto: parseFloat(gastoMonto),
    });
    calcularTotalGastos();
  }
});

//funcion para calcular el total de gastos
function calcularTotalGastos() {
  let montoTotalDeGastos = 0;
  let inputPresupuestoMax = inputPresupuestoMaxElement.value;
  arrayDeGastos.forEach((gasto) => (montoTotalDeGastos += gasto.monto));

  let promedioDeGastos = montoTotalDeGastos / arrayDeGastos.length;

  let arrayToHtmlHistorialGastos = "";
  for (let index = 0; index < arrayDeGastos.length; index++) {
    arrayToHtmlHistorialGastos += `
    <p>
      <strong>Categoria: </strong>${arrayDeGastos[index].categoria}
      <strong>Monto: </strong> ${arrayDeGastos[index].monto}
    </p>;
    `;
  }

  resumenGastos.innerHTML = `
        <h3>Resumen Gastos Del Mes</h3>
        <p><strong>Presupuesto Maximo:</strong> $ ${inputPresupuestoMax}</p>
        <p><strong>Monto total de Gastos:</strong> $ ${montoTotalDeGastos}</p>
        <p><strong>Promedio de gastos:</strong> $ ${promedioDeGastos}</p>
        <p><strong>Restante</strong> $ ${
          inputPresupuestoMax - montoTotalDeGastos
        }</p>

        <p><strong>Historial de gastos:</strong>${arrayToHtmlHistorialGastos}</p>
      
    `;
}
