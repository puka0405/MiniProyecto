import { Schema, model} from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";

const QuestionnairesSchema = new Schema <IQuestionnaires>({
    title :{
    type:String,
    required:true    
},
    description:{
    type:String,
    required:true
},
IUsers:{
    type: Schema.Types.ObjectId,
    ref: "users",
    required:true
}
});

export const QuestionnairesModel = model("questionnaires", QuestionnairesSchema);