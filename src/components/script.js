new Vue({
  el: '#search',
  data: {
    newCars: [
      { name: 'Corvette C8', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2FHennesseys-Corvette-C8-Stingray-Boasts-708-HP-tw.jpg?w=960&cbr=1&q=90&fit=max' },
      { name: 'Bentley Flying Spur', image: 'https://cdn.motor1.com/images/mgl/W88QBO/s3/bentley-flying-spur-s-front-angle.jpg' },
      { name: 'Porsche 911 GT3 RS', image: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/10/Porsche-911-GT3-RS_HERO-16x9-1.jpg' },
      { name: 'Maybach GLS 600', image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/lRYBm78KQzWv6NoCSoby' }
    ],
    usedCars: [
      { name: 'Mazda RX 7', image: 'https://www.slashgear.com/img/gallery/if-youre-buying-a-mazda-rx-7-know-these-things-about-the-rotary-engine/intro-1678393256.jpg' },
      { name: 'Jeep Grand Cherokee', image: 'https://cdn.motor1.com/images/mgl/Rqqv99/s3/2023-jeep-grand-cherokee-4xe-30th-anniversary-edition.jpg' },
      { name: 'Lamborghini Urus', image: 'https://imgcdnblog.carvaganza.com/wp-content/uploads/2020/09/lamborghini-urus-graphite-capsule.jpg' },
      { name: 'Toyota Supra MK4', image: 'https://momobil.id/news/wp-content/uploads/2022/10/Toyota-Supra-Mk4-1024x576.jpg' }
    ],
    searchKeyword: '',
    searchResults: [], // Array untuk menyimpan hasil pencarian
    showAd: true, // Properti untuk mengontrol keberadaan div iklan
    showCars: true, // Properti untuk mengontrol visibilitas div "car"
  },
  methods: {
    search: function () {
      const searchKeyword = this.searchKeyword.toLowerCase();
      if (searchKeyword) {
        const newCarsResults = this.newCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        const usedCarsResults = this.usedCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        this.searchResults = [...newCarsResults, ...usedCarsResults];
        this.showAd = false;
        this.showCars = false; // Menyembunyikan div dengan id "car"
        document.getElementById('car').style.display = 'none'; // Menyembunyikan div dengan id "car"
      } else {
        this.searchResults = [];
        this.showAd = true;
        this.showCars = true; // Menampilkan kembali div dengan id "car" jika kotak pencarian kosong
        document.getElementById('car').style.display = 'block'; // Menampilkan kembali div dengan id "car" jika kotak pencarian kosong
      }
    },
    // Tambahkan metode untuk mendeteksi tombol "Enter"
    handleEnterKey: function (event) {
      if (event.key === 'Enter') {
        this.search();
      }


    },
    goToLogin: function () {
      window.location.href = './loginbaru.html';
    },
    goToAuc: function () {
      window.location.href = './auction.html';
    },
    goToHome: function (){
      window.location.href = './gf.html'
    },
  }
});

new Vue({
  el: '#car',
  data: {
    newCars: [
      { id:1 ,name: 'Corvette C8', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2FHennesseys-Corvette-C8-Stingray-Boasts-708-HP-tw.jpg?w=960&cbr=1&q=90&fit=max' },
      { id:2 ,name: 'Bentley Flying Spur', image: 'https://cdn.motor1.com/images/mgl/W88QBO/s3/bentley-flying-spur-s-front-angle.jpg' },
      { id:3 ,name: 'Porsche 911 GT3 RS', image: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/10/Porsche-911-GT3-RS_HERO-16x9-1.jpg' },
      { id:4 ,name: 'Maybach GLS 600', image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/lRYBm78KQzWv6NoCSoby' },
      { id:5 ,name: 'VW ID Buzz', image: 'https://cdn.motor1.com/images/mgl/oj14qy/s3/2022-id.-buzz.jpg' },
      { id:6 ,name: 'McLaren Senna', image: 'https://i.pinimg.com/originals/2b/1f/53/2b1f53744c3ccb7b81a81086e3f289cc.jpg' },
      { id:7 ,name: 'Koenigsegg Gemera', image: 'https://cdn.motor1.com/images/mgl/01nKp/s3/koenigsegg-gemera.jpg' },
      { id:8 ,name: 'Audi RS6 Avant', image: 'https://www.motortrend.com/uploads/2023/06/001-2024-Audi-RS6-Avant-performance-front-three-quarters.jpg' },
      { id:9 ,name: 'Mercedes AMG One', image: 'https://www.topgear.com/sites/default/files/2022/08/1-Mercedes-AMG-One.jpg' },
      { id:10 ,name: 'Lykan Hypersport', image: 'https://images3.alphacoders.com/106/1068854.jpg' },
      { id:11 ,name: 'Lamborghini Revuelto', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-front-three-quarters-102-6421b7db0d727.jpg?crop=0.743xw:0.557xh;0.135xw,0.262xh&resize=1200:*' },
      { id:12 ,name: 'Aston Martin Vantage', image: 'https://www.supercars.net/blog/wp-content/uploads/2020/10/2020-Aston-Martin-Vantage-AMR-001-2160-scaled.jpg' },
      { id:13 ,name: 'Ferrari SF90 Stradale', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-sf90-xx-stradale-122-654a66978f827.jpg' },
      { id:14 ,name: 'Ferrari Purosangue', image: 'https://image.motor.at/images/cfs_landscape_1864w_1049h/7691322/_lor40891.jpg' },
      { id:15 ,name: 'Rolls Royce Spectre', image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/tderezu0t6nmillkucta' },
      { id:16 ,name: 'Dodge Charger SRT Hellcat', image: 'https://hips.hearstapps.com/hmg-prod/images/2021-dodge-charger-srt-hellcat-redeye-110-1593634350.jpg?crop=0.670xw:0.502xh;0.173xw,0.332xh&resize=1200:*' },
    ],
    usedCars: [
      { id:17 ,name: 'Mazda RX 7', image: 'https://www.slashgear.com/img/gallery/if-youre-buying-a-mazda-rx-7-know-these-things-about-the-rotary-engine/intro-1678393256.jpg' },
      { id:18 ,name: 'Jeep Grand Cherokee', image: 'https://cdn.motor1.com/images/mgl/Rqqv99/s3/2023-jeep-grand-cherokee-4xe-30th-anniversary-edition.jpg' },
      { id:19 ,name: 'Lamborghini Urus', image: 'https://imgcdnblog.carvaganza.com/wp-content/uploads/2020/09/lamborghini-urus-graphite-capsule.jpg' },
      { id:20 ,name: 'Toyota Supra MK4', image: 'https://momobil.id/news/wp-content/uploads/2022/10/Toyota-Supra-Mk4-1024x576.jpg' }
    ],
    showCar: true,
    selectedCar: null
},
methods: {
  search: function () {
    const searchKeyword = this.searchKeyword.toLowerCase();
    if (searchKeyword) {
      // Lakukan pencarian
      const newCarsResults = this.newCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
      const usedCarsResults = this.usedCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
      this.searchResults = [...newCarsResults, ...usedCarsResults];
      this.showCar = false; // Sembunyikan div dengan id "car" saat pencarian dilakukan
    } else {
      // Jika pencarian kosong, reset hasil pencarian dan tampilkan kembali div dengan id "car"
      this.searchResults = [];
      this.showCar = true;
    }
  },
}
});


new Vue({
  el: '#about',
  data: {
    about:[
      {title: 'GF LUXURY TOYS', desc: 'Initiated in 2009, GF LUXURY TOYS is an automotive dealership that focuses on growing the luxury market. GF offers the best investment and ownership experience with the most efficient operations. With a strong value in teamwork and a well-maintained community, GF builds and embeds the passion for luxury automotive within our practice. Our goal is to serve people with unique & passionate thrill-seekers, which is the main thing GF can provide.'},
    ],
    logo: [
      { img: 'https://static.vecteezy.com/system/resources/previews/020/500/228/non_2x/ferrari-brand-logo-car-symbol-black-design-italian-automobile-illustration-free-vector.jpg' },
      { img: 'https://static.vecteezy.com/system/resources/previews/020/502/583/original/lamborghini-brand-logo-car-symbol-black-design-italian-automobile-illustration-free-vector.jpg' },
      { img: 'https://i0.wp.com/moovingmedia.com/wp-content/uploads/2023/08/bentley_motors.png?fit=1040%2C1040&ssl=1' },
      { img: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/koenigsegg-logo-freelogovectors.net_.png' },
      { img: 'https://cdn.freebiesupply.com/logos/large/2x/pagani-logo-black-and-white.png' },
    ],
    searchResults: [],
    searchKeyword: '',
    showAbout: true,
    showSearchResults: false
  },
  methods: {
    search: function () {
      const searchKeyword = this.searchKeyword.toLowerCase();
      if (searchKeyword) {
        // Lakukan pencarian
        const newCarsResults = this.newCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        const usedCarsResults = this.usedCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        this.searchResults = [...newCarsResults, ...usedCarsResults];
        this.showAbout = false; // Sembunyikan div dengan id "car" saat pencarian dilakukan
      } else {
        // Jika pencarian kosong, reset hasil pencarian dan tampilkan kembali div dengan id "car"
        this.searchResults = [];
        this.showAbout = true;
      }
    }
  }
});




new Vue({
  el: '#lelang',
  data: {
    lelang: [
      { name: 'Giallo Modena F50', top: 'The Ferrari F50: Maranello’s Best Kept Secret', close:'February 5 2024', est:'3,800,000 - 4,500,000 USD', image: 'https://images.ctfassets.net/r1kltcpyyy0d/1SZjmnbnyMUTtzt8HQ8OpP/abab1fb8baca81565d755df77130f1b9/YF23_r0001_001.jpg?q=80&w=1440' },
      { name: '2000 Ferrari F1-2000', top: 'Schumacher – The Making of a Legend', close:'January 30 2024', est:'5,000,000 - 7,000,000 USD', image: 'https://rmsothebys-cache.azureedge.net/8/d/4/8/9/c/8d489ca7b60b7d2ae062bbcb68afc32128470631.jpg' },
      { name: '1985 Porsche 962', top: 'Le Mans', close:'March 1 2024', est:'6,500,000 - 10,000,000 USD', image: 'https://rmsothebys-cache.azureedge.net/a/1/9/6/c/e/a196ced683c6c438275bf44521547f0e2dd7a760.jpg' },
      { name: '1998 McLaren F1', top: 'McLaren F1 059', close:'March 5 2024', est:'3,300,000 - 4,900,000 USD', image: 'https://rmsothebys-cache.azureedge.net/b/6/5/3/e/a/b653eac428b5fc8e50a15dbf91bf06c942ffbd6f.jpg' },
      { name: '2012 Lexus LFA', top: 'Arizona', close:'April 10 2024', est:'500,000 - 1,500,000 USD', image: 'https://rmsothebys-cache.azureedge.net/9/d/0/b/a/8/9d0ba8e3d7d6e7021dd01c69eca6555607ef4728.jpg' }
    ],
  }
});



window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  // Menambahkan event listener ke elemen "Option"
  document.getElementById("optionButton").addEventListener("click", function(event) {
    // Menghentikan penyebaran event jika diperlukan
    event.stopPropagation();
    // Mengambil elemen dropdown
    var dropdown = document.getElementById("myDropdown");
    // Memeriksa apakah dropdown sedang ditampilkan atau tidak
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none"; // Jika ditampilkan, sembunyikan
    } else {
      dropdown.style.display = "block"; // Jika tidak ditampilkan, tampilkan
    }
  });

  // Menambahkan event listener ke dokumen untuk menyembunyikan dropdown saat klik di luar dropdown
  document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("myDropdown");
    // Memeriksa apakah elemen yang diklik adalah bagian dari dropdown atau bukan
    if (!event.target.matches('.products-1')) {
      dropdown.style.display = "none"; // Jika tidak, sembunyikan dropdown
    }
  });

  var buttons = document.querySelectorAll(".register");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      window.location.href = "./bid.html";
    });
  });


// setInterval(() => {
// const jakartaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta' });
// document.getElementById('current-time').textContent = jakartaTime;
// }, 1000);

// // Function to fetch and display current time in Jakarta
// function fetchJakartaTime() {
//     fetch("https://worldtimeapi.org/api/timezone/Asia/Jakarta")
//         .then(response => response.json())
//         .then(data => {
//             const jakartaTime = new Date(data.utc_datetime).toLocaleString('en-US', {
//                 timeZone: 'Asia/Jakarta',
//                 hour: 'numeric',
//                 minute: 'numeric',
//                 second: 'numeric',
//                 hour12: false
//             });

//             document.getElementById("current-time").textContent = jakartaTime;
//         })
//         .catch(error => {
//             console.error('Error fetching Jakarta time:', error);
//         });
// }

// // Call the function initially to display time immediately
// fetchJakartaTime();

// // Set interval to update time every 1 minute
// setInterval(fetchJakartaTime, 60000); // 60000 milliseconds = 1 minute

