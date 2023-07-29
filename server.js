var express = require ('express')
var cors = require ('cors')
const fetch = (...args)=> 
    import ('node-fetch').then(({default:fetch})=> fetch(...args))
var bodyParser = require ('body-parser')

const CLIENT_ID = '996163ec51a4769e7186'
const CLIENT_SECRET = '6f2424065b8a7ebf49cf605fda211c5592f72712'

var app = express()
 app.use(cors())
 app.use(bodyParser.json())

 app.get('/getAcessToken',async function(req,res){
    req.query.code
    const params ="?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&code="+req.query.code

    await fetch("https://github.com/login/oauth/access_token"+params,{
        method:"POST",
        headers:{
            "Accept":"application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then ((data)=>{
     
        res.json(data)
    })
 })

 //get userData 
 app.get('/getUserData',async function(req,res){
    
    req.get("Authorization")
    await fetch("https://api.github.com/user",{
    method:"GET",
    headers:{
        "Authorization":req.get("Authorization")
    }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
    
        res.json(data)
    })
 })

 app.listen(4000,function(){
    console.log("Server Running...")
 })