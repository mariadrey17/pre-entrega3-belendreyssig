//El proyecto es una boleta virtual de calificaciones de los estudiantes , ellos ingresan sus datos , ingresan luego sus notas y si la nota final es igual o mayor a 18 aprueban para dar el examen final , da alerta si aprobo o no, luego van a ver mesa de examen con las materias disponibles que pueden rendir  
//en caso caso de aprobarsale la alerta con la materia tal el dia  .ey html las materias disponibles ,y también finalmente la lista de alumnos aprobados Va quedar almacenado en el storag
//objetos los alumnos ,todo se centra en ellos

//1 Alerta de bienvenida
// titulo principal calificaciones del estudiante escuela integral de arte free art 
//poner titulo secundario completa tus datos 
//ingreso de datos 
//Inicio 
//leer Nombre y Apellido
//leer edad
//leer curso
//enviar datos a la consola y pantalla html


//poniendo titulo principal


//Creando alerta de Bienvenida
let holaBoton =document.getElementById("holaBoton")
holaBoton.addEventListener("click",saludo)
const logo="./img/logo.jpg"

function saludo( ){
    swal ({
        title:"Bienvenido/a a la Escuela Free Art",
           icon:logo,
    })
}

//pasar del otro lado al html o DOM
let title= "Calificaciones Escuela Integral de Arte Free Art "
let tituloAImprimir=document.getElementById("title")
tituloAImprimir.innerHTML=title
console.log(tituloAImprimir)



let title2= "Ingresa tus Datos Aquí: "
let tituloAImprimir2=document.getElementById("title2")
tituloAImprimir2.innerHTML=title2
console.log(tituloAImprimir2)

//formulario


const datos =document.getElementById("datos")
const nombre=document.getElementById("nombre")
const edad=document.getElementById("edad")
const  email=document.getElementById("email")
const  curso=document.getElementById("curso")


datos.addEventListener ('submit', (e) =>  {
    e.preventDefault()
    //console.log (e)
    console.log (nombre.value)
    console.log (edad.value)
    console.log (email.value)
    console.log (curso.value)

})




//Ingreso de Calificaciones

//pasar del otro lado al html o DOM
let titleCalificaciones= "Ingreso de Calificaciones  "
let tituloAImprimir3=document.getElementById("titleCalificaciones")
tituloAImprimir3.innerHTML=titleCalificaciones
console.log(tituloAImprimir3)






//Inicio
//ingreso de nota 1 nota 2 y nota3
//calcula la nota diciendo la nota final 
/*inicio
leer n1
leer n2
leer n3
p=(n1+n2+3);
escribir p
fin*/







function calculando (nota1,nota2,nota3)

{  nota1 = Number (document.getElementById("nota1").value) ;
nota2=Number (document.getElementById("nota2").value );
nota3= Number  (document.getElementById("nota3").value);
let p = nota1 + nota2 +nota3 ;

document.getElementById("promedio").innerHTML="el promedio es " + p ;
console.log (p)}


function notificacionFinal( ){
    let final =document.getElementById("final").value;
    if (final>=18){
        alert ("estas aprobado");
    }else {
        alert ("no esta aprobado");
    }
    
}


let titleMaterias="Mesas de examen"
 impresionTituloExamen=document.getElementById("titleMaterias")
impresionTituloExamen.innerHTML=titleMaterias
console.log (impresionTituloExamen)




//array para materias de exmen final ,los alumnos van a ver en está lista que materias están disponibles para rendir finl
const subject=["Actuación teatral  1  fechas 9 y 10/2/2023 a las 18hs ", "Actuacion cinetv 2  fechas 6 y 8/2/2023 a las 19:30hs","Educacionvocal 1  fechas 6/2/2023  las 17hs y 19hs ","Lenguaje de cine    fechas  12 y 13 /2/2023  a las 18hs","Historia de la danza 28/2/2023 a las 18hs y 20hs  ","Análisis de texto 1  26/2/2023  las 17 hs y 19:30hs"]

