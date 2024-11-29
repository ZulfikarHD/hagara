import { onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRouteChange = () => {
    scrollToTop();
  };

  onMounted(() => {
    scrollToTop();
    window.addEventListener('popstate', handleRouteChange);
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', handleRouteChange);
  });

  return {
    scrollToTop
  };
}
