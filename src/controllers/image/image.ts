import { Request, Response } from "express";
import db from "../../models";
import { images } from "../../seeders/image";

//For testing purposes, it loads users from the seeders to DB
export const createDummyImages = () => {
    images.map((img) => {
        db.Image.create(img);
    });
};
