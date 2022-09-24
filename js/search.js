// const f = document.getElementById('form');
// const q = document.getElementById('query');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = 'pagedart.com';

// function submitted(event) {
//   event.preventDefault();
//   const url = google + site + '+' + q.value;
//   const win = window.open(url, '_blank');
//   win.focus();
// }

// f.addEventListener('submit', submitted);

$(document).ready(function () {
  $("#search").focus(function () {
    $(".search-box").addClass("border-searching");
    $(".search-icon").addClass("si-rotate");
  });
  $("#search").blur(function () {
    $(".search-box").removeClass("border-searching");
    $(".search-icon").removeClass("si-rotate");
  });
  $("#search").keyup(function () {
    if ($(this).val().length > 0) {
      $(".go-icon").addClass("go-in");
    }
    else {
      $(".go-icon").removeClass("go-in");
    }
  });
  $(".go-icon").click(function () {
    $(".search-form").submit();
  });
});