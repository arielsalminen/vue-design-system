import React from "react"
import PropTypes from "prop-types"
import cx from "clsx"
import Color from "color"
import Link from "rsg-components/Link"
import Styled from "rsg-components/Styled"
const tokens = require("../../src/assets/tokens/tokens.json")

const bleuDeFrance = Color(tokens.color_bleu_de_france)

const styles = ({ fontFamily, space, mq }) => ({
  list: {
    isolate: false,
    margin: 0,
    padding: 0,
    "nav > & > $item": {
      isolate: false,
      [mq.small]: {
        isolate: false,
        display: "inline-block",
        verticalAlign: "top",
      },
    },
    "ul &": {
      lineHeight: "1.3",
      paddingLeft: space[2],
    },
  },
  item: {
    display: "block",
    fontFamily: fontFamily.base,
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontSize: "15px",
    margin: 0,
    fontWeight: 600,
    "ul ul & ": {
      isolate: false,
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto",
      fontWeight: 400,
      fontSize: "13px",
    },
    "& > a[class*='rsg--link']": {
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
  isChild: {
    [mq.small]: {
      display: "inline-block",
      margin: [[0, space[1], 0, 0]],
    },
  },
  hidden: {
    display: "none",
    [mq.small]: {
      display: "initial",
    },
  },
  isSelected: {
    fontWeight: "bold",
    "& li": {
      isolate: false,
      fontWeight: "normal",
    },
    "& > a[href], & > a[href]:hover": {
      isolate: false,
      color: bleuDeFrance
        .mix(Color("white"), 0.8)
        .hsl()
        .string(),
    },
  },
})

export const ComponentsListRenderer = ({ classes, items }) => {
  const initialOpenSection = items.find(item => item.initialOpen)
  const [openSlug, setOpenSlug] = React.useState(
    initialOpenSection && initialOpenSection.slug ? initialOpenSection.slug : ""
  )

  return (
    <ul className={classes.list}>
      {items.map(item => {
        const open = item.forcedOpen || openSlug === item.slug
        return (
          <ComponentsListSectionRenderer
            key={item.slug}
            classes={classes}
            {...item}
            open={open}
            // when the current section is already open toggle should close it
            onToggle={() => setOpenSlug(item.slug && !open ? item.slug : "")}
          />
        )
      })}
    </ul>
  )
}

const ComponentsListSectionRenderer = ({
  slug,
  classes,
  heading,
  visibleName,
  href,
  content,
  shouldOpenInNewTab,
  selected,
  open,
  onToggle,
}) => {
  return (
    <li
      className={cx(classes.item, {
        [classes.isChild]: !content && !shouldOpenInNewTab,
        [classes.isSelected]: selected,
      })}
      key={slug}
    >
      <Link
        className={cx(heading && classes.heading)}
        href={href}
        onClick={onToggle}
        target={shouldOpenInNewTab ? "_blank" : undefined}
      >
        {visibleName}
      </Link>
      {// To be able to show all sections when in mobile mode,
      // we have to render them all the time.
      // We use hiding and showing instead of destroying.
      content && <div className={open ? undefined : classes.hidden}>{content}</div>}
    </li>
  )
}

ComponentsListRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  items: PropTypes.array.isRequired,
}

export default Styled(styles)(ComponentsListRenderer)
