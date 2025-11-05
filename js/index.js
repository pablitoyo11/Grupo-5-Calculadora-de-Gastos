//seccion formulario de gasto
const formulario = document.getElementById("formularioCotizacion");
const arrayDeGastos = [];

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const gastoCategoria = document.getElementById("gastoCategoria").value;
  const gastoMonto = document.getElementById("gastoMonto").value;
  if (!gastoCategoria || !gastoMonto) {
    alert("Por favor, complete todos los campos correctamente!");
  } else {
    arrayDeGastos.push({
      categoria: gastoCategoria,
      monto: parseFloat(gastoMonto),
    });
  }
});

//funcion para calcular el total de gastos
function calcularTotalGastos() {
  const inputPresupuestoMax = document.getElementById(
    "inputPresupuestoMax"
  ).value;
  const montoTotalDeGastos = 0;
  montoTotalDeGastos = arrayDeGastos.forEach(
    (gasto) => (monstoTotal += gasto.monto)
  );

  const promedioDeGastos = montoTotalDeGastos / arrayDeGastos.length;

  const arrayHistorialGastosHtml = "";
  for (let index = 0; index < arrayDeGastos.length; index++) {
    arrayHistorialGastosHtml = +`
    <p>
      <strong>Categoria: </strong>${arrayDeGastos[index].categoria}{" "}
      <strong>Monto: </strong> ${arrayDeGastos[index].monto}
    </p>;
    `;
  }

  resumenGastos.innerHTML = `
        <h3>Resumen Gastos Del Mes</h3>
        <p><strong>Presupuesto Maximo:</strong>${inputPresupuestoMax}</p>
        <p><strong>Monto total de Gastos:</strong>${montoTotalDeGastos}</p>
        <p><strong>Promedio de gastos:</strong>${promedioDeGastos}</p>
        <p><strong>Restante</strong>USD ${
          inputPresupuestoMax - montoTotalDeGastos
        }</p>

        <p><strong>Historial de gastos:</strong>${arrayHistorialGastosHtml}</p>
        

        <hr>
        <h2 style="color: #007bff">Prima estimada: USD ${primaFinal.toLocaleString()}</h2>
        <p style="font-size: 13px; color: #555">*Esta es una cotización estimada. El valor puede variar según la compañia aseguradora.</p>
    `;
}
