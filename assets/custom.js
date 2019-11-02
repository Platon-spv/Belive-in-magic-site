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


document.getElementById("modal_thanks_btn").onclick = function(event) {
  event.preventDefault();
  document.getElementById("modal_thanks_close_btn").click();

}


//footer
document.getElementById("footer_send_btn").onclick = function(event) {
  event.preventDefault();
  if (window.document.forms.form_footer.reportValidity()) {

    var body_msg = '<h1>"СВЯЖИСЬ СО МНОЙ" ( "' + window.location.pathname.replace("/", "") + '")</h1> <br> <h3> ' +
      "Фамилия и имя: " + document.forms.form_footer.name.value + ";<br>" +
      "Номер телефона: " + document.forms.form_footer.phone.value + ";<br>" +
      "Ссылка на facebook: " + document.forms.form_footer.facebook_link.value + ";<br>" +
      "Сообщение: " + document.forms.form_footer.message.value + ";</h3><br>";

    var subject_msg = "СВЯЖИСЬ СО МНОЙ";

    SendMail(subject_msg, body_msg);

    return false;
  };

}


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
      } else {
        document.getElementById("modal_thanks-Sending_text").textContent = "Ошибка: " + message;
      }
      console.log(message)
    }


  );
}

//business
if (document.getElementById("business_btn")) {


  document.getElementById("business_btn").onclick = function(event) {
    event.preventDefault();
    if (window.document.forms.form_business.reportValidity()) {

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

//correction
if (document.getElementById("correction_btn")) {


  document.getElementById("correction_btn").onclick = function(event) {
    event.preventDefault();
    if (window.document.forms.form_correction.reportValidity()) {

      var body_msg = '<h1>Заявка на "Энергокоррекцию":</h1> <br> <h3> ' +
        document.forms.form_correction.name.placeholder + ": " + document.forms.form_correction.name.value + ";<br>" +
        document.forms.form_correction.tel.placeholder + ": " + document.forms.form_correction.tel.value + ";<br>" +
        document.forms.form_correction.facebook.placeholder + ": " + document.forms.form_correction.facebook.value + ";<br>" +
        document.forms.form_correction.message.placeholder + ": " + document.forms.form_correction.message.value + ";</h3><br>";

      var subject_msg = "Энергокоррекция";

      SendMail(subject_msg, body_msg);

      // return false;
    };

  }
}


//marafon
if (document.getElementById("marafon_btn")) {


  document.getElementById("marafon_btn").onclick = function(event) {
    event.preventDefault();
    if (window.document.forms.form_marafon.reportValidity()) {

      var body_msg = '<h1>Заявка на "Марафон":</h1> <br>  ' +
        '<h2>' + document.getElementById("form_marafon").dataset.package + '</h2> <br> <h3> ' +
        document.forms.form_marafon.name.placeholder + ": " + document.forms.form_marafon.name.value + ";<br>" +
        document.forms.form_marafon.tel.placeholder + ": " + document.forms.form_marafon.tel.value + ";<br>" +
        document.forms.form_marafon.facebook.placeholder + ": " + document.forms.form_marafon.facebook.value + ";<br>" +
        document.forms.form_marafon.message.placeholder + ": " + document.forms.form_marafon.message.value + ";</h3><br>";

      var subject_msg = "Марафон";

      SendMail(subject_msg, body_msg);

      // return false;
    };

  }


  var CostInf = document.querySelectorAll('#cost_of_participation a');

  CostInf.forEach(function(elem) {

    elem.addEventListener('click', function() {
      var package = this.getAttribute("data-package")
      var cost = this.getAttribute("data-cost")
      document.getElementById("form_marafon").dataset.package = package + " " + cost;
      console.log(document.getElementById("form_marafon").dataset.package);
    })
  })


}