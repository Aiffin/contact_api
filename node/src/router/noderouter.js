import { addNewContact,getContact,getContactId,updateContact, deleteContact } from '../controllers/nodeControllers'

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{
    //middelware
    console.log(`request from : ${req.originalUrl}`);
    console.log(`request type: ${req.method}`)
    next();
    },getContact)

    .post(addNewContact);



    app.route('/contact/:Idcontact')

    .get(getContactId)

    .put(updateContact)

    .delete(deleteContact);
}

export default routes;
