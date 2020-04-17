const Color = require("color")
const tokens = require("../src/assets/tokens/tokens.json")

const bleuDeFrance = Color(tokens.color_bleu_de_france)
const oxfordBlue = Color(tokens.color_oxford_blue)

/**
 * Styles specific from components
 */
module.exports = function({ space }) {
  return {
    StyleGuide: {
      logo: {
        padding: space[3],
      },
    },
    Logo: {
      logo: {
        color: bleuDeFrance
          .mix(Color("white"), 0.9)
          .hsl()
          .string(),
      },
    },
    ComponentsList: {
      isSelected: {
        "& > a[href], & > a[href]:hover": {
          isolate: false,
          color: bleuDeFrance
            .mix(Color("white"), 0.8)
            .hsl()
            .string(),
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
          padding: `${space[0]}px ${space[3]}px`,
          display: "block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "&:hover": {
            isolate: false,
            color: tokens.color_bleu_de_france_lighter,
          },
        },
      },
      list: {
        isolate: false,
        margin: 0,
        padding: 0,
        "ul &": {
          lineHeight: "1.3",
          paddingLeft: space[2],
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
          padding: space[2],
          borderRadius: 0,
        },
        "& th": {
          isolate: false,
          textTransform: "uppercase",
          color: oxfordBlue
            .mix(Color("white"), 0.1)
            .hsl()
            .string(),
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
}
