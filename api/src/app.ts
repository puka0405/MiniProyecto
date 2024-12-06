import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserController";
import { createQuizz, getMetrics, getQuestionnaires } from "./controllers/QuestionnairesController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//linkear usuarios
app.post("/users/create", registerUsers)

app.post("/users/iniciar", singin)

app.post("/questionnaires/createQuestionnaire", createQuizz)

app.get("/questionnaire/get-metrics", getMetrics)
app.get("/questionnaires/get-all", getQuestionnaires)

export default app;