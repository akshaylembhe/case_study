var express=require('express')
var mongoclient=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'
var databasename='database'
var collection='sample'

app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
var server=app.listen(8082,function(){
    console.log("register server started")
})

mongoclient.connect(url,function(err,db){
    if(err!=null)
    {
console.log(err)
    }
 var dbo=db.db(databasename)
 insert_record(dbo)


findAll(dbo)

})



function insert_record(dbo)
{

    app.post("/customerregister",function(req,res){
        var custname=req.body.custname;
        var pass=req.body.pass
        var addr=req.body.addr
        var email=req.body.email
        var mobil=req.body.mobil
        var product={
            custname:custname,
            pass:pass,
            addr:addr,
            email:email,
            mobil:mobil

        }
        dbo.collection('database').insertOne(product,function(err,data){
            if(err) throw err;
            console.log(data)
            console.log('record_inserted')
        })
     res.send('record inserted')
    })
   
}

async function findAll(dbo)
{
    var mdata={}
    dbo.collection('database').find({}).toArray(async function(err,data){
        console.log(data)
     app.get("/customerregister",function(req,res){
         res.send(JSON.stringify(data))
     })
    })
}
