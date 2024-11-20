import { Schema, model } from "mongoose";

interface IOption{
    title:String;
    questionId: Schema.Types.ObjectId | String;
}

const OptionsSchema = new Schema <IOption>({
    title:{
        type:String,
        required:true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required:true
    }
});

export const OptionModel = model("options", OptionsSchema);