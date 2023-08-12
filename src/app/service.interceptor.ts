import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let autthService = this.injector.get(StoreService);
    let req = request.clone({
      setHeaders:{
        'x-access-token': `${autthService.getToken()}`
      }
    })
    return next.handle(req);
  }
}
