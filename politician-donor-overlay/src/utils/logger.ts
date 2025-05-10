import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, '../logs/application.log');

const logger = {
    info: (message: string) => {
        const logMessage = `[INFO] ${new Date().toISOString()}: ${message}\n`;
        fs.appendFileSync(logFilePath, logMessage);
        console.log(logMessage);
    },
    error: (message: string) => {
        const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}\n`;
        fs.appendFileSync(logFilePath, logMessage);
        console.error(logMessage);
    },
    debug: (message: string) => {
        const logMessage = `[DEBUG] ${new Date().toISOString()}: ${message}\n`;
        fs.appendFileSync(logFilePath, logMessage);
        console.log(logMessage);
    }
};

export default logger;