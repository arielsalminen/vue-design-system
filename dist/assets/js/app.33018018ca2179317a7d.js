;(window.webpackJsonp = window.webpackJsonp || []).push([
  ["app"],
  {
    "/kPn": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Button",
          status: "prototype",
          release: "1.0.0",
          props: {
            type: {
              type: String,
              default: "button",
              validator: function(t) {
                return t.match(/(button|a)/)
              },
            },
            size: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(small|medium|large)/)
              },
            },
            href: { type: String, default: null },
            submit: {
              type: String,
              default: null,
              validator: function(t) {
                return t.match(/(null|submit)/)
              },
            },
            state: {
              type: String,
              default: null,
              validator: function(t) {
                return t.match(/(hover|active|focus)/)
              },
            },
            variation: {
              type: String,
              default: null,
              validator: function(t) {
                return t.match(/(primary|secondary)/)
              },
            },
          },
        },
        r = (n("807b"), n("KHd+")),
        o = n("tcIX"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement
            return (t._self._c || e)(
              t.type,
              {
                tag: "component",
                class: ["button", t.size, t.state, t.variation],
                attrs: { href: t.href, type: t.submit },
              },
              [t._t("default")],
              2
            )
          },
          [],
          !1,
          null,
          "34c95418",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Button.vue")
      e.default = i.exports
    },
    "/thn": function(t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM377.6 338c4.7-4.7 4.7-12.3 0-17l-65-65 65.1-65.1c4.7-4.7 4.7-12.3 0-17L338 134.4c-4.7-4.7-12.3-4.7-17 0l-65 65-65.1-65.1c-4.7-4.7-12.3-4.7-17 0L134.4 174c-4.7 4.7-4.7 12.3 0 17l65.1 65.1-65.1 65.1c-4.7 4.7-4.7 12.3 0 17l39.6 39.6c4.7 4.7 12.3 4.7 17 0l65.1-65.1 65.1 65.1c4.7 4.7 12.3 4.7 17 0l39.4-39.8z"/></svg>'
    },
    "0068": function(t, e, n) {},
    "1ktO": function(t, e, n) {},
    "1phr": function(t, e) {},
    "2dpg": function(t, e, n) {
      "use strict"
      var a = n("H4RJ")
      n.n(a).a
    },
    "2dwG": function(t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>'
    },
    "4K1/": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "NotFound",
          metaInfo: { title: "Page Not Found | Vue Design System", htmlAttrs: { lang: "en" } },
          props: { type: { type: String, default: "div" } },
        },
        r = (n("vJ+2"), n("KHd+")),
        o = n("gkHm"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              t.type,
              { tag: "component", staticClass: "not-found" },
              [
                n("NavBar", {
                  attrs: {
                    active: "NotFound",
                    navItems: [
                      { name: "Template", component: "Index", href: "/#/" },
                      { name: "Documentation", href: "http://localhost:6060/" },
                    ],
                  },
                }),
                t._v(" "),
                n(
                  "Wrapper",
                  [
                    n("Heading", [t._v("404 Error")]),
                    t._v(" "),
                    n("Paragraph", [
                      t._v(
                        "Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js."
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            )
          },
          [],
          !1,
          null,
          "622af9fe",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "NotFound.vue")
      e.default = i.exports
    },
    "5wPu": function(t, e, n) {},
    "68yd": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = n("bzL3"),
        r = {
          name: "Icon",
          status: "review",
          release: "1.0.0",
          props: {
            name: { required: !0, default: "settings" },
            fill: { type: String, default: "currentColor" },
            ariaLabel: { type: String, default: "icon" },
            type: { type: String, default: "span" },
            size: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(small|medium|large)/)
              },
            },
          },
          data: function() {
            return { svg: a("./" + this.name + ".svg").replace(/^<svg /, '<svg style="fill: '.concat(this.fill, '" ')) }
          },
        },
        o = (n("c5QI"), n("KHd+")),
        u = n("1phr"),
        i = n.n(u),
        l = Object(o.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement
            return (t._self._c || e)(t.type, {
              tag: "component",
              class: ["icon", t.size],
              attrs: { "aria-label": t.ariaLabel },
              domProps: { innerHTML: t._s(t.svg) },
            })
          },
          [],
          !1,
          null,
          null,
          null
        )
      "function" == typeof i.a && i()(l), (l.options.__file = "Icon.vue")
      e.default = l.exports
    },
    "7DUr": function(t, e) {},
    "7dOS": function(t, e) {},
    "7kMZ": function(t, e) {},
    "807b": function(t, e, n) {
      "use strict"
      var a = n("1ktO")
      n.n(a).a
    },
    "9+RL": function(t, e, n) {
      "use strict"
      var a = n("5wPu")
      n.n(a).a
    },
    "9I8L": function(t, e) {},
    "9t9y": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Wrapper",
          status: "review",
          release: "1.0.0",
          props: { type: { type: String, default: "div" } },
        },
        r = (n("frqv"), n("KHd+")),
        o = n("HpXA"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              this.type,
              { tag: "component", staticClass: "wrapper" },
              [this._t("default")],
              2
            )
          },
          [],
          !1,
          null,
          "4b05eca0",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Wrapper.vue")
      e.default = i.exports
    },
    AAsE: function(t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class="st1"/></svg>'
    },
    ECTP: function(t, e) {},
    FmFd: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Paragraph",
          status: "prototype",
          release: "1.0.0",
          props: {
            type: {
              type: String,
              default: "p",
              validator: function(t) {
                return t.match(/(p|span)/)
              },
            },
            variation: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(medium|intro|large|small)/)
              },
            },
          },
        },
        r = (n("Nuxr"), n("KHd+")),
        o = n("ECTP"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement
            return (t._self._c || e)(
              t.type,
              { tag: "component", class: ["paragraph", t.variation] },
              [t._t("default")],
              2
            )
          },
          [],
          !1,
          null,
          "eecd5d66",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Paragraph.vue")
      e.default = i.exports
    },
    H4RJ: function(t, e, n) {},
    HpXA: function(t, e) {},
    "Ii/R": function(t, e, n) {
      "use strict"
      var a = n("vAeE")
      n.n(a).a
    },
    JB6r: function(t, e, n) {},
    JtIp: function(t, e, n) {
      var a = { "./NavBar.vue": "nrZS" }
      function r(t) {
        var e = o(t)
        return n(e)
      }
      function o(t) {
        var e = a[t]
        if (e + 1) return e
        var n = new Error("Cannot find module '" + t + "'")
        throw ((n.code = "MODULE_NOT_FOUND"), n)
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        ((t.exports = r).id = "JtIp")
    },
    KzwA: function(t, e, n) {},
    Nuxr: function(t, e, n) {
      "use strict"
      var a = n("ONqy")
      n.n(a).a
    },
    ONqy: function(t, e, n) {},
    Tof5: function(t, e) {},
    UklV: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Input",
          status: "ready",
          release: "1.0.0",
          props: {
            type: {
              type: String,
              default: "text",
              validator: function(t) {
                return t.match(/(text|number|email)/)
              },
            },
            value: { type: String, default: null },
            placeholder: { type: String, default: null },
            label: { type: String, default: null },
            wrapper: {
              type: String,
              default: "div",
              validator: function(t) {
                return t.match(/(div|section)/)
              },
            },
            id: { type: String, default: null },
            width: {
              type: String,
              default: "expand",
              validator: function(t) {
                return t.match(/(auto|expand)/)
              },
            },
            disabled: { type: Boolean, default: !1 },
            state: {
              type: String,
              default: null,
              validator: function(t) {
                return t.match(/(hover|active|focus)/)
              },
            },
          },
          methods: {
            onInput: function(t) {
              this.$emit("change", t)
            },
            onFocus: function(t) {
              this.$emit("focus", t)
            },
          },
        },
        r = (n("9+RL"), n("KHd+")),
        o = n("7dOS"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(e.wrapper, { tag: "component", class: ["input", { "input-expand": "expand" === e.width }] }, [
              e.label ? n("label", { attrs: { for: e.id } }, [e._v(e._s(e.label))]) : e._e(),
              e._v(" "),
              n("input", {
                class: e.state,
                attrs: { id: e.id, disabled: e.disabled, type: e.type, placeholder: e.placeholder },
                domProps: { value: e.value },
                on: {
                  input: function(t) {
                    e.onInput(t.target.value)
                  },
                  focus: function(t) {
                    e.onFocus(t.target.value)
                  },
                },
              }),
            ])
          },
          [],
          !1,
          null,
          "698acc83",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Input.vue")
      e.default = i.exports
    },
    UvfI: function(t, e, n) {},
    Vtdi: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = n("oCYn"),
        r = { name: "app" },
        o = (n("XAuw"), n("KHd+")),
        u = Object(o.a)(
          r,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e("div", { attrs: { id: "app" } }, [e("router-view", { staticClass: "view" })], 1)
          },
          [],
          !1,
          null,
          null,
          null
        )
      u.options.__file = "App.vue"
      var i = u.exports,
        l = n("jE9Z"),
        c = n("lF/O"),
        s = n("4K1/")
      a.a.use(l.a)
      var p = new l.a({
          routes: [
            { path: "/", name: "Index", component: c.default },
            { path: "*", name: "NotFound", component: s.default },
          ],
        }),
        f = n("J9Y1")
      n.n(f).a.load({ google: { families: ["Fira+Sans:300,400,400i,600,700"] } })
      var d = n("ConA"),
        v = n.n(d),
        m = [n("Xl01"), n("JtIp"), n("c1KM")],
        h = []
      m.forEach(function(e) {
        e.keys().forEach(function(t) {
          return h.push(e(t).default)
        })
      })
      var g = {
        install: function(e) {
          h.forEach(function(t) {
            return e.component(t.name, t)
          })
        },
      }
      "undefined" != typeof window && window.Vue && window.Vue.use(g)
      var y = g
      a.a.use(y),
        a.a.use(v.a),
        (a.a.config.productionTip = !1),
        new a.a({ el: "#app", router: p, template: "<App/>", components: { App: i } })
    },
    XAuw: function(t, e, n) {
      "use strict"
      var a = n("0068")
      n.n(a).a
    },
    Xl01: function(t, e, n) {
      var a = {
        "./Button.vue": "/kPn",
        "./Heading.vue": "oIR/",
        "./Icon.vue": "68yd",
        "./Input.vue": "UklV",
        "./Paragraph.vue": "FmFd",
        "./TextStyle.vue": "r6ov",
        "./Textarea.vue": "lK0x",
        "./Wrapper.vue": "9t9y",
      }
      function r(t) {
        var e = o(t)
        return n(e)
      }
      function o(t) {
        var e = a[t]
        if (e + 1) return e
        var n = new Error("Cannot find module '" + t + "'")
        throw ((n.code = "MODULE_NOT_FOUND"), n)
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        ((t.exports = r).id = "Xl01")
    },
    Z0DB: function(t, e, n) {
      "use strict"
      var a = n("eUC7")
      n.n(a).a
    },
    Zohg: function(t, e, n) {},
    bzL3: function(t, e, n) {
      var a = { "./deprecated.svg": "/thn", "./prototype.svg": "2dwG", "./ready.svg": "AAsE", "./review.svg": "eAtJ" }
      function r(t) {
        var e = o(t)
        return n(e)
      }
      function o(t) {
        var e = a[t]
        if (e + 1) return e
        var n = new Error("Cannot find module '" + t + "'")
        throw ((n.code = "MODULE_NOT_FOUND"), n)
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        ((t.exports = r).id = "bzL3")
    },
    c1KM: function(t, e, n) {
      var a = { "./Index.vue": "lF/O", "./NotFound.vue": "4K1/" }
      function r(t) {
        var e = o(t)
        return n(e)
      }
      function o(t) {
        var e = a[t]
        if (e + 1) return e
        var n = new Error("Cannot find module '" + t + "'")
        throw ((n.code = "MODULE_NOT_FOUND"), n)
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        ((t.exports = r).id = "c1KM")
    },
    c5QI: function(t, e, n) {
      "use strict"
      var a = n("KzwA")
      n.n(a).a
    },
    eAtJ: function(t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'
    },
    eUC7: function(t, e, n) {},
    frqv: function(t, e, n) {
      "use strict"
      var a = n("UvfI")
      n.n(a).a
    },
    gkHm: function(t, e) {},
    jGdK: function(t, e, n) {
      "use strict"
      var a = n("Zohg")
      n.n(a).a
    },
    "lF/O": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Index",
          status: "deprecated",
          release: "1.0.0",
          metaInfo: { title: "Vue Design System", htmlAttrs: { lang: "en" } },
          props: { type: { type: String, default: "div" } },
        },
        r = (n("2dpg"), n("KHd+")),
        o = n("9I8L"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              t.type,
              { tag: "component", staticClass: "index" },
              [
                n("NavBar", {
                  attrs: {
                    active: "Index",
                    navItems: [
                      { name: "Template", component: "Index", href: "/#/" },
                      { name: "Documentation", href: "http://localhost:6060/" },
                    ],
                  },
                }),
                t._v(" "),
                n(
                  "Wrapper",
                  [
                    n("Heading", [t._v("Vue Design System")]),
                    t._v(" "),
                    n("Paragraph", [
                      n("a", { attrs: { href: "https://vueds.com" } }, [t._v("Vue Design System")]),
                      t._v(
                        " is an open-source tool for building design systems with Vue.js. It provides you and your team a set of organized tools, patterns & practices. It works as the foundation for your application development."
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            )
          },
          [],
          !1,
          null,
          "20191d76",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Index.vue")
      e.default = i.exports
    },
    lK0x: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Textarea",
          status: "ready",
          release: "1.0.0",
          props: {
            value: { type: String, default: null },
            placeholder: { type: String, default: null },
            label: { type: String, default: null },
            wrapper: {
              type: String,
              default: "div",
              validator: function(t) {
                return t.match(/(div|section)/)
              },
            },
            id: { type: String, default: null },
            width: {
              type: String,
              default: "expand",
              validator: function(t) {
                return t.match(/(auto|expand)/)
              },
            },
            disabled: { type: Boolean, default: !1 },
            state: {
              type: String,
              default: null,
              validator: function(t) {
                return t.match(/(hover|active|focus)/)
              },
            },
          },
          methods: {
            onInput: function(t) {
              this.$emit("change", t)
            },
            onFocus: function(t) {
              this.$emit("focus", t)
            },
          },
        },
        r = (n("jGdK"), n("KHd+")),
        o = n("7DUr"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              e.wrapper,
              { tag: "component", class: ["textarea", { "textarea-expand": "expand" === e.width }] },
              [
                e.label ? n("label", { attrs: { for: e.id } }, [e._v(e._s(e.label))]) : e._e(),
                e._v(" "),
                n("textarea", {
                  directives: [{ name: "model", rawName: "v-model", value: e.value, expression: "value" }],
                  class: e.state,
                  attrs: { id: e.id, disabled: e.disabled, placeholder: e.placeholder },
                  domProps: { value: e.value },
                  on: {
                    input: [
                      function(t) {
                        t.target.composing || (e.value = t.target.value)
                      },
                      function(t) {
                        e.onInput(t.target.value)
                      },
                    ],
                    focus: function(t) {
                      e.onFocus(t.target.value)
                    },
                  },
                }),
              ]
            )
          },
          [],
          !1,
          null,
          "da564664",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Textarea.vue")
      e.default = i.exports
    },
    nZfC: function(t, e, n) {
      "use strict"
      var a = n("oXgq")
      n.n(a).a
    },
    nrZS: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "NavBar",
          status: "ready",
          release: "1.0.0",
          model: { prop: "active" },
          props: {
            type: { type: String, default: "nav" },
            active: { required: !0, type: String },
            navItems: { required: !0, type: Array },
          },
          computed: {
            localActive: {
              get: function() {
                return this.active
              },
              set: function(t) {
                this.$emit("input", t)
              },
            },
          },
        },
        r = (n("Ii/R"), n("KHd+")),
        o = n("Tof5"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              n.type,
              { tag: "component", staticClass: "nav" },
              n._l(n.navItems, function(t, e) {
                return a("a", {
                  key: e,
                  class: { active: n.localActive === t.component },
                  attrs: { href: t.href },
                  domProps: { innerHTML: n._s(t.name) },
                })
              })
            )
          },
          [],
          !1,
          null,
          "0ee66408",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "NavBar.vue")
      e.default = i.exports
    },
    "oIR/": function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "Heading",
          status: "prototype",
          release: "1.0.0",
          props: {
            level: {
              type: String,
              default: "h1",
              validator: function(t) {
                return t.match(/(h1|h2|h3|h4|h5|h6)/)
              },
            },
          },
        },
        r = (n("Z0DB"), n("KHd+")),
        o = n("woMB"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              this.level,
              { tag: "component", staticClass: "heading" },
              [this._t("default")],
              2
            )
          },
          [],
          !1,
          null,
          "614943df",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "Heading.vue")
      e.default = i.exports
    },
    oXgq: function(t, e, n) {},
    r6ov: function(t, e, n) {
      "use strict"
      n.r(e)
      var a = {
          name: "TextStyle",
          status: "ready",
          release: "1.0.0",
          props: {
            type: {
              type: String,
              default: "span",
              validator: function(t) {
                return t.match(/(span|em|i|strong)/)
              },
            },
            variation: {
              type: String,
              default: "default",
              validator: function(t) {
                return t.match(/(default|disabled|strong|positive|negative)/)
              },
            },
          },
        },
        r = (n("nZfC"), n("KHd+")),
        o = n("7kMZ"),
        u = n.n(o),
        i = Object(r.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement
            return (t._self._c || e)(
              t.type,
              { tag: "component", class: ["text-style", t.variation] },
              [t._t("default")],
              2
            )
          },
          [],
          !1,
          null,
          "7610f142",
          null
        )
      "function" == typeof u.a && u()(i), (i.options.__file = "TextStyle.vue")
      e.default = i.exports
    },
    tcIX: function(t, e) {},
    vAeE: function(t, e, n) {},
    "vJ+2": function(t, e, n) {
      "use strict"
      var a = n("JB6r")
      n.n(a).a
    },
    woMB: function(t, e) {},
  },
  [["Vtdi", "runtime", "vendor"]],
])
