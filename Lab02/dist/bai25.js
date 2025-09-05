"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
async function downloadFile() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("\nBài 25 - File đã tải xong!");
}
