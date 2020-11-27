const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tourmongo:<tourmongo123>@cluster0.u7s8d.mongodb.net/<dbname>?retryWrites=true&w=majority"

// //specify where to find the schema
const Carrental = require('./models/carrental')
// //connect and display the sattus
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });


// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');

    next();
});


app.get('/carrentals', (req, res, next) => {
    // call mongoose method find (MongoDB db.Students.find())  
    Carrental.find()
        //if data is returned, send data as a response    
        .then(data => res.status(200).json(data))
        //if error, send internal server error    
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json(err);
        }); 
   

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("IT6203").collection("carrentals");
        console.log(collection) 
        //perform actions on the collection object   
        client.close()
    });

});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// serve incoming post requests to /carrentals
app.post('/carrentals', (req, res, next) => { 
    // create a new student variable and save request’s fields
    console.log("test req " + req.body.Ft_Nm);
    const carrental = new Carrental({

        Ft_Nm: req.body.Ft_Nm, 
        Lt_Nm: req.body.Lt_Nm, 
        Em_ID: req.body.Em_ID,
        Mbl_Num: req.body.Mbl_Num,
        Lisn_Num: req.body.Lisn_Num,
        p_d_loc: req.body.p_d_loc,
        pickup_dt: req.body.pickup_dt,
        pickup_tym: req.body.pickup_tym,
        dropoff_dt: req.body.dropoff_dt,
        dropoff_tym: req.body.dropoff_tym,
        find_my_car: req.body.find_my_car
    });

    //    send the document to the database 
    carrental.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error:' + err); });

});

// id is a dynamic parameter that will be extracted from the URL
app.delete("/carrentals/:id", (req, res, next) => {
    Carrental.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});
// serve incoming put requests to /students
app.put("/carrentals/:id", (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Carrental.findOneAndUpdate({_id: req.params.id},
        {$set:{ Ft_Nm: req.body.Ft_Nm, 
            Lt_Nm: req.body.Lt_Nm,
            Em_ID: req.body.Em_ID,
            Mbl_Num: req.body.Mbl_Num,
            Lisn_Num: req.body.Lisn_Num,
            p_d_loc: req.body.p_d_loc,
            pickup_dt: req.body.pickup_dt,
            pickup_tym: req.body.pickup_tym,
            dropoff_dt: req.body.dropoff_dt,
            dropoff_tym: req.body.dropoff_tym,
            find_my_car: req.body.find_my_car}},{new:true}) 
       .then((carrental) => {
          if (carrental) { //what was updated
            console.log(carrental);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err); 
       });
   } else {
     console.log("please provide correct id");
   }
    
  });  


//to use this middleware in other parts of the application
module.exports = app; 
 

