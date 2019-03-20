import mongoose from 'mongoose';
import { ContactSchema } from '../models/nodemodels'

const Contact = mongoose.model('Contact',ContactSchema)

//post function
export const addNewContact =(req,res) =>{
    let newContact = new Contact(req.body);
    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}

//get function

export const getContact = (req,res) => {
    Contact.find({},(err,contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    })

}

//get by Id function

export const getContactId = (req,res) => {
    Contact.findById(req.params.Idcontact,(err,contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    })

}

//put function

export const updateContact = (req,res) => {

    Contact.findOneAndUpdate({_id : req.params.Idcontact},req.body,{new: true},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    })

}

//delete function
export const deleteContact = (req,res )=>
{
    Contact.remove({_id: req.params.Idcontact},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json({message:'successful del'})
    });
};