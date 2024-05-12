import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./features/pages/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/pages/shop/shop.component').then(
        (c) => c.ShopComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/pages/blog/blog.component').then(
        (c) => c.BlogComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/pages/error-404/error-404.component').then(
        (c) => c.Error404Component
      ),
  },
];
