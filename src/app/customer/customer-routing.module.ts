import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './partials/products-list/products-list.component';
import { AuthService } from '../services/auth/auth.service';
import { customerGuard } from './services/customer.guard';
import { ViewProductDetailComponent } from './pages/view-product-detail/view-product-detail.component';
import { ViewWishlistComponent } from './pages/view-wishlist/view-wishlist.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [{ path: '', component: CustomerComponent },
  {path:'home', component: HomeComponent},
  { path: 'products-list', component: ProductsListComponent},
  { path: 'product/:productId', component: ViewProductDetailComponent },
  { path: 'wishlist', component: ViewWishlistComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
