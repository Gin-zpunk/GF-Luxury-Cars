new Vue({
    el: '#cari',
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

// Get car ID from URL
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

// Sample data (replace with your data)
const newCars = [
    { id:1 ,desc: 'Mobil Corvette C8 adalah karya terbaru dari Chevrolet yang menggabungkan desain futuristik dengan performa luar biasa. Ditenagai oleh mesin V8 mid-engine, Corvette C8 menawarkan akselerasi yang mengagumkan dan penanganan yang presisi. Dengan desain eksterior yang aerodinamis dan interior yang mewah, mobil ini memberikan pengalaman mengemudi yang mengasyikkan dan memukau bagi para penggemar mobil sport.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Corvette C8', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2FHennesseys-Corvette-C8-Stingray-Boasts-708-HP-tw.jpg?w=960&cbr=1&q=90&fit=max' },
    { id:2 ,desc: 'Bentley Flying Spur adalah simbol kemewahan dan kelas tinggi dalam dunia otomotif, menawarkan kombinasi elegan antara desain yang anggun, kenyamanan luar biasa, dan performa yang memukau. Dibekali dengan mesin kuat yang menghasilkan tenaga melimpah, serta dilengkapi dengan berbagai fitur canggih dalam kabin yang dilapisi dengan bahan-bahan berkualitas tinggi, Flying Spur menghadirkan pengalaman mengemudi yang tak tertandingi, menjadikannya pilihan ideal bagi mereka yang menginginkan kemewahan dan prestise tanpa kompromi.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Bentley Flying Spur', image: 'https://cdn.motor1.com/images/mgl/W88QBO/s3/bentley-flying-spur-s-front-angle.jpg' },
    { id:3 ,desc: 'Porsche 911 GT3 RS adalah perwujudan dari kecanggihan teknologi dan performa tinggi dalam dunia otomotif. Dengan mesin bertenaga tinggi yang diposisikan di bagian tengah, transmisi otomatis ganda yang responsif, serta sistem suspensi yang disesuaikan untuk lintasan balap, mobil ini memberikan pengalaman mengemudi yang luar biasa dan memukau. Desain aerodinamisnya yang ikonik, dilengkapi dengan elemen karbon dan detail racing, menambah kesan agresif dan membuatnya terlihat seperti mobil yang siap bersaing di lintasan. Porsche 911 GT3 RS adalah pilihan sempurna bagi para penggemar mobil sport yang mencari performa tinggi dan keunggulan teknologi dalam satu paket yang memukau.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Porsche 911 GT3 RS', image: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/10/Porsche-911-GT3-RS_HERO-16x9-1.jpg' },
    { id:4 ,desc: 'Maybach GLS 600 adalah inkarnasi puncak dari kemewahan dalam segmen SUV, menggabungkan desain yang megah dengan kenyamanan yang tiada tanding. Dibangun atas platform Mercedes-Benz GLS-Class yang kokoh, Maybach GLS 600 menampilkan interior yang luar biasa, dilengkapi dengan bahan-bahan premium dan sentuhan kelas atas seperti kursi yang dapat disesuaikan secara elektris, serta fitur hiburan dan kenyamanan terkini. Performa yang tangguh dari mesin V8 bertenaga tinggi dipadukan dengan sistem suspensi yang canggih, memberikan pengalaman mengemudi yang halus dan nyaman di atas segala medan. Dengan perpaduan antara prestise Maybach dan fungsionalitas SUV mewah, Maybach GLS 600 menjadi pilihan yang tak tertandingi bagi mereka yang mengutamakan kemewahan dan kenyamanan dalam perjalanan mereka.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Maybach GLS 600', image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/lRYBm78KQzWv6NoCSoby' },
    { id:5 ,desc: 'VW ID Buzz adalah mobil listrik yang menggabungkan gaya retro ikonik dengan teknologi modern yang ramah lingkungan. Mengadaptasi desain khas Volkswagen Bus dari era 1960-an, ID Buzz menampilkan bentuk yang khas dan simpel namun dengan sentuhan futuristik. Ditenagai sepenuhnya oleh tenaga listrik, mobil ini menawarkan kinerja yang responsif dan ramah lingkungan. Interior yang luas dan fleksibel menciptakan ruang yang nyaman untuk penumpang dan barang bawaan, sementara teknologi terbaru seperti layar sentuh besar dan fitur otonom meningkatkan kenyamanan dan keselamatan pengemudi. VW ID Buzz menjadi pilihan menarik bagi mereka yang mencari mobil yang menyatukan gaya klasik dengan teknologi modern dalam paket yang ramah lingkungan.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'VW ID Buzz', image: 'https://cdn.motor1.com/images/mgl/oj14qy/s3/2022-id.-buzz.jpg' },
    { id:6 ,desc: 'McLaren Senna adalah mobil super eksklusif yang didedikasikan untuk merayakan warisan legendaris pembalap Formula 1, Ayrton Senna. Didesain untuk memberikan performa terbaik di lintasan balap, mobil ini ditenagai oleh mesin V8 twin-turbo yang menghasilkan tenaga luar biasa, memberikan akselerasi yang cepat dan responsif. Dengan desain eksterior yang agresif dan aerodinamis, serta interior yang disederhanakan namun fokus pada pengemudi, McLaren Senna menawarkan pengalaman mengemudi yang tak tertandingi di lintasan maupun jalan raya. Hanya diproduksi dalam jumlah terbatas, mobil ini menjadi simbol prestise dan keunggulan teknologi dalam dunia otomotif.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'McLaren Senna', image: 'https://i.pinimg.com/originals/2b/1f/53/2b1f53744c3ccb7b81a81086e3f289cc.jpg' },
    { id:7 ,desc: 'Koenigsegg Gemera adalah mobil super unik yang menggabungkan kecepatan luar biasa dengan kenyamanan dan kepraktisan untuk penggunaan sehari-hari. Ditenagai oleh sistem penggerak hybrid yang inovatif, Gemera memiliki empat mesin yang mampu menghasilkan total tenaga yang mencengangkan, menjadikannya salah satu mobil dengan akselerasi tercepat di dunia. Namun, yang membuat Gemera benar-benar istimewa adalah kemampuannya untuk mengangkut hingga empat penumpang dengan kenyamanan dan ruang yang melimpah, serta dilengkapi dengan berbagai fitur hiburan dan kenyamanan canggih. Dengan kombinasi performa luar biasa dan kemewahan yang tak tertandingi, Koenigsegg Gemera menetapkan standar baru untuk mobil super yang serba bisa.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Koenigsegg Gemera', image: 'https://cdn.motor1.com/images/mgl/01nKp/s3/koenigsegg-gemera.jpg' },
    { id:8 ,desc: 'Audi RS6 Avant adalah mobil estate yang menggabungkan gaya sporty dengan ruang kargo yang luas dan kenyamanan premium. Ditenagai oleh mesin V8 twin-turbo yang kuat, RS6 Avant menawarkan kinerja yang mengesankan dengan akselerasi cepat dan penanganan yang presisi. Desain eksterior yang agresif dipadukan dengan interior yang mewah dan dilengkapi dengan teknologi canggih, seperti layar sentuh utama dan sistem pengemudi otomatis, menjadikan RS6 Avant pilihan ideal bagi mereka yang menginginkan mobil yang serba bisa untuk kebutuhan sehari-hari namun tetap menawarkan sensasi mengemudi yang menyenangkan.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Audi RS6 Avant', image: 'https://www.motortrend.com/uploads/2023/06/001-2024-Audi-RS6-Avant-performance-front-three-quarters.jpg' },
    { id:9 ,desc: 'Mercedes-AMG One adalah mobil hypercar yang memadukan teknologi balap Formula 1 dengan performa tinggi untuk penggunaan jalan raya. Ditenagai oleh mesin V6 turbocharged yang diambil langsung dari mobil balap Formula 1, dilengkapi dengan empat motor listrik, mobil ini menghasilkan tenaga luar biasa dan akselerasi yang mengagumkan. Desainnya aerodinamis dan agresif mencerminkan warisan balap Mercedes-AMG, sementara interiornya yang mewah dan canggih menawarkan kenyamanan dan teknologi terkini. Diproduksi dalam jumlah terbatas, Mercedes-AMG One adalah simbol kemewahan dan kinerja yang tak tertandingi dalam dunia otomotif.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Mercedes AMG One', image: 'https://www.hdcarwallpapers.com/walls/mercedes_amg_one_2022_4k_5-HD.jpg' },
    { id:10 ,desc: 'Lykan Hypersport adalah sebuah hypercar yang diproduksi oleh W Motors, menjadi simbol kemewahan dan kinerja tinggi dalam dunia otomotif. Ditenagai oleh mesin twin-turbo flat-six yang kuat, mobil ini mampu menghasilkan tenaga luar biasa dan mencapai kecepatan yang mengesankan. Desainnya yang futuristik dan eksklusif, serta fitur-fitur mewah seperti lampu LED berlian dan interior yang dirancang secara khusus, menjadikannya salah satu mobil paling mahal dan paling diinginkan di dunia. Dengan hanya sedikit unit yang diproduksi, Lykan Hypersport adalah simbol prestise dan kemewahan yang tak tertandingi.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Lykan Hypersport', image: 'https://images3.alphacoders.com/106/1068854.jpg' },
    { id:11 ,desc: 'Tepat sebelum ulang tahun ke-60 merek tersebut, Lamborghini meluncurkan Revuelto, mobil super sport hybrid HPEV (High Performance Electrified Vehicle) pertama. Dengan Revuelto, Lamborghini telah menetapkan tolok ukur baru dalam performa, teknologi on-board, dan kenikmatan berkendara. Sensasi tertinggi yang diberikan oleh Revuelto dicapai berkat powertrain yang menghasilkan total 1015 CV, menggabungkan kekuatan mesin pembakaran internal 12 silinder baru dengan tiga motor listrik kepadatan tinggi dan e-gearbox kopling ganda transversal yang inovatif. Kekuatan hibridisasi dimanfaatkan untuk meningkatkan kinerja dan mendorong emosi ke tingkat yang belum pernah terjadi sebelumnya.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Lamborghini Revuelto', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-front-three-quarters-102-6421b7db0d727.jpg?crop=0.743xw:0.557xh;0.135xw,0.262xh&resize=1200:*' },
    { id:12 ,desc: 'Aston Martin Vantage adalah mobil sport yang menggabungkan gaya ikonik, performa tangguh, dan kemewahan yang khas dari merek legendaris tersebut. Ditenagai oleh mesin V8 twin-turbo yang kuat, Vantage menawarkan akselerasi yang cepat dan penanganan yang presisi, menjadikannya cocok untuk pengalaman mengemudi yang memukau. Desainnya yang elegan dan agresif, dilengkapi dengan fitur-fitur modern dan interior yang mewah, memastikan bahwa Vantage tidak hanya menarik bagi penggemar mobil sport, tetapi juga bagi mereka yang menghargai gaya hidup mewah.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Aston Martin Vantage', image: 'https://www.supercars.net/blog/wp-content/uploads/2020/10/2020-Aston-Martin-Vantage-AMR-001-2160-scaled.jpg' },
    { id:13 ,desc: 'Ferrari SF90 Stradale adalah mobil super yang menandai langkah baru Ferrari dalam mobil sport bertenaga hibrida. Ditenagai oleh mesin V8 twin-turbo yang kuat yang dipadukan dengan tiga motor listrik, mobil ini menghasilkan tenaga luar biasa dan menawarkan kinerja yang spektakuler. SF90 Stradale dirancang dengan aerodinamika canggih, memungkinkan mobil ini untuk menaklukkan kurva-kurva dengan kecepatan tinggi. Selain itu, interiornya yang mewah dan dilengkapi dengan teknologi terkini memberikan kenyamanan dan kemudahan penggunaan yang tak tertandingi. Sebagai mobil hibrida pertama dari Ferrari, SF90 Stradale menetapkan standar baru untuk mobil sport masa depan yang tidak hanya kuat dan cepat, tetapi juga ramah lingkungan.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Ferrari SF90 Stradale', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-sf90-xx-stradale-122-654a66978f827.jpg' },
    { id:14 ,desc: 'Ferrari Purosangue adalah SUV mewah pertama dari Ferrari yang menjanjikan gabungan unik antara performa tinggi, gaya Italia yang ikonik, dan kenyamanan premium. Dengan mesin bertenaga tinggi yang diharapkan akan memberikan kinerja luar biasa, Purosangue diharapkan akan menggabungkan kecepatan dan kecanggihan Ferrari dengan kemampuan berkendara yang nyaman dan praktis untuk penggunaan sehari-hari. Detail desainnya masih menjadi misteri, tetapi diharapkan Ferrari akan menjaga identitas mereknya yang legendaris dalam setiap aspek dari SUV ini, menjadikannya pilihan yang menarik bagi penggemar mobil sport yang mencari kenyamanan dan fungsionalitas tanpa mengorbankan kinerja.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Ferrari Purosangue', image: 'https://image.motor.at/images/cfs_landscape_1864w_1049h/7691322/_lor40891.jpg' },
    { id:15 ,desc: 'Rolls-Royce Spectre adalah mobil listrik mewah dua pintu dengan konfigurasi empat kursi. Mobil ini menandakan era baru bagi Rolls-Royce dengan menghadirkan teknologi elektrifikasi tanpa mengurangi kemewahan dan keanggunan khas merek tersebut. Spectre memiliki desain yang ramping dan futuristik dengan panjang 5.475 mm, lebar 2.144 mm, dan tinggi 1.573 mm. Mobil ini dilengkapi dengan mesin listrik yang menghasilkan tenaga 577 hp dan torsi 900 Nm, memungkinkan akselerasi dari 0-100 km/jam dalam 4,5 detik. Jarak tempuh Spectre mencapai 520 km dalam sekali pengisian daya. Interior Spectre dirancang dengan penuh kemewahan, menggunakan bahan-bahan berkualitas tinggi dan menawarkan berbagai pilihan personalisasi.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Rolls Royce Spectre', image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/tderezu0t6nmillkucta' },
    { id:16 ,desc: 'Dodge Charger SRT Hellcat adalah mobil sedan performa tinggi yang menjanjikan kombinasi luar biasa antara tenaga yang kuat dan gaya yang agresif. Ditenagai oleh mesin supercharged HEMI V8 6.2 liter, Charger SRT Hellcat menghasilkan tenaga yang mencengangkan, membuatnya menjadi salah satu sedan tercepat di jalan. Desainnya yang khas Dodge Charger dengan gril depan yang besar dan bentuk yang agresif memberikan penampilan yang memukau di jalan. Selain itu, interior yang luas dan dilengkapi dengan teknologi canggih menjadikannya mobil yang nyaman untuk digunakan sehari-hari. Charger SRT Hellcat adalah pilihan ideal bagi mereka yang menginginkan kombinasi antara performa tinggi dan kenyamanan dalam satu paket yang mengesankan.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black', year: '2020',price: '1,000,000 USD' ,name: 'Dodge Charger SRT Hellcat', image: 'https://hips.hearstapps.com/hmg-prod/images/2021-dodge-charger-srt-hellcat-redeye-110-1593634350.jpg?crop=0.670xw:0.502xh;0.173xw,0.332xh&resize=1200:*' },
];

const usedCars = [
    { id:17 ,desc: 'Mazda RX-7 adalah mobil sport legendaris yang terkenal karena desainnya yang ikonik dan mesin rotarynya yang unik. Diluncurkan pertama kali pada tahun 1978, RX-7 telah menjadi favorit para penggemar mobil sport selama beberapa dekade. Generasi terbaru dari RX-7, yang terakhir kali diproduksi pada awal tahun 2000-an, menampilkan desain yang aerodinamis dan mesin rotary yang kuat, memberikan pengalaman mengemudi yang dinamis dan memuaskan. RX-7 dihargai karena kelincahan dan keterlibatannya dalam mengemudi, serta karena kemampuan modifikasi yang tak tertandingi, menjadikannya salah satu mobil sport paling ikonik dalam sejarah otomotif Jepang.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Mazda RX 7', image: 'https://www.slashgear.com/img/gallery/if-youre-buying-a-mazda-rx-7-know-these-things-about-the-rotary-engine/intro-1678393256.jpg' },
    { id:18 ,desc: 'Jeep Grand Cherokee, sebuah SUV yang terkenal dalam lini produk Jeep. Grand Cherokee telah menjadi salah satu SUV paling populer di pasar otomotif selama beberapa dekade. Dikenal karena kombinasi kemampuan off-road yang kuat dan kenyamanan dalam berkendara sehari-hari, Grand Cherokee menawarkan beragam pilihan mesin, termasuk varian performa tinggi SRT dan Trackhawk. Dengan desain yang tangguh dan interior yang nyaman, Grand Cherokee adalah pilihan populer bagi mereka yang mencari SUV serbaguna yang dapat mengatasi segala medan dengan gaya.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Jeep Grand Cherokee', image: 'https://cdn.motor1.com/images/mgl/Rqqv99/s3/2023-jeep-grand-cherokee-4xe-30th-anniversary-edition.jpg' },
    { id:19 ,desc: 'Lamborghini Urus adalah SUV super yang menggabungkan gaya yang mengesankan dengan performa yang luar biasa. Diluncurkan pada tahun 2018, Urus menandai masuknya Lamborghini ke dalam segmen SUV, menyuguhkan kombinasi yang unik antara kecepatan, kenyamanan, dan fungsionalitas. Ditenagai oleh mesin V8 twin-turbo yang kuat, Urus mampu memberikan akselerasi yang mengesankan dan kinerja superior, menjadikannya salah satu SUV tercepat di pasar. Selain itu, desainnya yang agresif dan futuristik, bersama dengan interior yang mewah dan dilengkapi dengan teknologi canggih, menjadikan Urus pilihan yang menarik bagi mereka yang menginginkan SUV yang tidak hanya berkinerja tinggi, tetapi juga memiliki gaya yang khas Lamborghini.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Lamborghini Urus', image: 'https://imgcdnblog.carvaganza.com/wp-content/uploads/2020/09/lamborghini-urus-graphite-capsule.jpg' },
    { id:20 ,desc: 'Toyota Supra MK4, yang diproduksi antara tahun 1993 dan 2002, adalah salah satu mobil sport legendaris yang terkenal karena kinerja dan potensinya dalam modifikasi. Dilengkapi dengan mesin turbocharged 2JZ-GTE yang kuat, Supra MK4 menawarkan akselerasi yang impresif dan kemampuan untuk menghasilkan tenaga yang besar dengan modifikasi yang tepat. Desainnya yang ikonik, termasuk lampu belakang bundar dan bodi yang aerodinamis, telah membuatnya tetap populer dalam komunitas pecinta mobil sport selama bertahun-tahun. Supra MK4 dikenal karena kelincahannya dalam mengemudi, kemampuan modifikasi yang tak tertandingi, dan statusnya sebagai salah satu mobil Jepang terbaik sepanjang masa.',km: '0' ,engine: '2.9L V6 Luxury Hybrid' ,color: 'Black' ,year: '2020' ,price: '1,000,000 USD' ,name: 'Toyota Supra MK4', image: 'https://momobil.id/news/wp-content/uploads/2022/10/Toyota-Supra-Mk4-1024x576.jpg' }
];

// Find the car with matching ID
let car = null;
for (let i = 0; i < newCars.length; i++) {
  if (newCars[i].id === carId) {
    car = newCars[i];
    break;
  }
}
if (!car) {
  for (let i = 0; i < usedCars.length; i++) {
    if (usedCars[i].id === carId) {
      car = usedCars[i];
      break;
    }
  }
}

// Create Vue instance
new Vue({
  el: '.container',
  data: {
    car: car
  }
});
