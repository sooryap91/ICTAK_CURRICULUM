import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authservice :AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authservice.getToken()
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `${token}` }
      })
    }

    return next.handle(req);
  }
}

