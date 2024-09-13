import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StyleManagerService } from '../../services/style-manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private styleManager: StyleManagerService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$')]],
      confirmPassword: [null, Validators.required]
    }, { validators: this.passwordMatcher });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  passwordMatcher: ValidatorFn = (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  };

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.authService.register(this.signupForm.value).subscribe(
      (response) => {
        const userName = this.signupForm.get('name')?.value;
        this.toastr.success(`Sign up successful! Welcome, ${userName}`, 'Success', {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        this.router.navigateByUrl("/login");
      },
      (error) => {
        this.toastr.error('Sign up failed. Please try again.', 'Error', {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
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
