import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

const GETALL: string = '/list';

export class CrudService<T> {
      
    constructor(
        protected http: HttpClient, 
        private path: any) { }

    create(record: T) {
        return this.http.post<T>(`${AppConfig.settings.urlApi}${this.path}`, record).pipe(
            tap(console.log)
        );
    }

    update(id: number, record: T) {
        return this.http.put(`${AppConfig.settings.urlApi}${this.path}/${id}`, record).pipe(
            tap(console.log)
        );
    }

    delete(id: number){
        return this.http.delete(`${AppConfig.settings.urlApi}${this.path}/${id}`, {observe: 'response', responseType: 'text'}).pipe(
            tap(console.log)
        );
    }

    getById(id: number) {
        return this.http.get<T>(`${AppConfig.settings.urlApi}${this.path}/${id}`).pipe(
            tap(console.log)
        );
    }

    getAll() {
        return this.http.get<T[]>(`${AppConfig.settings.urlApi}${this.path}${GETALL}`).pipe(
            tap(console.log)
        );
    }

}
