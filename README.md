# GeneradorContrase-asAleatorias

Generador de contraseñas seguras con evaluación de seguridad y copia rápida
Generador de Contraseñas

Generador interactivo de contraseñas aleatorias, con evaluación de seguridad visual y opciones personalizables.

---

## Características

- Generación de contraseñas aleatorias con:
  - Letras minúsculas
  - Letras mayúsculas
  - Números
  - Símbolos especiales
- Longitud configurable (8 a 64 caracteres) mediante slider.
- Evaluación de seguridad con **color**:
  - Rojo: débil
  - Naranja: media
  - Verde: fuerte
- Copiado rápido al portapapeles con feedback visual.
- Actualización automática al cambiar opciones o longitud.

---

## Cómo usar

1. Abrir `index.html` en tu navegador.
2. Ajustar la longitud con el slider.
3. Marcar o desmarcar los checkboxes según los tipos de caracteres que quieras incluir.
4. La contraseña se genera automáticamente o con el botón **Generar**.
5. Copiar la contraseña con el botón **Copiar**, que mostrará "!Copiado!" temporalmente.

---

## Estructura del proyecto

/generador-contrasenas
│
├─ index.html # Interfaz principal
├─ estilos.css # Estilos
└─ script.js # Lógica de generación de contraseñas y eventos
