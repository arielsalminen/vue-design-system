export default {
  mounted() {
    // Find all tags in a styleguide
    const tags = document.querySelectorAll("div[class^='rsg--docs'] code[class^='rsg--code']")
    // For each found tag create an appropriate status label
    for (var i = 0; i < tags.length; i++) {
      const label = document.createElement("label")
      label.innerHTML = tags[i].textContent
      label.className = "status status-" + tags[i].textContent
      if (!tags[i].parentNode.parentNode.querySelector(".status")) {
        tags[i].parentNode.parentNode.appendChild(label)
        tags[i].parentNode.style.display = "none"
      }
    }
  },
}
