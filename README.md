# Front-Challenge


Solución para el reto propuesto por Mercado Libre para aplicar al cargo de **frontend developer**.

Este proyecto está construído utilizando Typescript como lenguaje, NodeJS, ReactJS y SaSS.

El proyecto está distibuido en dos carpetas 

Backend la cual cuenta con la construcción de los servicios además de renderizar el front utilizando la carpeta build. 


![image](https://user-images.githubusercontent.com/8409481/184756180-fb610920-435f-40e0-98a2-467ea7457440.png)

*Imagen 1: Estructura del backend propuesto para el proyecto*



La carpeta frontend cuenta con los componentes necesarios para renderizar la información consultada a través de los servicios

![image](https://user-images.githubusercontent.com/8409481/184756360-c0e3d37a-777f-4bd8-988c-019f016532d6.png)

*Imagen 2: Estructura del frontend propusto para el proyecto*


Respuesta de los servicios implementados:

**Servicio de búsqueda.**

![image](https://user-images.githubusercontent.com/8409481/184756477-aa4f8544-ad49-4f36-8c9e-9c4a99b193ff.png)

*Imagen 3: respuesta del servicio de búsqueda - search*

</br>


**Servicio de item o producto**

![image](https://user-images.githubusercontent.com/8409481/184757817-6fe29a84-e1cc-46ff-b5ab-c8af9698bd17.png)


*Imagen 4: respuesta del servicio encargado de mostrar el detalle del item*

La respuesta del servicio `/api/item/:id` tuvo que ser modificada para poder cumplir con uno de lo puntos solicitados:
"el breadcrumb de la página de detalle del ítem debe armarse con la categoría propia del ítem"

En el cuerpo de la respuesta solicitado para el detalle no se incluía las categorías (Estas fueron agregadas).

Como implementación secundaria (no se incluye en el código adjunto), se pasaba a través del state del navigate las categorías al momento de consultarlas por medio del servicio de búsqueda - search.
![image](https://user-images.githubusercontent.com/8409481/184757015-d5d97a8f-90a8-4d65-9121-208b324c0f3a.png)

*Imagen 5: ejemplo de paso de categorías por el state del navigate*

</br>

**Para ejecutar el proyecto en local**

1. Instale los módulos para la carpeta backend y frontend (ejecute el comando en cada carpeta) `npm install`
2. Levante el servicio de NodeJS utilizando `npm start`
3. Vaya ahora al navegador y en la barra de busqueda agregue la ruta `http://localhost:800/`


**Para visualizar cambios**

1. Si modifica el backend, garantice que el servicio está abajo y ejecute el comando `npm run build`, luego levante nuevamente el servicio con `npm start`
2. Si modifica el frontend, ejecute el comando `npm run build`, NO debe ejecutar el comando `npm start` ya que el front está siendo renderizado desde el servidor.

</br>

Se adjunta url del sitio para ver el DEMO del proyecto
