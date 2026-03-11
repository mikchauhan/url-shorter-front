import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    shortenUrl(data: {
        originalUrl: string;
        customAlias?: string;
        expiresInDays?: number;
    }) {
        return this.http.post(`${environment.apiUrl}/shorten`, data);
    }

    getAnalytics(shortCode: string) {
    return this.http.get<any>(`${environment.apiUrl}/analytics/${shortCode}`);
  }

}
