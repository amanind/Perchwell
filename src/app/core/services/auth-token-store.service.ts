import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthTokenModel } from 'src/app/shared/models/AuthTokenModel';

@Injectable({
	providedIn: 'root'
})
export class AuthTokenStoreService {

	private static readonly COOKIE_NAME: string = "token";
	public loggedIn: Subject<boolean> = new Subject();

	constructor(public router: Router) {
	}

	public get(): string | null {
		const cookiePrefix: string = `${AuthTokenStoreService.COOKIE_NAME}=`;
		
		return 'Qs7MGQchX2DUZ9BX8wYpjjgM';
	}

	public isLoggedIn(): boolean {
		let result: boolean = false;
		return result;
	}

	public set(model: AuthTokenModel): void {
		model = {
			value:'Qs7MGQchX2DUZ9BX8wYpjjgM',
			expiresInSeconds: 200000000
		}
		this.setCookie(model);
		this.router.navigate(['/']);
	}

	public unset(): void {
		this.setCookie(null);
		this.router.navigate(['/']);
	}

	private setCookie(model: AuthTokenModel | null): void {
		let time: number = model?.expiresInSeconds ? model.expiresInSeconds * 1000 : -1;

		// google :: cookie max-age vs expires
		let dt: Date = new Date();
		dt.setTime(dt.getTime() + time);
		let expires: string = dt.toUTCString();

		let c: string = `${AuthTokenStoreService.COOKIE_NAME}=${model?.value}; path=/; expires=${expires};`; // HttpOnly; SameSite=Strict;Secure;`;
		console.log('setCookie => ' + c);
		document.cookie = c;
	}
}