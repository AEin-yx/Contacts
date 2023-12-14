const express=require("express");
const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({ message:"All Contacts" })
});

router.route('/').post((req,res)=>{
    res.status(200).json({ message:"Created a new Contact"})
})

router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`updated contact with id ${req.params.id}`})
})

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Deleted contact with id ${req.params.id}`})
})

router.route("/:id").get((req,res)=>{
    res.status(200).json({ message:`Get an Contact with id ${req.params.id}`})
})
module.exports=router;