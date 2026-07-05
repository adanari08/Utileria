#  Librería de Utilidades en JavaScript

## Programación Web

**Profesora:** Ing. Adelina Martínez Nieto  
**Alumno:** Kelly Adanari Cruz Alonso

---

#  ¿Qué problema resuelve?

Esta librería de JavaScript reúne funciones de validación y manipulación de datos que pueden reutilizarse en cualquier proyecto web.

Su objetivo es evitar escribir el mismo código cada vez que se necesiten validaciones comunes, facilitando el desarrollo de formularios y mejorando la organización del código.

Entre las funciones disponibles se encuentran:

-  Validación de correo electrónico
-  Validación de nombres (solo letras)
-  Validación de longitud de números
-  Cálculo de edad
-  Verificación de mayoría de edad
-  Validación de contraseñas seguras
-  Capitalización automática de texto
-  Validación de teléfonos mexicanos

---

#  Instalación

Para utilizar la librería **utileria.js** en cualquier proyecto web, es necesario incluir el archivo JavaScript dentro del documento HTML. Esto permitirá que todas las funciones definidas en la librería estén disponibles para ser utilizadas desde cualquier archivo o script del proyecto.

## Paso 1. Descargar o copiar la librería

Coloca el archivo `utileria.js` dentro de tu proyecto. Una estructura recomendada es la siguiente:

```text
Proyecto/

│── css/
│── js/
│     └── utileria.js
│── index.html
```

## Paso 2. Importar la librería

Una vez agregado el archivo, enlázalo desde tu documento HTML antes de cerrar la etiqueta `</body>` para asegurar que todo el contenido de la página se haya cargado antes de ejecutar las funciones.

```html
<script src="js/utileria.js"></script>
```

Si el archivo `utileria.js` se encuentra en la misma carpeta que el archivo HTML, basta con utilizar la siguiente referencia:

```html
<script src="utileria.js"></script>
```

## Paso 3. Verificar la instalación

Después de importar la librería, abre la consola del navegador (F12 → **Console**) y ejecuta cualquiera de las funciones para comprobar que la instalación fue correcta.

```javascript
console.log(validarCorreo("correo@gmail.com"));
```

Resultado esperado:

```text
true
```

Si la consola muestra el resultado esperado sin errores, significa que la librería se integró correctamente y ya está lista para utilizarse en cualquier parte del proyecto.

---

#  Uso

## 1. Validar correo electrónico

```javascript
console.log(validarCorreo("correo@gmail.com"));
```

Resultado

```
true
```

Otro ejemplo

```javascript
console.log(validarCorreo("correo@gmail"));
```

Resultado

```
false
```

---

## 2. Validar que un texto solo tenga letras

```javascript
console.log(soloLetras("Kelly Adanari"));
```

Resultado

```
true
```

```javascript
console.log(soloLetras("Kelly123"));
```

Resultado

```
false
```

---

## 3. Validar longitud de un número

```javascript
console.log(validarLongitud(12345,5));
```

Resultado

```
true
```

```javascript
console.log(validarLongitud(1234567890,5));
```

Resultado

```
false
```

---

## 4. Calcular edad

```javascript
console.log(calcularEdad("2004-10-15"));
```

Resultado aproximado

```
21
```

*(El resultado cambia dependiendo del año actual.)*

---

## 5. Verificar mayoría de edad

```javascript
console.log(esMayorDeEdad("2004-10-15"));
```

Resultado

```
true
```

```javascript
console.log(esMayorDeEdad("2012-08-10"));
```

Resultado

```
false
```

---

## 6. Validar contraseña

Debe contener:

- mínimo 8 caracteres
- una mayúscula
- una minúscula
- un número
- un carácter especial

Ejemplo:

```javascript
console.log(validarPassword("Hola123."));
```

Resultado

```
true
```

```javascript
console.log(validarPassword("hola123"));
```

Resultado

```
false
```

---

## 7. Capitalizar texto

```javascript
console.log(capitalizarTexto("kelly adanari cruz alonso"));
```

Resultado

```
Kelly Adanari Cruz Alonso
```

---

## 8. Validar teléfono

```javascript
console.log(validarTelefono("9511234567"));
```

Resultado

```
true
```

```javascript
console.log(validarTelefono("95112345"));
```

Resultado

```
false
```
<img width="708" height="662" alt="Prueba" src="https://github.com/user-attachments/assets/3b46ba26-9e29-4652-b541-e2baf008e8e2" />


<img width="1600" height="815" alt="RegistrodeUsuario" src="https://github.com/user-attachments/assets/1d3609ec-4d4c-4e3c-b258-2e4867194810" />



---

#  Estructura del proyecto

```
utileria/

│── css/
│     └── style.css
│
│── js/
│     └── utileria.js
│
│── index.html
│── login.html
```
---

#  Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

---

#  Autor

**Kelly Adanari Cruz Alonso**

Proyecto desarrollado para la materia de **Programación Web**.

Profesora:

**Ing. Adelina Martínez Nieto**






2026
