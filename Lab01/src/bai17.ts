export class Logger {

    // biến lưu instance duy nhất
    private static instance: Logger; 
    
    // Constructor private để ngăn việc tạo đối tượng từ bên ngoài
    private constructor() {}

    // Phương thức truy cập instance duy nhất
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // Phương thức log ra console
    public log(message: string): void {
        console.log(`[LOG] ${message}`);
    }
}