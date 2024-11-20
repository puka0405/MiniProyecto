import { Schema, model } from "mongoose";

interface IQuestion{
    title:String;
    type:"radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    qstnrId: Schema.Types.ObjectId | String;
}

const QuestionSchema = new Schema <IQuestion>({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum: ["radio", "checkbox",  "select", "text"],
        required:true
    },
    isMandatory:{
        type:Boolean,
        required:true
    },
    qstnrId: {
        type: Schema.Types.ObjectId,
        ref:"questionnaires",
        required:true
    }
});

export const QuestionModel = model ("questions", QuestionSchema);