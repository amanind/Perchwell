import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { AuthTokenStoreService } from "../services/auth-token-store.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private authTokenStoreService: AuthTokenStoreService) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let token: string | null = this.authTokenStoreService.get();

		if (token != null) {
			request = request.clone({
				setHeaders: {
					Authorization: token,
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
					'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
				}
			});
		}

		return next.handle(request);
	}
}