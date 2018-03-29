/**
 * This is Vue Design System’s helper util that
 * creates component status labels.
 */

export default {
  mounted() {
    const id = this.$options.name + "-container"
    const value = this.$options.status

    if (id) {
      const container = document.getElementById(id)
      const label = document.createElement("label")

      if (container) {
        const currentLabels = container.querySelectorAll("label.status")
        label.innerHTML = "version missing"
        label.setAttribute(
          "title",
          "This label shows component’s current working status. For a full list see “Getting Started” view."
        )
        label.className = "status"

        if (value) {
          label.className += " status-" + value
          if (value === "review") {
            label.innerHTML = "under review"
          } else {
            label.innerHTML = value
          }
        }

        if (currentLabels) {
          currentLabels.forEach(function(element) {
            element.parentNode.removeChild(element)
          })
        }

        container.appendChild(label)
      }
    }
  },
}
