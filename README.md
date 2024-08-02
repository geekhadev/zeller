# 🚀 Zeller.ia

Esta es una plataforma que te permite atender lo más rápido posible a tus clientes, somos especialistas en la integración de AI y ventas en el mercado automotriz.

## 🚀 Cómo empezar

Para comenzar a utilizar este template en tu proyecto, sigue los siguientes pasos:

1. Clona este repositorio usando Git:

    ```bash
    git clone https://github.com/geekhadev/zeller.git
    cd zeller
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Iniciarlizar los servicios de la base de datos:

    ```bash
    docker-compose up
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

5. Rutas para probar el API:

    - `GET http://localhost:3000/api/health`: verifica que el servidor esté en línea.
    - `GET http://localhost:3000/api/clients`: obtiene todos los clientes.
    - `GET http://localhost:3000/api/clients/1`: obtiene un cliente por su ID.
    - `GET http://localhost:3000/api/clients/follow`: obtiene que no se hayan comunicado en mas de 7 días.
    - `GET http://localhost:3000/api/ia/generate-car-description?slug=1969-bmw-2002-5-speed`: obtiene una descripción de un auto.
    - `POST http://localhost:3000/api/ia/chatbot`: obtiene una respuesta de un chatbot.

    Ejemplo de body para el chatbot:

    ```json
    {
        "slug": "1969-bmw-2002-5-speed",
        "messages": [
            {
                "role": "user",
                "content": "Hola"
            }
        ]
    }
    ```

6. Rutas para probar la UI

    - `GET http://localhost:3000/`: refactorice un poco la página del producto principal
    - `GET http://localhost:3000/tienda/geekcar`: ejemplo de una página con integración de ia al entrar a la página del detalle de un auto hay un chatbot también la descripcieon del auto se genera con ia

¡Eso es todo! Ahora puedes comenzar a desarrollar tu aplicación con Next.js.

## 📚 Comandos disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Next.js.
- `npm run lint`: Ejecuta ESLint para identificar problemas en el código.
- `npm run lint:fix`: Ejecuta ESLint y corrige automáticamente los problemas detectados.
- `npm run test`: Ejecuta todos los tests con Vitest.

## 🛠️ Tecnologías y herramientas

- Next.js
- React
- ESLint, EditorConfig para asegurar calidad de código
- Vitest
- TailwindCSS para estilos
- Docker
- Postgres

## Notas

- Tome la decisieon de usar NextJs para avanzar más rápido en función al poco tiempo disponible.
- Si bien la prueba quedó incompleta porque no hice los métodos de guardado, quise dedicar un poco de tiempo al desarrollo frontend porque el cargo era fullstack.
- Inverti un poco de tiempo igual intentando hacer una arquitectura que fuera desacoplada con la finalidad de demostrar un poco de mi conocimiento en el área.
- Cree un endpoint que utiliza openai el cual genera las descripciones de los autos.
- Cree un endpoint que simula un chatbot.
- Apliqué algunos test a las rutas iniciales del proyecto.

Quiero despedirme, agradeciendo la oportunidad de participar en esta prueba técnica, espero que el esfuerzo aplicado sea de su agrado, también espero que se valore la dedicación ya que por la falta de tiempo por mis actividades diarias no pude dedicar mas tiempo al proyecto.

### ¿Qué cosas terminaría?

- Terminar los endpoints para los crud de los clientes.
- Terminar los endpoints para los crud de los autos.
- Migrar los datos de los autos en la UI a fetch de la api.
- HAcer la versión responsive.
- Agregar mas test.
- Guardar en la base de datos los mensajes del chatbot.
- Configurar un servicio de base de datos en la nube para conectarlo en producción.

---

Hecho con ❤️ por [@geekhadev](https://geekha.dev)
