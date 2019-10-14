var express = require("express");
var router = express.Router();
var connection = require("../../db");
const bodyparser = require("body-parser");
var admin = require("firebase-admin");

//using put method to update alert
router.all("/:id", (req, res) => {
  const data = {
    alertaccept: new Date()
  };
  connection.query(`select token from alerttable where id="${req.params.id}"`,(err,data1) =>{
    if(!err){
      var apptoken=(data1[0].token)
     
      //old 
       
  connection.query(
    `update alerttable set alertaccept="${data.alertaccept}" where id="${req.params.id}"`,
    (error, data) => {
      if (!error) {
        res.json({
          status: true,
          message: "Alert Accepted"
        });
        //
        var serviceAccount = require("/home/rqavi/Desktop/alert/private.json");

        if (!admin.apps.length) {
          admin.initializeApp({
        
              credential: admin.credential.cert(serviceAccount),
              databaseURL: "https://loyal-saga-254206.firebaseio.com"
          
          });
        }
        
//app token 
        var token = apptoken

        var payload = {
          notification: {
            title: "Alert Notification",
            body: "ALERT ACCEPTED SUCCESSFULLY."
          }
        };
        var options = {
          priority: "high",
          timeToLive: 60 * 60 * 24
        };
        admin
          .messaging()
          .sendToDevice(token, payload, options)
          .then(function(response) {
            console.log("Successfully sent message:", response);
          })
          .catch(function(error) {
            console.log("Error sending message:", error);
          });
      } else {
        res.send(error);
      }
    }
  );
      //old end
    }
    else{
      console.log(err)
    }
  })
});
//message

module.exports = router;
