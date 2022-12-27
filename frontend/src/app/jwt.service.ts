import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JWTService implements HttpInterceptor {
  get jwt(): string {
    return localStorage.getItem(environment.jwtKey) || '';
  }

  set jwt(token: string) {
    localStorage.setItem(environment.jwtKey, token);
  }

  get isStoredJwt(): boolean {
    return Boolean(this.jwt);
  }

  clear() {
    localStorage.clear();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith(environment.apiUrl)) {
      request = request.clone({
        setHeaders: { Authorization: `Token ${this.jwt}` },
      });
    }

    return next.handle(request);
  }
}
