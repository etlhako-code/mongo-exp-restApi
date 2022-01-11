//import express from "express";
var db=require("../models");

const Tutorials= db.tutorials;
//const jsonData= require('../mock-data.json');

//get all tutorials 
exports.getAllTutorials = async (req, res) => {
   await Tutorials.find({}).then((result)=>{
       res.send(result);
   }).catch(function(err) {
        console.log(err);
        res.status(404).send({err});    
    });
   
}
//get a single tutorials
exports.getTutorial= async(req, res)=>{
    const id=req.params.id;
   await Tutorials.findById(id)
    .then((dbtut) => {
        console.log(dbtut);
        res.send(dbtut);
    })
    .catch(function(err) {
        console.log(err);
        res.status(404).send({err});
    });

}
// create a tutorial
exports.createATutorial = async(req, res) => {
    const Tutorial = new Tutorials({
          title: req.body.title,
          description: req.body.description,
          published: req.body.published
    })
   
    await Tutorials.create(Tutorial)
      .then((dbtut) => {
              console.log(dbtut);
              res.send(dbtut);
          })
    .catch(function(err) {
        console.log(err);
        res.send(err);
    });
    
};

//
exports.updateTutorial=async(req,res)=>{
    var id= req.params.id;
    await Tutorials.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(
        (data) =>{
            if(!data) res.status(404).send({message:"record not found"});
            res.status(200).send(data);
            
        }
    ).catch(function(err) {
        console.log(err);
        res.send({err});
    }); 
};
/*
exports.updateTutorial=async(req, res)=>{
    const id=req.params.id;
    var tut=req.body;   
    await Tutorials.updateOne({ "id":id }, {tut})
    .then(
        ()=>{
            res.json(dt);
        }
    ) .catch(function(err) {
        console.log(err);
        res.send({err});
    }); 
};
*/
exports.deleteTutorial=async(req, res)=>{
    const id=req.params.id;
    await Tutorials.findByIdAndRemove(id) 
    .then(
        (result)=>{
            res.send(result);
        }
    ).catch(function(err) {
        console.log(err);
        res.status(404).send({err});
    });
};

exports.deleteAll= async(req, res)=>{
    
        await Tutorials.deleteMany({})
        .then(
            (data)=>{
                if(!data) res.status(404).send({message:"the might not be any records in your DB"});
                res.status(200).send(data);
            }
        ).catch(function(err) {
            console.log(err);
            res.status(404).send({err});
        });
};

exports.findAllPublished=async (req, res)=>{
        
            await Tutorials.find({published:true})
            .then(
                (list)=>{
                    res.send(list);
                }
            ).catch(function(err) {
                console.log(err);
                res.status(404).send({err});
            });

};
