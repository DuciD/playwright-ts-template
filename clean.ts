//const fs = require("fs-extra");
import fs from 'fs-extra'
try {
    fs.ensureDir("test-results");
    fs.emptyDir("test-results/videos");
    fs.emptyDir("test-results/screenshots");
    fs.emptyDir("test-results/logs");
    fs.emptyDir("test-results/reports");

} catch (error) {
    console.log("Folder not created! " + error);
}