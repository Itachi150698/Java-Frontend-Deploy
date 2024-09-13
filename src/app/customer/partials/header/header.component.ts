import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserStorageService } from '../../../services/storage/user-storage.service';


@Component({
  selector: 'customer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.isLoggedIn = UserStorageService.getToken() !== null;
  }

  logout() {
    console.log('Logging out...');
    UserStorageService.signOut();
    this.isLoggedIn = false;
    this.toastr.success('Logged out successfully!', 'Logout');

    // Redirect to the login page
    this.router.navigate(['/login']).then(() => {
      console.log('Navigation to /login completed');
    });
  }







}
