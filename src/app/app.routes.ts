import { Routes } from '@angular/router';
import { ForgetComponent } from './core/auth/components/forget/forget.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
  { path: '', component: AuthLayoutComponent,
    canActivate: [loggedGuard],
    children: [
      { path: '', redirectTo: "login", pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget', component: ForgetComponent },
    ]
  },
  { path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: "home", pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: "products", loadComponent: () => import('./feature/products/products.component').then((c) => c.ProductsComponent)},
      { path: 'productDetails/:id', loadComponent: () => import('./feature/product-details/product-details.component').then((c) => c.ProductDetailsComponent)},
      { path: "categories", loadComponent: () => import('./feature/categories/categories.component').then((c) => c.CategoriesComponent)},
      { path: 'categoryDetails/:id', loadComponent: () => import('./feature/category-details/category-details.component').then((c) => c.CategoryDetailsComponent)},
      { path: "brands", loadComponent: () => import('./feature/brands/brands.component').then((c) => c.BrandsComponent)},
      { path: 'brandDetails/:id', loadComponent: () => import('./feature/brand-details/brand-details.component').then((c) => c.BrandDetailsComponent)},
      { path: "cart", loadComponent: () => import('./feature/cart/cart.component').then((c) => c.CartComponent) },
      { path: "order/:id", loadComponent: () => import('./feature/order/order.component').then((c) => c.OrderComponent) },
      { path: "allorders", loadComponent: () => import('./feature/all-orders/all-orders.component').then((c) => c.AllOrdersComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./shared/not-found/not-found.component').then((c) => c.NotFoundComponent) }
];
