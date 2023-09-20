const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("Error: cannot open file.");
        console.log(error);
        return;
    }
    console.log(data);
}

const filePath = path.resolve(__dirname, "notes.txt");

fs.readFile(filePath, "utf-8", fileReadCallback);