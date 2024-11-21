import { Schema } from "mongoose"

export interface IUsers {
    name:String;
    email:String;
    lastNames:String;
    password:String;
    rol:"administrator" | "client",
}

export interface IQuestionnaires{
    title:String;
    description:String;
    IUsers: Schema.Types.ObjectId | String;
}

export interface IQuestion{
    title:String;
    type:"radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    qstnrId: Schema.Types.ObjectId | String;
}

export interface IOption{
    title:String;
    questionId: Schema.Types.ObjectId | String;
}

export interface IAnswer{
    qstnrId:Schema.Types.ObjectId | String;
    questionId: Schema.Types.ObjectId | String;
    answer:String;
}