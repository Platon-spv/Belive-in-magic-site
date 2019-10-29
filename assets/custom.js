$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 4; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});



// $("#connect_to_marafon").click()
// $("#business_btn").click()

//business

document.getElementById("business_btn").onclick = function() {

  if (window.document.forms.form_business.reportValidity()) {


    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "platon.spv@gmail.com",
      Password: "f8d41354-76f1-41de-99af-9390799b0c8a",
      To: 'believe.in.magic.site@gmail.com',
      From: "believe.in.magic.site@gmail.com",
      Subject: "Бизнесс",
      Body: "Test message PLPLPL ПЕРЕСЫЛКИ 3 "
    }).then(
      message => console.log(message)
    );

    return false;
  };

}

// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "platon.spv@gmail.com",
//     Password : "f8d41354-76f1-41de-99af-9390799b0c8a",
//     To : 'platon.spv@gmail.com',
//     From : "platon.spv@gmail.com",
//     Subject : "Привет привет ТЕСТ",
//     Body : "Test message PLPLPL"
// }).then(
//   message => console.log(message)
// );