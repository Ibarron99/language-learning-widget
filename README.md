# 🇩🇪 Language Learning Widget

Aprende un nuevo idioma cada vez que revisas tu iPhone. Un widget personalizable para Scriptable, sin suscripciones.

## Características

- 80 verbos alemanes de nivel aproximado A2–B1.
- Traducción al español, ejemplo y forma del Perfekt (auxiliar + participio).
- Rotación de vocabulario según las actualizaciones de iOS.
- Funciona localmente, sin servicios externos.

## Instalación del script

1. Descarga [Scriptable](https://apps.apple.com/app/scriptable/id1405459188).
2. Abre la aplicación y pulsa + para crear un script.
3. Abre [el código completo](german-verbs.js) o su [versión Raw](https://raw.githubusercontent.com/Ibarron99/language-learning-widget/main/german-verbs.js), y copia todo el contenido.
4. Pégalo en Scriptable y nombra el script German Verbs.
5. Ejecútalo para ver una vista previa.
## Pantalla de inicio

1. Mantén presionada la pantalla de inicio y agrega un widget pequeño de Scriptable.
2. Edita el widget y selecciona German Verbs en el campo Script.

## Pantalla de bloqueo

1. Mantén presionada la pantalla de bloqueo de tu iPhone.
2. Pulsa Personalizar y selecciona Pantalla de bloqueo.
3. Toca el espacio de widgets debajo del reloj.
4. Busca Scriptable y agrega un widget rectangular.
5. Toca el widget agregado y selecciona el script German Verbs.
6. En Parameter (Parámetro), escribe 0.
7. Si quieres un segundo verbo, agrega otro widget rectangular de Scriptable, selecciona el mismo script y escribe 1 en Parameter.
8. Guarda los cambios.

### Ejemplo de dos widgets

| Widget izquierdo — parámetro 0 | Widget derecho — parámetro 1 |
| --- | --- |
| **aufstehen** | **schreiben** |
| levantarse | escribir |
| ist aufgestanden | hat geschrieben |
| *Ich stehe um sieben Uhr auf.* | *Ich schreibe eine E-Mail.* |

Ejemplo ilustrativo del resultado observado en el dispositivo del creador. Los verbos cambian según el momento de actualización. No necesitas duplicar el script: los parámetros desplazan el índice de selección. Si los widgets se actualizan en momentos distintos, ocasionalmente podrían coincidir.

## Personalización

Modifica la lista `verbos`. Cada entrada tiene cuatro campos:

```js
["gehen", "ir", "Ich gehe nach Hause.", "ist gegangen"]
```

Puedes añadir tus propias palabras o adaptar la lista para otros idiomas. Si colocas varios widgets, asigna parámetros distintos (0, 1, 2) para desplazar el vocabulario mostrado.

## Limitaciones

El widget original se ha utilizado tanto en la pantalla de bloqueo como en la de inicio. La apariencia puede variar según la versión de iOS y el tipo de widget; en la pantalla de bloqueo los colores se adaptan al sistema. El script solicita una actualización cada minuto, pero iOS decide cuándo ejecutarla. No se garantiza una palabra nueva en cada desbloqueo.

## Sobre el proyecto

Este proyecto nació de mis ganas de aprender alemán y encontrar una alternativa gratuita a las aplicaciones de vocabulario con suscripción.

Creado para compartir una herramienta sencilla que pueda ayudar a más personas a aprender idiomas.

GitHub: [Ibarron99](https://github.com/Ibarron99)
