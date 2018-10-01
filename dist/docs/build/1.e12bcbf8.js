;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    432: function(o, e, r) {
      "use strict"
      ;(function(o) {
        var n,
          t =
            Object.assign ||
            function(o) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (o[n] = r[n])
              }
              return o
            },
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(o) {
                  return typeof o
                }
              : function(o) {
                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                    ? "symbol"
                    : typeof o
                },
          s = ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(o, e) {
                o.__proto__ = e
              }) ||
            function(o, e) {
              for (var r in e) e.hasOwnProperty(r) && (o[r] = e[r])
            }),
          function(o, e) {
            function __() {
              this.constructor = o
            }
            n(o, e), (o.prototype = null === e ? Object.create(e) : ((__.prototype = e.prototype), new __()))
          })
        Object.defineProperty(e, "__esModule", { value: !0 })
        var a,
          d = r(0),
          c = "undefined" == typeof navigator || !0 === o.PREVENT_CODEMIRROR_RENDER
        c || (a = r(36))
        var l = (function() {
            function Helper() {}
            return (
              (Helper.equals = function(o, e) {
                var r = this,
                  n = Object.keys,
                  t = void 0 === o ? "undefined" : i(o),
                  s = void 0 === e ? "undefined" : i(e)
                return o && e && "object" === t && t === s
                  ? n(o).length === n(e).length &&
                      n(o).every(function(n) {
                        return r.equals(o[n], e[n])
                      })
                  : o === e
              }),
              Helper
            )
          })(),
          p = (function() {
            function Shared(o, e) {
              ;(this.editor = o), (this.props = e)
            }
            return (
              (Shared.prototype.delegateCursor = function(o, e, r) {
                var n = this.editor.getDoc()
                r && this.editor.focus(), e ? n.setCursor(o) : n.setCursor(o, null, { scroll: !1 })
              }),
              (Shared.prototype.delegateScroll = function(o) {
                this.editor.scrollTo(o.x, o.y)
              }),
              (Shared.prototype.delegateSelection = function(o, e) {
                this.editor.setSelections(o), e && this.editor.focus()
              }),
              (Shared.prototype.apply = function(o) {
                o &&
                  o.selection &&
                  o.selection.ranges &&
                  this.delegateSelection(o.selection.ranges, o.selection.focus || !1),
                  o &&
                    o.cursor &&
                    this.delegateCursor(o.cursor, o.autoScroll || !1, this.editor.getOption("autofocus") || !1),
                  o && o.scroll && this.delegateScroll(o.scroll)
              }),
              (Shared.prototype.applyNext = function(o, e, r) {
                o &&
                  o.selection &&
                  o.selection.ranges &&
                  e &&
                  e.selection &&
                  e.selection.ranges &&
                  !l.equals(o.selection.ranges, e.selection.ranges) &&
                  this.delegateSelection(e.selection.ranges, e.selection.focus || !1),
                  o &&
                    o.cursor &&
                    e &&
                    e.cursor &&
                    !l.equals(o.cursor, e.cursor) &&
                    this.delegateCursor(r.cursor || e.cursor, e.autoScroll || !1, e.autoCursor || !1),
                  o && o.scroll && e && e.scroll && !l.equals(o.scroll, e.scroll) && this.delegateScroll(e.scroll)
              }),
              (Shared.prototype.applyUserDefined = function(o, e) {
                e &&
                  e.cursor &&
                  this.delegateCursor(e.cursor, o.autoScroll || !1, this.editor.getOption("autofocus") || !1)
              }),
              (Shared.prototype.wire = function(o) {
                var e = this
                Object.keys(o || {})
                  .filter(function(o) {
                    return /^on/.test(o)
                  })
                  .forEach(function(o) {
                    switch (o) {
                      case "onBlur":
                        e.editor.on("blur", function(o, r) {
                          e.props.onBlur(e.editor, r)
                        })
                        break
                      case "onContextMenu":
                        e.editor.on("contextmenu", function(o, r) {
                          e.props.onContextMenu(e.editor, r)
                        })
                        break
                      case "onCopy":
                        e.editor.on("copy", function(o, r) {
                          e.props.onCopy(e.editor, r)
                        })
                        break
                      case "onCursor":
                        e.editor.on("cursorActivity", function(o) {
                          e.props.onCursor(e.editor, e.editor.getCursor())
                        })
                        break
                      case "onCursorActivity":
                        e.editor.on("cursorActivity", function(o) {
                          e.props.onCursorActivity(e.editor)
                        })
                        break
                      case "onCut":
                        e.editor.on("cut", function(o, r) {
                          e.props.onCut(e.editor, r)
                        })
                        break
                      case "onDblClick":
                        e.editor.on("dblclick", function(o, r) {
                          e.props.onDblClick(e.editor, r)
                        })
                        break
                      case "onDragEnter":
                        e.editor.on("dragenter", function(o, r) {
                          e.props.onDragEnter(e.editor, r)
                        })
                        break
                      case "onDragLeave":
                        e.editor.on("dragleave", function(o, r) {
                          e.props.onDragLeave(e.editor, r)
                        })
                        break
                      case "onDragOver":
                        e.editor.on("dragover", function(o, r) {
                          e.props.onDragOver(e.editor, r)
                        })
                        break
                      case "onDragStart":
                        e.editor.on("dragstart", function(o, r) {
                          e.props.onDragStart(e.editor, r)
                        })
                        break
                      case "onDrop":
                        e.editor.on("drop", function(o, r) {
                          e.props.onDrop(e.editor, r)
                        })
                        break
                      case "onFocus":
                        e.editor.on("focus", function(o, r) {
                          e.props.onFocus(e.editor, r)
                        })
                        break
                      case "onGutterClick":
                        e.editor.on("gutterClick", function(o, r, n, t) {
                          e.props.onGutterClick(e.editor, r, n, t)
                        })
                        break
                      case "onKeyDown":
                        e.editor.on("keydown", function(o, r) {
                          e.props.onKeyDown(e.editor, r)
                        })
                        break
                      case "onKeyPress":
                        e.editor.on("keypress", function(o, r) {
                          e.props.onKeyPress(e.editor, r)
                        })
                        break
                      case "onKeyUp":
                        e.editor.on("keyup", function(o, r) {
                          e.props.onKeyUp(e.editor, r)
                        })
                        break
                      case "onMouseDown":
                        e.editor.on("mousedown", function(o, r) {
                          e.props.onMouseDown(e.editor, r)
                        })
                        break
                      case "onPaste":
                        e.editor.on("paste", function(o, r) {
                          e.props.onPaste(e.editor, r)
                        })
                        break
                      case "onRenderLine":
                        e.editor.on("renderLine", function(o, r, n) {
                          e.props.onRenderLine(e.editor, r, n)
                        })
                        break
                      case "onScroll":
                        e.editor.on("scroll", function(o) {
                          e.props.onScroll(e.editor, e.editor.getScrollInfo())
                        })
                        break
                      case "onSelection":
                        e.editor.on("beforeSelectionChange", function(o, r) {
                          e.props.onSelection(e.editor, r)
                        })
                        break
                      case "onTouchStart":
                        e.editor.on("touchstart", function(o, r) {
                          e.props.onTouchStart(e.editor, r)
                        })
                        break
                      case "onUpdate":
                        e.editor.on("update", function(o) {
                          e.props.onUpdate(e.editor)
                        })
                        break
                      case "onViewportChange":
                        e.editor.on("viewportChange", function(o, r, n) {
                          e.props.onViewportChange(e.editor, r, n)
                        })
                    }
                  })
              }),
              Shared
            )
          })(),
          u = (function(o) {
            function Controlled(e) {
              var r = o.call(this, e) || this
              return c
                ? r
                : ((r.applied = !1),
                  (r.appliedNext = !1),
                  (r.appliedUserDefined = !1),
                  (r.deferred = null),
                  (r.emulating = !1),
                  (r.hydrated = !1),
                  (r.initCb = function() {
                    r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor)
                  }),
                  (r.mounted = !1),
                  r)
            }
            return (
              s(Controlled, o),
              (Controlled.prototype.hydrate = function(o) {
                var e = this,
                  r = t({}, a.defaults, this.editor.options, o.options || {})
                Object.keys(r).some(function(o) {
                  return e.editor.getOption(o) !== r[o]
                }) &&
                  Object.keys(r).forEach(function(n) {
                    o.options.hasOwnProperty(n) &&
                      e.editor.getOption(n) !== r[n] &&
                      (e.editor.setOption(n, r[n]), e.mirror.setOption(n, r[n]))
                  }),
                  this.hydrated ||
                    (this.mounted && this.deferred ? this.resolveChange() : this.initChange(o.value || "")),
                  (this.hydrated = !0)
              }),
              (Controlled.prototype.initChange = function(o) {
                this.emulating = !0
                var e = this.editor.lastLine(),
                  r = this.editor.getLine(this.editor.lastLine()).length
                this.editor.replaceRange(o || "", { line: 0, ch: 0 }, { line: e, ch: r }),
                  this.mirror.setValue(o),
                  this.editor.clearHistory(),
                  this.mirror.clearHistory(),
                  (this.emulating = !1)
              }),
              (Controlled.prototype.resolveChange = function() {
                ;(this.emulating = !0),
                  "undo" === this.deferred.origin
                    ? this.editor.undo()
                    : "redo" === this.deferred.origin
                      ? this.editor.redo()
                      : this.editor.replaceRange(
                          this.deferred.text,
                          this.deferred.from,
                          this.deferred.to,
                          this.deferred.origin
                        ),
                  (this.emulating = !1),
                  (this.deferred = null)
              }),
              (Controlled.prototype.mirrorChange = function(o) {
                return (
                  "undo" === o.origin
                    ? (this.editor.setHistory(this.mirror.getHistory()), this.mirror.undo())
                    : "redo" === o.origin
                      ? (this.editor.setHistory(this.mirror.getHistory()), this.mirror.redo())
                      : this.mirror.replaceRange(o.text, o.from, o.to, o.origin),
                  this.mirror.getValue()
                )
              }),
              (Controlled.prototype.componentWillMount = function() {
                c || (this.props.editorWillMount && this.props.editorWillMount())
              }),
              (Controlled.prototype.componentDidMount = function() {
                var o = this
                c ||
                  (this.props.defineMode &&
                    this.props.defineMode.name &&
                    this.props.defineMode.fn &&
                    a.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                  (this.editor = a(this.ref)),
                  (this.shared = new p(this.editor, this.props)),
                  (this.mirror = a(function() {})),
                  this.editor.on("electricInput", function() {
                    o.mirror.setHistory(o.editor.getHistory())
                  }),
                  this.editor.on("cursorActivity", function() {
                    o.mirror.setCursor(o.editor.getCursor())
                  }),
                  this.editor.on("beforeChange", function(e, r) {
                    if (!o.emulating) {
                      r.cancel(), (o.deferred = r)
                      var n = o.mirrorChange(o.deferred)
                      o.props.onBeforeChange && o.props.onBeforeChange(o.editor, o.deferred, n)
                    }
                  }),
                  this.editor.on("change", function(e, r) {
                    o.mounted && o.props.onChange && o.props.onChange(o.editor, r, o.editor.getValue())
                  }),
                  this.hydrate(this.props),
                  this.shared.apply(this.props),
                  (this.applied = !0),
                  (this.mounted = !0),
                  this.shared.wire(this.props),
                  this.editor.getOption("autofocus") && this.editor.focus(),
                  this.props.editorDidMount &&
                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
              }),
              (Controlled.prototype.componentWillReceiveProps = function(o) {
                if (!c) {
                  var e = { cursor: null }
                  o.value !== this.props.value && (this.hydrated = !1),
                    this.props.autoCursor || void 0 === this.props.autoCursor || (e.cursor = this.editor.getCursor()),
                    this.hydrate(o),
                    this.appliedNext || (this.shared.applyNext(this.props, o, e), (this.appliedNext = !0)),
                    this.shared.applyUserDefined(this.props, e),
                    (this.appliedUserDefined = !0)
                }
              }),
              (Controlled.prototype.componentWillUnmount = function() {
                c || (this.props.editorWillUnmount && this.props.editorWillUnmount(a))
              }),
              (Controlled.prototype.shouldComponentUpdate = function(o, e) {
                return !c
              }),
              (Controlled.prototype.render = function() {
                var o = this
                if (c) return null
                var e = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2"
                return d.createElement("div", {
                  className: e,
                  ref: function ref(e) {
                    return (o.ref = e)
                  },
                })
              }),
              Controlled
            )
          })(d.Component)
        e.Controlled = u
        var h = (function(o) {
          function UnControlled(e) {
            var r = o.call(this, e) || this
            return c
              ? r
              : ((r.applied = !1),
                (r.appliedUserDefined = !1),
                (r.continueChange = !1),
                (r.detached = !1),
                (r.hydrated = !1),
                (r.initCb = function() {
                  r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor)
                }),
                (r.mounted = !1),
                (r.onBeforeChangeCb = function() {
                  r.continueChange = !0
                }),
                r)
          }
          return (
            s(UnControlled, o),
            (UnControlled.prototype.hydrate = function(o) {
              var e = this,
                r = t({}, a.defaults, this.editor.options, o.options || {})
              if (
                (Object.keys(r).some(function(o) {
                  return e.editor.getOption(o) !== r[o]
                }) &&
                  Object.keys(r).forEach(function(n) {
                    o.options.hasOwnProperty(n) && e.editor.getOption(n) !== r[n] && e.editor.setOption(n, r[n])
                  }),
                !this.hydrated)
              ) {
                var n = this.editor.lastLine(),
                  i = this.editor.getLine(this.editor.lastLine()).length
                this.editor.replaceRange(o.value || "", { line: 0, ch: 0 }, { line: n, ch: i })
              }
              this.hydrated = !0
            }),
            (UnControlled.prototype.componentWillMount = function() {
              c || (this.props.editorWillMount && this.props.editorWillMount())
            }),
            (UnControlled.prototype.componentDidMount = function() {
              var o = this
              c ||
                ((this.detached = !0 === this.props.detach),
                this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  a.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                (this.editor = a(this.ref)),
                (this.shared = new p(this.editor, this.props)),
                this.editor.on("beforeChange", function(e, r) {
                  o.props.onBeforeChange && o.props.onBeforeChange(o.editor, r, o.editor.getValue(), o.onBeforeChangeCb)
                }),
                this.editor.on("change", function(e, r) {
                  o.mounted &&
                    o.props.onChange &&
                    (o.props.onBeforeChange
                      ? o.continueChange && o.props.onChange(o.editor, r, o.editor.getValue())
                      : o.props.onChange(o.editor, r, o.editor.getValue()))
                }),
                this.hydrate(this.props),
                this.shared.apply(this.props),
                (this.applied = !0),
                (this.mounted = !0),
                this.shared.wire(this.props),
                this.editor.clearHistory(),
                this.props.editorDidMount &&
                  this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
            }),
            (UnControlled.prototype.componentWillReceiveProps = function(o) {
              if (
                (this.detached &&
                  !1 === o.detach &&
                  ((this.detached = !1), this.props.editorDidAttach && this.props.editorDidAttach(this.editor)),
                this.detached ||
                  !0 !== o.detach ||
                  ((this.detached = !0), this.props.editorDidDetach && this.props.editorDidDetach(this.editor)),
                !c && !this.detached)
              ) {
                var e = { cursor: null }
                o.value !== this.props.value &&
                  ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)),
                  this.props.autoCursor || void 0 === this.props.autoCursor || (e.cursor = this.editor.getCursor()),
                  this.hydrate(o),
                  this.applied || (this.shared.apply(this.props), (this.applied = !0)),
                  this.appliedUserDefined ||
                    (this.shared.applyUserDefined(this.props, e), (this.appliedUserDefined = !0))
              }
            }),
            (UnControlled.prototype.componentWillUnmount = function() {
              c || (this.props.editorWillUnmount && this.props.editorWillUnmount(a))
            }),
            (UnControlled.prototype.shouldComponentUpdate = function(o, e) {
              var r = !0
              return c && (r = !1), this.detached && (r = !1), r
            }),
            (UnControlled.prototype.render = function() {
              var o = this
              if (c) return null
              var e = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2"
              return d.createElement("div", {
                className: e,
                ref: function ref(e) {
                  return (o.ref = e)
                },
              })
            }),
            UnControlled
          )
        })(d.Component)
        e.UnControlled = h
      }.call(this, r(20)))
    },
    433: function(o, e, r) {
      var n = r(434)
      "string" == typeof n && (n = [[o.i, n, ""]])
      var t = { hmr: !0, transform: void 0, insertInto: void 0 }
      r(171)(n, t)
      n.locals && (o.exports = n.locals)
    },
    434: function(o, e, r) {
      ;(o.exports = r(170)(!1)).push([
        o.i,
        "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
        "",
      ])
    },
    435: function(o, e, r) {
      var n = r(436)
      "string" == typeof n && (n = [[o.i, n, ""]])
      var t = { hmr: !0, transform: void 0, insertInto: void 0 }
      r(171)(n, t)
      n.locals && (o.exports = n.locals)
    },
    436: function(o, e, r) {
      ;(o.exports = r(170)(!1)).push([
        o.i,
        "/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n",
        "",
      ])
    },
    437: function(o, e, r) {
      "use strict"
      r.r(e),
        r.d(e, "Editor", function() {
          return f
        })
      var n = r(0),
        t = r.n(n),
        i = r(1),
        s = r.n(i),
        a = r(2),
        d = r(127),
        c = r.n(d),
        l = r(432),
        p = (r(172),
        Object.assign ||
          function(o) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (o[n] = r[n])
            }
            return o
          }),
        u = (function() {
          function defineProperties(o, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(o, n.key, n)
            }
          }
          return function(o, e, r) {
            return e && defineProperties(o.prototype, e), r && defineProperties(o, r), o
          }
        })()
      r(433), r(435)
      var h = 10,
        f = (function(o) {
          function Editor() {
            !(function _classCallCheck(o, e) {
              if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, Editor)
            var o = (function _possibleConstructorReturn(o, e) {
              if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !e || ("object" != typeof e && "function" != typeof e) ? o : e
            })(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this))
            return (o.handleChange = c()(o.handleChange.bind(o), h)), o
          }
          return (
            (function _inherits(o, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e)
              ;(o.prototype = Object.create(e && e.prototype, {
                constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
              })),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(o, e) : (o.__proto__ = e))
            })(Editor, n["Component"]),
            u(Editor, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(o) {
                  return !(!this.getEditorConfig(o).readOnly || o.code === this.props.code)
                },
              },
              {
                key: "getEditorConfig",
                value: function getEditorConfig(o) {
                  return p({}, this.context.config.editorConfig, o.editorConfig)
                },
              },
              {
                key: "handleChange",
                value: function handleChange(o, e, r) {
                  var n = this.props.onChange
                  n && n(r)
                },
              },
              {
                key: "render",
                value: function render() {
                  var o = this.props,
                    e = o.code,
                    r = o.classes
                  return t.a.createElement(l.UnControlled, {
                    className: r.root,
                    value: e,
                    onChange: this.handleChange,
                    options: this.getEditorConfig(this.props),
                  })
                },
              },
            ]),
            Editor
          )
        })()
      ;(f.propTypes = {
        code: s.a.string.isRequired,
        onChange: s.a.func,
        editorConfig: s.a.object,
        classes: s.a.object.isRequired,
      }),
        (f.contextTypes = { config: s.a.object.isRequired }),
        (e.default = Object(a.a)(function styles(o) {
          var e = o.fontFamily,
            r = o.space,
            n = o.fontSize
          return {
            root: {
              "& .CodeMirror": {
                isolate: !1,
                fontFamily: e.monospace,
                height: "auto",
                padding: [[r[1], r[2]]],
                fontSize: n.small,
              },
              "& .CodeMirror pre": { isolate: !1, padding: 0 },
              "& .CodeMirror-scroll": { isolate: !1, height: "auto", overflowY: "hidden", overflowX: "auto" },
              "& .cm-error": { isolate: !1, background: "none" },
            },
          }
        })(f))
    },
  },
])
