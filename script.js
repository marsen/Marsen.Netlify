if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // 手機裝置，轉導到 fa
  window.location.href = 'https://netlify.marsen.me/';
} else {
  // 非手機裝置，轉導到 google
  window.location.href = 'https://inpas.aiplux.com/';
}