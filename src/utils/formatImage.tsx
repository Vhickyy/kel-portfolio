import DataParser from 'datauri/parser';
import path from "path";

const parser = new DataParser();

const formatImage = (file:any,buffer:any) => {
    const fileExtension = path.extname(file.name).toString();
    return parser.format(fileExtension, buffer).content;
};

export default formatImage