document.addEventListener("DOMContentLoaded", (event) => {
  toggleSecondary();
  signoutListener();
  runPrettify();
});

function toggleSecondary() {
  var button = document.getElementsByClassName("secondary-toggle")[0];
  var secondary = document.getElementsByClassName("secondary")[0];

  if (secondary && button) {
    button.addEventListener("click", () =>
      secondary.classList.toggle("toggled-on"));
  }
}

function signoutListener() {
  var button = document.getElementById("sign-out-btn");
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      var form = document.createElement("form");
      form.method = "POST";
      form.action = "/sessions";

      var method = document.createElement("input");
      method.name = "_method";
      method.value = "delete";
      form.appendChild(method);

      var csrf = document.createElement("input");
      csrf.type = "hidden";
      csrf.name = "_csrf";
      csrf.value = button.getAttribute("csrf-token");
      form.appendChild(csrf);

      document.body.appendChild(form);
      form.submit();
    });
  }
}

function runPrettify() {
  hljs.initHighlightingOnLoad();
}
