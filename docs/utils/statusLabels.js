export default {
  mounted() {
    const id = this.$options.name + "-container"
    const value = this.$options.version

    if (id) {
      const container = document.getElementById(id)
      const label = document.createElement("label")

      if (container) {
        label.innerHTML = "version missing"
        label.className = "status"

        if (value) {
          label.innerHTML = value
          label.className += " status-" + value
        }
        container.appendChild(label)
      }
    }
  },
}
