const asyncHandler=require("express-async-handler");
//@desc get all contacts 
//@route GET/api/contact
//@access public

const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({ message:"All Contacts" })
});

//@desc create new contact 
//@route POST/api/contact
//@access public

const createContact=asyncHandler(async(req,res)=>{
    console.log("The req body is",req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message:"Created a new Contact"});
});

//@desc update contact with id
//@route PUT/api/contact/id
//@access public

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`updated contact with id ${req.params.id}`})
});

//@desc delete contact with id
//@route DELETE/api/contact/id
//@access public

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Deleted contact with id ${req.params.id}`})
});

//@desc getIContact
//@route GET/api/contact/id
//@access public

const getIContact=asyncHandler(async(req,res)=>{
    res.status(200).json({ message:`Get an Contact with id ${req.params.id}`})
});

module.exports={getContact,createContact,updateContact,deleteContact,getIContact};