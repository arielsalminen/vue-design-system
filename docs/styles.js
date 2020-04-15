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
  Table: {
    table: {
      borderCollapse: "collapse",
      borderSpacing: 0,
      "& th, & td": {
        isolate: false,
        letterSpacing: "1px",
        padding: "16px",
        borderRadius: 0,
      },
      "& th": {
        isolate: false,
        textTransform: "uppercase",
        color: "#1a3c5f",
      },
      "& tr > td, & tr > th": {
        isolate: false,
        borderBottom: "1px solid #e2e6ea",
      },
      "& tbody tr:last-child > td": {
        isolate: false,
        borderBottom: 0,
      },
    },
    dataRow: {
      isolate: false,
      ":hover": {
        isolate: false,
      },
    },
  },
}
