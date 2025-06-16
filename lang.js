
document.getElementById("langSwitch").addEventListener("change", function () {
  let lang = this.value;
  document.querySelectorAll("[data-" + lang + "]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
});
