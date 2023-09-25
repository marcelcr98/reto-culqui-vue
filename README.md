# reto-culqui-card-token

### Nota: Colocar las credenciales para la BD Postgres y Redis
### Instalar las dependencias del servidor (Backend)
```
npm install --prefix server
```

### Instalar las dependencias del cliente (Frontend)
```
npm install
```

### Generar el build del servidor
```
npm run build
```

### Ejecutar el servidor
```
npm run dev --prefix server
```

### Ejecutar el cliente
```
npm run serve
```

### Probar metodo POST
```bash
http://localhost:3000/card/token 
```

```json
{ 
    "email": "mcuellarr04@gmail.com" ,
    "card_number": "4111111111111111", 
    "cvv": "123", 
    "expiration_month": "06", 
    "expiration_year": "2028", 

}
```

### Probar nuestros GET
```bash
http://localhost:3000/card/token/{token}
```
Response:
```json
{
    "card_number": "4111111111111111",
    "expiration_month": "06",
    "expiration_year": "2028",
    "email": "mcuellarr04@gmail.com"
}
```
Body:
Authorization: pk_test_0ae8dW2FpEAZlxlz


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
