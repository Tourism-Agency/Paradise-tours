const db = require("../db");

module.exports = function(app){

    app.post("/hotel/hotel_booking",(req, res)=>{

        const contact_number = req.body.contact_number;
        const booking_webside = req.body.booking_webside;
        const hotel_webside = req.body.hotel_webside;
        const user_id = req.body.user_id;
    
    
        const sqlInsert = "INSERT INTO hotel_booking_info (contact_number, booking_webside,hotel_webside,user_id) VALUES (?,?,?,4)";
        db.query(sqlInsert, 
        [contact_number, booking_webside,hotel_webside,user_id] , 
        (err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });
    
/*******************food detais******************** */
app.post("/hotel/food_detail",(req, res)=>{

    const breakfast_menue = req.body.breakfast_menue;
    const lunch_menue = req.body. lunch_menue;
    const dinner_menue = req.body.dinner_menue;
    const juices = req.body.juices;
    const dessert_enue = req.body.dessert_enue;
    const user_id = req.body.user_id;


    const sqlInsert = "INSERT INTO food_info (breakfast_menue, lunch_menue,dinner_menue,juices,dessert_enue,user_id) VALUES (?,?,?,?,?,4)";
    db.query(sqlInsert, 
    [breakfast_menue, lunch_menue,dinner_menue,juices,dessert_enue,user_id] , 
    (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }

});

});

/*****************room_details******************* */

app.post("/hotel/room_details",(req, res)=>{

    const number_of_rooms = req.body.number_of_rooms;
    const single_rooms = req.body.single_rooms;
    const double_rooms = req.body.double_rooms;
    const family_rooms = req.body.family_rooms;
    const user_id = req.body.user_id;


    const sqlInsert = "INSERT INTO room_info (number_of_rooms, single_rooms,double_rooms,family_rooms,user_id) VALUES (?,?,?,?,4)";
    db.query(sqlInsert, 
    [number_of_rooms, single_rooms,double_rooms,family_rooms,user_id] , 
    (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }

});

});

app.get("/hotel/show", (req,res) => {
    db.query("SELECT `room_info`.*, `price_info`.*, `food_info`.* FROM `room_info` INNER JOIN price_info ON room_info.user_id=price_info.user_id INNER JOIN food_info ON room_info.user_id=food_info.user_id WHERE room_info.user_id=4; ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});


/************charge details****************/
app.post("/hotel/charge",(req, res)=>{

    const price_single_room = req.body.price_single_room;
    const price_double_room = req.body.price_double_room;
    const price_family = req.body.price_family;
    const food_charge = req.body.food_charge;
    const user_id = req.body.user_id;


    const sqlInsert = "INSERT INTO price_info (price_single_room, price_double_room,price_family,food_charge,user_id) VALUES (?,?,?,?,4)";
    db.query(sqlInsert, 
    [price_single_room, price_double_room,price_family,food_charge,user_id] , 
    (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }

});

});

/*****************acaunt detais**************/
app.post("/hotel/account_details",(req, res)=>{
  //  console.log("git brsh");
    const user_name = req.body.user_name;
    const bank_name = req.body.bank_name;
    const branch_name = req.body.branch_name;
    const account_no = req.body.account_no;
    const user_id = req.body.user_id;

const sqlInsert = "INSERT INTO account_details (user_name,bank_name,branch_name,account_no,user_id) VALUES (?,?,?,?,4)";
db.query(sqlInsert, [user_name,bank_name,branch_name,account_no,user_id] ,
    (err,result) => {
    if(err){

        console.log(err);
    }else{

        res.send(result);
    }

});

});


/**************************booking info************************/


/*app.get("/hotel/show", (req,res) => {
    db.query("SELECT * FROM price_info WHERE user_id=3 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});
*/



app.get("/hotel/showAccount_details", (req,res) => {
    db.query("SELECT * FROM account_details WHERE user_id=4 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});




app.get("/hotel/hotel_booking", (req,res) => {
    db.query("SELECT * FROM hotel_booking_info WHERE user_id=4 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});

/*
app.put("/api/update_date", (req,res) => {
   
    const bookeddate = req.body.bookeddate;
   
    const sqlUpdate = "UPDATE vehicle_date SET bookeddate=? WHERE user_id=3";

    db.query(sqlUpdate, [bookeddate],(err, result) => {
       if(err) console.log(err);


    });
   
});


app.post("/api/transport_owner_date_insert",(req, res)=>{


    const bookeddate = req.body.bookeddate;
    const user_id = req.body.user_id;

    const sqlInsert = "INSERT INTO vehicle_date (bookeddate,user_id) VALUES (?,3)";
    db.query(sqlInsert, [bookeddate,user_id] ,
        (err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });

*/

 
} 
