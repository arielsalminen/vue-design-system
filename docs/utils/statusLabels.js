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
        label.innerHTML = "version missing"
        label.className = "status"

        if (value) {
          label.className += " status-" + value
          if (value === "review") {
            label.innerHTML = "under review"
          } else {
            label.innerHTML = value
          }
        }
        container.appendChild(label)
      }
    }
  },
}
