document.addEventListener("DOMContentLoaded", function() {

  // Find all tags in a styleguide
  const tags = document.querySelectorAll("div[class^='rsg--docs'] code[class^='rsg--code']")

  // For each found tag create an appropriate status label
  tags.forEach(function(el) {
    const label = document.createElement("label");
    label.innerHTML = el.textContent;
    label.className = "status status-" + el.textContent;
    el.parentNode.parentNode.appendChild(label);
    el.parentNode.style.display = "none";
  });

});
