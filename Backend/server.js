const express=require("express");
const cors=require("cors");
const mysql=require("mysql");

const app=express();

app.use(express.json());     //pass our data to Json

app.use(cors());

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req, res) => { 
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
      if(err) return res.json("Error");
      return res.json(data);
    })
    // res.json("Hello from Backend") ;
} )

app.post('/create', (req, res) => {              // To add data
     const sql = "INSERT INTO student (Name,Email) VALUES (?)";
    const values = [
               req.body.name,
               req.body.email
       ]

       db.query(sql, [values], (err, data) => {
        console.log('Error: '+err);
             if(err) return res.json("Error");
               return res.json(data);

      })
})

app.put('/update', (req, res) => {                 // to update data
    const sql = "UPDATE student set Name = ?, Email = ? where Id = ?";
    const values = [
               req.body.name,
               req.body.email,
               req.body.id
       ]
       const id = req.params.id;

       db.query(sql, [...values, id], (err, data) => {
             if(err) return res.json("Error");
               return res.json(data);

      })
})

app.delete('/student/:Id', (req, res) => {                 // to update data
    const sql = "DELETE FROM student WHERE Id = ?";
   
       const id = req.params.Id;

       db.query(sql, [id], (err, data) => {
       
             if(err) return res.json("Error");
               return res.json(data);

      })
})


app.listen(8081, () => {
    console.log("listening");
})
