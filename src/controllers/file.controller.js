import FetchFile from "../utils/FetchFile.js";

const File = (filename) => (req,res) => {
    res.sendFile(FetchFile(filename));
}

export default File;