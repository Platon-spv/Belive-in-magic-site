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

    var body_msg =  '<h1>Заявка на "Бизнес":</h1> <br> <h3> ' +
    document.forms.form_business.name.placeholder + ": " + document.forms.form_business.name.value + ";<br>"+
     document.forms.form_business.tel.placeholder + ": " + document.forms.form_business.tel.value + ";<br>"+
      document.forms.form_business.facebook.placeholder + ": " + document.forms.form_business.facebook.value + ";<br>"+
       document.forms.form_business.message.placeholder + ": " + document.forms.form_business.message.value + ";</h3><br>";

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "platon.spv@gmail.com",
      Password: "f8d41354-76f1-41de-99af-9390799b0c8a",
      To: 'believe.in.magic.site@gmail.com',
      From: "believe.in.magic.site@gmail.com",
      Subject: "Бизнес",
      Body: body_msg
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