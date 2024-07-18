import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  breadcrumb: string = 'Đăng Ký';
  registerForm!: FormGroup;
  showPassword: boolean = false;
  showPasswordCf: boolean = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        fullname: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
        tpp: [false, [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // check 2 truong co khop nhau k
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('passwordConfirm');

    // Chỉ thực hiện kiểm tra khi cả hai trường mật khẩu đều không có lỗi 'minlength'
    if (password?.errors?.['minlength'] || confirmPassword?.errors?.['minlength']) {
      return null;
    }

    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordsMismatch: true } : null;
  };

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  togglePasswordVisibilityCf() {
    this.showPasswordCf = !this.showPasswordCf;
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      this.registerForm.updateValueAndValidity();

      // alert('1');
      return;
    }

    console.log(this.registerForm.value);
  }
}
