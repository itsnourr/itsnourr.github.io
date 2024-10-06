// Track scrolling
let tocVisible = false;

window.addEventListener('scroll', function() {
  let toc = document.getElementById('toc');
  
  // Show ToC after scrolling down 100px
  if (window.scrollY > 100 && !tocVisible) {
    toc.classList.add('open');
    tocVisible = true;
  }
  
  // Hide ToC if scrolling back up near top
  if (window.scrollY < 100 && tocVisible) {
    toc.classList.remove('open');
    tocVisible = false;
  }
});

// Optional: Manual toggle using a button
document.getElementById('toc-button').addEventListener('click', function() {
  var toc = document.getElementById('toc');
  if (toc.classList.contains('open')) {
    toc.classList.remove('open');
  } else {
    toc.classList.add('open');
  }
});
