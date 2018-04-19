/**
 * Web Font Loader takes care of Vue Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader"

WebFont.load({
  custom: {
    families: ["lobster-custom:n4"],
    // You need both of these paths since Styleguidist
    // tries to find static assets from the root.
    urls: ["/assets/fonts/fonts.css", "/fonts/fonts.css"],
  },
})
