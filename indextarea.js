


const docente = {
    nombre : "Kevin",
    apellido:"Darnet",
    altura:"1.75",
    edad:"29",
    coloresFavoritos: ["rojo","azul"],
    mascotas:[
        {nombre:"Rexie", tipo: "🐱‍🐉"},
        {nombre:"Mark", tipo: "🐶"},
        {nombre:"Annie", tipo: "😸"},
    ]

}


console.log(docente.mascotas[1].nombre +" "+ docente.mascotas[1].tipo)
let markTipo = `${docente.mascotas[1].nombre} ${docente.mascotas[1].tipo}`
console.log(markTipo)
console.log(`A ${docente.nombre} le gusta el color ${docente.coloresFavoritos[0]} y el color ${docente.coloresFavoritos[1]}`)




const alumnos = [
    {
        nombre: "Jorge Matias",
        apellido: "Ott",
        deportes:[
        {
            nombre:"Ping Pong",
            dias: ["Martes", "Jueves"],
            torneos: false
        },
        {
            nombre:"Futbol",
            dias:["Sabado"],
            torneos: false
        }
    ]
    },
    {
        nombre:"Matias",
        apellido:"Rusiecki",
        apodo:"Mati",
        musica:[
            {grupo:"David Bowie", puntaje:10,genero:"hizo todo bien"},
            {grupo:"Gabo Ferro", puntaje:9, genero:"especial"}
        ]
    }
]