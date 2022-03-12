import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    index: Number,
    name: String,
    username: String,
    email: String,
    Phone: Number
});
const user = mongoose.model('user', userSchema);
 
export default user; 
 