const { required } = require('joi');
const {Schema,model} = require('mongoose');

const Form = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    },
    created_at:{
        type:Date,
        default:Date.now

    }
})

const ContactForm = model('Contact_Form',Form)
module.exports = ContactForm;