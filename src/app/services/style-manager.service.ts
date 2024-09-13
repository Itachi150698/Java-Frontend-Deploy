import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleManagerService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadStyle(href: string): void {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = this.renderer.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      this.renderer.appendChild(document.head, link);
    }
  }

  unloadStyle(href: string): void {
    const link = document.querySelector(`link[href="${href}"]`);
    if (link) {
      this.renderer.removeChild(document.head, link);
    }
  }

  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = this.renderer.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load script ${src}`);
        this.renderer.appendChild(document.body, script);
      } else {
        resolve();
      }
    });
  }

  unloadScript(src: string): void {
    const script = document.querySelector(`script[src="${src}"]`);
    if (script) {
      this.renderer.removeChild(document.body, script);
    }
  }
}
