import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DynamicResourceLoaderService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, private router: Router) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Subscribe to route change events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadResources(event.urlAfterRedirects);
      }
    });
  }

  // Load CSS and JS resources based on the current route
  private loadResources(url: string) {
    this.removeResources();  // Clear existing resources

    if (url.includes('admin') || url.includes('customer')) {
      this.loadAdminCustomerResources();
    } else if (url === '/' || url.includes('content')) {
      this.loadContentResources();
    }
  }

  // Load resources for admin or customer routes
  private loadAdminCustomerResources() {
    this.loadCss([
      'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all',
      '../../../assets/css-1/assets/plugins/font-awesome/css/font-awesome.min.css',
      '../../../assets/css-1/assets/plugins/bootstrap/css/bootstrap.min.css',
      '../../../assets/css-1/assets/pages/css/animate.css',
      '../../../assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.css',
      '../../../assets/css-1/assets/plugins/owl.carousel/assets/owl.carousel.css',
      '../../../assets/css-1/assets/pages/css/components.css',
      '../../../assets/css-1/assets/pages/css/slider.css',
      '../../../assets/css-1/assets/pages/css/style-shop.css',
      '../../../assets/css-1/assets/corporate/css/style.css',
      '../../../assets/css-1/assets/corporate/css/style-responsive.css',
      '../../../assets/css-1/assets/corporate/css/themes/red.css',
      '../../../assets/css-1/assets/corporate/css/custom.css'
    ]);
    this.loadJs([
      '../../../assets/css-1/assets/plugins/jquery.min.js',
      '../../../assets/css-1/assets/plugins/bootstrap/js/bootstrap.min.js',
      '../../../assets/css-1/assets/corporate/scripts/layout.js'
    ]).then(() => {
      // Inject the Layout-related inline scripts for customer/admin
      // this.injectLayoutScripts();
    });
  }

  // Load resources for content routes (including default route "")
  private loadContentResources() {
    this.loadCss([
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&amp;display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
      '../../../assets/style.scss'
    ]);
    this.loadJs([
      'https://code.jquery.com/jquery-3.5.1.slim.min.js',
      'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.js',
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
      'https://code.jquery.com/jquery-3.5.1.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/wow.js/1.1.2/wow.min.js'
    ]).then(() => {
      // Inject inline scripts after resources are loaded
      // this.injectInlineScripts();
    });
  }

  // Utility function to dynamically load CSS files
  private loadCss(urls: string[]) {
    urls.forEach(url => {
      const link = this.renderer.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      this.renderer.appendChild(document.head, link);
    });
  }

  // Utility function to dynamically load JS files
  private loadJs(urls: string[]): Promise<void> {
    return new Promise(resolve => {
      const promises = urls.map(url => {
        return new Promise<void>(resolveJs => {
          const script = this.renderer.createElement('script');
          script.src = url;
          script.onload = () => resolveJs();
          this.renderer.appendChild(document.head, script);
        });
      });

      Promise.all(promises).then(() => resolve());
    });
  }

  // private injectLayoutScripts() {
  //   const layoutScript = `
  //     setTimeout(() => {
  //     jQuery(document).ready(function() {
  //       Layout.init();
  //       Layout.initOWL();
  //       Layout.initImageZoom();
  //       Layout.initTouchspin();
  //       Layout.initTwitter();

  //       // Manually trigger change detection if necessary for routerLink
  //       const appRef = this.injector.get(ApplicationRef);
  //       appRef.tick(); // This forces Angular to re-run change detection.
  //     });
  //   }, 0);
  // });
  //   }
  //   `;
  //   this.addInlineScript(layoutScript);
  // }

  // private injectInlineScripts() {
  //   // Add the script for collapse toggle
  //   const collapseScript = `
  //     document.addEventListener('DOMContentLoaded', function () {
  //       const buttons = document.querySelectorAll('[data-toggle="collapse"]');
  //       const navbarToggler = document.querySelector('.navbar-toggler');
  //       const navbarNav = document.getElementById('navbarNav');

  //       buttons.forEach(button => {
  //         button.addEventListener('click', function () {
  //           const targetId = this.getAttribute('data-target');
  //           const targetElement = document.querySelector(targetId);
  //           const isVisible = targetElement.classList.contains('show');

  //           buttons.forEach(btn => {
  //             const target = btn.getAttribute('data-target');
  //             const element = document.querySelector(target);
  //             if (element !== targetElement) {
  //               $(element).collapse('hide');
  //             }
  //           });

  //           if (isVisible) {
  //             $(targetElement).collapse('hide');
  //           } else {
  //             $(targetElement).collapse('show');
  //           }
  //         });
  //       });

  //       navbarToggler.addEventListener('click', function () {
  //         const isExpanded = navbarNav.classList.contains('show');
  //         if (!isExpanded) {
  //           $('.collapse').collapse('hide');
  //         }
  //       });
  //     });
  //   `;
  //   this.addInlineScript(collapseScript);

  //   // Add the script for carousel autoplay
  //   const carouselScript = `
  //     document.addEventListener('DOMContentLoaded', function () {
  //       const track = document.querySelector('.carousel-track');
  //       const slides = Array.from(track.children);
  //       const nextButton = document.querySelector('#scroll-right');
  //       const prevButton = document.querySelector('#scroll-left');
  //       let autoPlayInterval;
  //       const slideWidth = slides[0].getBoundingClientRect().width;
  //       let currentIndex = 0;

  //       function updateCarousel() {
  //         const offset = -slideWidth * currentIndex;
  //         track.style.transform = \`translateX(\${offset}px)\`;
  //       }

  //       function goToSlide(index) {
  //         currentIndex = index;
  //         updateCarousel();
  //       }

  //       function startAutoPlay() {
  //         autoPlayInterval = setInterval(() => {
  //           if (currentIndex < slides.length - 3) {
  //             goToSlide(currentIndex + 1);
  //           } else {
  //             goToSlide(0); // Loop back to the start
  //           }
  //         }, 3000); // Change slide every 3 seconds
  //       }

  //       function stopAutoPlay() {
  //         clearInterval(autoPlayInterval);
  //       }

  //       nextButton.addEventListener('click', () => {
  //         stopAutoPlay();
  //         if (currentIndex < slides.length - 1) {
  //           goToSlide(currentIndex + 1);
  //         } else {
  //           goToSlide(0); // Loop back to the start
  //         }
  //         startAutoPlay();
  //       });

  //       prevButton.addEventListener('click', () => {
  //         stopAutoPlay();
  //         if (currentIndex > 0) {
  //           goToSlide(currentIndex - 1);
  //         } else {
  //           goToSlide(slides.length - 1); // Loop back to the end
  //         }
  //         startAutoPlay();
  //       });

  //       // Auto-play functionality
  //       startAutoPlay();

  //       // Hover functionality to stop auto-play
  //       slides.forEach(slide => {
  //         slide.addEventListener('mouseover', () => {
  //           stopAutoPlay();
  //         });

  //         slide.addEventListener('mouseleave', () => {
  //           startAutoPlay();
  //         });
  //       });
  //     });
  //   `;
  //   this.addInlineScript(carouselScript);

  //   // Add the script for intersection observer
  //   const intersectionScript = `
  //     document.addEventListener('DOMContentLoaded', function () {
  //       const observer = new IntersectionObserver(entries => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             entry.target.querySelector('.overlay-text').classList.add('show');
  //           }
  //         });
  //       });

  //       observer.observe(document.querySelector('.image-section'));
  //     });
  //   `;
  //   this.addInlineScript(intersectionScript);
  // }

  // private addInlineScript(content: string) {
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.text = content;
  //   this.renderer.appendChild(document.body, script);
  // }

  // Remove previously loaded CSS and JS resources to prevent conflicts
  private removeResources() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = (link as HTMLLinkElement).href;
      if (href.includes('bootstrap') || href.includes('font-awesome') || href.includes('cdn.jsdelivr') || href.includes('cdnjs')) {
        link.remove();
      }
    });

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      const src = script.src;
      if (src.includes('jquery') || src.includes('cdn.jsdelivr') || src.includes('cdnjs')) {
        script.remove();
      }
    });
  }
}
