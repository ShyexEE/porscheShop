import express from "express";
import bodyParser from "body-parser";
import porsche from "./porsche.js"
import cors from "cors"
import pg from "pg";
import bcrypt from "bcrypt"
import session from "express-session"
import passport from "passport"
import env from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const app = express();
const port= 5000;
const saltRounds = 10;
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl:true
  });
db.connect();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());



app.get("/api/", async (req, res) => {
   res.send("Server it's working")
})

app.get("/api/data", async (req, res) => {
    res.send("Data is Muahaha")
 })

app.get("/api/model/:id", async (req, res) => {
     if(req.params.id === "taycan"){
     res.send(model(porsche.taycan))
      }
    if(req.params.id === "cross-turismo"){
        res.send(model(porsche.crossturismo))
        }
    if(req.params.id === "sport-turismo"){
        res.send(model(porsche.sportturismo))
        }
    if(req.params.id === "cayman"){
        res.send(model(porsche.cayman))
            }
    if(req.params.id ==="cayman-gt4-rs"){
        res.send(model(porsche.caymangt4rs))
    }
    if(req.params.id ==="718-spyder-rs"){
        res.send(model(porsche.spyderRS))
    }
    if(req.params.id ==="911-carrera"){
        res.send(model(porsche.carrera))
    }
    if(req.params.id ==="911-turbo"){
        res.send(model(porsche.turbo))
    }
    if(req.params.id ==="911-turbo-s"){
        res.send(model(porsche.turboS))
    }
    if(req.params.id ==="911-dakar"){
        res.send(model(porsche.dakar))
    }
    if(req.params.id ==="911-gt3"){
        res.send(model(porsche.gt3))
    }
    if(req.params.id ==="911-gt3-rs"){
        res.send(model(porsche.gt3RS))
    }
    if(req.params.id ==="911-st"){
        res.send(model(porsche.ST))
    }
    if(req.params.id ==="911-targa"){
        res.send(model(porsche.targa))
    }
})

//add per ex:  porsche.taycan 
function model(porscheCar){
    return {
        image: porscheCar.image,
        title: porscheCar.title,
        price: porscheCar.price,
        acceleration:  porscheCar.acceleration,
        logo: porscheCar.logo,
        kw: porscheCar.kw,
        ps: porscheCar.ps,
        speed: porscheCar.speed,
        imageFront: porscheCar.imageFront,
        imageFirst: porscheCar.imageFirst,
        imageSecond: porscheCar.imageSecond,
        imageCard: porscheCar.imageCard,
        emissions: porscheCar.emissions,
        models:  porscheCar.models,
        links:porscheCar.links
    }
}

app.get("/api/details", async (req, res)=> {
     try{
      const result = await db.query("SELECT * FROM porscheusers WHERE id=$1",[currentId.id]);
      const details = JSON.parse(result.rows[0].details)
      res.send({
        name:result.rows[0].name,
        details: details
    })
     }catch(err){
        console.log(err)
     }
})


app.get("/api/custom", async (req, res) => {
    res.send(status)
})


app.post("/api/custom", async (req, res)=>{
  try{
    const result = await db.query("SELECT details FROM porscheusers WHERE id=$1",[currentId.id]);
    if(result.rows[0].details){  //if one object its already in the array push the new one in the array
      const details = req.body
      const dbArrayofObject =  JSON.parse(result.rows[0].details)      
      dbArrayofObject.push(details)
     const Json = JSON.stringify(dbArrayofObject)
      await db.query("UPDATE porscheusers SET details=$1 WHERE id=$2",[Json, currentId.id]); 
    }
    else{         //push the first  array of Json
    const details = req.body
    let arrayy=[]
    arrayy.push(details)
    const JsonDetails = JSON.stringify(arrayy)
    await db.query("UPDATE porscheusers SET details=$1 WHERE id=$2",[JsonDetails, currentId.id]); 
    }
    }catch(err){
      console.log(err)
    }
});


app.get("/api/signup", async (req, res)=>{
    res.send(accountExists)
})
var accountExists = {status: false}

app.post("/api/signup", async (req, res)=>{
    const body = req.body
    if(body.mName.length===0){var fullName = body.fName+" "+ body.lName}
    else{var fullName =  body.fName+" "+body.mName+" "+ body.lName}
    const email = body.email
    const password = body.password1  
    try{
     const result  = await db.query("SELECT * FROM porscheusers WHERE email = $1",[email])
     if(result.rows.length>0){
         accountExists.status=true
     }else{
        //hashing Password
        bcrypt.hash(password, saltRounds, async (err, hash)=>{
        if (err){
            console.log("Error Hashing password:", err)
        }else{   
                console.log("Hashed Password:", hash);
                await db.query("INSERT INTO porscheusers (email, password, name) VALUES ($1, $2, $3)",
                [email, hash, fullName]);   
            }
        });
        console.log("Succesfully signed up")
        }
     }  catch(err){
        console.log(err)
    }
});

app.post("/api/signout", async (req, res)=>{
    status.status=false
})

app.get("/api/isLoggedIn", async (req, res)=>{
    res.send(status)
})

app.get("/api/login-password", async (req, res) =>{
    res.send(status)
})




let status = {status: false}
var currentId = {id:""}


app.post("/api/login-password", async function(req, res){
   const email = req.body.email
   var emailll = req.body.email
   const loginPassword = req.body.password 
   try{
    const result = await db.query("SELECT * FROM porscheusers WHERE email=$1",[
        email
    ]);
     if(result.rows.length > 0){
      const user = result.rows[0];
        var storedHashedPassword = user.password;
     bcrypt.compare(loginPassword, storedHashedPassword, (err, result)=>{
        if (err){
            console.log("Error comparing passwords", err)
        }else{
            if(result){
                console.log("Logged in Succesfully")
                status.status=true
                currentId.id = user.id
                console.log("This is the current id: ", currentId)
            }else{
               console.log("Incorrect Password")
          }
        }
      });
   }else{
    console.log("User not found")
    }
   }catch(err){
    console.log(err)
  }
})

app.get("/api/backendifo", async (req, res) =>{
    res.send({
     currentId: currentId.id,
     email: email,
     isLoggedin: status.status,
     hashpassword: storedHashedPassword,
     loginPass: loginPassword,
    })
})


 //Handle all other routes by serving the React app
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

//res.json({"users": ["Taycan its the best"]})
app.listen(port, () => {
    console.log("Server is running on port "+ port);
})





