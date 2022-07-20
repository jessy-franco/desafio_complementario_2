let iniciarSesion = prompt("Para realizar su compra debe iniciar sesion, si ya tiene usuario ingrese (in), sino registrese con (re)");

let usuario1 = "teteun";
let passwordLogin1 = "1234";
const listaUsRegistrados = [];
listaUsRegistrados.push(usuario1, passwordLogin1);

while (iniciarSesion != "") {
    if (iniciarSesion == "in") {
        let usuario = prompt("Ingrese su usuario:");
        if (listaUsRegistrados.includes(`${usuario}`)) {
            let password = parseInt(prompt("Ingrese su contraseña: "));
            if (listaUsRegistrados.includes(`${password}`)) {
                alert(`Login exitoso, Bienvenida/o, siga con su compra!!!`);
            }
        }
        else {
            alert(`El usuario es incorrecto, pruebe nuevamente`);
            continue
        }
    }

    else if (iniciarSesion == "re") {
        class registroUsuario {
            constructor(nombre, apellido, edad, direccion, usuario, password) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
                this.direccion = direccion;
                this.usuario = usuario;
                this.password = password;
            }
        }
        const registro = new registroUsuario(prompt("ingrese su nombre"), prompt("Ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("Ingrese su direccion"), prompt("Ingrese un usuario"), prompt("Ingrese una contraseña"));
        alert(`Se registro exitosamente`);
        listaUsRegistrados.push(registro);
        let usuario = prompt("Ingrese su usuario:");
        let password = parseInt(prompt("Ingrese su contraseña: "));
        alert(`Bienvenido/a ${usuario}`)
        /* Error, no me pushea mis nuevos registros en la lista, solo aparecen los que pushee al principio */
        /* alert(` ${listaUsRegistrados}`) */
        break
    }
    else {
        alert(`La entrada ingresada no es valida`)
        let iniciarSesion = prompt("Para realizar su compra debe iniciar sesion, si ya tiene usuario ingrese (in), sino registrese con (re)");
        continue
    }
    break
}

let productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");

function VuelvaPronto() {
    alert("Gracias por su compra!");
}
function TotalProductos() {
    let Total = ListaProductos.reduce((a, b) => a + b, 0);
    alert(`El total de su compra es: ${Total}`);
}
const ListaProductos = [];
while (productos != "") {
    if (productos == "p") {
        let plantas = parseInt(prompt("El valor de cada planta es de 400 pesos. ingrese cuantas plantas desea comprar."));
        let resultado = (`${plantas}`) * 400;
        alert(`El total de su compra es: ${resultado}`);
        ListaProductos.push(resultado);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)");
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }


    }
    else if (productos == "m") {
        let macetas = parseInt(prompt("El valor de cada maceta es de 500 pesos. ingrese cuantas macetas desea comprar."));
        let resultado2 = (`${macetas}`) * 500;
        alert(`El total de su compra es: ${resultado2}`);
        ListaProductos.push(resultado2);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)")
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }
    }
    else if (productos == "i") {
        let insumos = parseInt(prompt("El valor de cada insumo es de 300 pesos. ingrese cuantas insumos desea comprar."))
        let resultado3 = (`${insumos}`) * 300;
        alert(`El total de su compra es: ${resultado3}`);
        ListaProductos.push(resultado3);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)")
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                TotalProductos();
                VuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }

    }

    else {
        alert("La opcion ingresada no es válida");
        productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
        continue
    }
    break
}