import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsListComponent } from './customer/partials/products-list/products-list.component';
import { adminGuard } from './admin/services/admin.guard';
import { customerGuard } from './customer/services/customer.guard';
import { ViewWishlistComponent } from './customer/pages/view-wishlist/view-wishlist.component';
import { CartComponent } from './customer/pages/cart/cart.component';
import { HomeComponent } from './content/pages/home/home.component';
import { AjantaComponent } from './content/pages/ajanta/ajanta.component';
import { ArtHeritageComponent } from './content/pages/art-heritage/art-heritage.component';
import { CulturalComponent } from './content/pages/cultural/cultural.component';
import { FortsComponent } from './content/pages/forts/forts.component';
import { HistoricComponent } from './content/pages/historic/historic.component';
import { JewelleryComponent } from './content/pages/jewellery/jewellery.component';
import { NorthEastComponent } from './content/pages/north-east/north-east.component';
import { SiteCulturalComponent } from './content/pages/site-cultural/site-cultural.component';
import { AboutComponent } from './content/partials/about/about.component';
import { ContactComponent } from './content/partials/contact/contact.component';
import { WalkthroughComponent } from './content/pages/walkthrough/walkthrough.component';


const routes: Routes = [
  //E-Shop
  { path: '', component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: 'customer/products-list', component: ProductsListComponent },
  { path: 'customer/wishlist', component: ViewWishlistComponent, canActivate: [customerGuard] },
  { path: 'cart', component: CartComponent, canActivate: [customerGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [adminGuard] },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), },


  //Content
  { path: "content/jewllery", component: JewelleryComponent },
  { path: 'content/art-heritage', component: ArtHeritageComponent },
  { path: 'content/contact', component: ContactComponent },
  { path: 'content/ajanta', component: AjantaComponent },
  { path: 'content/north-east', component: NorthEastComponent },
  { path: 'content/forts', component: FortsComponent },
  { path: 'content/walkthrough', component: WalkthroughComponent },
  { path: 'content/historic', component: HistoricComponent },
  { path: 'content/site-cultural', component: SiteCulturalComponent },
  { path: 'content/about', component: AboutComponent },
  { path: 'content/cultural', component: CulturalComponent },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
