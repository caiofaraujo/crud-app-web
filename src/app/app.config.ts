import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from './shared/models/app-config.model';

@Injectable()
export class AppConfig {
    static settings: IAppConfig;

    constructor(private readonly http: HttpClient) { }

    load() {
        const jsonFile = 'assets/config/config.json';
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).subscribe({
                next: (res: any) => {
                    AppConfig.settings = res;
                    resolve();
                },
                error: (res: any) => {
                    reject(new Error(`Não foi possível ler o arquivo '${jsonFile}': ${JSON.stringify(res)}`));
                }
            });
        });
    }
}
