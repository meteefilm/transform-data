const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const cors = require("cors");
const addHeader = require("./addHeader");

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cors());
app.use(addHeader);


app.post('/transform/callapi', async (req, res) => {
    let data = { errorcode : 0 , errormessage : '', data : null };
    try{
      let url = req.body?.url || "";
      if(url !== ""){
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url,
            headers: { }
          };
          await axios.request(config)
            .then((response) => {
              data.data = response.data
            })
            .catch((error) => {
                data.errorcode = 1;
                data.errormessage = error.message
            });

      }else{
        data.errorcode = 1;
        data.errormessage = "ไม่พบ URL !"
      }
    }catch(err){
      data.errorcode = 1;
      data.errormessage = err.message
    }
    res.status(200).send(data)

})

app.use("/transform/",express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
