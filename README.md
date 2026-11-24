# 🇩🇪 Language Learning Widget

Aprende un nuevo idioma cada vez que revisas tu iPhone. Un widget personalizable para Scriptable, sin suscripciones.

## Características

- 80 verbos alemanes de nivel aproximado A2–B1.
- Traducción al español, ejemplo y forma del Perfekt (auxiliar + participio).
- Rotación de vocabulario según las actualizaciones de iOS.
- Funciona localmente, sin servicios externos.

## Instalación

1. Descarga [Scriptable](https://apps.apple.com/app/scriptable/id1405459188).
2. Abre la aplicación y pulsa + para crear un script.
3. Abre [el código completo](german-verbs.js) o su [versión Raw](https://raw.githubusercontent.com/Ibarron99/language-learning-widget/main/german-verbs.js), y copia todo el contenido.
4. Pégalo en Scriptable y nombra el script German Verbs.
5. Ejecútalo para ver una vista previa.
6. Mantén presionada la pantalla de inicio, agrega un widget pequeño de Scriptable y edítalo.
7. Selecciona German Verbs en el campo Script.

## Personalización

Modifica la lista `verbos`. Cada entrada tiene cuatro campos:

```js
["gehen", "ir", "Ich gehe nach Hause.", "ist gegangen"]
```

Puedes añadir tus propias palabras o adaptar la lista para otros idiomas. Si colocas varios widgets, asigna parámetros distintos (0, 1, 2) para desplazar el vocabulario mostrado.

## Limitaciones

El diseño está pensado para la pantalla de inicio, no para la pantalla de bloqueo. El script solicita una actualización cada minuto, pero iOS decide cuándo ejecutarla. No se garantiza una palabra nueva en cada desbloqueo.

## Sobre el proyecto

Este proyecto nació de mis ganas de aprender alemán y encontrar una alternativa gratuita a las aplicaciones de vocabulario con suscripción.

Creado para compartir una herramienta sencilla que pueda ayudar a más personas a aprender idiomas.

GitHub: [Ibarron99](https://github.com/Ibarron99)
