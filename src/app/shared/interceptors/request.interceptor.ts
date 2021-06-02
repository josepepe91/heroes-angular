import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NgxSpinnerService} from "ngx-spinner";
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private spinner: NgxSpinnerService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    return next.handle(req).pipe(
      // Se agrega seTimeout de manera didactica para que se muestre el loader
      tap(() => {
        setTimeout(()=>{
          this.spinner.hide();
        },1000);
      })
    );
  }

}
