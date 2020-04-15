module.exports = {
  ComponentsList: {
    isSelected: {
      fontWeight: "normal",
      "& > a[href]": {
        color: "#FFFFFF",
      },
    },
    item: {
      fontSize: "15px",
      fontWeight: 600,
      "ul ul & ": {
        fontWeight: 400,
        fontSize: "13px",
        padding: "5px 0",
      },
    },
    list: {
      marginTop: "2px",
    },
  },
}
