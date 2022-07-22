#RECURSOS
##Integración API
###Para poder realizar la prueba, se requiere integrar con un API para la gestión de los datos.

El dominio del API será el mismo para todos los Endpoints, y será el siguiente:
https://front-test-api.herokuapp.com/

Las definiciones de los Endpoints son los siguientes:
####• Obtener el listado de productos
Path
GET /api/product
Response
[
{
id: 0001,
...
},
{
id: 0002,
...
}
]
####• Obtener el Detalle de producto
Path
GET /api/product/:id
Response
{
id: 0001,
...
}
####• Añadir producto a la cesta
Path
POST /api/cart

Body
{
id: 0001,
colorCode: 1,
storageCode: 2
}
Response
{
count: 1
}

#Persistencia de datos

##Se requiere, añadir un almacenaje en cliente de los datos que se reciban desde el API. Lo que
se quiere ofrecer es un sistema de cacheo, para no se realicen cada vez peticiones al API. Por
ellos, se require definir la siguiente funcionalidad:

####• Se almacenará la información cada vez que se solicite al servicio del API
####• Se guardará dicha información, y tendrá una expiración de 1 hora, una vez excedido
dicho tiempo, deberá revalidarse la información
####• Se podrá utilizar cualquier metodo de storage para almacenar dicha información, ya
sea del navegador o en memoria, pero siempre en cliente.