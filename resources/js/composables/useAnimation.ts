import { ref, onMounted } from 'vue';

export function useAnimation() {
  const observeElement = (element: HTMLElement, animation: string = 'fade-up', delay: number = 0) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove initial opacity
          element.classList.remove('opacity-0');
          // Add animation with delay
          element.style.animationDelay = `${delay}ms`;
          element.classList.add('animate__animated', `animate__${animation}`);
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    observer.observe(element);
  };

  const observeChildren = (parent: HTMLElement, animation: string = 'fade-up', delayBetween: number = 100) => {
    const children = parent.children;
    Array.from(children).forEach((child, index) => {
      observeElement(child as HTMLElement, animation, index * delayBetween);
    });
  };

  return {
    observeElement,
    observeChildren
  };
}
