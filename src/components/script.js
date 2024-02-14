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
    showAd: true // Properti untuk mengontrol keberadaan div iklan
  },
  methods: {
    search: function () {
      const searchKeyword = this.searchKeyword.toLowerCase();
      if (searchKeyword) {
        // Filter mobil baru dan bekas berdasarkan kata kunci pencarian
        const newCarsResults = this.newCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        const usedCarsResults = this.usedCars.filter(car => car.name.toLowerCase().includes(searchKeyword));
        this.searchResults = [...newCarsResults, ...usedCarsResults];
        this.showAd = false; // Sembunyikan iklan setelah pencarian
      } else {
        // Jika kotak pencarian kosong, reset hasil pencarian
        this.searchResults = [];
        this.showAd = true; // Tampilkan kembali iklan
      }


    },
    goToLogin: function () {
      window.location.href = './loginPage.html';
    },
    goToCars: function () {
      window.location.href = './cars.html';
    }
  }
});

new Vue({
  el: '#car',
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
  }
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

