# Tienda Skeakers
Este proyecto es un ecommerce de sneakers desarrollado utilizando React JS como la principal biblioteca de JavaScript para construir la interfaz de usuario. El objetivo del proyecto es permitir a los usuarios ver y comprar sneakers de diferentes marcas, así como también rastrear sus pedidos. Se utiliza Firebase como backend para almacenar los productos y las órdenes de compra.

## Tecnologías utilizadas
- React: Biblioteca de JavaScript para construir la interfaz de usuario.
- Vite: Herramienta de desarrollo rápida para proyectos de JavaScript/TypeScript.
- React Router: Biblioteca de enrutamiento para manejar la navegación entre páginas en una aplicación React de una sola página.
- Bootstrap: Framework de CSS para estilizar la aplicación y hacerla más atractiva visualmente.
- Firebase: Plataforma de desarrollo web de Google para crear aplicaciones en la nube y almacenar datos en tiempo real.

## Funcionalidades
- Lista de productos: Los usuarios pueden ver una amplia variedad de sneakers disponibles para la compra.
- Detalles del producto: Los usuarios pueden hacer clic en un producto para obtener más detalles, como descripción, precio, stock, etc.
- Carrito de compras: Los usuarios pueden agregar productos al carrito de compras y ver el resumen de los productos seleccionados.
- Proceso de compra: Los usuarios pueden realizar el proceso de compra, proporcionando información de envío y pago.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local. (git clone https://github.com/tu_usuario/tu_proyecto.git)
2. Abre una terminal en el directorio del proyecto. (cd tu_proyecto)
3. Ejecuta el comando npm install para instalar las dependencias. (npm install)
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Contribuciones
Las contribuciones son bienvenidas y pueden mejorar significativamente el proyecto. Si deseas contribuir, asegúrate de seguir las pautas de contribución del proyecto y crea una solicitud de extracción con tus cambios.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.