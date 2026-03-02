const express=require("express")
const app=express()
const path=require("path")
const PORT = process.env.PORT || 3000;
const hbs=require("hbs")
const tempelatePath=path.join(__dirname,'../templates')
const colection=require("./mongodb")


app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, '../public')));



app.get('/login',(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await colection.insertMany([data]);

    res.render("home");

}); 

app.post("/login",async (req,res)=>{

    try{
        const check=await colection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("Wrong Password")
        }    
    }    

    catch{
        res.send("Wrong Details")
    }

    app.get("/home",(req,res)=>{
        res.render("home")
    })
}); 

// app.get('/kids.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'C:\Users\omp36\Desktop\stream hub\templates\kids.html'));
// });


app.listen(3000,()=>{
    console.log("port connected");
})

