const mongoose = require('mongoose');
// const { stringify } = require('querystring');
//define a schema/ blueprint NOTE: id is not a part of the schema   
const carrentalSchema = new mongoose.Schema({    
    Ft_Nm:{ type: String, required: true},    
    Lt_Nm:{ type: String, required: true},
    Em_ID:{ type: String, required: true},
    Mbl_Num:{ type: String, required: true},
    Lisn_Num:{ type: String, required: true},
    p_d_loc:{ type: String, required: true},
    pickup_dt:{ type: String, required: true},
    pickup_tym:{ type: String, required: true},
    dropoff_dt:{ type: String, required: true},
    dropoff_tym:{ type: String, required: true},
    find_my_car:{ type: String, required: true}  
});
    //use the blueprint to create the model 
    // Parameters: (model_name, schema_to_use, collection_name)
    //module.exports is used to allow external access to the model  
    module.exports = mongoose.model('carrental', carrentalSchema,'carrentals'); 
    //note capital S in the collection name