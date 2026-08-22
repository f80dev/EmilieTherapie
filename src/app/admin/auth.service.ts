import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ADMIN_PASSWORD = 'lapin123';
  isAuthenticated = signal<boolean>(false);

  login(password: string): boolean {
    if (password === this.ADMIN_PASSWORD) {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
  }
}
