export function smoothScroll(delta: number) {
  let isScrolling = false;

  const scrollStep = delta > 0 ? 50 : -50; // Define the scroll step
  const targetPosition = window.scrollY + scrollStep;

  const scrollToTarget = () => {
    const currentPosition = window.scrollY;
    if (
      (scrollStep > 0 && currentPosition < targetPosition) ||
      (scrollStep < 0 && currentPosition > targetPosition)
    ) {
      window.scrollTo(10, currentPosition + scrollStep);
      requestAnimationFrame(scrollToTarget);
    } else {
      isScrolling = false; // Reset the scrolling flag
    }
  };

  requestAnimationFrame(scrollToTarget);
}
