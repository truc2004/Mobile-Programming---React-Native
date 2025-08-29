"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    // Constructor private để ngăn việc tạo đối tượng từ bên ngoài
    constructor() { }
    // Phương thức truy cập instance duy nhất
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    // Phương thức log ra console
    log(message) {
        console.log(`[LOG] ${message}`);
    }
}
exports.Logger = Logger;
