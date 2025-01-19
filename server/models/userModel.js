import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: { type: String, require: true, unique: true},
    email: { type: String, require: true, unique: true},
    photo: { type: String, require: true},
    firstName: { type: String, require: true},
    lastName: { type: String, require: true},
    creditBalance: {type: Number, default: 10}
    
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;