window.addEventListener("load", function () {
  const form = document.getElementById('contact-form');
  const alertMessages = document.getElementById("alert-messages");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("overlay").style.display = "block";
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(response => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("alert-messages").scrollIntoView({ behavior: "smooth", block: "start" });

        if (response.ok) {
          const template = document.getElementById("success-alert-template");
          const clone = document.importNode(template.content, true);
          alertMessages.prepend(clone)
          form.reset();
        } else {
          const template = document.getElementById("error-alert-template");
          const clone = document.importNode(template.content, true);
          alertMessages.prepend(clone)
        }
      })
      .catch(error => {
        document.getElementById("overlay").style.display = "none";
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        const template = document.getElementById("error-alert-template");
        const clone = document.importNode(template.content, true);
        alertMessages.prepend(clone)
      });
  });
});