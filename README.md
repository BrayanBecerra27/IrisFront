# PruebaIris

En este repositorio se encuentra la solución a la prueba técnica para el cargo de Full-Stack de Iris Financiera. Se encuentra conformado por dos proyectos, un collection de postman para validación de los servicios y un script sql para la db.


## 1) Proyecto Front-End

  - Se encuentra en el ficher Iris_Front del repositorio
  - Esta es una app realizada en angular 15
  - se agregó la funcionalidad de guardar como favoritos y desde el selectbox desplegar la lista de favoritos. 


El proyecto frontend está desplegado en un bucket de amazon S3, al cuál se puede acceder desde: `http://irisfront.s3-website-us-east-1.amazonaws.com/`.

## Local Server 

Para correr el proyecto de forma local debe contar con angular en su versión 15 o susperior y C# con .Net 5

Abra la carpeta y ejecute el comando `ng serve` para crear un servidor de desarrollo. Navegue a `http://localhost:4200/`.

## 2) Proyecto Back-End

  - Se encuentra en el fichero IrisBack del repositorio
  - Esta es una Api Rest realizada con asp.net 5.0   
  - Se adjunta collection de postman para realizar pruebas. 
  - Implementa CI/CD mediante Github Actions la cual construye una imagen de docker y la despliega en amazon apprunner. 
  - Cuenta con swagger UI alojado en `` para rapido test del api


El proyecto backend se encuentra desplegado en una instancia de apprunner de amazon en el siguiente enlace
 `https://cjpawwprbe.us-east-1.awsapprunner.com` endpoint que se utiliza el frontend para consumirlo

## Local server

Para correr el proyecto de forma local debe contar con .net SDK en su versión 5.0

Utilizando Visual Studio abra la solución IrisBack.sln que se encuentra en el directorio api de la raiz del repositorio.

Fije como proyecto de inicio `IIS Express` y procedar a ejecutarlo con visual studio

## Anotaciones
El proyecto utiliza autenticación simple jwt. Para obtener el token utilizar Request "Autentication" del collection de postman, se necesita un name y password adjuntos también en el request.

El proyecto de backend utiliza una base de datos sql server, la cual esta alojada remotamente en un servidor privado, en donde se encuentra información sensible, por lo cual se adjunta un fichero con el script de sql (Irissql)necesario si se requiere hacer pruebas en local.





