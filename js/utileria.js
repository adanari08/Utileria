/**
 * Valida que un correo electrónico tenga un formato correcto.
 *
 * @param {string} correo
 * @returns {boolean}
 */
/**
 * Valida que un correo electrónico tenga un formato correcto.
 *
 * @param {string} correo
 * @returns {boolean}
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
/**
 * Verifica que un texto solo contenga letras y espacios.
 *
 * @param {string} texto
 * @returns {boolean}
 */
function soloLetras(texto) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(texto);
}
/**
 * Verifica que un número no exceda una longitud determinada.
 *
 * @param {number|string} numero
 * @param {number} maxLongitud
 * @returns {boolean}
 */
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}
/**
 * Calcula la edad a partir de una fecha de nacimiento.
 *
 * @param {string} fechaNacimiento
 * @returns {number}
 */

function calcularEdad(fechaNacimiento) {

    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}
/**
 * Determina si una persona es mayor de edad.
 *
 * @param {string} fechaNacimiento
 * @returns {boolean}
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}
/**
 * Valida que una contraseña cumpla los requisitos mínimos de seguridad.
 *
 * @param {string} password
 * @returns {boolean}
 */
function validarPassword(password) {

    const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

    return regex.test(password);

}
/**
 * Convierte la primera letra de cada palabra en mayúscula.
 *
 * @param {string} texto
 * @returns {string}
 */
function capitalizarTexto(texto){

    return texto
    .toLowerCase()
    .split(" ")
    .map(p=>p.charAt(0).toUpperCase()+p.slice(1))
    .join(" ");

}
/**
 * Verifica que el teléfono tenga exactamente 10 dígitos.
 *
 * @param {string} telefono
 * @returns {boolean}
 */
function validarTelefono(telefono){

    const regex=/^[0-9]{10}$/;

    return regex.test(telefono);

}
