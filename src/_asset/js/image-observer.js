document.addEventListener("DOMContentLoaded", function () {
  const move = () => {
    document.removeEventListener('mousemove', move)
    window.removeEventListener('scroll', move)

    document.querySelectorAll('.load-later').forEach(element => {
      element.src = element.dataset.src
    })
  }

  document.addEventListener('mousemove', move)
  window.addEventListener('scroll', move)
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        lazyImage.classList.remove("smart-load");
        imgObserver.unobserve(lazyImage);
      }
    })
  });
  const arr = document.querySelectorAll('img.smart-load')
  arr.forEach((v) => {
    imageObserver.observe(v);
  })
})
