import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Bienvenido al server");
})

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
    }catch(error){
        console.log(error);
    }
}

//get

app.get("/libros", (req, res) => {
    const data = readData();
    res.json(data);
})


//get
app.get("/libros/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.books.find((book)=>book.id === id);
    res.json(book);
})

//post
app.post("/crear",(req, res)=>{
    const data = readData();
    const body = req.body;
    const newBook={
        id:data.books.length+1,
        ...body,
    }
    data.books.push(newBook)
    writeData(data)
    res.json(newBook)
   
})

app.put("/editar/:id", (req, res)=>{
   const data = readData();
   const body = req.body;
   const id = parseInt(req.params.id);
   const index = data.books.findIndex((book)=>book.id === id);
  
  data.books[index]={
    ...data.books[index],
    ...body,
  }
  writeData(data)
  res.status(200).json({ message: 'Libro actualizado' });
})

app.delete("/borrar/:id", (req, res)=>{
 const data = readData();
 
 const id = parseInt(req.params.id);
 
 const index = data.books.findIndex((book)=>book.id === id);
 console.log(typeof id);

 if(index !== -1){
    data.books.splice(index, 1);
    writeData(data);
    res.status(200).json({ message: 'Libro eliminado' });
 }
 
 
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

