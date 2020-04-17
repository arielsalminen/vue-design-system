module.exports = {
  StyleGuide: {
    logo: {
      padding: "24px",
    },
  },
  Logo: {
    logo: {
      color: "#e9f3fd",
    },
  },
  ComponentsList: {
    isSelected: {
      "& > a[href], & > a[href]:hover": {
        isolate: false,
        color: "#d3e8fc",
      },
    },
    item: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      fontSize: "15px",
      margin: 0,
      fontWeight: 600,
      "ul ul & ": {
        "-webkit-font-smoothing": "subpixel-antialiased",
        "-moz-osx-font-smoothing": "auto",
        fontWeight: 400,
        fontSize: "13px",
      },
      "& > a[href]": {
        isolate: false,
        padding: "4px 24px",
        display: "block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "&:hover": {
          isolate: false,
          color: "#84bdf6",
        },
      },
    },
    list: {
      isolate: false,
      margin: 0,
      padding: 0,
      "ul &": {
        lineHeight: "1.3",
        paddingLeft: "16px",
      },
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
      "&:hover": {
        isolate: false,
      },
    },
  },
}
