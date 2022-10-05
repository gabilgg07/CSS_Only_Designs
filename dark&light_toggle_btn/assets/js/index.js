const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function (e) {
  toggle.classList.toggle("active");
  document.body.classList.toggle("active");
});
