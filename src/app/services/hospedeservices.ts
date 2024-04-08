import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hospede, hospedereserva } from '../models';

@Injectable({ providedIn: 'any' })
export class hospedeservices {
    urlBase = '';

    constructor(private http: HttpClient) {
        this.urlBase = 'http://localhost:8080'
     }

    getAll() {
        return this.http.get<hospedereserva[]>(`${this.urlBase}/hospede/find`);
    }

    getSairam() {
        return this.http.get<hospedereserva[]>(`${this.urlBase}/hospede/find/sairam`);
    }

    getNaoSairam() {
        return this.http.get<hospedereserva[]>(`${this.urlBase}/hospede/find/naosairam`);
    }

    register(hospede: hospede) {
        return this.http.post(`${this.urlBase}/hospede/save`, hospede);
    }
}