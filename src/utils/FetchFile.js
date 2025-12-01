import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** 
@param {string} Filename
**/

const FetchFile = (Filename) => {
  return path.join(__dirname, `../../public/${Filename}`);
};

export default FetchFile;
