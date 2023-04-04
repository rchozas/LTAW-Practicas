const http = require('http');
const fs = require("fs");

const server = http.createServer((peticion, respuesta) => {
    const ruta = "." + peticion.url;
    console.log("Peticion.url: " + peticion.url);
    console.log("Ruta: " + ruta);
    fs.readFile(ruta, (error, contenido) => {
        if (error) {
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.write("<h1>404 Not Found</h1>");
            respuesta.end();
        } else {
            const extension = ruta.split(".").pop();
            const tipoContenido = extension === "jpg" ? "image/jpg" : "text/html";
            respuesta.writeHead(200, { "Content-Type": tipoContenido });
            respuesta.write(contenido);
            respuesta.end();
        }
    })
});

server.listen(9000, () => {
    console.log("Servidor web escuchando en el puerto 9000");
});
