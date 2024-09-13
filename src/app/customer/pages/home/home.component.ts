import { Component } from '@angular/core';
import { AdminService } from '../../../admin/services/admin.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


declare var  $:any;
interface Slide {
  title?: SafeHtml;
  subtitle?: SafeHtml;
  animation?: string;
  subtitleAnimation?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageAnimation?: string; // Add this line
  className?: string;
  buttonAnimation?: string;
}


@Component({
  selector: 'customer-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {

  categories: any[] = []; // Adjust type if needed


  categoryImages: { [key: string]: string } = {
    'handicrafts': 'https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2022/04/02-yehaindia-aff88775fd3f.jpg',
    'textiles': 'https://i0.wp.com/blog.saffronart.com/wp-content/uploads/2017/03/bagh-with-animal-figures-and-shepherd_crop.jpg?fit=2725%2C1399&ssl=1',
    'jewelry': 'https://www.jdinstitute.edu.in/media/2022/01/Traditional-Indian-Jewellery-History-And-Significance-12.jpg',
    'paintings': 'https://laasyaart.com/wp-content/uploads/2019/07/Satya-Narayan-Lal-Karn-_-Moti-Karn_-Doli-bride-going-to-her-husband_s-home-_-Natural-dyes-on-handmade-paper-_-7-x-11-inches-_-650-Framed-1.jpg',
    'sculptures': 'https://static.prinseps.com/media/uploads/indian-sculpture-1.jpg',
    'pottery': 'https://images.indianexpress.com/2019/11/pottery759.jpeg',
    'musical instruments': 'https://m.media-amazon.com/images/I/61lPiQTeZiL._AC_UF1000,1000_QL80_.jpg',
    'furniture': 'https://fabdiz.com/wp-content/uploads/2023/12/Step-into-a-Kerala-home-built-around-a-beautiful-traditional-courtyard-1024x576.webp',
    'masks': 'https://5.imimg.com/data5/SELLER/Default/2022/5/JT/SV/NJ/82812591/new-product-500x500.jpeg',
    'toys': 'https://www.artsofindia.in/pub/media/magefan_blog/a4aec90bfe219bf0dabe1d92d07c2142.jpg'
  };

slides: Slide[] = [
  {
    title: this.sanitizer.bypassSecurityTrustHtml('Explore the <span class="color-red-v2">Rich Heritage of India</span> through our collection'),
    subtitle: this.sanitizer.bypassSecurityTrustHtml('Discover traditional arts, crafts, and textiles that reflect India’s vibrant culture and history. <br/> Immerse yourself in timeless beauty and craftsmanship.'),
    animation: 'animated fadeInDown',
    subtitleAnimation: 'animated fadeInUp',
    buttonText: 'Learn More',
    buttonLink: '#',
    imageSrc: '', // Replace with actual image path
    imageAlt: '',
    className: 'carousel-item-four'
  },
  {
    title: this.sanitizer.bypassSecurityTrustHtml('<span class="color-red-v2">Artisan Handicrafts</span>'),
    subtitle: 'Handmade with Tradition',
    buttonText: 'Shop Now',
    buttonLink: '#',
    imageSrc: '', // Replace with actual image path
    imageAlt: '',
    animation: 'animated fadeInDown',
    subtitleAnimation: 'animated fadeInDown',
    buttonAnimation: 'animated fadeInUp',
    className: 'carousel-item-five'
  },
  {
    title: this.sanitizer.bypassSecurityTrustHtml('<span class="color-red-v2">Traditional Textiles</span>'),
    subtitle: 'The Art of Weaving',
    buttonText: 'Explore Collection',
    buttonLink: '#',
    imageSrc: '', // Replace with actual image path
    imageAlt: '',
    animation: 'animated fadeInDown',
    subtitleAnimation: 'animated fadeInDown',
    buttonAnimation: '',
    className: 'carousel-item-six'
  },
  {
    title: this.sanitizer.bypassSecurityTrustHtml('Timeless Jewelry</span>'),
    subtitle: '',
    buttonText: 'Discover More',
    buttonLink: '#',
    imageSrc: '', // Replace with actual image path
    imageAlt: '',
    animation: 'animated fadeInDown',
    subtitleAnimation: '',
    buttonAnimation: 'animated fadeInUp',
    className: 'carousel-item-seven'
  }
];


  constructor(private adminService: AdminService, private router: Router, private sanitizer: DomSanitizer) { }

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


  getCategoryImage(categoryName: string): string {
    return this.categoryImages[categoryName.toLowerCase()] || 'assets/images/default-category.jpg'; // Default image if category not found
  }


ngOnInit() {
  this.getAllCategories();
}



}

