import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserStorageService } from '../../services/storage/user-storage.service';
import { StyleManagerService } from '../../services/style-manager.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm!: FormGroup;

hidePassword = true;

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private snackBar: MatSnackBar,
  private router: Router,
  private styleManager: StyleManagerService,
   private renderer: Renderer2,
   private toastr: ToastrService
){}

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]], // Email validation
    password: [null, [Validators.required, Validators.minLength(8)]], // Minimum length for password
  });
}


togglePasswordVisibility(){
  this.hidePassword = !this.hidePassword;
}

onSubmit(): void {
  if (this.loginForm.invalid) {
    this.toastr.error('Please fill out the form correctly.', 'Validation Error');
    return;
  }

  const email = this.loginForm.get('email')!.value;
  const password = this.loginForm.get('password')!.value;

  this.authService.login(email, password).subscribe(
    (user) => {
      if (user) {
        const userName = user.name || email;
        this.toastr.success(`Welcome back, ${userName}!`, 'Login Successful');

        // Navigate based on user role
        if (UserStorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl('admin/home');
        } else if (UserStorageService.isCustomerLoggedIn()) {
          this.router.navigateByUrl('customer/home');
        }
      } else {
        this.toastr.error('Login failed', 'ERROR');
      }
    },
    (error) => {
      // Improved error handling
      let errorMessage = 'An error occurred. Please try again.';
      if (error.status === 401) {
        errorMessage = 'Invalid email or password.';
      } else if (error.status === 409) {
        errorMessage = 'User already exists.';
      }
      this.toastr.error(errorMessage, 'ERROR');
    }
  );
}


ngAfterViewInit(): void {
     // Load styles dynamically
    this.styleManager.loadStyle('http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all');
    this.styleManager.loadStyle('http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all');
    this.styleManager.loadStyle('assets/css-1/assets/plugins/font-awesome/css/font-awesome.min.css');
    this.styleManager.loadStyle('assets/css-1/assets/plugins/bootstrap/css/bootstrap.min.css');
    this.styleManager.loadStyle('assets/css-1/assets/pages/css/animate.css');
    this.styleManager.loadStyle('assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.css');
    this.styleManager.loadStyle('assets/css-1/assets/plugins/owl.carousel/assets/owl.carousel.css');
    this.styleManager.loadStyle('assets/css-1/assets/pages/css/components.css');
    this.styleManager.loadStyle('assets/css-1/assets/pages/css/slider.css');
    this.styleManager.loadStyle('assets/css-1/assets/pages/css/style-shop.css');
    this.styleManager.loadStyle('assets/css-1/assets/corporate/css/style.css');
    this.styleManager.loadStyle('assets/css-1/assets/corporate/css/style-responsive.css');
    this.styleManager.loadStyle('assets/css-1/assets/corporate/css/themes/red.css');
    this.styleManager.loadStyle('assets/css-1/assets/corporate/css/custom.css');

    // Load scripts sequentially to ensure dependencies are met
    this.styleManager.loadScript('assets/css-1/assets/plugins/jquery.min.js')
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/jquery-migrate.min.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/bootstrap/js/bootstrap.min.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/corporate/scripts/back-to-top.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.pack.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/owl.carousel/owl.carousel.min.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/zoom/jquery.zoom.min.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/corporate/scripts/layout.js'))
      .then(() => this.styleManager.loadScript('assets/css-1/assets/pages/scripts/bs-carousel.js'))
      .then(() => {
        // Add the custom script after all dependencies are loaded
        const scriptContent = `
          jQuery(document).ready(function() {
              Layout.init();
              Layout.initOWL();
              Layout.initImageZoom();
              Layout.initTouchspin();
              Layout.initTwitter();
          });
        `;
        this.addInlineScript(scriptContent);
      })
      .catch((error) => {
        console.error('Script load error:', error);
      });
}

  private addInlineScript(content: string) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = content;
    this.renderer.appendChild(document.body, script);
  }
}
