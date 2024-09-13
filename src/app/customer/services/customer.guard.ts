import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';
import { ToastrService } from 'ngx-toastr';

    export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);
  const isLoggedIn = !!UserStorageService.getToken();
  const isCustomer = UserStorageService.getUserRole() === 'CUSTOMER';

        console.log('Guard check:', { isLoggedIn, isCustomer });

        if (!isLoggedIn || !isCustomer) {
            toastr.warning('Please log in as a customer to access this page.');
            router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Redirect to login page with return URL
            return false; // Prevent navigation
        }

        return true; // Allow navigation
    };
