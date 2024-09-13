import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DynamicResourceLoaderService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, private router: Router) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateResources(event.url);
      }
    });
  }

  public updateResources(url: string) {
    this.loadResources(url);
  }

  private loadResources(url: string) {
    this.removeResources();

    if (url.includes('customer') || url.includes('admin')) {
      this.loadCss([
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      ]);
      this.loadJs([
        'https://code.jquery.com/jquery-3.5.1.min.js',
        'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
      ]);
    } else if (url.includes('content')) {
      this.loadCss([
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css'
      ]);
      this.loadJs([
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.js',
        'https://cdnjs.cloudflare.com/ajax/libs/wow.js/1.1.2/wow.min.js'
      ]);
    }
  }

  private loadCss(urls: string[]) {
    urls.forEach(url => {
      const link = this.renderer.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      this.renderer.appendChild(document.head, link);
    });
  }

  private loadJs(urls: string[]) {
    urls.forEach(url => {
      const script = this.renderer.createElement('script');
      script.src = url;
      this.renderer.appendChild(document.head, script);
    });
  }

  private removeResources() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      if (link instanceof HTMLLinkElement && (link.href.includes('stackpath') || link.href.includes('cdnjs') || link.href.includes('cdn.jsdelivr'))) {
        link.remove();
      }
    });

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      if (script instanceof HTMLScriptElement && (script.src.includes('code.jquery.com') || script.src.includes('cdn.jsdelivr') || script.src.includes('cdnjs'))) {
        script.remove();
      }
    });
  }
}
