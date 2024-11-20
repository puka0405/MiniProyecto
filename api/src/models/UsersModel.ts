import { Schema, model } from "mongoose";

interface IUsers {
    name:String;
    email:String;
    lastNames:String;
    password:String;
    rol:"administrator" | "client",
}

const UserSchema = new Schema <IUsers>({
    name:{
    type:String,
    required:true
    },
    lastNames:{
    type:String,
    required:true
    },
    email:{
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
    },
    rol:{
    type:String,
    enum:["administrator", "client"],
    default:"client",
    }
});

export const UserModel = model("users", UserSchema);