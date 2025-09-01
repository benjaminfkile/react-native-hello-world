const { execSync } = require("child_process");
const fs = require("fs");

const dirsToDelete = ["node_modules", ".expo", ".expo-shared"];
const filesToDelete = ["package-lock.json", "yarn.lock"];

dirsToDelete.forEach((dir) => {
  if (fs.existsSync(dir)) {
    console.log(`🧹 Removing ${dir}...`);
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

filesToDelete.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`🧽 Removing ${file}...`);
    fs.rmSync(file);
  }
});

console.log("📦 Reinstalling dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("✅ Project has been reset.");
