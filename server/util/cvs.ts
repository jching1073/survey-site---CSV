import { Response } from "express";
import { Parser } from "json2csv";
export const downloadResource = (res: Response, filename: string, fields: string[], data: object[]) =>
{
    const json2cvs = new Parser ({fields});
    const cvs = json2cvs.parse(data);
    res.header('Content-Type', 'text/csv');
    res.attachment(filename);
    return res.send(cvs);
}
