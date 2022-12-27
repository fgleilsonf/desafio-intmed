import {Injectable} from '@angular/core';

import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, mergeMap} from 'rxjs/operators';
import {JWTService} from './jwt.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private jwt: JWTService) {
  }

  me() {
    const url = new URL('/users/me', environment.apiUrl).href;
    return this.jwt.isStoredJwt
      ? this.http.get(url).pipe(catchError(() => of(null)))
      : of(null);
  }

  login(username: string, password: string) {
    const url = new URL('/users/login', environment.apiUrl).href;
    return this.http
      .post(url, {
        username,
        password,
      })
      .pipe(
        catchError(() => of(null)),
        mergeMap((result: any) => {
          if (!result) {
            alert('Usuário ou senha inválido');
            return of();
          }
          this.jwt.jwt = result.token;
          return this.me();
        })
      );
  }

  signup(username: string, password: string) {
    const url = new URL('/users', environment.apiUrl).href;
    return this.http
      .post(url, {
        username,
        password,
      })
      .pipe(
        catchError(() => of(null)),
        mergeMap((result: any) => {
          if (!result) {
            alert('Não foi poss[ivel criar a conta');
            return of();
          }
          this.jwt.jwt = result.token;
          return this.me();
        })
      );
  }

  logout() {
    this.jwt.clear();
  }
}
