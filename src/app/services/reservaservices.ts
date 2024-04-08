import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { reserva } from '../models';

@Injectable({ providedIn: 'any' })
export class reservaservices {
    urlBase = '';

    constructor(private http: HttpClient) {
        this.urlBase = 'http://localhost:8080'
     }

    getAll() {
        return this.http.get<reserva[]>(`${this.urlBase}/reserva/find`);
    }


    register(reserva: reserva) {
        return this.http.post(`${this.urlBase}/reserva/save`, reserva);
    }
}