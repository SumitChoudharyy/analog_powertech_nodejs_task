import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        Enum: ["open", "closed", "pending"],
        default : "open"
    }
},{timestamps:true});

export const Ticket = mongoose.model("Ticket",ticketSchema);