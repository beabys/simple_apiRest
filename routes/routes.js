var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    //Todo: your implementation here
    res.send("Hello World!");
});


router.get("/products", function (req, res) {
    //Todo: your implementation here
    res.json({"SUCCESS" : true, "data": "My test data"});
});

router.post("/products", function (req, res) {
    //Todo: your implementation here
    if (req.body.id && req.body.id != '') {
        res.json({"SUCCESS" : true, "id": req.body.id});
    } else {
        res.json({"error": "send id:id_number"});
    }
});

router.put("/product/:id", function (req, res) {
    //Todo: your implementation here
    if (req.params.id != '') {
        res.json({"SUCCESS" : true, "id": req.params.id, "body" : req.body.data});
    } else {
        res.json({"error" : "send with put method: host/products/id_number"});
    }
});

router.delete("/product/:id", function (req, res) {
    //Todo: your implementation here
    if (req.params.id != '') {
        res.json({"SUCCESS" : true, "response": "element " + req.params.id + " deleted"});
    } else {
        res.json({"error": "send with delete method: host/products/id_number"});
    }
});

module.exports = router;