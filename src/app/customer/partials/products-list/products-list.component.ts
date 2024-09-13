import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../admin/services/admin.service';
import { CustomerService } from '../../services/customer.service';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productId: number = this.activatedRoute.snapshot.params["productId"];
  userId: number = this.activatedRoute.snapshot.params["userId"];
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: any[] = [];
  categoryId!: number;
  bestsellers: any[] = [];
  wishlist: Set<number> = new Set();

  // Filtering criteria
  availabilityFilter: boolean | null = null;
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

ngOnInit() {
  this.getWishlistByUserId();  // Load wishlist first
  this.loadCategories();
  this.route.queryParams.subscribe(params => {
    this.categoryId = +params['categoryId'];
    if (this.categoryId) {
      this.loadProductsByCategory(this.categoryId);
    } else {
      this.loadAllProducts();
    }
  });
}


  isInWishlist(productId: number): boolean {
    return this.wishlist.has(productId);
  }

getWishlistByUserId() {
  this.customerService.getWishlistByUserId().subscribe(res => {
    this.wishlist.clear();
    res.forEach(element => {
      console.log('Adding to wishlist Set:', element.id);  // Debugging line
      this.wishlist.add(element.id);
      element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
    });
  });
}


  addToWishlist(productId: number): void {
    const wishlistDto = {
      userId: UserStorageService.getUserId(),
      productId: productId
    };

    this.customerService.addProductToWishlist(wishlistDto).subscribe(res => {
      if (res.id != null) {
        this.toastr.success('Product Added to Wishlist Successfully!');
        this.wishlist.add(productId);  // Track added items
      } else {
        this.toastr.error('Something went wrong!');
      }
    });
  }

  removeFromWishlist(productId: number): void {
    this.customerService.removeProductFromWishlist(productId).subscribe({
      next: (res) => {
        console.log('Product removed successfully', res);
        this.wishlist.delete(productId);  // Track removed items
        this.toastr.success('Product removed from wishlist');
      },
      error: (err) => {
        console.error('Detailed Error Info:', err);
        this.toastr.error('Failed to remove product from wishlist');
      }
    });
  }

    toggleWishlist(productId: number) {
        if (!UserStorageService.isCustomerLoggedIn()) {
            this.toastr.warning('Please log in to manage your wishlist.');
            this.router.navigate(['/login']); // Redirect to login page
            return;
        }

        if (this.wishlist.has(productId)) {
            console.log('Removing from wishlist:', productId);
            this.removeFromWishlist(productId);
        } else {
            console.log('Adding to wishlist:', productId);
            this.addToWishlist(productId);
        }
        console.log('Current wishlist state:', this.wishlist);  // Debugging line
    }

    addToCart(id: number) {
        if (!UserStorageService.isCustomerLoggedIn()) {
            this.toastr.warning('Please log in to add items to your cart.');
            this.router.navigate(['/login']); // Redirect to login page
            return;
        }

        this.customerService.addProductToCart(id).subscribe({
                next: (response) => {
            if (response.status === 201) {
                this.toastr.success("Product added to cart successfully");
            } else {
                this.toastr.error("Failed to add product to cart");
            }
        },
        error: (err: HttpErrorResponse) => {
            if (err.status === 409) {
                this.toastr.info("Product already in cart.");
            } else {
                this.toastr.error("Failed to add product to cart");
            }
        }
  });
    }


  loadCategories() {
    this.adminService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  loadProductsByCategory(categoryId: number) {
    this.customerService.getProductsByCategory(categoryId).subscribe(res => {
      this.products = res.map(product => {
        product.processedImg = 'data:image/jpeg;base64,' + product.byteImg;
        return product;
      });
      this.applyFilters();
    });
  }

  loadAllProducts() {
    this.customerService.getAllProducts().subscribe(res => {
      this.products = res.map(product => {
        product.processedImg = 'data:image/jpeg;base64,' + product.byteImg;
        return product;
      });
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesAvailability = this.availabilityFilter === null || product.availability === this.availabilityFilter;
      const matchesPrice = (this.minPrice === null || product.price >= this.minPrice) &&
                            (this.maxPrice === null || product.price <= this.maxPrice);
      return matchesAvailability && matchesPrice;
    });
    this.updateBestsellers();
  }

  updateBestsellers() {
    const shuffledProducts = this.shuffleArray([...this.filteredProducts]);
    this.bestsellers = shuffledProducts.slice(0, 3);
  }

  filterByCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.loadProductsByCategory(categoryId);
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/customer/product', productId]);
  }

  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  filterByAvailability(isAvailable: boolean | null) {
    this.availabilityFilter = isAvailable;
    this.applyFilters();
  }

  filterByPrice(minPrice: number | null, maxPrice: number | null) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.applyFilters();
  }

  filterProducts(query: string) {
    if (!query) {
      this.applyFilters();
    } else {
      this.filteredProducts = this.products.filter(product =>
        (product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(query.toLowerCase())) &&
        (this.availabilityFilter === null || product.availability === this.availabilityFilter) &&
        (this.minPrice === null || product.price >= this.minPrice) &&
        (this.maxPrice === null || product.price <= this.maxPrice)
      );
    }
  }

  resetFilters() {
    this.availabilityFilter = null;
    this.minPrice = null;
    this.maxPrice = null;

    if (this.categoryId) {
      this.loadProductsByCategory(this.categoryId);
    }

    const amountInput = document.getElementById('amount') as HTMLInputElement;
    if (amountInput) {
      amountInput.value = '';
    }

    const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
    checkboxes.forEach((checkbox: HTMLInputElement) => checkbox.checked = false);
  }

}
