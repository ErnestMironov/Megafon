import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized: string | null = null;

  constructor(private router: Router, private message: NzMessageService) {
    this.init();
  }

  init() {
    this.isAuthorized = localStorage.getItem('authorized');
  }

  login(data: { userName: string; password: string }) {
    if (data.userName === 'Admin' && data.password === 'pa$$word') {
      this.isAuthorized = '1';
      localStorage.setItem('authorized', this.isAuthorized);
      this.router.navigateByUrl('/map');
    } else {
      this.message.info('«Ошибка авторизации»');
    }
  }

  logout() {
    localStorage.removeItem('authorized');
    this.router.navigateByUrl('/login');
  }
}
