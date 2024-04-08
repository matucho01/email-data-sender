export const EmailTemplate = ({
    empresa,
    programa,
    fechaEmision,
    fechaVencimiento,
    monto,
    clase,
}) => (
    <div className="email-container">
        <h1>Los datos ingresados son</h1>
        <p>Empresa: {empresa}</p>
        <p>Programa: {programa}</p>
        <p>Fecha de emisión: {fechaEmision}</p>
        <p>Fecha de vencimiento: {fechaVencimiento}</p>
        <p>Monto: {monto}</p>
        <p>Clase: {clase}</p>

        <hr />

        <footer className="flex justify-between items-center">
            <p>Copyright 2024 Picaval</p>
            <p>Desarrollado por Mateo Pérez</p>
        </footer>

        <p>Gracias por usar nuestro servicio</p>
    </div>
)