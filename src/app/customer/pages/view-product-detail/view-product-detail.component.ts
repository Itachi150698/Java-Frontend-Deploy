import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { CustomerService } from '../../services/customer.service';
import { AdminService } from '../../../admin/services/admin.service';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss',
})
export class ViewProductDetailComponent {
 productId: number = this.activatedRoute.snapshot.params["productId"];
  product: any;
  FAQS: any[] = [];
  reviews: any[] = [];
  categories: any[] = [];

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getProductDetailById();
    this.getAllCategories();
  }
  getAllCategories(): void {
  this.adminService.getAllCategories().subscribe(categories => {
    this.categories = categories;
  });
}

navigateToCategory(categoryId: number): void {
  this.router.navigate(['/customer/products-list'], { queryParams: { categoryId } })
    .then(success => {
      if (success) {
        console.log('Navigation to /products-list successful');
      } else {
        console.log('Navigation to /products-list failed');
      }
    });
}

  getProductDetailById(): void {
    this.customerService.getProductDetailById(this.productId).subscribe(res => {
      this.product = res.productDto;
      this.product.processedImg = 'data:image/png;base64,' + res.productDto.byteImg;

      this.FAQS = res.faqDtoList;

      this.reviews = res.reviewDtoList.map(element => {
        element.processedImg = 'data:image/png;base64,' + element.returnedImg;
        return element;
      });
    });
  }

  addToWishlist(): void {
    const wishlistDto = {
      userId: UserStorageService.getUserId(),
      productId: this.productId
    };

    this.customerService.addProductToWishlist(wishlistDto).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open("Product Added to Wishlist Successfully!", "Close", {
          duration: 5000
        });
      } else {
        this.snackbar.open("Something went wrong!", "ERROR", {
          duration: 5000
        });
      }
    });
  }
}

