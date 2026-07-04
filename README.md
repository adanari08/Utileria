#  Librería de Utilidades en JavaScript

## Programación Web

**Profesora:** Ing. Adelina Martínez Nieto  
**Alumno:** Kelly Adanari Cruz Alonso

---

#  ¿Qué problema resuelve?

Esta librería de JavaScript reúne funciones de validación y manipulación de datos que pueden reutilizarse en cualquier proyecto web.

Su objetivo es evitar escribir el mismo código cada vez que se necesiten validaciones comunes, facilitando el desarrollo de formularios y mejorando la organización del código.

Entre las funciones disponibles se encuentran:

- ✔ Validación de correo electrónico
- ✔ Validación de nombres (solo letras)
- ✔ Validación de longitud de números
- ✔ Cálculo de edad
- ✔ Verificación de mayoría de edad
- ✔ Validación de contraseñas seguras
- ✔ Capitalización automática de texto
- ✔ Validación de teléfonos mexicanos

---

#  Instalación

Agregar la librería antes de cerrar la etiqueta `<body>`.

```html
<script src="js/utileria.js"></script>
```

O si el archivo está en la misma carpeta:

```html
<script src="utileria.js"></script>
```

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

#  Capturas de pantalla

## Consola mostrando la validación de correo

*(Agregar captura aquí)*

![Captura 1](capturas/correo.png)

---

## Consola mostrando el cálculo de edad

*(Agregar captura aquí)*

![Captura 2](capturas/edad.png)

---

## Consola mostrando la validación de contraseña

*(Agregar captura aquí)*

![Captura 3](capturas/password.png)

---

## Consola mostrando la validación de teléfono

*(Agregar captura aquí)*

![Captura 4](capturas/telefono.png)

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
