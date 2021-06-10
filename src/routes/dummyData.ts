import { Router } from "express";
import { loadDummyData } from "../controllers/dummyData/dummyData";

const dummyData = Router();

dummyData.use("/load", loadDummyData);
//Probando si se mete esto en el branch del grupo 1
export default dummyData;
