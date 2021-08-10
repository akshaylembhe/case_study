var mongoclient=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017/"
var database='database'
function main ()
{
    mongoclient.connect(url,function(err,db){
        var dbo = db.db(database)
        console.log(dbo)
        dbo.createCollection("custmer",function(err,res)
        {
            console.log(res)
            console.log("customer is cerated")
        })
        var prod=[
            {
                custname:"shaym",
                pass:"1234",
                addr:"7th lane jap",
                email:"shayam123@SpeechGrammarList.com",
                mobil:1234567890
            },
            {
                custname:"ram",
                pass:"2345",
                addr:"9th lane jsp",
                email:"ram123@gmail.com",
                mobil:1245667890
            },
            {
                custname:"shaym",
                pass:"3456",
                addr:"7th lane mg road kop",
                email:"shayam13@SpeechGrammarList.com",
                mobil:9978567890
            },
            {
                custname:"raju",
                pass:"5678",
                addr:"7th lane scb road",
                email:"raju123@SpeechGrammarList.com",
                mobil:1234009890
            },
            {
                custname:"peter",
                pass:"6789",
                addr:"7th lane pune",
                email:"peter123@gmail.com",
                mobil:9964567890
            },
            {
                custname:"edgar",
                pass:"8901",
                addr:"3th lane jsp",
                email:"edgar123@SpeechGrammarList.com",
                mobil:8669567890
            },
            {
                custname:"jons",
                pass:"65456",
                addr:"5th lane mumbai",
                email:"jons23@SpeechGrammarList.com",
                mobil:7568567890
            },
            {
                custname:"joy",
                pass:"8678",
                addr:"11th lane beng",
                email:"joy123@SpeechGrammarList.com",
                
                mobil:6789567890
            }
        ]
      
        dbo.collection("custmer").find({}).toArray(function(err,data){
            console.log(data)
         })


    })
    console.log("record inserted");

}

main ()