document.getElementById('searchBtn').addEventListener('click', function() {
  var loader = document.getElementById('loader');
  loader.style.display = 'block';

  // Simulate loading process (2 seconds)
  setTimeout(function() {
    loader.style.display = 'none';
    // You can add further logic here after loading completes
  }, 2000);
});
