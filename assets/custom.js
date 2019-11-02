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

function SendMail(subj, msg) {
  document.getElementById("modal_close_btn").click();
  document.getElementById("popup_clic_me2").click();
  Email.send({
    Host: "smtp.gmail.com",
    Username: "believe.in.magic.site@gmail.com",
    Password: "nKJHkjh8ujh98",
    To: 'believe.in.magic.site@gmail.com',
    From: "believe.in.magic.site@gmail.com",
    Subject: subj,
    Body: msg
  }).then(
    message => {
      if (message === "OK") {
        document.getElementById("modal_thanks-Sending_text").hidden = true;
        document.getElementById("modal_thanks-Done").className = "";
      }
      console.log(message)
    }


  );
}

//business
if (document.getElementById("business_btn")) {


  document.getElementById("business_btn").onclick = function(event) {
    if (window.document.forms.form_business.reportValidity()) {
      event.preventDefault();

      var body_msg = '<h1>Заявка на "Бизнес":</h1> <br> <h3> ' +
        document.forms.form_business.name.placeholder + ": " + document.forms.form_business.name.value + ";<br>" +
        document.forms.form_business.tel.placeholder + ": " + document.forms.form_business.tel.value + ";<br>" +
        document.forms.form_business.facebook.placeholder + ": " + document.forms.form_business.facebook.value + ";<br>" +
        document.forms.form_business.message.placeholder + ": " + document.forms.form_business.message.value + ";</h3><br>";

      var subject_msg = "Бизнес";

      SendMail(subject_msg, body_msg);

      // return false;
    };

  }
}


//footer
document.getElementById("footer_send_btn").onclick = function(event) {
  if (window.document.forms.form_business.reportValidity()) {
    event.preventDefault();

    var body_msg = '<h1>СВЯЖИСЬ СО МНОЙ (контактная форма на страничке "' + window.location.pathname.replace("/", "") + '")</h1> <br> <h3> ' +
      document.forms.form_footer.name.placeholder + ": " + document.forms.form_footer.name.value + ";<br>" +
      document.forms.form_footer.phone.placeholder + ": " + document.forms.form_footer.phone.value + ";<br>" +
      document.forms.form_footer.facebook_link.placeholder + ": " + document.forms.form_footer.facebook_link.value + ";<br>" +
      document.forms.form_footer.message.placeholder + ": " + document.forms.form_footer.message.value + ";</h3><br>";

    var subject_msg = "Сообщение из: СВЯЖИСЬ СО МНОЙ";

    SendMail(subject_msg, body_msg);

    // return false;
  };

}