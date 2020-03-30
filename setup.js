const fs = require("fs");
const path = require("path");

const EMPTY_LINE = "";

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
};
const deleteFolder = folder => {
  if (fs.existsSync(folder)) {
    fs.readdirSync(folder).forEach((file, index) => {
      const curFolder = path.join(folder, file);
      if (fs.lstatSync(curFolder).isDirectory()) {
        deleteFolder(curFolder);
      } else {
        fs.unlinkSync(curFolder);
      }
    });
    fs.rmdirSync(folder);
  }
};

console.log(EMPTY_LINE);

console.log("🧹  Clean...");

// Remove folders
deleteFolder(".git");

// Remove files
deleteFile("setup.js");
deleteFile("LICENSE");

console.log("✅ Finished!");
