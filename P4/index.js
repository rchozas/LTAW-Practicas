const electron = require('electron');

console.log("Hola desde el proceso de la web...");

//-- Obtener elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");
const info6 = document.getElementById("info6");
const info7 = document.getElementById("info7");
const print = document.getElementById("print");
const num_user = document.getElementById("usuarios");

//-- Acceder a la API de node para obtener la info
//-- Sólo es posible si nos han dado permisos desde
//-- el proceso princpal
info1.textContent = process.versions.node;
info2.textContent = process.versions.chrome;
info3.textContent = process.versions.electron;
info4.textContent = process.arch;
info5.textContent = process.platform;
info6.textContent = process.cwd();
info7.textContent = ip.address();

electron.ipcRenderer.on('usuarios', (event, message) => {
    console.log("Recibido: " + message);
    num_user.textContent = message;
})



//-- Mensaje recibido 
electron.ipcRenderer.on('print', (event, message) => {
    console.log("Recibido: " + message);
    display.innerHTML += message;
    
});

btn_test.onclick = () => {
    console.log("Botón apretado!");

    //-- Enviar mensaje al proceso principal
    electron.ipcRenderer.invoke('test', "MENSAJE DE PRUEBA: Botón apretado");
}