let materiasFinal=document.getElementById ("materiasFinal")

for (const estudianteA of subject){

    let li =document.createElement("li")
    li.innerHTML=estudianteA
    materiasFinal.appendChild(li)
}

let datosMesa ="Anotate en las mesas de Examenes"
 impresionMesaExamen=document.getElementById("datosMesa")
impresionMesaExamen.innerHTML=datosMesa
console.log (impresionMesaExamen)




//los alumnos se anotan para rendir el examen y les sale por html el nombre apellido materia y  dia que rinden 


function quieroRendir (nombreYApellido,materia,fecha)

{  nombreYApellido =  (document.getElementById("nombreYApellido").value) ;
materia= (document.getElementById("materia").value );
fecha=  (document.getElementById("fecha").value);
let anotarse = materia  + fecha

document.getElementById("rindo").innerHTML= "yo  " +  nombreYApellido +  "  rindo   " +   anotarse ;
console.log (nombreYApellido  ,  anotarse )}



//lista de alumnos aprobados Salen tanto por html y por localStorage

//pasar del otro lado al html o DOM


let listaAprobados="Lista de Aprobados"
impresionListaTitulo=document.getElementById("listaAprobados")
impresionListaTitulo.innerHTML=listaAprobados
console.log (impresionListaTitulo)



const estudiantesPass=[ "Ignacio nota= 22",  "Sofia nota=19", "gabriel nota= 26","Belen =19" ,"Agustín nota=21 ","María nota =30", "Fernando nota=22","Soledad nota=18"]
let aprobados=document.getElementById("aprobados")

for (const pass of estudiantesPass){
    let li =document.createElement("li")
    li.innerHTML=pass
    aprobados.appendChild(li)}


    const calificacionAprobados = [
        {
            nombre: "Ignacio",
            elemento: "estudiante",
            calificacionFinal: 22,
        },
        {
            nombre: "Gabriel",
            elemento: "estudiante",
            calificacionFinal: 26,
    
        },
        {
            nombre: "Sofia",
            elemento: "estudiante",
            calificacionFinal: 19,
        },
        {
            nombre: "Belen",
            elemento: "estudiante",
            calificacionFinal: 19,
    
        },
        {
            nombre: "Agustin",
            elemento: "estudiante",
            calificacionFinal: 21,
        },
        {
            nombre: "Maria",
            elemento: "estudiante",
            calificacionFinal: 30,
    
        },
        {
            nommbre: "Fernando",
            elemento: "estudiante",
            calificacionFinal: 22,
        },
        {
            nombre: "Soledad",
            elemento: "estudiante",
            calificacionFinal: 18,
    
        }
    ]
    let calificacionFinal=""
    
    
    const calificacionJSON=JSON.stringify(calificacionAprobados)
    localStorage.setItem ( "calificacionAprobados",calificacionJSON)


    //guardando datos de 4 estudiantes en local storage

    class Alumno {
        constructor(nombre, apellido, edad, curso, ) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.curso = curso;}
           }
    
           //objetos
    const escolar1 = new Alumno("Maria", "Rodriguez", 13, "tercero", 7, 7, 8, 22);
    const escolar2 = new Alumno("Gabriel", "Lopez", 14, "tercero", 6, 7, 6, 19);
    const escolar3 = new Alumno("Cintia", "Ibarra", 14, "tercero", 6, 8, 8, 22);
    const escolar4 = new Alumno("Fabian", "Castro", 13, "tercero", 4, 7, 4, 15)
    
    
    const datosJSON=JSON.stringify(escolar1)
    localStorage.setItem ( "escolar1",datosJSON)
    localStorage.setItem ( "escolar2",datosJSON)
    localStorage.setItem ( "escolar3",datosJSON)
    localStorage.setItem ( "escolar4",datosJSON)
    
    console.log(escolar1 , escolar2,escolar3,escolar4)