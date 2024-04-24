let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var moviesArray = [
  {
    title: "بی بدن",
    description:
      "بی بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که در چهل و دومین جشنواره فجر در بخش نگاه نو حضور دارد.",
    image: "./assets/img/bodiless_movie.jpg",
    button: "#",
  },
  {
    title: "تمساح خونی",
    description:
      "تمساح خونی نخستین ساخته‌ی جواد عزتی به‌عنوان کارگردان و به تهیه‌کنندگی کامران حجازی است که در چهل و دومین جشنواره فیلم فجر نیز حضور داشت.",
    image: "./assets/img/TemsahKhooni_movie.jpeg",
    button: "#",
  },
  {
    title: "آسمان غرب",
    description:
      "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد.",
    image: "./assets/img/AsemaneGhrarb_movie.jpeg",
    button: "#",
  },
  {
    title: "سال گربه",
    description:
      "نمایش سال گربه به کارگردانی مصطفی تقی‌زاده و تهیه‌کنندگی سعید خانی است. بهرام افشاری، سارا بهرامی، هومن برق‌نورد، شبنم قربانی، نوشین تبریزی و رضا رشیدپور بازیگران این فیلم هستند.",
    image: "./assets/img/SaleGorbe_movie.jpg",
    button: "#",
  },
];

function addCard() {
  var cardContainer = document.getElementById("cardContainer");

  for (var i = 0; i < moviesArray.length; i++) {
    var card = moviesArray[i];

    var cardHtml = `<div class="col">
    <div class="card h-100">
      <img
        src="${card.image}"
        class="card-img-top"
        alt="${card.title}"
      />
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">
        ${card.description}
        </p>
      </div>
      <a class="btn btn-primary" href="${card.button}">خرید بلیط</a>
    </div>
  </div>`;

    cardContainer.innerHTML += cardHtml;
  }
}
