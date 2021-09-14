var express = require('express');
const { Schema } = require ('mongoose');
var router = express.Router();

var Garden = require('../models/garden');

// POST /gardens

router.post('/api/gardens',function(req, res , next){
    var garden = new Garden(req.body);
    garden.save(function (err, garden){
        if (err){
            return next (err);
        }
        res.status(201).json(garden);
    });
});

// GET /gardens
router.get('/api/gardens',function(req, res , next){
    Garden.find(function (err , gardens){
        if (err){
            return next (err);
        }
         res.json({'gardens': gardens});
    });
});

//DELETE /gardens
router.delete('/', function (req, res, next) {
    Garden.remove({}, function (err) {
        if (err) {
            return next(err);
        } else res.json({ "message": 'Deleted!' })
    })
});


//GET /gaderns/:id
router.get('/api/gardens/:id',function(req, res , next){
var id = req.params.id;
Garden.findById(req.params.id, function (err , garden){
        if (err){
            return next (err);
        }
        if (garden == null){
            return res.status(404).json(
                {"message": "Garden not found"});
        }
         res.json(garden);
    });
});

//PUT /gardens/:id

router.put('/api/gardens/:id',function(req, res , next){
    var id = req.params.id;
    Garden.findById(id, function (err , garden){
            if (err){
                return next (err);
            }
            if (garden == null){
                return res.status(404).json(
                    {"message": "Garden not found"});
            }
    garden.name = req.body.name;
    garden.size= req.body.size;
    garden.cordintelatitude = req.body.cordintelatitude;
    garden.cordintelongitude = req.body.cordintelongitude;
    garden.save();
    res.json(garden);
        });
    });


     // PATCH /gardens/:id

     router.patch('/api/gardens/:id',function(req, res , next){
        var id = req.params.id;
        Garden.findById(id, function (err , garden){
                if (err){
                    return next (err);
                }
                if (garden == null){
                    return res.status(404).json(
                        {"message": "Garden not found"});
                }
        garden.name = (req.body.name || garden.name);
        garden.size= (req.body.size || garden.size);
        garden.cordintelatitude = (req.body.cordintelatitude || garden.cordintelatitude);
        garden.cordintelongitude = (req.body.cordintelongitude || garden.cordintelongitude);
        garden.save();
        res.json(garden);
            });
        });


    // DELETE /gardens/:id

    router.delete('/api/gardens/:id',function(req, res , next){
        var id = req.params.id;
        Garden.findOneAndDelete({_id:id}, function (err , garden){
                if (err){
                    return next (err);
                }
                if (garden == null){
                    return res.status(404).json(
                        {"message": "Garden not found"});
                }
                 res.json(garden);
            });
        });

       


module.exports = router;