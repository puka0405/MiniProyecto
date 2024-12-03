import { Request, Response } from "express";
import { OptionModel } from "../models/OptionsModel";
import { AnswerModel } from "../models/AnswersModel";
import { QuestionModel } from "../models/QuestionModel";



export const Options = async (req: Request, res: Response): Promise <any> => {
    try {
        const title = req.body.title
        const questionId = req.body.questionId

        if (!title || !questionId ) {
            return res.status(400).json({ 
                msg: "Faltan opciones para crear el cuestionario" 
            })
        }
        const Option = await OptionModel.create({
            title,
            questionId
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            msg: "Hubo un error al crear las opciones" 
        })
    }
}

export const Answers = async (req: Request, res: Response): Promise <any> => {
    try {
        const qstnrId = req.body.qstnrId
        const questionId = req.body.questionId
        const answer = req.body.answer

        if (!qstnrId || !questionId || !answer) {
            return res.status(400).json({ 
                msg: "Faltan respuestas para crear cuestionario" 
            })
        }
        const Answer = await AnswerModel.create({
            qstnrId,
            questionId,
            answer
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            msg: "Hubo un error al crear las respuestas" 
        })
    }

}

export const Questions = async (req: Request, res: Response): Promise <any> => {
    try {
        const title = req.body.title
        const type = req.body.type
        const isMandatory = req.body.isMandatory
        const qstnrId = req.body.qstnrId

        if (!title || !type || !isMandatory || !qstnrId) {
            return res.status(400).json({ 
                msg: "Faltan preguntas para crear el cuestionario" 
            })
        }
        const Question = await QuestionModel.create({
            title,
            type,
            isMandatory,
            qstnrId
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            msg: "Hubo un error al crear las preguntas" 
        })
    }
}