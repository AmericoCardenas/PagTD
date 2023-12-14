import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmailModule } from '../models/email/email.module';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  url: string = environment.apiBaseUrl + '/Email';
  url2: string = environment.apiBaseUrl + '/Email2';

  constructor(private http: HttpClient) {

  }
  EnviarEmailArchivo(emailmod: EmailModule, file: File) {
    const formData = new FormData();
    formData.append('to', emailmod.to);
    formData.append('subject', emailmod.subject);
    formData.append('body', emailmod.body);
    formData.append('file', file, file.name);
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.url, formData, {'headers':headers} );

  }

  EnviarEmail(emailmod:EmailModule) {

    return this.http.post<any>(this.url2, emailmod);

  }
}
