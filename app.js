// importaremos los elementos para express

const express = require ("express")

// express ya trae mi http
// vmos a crear nuestro server con express

const app /* todo el proyecto */ = express() /* ejecutamos express para obtener sus propiedades y metodos */


// haremos una config para crear archivos, images, audio, css

app.use(express.static('public'))




// crearemos rutas
//post && get
// get es para traer informacion

// app.verb("/ruta,(req,res)=>{}")
app.get("/",(req,res,next)=>{
    res.send("Esta es tu ruta '/' en express") //send manda puro texto

})



// esta es la forma a utilizar para el lab
app.get("/Home",(req,res,next)=>{
    //_ _dirname para hacer referencia a todo el proyecto
    //sendFile()
    res.sendFile(__dirname +'/views/Home.html')
})

app.get("/About",(req,res,next)=>{
    //_ _dirname para hacer referencia a todo el proyecto
    //sendFile()
    res.sendFile(__dirname +'/views/About.html')
})

app.get("/Works",(req,res,next)=>{
    //_ _dirname para hacer referencia a todo el proyecto
    //sendFile()
    res.sendFile(__dirname +'/views/Works.html')
})


// end crear rutas

// aqui prendemos el server!
app.listen(3000,()=>{
    console.log("estoy corriendo en el puerto 3000")
})