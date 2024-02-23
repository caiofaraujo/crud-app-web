import { AppConfig } from "./app.config";

export function initializer(appConfig: AppConfig): () => Promise<any> {
    
    return (): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            try {
                appConfig.load();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
}
