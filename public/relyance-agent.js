/*! For license information please see relyance-agent.js.LICENSE.txt */
var relyance_consent_management_agent;
( () => {
    var e = {
        27: e => {
            "use strict";
            e.exports = function(e) {
                var t = e[1]
                  , n = e[3];
                if (!n)
                    return t;
                if ("function" == typeof btoa) {
                    var o = btoa(unescape(encodeURIComponent(JSON.stringify(n))))
                      , r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o)
                      , i = "/*# ".concat(r, " */");
                    return [t].concat([i]).join("\n")
                }
                return [t].join("\n")
            }
        }
        ,
        79: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(27)
              , r = n.n(o)
              , i = n(281)
              , a = n.n(i)()(r());
            a.push([e.id, "/* --- Close button --- */\n.rly-button,\n.rly-button-no-hover {\n    transition: opacity 0.2s ease, box-shadow 0.15s ease; /* Subtle transitions */\n    min-height: 35px;\n    height: auto !important\n}\n\n/* In the interface builder (preview) */\n.rly-button:hover {\n    opacity: 0.9;\n    background: rgba(128, 128, 128, 0.15) !important;\n    color: white !important;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */\n}\n\n.rly-button:active,\n.rly-button-no-hover:active {\n    opacity: 0.8;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on click */\n}\n\n/* In the agent */\n.rly-button-no-hover:hover {\n    opacity: 0.9;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */\n}\n\n/* --- Banner external div --- */\n.rly-banner {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n    display: flex;\n    justify-content: space-between;\n    --slider-color-fg: black;\n    --slider-color-bg: white;\n    align-items: center;\n    gap: 20px; /* Adds space between the content and actions */\n    flex-wrap: wrap; /* Allows items to wrap onto the next line */\n}\n\n.rly-banner-content {\n    flex: 1 1 500px; /* Allows content to grow and shrink, with a base width */\n}\n\n.rly-banner-actions {\n    flex: 1 1 200px; /* Allows button container to grow and shrink */\n    display: flex;\n    justify-content: flex-end;\n}\n\n/* --- Banner buttons bar  (PreferenceCenter, AcceptAll, RejectAll) --- */\n.rly-button-bar {\n    display: flex;\n    gap: 12px;\n    justify-content: flex-end;\n}\n\n/* --- Editable field container styles --- */\n.rly-editable-field-container,\n.rly-editable-field-container-button,\n.rly-editable-field-container-no-hover,\n.rly-editable-field-container-button-no-hover {\n    box-sizing: border-box;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    width: fit-content;\n    position: relative;\n    transition: background 0.2s ease-in-out;\n    margin-bottom: 20px;\n}\n\n/* Remove margin-bottom for description container */\n.rly-editable-field-container.rly-editable-description-container,\n.rly-editable-field-container-no-hover.rly-editable-description-container {\n    margin-bottom: 0;\n}\n\n/* --- Edit Container/Button Hover --- */\n.rly-editable-field-container:hover .rly-edit-button,\n.rly-editable-field-container-button:hover .rly-edit-button {\n    opacity: 1 !important;\n}\n\n.rly-editable-field-container:hover {\n    background: rgba(128, 128, 128, 0.15) !important;\n}\n\n.rly-editable-field-container:hover .rly-button,\n.rly-editable-field-container-button:hover .rly-button,\n.rly-editable-field-container:active .rly-button,\n.rly-editable-field-container-button:active .rly-button {\n    opacity: 0.9;\n    background: rgba(128, 128, 128, 0.15) !important;\n    color: white !important;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n\n/*  Edit Container/Button Focus Styles (preview) */\n.rly-editable-field-container:focus-within {\n    background: rgba(128, 128, 128, 0.15) !important;\n    border: 2px solid #2196f3 !important;\n    padding: 10px;\n}\n\n.rly-editable-field-container-button:focus-within {\n    background: #80808026 !important;\n    border: 2px solid #2196f3 !important;\n}\n\n.rly-editable-field-container:focus-within .rly-button,\n.rly-editable-field-container-button:focus-within .rly-button {\n    background: rgba(128, 128, 128, 0.3) !important;\n    color: white !important;\n}\n\n.rly-editable-field-container:focus-within .rly-edit-button,\n.rly-editable-field-container-button:focus-within .rly-edit-button {\n    opacity: 0 !important;\n}\n\n.rly-editable-field-container,\n.rly-editable-field-container-button div[contenteditable='true']:focus {\n    outline: none !important;\n}\n\n/* --- Design mode states --- */\n/*  In the interface builder (preview) */\n.rly-editable-field-container.design-editable {\n    background: rgba(107, 114, 128, 0.2);\n    cursor: text;\n}\n/*  In the banner */\n.rly-editable-field-container.design-non-editable {\n    background: transparent;\n    cursor: pointer;\n}\n\n/* --- Edit button (pencil icon) --- */\n.rly-edit-button {\n    position: absolute;\n    top: 50%;\n    right: -20px;\n    transform: translateY(-50%);\n    background: transparent !important;\n    border: none;\n    border-radius: 4px;\n    padding: 4px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.rly-edit-button svg {\n    color: var(--slider-color-fg) !important;\n    fill: var(--slider-color-fg) !important;\n}\n\n/* --- Title field --- */\n.rly-title-field {\n    font-size: 20px;\n    font-weight: 600;\n    outline: none;    \n}\n\n/* --- Description field --- */\n.rly-description-field {\n    font-size: 12px;\n    font-weight: 400;\n    outline: none;\n}\n\n/* --- Responsive Styles for Mobile --- */\n@media (max-width: 768px) {\n    .rly-banner {\n        gap: 3rem;\n    }\n\n    .rly-banner-actions{\n        width: 100%;\n    }\n\n    .rly-button-bar {\n        justify-content: flex-end;\n        flex-wrap: wrap; \n    }\n}", "", {
                version: 3,
                sources: ["webpack://./src/common-consent/components/consentBanner/styles.css"],
                names: [],
                mappings: "AAAA,yBAAyB;AACzB;;IAEI,oDAAoD,EAAE,uBAAuB;IAC7E,gBAAgB;IAChB;AACJ;;AAEA,uCAAuC;AACvC;IACI,YAAY;IACZ,gDAAgD;IAChD,uBAAuB;IACvB,yCAAyC,EAAE,2BAA2B;AAC1E;;AAEA;;IAEI,YAAY;IACZ,wCAAwC,EAAE,sCAAsC;AACpF;;AAEA,iBAAiB;AACjB;IACI,YAAY;IACZ,yCAAyC,EAAE,2BAA2B;AAC1E;;AAEA,gCAAgC;AAChC;IACI,yCAAyC;IACzC,aAAa;IACb,8BAA8B;IAC9B,wBAAwB;IACxB,wBAAwB;IACxB,mBAAmB;IACnB,SAAS,EAAE,+CAA+C;IAC1D,eAAe,EAAE,4CAA4C;AACjE;;AAEA;IACI,eAAe,EAAE,yDAAyD;AAC9E;;AAEA;IACI,eAAe,EAAE,+CAA+C;IAChE,aAAa;IACb,yBAAyB;AAC7B;;AAEA,yEAAyE;AACzE;IACI,aAAa;IACb,SAAS;IACT,yBAAyB;AAC7B;;AAEA,4CAA4C;AAC5C;;;;IAII,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA,mDAAmD;AACnD;;IAEI,gBAAgB;AACpB;;AAEA,wCAAwC;AACxC;;IAEI,qBAAqB;AACzB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;;;;IAII,YAAY;IACZ,gDAAgD;IAChD,uBAAuB;IACvB,yCAAyC;AAC7C;;AAEA,kDAAkD;AAClD;IACI,gDAAgD;IAChD,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;;IAEI,+CAA+C;IAC/C,uBAAuB;AAC3B;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA,+BAA+B;AAC/B,wCAAwC;AACxC;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA,mBAAmB;AACnB;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA,sCAAsC;AACtC;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,2BAA2B;IAC3B,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,oCAAoC;IACpC,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;IACxC,uCAAuC;AAC3C;;AAEA,wBAAwB;AACxB;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;;AAEA,yCAAyC;AACzC;IACI;QACI,SAAS;IACb;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,yBAAyB;QACzB,eAAe;IACnB;AACJ",
                sourcesContent: ["/* --- Close button --- */\n.rly-button,\n.rly-button-no-hover {\n    transition: opacity 0.2s ease, box-shadow 0.15s ease; /* Subtle transitions */\n    min-height: 35px;\n    height: auto !important\n}\n\n/* In the interface builder (preview) */\n.rly-button:hover {\n    opacity: 0.9;\n    background: rgba(128, 128, 128, 0.15) !important;\n    color: white !important;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */\n}\n\n.rly-button:active,\n.rly-button-no-hover:active {\n    opacity: 0.8;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on click */\n}\n\n/* In the agent */\n.rly-button-no-hover:hover {\n    opacity: 0.9;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */\n}\n\n/* --- Banner external div --- */\n.rly-banner {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n    display: flex;\n    justify-content: space-between;\n    --slider-color-fg: black;\n    --slider-color-bg: white;\n    align-items: center;\n    gap: 20px; /* Adds space between the content and actions */\n    flex-wrap: wrap; /* Allows items to wrap onto the next line */\n}\n\n.rly-banner-content {\n    flex: 1 1 500px; /* Allows content to grow and shrink, with a base width */\n}\n\n.rly-banner-actions {\n    flex: 1 1 200px; /* Allows button container to grow and shrink */\n    display: flex;\n    justify-content: flex-end;\n}\n\n/* --- Banner buttons bar  (PreferenceCenter, AcceptAll, RejectAll) --- */\n.rly-button-bar {\n    display: flex;\n    gap: 12px;\n    justify-content: flex-end;\n}\n\n/* --- Editable field container styles --- */\n.rly-editable-field-container,\n.rly-editable-field-container-button,\n.rly-editable-field-container-no-hover,\n.rly-editable-field-container-button-no-hover {\n    box-sizing: border-box;\n    border: 2px solid transparent;\n    border-radius: 6px;\n    width: fit-content;\n    position: relative;\n    transition: background 0.2s ease-in-out;\n    margin-bottom: 20px;\n}\n\n/* Remove margin-bottom for description container */\n.rly-editable-field-container.rly-editable-description-container,\n.rly-editable-field-container-no-hover.rly-editable-description-container {\n    margin-bottom: 0;\n}\n\n/* --- Edit Container/Button Hover --- */\n.rly-editable-field-container:hover .rly-edit-button,\n.rly-editable-field-container-button:hover .rly-edit-button {\n    opacity: 1 !important;\n}\n\n.rly-editable-field-container:hover {\n    background: rgba(128, 128, 128, 0.15) !important;\n}\n\n.rly-editable-field-container:hover .rly-button,\n.rly-editable-field-container-button:hover .rly-button,\n.rly-editable-field-container:active .rly-button,\n.rly-editable-field-container-button:active .rly-button {\n    opacity: 0.9;\n    background: rgba(128, 128, 128, 0.15) !important;\n    color: white !important;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n\n/*  Edit Container/Button Focus Styles (preview) */\n.rly-editable-field-container:focus-within {\n    background: rgba(128, 128, 128, 0.15) !important;\n    border: 2px solid #2196f3 !important;\n    padding: 10px;\n}\n\n.rly-editable-field-container-button:focus-within {\n    background: #80808026 !important;\n    border: 2px solid #2196f3 !important;\n}\n\n.rly-editable-field-container:focus-within .rly-button,\n.rly-editable-field-container-button:focus-within .rly-button {\n    background: rgba(128, 128, 128, 0.3) !important;\n    color: white !important;\n}\n\n.rly-editable-field-container:focus-within .rly-edit-button,\n.rly-editable-field-container-button:focus-within .rly-edit-button {\n    opacity: 0 !important;\n}\n\n.rly-editable-field-container,\n.rly-editable-field-container-button div[contenteditable='true']:focus {\n    outline: none !important;\n}\n\n/* --- Design mode states --- */\n/*  In the interface builder (preview) */\n.rly-editable-field-container.design-editable {\n    background: rgba(107, 114, 128, 0.2);\n    cursor: text;\n}\n/*  In the banner */\n.rly-editable-field-container.design-non-editable {\n    background: transparent;\n    cursor: pointer;\n}\n\n/* --- Edit button (pencil icon) --- */\n.rly-edit-button {\n    position: absolute;\n    top: 50%;\n    right: -20px;\n    transform: translateY(-50%);\n    background: transparent !important;\n    border: none;\n    border-radius: 4px;\n    padding: 4px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.rly-edit-button svg {\n    color: var(--slider-color-fg) !important;\n    fill: var(--slider-color-fg) !important;\n}\n\n/* --- Title field --- */\n.rly-title-field {\n    font-size: 20px;\n    font-weight: 600;\n    outline: none;    \n}\n\n/* --- Description field --- */\n.rly-description-field {\n    font-size: 12px;\n    font-weight: 400;\n    outline: none;\n}\n\n/* --- Responsive Styles for Mobile --- */\n@media (max-width: 768px) {\n    .rly-banner {\n        gap: 3rem;\n    }\n\n    .rly-banner-actions{\n        width: 100%;\n    }\n\n    .rly-button-bar {\n        justify-content: flex-end;\n        flex-wrap: wrap; \n    }\n}"],
                sourceRoot: ""
            }]);
            const c = a
        }
        ,
        97: e => {
            "use strict";
            e.exports = function(e) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var o = "";
                            n.supports && (o += "@supports (".concat(n.supports, ") {")),
                            n.media && (o += "@media ".concat(n.media, " {"));
                            var r = void 0 !== n.layer;
                            r && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            o += n.css,
                            r && (o += "}"),
                            n.media && (o += "}"),
                            n.supports && (o += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            t.styleTagTransform(o, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
        ,
        145: e => {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
        ,
        172: e => {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        281: e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , o = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        o && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, o, r, i) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (o)
                        for (var c = 0; c < this.length; c++) {
                            var s = this[c][0];
                            null != s && (a[s] = !0)
                        }
                    for (var l = 0; l < e.length; l++) {
                        var u = [].concat(e[l]);
                        o && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                        u[5] = i),
                        n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                        u[2] = n) : u[2] = n),
                        r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                        u[4] = r) : u[4] = "".concat(r)),
                        t.push(u))
                    }
                }
                ,
                t
            }
        }
        ,
        368: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        627: e => {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var o = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!o)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n)
            }
        }
        ,
        733: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(27)
              , r = n.n(o)
              , i = n(281)
              , a = n.n(i)()(r());
            a.push([e.id, "/* --- Preference center main container --- */\n.rly-preference-center {\n    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: calc(100vh - 2rem);\n    z-index: 10000;\n    padding: 50px;\n    --slider-color-fg: black;\n    --slider-color-bg: white;\n    --purposes-scrollbar-color: unset;\n}\n\n/* --- Header wrapper --- */\n.rly-preference-center__header-wrapper {\n    flex-direction: column;\n    display: flex;\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n}\n\n/* --- Footer and actions --- */\n.rly-preference-center__footer {\n    display: flex;\n    width: 100%;\n    flex-shrink: 1;\n    background: inherit;\n    gap: 0.75rem;\n    margin-top: 1rem;\n    align-items: flex-end;\n    justify-content: space-between;\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n}\n\n.rly-preference-center__footer > div > svg {\n    filter: drop-shadow(0px 0px 4px var(--slider-color-fg));\n}\n\n.rly-preference-center__actions {\n    display: flex;\n    gap: 0.75rem;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n/* --- Editable field focus styles --- */\n.rly-editable-field-container div[contenteditable='true']:focus,\n.rly-editable-field-container-button div[contenteditable='true']:focus {\n    outline: none !important;\n}\n\n/* --- Purposes container and scrolling --- */\n.rly-purposes-container {\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--purposes-scrollbar-color);\n    scrollbar-gutter: stable;\n    padding-bottom: 8rem;\n    max-height: calc(100vh - 12rem);\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n/* --- Purpose border divider --- */\n.rly-purpose-border {\n    width: 100%;\n    height: 2px;\n    margin: 0.75rem 0px 0.75rem 0px;\n}\n\n/* --- Purpose card layout --- */\n.rly-purpose-card {\n    width: 100%;\n    display: flex;\n    padding-right: 0.25rem;\n}\n\n.rly-purpose-title-and-description-container {\n    flex-basis: 70%;\n    padding-top: 0.25rem;\n}\n\n.rly-purpose-toggle-container {\n    flex-basis: 30%;\n    display: flex;\n    align-items: center;\n    justify-content: right;\n    padding-right: 0.25rem;\n}\n\n/* --- Purpose text styling --- */\n.rly-purpose-title {\n    font-size: 0.875rem;\n    font-weight: 700;\n    width: 100%;\n}\n\n.rly-purpose-description {\n    font-size: 0.75rem;\n    font-weight: 400;\n    width: 100%;\n}\n\n.rly-purpose-switch-notice-only {\n    font-size: 12px;\n    font-weight: 400;\n}\n\n/* --- Toggle switch component --- */\n.rly-toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n}\n\n.rly-toggle-switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* --- Slider styling --- */\n.rly-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--slider-color-bg);\n    border-radius: 17px;\n    border: 1px solid var(--slider-color-fg);\n}\n\n.rly-slider:before {\n    position: absolute;\n    content: '';\n    height: 12px;\n    width: 12px;\n    left: 2px;\n    bottom: 50%;\n    background-color: var(--slider-color-fg);\n    transform: translateY(50%);\n    border-radius: 50%;\n}\n\n/* --- Slider transitions --- */\n/* Apply transitions only AFTER the component has loaded */\n.rly-transitions-enabled .rly-slider,\n.rly-transitions-enabled .rly-slider:before {\n    transition: all 0.4s ease;\n}\n\n/* --- Slider states --- */\ninput:checked + .rly-slider {\n    background-color: var(--slider-color-fg);\n}\n\ninput:focus + .rly-slider {\n    box-shadow: 0 0 1px var(--slider-color-fg);\n}\n\ninput:checked + .rly-slider:before {\n    transform: translate(13px, 50%);\n    background-color: var(--slider-color-bg);\n}\n\n/* ------------------ Media Queries ------------------ */\n\n@media screen and (max-width: 375px) and (orientation: portrait) {\n    .rly-preference-center__actions {\n        transform: scale(0.9);\n        transform-origin: bottom right;\n        white-space: nowrap;\n    }\n}\n\n@media screen and (max-width: 767px) and (orientation: portrait) {\n    .rly-preference-center__footer svg {\n        width: 5rem;\n    }\n}\n\n@media screen and (min-width: 600px) and (orientation: landscape) {\n    .rly-purposes-container {\n        padding-bottom: 4.5rem;\n    }\n}\n\n@media screen and (min-width: 767px) and (orientation: portrait),\n    screen and (min-width: 1024px) and (orientation: landscape),\n    screen and (min-width: 996px) {\n    .rly-preference-center {\n        max-width: 38rem;\n        width: 100%;\n        height: auto;\n        max-height: max(56vh, 38rem);\n    }\n}\n", "", {
                version: 3,
                sources: ["webpack://./src/common-consent/components/preferenceCenter/preferenceCenterStyles.css"],
                names: [],
                mappings: "AAAA,6CAA6C;AAC7C;IACI,gDAAgD;IAChD,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA,2BAA2B;AAC3B;IACI,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,MAAM;AACV;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,qBAAqB;IACrB,8BAA8B;IAC9B,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,uDAAuD;AAC3D;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;AAC7B;;AAEA,wCAAwC;AACxC;;IAEI,wBAAwB;AAC5B;;AAEA,6CAA6C;AAC7C;IACI,gBAAgB;IAChB,qBAAqB;IACrB,gDAAgD;IAChD,wBAAwB;IACxB,oBAAoB;IACpB,+BAA+B;IAC/B,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA,mCAAmC;AACnC;IACI,WAAW;IACX,WAAW;IACX,+BAA+B;AACnC;;AAEA,gCAAgC;AAChC;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA,iCAAiC;AACjC;IACI,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,oCAAoC;AACpC;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA,2BAA2B;AAC3B;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,wCAAwC;IACxC,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA,+BAA+B;AAC/B,0DAA0D;AAC1D;;IAEI,yBAAyB;AAC7B;;AAEA,0BAA0B;AAC1B;IACI,wCAAwC;AAC5C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,+BAA+B;IAC/B,wCAAwC;AAC5C;;AAEA,wDAAwD;;AAExD;IACI;QACI,qBAAqB;QACrB,8BAA8B;QAC9B,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA;;;IAGI;QACI,gBAAgB;QAChB,WAAW;QACX,YAAY;QACZ,4BAA4B;IAChC;AACJ",
                sourcesContent: ["/* --- Preference center main container --- */\n.rly-preference-center {\n    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: calc(100vh - 2rem);\n    z-index: 10000;\n    padding: 50px;\n    --slider-color-fg: black;\n    --slider-color-bg: white;\n    --purposes-scrollbar-color: unset;\n}\n\n/* --- Header wrapper --- */\n.rly-preference-center__header-wrapper {\n    flex-direction: column;\n    display: flex;\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n}\n\n/* --- Footer and actions --- */\n.rly-preference-center__footer {\n    display: flex;\n    width: 100%;\n    flex-shrink: 1;\n    background: inherit;\n    gap: 0.75rem;\n    margin-top: 1rem;\n    align-items: flex-end;\n    justify-content: space-between;\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n}\n\n.rly-preference-center__footer > div > svg {\n    filter: drop-shadow(0px 0px 4px var(--slider-color-fg));\n}\n\n.rly-preference-center__actions {\n    display: flex;\n    gap: 0.75rem;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n/* --- Editable field focus styles --- */\n.rly-editable-field-container div[contenteditable='true']:focus,\n.rly-editable-field-container-button div[contenteditable='true']:focus {\n    outline: none !important;\n}\n\n/* --- Purposes container and scrolling --- */\n.rly-purposes-container {\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--purposes-scrollbar-color);\n    scrollbar-gutter: stable;\n    padding-bottom: 8rem;\n    max-height: calc(100vh - 12rem);\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n/* --- Purpose border divider --- */\n.rly-purpose-border {\n    width: 100%;\n    height: 2px;\n    margin: 0.75rem 0px 0.75rem 0px;\n}\n\n/* --- Purpose card layout --- */\n.rly-purpose-card {\n    width: 100%;\n    display: flex;\n    padding-right: 0.25rem;\n}\n\n.rly-purpose-title-and-description-container {\n    flex-basis: 70%;\n    padding-top: 0.25rem;\n}\n\n.rly-purpose-toggle-container {\n    flex-basis: 30%;\n    display: flex;\n    align-items: center;\n    justify-content: right;\n    padding-right: 0.25rem;\n}\n\n/* --- Purpose text styling --- */\n.rly-purpose-title {\n    font-size: 0.875rem;\n    font-weight: 700;\n    width: 100%;\n}\n\n.rly-purpose-description {\n    font-size: 0.75rem;\n    font-weight: 400;\n    width: 100%;\n}\n\n.rly-purpose-switch-notice-only {\n    font-size: 12px;\n    font-weight: 400;\n}\n\n/* --- Toggle switch component --- */\n.rly-toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n}\n\n.rly-toggle-switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* --- Slider styling --- */\n.rly-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--slider-color-bg);\n    border-radius: 17px;\n    border: 1px solid var(--slider-color-fg);\n}\n\n.rly-slider:before {\n    position: absolute;\n    content: '';\n    height: 12px;\n    width: 12px;\n    left: 2px;\n    bottom: 50%;\n    background-color: var(--slider-color-fg);\n    transform: translateY(50%);\n    border-radius: 50%;\n}\n\n/* --- Slider transitions --- */\n/* Apply transitions only AFTER the component has loaded */\n.rly-transitions-enabled .rly-slider,\n.rly-transitions-enabled .rly-slider:before {\n    transition: all 0.4s ease;\n}\n\n/* --- Slider states --- */\ninput:checked + .rly-slider {\n    background-color: var(--slider-color-fg);\n}\n\ninput:focus + .rly-slider {\n    box-shadow: 0 0 1px var(--slider-color-fg);\n}\n\ninput:checked + .rly-slider:before {\n    transform: translate(13px, 50%);\n    background-color: var(--slider-color-bg);\n}\n\n/* ------------------ Media Queries ------------------ */\n\n@media screen and (max-width: 375px) and (orientation: portrait) {\n    .rly-preference-center__actions {\n        transform: scale(0.9);\n        transform-origin: bottom right;\n        white-space: nowrap;\n    }\n}\n\n@media screen and (max-width: 767px) and (orientation: portrait) {\n    .rly-preference-center__footer svg {\n        width: 5rem;\n    }\n}\n\n@media screen and (min-width: 600px) and (orientation: landscape) {\n    .rly-purposes-container {\n        padding-bottom: 4.5rem;\n    }\n}\n\n@media screen and (min-width: 767px) and (orientation: portrait),\n    screen and (min-width: 1024px) and (orientation: landscape),\n    screen and (min-width: 996px) {\n    .rly-preference-center {\n        max-width: 38rem;\n        width: 100%;\n        height: auto;\n        max-height: max(56vh, 38rem);\n    }\n}\n"],
                sourceRoot: ""
            }]);
            const c = a
        }
        ,
        863: (e, t, n) => {
            !function(e, t) {
                e((function() {
                    "use strict";
                    var e, n = {
                        mobileDetectRules: {
                            phones: {
                                iPhone: "\\biPhone\\b|\\biPod\\b",
                                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                                Pixel: "; \\bPixel\\b",
                                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                                Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                                Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                                NokiaLumia: "Lumia [0-9]{3,4}",
                                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                                Palm: "PalmSource|Palm",
                                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                                Alcatel: "Alcatel",
                                Nintendo: "Nintendo (3DS|Switch)",
                                Amoi: "Amoi",
                                INQ: "INQ",
                                OnePlus: "ONEPLUS",
                                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                            },
                            tablets: {
                                iPad: "iPad|iPad.*Mobile",
                                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                                GoogleTablet: "Android.*Pixel C",
                                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                                BlackBerryTablet: "PlayBook|RIM Tablet",
                                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                                ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                                IRUTablet: "M702pro",
                                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                                NokiaLumiaTablet: "Lumia 2520",
                                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                                FlyTablet: "IQ310|Fly Vision",
                                bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                                NecTablet: "\\bN-06D|\\bN-08D",
                                PantechTablet: "Pantech.*P4100",
                                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                                ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                                NabiTablet: "Android.*\\bNabi",
                                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                                PlaystationTablet: "Playstation.*(Portable|Vita)",
                                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                                GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                                DPSTablet: "DPS Dream 9|DPS Dual 7",
                                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                                iMobileTablet: "i-mobile i-note",
                                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                                AMPETablet: "Android.* A78 ",
                                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                                TecnoTablet: "TECNO P9|TECNO DP8D",
                                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                                VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                                CaptivaTablet: "CAPTIVA PAD",
                                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                                JaytechTablet: "TPC-PA762",
                                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                                MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                                UbislateTablet: "UbiSlate[\\s]?7C",
                                PocketBookTablet: "Pocketbook",
                                KocasoTablet: "\\b(TB-1207)\\b",
                                HisenseTablet: "\\b(F5281|E2371)\\b",
                                Hudl: "Hudl HT7S3|Hudl 2",
                                TelstraTablet: "T-Hub2",
                                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                            },
                            oss: {
                                AndroidOS: "Android",
                                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                                iPadOS: "CPU OS 13",
                                SailfishOS: "Sailfish",
                                MeeGoOS: "MeeGo",
                                MaemoOS: "Maemo",
                                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                                webOS: "webOS|hpwOS",
                                badaOS: "\\bBada\\b",
                                BREWOS: "BREW"
                            },
                            uas: {
                                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                                Dolfin: "\\bDolfin\\b",
                                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                                Skyfire: "Skyfire",
                                Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                                IE: "IEMobile|MSIEMobile",
                                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                                Bolt: "bolt",
                                TeaShark: "teashark",
                                Blazer: "Blazer",
                                Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                                WeChat: "\\bMicroMessenger\\b",
                                UCBrowser: "UC.*Browser|UCWEB",
                                baiduboxapp: "baiduboxapp",
                                baidubrowser: "baidubrowser",
                                DiigoBrowser: "DiigoBrowser",
                                Mercury: "\\bMercury\\b",
                                ObigoBrowser: "Obigo",
                                NetFront: "NF-Browser",
                                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                            },
                            props: {
                                Mobile: "Mobile/[VER]",
                                Build: "Build/[VER]",
                                Version: "Version/[VER]",
                                VendorID: "VendorID/[VER]",
                                iPad: "iPad.*CPU[a-z ]+[VER]",
                                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                                iPod: "iPod.*CPU[a-z ]+[VER]",
                                Kindle: "Kindle/[VER]",
                                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                                Coast: ["Coast/[VER]"],
                                Dolfin: "Dolfin/[VER]",
                                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                                Fennec: "Fennec/[VER]",
                                Edge: "Edge/[VER]",
                                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                                NetFront: "NetFront/[VER]",
                                NokiaBrowser: "NokiaBrowser/[VER]",
                                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                                "Opera Mini": "Opera Mini/[VER]",
                                "Opera Mobi": "Version/[VER]",
                                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                                MQQBrowser: "MQQBrowser/[VER]",
                                MicroMessenger: "MicroMessenger/[VER]",
                                baiduboxapp: "baiduboxapp/[VER]",
                                baidubrowser: "baidubrowser/[VER]",
                                SamsungBrowser: "SamsungBrowser/[VER]",
                                Iron: "Iron/[VER]",
                                Safari: ["Version/[VER]", "Safari/[VER]"],
                                Skyfire: "Skyfire/[VER]",
                                Tizen: "Tizen/[VER]",
                                Webkit: "webkit[ /][VER]",
                                PaleMoon: "PaleMoon/[VER]",
                                SailfishBrowser: "SailfishBrowser/[VER]",
                                Gecko: "Gecko/[VER]",
                                Trident: "Trident/[VER]",
                                Presto: "Presto/[VER]",
                                Goanna: "Goanna/[VER]",
                                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                                Android: "Android [VER]",
                                Sailfish: "Sailfish [VER]",
                                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                                BREW: "BREW [VER]",
                                Java: "Java/[VER]",
                                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                                "Windows Phone": "Windows Phone [VER]",
                                "Windows CE": "Windows CE/[VER]",
                                "Windows NT": "Windows NT [VER]",
                                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                            },
                            utils: {
                                Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                                DesktopMode: "WPDesktop",
                                TV: "SonyDTV|HbbTV",
                                WebKit: "(webkit)[ /]([\\w.]+)",
                                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                                Watch: "SM-V700"
                            }
                        },
                        detectMobileBrowsers: {
                            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                            tabletPattern: /android|ipad|playbook|silk/i
                        }
                    }, o = Object.prototype.hasOwnProperty;
                    function r(e, t) {
                        return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                    }
                    function i(e, t) {
                        var n, o, r = e.length;
                        if (!r || !t)
                            return !1;
                        for (n = t.toLowerCase(),
                        o = 0; o < r; ++o)
                            if (n === e[o].toLowerCase())
                                return !0;
                        return !1
                    }
                    function a(e) {
                        for (var t in e)
                            o.call(e, t) && (e[t] = new RegExp(e[t],"i"))
                    }
                    function c(e, t) {
                        this.ua = function(e) {
                            return (e || "").substr(0, 500)
                        }(e),
                        this._cache = {},
                        this.maxPhoneWidth = t || 600
                    }
                    return n.FALLBACK_PHONE = "UnknownPhone",
                    n.FALLBACK_TABLET = "UnknownTablet",
                    n.FALLBACK_MOBILE = "UnknownMobile",
                    e = "isArray"in Array ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    ,
                    function() {
                        var t, r, i, c, s, l, u = n.mobileDetectRules;
                        for (t in u.props)
                            if (o.call(u.props, t)) {
                                for (r = u.props[t],
                                e(r) || (r = [r]),
                                s = r.length,
                                c = 0; c < s; ++c)
                                    (l = (i = r[c]).indexOf("[VER]")) >= 0 && (i = i.substring(0, l) + "([\\w._\\+]+)" + i.substring(l + 5)),
                                    r[c] = new RegExp(i,"i");
                                u.props[t] = r
                            }
                        a(u.oss),
                        a(u.phones),
                        a(u.tablets),
                        a(u.uas),
                        a(u.utils),
                        u.oss0 = {
                            WindowsPhoneOS: u.oss.WindowsPhoneOS,
                            WindowsMobileOS: u.oss.WindowsMobileOS
                        }
                    }(),
                    n.findMatch = function(e, t) {
                        for (var n in e)
                            if (o.call(e, n) && e[n].test(t))
                                return n;
                        return null
                    }
                    ,
                    n.findMatches = function(e, t) {
                        var n = [];
                        for (var r in e)
                            o.call(e, r) && e[r].test(t) && n.push(r);
                        return n
                    }
                    ,
                    n.getVersionStr = function(e, t) {
                        var r, i, a, c, s = n.mobileDetectRules.props;
                        if (o.call(s, e))
                            for (a = (r = s[e]).length,
                            i = 0; i < a; ++i)
                                if (null !== (c = r[i].exec(t)))
                                    return c[1];
                        return null
                    }
                    ,
                    n.getVersion = function(e, t) {
                        var o = n.getVersionStr(e, t);
                        return o ? n.prepareVersionNo(o) : NaN
                    }
                    ,
                    n.prepareVersionNo = function(e) {
                        var t;
                        return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
                        t.length > 1 && (e = t[0] + ".",
                        t.shift(),
                        e += t.join("")),
                        Number(e)
                    }
                    ,
                    n.isMobileFallback = function(e) {
                        return n.detectMobileBrowsers.fullPattern.test(e) || n.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                    }
                    ,
                    n.isTabletFallback = function(e) {
                        return n.detectMobileBrowsers.tabletPattern.test(e)
                    }
                    ,
                    n.prepareDetectionCache = function(e, o, r) {
                        if (e.mobile === t) {
                            var i, a, s;
                            if (a = n.findMatch(n.mobileDetectRules.tablets, o))
                                return e.mobile = e.tablet = a,
                                void (e.phone = null);
                            if (i = n.findMatch(n.mobileDetectRules.phones, o))
                                return e.mobile = e.phone = i,
                                void (e.tablet = null);
                            n.isMobileFallback(o) ? (s = c.isPhoneSized(r)) === t ? (e.mobile = n.FALLBACK_MOBILE,
                            e.tablet = e.phone = null) : s ? (e.mobile = e.phone = n.FALLBACK_PHONE,
                            e.tablet = null) : (e.mobile = e.tablet = n.FALLBACK_TABLET,
                            e.phone = null) : n.isTabletFallback(o) ? (e.mobile = e.tablet = n.FALLBACK_TABLET,
                            e.phone = null) : e.mobile = e.tablet = e.phone = null
                        }
                    }
                    ,
                    n.mobileGrade = function(e) {
                        var t = null !== e.mobile();
                        return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"),
                        "C")
                    }
                    ,
                    n.detectOS = function(e) {
                        return n.findMatch(n.mobileDetectRules.oss0, e) || n.findMatch(n.mobileDetectRules.oss, e)
                    }
                    ,
                    n.getDeviceSmallerSide = function() {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                    }
                    ,
                    c.prototype = {
                        constructor: c,
                        mobile: function() {
                            return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                            this._cache.mobile
                        },
                        phone: function() {
                            return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                            this._cache.phone
                        },
                        tablet: function() {
                            return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                            this._cache.tablet
                        },
                        userAgent: function() {
                            return this._cache.userAgent === t && (this._cache.userAgent = n.findMatch(n.mobileDetectRules.uas, this.ua)),
                            this._cache.userAgent
                        },
                        userAgents: function() {
                            return this._cache.userAgents === t && (this._cache.userAgents = n.findMatches(n.mobileDetectRules.uas, this.ua)),
                            this._cache.userAgents
                        },
                        os: function() {
                            return this._cache.os === t && (this._cache.os = n.detectOS(this.ua)),
                            this._cache.os
                        },
                        version: function(e) {
                            return n.getVersion(e, this.ua)
                        },
                        versionStr: function(e) {
                            return n.getVersionStr(e, this.ua)
                        },
                        is: function(e) {
                            return i(this.userAgents(), e) || r(e, this.os()) || r(e, this.phone()) || r(e, this.tablet()) || i(n.findMatches(n.mobileDetectRules.utils, this.ua), e)
                        },
                        match: function(e) {
                            return e instanceof RegExp || (e = new RegExp(e,"i")),
                            e.test(this.ua)
                        },
                        isPhoneSized: function(e) {
                            return c.isPhoneSized(e || this.maxPhoneWidth)
                        },
                        mobileGrade: function() {
                            return this._cache.grade === t && (this._cache.grade = n.mobileGrade(this)),
                            this._cache.grade
                        }
                    },
                    "undefined" != typeof window && window.screen ? c.isPhoneSized = function(e) {
                        return e < 0 ? t : n.getDeviceSmallerSide() <= e
                    }
                    : c.isPhoneSized = function() {}
                    ,
                    c._impl = n,
                    c.version = "1.4.5 2021-03-13",
                    c
                }
                ))
            }(e.exports ? function(t) {
                e.exports = t()
            }
            : n.amdD)
        }
        ,
        960: e => {
            "use strict";
            var t = [];
            function n(e) {
                for (var n = -1, o = 0; o < t.length; o++)
                    if (t[o].identifier === e) {
                        n = o;
                        break
                    }
                return n
            }
            function o(e, o) {
                for (var i = {}, a = [], c = 0; c < e.length; c++) {
                    var s = e[c]
                      , l = o.base ? s[0] + o.base : s[0]
                      , u = i[l] || 0
                      , p = "".concat(l, " ").concat(u);
                    i[l] = u + 1;
                    var d = n(p)
                      , f = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5]
                    };
                    if (-1 !== d)
                        t[d].references++,
                        t[d].updater(f);
                    else {
                        var h = r(f, o);
                        o.byIndex = c,
                        t.splice(c, 0, {
                            identifier: p,
                            updater: h,
                            references: 1
                        })
                    }
                    a.push(p)
                }
                return a
            }
            function r(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, r) {
                var i = o(e = e || [], r = r || {});
                return function(e) {
                    e = e || [];
                    for (var a = 0; a < i.length; a++) {
                        var c = n(i[a]);
                        t[c].references--
                    }
                    for (var s = o(e, r), l = 0; l < i.length; l++) {
                        var u = n(i[l]);
                        0 === t[u].references && (t[u].updater(),
                        t.splice(u, 1))
                    }
                    i = s
                }
            }
        }
    }
      , t = {};
    function n(o) {
        var r = t[o];
        if (void 0 !== r)
            return r.exports;
        var i = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](i, i.exports, n),
        i.exports
    }
    n.amdD = function() {
        throw new Error("define cannot be used indirect")
    }
    ,
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.nc = void 0;
    var o = {};
    ( () => {
        "use strict";
        var e, t, r, i, a, c, s, l;
        n.r(o),
        n.d(o, {
            RelyanceConsentAgent: () => Po
        }),
        function(e) {
            e.ERROR = "ERROR",
            e.WARN = "WARN",
            e.INFO = "INFO",
            e.TRACE = "TRACE"
        }(e || (e = {})),
        function(e) {
            e.PreferenceCenterTypeModal = "PREFERENCE_CENTER_TYPE_MODAL",
            e.PreferenceCenterTypeDrawer = "PREFERENCE_CENTER_TYPE_DRAWER"
        }(t || (t = {})),
        function(e) {
            e.ConsentTrackingTechnologyStatusApproved = "CONSENT_TRACKING_TECHNOLOGY_STATUS_APPROVED",
            e.ConsentTrackingTechnologyStatusDisregarded = "CONSENT_TRACKING_TECHNOLOGY_STATUS_DISREGARDED",
            e.ConsentTrackingTechnologyStatusPending = "CONSENT_TRACKING_TECHNOLOGY_STATUS_PENDING"
        }(r || (r = {})),
        function(e) {
            e.ConsentTrackingTechnologyTypeCookie = "CONSENT_TRACKING_TECHNOLOGY_TYPE_COOKIE",
            e.ConsentTrackingTechnologyTypeLocalStorage = "CONSENT_TRACKING_TECHNOLOGY_TYPE_LOCAL_STORAGE",
            e.ConsentTrackingTechnologyTypeSessionStorage = "CONSENT_TRACKING_TECHNOLOGY_TYPE_SESSION_STORAGE",
            e.ConsentTrackingTechnologyTypeIndexedDb = "CONSENT_TRACKING_TECHNOLOGY_TYPE_INDEXED_DB",
            e.ConsentTrackingTechnologyTypePixel = "CONSENT_TRACKING_TECHNOLOGY_TYPE_PIXEL",
            e.ConsentTrackingTechnologyTypeBeacon = "CONSENT_TRACKING_TECHNOLOGY_TYPE_BEACON",
            e.ConsentTrackingTechnologyTypeFingerprintingScript = "CONSENT_TRACKING_TECHNOLOGY_TYPE_FINGERPRINTING_SCRIPT"
        }(i || (i = {})),
        function(e) {
            e.ConsentModelOptionsOptIn = "CONSENT_MODEL_OPTIONS_OPT_IN",
            e.ConsentModelOptionsOptOut = "CONSENT_MODEL_OPTIONS_OPT_OUT",
            e.ConsentModelOptionsNoChoice = "CONSENT_MODEL_OPTIONS_NO_CHOICE",
            e.ConsentModelOptionsImpliedConsent = "CONSENT_MODEL_OPTIONS_IMPLIED_CONSENT"
        }(a || (a = {})),
        function(e) {
            e.InterfaceBehaviorsOptionsDenyAll = "INTERFACE_BEHAVIORS_OPTIONS_DENY_ALL",
            e.InterfaceBehaviorsOptionsAcceptAll = "INTERFACE_BEHAVIORS_OPTIONS_ACCEPT_ALL",
            e.InterfaceBehaviorsOptionsNoAction = "INTERFACE_BEHAVIORS_OPTIONS_NO_ACTION"
        }(c || (c = {})),
        function(e) {
            e.VendorDiscoveredOptionsAlwaysAllow = "VENDOR_DISCOVERED_OPTIONS_ALWAYS_ALLOW",
            e.VendorDiscoveredOptionsNeverAllow = "VENDOR_DISCOVERED_OPTIONS_NEVER_ALLOW",
            e.VendorDiscoveredOptionsOnlyAllowIfAccepted = "VENDOR_DISCOVERED_OPTIONS_ONLY_ALLOW_IF_ACCEPTED"
        }(s || (s = {}));
        var u, p, d = "Global", f = "data-relyance-consent-appId", h = {
            CONSENT_COOKIE_NAME: "rly_consent",
            CLEAR_COOKIE_URL_PARAMETER: "rly_clear_cookie",
            DEVICE_ID_COOKIE_NAME: "rly_device_id",
            LOCATION_URL_PARAMETER: "rly_loc",
            REGION_URL_PARAMETER: "cm_region",
            CONSENT_USER_COOKIE_NAME: "rly_user"
        }, A = {
            CONSENT_DEBUG: "consent-debug"
        }, C = ((l = {})[a.ConsentModelOptionsOptOut] = !0,
        l[a.ConsentModelOptionsImpliedConsent] = !0,
        l[a.ConsentModelOptionsNoChoice] = !0,
        l[a.ConsentModelOptionsOptIn] = !1,
        l);
        !function(e) {
            e.DOMAIN_BEHAVIOURS = "behaviors",
            e.DOMAIN_TRACKING_TECHNOLOGIES = "tracking-technologies",
            e.DOMAIN_TRACKING_TECHNOLOGIES_REQUEST_URLS_BY_PA = "request-url-by-purpose",
            e.DOMAIN_TRACKING_TECHNOLOGIES_SCRIPT_DATA_BY_PA = "script-data-by-purpose",
            e.DOMAIN_PROCESSING_ACTIVITIES = "processing-activities",
            e.REGION_CONFIGS = "banner",
            e.LOCALE_CONFIGS = "locale"
        }(u || (u = {})),
        function(e) {
            e.GET = "GET",
            e.POST = "POST"
        }(p || (p = {}));
        var g, T = function() {
            function t() {
                this._listeners = new Map
            }
            return t.prototype.addEventListener = function(e, t) {
                var n;
                this._listeners.has(e) ? null === (n = this._listeners.get(e)) || void 0 === n || n.push(t) : this._listeners.set(e, [t])
            }
            ,
            t.prototype.removeEventListener = function(e, t) {
                var n = this._listeners.get(e);
                if (n && n.includes(t)) {
                    var o = n.indexOf(t);
                    n.splice(o, 1),
                    this._listeners.set(e, n)
                }
            }
            ,
            t.prototype.dispatchEvent = function(t) {
                var n;
                this.relyanceLoggerService.log("RelyanceConsentAgent", e.INFO, "Dispatching event: ".concat(JSON.stringify(t))),
                this._listeners.has(t.type) && (null === (n = this._listeners.get(t.type)) || void 0 === n || n.forEach((function(e) {
                    return e(t)
                }
                )))
            }
            ,
            t.prototype.getOrGenerateDeviceId = function() {
                var e = h.DEVICE_ID_COOKIE_NAME
                  , t = this.relyanceConsentStorageService.getCookie(e);
                return t || (t = crypto.randomUUID(),
                this.relyanceConsentStorageService.setCookie(e, t, 365)),
                t
            }
            ,
            t
        }(), y = function() {
            function t() {}
            return t.initialize = function(e, t) {
                this.requestUrlsByPurpose = e,
                this.logger = t,
                this.setupInterceptors()
            }
            ,
            t.updateConsent = function(e) {
                this.allowedCategories = new Set(e.map((function(e) {
                    return e.toLowerCase()
                }
                )))
            }
            ,
            t.setupInterceptors = function() {
                var n = this
                  , o = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(e, t) {
                    var n = "string" == typeof t ? t : t.href;
                    return this._requestUrl = n,
                    o.apply(this, arguments)
                }
                ;
                var r = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function(n) {
                    var o = this._requestUrl;
                    if (!o || !t.isUrlBlocked(o))
                        return r.call(this, n);
                    t.logger.log("[NetworkInterceptor]", e.WARN, "Blocked XHR to ".concat(o))
                }
                ;
                var i = window.fetch;
                window.fetch = function(o, r) {
                    return function(e, t, n, o) {
                        return new (n || (n = Promise))((function(r, i) {
                            function a(e) {
                                try {
                                    s(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function c(e) {
                                try {
                                    s(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }
                                ))).then(a, c)
                            }
                            s((o = o.apply(e, t || [])).next())
                        }
                        ))
                    }(n, void 0, void 0, (function() {
                        var n;
                        return function(e, t) {
                            var n, o, r, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & r[0])
                                        throw r[1];
                                    return r[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            },
                            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }
                            ),
                            i;
                            function c(c) {
                                return function(s) {
                                    return function(c) {
                                        if (n)
                                            throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0,
                                        c[0] && (a = 0)),
                                        a; )
                                            try {
                                                if (n = 1,
                                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                                    return r;
                                                switch (o = 0,
                                                r && (c = [2 & c[0], r.value]),
                                                c[0]) {
                                                case 0:
                                                case 1:
                                                    r = c;
                                                    break;
                                                case 4:
                                                    return a.label++,
                                                    {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++,
                                                    o = c[1],
                                                    c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(),
                                                    a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < r[1]) {
                                                        a.label = r[1],
                                                        r = c;
                                                        break
                                                    }
                                                    if (r && a.label < r[2]) {
                                                        a.label = r[2],
                                                        a.ops.push(c);
                                                        break
                                                    }
                                                    r[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                    continue
                                                }
                                                c = t.call(e, a)
                                            } catch (e) {
                                                c = [6, e],
                                                o = 0
                                            } finally {
                                                n = r = 0
                                            }
                                        if (5 & c[0])
                                            throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, s])
                                }
                            }
                        }(this, (function(a) {
                            return (n = "string" == typeof o ? o : o instanceof URL ? o.href : o.url) && t.isUrlBlocked(n) && (t.logger.log("[NetworkInterceptor]", e.WARN, "Blocked fetch to ".concat(n)),
                            t.blockedRequests.push(new Request(o,r))),
                            [2, i(o, r)]
                        }
                        ))
                    }
                    ))
                }
            }
            ,
            t.retryBlockedRequests = function() {
                var t = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var o, r = 0, i = t.length; r < i; r++)
                            !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)),
                            o[r] = t[r]);
                    return e.concat(o || Array.prototype.slice.call(t))
                }([], this.blockedRequests, !0);
                this.logger.log("[NetworkInterceptor]", e.INFO, "Retrying ".concat(t.length, " blocked requests.")),
                this.logger.log("[NetworkInterceptor]", e.TRACE, "Blocked requests: ".concat(JSON.stringify(t))),
                this.blockedRequests = [],
                t.forEach((function(e) {
                    fetch(e.clone())
                }
                ))
            }
            ,
            t.isUrlBlocked = function(t) {
                for (var n = this, o = function(o, i) {
                    if (!r.allowedCategories.has(o.toLowerCase())) {
                        var a = i instanceof Array && i.some((function(r) {
                            try {
                                return t.includes(new URL(r).hostname)
                            } catch (t) {
                                return n.logger.log("[NetworkInterceptor]", e.WARN, "Invalid URL in category ".concat(o, ":"), r, t),
                                !1
                            }
                        }
                        ));
                        if (a)
                            return r.logger.log("[NetworkInterceptor]", e.INFO, "--- Blocked! Category: ".concat(o, ", URL: ").concat(t)),
                            {
                                value: !0
                            }
                    }
                }, r = this, i = 0, a = Object.entries(this.requestUrlsByPurpose); i < a.length; i++) {
                    var c = a[i]
                      , s = o(c[0], c[1]);
                    if ("object" == typeof s)
                        return s.value
                }
                return this.logger.log("[NetworkInterceptor]", e.TRACE, "--- Allowed! URL: ".concat(t)),
                !1
            }
            ,
            t.requestUrlsByPurpose = {},
            t.allowedCategories = new Set(["strictly necessary", "necessary"]),
            t.blockedRequests = [],
            t
        }(), b = function() {
            function e(e) {
                this.agent = e
            }
            return e.prototype.showPreferenceCenter = function() {
                var e = this;
                return new Promise((function(t, n) {
                    e.agent.relyancePreferenceCenterService.renderPreferenceCenter().then((function(e) {
                        t()
                    }
                    ))
                }
                ))
            }
            ,
            e
        }(), _ = function(e) {
            this.type = e
        };
        !function(e) {
            e.RELYANCE_LOAD = "RELYANCE_LOAD",
            e.RELYANCE_LOCATION_FETCHED = "RELYANCE_LOCATION_FETCHED",
            e.RELYANCE_AGENT_INITIALIZED = "RELYANCE_AGENT_INITIALIZED",
            e.RELYANCE_SERVICES_INITALIZED = "RELYANCE_SERVICES_INITALIZED",
            e.RELYANCE_USER_REGISTRATION = "RELYANCE_USER_REGISTRATION",
            e.RELYANCE_USER_VISIT = "RELYANCE_USER_VISIT",
            e.RELYANCE_USER_ASSOCIATION = "RELYANCE_USER_ASSOCIATION",
            e.RELYANCE_CONSENT_UPDATE = "RELYANCE_CONSENT_UPDATE",
            e.RELYANCE_USER_CONSENT_RECEIPT = "RELYANCE_USER_CONSENT_RECEIPT",
            e.RELYANCE_PREFERENCE_CENTER_CLOSED = "RELYANCE_PREFERENCE_CENTER_CLOSED",
            e.RELYANCE_PREFERENCE_CENTER_CONTAINER_CLICKED = "RELYANCE_PREFERENCE_CENTER_CONTAINER_CLICKED",
            e.RELYANCE_PREFERENCE_CENTER_BUTTON_CLICKED = "RELYANCE_PREFERENCE_CENTER_BUTTON_CLICKED",
            e.RELYANCE_PREFERENCE_CENTER_PURPOSE_CLICKED = "RELYANCE_PREFERENCE_CENTER_PURPOSE_CLICKED",
            e.RELYANCE_BANNER_CLOSED = "RELYANCE_BANNER_CLOSED",
            e.RELYANCE_BANNER_BUTTON_CLICKED = "RELYANCE_BANNER_BUTTON_CLICKED",
            e.RELYANCE_PURPOSES_SERVICE_INITIALIZED = "RELYANCE_PURPOSES_SERVICE_INITIALIZED",
            e.RELYANCE_BEHAVIOR_CONFIGS_LOADED = "RELYANCE_BEHAVIOR_CONFIGS_LOADED",
            e.RELYANCE_DOM_WHEEL_EVENT = "RELYANCE_DOM_WHEEL_EVENT",
            e.RELYANCE_CLICK_OFF_BANNER = "RELYANCE_CLICK_OFF_BANNER",
            e.RELYANCE_BANNER_RENDERED = "RELYANCE_BANNER_RENDERED",
            e.RELYANCE_BANNER_CONTAINER_CLICKED = "RELYANCE_BANNER_CONTAINER_CLICKED"
        }(g || (g = {}));
        var v, S, E, P, I, m, N, B, O, w, M, R = {}, G = [], L = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, k = Array.isArray;
        function D(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function x(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        function H(e, t, n) {
            var o, r, i, a = {};
            for (i in t)
                "key" == i ? o = t[i] : "ref" == i ? r = t[i] : a[i] = t[i];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? v.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
                for (i in e.defaultProps)
                    null == a[i] && (a[i] = e.defaultProps[i]);
            return F(e, a, o, r, null)
        }
        function F(e, t, n, o, r) {
            var i = {
                type: e,
                props: t,
                key: n,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __c: null,
                constructor: void 0,
                __v: null == r ? ++E : r,
                __i: -1,
                __u: 0
            };
            return null == r && null != S.vnode && S.vnode(i),
            i
        }
        function V(e) {
            return e.children
        }
        function U(e, t) {
            this.props = e,
            this.context = t
        }
        function W(e, t) {
            if (null == t)
                return e.__ ? W(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e)
                    return n.__e;
            return "function" == typeof e.type ? W(e) : null
        }
        function j(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null,
                t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return j(e)
            }
        }
        function K(e) {
            (!e.__d && (e.__d = !0) && P.push(e) && !X.__r++ || I != S.debounceRendering) && ((I = S.debounceRendering) || m)(X)
        }
        function X() {
            for (var e, t, n, o, r, i, a, c = 1; P.length; )
                P.length > c && P.sort(N),
                e = P.shift(),
                c = P.length,
                e.__d && (n = void 0,
                r = (o = (t = e).__v).__e,
                i = [],
                a = [],
                t.__P && ((n = D({}, o)).__v = o.__v + 1,
                S.vnode && S.vnode(n),
                te(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, i, null == r ? W(o) : r, !!(32 & o.__u), a),
                n.__v = o.__v,
                n.__.__k[n.__i] = n,
                ne(i, n, a),
                n.__e != r && j(n)));
            X.__r = 0
        }
        function Y(e, t, n, o, r, i, a, c, s, l, u) {
            var p, d, f, h, A, C, g = o && o.__k || G, T = t.length;
            for (s = z(n, t, g, s, T),
            p = 0; p < T; p++)
                null != (f = n.__k[p]) && (d = -1 == f.__i ? R : g[f.__i] || R,
                f.__i = p,
                C = te(e, f, d, r, i, a, c, s, l, u),
                h = f.__e,
                f.ref && d.ref != f.ref && (d.ref && ie(d.ref, null, f),
                u.push(f.ref, f.__c || h, f)),
                null == A && null != h && (A = h),
                4 & f.__u || d.__k === f.__k ? s = Z(f, s, e) : "function" == typeof f.type && void 0 !== C ? s = C : h && (s = h.nextSibling),
                f.__u &= -7);
            return n.__e = A,
            s
        }
        function z(e, t, n, o, r) {
            var i, a, c, s, l, u = n.length, p = u, d = 0;
            for (e.__k = new Array(r),
            i = 0; i < r; i++)
                null != (a = t[i]) && "boolean" != typeof a && "function" != typeof a ? (s = i + d,
                (a = e.__k[i] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? F(null, a, null, null, null) : k(a) ? F(V, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? F(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e,
                a.__b = e.__b + 1,
                c = null,
                -1 != (l = a.__i = J(a, n, s, p)) && (p--,
                (c = n[l]) && (c.__u |= 2)),
                null == c || null == c.__v ? (-1 == l && (r > u ? d-- : r < u && d++),
                "function" != typeof a.type && (a.__u |= 4)) : l != s && (l == s - 1 ? d-- : l == s + 1 ? d++ : (l > s ? d-- : d++,
                a.__u |= 4))) : e.__k[i] = null;
            if (p)
                for (i = 0; i < u; i++)
                    null != (c = n[i]) && !(2 & c.__u) && (c.__e == o && (o = W(c)),
                    ae(c, c));
            return o
        }
        function Z(e, t, n) {
            var o, r;
            if ("function" == typeof e.type) {
                for (o = e.__k,
                r = 0; o && r < o.length; r++)
                    o[r] && (o[r].__ = e,
                    t = Z(o[r], t, n));
                return t
            }
            e.__e != t && (t && e.type && !n.contains(t) && (t = W(e)),
            n.insertBefore(e.__e, t || null),
            t = e.__e);
            do {
                t = t && t.nextSibling
            } while (null != t && 8 == t.nodeType);
            return t
        }
        function Q(e, t) {
            return t = t || [],
            null == e || "boolean" == typeof e || (k(e) ? e.some((function(e) {
                Q(e, t)
            }
            )) : t.push(e)),
            t
        }
        function J(e, t, n, o) {
            var r, i, a = e.key, c = e.type, s = t[n];
            if (null === s && null == e.key || s && a == s.key && c == s.type && !(2 & s.__u))
                return n;
            if (o > (null == s || 2 & s.__u ? 0 : 1))
                for (r = n - 1,
                i = n + 1; r >= 0 || i < t.length; ) {
                    if (r >= 0) {
                        if ((s = t[r]) && !(2 & s.__u) && a == s.key && c == s.type)
                            return r;
                        r--
                    }
                    if (i < t.length) {
                        if ((s = t[i]) && !(2 & s.__u) && a == s.key && c == s.type)
                            return i;
                        i++
                    }
                }
            return -1
        }
        function q(e, t, n) {
            "-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || L.test(t) ? n : n + "px"
        }
        function $(e, t, n, o, r) {
            var i;
            e: if ("style" == t)
                if ("string" == typeof n)
                    e.style.cssText = n;
                else {
                    if ("string" == typeof o && (e.style.cssText = o = ""),
                    o)
                        for (t in o)
                            n && t in n || q(e.style, t, "");
                    if (n)
                        for (t in n)
                            o && n[t] == o[t] || q(e.style, t, n[t])
                }
            else if ("o" == t[0] && "n" == t[1])
                i = t != (t = t.replace(B, "$1")),
                t = t.toLowerCase()in e || "onFocusOut" == t || "onFocusIn" == t ? t.toLowerCase().slice(2) : t.slice(2),
                e.l || (e.l = {}),
                e.l[t + i] = n,
                n ? o ? n.u = o.u : (n.u = O,
                e.addEventListener(t, i ? M : w, i)) : e.removeEventListener(t, i ? M : w, i);
            else {
                if ("http://www.w3.org/2000/svg" == r)
                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e)
                    try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
            }
        }
        function ee(e) {
            return function(t) {
                if (this.l) {
                    var n = this.l[t.type + e];
                    if (null == t.t)
                        t.t = O++;
                    else if (t.t < n.u)
                        return;
                    return n(S.event ? S.event(t) : t)
                }
            }
        }
        function te(e, t, n, o, r, i, a, c, s, l) {
            var u, p, d, f, h, A, C, g, T, y, b, _, v, E, P, I, m, N = t.type;
            if (null != t.constructor)
                return null;
            128 & n.__u && (s = !!(32 & n.__u),
            i = [c = t.__e = n.__e]),
            (u = S.__b) && u(t);
            e: if ("function" == typeof N)
                try {
                    if (g = t.props,
                    T = "prototype"in N && N.prototype.render,
                    y = (u = N.contextType) && o[u.__c],
                    b = u ? y ? y.props.value : u.__ : o,
                    n.__c ? C = (p = t.__c = n.__c).__ = p.__E : (T ? t.__c = p = new N(g,b) : (t.__c = p = new U(g,b),
                    p.constructor = N,
                    p.render = ce),
                    y && y.sub(p),
                    p.props = g,
                    p.state || (p.state = {}),
                    p.context = b,
                    p.__n = o,
                    d = p.__d = !0,
                    p.__h = [],
                    p._sb = []),
                    T && null == p.__s && (p.__s = p.state),
                    T && null != N.getDerivedStateFromProps && (p.__s == p.state && (p.__s = D({}, p.__s)),
                    D(p.__s, N.getDerivedStateFromProps(g, p.__s))),
                    f = p.props,
                    h = p.state,
                    p.__v = t,
                    d)
                        T && null == N.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                        T && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (T && null == N.getDerivedStateFromProps && g !== f && null != p.componentWillReceiveProps && p.componentWillReceiveProps(g, b),
                        !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(g, p.__s, b) || t.__v == n.__v) {
                            for (t.__v != n.__v && (p.props = g,
                            p.state = p.__s,
                            p.__d = !1),
                            t.__e = n.__e,
                            t.__k = n.__k,
                            t.__k.some((function(e) {
                                e && (e.__ = t)
                            }
                            )),
                            _ = 0; _ < p._sb.length; _++)
                                p.__h.push(p._sb[_]);
                            p._sb = [],
                            p.__h.length && a.push(p);
                            break e
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(g, p.__s, b),
                        T && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(f, h, A)
                        }
                        ))
                    }
                    if (p.context = b,
                    p.props = g,
                    p.__P = e,
                    p.__e = !1,
                    v = S.__r,
                    E = 0,
                    T) {
                        for (p.state = p.__s,
                        p.__d = !1,
                        v && v(t),
                        u = p.render(p.props, p.state, p.context),
                        P = 0; P < p._sb.length; P++)
                            p.__h.push(p._sb[P]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1,
                            v && v(t),
                            u = p.render(p.props, p.state, p.context),
                            p.state = p.__s
                        } while (p.__d && ++E < 25);
                    p.state = p.__s,
                    null != p.getChildContext && (o = D(D({}, o), p.getChildContext())),
                    T && !d && null != p.getSnapshotBeforeUpdate && (A = p.getSnapshotBeforeUpdate(f, h)),
                    I = u,
                    null != u && u.type === V && null == u.key && (I = oe(u.props.children)),
                    c = Y(e, k(I) ? I : [I], t, n, o, r, i, a, c, s, l),
                    p.base = t.__e,
                    t.__u &= -161,
                    p.__h.length && a.push(p),
                    C && (p.__E = p.__ = null)
                } catch (e) {
                    if (t.__v = null,
                    s || null != i)
                        if (e.then) {
                            for (t.__u |= s ? 160 : 128; c && 8 == c.nodeType && c.nextSibling; )
                                c = c.nextSibling;
                            i[i.indexOf(c)] = null,
                            t.__e = c
                        } else
                            for (m = i.length; m--; )
                                x(i[m]);
                    else
                        t.__e = n.__e,
                        t.__k = n.__k;
                    S.__e(e, t, n)
                }
            else
                null == i && t.__v == n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : c = t.__e = re(n.__e, t, n, o, r, i, a, s, l);
            return (u = S.diffed) && u(t),
            128 & t.__u ? void 0 : c
        }
        function ne(e, t, n) {
            for (var o = 0; o < n.length; o++)
                ie(n[o], n[++o], n[++o]);
            S.__c && S.__c(t, e),
            e.some((function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some((function(e) {
                        e.call(t)
                    }
                    ))
                } catch (e) {
                    S.__e(e, t.__v)
                }
            }
            ))
        }
        function oe(e) {
            return "object" != typeof e || null == e || e.__b && e.__b > 0 ? e : k(e) ? e.map(oe) : D({}, e)
        }
        function re(e, t, n, o, r, i, a, c, s) {
            var l, u, p, d, f, h, A, C = n.props, g = t.props, T = t.type;
            if ("svg" == T ? r = "http://www.w3.org/2000/svg" : "math" == T ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"),
            null != i)
                for (l = 0; l < i.length; l++)
                    if ((f = i[l]) && "setAttribute"in f == !!T && (T ? f.localName == T : 3 == f.nodeType)) {
                        e = f,
                        i[l] = null;
                        break
                    }
            if (null == e) {
                if (null == T)
                    return document.createTextNode(g);
                e = document.createElementNS(r, T, g.is && g),
                c && (S.__m && S.__m(t, i),
                c = !1),
                i = null
            }
            if (null == T)
                C === g || c && e.data == g || (e.data = g);
            else {
                if (i = i && v.call(e.childNodes),
                C = n.props || R,
                !c && null != i)
                    for (C = {},
                    l = 0; l < e.attributes.length; l++)
                        C[(f = e.attributes[l]).name] = f.value;
                for (l in C)
                    if (f = C[l],
                    "children" == l)
                        ;
                    else if ("dangerouslySetInnerHTML" == l)
                        p = f;
                    else if (!(l in g)) {
                        if ("value" == l && "defaultValue"in g || "checked" == l && "defaultChecked"in g)
                            continue;
                        $(e, l, null, f, r)
                    }
                for (l in g)
                    f = g[l],
                    "children" == l ? d = f : "dangerouslySetInnerHTML" == l ? u = f : "value" == l ? h = f : "checked" == l ? A = f : c && "function" != typeof f || C[l] === f || $(e, l, f, C[l], r);
                if (u)
                    c || p && (u.__html == p.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html),
                    t.__k = [];
                else if (p && (e.innerHTML = ""),
                Y("template" == t.type ? e.content : e, k(d) ? d : [d], t, n, o, "foreignObject" == T ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && W(n, 0), c, s),
                null != i)
                    for (l = i.length; l--; )
                        x(i[l]);
                c || (l = "value",
                "progress" == T && null == h ? e.removeAttribute("value") : null != h && (h !== e[l] || "progress" == T && !h || "option" == T && h != C[l]) && $(e, l, h, C[l], r),
                l = "checked",
                null != A && A != e[l] && $(e, l, A, C[l], r))
            }
            return e
        }
        function ie(e, t, n) {
            try {
                if ("function" == typeof e) {
                    var o = "function" == typeof e.__u;
                    o && e.__u(),
                    o && null == t || (e.__u = e(t))
                } else
                    e.current = t
            } catch (e) {
                S.__e(e, n)
            }
        }
        function ae(e, t, n) {
            var o, r;
            if (S.unmount && S.unmount(e),
            (o = e.ref) && (o.current && o.current != e.__e || ie(o, null, t)),
            null != (o = e.__c)) {
                if (o.componentWillUnmount)
                    try {
                        o.componentWillUnmount()
                    } catch (e) {
                        S.__e(e, t)
                    }
                o.base = o.__P = null
            }
            if (o = e.__k)
                for (r = 0; r < o.length; r++)
                    o[r] && ae(o[r], t, n || "function" != typeof e.type);
            n || x(e.__e),
            e.__c = e.__ = e.__e = void 0
        }
        function ce(e, t, n) {
            return this.constructor(e, n)
        }
        function se(e, t, n) {
            var o, r, i, a;
            t == document && (t = document.documentElement),
            S.__ && S.__(e, t),
            r = (o = "function" == typeof n) ? null : n && n.__k || t.__k,
            i = [],
            a = [],
            te(t, e = (!o && n || t).__k = H(V, null, [e]), r || R, R, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? v.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o, a),
            ne(i, e, a)
        }
        v = G.slice,
        S = {
            __e: function(e, t, n, o) {
                for (var r, i, a; t = t.__; )
                    if ((r = t.__c) && !r.__)
                        try {
                            if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(e)),
                            a = r.__d),
                            null != r.componentDidCatch && (r.componentDidCatch(e, o || {}),
                            a = r.__d),
                            a)
                                return r.__E = r
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        E = 0,
        U.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s != this.state ? this.__s : this.__s = D({}, this.state),
            "function" == typeof e && (e = e(D({}, n), this.props)),
            e && D(n, e),
            null != e && this.__v && (t && this._sb.push(t),
            K(this))
        }
        ,
        U.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            K(this))
        }
        ,
        U.prototype.render = V,
        P = [],
        m = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        N = function(e, t) {
            return e.__v.__b - t.__v.__b
        }
        ,
        X.__r = 0,
        B = /(PointerCapture)$|Capture$/i,
        O = 0,
        w = ee(!1),
        M = ee(!0);
        var le = 0;
        function ue(e, t, n, o, r, i) {
            t || (t = {});
            var a, c, s = t;
            if ("ref"in s)
                for (c in s = {},
                t)
                    "ref" == c ? a = t[c] : s[c] = t[c];
            var l = {
                type: e,
                props: s,
                key: n,
                ref: a,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __c: null,
                constructor: void 0,
                __v: --le,
                __i: -1,
                __u: 0,
                __source: r,
                __self: i
            };
            if ("function" == typeof e && (a = e.defaultProps))
                for (c in a)
                    void 0 === s[c] && (s[c] = a[c]);
            return S.vnode && S.vnode(l),
            l
        }
        Array.isArray;
        var pe, de, fe, he = (pe = function(e, t) {
            return pe = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            pe(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            pe(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), Ae = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.type = t,
                o.bannerButton = n,
                o
            }
            return he(t, e),
            t
        }(_), Ce = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), ge = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.type = t,
                o.event = n,
                o
            }
            return Ce(t, e),
            t
        }(_), Te = function() {
            function e() {}
            return e.prototype.getButtonStyle = function(e) {
                var t = this.getDefaultButtonStyles();
                return e.textColor && (t.color = e.textColor),
                e.borderRadius && (t.borderRadius = e.borderRadius + "px"),
                e.bgColor && (t.backgroundColor = e.bgColor),
                e.borderWidth && (t.borderWidth = e.borderWidth + "px",
                t.borderStyle = "solid"),
                e.borderColor && (t.borderColor = e.borderColor),
                t
            }
            ,
            e.prototype.getFontFamily = function(e) {
                var t;
                return e && e.fontFamily && (t = e.fontFamily),
                t
            }
            ,
            e.prototype.getDefaultButtonStyles = function() {
                return {
                    height: "35px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                }
            }
            ,
            e
        }(), ye = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), be = new (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return ye(t, e),
            t.prototype.getBannerStyles = function(e, t) {
                var n = this.getDefaultBannerStyles();
                return n.backgroundColor = this.getBackgroundColor(e),
                n.color = this.getTextColor(e),
                n.fontFamily = this.getFontFamily(t),
                n.display = "flex",
                n.alignItems = "center",
                n.borderColor = this.getBackgroundColor(e),
                n.borderRadius = "8px",
                n.borderStyle = "solid",
                n
            }
            ,
            t.prototype.getBackgroundColor = function(e) {
                var t = "";
                return e && e.backgroundColor && (t = e.backgroundColor),
                t
            }
            ,
            t.prototype.getTextColor = function(e) {
                var t = "";
                return e && e.textColor && (t = e.textColor),
                t
            }
            ,
            t.prototype.getDefaultBannerStyles = function() {
                return {
                    padding: "30px"
                }
            }
            ,
            t
        }(Te));
        !function(e) {
            e.PRODUCTION = "PRODUCTION",
            e.DESIGN = "DESIGN",
            e.EDIT = "EDIT"
        }(de || (de = {})),
        function(e) {
            e.CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES = "CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES",
            e.CONSENT_BANNER_BUTTON_ACCEPT = "CONSENT_BANNER_BUTTON_ACCEPT",
            e.CONSENT_BANNER_BUTTON_REJECT = "CONSENT_BANNER_BUTTON_REJECT",
            e.CONSENT_BANNER_BUTTON_CLOSE = "CONSENT_BANNER_BUTTON_CLOSE"
        }(fe || (fe = {}));
        var _e, ve, Se, Ee, Pe = function() {
            function e(e) {
                this.styleService = e,
                this.DSR_PORTAL_TOKEN = "{dsr-portal}",
                this.PRIVACY_POLICY_TOKEN = "{privacy-policy}",
                this.COOKIE_POLICY_TOKEN = "{cookie-policy}",
                this.NEWLINE_TOKEN = "\n"
            }
            return e.prototype.getButtonStyle = function(e) {
                var t = this.styleService.getDefaultButtonStyles();
                return e.textColor && (t.color = e.textColor),
                e.borderRadius && (t.borderRadius = e.borderRadius + "px"),
                e.bgColor && (t.backgroundColor = e.bgColor),
                e.borderWidth && (t.borderWidth = e.borderWidth + "px",
                t.borderStyle = "solid"),
                e.borderColor && (t.borderColor = e.borderColor),
                t
            }
            ,
            e.prototype.replaceTokens = function(e, t, n) {
                var o = this;
                if (void 0 === n && (n = !1),
                !e)
                    return [];
                var r = new Map
                  , i = [];
                if (t.forEach((function(e) {
                    var t = e[0]
                      , n = e[1]
                      , o = e[2]
                      , a = function(e) {
                        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                    }(t);
                    r.set(t, {
                        href: n,
                        label: o
                    }),
                    i.push(a)
                }
                )),
                0 === i.length)
                    return e.split("\n").map((function(t, n) {
                        return ue("span", {
                            children: [t, n < e.split("\n").length - 1 && ue("br", {})]
                        }, n)
                    }
                    ));
                var a = new RegExp("(".concat(i.join("|"), ")"),"g")
                  , c = e.split(a)
                  , s = [];
                return c.forEach((function(e, t) {
                    var i = "part-".concat(t)
                      , a = r.get(e);
                    if (a) {
                        if (a.href && a.label)
                            s.push(o.getLink(a.href, a.label, i));
                        else if (n) {
                            var c = "Missing link and/or label for token: ".concat(e);
                            s.push(ue("span", {
                                style: {
                                    fontWeight: 800,
                                    backgroundColor: "yellow",
                                    color: "black"
                                },
                                children: c
                            }, i))
                        }
                    } else if (e) {
                        var l = e.split("\n");
                        l.forEach((function(e, t) {
                            e && s.push(ue("span", {
                                children: e
                            }, "".concat(i, "-line-").concat(t))),
                            t < l.length - 1 && s.push(ue("br", {}, "".concat(i, "-br-").concat(t)))
                        }
                        ))
                    }
                }
                )),
                s
            }
            ,
            e.prototype.getButton = function(e, t, n) {
                return ue("div", {
                    onClick: function() {
                        return n && n()
                    },
                    className: "rly-button",
                    style: this.getButtonStyle(e),
                    children: t
                })
            }
            ,
            e.prototype.getLink = function(e, t, n) {
                return ue("a", {
                    href: e,
                    style: {
                        textDecoration: "underline",
                        color: "inherit !important"
                    },
                    children: t
                }, n)
            }
            ,
            e
        }(), Ie = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), me = function() {
            return me = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            me.apply(this, arguments)
        }, Ne = new (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._mode = de.PRODUCTION,
                t
            }
            return Ie(t, e),
            Object.defineProperty(t.prototype, "mode", {
                get: function() {
                    return this._mode
                },
                set: function(e) {
                    this._mode = e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "locale", {
                get: function() {
                    return this._locale
                },
                set: function(e) {
                    this._locale = e
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getLocalizationProperties = function(e) {
                var t, n = this;
                return e && e.localizationProperties && (this.locale ? t = e.localizationProperties.find((function(e) {
                    return e && e.locale === n.locale
                }
                )) : e.localizationProperties.length > 0 && e.localizationProperties[0] && (t = e.localizationProperties[0])),
                null !== t ? t : void 0
            }
            ,
            t.prototype.getTitle = function(e) {
                var t = this.getLocalizationProperties(e);
                return t && t.title ? ue(V, {
                    children: t.title
                }) : ue(V, {})
            }
            ,
            t.prototype.getDescription = function(e) {
                var t = this.getLocalizationProperties(e)
                  , n = [];
                return t && (n.push([this.DSR_PORTAL_TOKEN, t.dsrPortalLink ? t.dsrPortalLink : void 0, t.dsrPortalLinkLabel ? t.dsrPortalLinkLabel : void 0]),
                n.push([this.COOKIE_POLICY_TOKEN, t.cookiePolicyLink ? t.cookiePolicyLink : void 0, t.cookiePolicyLinkLabel ? t.cookiePolicyLinkLabel : void 0]),
                n.push([this.PRIVACY_POLICY_TOKEN, t.privacyPolicyLink ? t.privacyPolicyLink : void 0, t.privacyPortalLinkLabel ? t.privacyPortalLinkLabel : void 0])),
                t && t.description ? this.replaceTokens(null == t ? void 0 : t.description, n, this.mode === de.DESIGN) : [ue(V, {})]
            }
            ,
            t.prototype.getButtonBar = function(e, t) {
                var n = []
                  , o = this.getLocalizationProperties(e);
                return o && (e.showPreferenceCenterBtn && o.preferenceCenterButtonText && e.preferenceCenterButton && n.push(this.getButton(e.preferenceCenterButton, o.preferenceCenterButtonText, (function() {
                    return t(fe.CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES)
                }
                ))),
                e.showAcceptAllBtn && o.acceptButtonText && e.primaryButton && n.push(this.getButton(e.primaryButton, o.acceptButtonText, (function() {
                    return t(fe.CONSENT_BANNER_BUTTON_ACCEPT)
                }
                ))),
                e.showRejectAllBtn && o.rejectButtonText && e.primaryButton && n.push(this.getButton(e.primaryButton, o.rejectButtonText, (function() {
                    return t(fe.CONSENT_BANNER_BUTTON_REJECT)
                }
                )))),
                ue("div", {
                    className: "rly-button-bar",
                    children: n
                })
            }
            ,
            t.prototype.getEditableButtonBar = function(e, t, n) {
                var o = this
                  , r = []
                  , i = this.getLocalizationProperties(e);
                return i && [{
                    show: e.showPreferenceCenterBtn,
                    text: i.preferenceCenterButtonText,
                    style: e.preferenceCenterButton,
                    type: fe.CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES,
                    editMode: n.preferenceCenterButtonEditMode,
                    onEditToggle: n.onPreferenceCenterButtonEditToggle
                }, {
                    show: e.showAcceptAllBtn,
                    text: i.acceptButtonText,
                    style: e.primaryButton,
                    type: fe.CONSENT_BANNER_BUTTON_ACCEPT,
                    editMode: n.acceptButtonEditMode,
                    onEditToggle: n.onAcceptButtonEditToggle
                }, {
                    show: e.showRejectAllBtn,
                    text: i.rejectButtonText,
                    style: e.primaryButton,
                    type: fe.CONSENT_BANNER_BUTTON_REJECT,
                    editMode: n.rejectButtonEditMode,
                    onEditToggle: n.onRejectButtonEditToggle
                }].forEach((function(e) {
                    e.show && e.text && e.style && r.push(o.getEditableButton(e.style, e.text, (function() {
                        return t(e.type)
                    }
                    ), e.type, e.editMode || n.mode === de.EDIT, e.onEditToggle, n.onButtonTextChanged, n.mode))
                }
                )),
                ue("div", {
                    className: "rly-button-bar",
                    children: r
                })
            }
            ,
            t.prototype.getCloseButton = function(e, t) {
                if (!e || !e.primaryButton || !e.showCloseBtn)
                    return ue(V, {});
                var n = be.getButtonStyle(e.primaryButton);
                return n.width = "20px",
                n.height = "20px",
                n.position = "absolute",
                n.top = "10px",
                n.right = "10px",
                n.justifyContent = "center",
                n.paddingLeft = void 0,
                n.paddingRight = void 0,
                ue("div", {
                    style: n,
                    className: "rly-button-no-hover",
                    onClick: function() {
                        return t && t()
                    },
                    children: ue("div", {
                        children: "x"
                    })
                })
            }
            ,
            t.prototype.getButton = function(e, t, n) {
                return ue("div", {
                    onClick: function() {
                        return n && n()
                    },
                    className: "rly-button-no-hover",
                    style: be.getButtonStyle(e),
                    children: t
                })
            }
            ,
            t.prototype.getEditableButton = function(e, t, n, o, r, i, a, c, s) {
                var l = be.getButtonStyle(e);
                return ue("div", {
                    className: "".concat(c === de.DESIGN && i ? "rly-editable-field-container-button" : "rly-editable-field-container-button-no-hover"),
                    style: {
                        position: "relative",
                        display: "inline-block",
                        background: r ? "rgba(128, 128, 128, 0.2)" : "transparent",
                        transition: "background 0.2s ease-in-out",
                        cursor: c === de.DESIGN && i ? r ? "text" : "pointer" : ""
                    },
                    children: [ue("div", me({
                        onClick: r ? void 0 : function(e) {
                            if (i && !r) {
                                var t = e.currentTarget;
                                i(),
                                setTimeout((function() {
                                    if (t && "true" === t.contentEditable) {
                                        t.focus();
                                        var e = document.createRange()
                                          , n = window.getSelection();
                                        e.selectNodeContents(t),
                                        e.collapse(!1),
                                        null == n || n.removeAllRanges(),
                                        null == n || n.addRange(e)
                                    }
                                }
                                ), 0)
                            }
                        }
                        ,
                        className: "".concat(c === de.DESIGN && i ? "rly-button" : "rly-button-no-hover"),
                        style: me(me({}, l), {
                            outline: "none"
                        }),
                        contentEditable: r
                    }, r && {
                        suppressContentEditableWarning: !0
                    }, {
                        onBlur: function(e) {
                            var t = e.target.textContent || "";
                            a && a(o, t)
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && (e.preventDefault(),
                            e.currentTarget.blur())
                        },
                        title: r ? void 0 : "Click to edit button text",
                        children: t
                    })), c === de.DESIGN && i && ue("div", {
                        className: "rly-edit-button",
                        title: "Edit title",
                        children: ue(void 0, {})
                    })]
                })
            }
            ,
            t.prototype.getLink = function(e, t) {
                return ue("a", {
                    href: e,
                    style: {
                        textDecoration: "underline"
                    },
                    children: t
                })
            }
            ,
            t
        }(Pe))(be), Be = 0, Oe = [], we = S, Me = we.__b, Re = we.__r, Ge = we.diffed, Le = we.__c, ke = we.unmount, De = we.__;
        function xe(e, t) {
            we.__h && we.__h(ve, e, Be || t),
            Be = 0;
            var n = ve.__H || (ve.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({}),
            n.__[e]
        }
        function He(e) {
            return Be = 1,
            function(e, t, n) {
                var o = xe(_e++, 2);
                if (o.t = e,
                !o.__c && (o.__ = [n ? n(t) : ze(void 0, t), function(e) {
                    var t = o.__N ? o.__N[0] : o.__[0]
                      , n = o.t(t, e);
                    t !== n && (o.__N = [n, o.__[1]],
                    o.__c.setState({}))
                }
                ],
                o.__c = ve,
                !ve.__f)) {
                    var r = function(e, t, n) {
                        if (!o.__c.__H)
                            return !0;
                        var r = o.__c.__H.__.filter((function(e) {
                            return !!e.__c
                        }
                        ));
                        if (r.every((function(e) {
                            return !e.__N
                        }
                        )))
                            return !i || i.call(this, e, t, n);
                        var a = o.__c.props !== e;
                        return r.forEach((function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N,
                                e.__N = void 0,
                                t !== e.__[0] && (a = !0)
                            }
                        }
                        )),
                        i && i.call(this, e, t, n) || a
                    };
                    ve.__f = !0;
                    var i = ve.shouldComponentUpdate
                      , a = ve.componentWillUpdate;
                    ve.componentWillUpdate = function(e, t, n) {
                        if (this.__e) {
                            var o = i;
                            i = void 0,
                            r(e, t, n),
                            i = o
                        }
                        a && a.call(this, e, t, n)
                    }
                    ,
                    ve.shouldComponentUpdate = r
                }
                return o.__N || o.__
            }(ze, e)
        }
        function Fe(e, t) {
            var n = xe(_e++, 3);
            !we.__s && Ye(n.__H, t) && (n.__ = e,
            n.u = t,
            ve.__H.__h.push(n))
        }
        function Ve(e) {
            return Be = 5,
            function(e, t) {
                var n = xe(_e++, 7);
                return Ye(n.__H, t) && (n.__ = e(),
                n.__H = t,
                n.__h = e),
                n.__
            }((function() {
                return {
                    current: e
                }
            }
            ), [])
        }
        function Ue() {
            for (var e; e = Oe.shift(); )
                if (e.__P && e.__H)
                    try {
                        e.__H.__h.forEach(Ke),
                        e.__H.__h.forEach(Xe),
                        e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [],
                        we.__e(t, e.__v)
                    }
        }
        we.__b = function(e) {
            ve = null,
            Me && Me(e)
        }
        ,
        we.__ = function(e, t) {
            e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
            De && De(e, t)
        }
        ,
        we.__r = function(e) {
            Re && Re(e),
            _e = 0;
            var t = (ve = e.__c).__H;
            t && (Se === ve ? (t.__h = [],
            ve.__h = [],
            t.__.forEach((function(e) {
                e.__N && (e.__ = e.__N),
                e.u = e.__N = void 0
            }
            ))) : (t.__h.forEach(Ke),
            t.__h.forEach(Xe),
            t.__h = [],
            _e = 0)),
            Se = ve
        }
        ,
        we.diffed = function(e) {
            Ge && Ge(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== Oe.push(t) && Ee === we.requestAnimationFrame || ((Ee = we.requestAnimationFrame) || je)(Ue)),
            t.__H.__.forEach((function(e) {
                e.u && (e.__H = e.u),
                e.u = void 0
            }
            ))),
            Se = ve = null
        }
        ,
        we.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach(Ke),
                    e.__h = e.__h.filter((function(e) {
                        return !e.__ || Xe(e)
                    }
                    ))
                } catch (n) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    }
                    )),
                    t = [],
                    we.__e(n, e.__v)
                }
            }
            )),
            Le && Le(e, t)
        }
        ,
        we.unmount = function(e) {
            ke && ke(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function(e) {
                try {
                    Ke(e)
                } catch (e) {
                    t = e
                }
            }
            )),
            n.__H = void 0,
            t && we.__e(t, n.__v))
        }
        ;
        var We = "function" == typeof requestAnimationFrame;
        function je(e) {
            var t, n = function() {
                clearTimeout(o),
                We && cancelAnimationFrame(t),
                setTimeout(e)
            }, o = setTimeout(n, 100);
            We && (t = requestAnimationFrame(n))
        }
        function Ke(e) {
            var t = ve
              , n = e.__c;
            "function" == typeof n && (e.__c = void 0,
            n()),
            ve = t
        }
        function Xe(e) {
            var t = ve;
            e.__c = e.__(),
            ve = t
        }
        function Ye(e, t) {
            return !e || e.length !== t.length || t.some((function(t, n) {
                return t !== e[n]
            }
            ))
        }
        function ze(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        function Ze(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t))
                    return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o])
                    return !0;
            return !1
        }
        function Qe(e, t) {
            this.props = e,
            this.context = t
        }
        (Qe.prototype = new U).isPureReactComponent = !0,
        Qe.prototype.shouldComponentUpdate = function(e, t) {
            return Ze(this.props, e) || Ze(this.state, t)
        }
        ;
        var Je = S.__b;
        S.__b = function(e) {
            e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
            e.ref = null),
            Je && Je(e)
        }
        ,
        "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
        var qe = S.__e;
        S.__e = function(e, t, n, o) {
            if (e.then)
                for (var r, i = t; i = i.__; )
                    if ((r = i.__c) && r.__c)
                        return null == t.__e && (t.__e = n.__e,
                        t.__k = n.__k),
                        r.__c(e, t);
            qe(e, t, n, o)
        }
        ;
        var $e = S.unmount;
        function et(e, t, n) {
            return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
                "function" == typeof e.__c && e.__c()
            }
            )),
            e.__c.__H = null),
            null != (e = function(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            }({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t),
            e.__c.__e = !0,
            e.__c = null),
            e.__k = e.__k && e.__k.map((function(e) {
                return et(e, t, n)
            }
            ))),
            e
        }
        function tt(e, t, n) {
            return e && n && (e.__v = null,
            e.__k = e.__k && e.__k.map((function(e) {
                return tt(e, t, n)
            }
            )),
            e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e),
            e.__c.__e = !0,
            e.__c.__P = n)),
            e
        }
        function nt() {
            this.__u = 0,
            this.o = null,
            this.__b = null
        }
        function ot(e) {
            var t = e.__.__c;
            return t && t.__a && t.__a(e)
        }
        function rt() {
            this.i = null,
            this.l = null
        }
        S.unmount = function(e) {
            var t = e.__c;
            t && t.__R && t.__R(),
            t && 32 & e.__u && (e.type = null),
            $e && $e(e)
        }
        ,
        (nt.prototype = new U).__c = function(e, t) {
            var n = t.__c
              , o = this;
            null == o.o && (o.o = []),
            o.o.push(n);
            var r = ot(o.__v)
              , i = !1
              , a = function() {
                i || (i = !0,
                n.__R = null,
                r ? r(c) : c())
            };
            n.__R = a;
            var c = function() {
                if (!--o.__u) {
                    if (o.state.__a) {
                        var e = o.state.__a;
                        o.__v.__k[0] = tt(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (o.setState({
                        __a: o.__b = null
                    }); t = o.o.pop(); )
                        t.forceUpdate()
                }
            };
            o.__u++ || 32 & t.__u || o.setState({
                __a: o.__b = o.__v.__k[0]
            }),
            e.then(a, a)
        }
        ,
        nt.prototype.componentWillUnmount = function() {
            this.o = []
        }
        ,
        nt.prototype.render = function(e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div")
                      , o = this.__v.__k[0].__c;
                    this.__v.__k[0] = et(this.__b, n, o.__O = o.__P)
                }
                this.__b = null
            }
            var r = t.__a && H(V, null, e.fallback);
            return r && (r.__u &= -33),
            [H(V, null, t.__a ? null : e.children), r]
        }
        ;
        var it = function(e, t, n) {
            if (++n[1] === n[0] && e.l.delete(t),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
                for (n = e.i; n; ) {
                    for (; n.length > 3; )
                        n.pop()();
                    if (n[1] < n[0])
                        break;
                    e.i = n = n[2]
                }
        };
        (rt.prototype = new U).__a = function(e) {
            var t = this
              , n = ot(t.__v)
              , o = t.l.get(e);
            return o[0]++,
            function(r) {
                var i = function() {
                    t.props.revealOrder ? (o.push(r),
                    it(t, e, o)) : r()
                };
                n ? n(i) : i()
            }
        }
        ,
        rt.prototype.render = function(e) {
            this.i = null,
            this.l = new Map;
            var t = Q(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
                this.l.set(t[n], this.i = [1, 0, this.i]);
            return e.children
        }
        ,
        rt.prototype.componentDidUpdate = rt.prototype.componentDidMount = function() {
            var e = this;
            this.l.forEach((function(t, n) {
                it(e, n, t)
            }
            ))
        }
        ;
        var at = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , ct = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , st = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
          , lt = /[A-Z0-9]/g
          , ut = "undefined" != typeof document
          , pt = function(e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
        };
        U.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
            Object.defineProperty(U.prototype, e, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }
        ));
        var dt = S.event;
        function ft() {}
        function ht() {
            return this.cancelBubble
        }
        function At() {
            return this.defaultPrevented
        }
        S.event = function(e) {
            return dt && (e = dt(e)),
            e.persist = ft,
            e.isPropagationStopped = ht,
            e.isDefaultPrevented = At,
            e.nativeEvent = e
        }
        ;
        var Ct = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        }
          , gt = S.vnode;
        S.vnode = function(e) {
            "string" == typeof e.type && function(e) {
                var t = e.props
                  , n = e.type
                  , o = {}
                  , r = -1 === n.indexOf("-");
                for (var i in t) {
                    var a = t[i];
                    if (!("value" === i && "defaultValue"in t && null == a || ut && "children" === i && "noscript" === n || "class" === i || "className" === i)) {
                        var c = i.toLowerCase();
                        "defaultValue" === i && "value"in t && null == t.value ? i = "value" : "download" === i && !0 === a ? a = "" : "translate" === c && "no" === a ? a = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== n && "textarea" !== n || pt(t.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : st.test(i) && (i = c) : c = i = "oninput" : r && ct.test(i) ? i = i.replace(lt, "-$&").toLowerCase() : null === a && (a = void 0),
                        "oninput" === c && o[i = c] && (i = "oninputCapture"),
                        o[i] = a
                    }
                }
                "select" == n && o.multiple && Array.isArray(o.value) && (o.value = Q(t.children).forEach((function(e) {
                    e.props.selected = -1 != o.value.indexOf(e.props.value)
                }
                ))),
                "select" == n && null != o.defaultValue && (o.value = Q(t.children).forEach((function(e) {
                    e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
                }
                ))),
                t.class && !t.className ? (o.class = t.class,
                Object.defineProperty(o, "className", Ct)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className),
                e.props = o
            }(e),
            e.$$typeof = at,
            gt && gt(e)
        }
        ;
        var Tt = S.__r;
        S.__r = function(e) {
            Tt && Tt(e),
            e.__c
        }
        ;
        var yt = S.diffed;
        S.diffed = function(e) {
            yt && yt(e);
            var t = e.props
              , n = e.__e;
            null != n && "textarea" === e.type && "value"in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value)
        }
        ;
        var bt = n(960)
          , _t = n.n(bt)
          , vt = n(97)
          , St = n.n(vt)
          , Et = n(627)
          , Pt = n.n(Et)
          , It = n(368)
          , mt = n.n(It)
          , Nt = n(172)
          , Bt = n.n(Nt)
          , Ot = n(145)
          , wt = n.n(Ot)
          , Mt = n(79)
          , Rt = {};
        Rt.styleTagTransform = wt(),
        Rt.setAttributes = mt(),
        Rt.insert = Pt().bind(null, "head"),
        Rt.domAPI = St(),
        Rt.insertStyleElement = Bt(),
        _t()(Mt.A, Rt),
        Mt.A && Mt.A.locals && Mt.A.locals;
        var Gt = function() {
            return Gt = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            Gt.apply(this, arguments)
        };
        function Lt(e) {
            var t = Ve(null)
              , n = Ve(null);
            function o(t) {
                switch (e.onButtonClicked && e.onButtonClicked(t),
                t) {
                case fe.CONSENT_BANNER_BUTTON_ACCEPT:
                    e.onAcceptButtonClicked && e.onAcceptButtonClicked();
                    break;
                case fe.CONSENT_BANNER_BUTTON_REJECT:
                    e.onRejectButtonClicked && e.onRejectButtonClicked();
                    break;
                case fe.CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES:
                    e.onManagePreferencesButtonClicked && e.onManagePreferencesButtonClicked();
                    break;
                case fe.CONSENT_BANNER_BUTTON_CLOSE:
                    e.onCloseButtonClicked && e.onCloseButtonClicked()
                }
            }
            function r(e) {
                "Enter" === e.key && (e.preventDefault(),
                e.currentTarget.blur())
            }
            Fe((function() {
                Ne.mode = e.mode
            }
            ), [e.mode]),
            Fe((function() {
                Ne.locale = e.locale
            }
            ), [e.locale]),
            Fe((function() {
                for (var t = document.getElementsByClassName("rly-banner"), n = be.getTextColor(e.banner), o = be.getBackgroundColor(e.banner), r = 0; r < t.length; r++) {
                    var i = t[r];
                    i && (i.style.setProperty("--slider-color-fg", n),
                    i.style.setProperty("--slider-color-bg", o))
                }
            }
            ), [e.banner]);
            var i = e.titleEditMode || e.mode === de.EDIT
              , a = e.descriptionEditMode || e.mode === de.EDIT;
            function c(e, t) {
                return function() {
                    e && (e(),
                    setTimeout((function() {
                        (null == t ? void 0 : t.current) && function(e) {
                            e.focus();
                            var t = document.createRange()
                              , n = window.getSelection();
                            t.selectNodeContents(e),
                            t.collapse(!1),
                            null == n || n.removeAllRanges(),
                            null == n || n.addRange(t)
                        }(t.current)
                    }
                    ), 0))
                }
            }
            var s = c(e.onTitleEditToggle, t)
              , l = c(e.onDescriptionEditToggle, n)
              , u = e.buttonBarConfig || {
                mode: e.mode,
                acceptButtonEditMode: e.acceptButtonEditMode,
                rejectButtonEditMode: e.rejectButtonEditMode,
                preferenceCenterButtonEditMode: e.preferenceCenterButtonEditMode,
                onAcceptButtonEditToggle: e.onAcceptButtonEditToggle,
                onRejectButtonEditToggle: e.onRejectButtonEditToggle,
                onPreferenceCenterButtonEditToggle: e.onPreferenceCenterButtonEditToggle,
                onButtonTextChanged: e.onButtonTextChanged
            };
            return ue("div", {
                className: "rly-banner",
                style: be.getBannerStyles(e.banner, e.globalSettings),
                children: [ue("div", {
                    className: "rly-banner-content flex-[1_1_500px]",
                    children: [ue("div", {
                        className: "".concat(e.mode === de.DESIGN && e.onTitleEditToggle ? "rly-editable-field-container" : "rly-editable-field-container-no-hover", " ").concat(e.mode === de.DESIGN && e.onTitleEditToggle ? i ? "design-editable" : "design-non-editable" : ""),
                        children: [ue("div", Gt({
                            ref: t,
                            onClick: e.mode === de.DESIGN && e.onTitleEditToggle && i ? void 0 : s,
                            className: "rly-title-field",
                            contentEditable: i
                        }, i && {
                            suppressContentEditableWarning: !0
                        }, {
                            onBlur: function(t) {
                                var n = t.target.textContent || "";
                                e.onTitleChanged && e.onTitleChanged(n)
                            },
                            onKeyDown: r,
                            title: e.mode === de.DESIGN && e.onTitleEditToggle && i ? "Click to edit title" : void 0,
                            children: Ne.getTitle(e.banner)
                        })), ue("div", {
                            children: e.mode === de.DESIGN && e.onTitleEditToggle && ue("div", {
                                className: "rly-edit-button",
                                title: "Edit title",
                                children: ue(void 0, {})
                            })
                        })]
                    }), ue("div", {
                        className: "".concat(e.mode === de.DESIGN && e.onDescriptionEditToggle ? "rly-editable-field-container rly-editable-description-container" : "rly-editable-field-container-no-hover rly-editable-description-container", " ").concat(e.mode === de.DESIGN && e.onDescriptionEditToggle ? a ? "design-editable" : "design-non-editable" : ""),
                        children: [ue("div", Gt({
                            ref: n,
                            onClick: e.mode === de.DESIGN && e.onTitleEditToggle && a ? void 0 : l,
                            className: "rly-description-field",
                            contentEditable: a
                        }, a && {
                            suppressContentEditableWarning: !0
                        }, {
                            onBlur: function(t) {
                                var n = t.target.textContent || "";
                                e.onDescriptionChanged && e.onDescriptionChanged(n)
                            },
                            onKeyDown: r,
                            title: e.mode === de.DESIGN && e.onDescriptionEditToggle && a ? "Click to edit description" : void 0,
                            children: Ne.getDescription(e.banner)
                        })), e.mode === de.DESIGN && e.onDescriptionEditToggle && ue("div", {
                            className: "rly-edit-button",
                            title: "Edit description",
                            children: ue(void 0, {})
                        })]
                    })]
                }), ue("div", {
                    className: "rly-banner-actions",
                    children: e.mode === de.DESIGN && e.onDescriptionEditToggle ? Ne.getEditableButtonBar(e.banner, o, u) : Ne.getButtonBar(e.banner, o)
                }), Ne.getCloseButton(e.banner, (function() {
                    return o(fe.CONSENT_BANNER_BUTTON_CLOSE)
                }
                ))]
            })
        }
        var kt, Dt = function() {
            function t(e, t) {
                var n = this;
                this.agent = e,
                this.api = t,
                this._agentInitialized = !1,
                this.agent.addEventListener(g.RELYANCE_SERVICES_INITALIZED, (function() {
                    return n.onServicesInitialized()
                }
                )),
                this.agent.addEventListener(g.RELYANCE_AGENT_INITIALIZED, (function() {
                    return n.onAgentInitialized()
                }
                ))
            }
            return Object.defineProperty(t.prototype, "agentInitialized", {
                get: function() {
                    return this._agentInitialized
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getCookie = function(e) {
                var t = document.cookie
                  , n = "".concat(e, "=")
                  , o = t.split("; ").find((function(e) {
                    return e.startsWith(n)
                }
                ));
                return o && (o = o.substring(n.length),
                o = decodeURIComponent(o)),
                o
            }
            ,
            t.prototype.setCookie = function(t, n, o) {
                try {
                    var r = "".concat(t, "=").concat(encodeURIComponent(n), "; path=/");
                    if (void 0 !== o) {
                        var i = new Date;
                        i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3),
                        r += "; expires=".concat(i.toUTCString())
                    }
                    this.log(e.INFO, "Setting cookie [".concat(r, "].")),
                    document.cookie = r
                } catch (o) {
                    this.log(e.INFO, "[CookieInterceptor] Failed to set cookie ".concat(t, " to ").concat(n, ": ").concat(o))
                }
            }
            ,
            t.prototype.getLocationSearch = function() {
                return window.location.search
            }
            ,
            t.prototype.onServicesInitialized = function() {}
            ,
            t.prototype.onAgentInitialized = function() {
                this._agentInitialized = !0
            }
            ,
            t.prototype.log = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                this.agent.relyanceLoggerService.log(this.serviceName, e, t)
            }
            ,
            t.prototype.isElementADescendantOfElementWithId = function(e, t) {
                var n = e.target instanceof HTMLElement ? e.target : void 0;
                if (n && n.id === t)
                    return !1;
                for (; void 0 !== n; ) {
                    if (n.id === t)
                        return !0;
                    n = n.parentElement instanceof HTMLElement ? n.parentElement : void 0
                }
                return !1
            }
            ,
            t.prototype.getUrlParameterValue = function(e) {
                var t, n = this.getLocationSearch().substring(1).split("&");
                if (n.length > 0)
                    for (var o = 0; o < n.length; o++)
                        try {
                            if (n[o].startsWith(e)) {
                                e.length;
                                var r = n[o].split("=");
                                if (2 === r.length) {
                                    r[1] = decodeURIComponent(r[1]),
                                    t = r[1];
                                    break
                                }
                            }
                        } catch (e) {
                            console.error(e)
                        }
                return t
            }
            ,
            t
        }(), xt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Ht = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }, Ft = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }, Vt = function(t) {
            function n(e, n) {
                var o = t.call(this, e, n) || this;
                return o.agent = e,
                o.api = n,
                o
            }
            return xt(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceBannerService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "consentInterfaceTemplate", {
                get: function() {
                    return this._consentInterfaceTemplate
                },
                set: function(e) {
                    this._consentInterfaceTemplate = e
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getBannerContainer = function() {
                return document.getElementById("relyance-banner-container")
            }
            ,
            n.prototype.renderBanner = function() {
                return Ht(this, void 0, void 0, (function() {
                    var e, t = this;
                    return Ft(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.consentInterfaceTemplate ? [4, this.renderBannerContainer()] : [2];
                        case 1:
                            return n.sent(),
                            (e = this.getBannerContainer()) ? ("div" === e.tagName.toLowerCase() && this.consentInterfaceTemplate.banner && se(ue("div", {
                                style: {
                                    position: "fixed",
                                    bottom: "20px",
                                    left: "20px",
                                    right: "20px",
                                    pointerEvents: "auto"
                                },
                                children: ue(Lt, {
                                    mode: de.PRODUCTION,
                                    banner: this.consentInterfaceTemplate.banner,
                                    onButtonClicked: function(e) {
                                        return t.onBannerButtonClicked(e)
                                    }
                                })
                            }), e),
                            [2]) : (setTimeout((function() {
                                return t.renderBanner()
                            }
                            ), 250),
                            [2])
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.showBanner = function() {
                return Ht(this, void 0, void 0, (function() {
                    var t, n;
                    return Ft(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return this.consentInterfaceTemplate ? (t = this.agent.relyanceBehaviorsConfigService.behaviorsConfig) && t.showBanner ? (n = this.agent.relyanceConsentStorageService.readConsentFromBrowser()) && n.isDefaultConsent ? [4, this.renderBanner()] : [2] : (this.log(e.WARN, "Cannot show banner: Banner is disabled in configuration."),
                            [2]) : (this.log(e.ERROR, "Cannot show banner: consentInterfaceTemplate is not available."),
                            [2]);
                        case 1:
                            return o.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.removeBanner = function() {
                return Ht(this, void 0, void 0, (function() {
                    var e;
                    return Ft(this, (function(t) {
                        return (e = this.getBannerContainer()) && e.parentElement && e.parentElement.removeChild(e),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.onAgentInitialized = function() {
                var n = this;
                t.prototype.onAgentInitialized.call(this);
                var o = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                if (o && o.showBanner) {
                    var r = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                    r && !r.isDefaultConsent || (this.agent.relyanceGPCService.shouldHonorGPC(o.gpcIntegrationSwitch) ? this.handleGPCIntegration(o) : this.renderBanner().then((function(t) {
                        n.log(e.INFO, "Banner rendered.")
                    }
                    )))
                } else
                    this.log(e.ERROR, "Consent behaviors not loaded. Consent banner could not be rendered.")
            }
            ,
            n.prototype.handleGPCIntegration = function(e) {
                e.gpcIntegrationSwitch && (e.honorGpcSwitch ? this.handleGpcProcessingActivities(e, !1) : this.handleGpcProcessingActivities(e))
            }
            ,
            n.prototype.handleGpcProcessingActivities = function(e, t) {
                var n = this;
                if (e.gpcProcessingActivities && 0 !== e.gpcProcessingActivities.length) {
                    var o = new Map;
                    e.gpcProcessingActivities.forEach((function(r) {
                        var i = n.determineActivityConsent(r, e, t);
                        null !== i && o.set(r.id, i)
                    }
                    )),
                    o.size > 0 && this.agent.relyanceConsentStorageService.acceptOrRejectProcessingActivities(o)
                }
            }
            ,
            n.prototype.determineActivityConsent = function(e, t, n) {
                return e ? !!e.alwaysActive || (void 0 !== n ? n : !e.honorGPC && this.getConsentFromExistingOrDefault(e, t)) : null
            }
            ,
            n.prototype.getConsentFromExistingOrDefault = function(e, t) {
                var n, o = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                if (!o)
                    return C[t.consentModel];
                var r = o.consentPurposes.find((function(t) {
                    return t.purposeId === e.id
                }
                ));
                return r && null !== (n = r.checked) && void 0 !== n ? n : C[t.consentModel]
            }
            ,
            n.prototype.onBannerButtonClicked = function(e) {
                this.agent.dispatchEvent(new Ae(g.RELYANCE_BANNER_BUTTON_CLICKED,e)),
                this.destroyBanner()
            }
            ,
            n.prototype.onCloseButtonClicked = function() {
                this.destroyBanner()
            }
            ,
            n.prototype.destroyBanner = function() {
                var e = this.getBannerContainer();
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            ,
            n.prototype.renderBannerContainer = function() {
                return Ht(this, void 0, void 0, (function() {
                    var t = this;
                    return Ft(this, (function(o) {
                        return this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Rendering banner container."),
                        this.getBannerContainer() ? (this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Container already present -- aborting."),
                        [2]) : [2, new Promise((function(o) {
                            if (!document || !document.body)
                                return t.agent.relyanceLoggerService.log(t.serviceName, e.INFO, "document.body not found; auto-retry in 250ms."),
                                void setTimeout((function() {
                                    t.renderBannerContainer().then((function() {
                                        return o()
                                    }
                                    ))
                                }
                                ), 250);
                            var r = t.agent.relyanceBehaviorsConfigService.behaviorsConfig
                              , i = document.createElement("div");
                            i.id = n.RELYANCE_BANNER_CONTAINER_ID,
                            i.style.position = "fixed",
                            i.style.top = "0",
                            i.style.left = "0",
                            i.style.width = "100%",
                            i.style.height = "100%",
                            i.style.zIndex = "10000",
                            (null == r ? void 0 : r.requireInteraction) ? (i.style.pointerEvents = "auto",
                            i.style.backgroundColor = "rgba(255, 255, 255, 0.8)") : (i.style.pointerEvents = "none",
                            i.style.backgroundColor = "transparent"),
                            i.addEventListener("click", (function(e) {
                                var n = new ge(g.RELYANCE_BANNER_CONTAINER_CLICKED,e);
                                t.agent.dispatchEvent(n)
                            }
                            ), !0),
                            document.body.appendChild(i),
                            t.agent.relyanceLoggerService.log(t.serviceName, e.INFO, "Banner container rendered."),
                            o()
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            n.RELYANCE_BANNER_CONTAINER_ID = "relyance-banner-container",
            n
        }(Dt), Ut = {
            Alabama: "AL",
            Alaska: "AK",
            Arizona: "AZ",
            Arkansas: "AR",
            California: "CA",
            Colorado: "CO",
            Connecticut: "CT",
            Delaware: "DE",
            Florida: "FL",
            Georgia: "GA",
            Hawaii: "HI",
            Idaho: "ID",
            Illinois: "IL",
            Indiana: "IN",
            Iowa: "IA",
            Kansas: "KS",
            Kentucky: "KY",
            Louisiana: "LA",
            Maine: "ME",
            Maryland: "MD",
            Massachusetts: "MA",
            Michigan: "MI",
            Minnesota: "MN",
            Mississippi: "MS",
            Missouri: "MO",
            Montana: "MT",
            Nebraska: "NE",
            Nevada: "NV",
            "New Hampshire": "NH",
            "New Jersey": "NJ",
            "New Mexico": "NM",
            "New York": "NY",
            "North Carolina": "NC",
            "North Dakota": "ND",
            Ohio: "OH",
            Oklahoma: "OK",
            Oregon: "OR",
            Pennsylvania: "PA",
            "Rhode Island": "RI",
            "South Carolina": "SC",
            "South Dakota": "SD",
            Tennessee: "TN",
            Texas: "TX",
            Utah: "UT",
            Vermont: "VT",
            Virginia: "VA",
            Washington: "WA",
            "West Virginia": "WV",
            Wisconsin: "WI",
            Wyoming: "WY"
        }, Wt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), jt = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }, Kt = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }, Xt = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var o, r = 0, i = t.length; r < i; r++)
                    !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)),
                    o[r] = t[r]);
            return e.concat(o || Array.prototype.slice.call(t))
        }, Yt = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._behaviors = [],
                e._behaviorsLoaded = !1,
                e
            }
            return Wt(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceBehaviorsConfigService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "behaviorsConfig", {
                get: function() {
                    return this._behaviorsConfig
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "behaviorsConfigJson", {
                get: function() {
                    return this._behaviorsConfigJson
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "behaviors", {
                get: function() {
                    return this._behaviors
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "behaviorsLoaded", {
                get: function() {
                    return this._behaviorsLoaded
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "bestMatchingLocationName", {
                get: function() {
                    return this._bestMatchingLocationName
                },
                set: function(e) {
                    this._bestMatchingLocationName = e
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getBestMatchingBehaviorConfig = function(t) {
                return jt(this, void 0, void 0, (function() {
                    var n, o, r, i, a, c, s, l, u, p;
                    return Kt(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return f.trys.push([0, 2, , 3]),
                            [4, this.fetchBehaviorsConfig()];
                        case 1:
                            for (f.sent(),
                            n = null,
                            o = this.behaviorsConfigJson,
                            r = 0,
                            i = Object.entries(o); r < i.length; r++) {
                                a = i[r],
                                c = a[0],
                                s = a[1];
                                try {
                                    (l = this.calculateGroupScore(s.locations, t)) > 0 && (!n || l > n.score) && (n = {
                                        score: l,
                                        regionGroup: c
                                    })
                                } catch (t) {
                                    this.log(e.WARN, "Skipping region group '".concat(c, "':"), t)
                                }
                            }
                            return n || (this.log(e.INFO, "Falling back to default region group"),
                            n = {
                                score: 0,
                                regionGroup: d
                            }),
                            this._bestMatchingLocationName = n.regionGroup,
                            this.behaviorsConfigJson && this.behaviorsConfigJson[n.regionGroup] && (u = this.behaviorsConfigJson[n.regionGroup],
                            this._behaviorsConfig = u.behaviors),
                            this._behaviorsLoaded = !0,
                            this.log(e.INFO, "Selected region group '".concat(n.regionGroup, "' with score ").concat(n.score)),
                            this.agent.dispatchEvent(new _(g.RELYANCE_BEHAVIOR_CONFIGS_LOADED)),
                            [2, n];
                        case 2:
                            return p = f.sent(),
                            this.log(e.ERROR, "Error fetching behaviors config:", p),
                            [2, null];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.getTenantFromBehaviorsConfig = function() {
                return jt(this, void 0, void 0, (function() {
                    return Kt(this, (function(e) {
                        return this.behaviorsConfigJson && this.behaviorsConfigJson[this._bestMatchingLocationName || d] ? [2, this.behaviorsConfigJson[this._bestMatchingLocationName || d].tenant] : [2, ""]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.getDomainFromBehaviorsConfig = function() {
                var e;
                return this.behaviorsConfigJson && this.behaviorsConfigJson[this._bestMatchingLocationName || d] && null !== (e = this.behaviorsConfigJson[this._bestMatchingLocationName || d].domainName) && void 0 !== e ? e : ""
            }
            ,
            n.prototype.fetchBehaviorsConfig = function() {
                return jt(this, void 0, void 0, (function() {
                    var t = this;
                    return Kt(this, (function(n) {
                        try {
                            return this.behaviorsLoaded ? [2, Xt([], this.behaviors, !0)] : (this._fetchBehaviorsConfigPromise || (this._fetchBehaviorsConfigPromise = new Promise((function(n) {
                                return jt(t, void 0, void 0, (function() {
                                    var t, o, r, i;
                                    return Kt(this, (function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.DOMAIN_BEHAVIOURS)];
                                        case 1:
                                            return t = a.sent(),
                                            o = t.results,
                                            r = o.reduce((function(e, t) {
                                                return e[t.regionName] = t,
                                                e
                                            }
                                            ), {}),
                                            this._behaviorsConfigJson = r,
                                            i = this.behaviorsConfigJson ? Object.values(this.behaviorsConfigJson) : [],
                                            this._behaviors = i,
                                            this.log(e.INFO, "Behaviors config fetched", this.behaviors),
                                            this._behaviorsLoaded = !0,
                                            this.agent.dispatchEvent(new _(g.RELYANCE_BEHAVIOR_CONFIGS_LOADED)),
                                            n(Xt([], this.behaviors, !0)),
                                            this._fetchBehaviorsConfigPromise = void 0,
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))),
                            [2, this._fetchBehaviorsConfigPromise])
                        } catch (t) {
                            return this.log(e.ERROR, "Error fetching behaviors config:", t),
                            [2, []]
                        }
                        return [2]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.getConsentModel = function() {
                return jt(this, void 0, void 0, (function() {
                    var e, t;
                    return Kt(this, (function(n) {
                        return [2, null !== (t = null === (e = this._behaviorsConfig) || void 0 === e ? void 0 : e.consentModel) && void 0 !== t ? t : a.ConsentModelOptionsOptOut]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.getConsentModelImmediate = function() {
                return this._behaviorsConfig && this._behaviorsConfig.consentModel ? this._behaviorsConfig.consentModel : a.ConsentModelOptionsOptOut
            }
            ,
            n.prototype.getConsentVendorOption = function() {
                return this.agent.forceAlwaysAllowVendorOptions ? s.VendorDiscoveredOptionsAlwaysAllow : this._behaviorsConfig && this._behaviorsConfig.vendorOption ? this._behaviorsConfig.vendorOption : s.VendorDiscoveredOptionsNeverAllow
            }
            ,
            n.prototype.calculateGroupScore = function(e, t) {
                for (var n = 0, o = 0, r = e; o < r.length; o++) {
                    var i = r[o]
                      , a = 0
                      , c = 0;
                    if (i.countryCode && t.country && i.countryCode === t.country && (a += 2,
                    c++),
                    i.state && Array.isArray(i.state) && t.state) {
                        var s = i.state.map((function(e) {
                            return Ut[e] || e
                        }
                        ))
                          , l = Ut[t.state] || t.state;
                        s.includes(l) && (a += 3,
                        c++)
                    }
                    2 === c && (a += 3),
                    a > n && (n = a)
                }
                return n
            }
            ,
            n.prototype.locationMatches = function(e, t) {
                return !(e.continent && e.continent !== t.continent || e.country && e.country !== t.country)
            }
            ,
            n
        }(Dt), zt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Zt = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.consentStatus = n,
                o
            }
            return zt(t, e),
            t
        }(_), Qt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Jt = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.type = t,
                o.preferencecenterButton = n,
                o
            }
            return Qt(t, e),
            t
        }(_), qt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), $t = function(e) {
            function t(t, n, o) {
                var r = e.call(this, t) || this;
                return r.type = t,
                r.purposeId = n,
                r.checked = o,
                r
            }
            return qt(t, e),
            t
        }(_), en = n(733), tn = {};
        tn.styleTagTransform = wt(),
        tn.setAttributes = mt(),
        tn.insert = Pt().bind(null, "head"),
        tn.domAPI = St(),
        tn.insertStyleElement = Bt(),
        _t()(en.A, tn),
        en.A && en.A.locals && en.A.locals,
        function(e) {
            e.CONSENT_PREFERENCE_CENTER_BUTTON_ACCEPT_ALL = "CONSENT_PREFERENCE_CENTER_BUTTON_ACCEPT_ALL",
            e.CONSENT_PREFERENCE_CENTER_BUTTON_REJECT_ALL = "CONSENT_PREFERENCE_CENTER_BUTTON_REJECT_ALL",
            e.CONSENT_PREFERENCE_CENTER_BUTTON_CLOSE = "CONSENT_PREFERENCE_CENTER_BUTTON_CLOSE",
            e.CONSENT_PREFERENCE_CENTER_BUTTON_SAVE = "CONSENT_PREFERENCE_CENTER_BUTTON_SAVE"
        }(kt || (kt = {}));
        var nn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , on = new (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return nn(t, e),
            t.prototype.getPreferenceCenterStyles = function(e, t) {
                var n = this.getDefaultPreferenceCenterStyles();
                return n.backgroundColor = this.getBackgroundColor(e),
                n.color = this.getTextColor(e),
                n.fontFamily = this.getFontFamily(t),
                n.borderColor = this.getBackgroundColor(e),
                n.borderRadius = "8px",
                n.borderStyle = "solid",
                n
            }
            ,
            t.prototype.getBackgroundColor = function(e) {
                var t = "";
                return e && e.backgroundColor && (t = e.backgroundColor),
                t
            }
            ,
            t.prototype.getTextColor = function(e) {
                var t = "";
                return e && e.textColor && (t = e.textColor),
                t
            }
            ,
            t.prototype.getBorderColor = function(e) {
                return this.getTextColor(e)
            }
            ,
            t.prototype.getDefaultPreferenceCenterStyles = function() {
                return {
                    padding: "30px"
                }
            }
            ,
            t
        }(Te));
        function rn() {
            return ue("div", {
                children: ue("svg", {
                    width: "88",
                    height: "30",
                    viewBox: "0 0 88 30",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [ue("g", {
                        "clip-path": "url(#clip0_3838_11263)",
                        children: [ue("path", {
                            d: "M7.22713 14.4982V17.498C7.22713 17.7737 7.45689 17.9972 7.74035 17.9972H9.2815C10.0304 17.9972 10.7331 18.1916 11.3374 18.5327C11.9625 18.8839 12.4831 19.3904 12.8427 19.997C13.1933 20.5848 13.3932 21.2683 13.3932 21.9968C13.3932 22.7253 13.1933 23.4089 12.8427 23.9966C12.4816 24.6033 11.961 25.1097 11.3374 25.4609C10.7316 25.802 10.0304 25.9965 9.2815 25.9965C8.53256 25.9965 7.83136 25.802 7.22564 25.4609C6.60053 25.1097 6.07985 24.6033 5.7203 23.9966C5.3697 23.4089 5.16979 22.7253 5.16979 21.9968V20.4962C5.16979 20.2205 4.94003 19.997 4.65657 19.997H1.57279C1.28932 19.997 1.05957 20.2205 1.05957 20.4962V23.496C1.05957 23.7717 1.28932 23.9952 1.57279 23.9952C4.69536 23.9952 7.22713 26.458 7.22713 29.4954C7.22713 29.7711 7.45689 29.9946 7.74035 29.9946H10.8241C11.1076 29.9946 11.3374 29.7711 11.3374 29.4954C11.3374 26.458 13.8691 23.9952 16.9917 23.9952C17.2752 23.9952 17.5049 23.7717 17.5049 23.496V20.4962C17.5049 20.2205 17.2752 19.997 16.9917 19.997C13.8691 19.997 11.3374 17.5342 11.3374 14.4968C11.3374 14.2196 11.1076 13.9961 10.8241 13.9961H7.74035C7.45689 13.9961 7.22713 14.2196 7.22713 14.4953V14.4982Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M30.6576 18.1699C29.5282 18.1743 28.6212 18.54 27.9602 19.2569C27.3068 19.9666 26.9756 20.9244 26.9756 22.1072C26.9756 23.2899 27.3277 24.2942 28.0229 24.9937C28.7211 25.6946 29.6998 26.0502 30.9366 26.0502C31.9854 26.0502 32.9059 25.8165 33.6713 25.3565L33.8205 25.2665L33.4729 23.5686L33.17 23.7355C32.4792 24.1157 31.7497 24.3087 31.0023 24.3087C30.4473 24.3087 30.0265 24.1549 29.7177 23.8399C29.4536 23.57 29.294 23.1941 29.2448 22.7181H34.0696V22.4729C34.0696 22.396 34.0696 22.2769 34.0726 22.1159C34.0741 21.9519 34.0756 21.8314 34.0756 21.7589C34.0756 20.6922 33.7742 19.8214 33.1804 19.1684C32.5792 18.5066 31.7303 18.1714 30.6576 18.1714V18.1699ZM29.2612 21.3075C29.3268 20.9055 29.4686 20.595 29.6864 20.3816C29.9475 20.1262 30.2593 20.0014 30.6397 20.0014C31.044 20.0014 31.3484 20.1248 31.5692 20.3802C31.7601 20.5993 31.8735 20.9113 31.9049 21.3075H29.2597H29.2612Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M37.4575 15.8555H35.2002V26.1709H37.4575V15.8555Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M44.3884 18.3271L44.3303 18.4926C44.281 18.6304 44.0095 19.3952 43.5157 20.787C43.1979 21.6824 42.9502 22.4022 42.7772 22.9392L41.057 18.3257H38.6416L41.6866 25.5558C42.0521 26.7008 38.6595 26.9141 38.6595 26.9141L39.3398 28.5337C39.3398 28.5337 42.719 28.6078 43.6022 26.5368C43.6291 26.473 45.5342 21.5721 46.6681 18.658L46.7979 18.3242H44.3899L44.3884 18.3271Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M50.2526 18.2402C49.2142 18.2402 47.7163 18.7191 47.7163 18.7191L46.9525 20.7683C46.9525 20.7683 48.2564 20.018 50.1004 19.9556C50.448 19.944 50.7031 20.0311 50.8583 20.1791C51.012 20.3271 51.091 20.584 51.091 20.9454V21.0992C51.0179 21.1064 50.9374 21.1137 50.8478 21.121C50.6449 21.1384 50.4629 21.1558 50.3003 21.1732C50.1377 21.1906 49.987 21.208 49.8557 21.224C48.8054 21.3227 48.0013 21.5665 47.4657 21.9467C46.8988 22.3502 46.6123 22.9684 46.6123 23.784C46.6123 24.5386 46.854 25.1308 47.3299 25.5415C47.7984 25.9449 48.413 26.151 49.1575 26.151C49.6931 26.151 50.1601 26.061 50.5435 25.884C50.8195 25.7562 51.1015 25.5763 51.3834 25.3441C51.3909 25.3659 51.3984 25.3891 51.4073 25.4123C51.5267 25.7562 51.5476 25.8201 51.549 25.8274L51.5983 26.0131H53.3513V21.1311C53.3513 20.1341 53.0976 19.3954 52.5964 18.9325C52.0981 18.4739 51.3118 18.2402 50.257 18.2402H50.2526ZM51.0895 23.6621C50.9791 23.8667 50.8031 24.0452 50.5644 24.1947C50.3078 24.3558 50.0004 24.4371 49.6483 24.4371C49.3783 24.4371 49.1739 24.3776 49.0411 24.2586C48.9128 24.1454 48.8517 23.977 48.8517 23.7448C48.8517 23.3878 48.9695 23.1513 49.2246 22.9974C49.5156 22.8218 49.9975 22.7028 50.6539 22.6462C50.6793 22.6462 50.7509 22.6404 51.0149 22.6201C51.0418 22.6186 51.0672 22.6157 51.091 22.6143V23.6621H51.0895Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M58.71 18.3105C57.876 18.3105 57.1002 18.5935 56.399 19.1523L56.2543 18.4832H54.4014V26.0123H56.6586V22.3073C56.6586 21.6499 56.6959 21.1564 56.769 20.8401C56.8884 20.6064 57.0734 20.4163 57.3345 20.2581C57.6045 20.0941 57.8939 20.0129 58.2207 20.0129C58.6086 20.0129 58.8622 20.1144 58.9979 20.3263C59.1546 20.5701 59.2367 20.9591 59.2396 21.4815V26.0138H61.4969V21.3161C61.4969 20.3626 61.2642 19.6181 60.8032 19.1029C60.3332 18.5776 59.629 18.3105 58.71 18.3105Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M66.5046 20.0033C66.979 20.0033 67.5057 20.1485 68.0696 20.4344L68.3337 20.5679L68.9021 18.9004L68.7335 18.7973C68.1054 18.4171 67.3326 18.2227 66.433 18.2227C65.3006 18.2227 64.3712 18.571 63.6715 19.2588C62.9717 19.9453 62.6182 20.9162 62.6182 22.141C62.6182 23.3659 62.9553 24.3919 63.6207 25.0827C64.2906 25.7778 65.2305 26.1305 66.4151 26.1305C66.8865 26.1305 67.3028 26.0841 67.6504 25.9926C68.004 25.8998 68.3486 25.7459 68.6753 25.5326L68.8051 25.4484L68.5694 23.6242L68.2322 23.8346C67.6877 24.1742 67.1133 24.3455 66.527 24.3455C65.9929 24.3455 65.593 24.1728 65.3066 23.8187C65.0097 23.4515 64.859 22.8928 64.859 22.1599C64.859 21.427 65.0112 20.8857 65.3111 20.5229C65.602 20.1717 65.9929 20.0004 66.5061 20.0004L66.5046 20.0033Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M75.7512 19.1557C75.147 18.491 74.2951 18.1543 73.2179 18.1543C72.0856 18.1587 71.174 18.5258 70.5116 19.2442C69.8552 19.9553 69.5225 20.9189 69.5225 22.1046C69.5225 23.2903 69.876 24.2989 70.5743 25.0013C71.274 25.7051 72.2586 26.0621 73.4984 26.0621C74.5517 26.0621 75.4752 25.8285 76.2435 25.3655L76.3927 25.2756L76.0436 23.5718L75.7393 23.7401C75.0455 24.1218 74.313 24.3163 73.5641 24.3163C73.0061 24.3163 72.5854 24.1625 72.275 23.8461C72.0095 23.5747 71.8498 23.1974 71.7991 22.7199H76.6419V22.4732C76.6419 22.3963 76.6419 22.2773 76.6449 22.1148C76.6463 21.9493 76.6478 21.8303 76.6478 21.7563C76.6478 20.6867 76.3465 19.8116 75.7497 19.1557H75.7512ZM71.8856 21.3079C71.9513 20.9059 72.093 20.5953 72.3108 20.382C72.5719 20.1265 72.8837 20.0017 73.2642 20.0017C73.6685 20.0017 73.9728 20.1251 74.1936 20.3805C74.3846 20.5996 74.498 20.9117 74.5293 21.3079H71.8842H71.8856Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M25.3366 18.2266C24.5175 18.2266 23.8446 18.5008 23.3299 19.0422L23.1688 18.2614H21.1846V26.162H23.5045V21.8997C23.5045 21.3555 23.6462 20.9302 23.9252 20.6356C24.1997 20.3468 24.6354 20.2003 25.2187 20.2003C25.4022 20.2003 25.5797 20.2133 25.7498 20.238L26.0437 20.2815L26.9836 18.5299C26.9836 18.5299 26.1705 18.2295 25.3351 18.2295L25.3366 18.2266Z",
                            fill: "white"
                        }), ue("path", {
                            d: "M81.5046 18.1113C80.4573 18.1113 79.0101 18.3058 79.0101 18.3058L78.297 20.3521C78.297 20.3521 79.6203 19.8557 81.3494 19.863C81.7 19.8644 81.9567 19.9399 82.1133 20.0908C82.2685 20.2418 82.3475 20.5044 82.3475 20.8731V21.0298C82.2744 21.037 82.1924 21.0443 82.1029 21.0516C81.8985 21.069 81.715 21.0878 81.5509 21.1053C81.3867 21.1227 81.2346 21.1415 81.1018 21.1575C80.0425 21.2591 79.2324 21.5072 78.6938 21.8947C78.1224 22.3069 77.833 22.9382 77.833 23.7712C77.833 24.5433 78.0762 25.147 78.5566 25.5664C79.028 25.9785 79.6472 26.189 80.3976 26.189C80.9377 26.189 81.4076 26.0975 81.794 25.9161C82.0715 25.7855 82.355 25.6012 82.64 25.3661C82.6474 25.3879 82.6549 25.4111 82.6638 25.4358C82.7832 25.787 82.8041 25.8523 82.807 25.8595L82.8563 26.0496H84.6227V21.0632C84.6227 20.0458 84.3661 19.2897 83.8618 18.8181C83.3605 18.3493 82.5668 18.1113 81.5046 18.1113ZM82.3475 23.6914C82.2356 23.9004 82.0551 24.0832 81.8104 24.2356C81.5494 24.3996 81.2346 24.4823 80.875 24.4823C80.599 24.4823 80.3901 24.4214 80.2544 24.3009C80.1231 24.1848 80.0604 24.0135 80.0604 23.777C80.0604 23.4127 80.1813 23.1704 80.4409 23.0136C80.7378 22.8337 81.2301 22.7132 81.9015 22.6552C81.9283 22.6552 81.9999 22.6494 82.27 22.6276C82.2968 22.6262 82.3237 22.6233 82.3475 22.6218V23.6914Z",
                            fill: "#0B7DFF"
                        }), ue("path", {
                            d: "M87.924 18.2188H85.71V26.234H87.924V18.2188Z",
                            fill: "#0B7DFF"
                        }), ue("path", {
                            d: "M86.8841 15.5781H86.7498C86.1755 15.5781 85.71 16.031 85.71 16.5896V16.5911C85.71 17.1497 86.1755 17.6026 86.7498 17.6026H86.8841C87.4584 17.6026 87.924 17.1497 87.924 16.5911V16.5896C87.924 16.031 87.4584 15.5781 86.8841 15.5781Z",
                            fill: "#0B7DFF"
                        })]
                    }), ue("path", {
                        d: "M2.35059 4.44434H1.25195V3.81152H2.35059C2.53027 3.81152 2.67578 3.78223 2.78711 3.72363C2.90039 3.66309 2.9834 3.58105 3.03613 3.47754C3.08887 3.37207 3.11523 3.25195 3.11523 3.11719C3.11523 2.98633 3.08887 2.86426 3.03613 2.75098C2.9834 2.6377 2.90039 2.5459 2.78711 2.47559C2.67578 2.40527 2.53027 2.37012 2.35059 2.37012H1.51562V6H0.709961V1.73438H2.35059C2.68262 1.73438 2.96582 1.79395 3.2002 1.91309C3.43652 2.03027 3.61621 2.19336 3.73926 2.40234C3.86426 2.60938 3.92676 2.8457 3.92676 3.11133C3.92676 3.38672 3.86426 3.62402 3.73926 3.82324C3.61621 4.02246 3.43652 4.17578 3.2002 4.2832C2.96582 4.39062 2.68262 4.44434 2.35059 4.44434ZM4.32227 4.44727V4.38574C4.32227 4.15332 4.35547 3.93945 4.42188 3.74414C4.48828 3.54688 4.58496 3.37598 4.71191 3.23145C4.83887 3.08691 4.99414 2.97461 5.17773 2.89453C5.36133 2.8125 5.57031 2.77148 5.80469 2.77148C6.04297 2.77148 6.25391 2.8125 6.4375 2.89453C6.62305 2.97461 6.7793 3.08691 6.90625 3.23145C7.0332 3.37598 7.12988 3.54688 7.19629 3.74414C7.2627 3.93945 7.2959 4.15332 7.2959 4.38574V4.44727C7.2959 4.67773 7.2627 4.8916 7.19629 5.08887C7.12988 5.28418 7.0332 5.45508 6.90625 5.60156C6.7793 5.74609 6.62402 5.8584 6.44043 5.93848C6.25684 6.01855 6.04688 6.05859 5.81055 6.05859C5.57617 6.05859 5.36621 6.01855 5.18066 5.93848C4.99512 5.8584 4.83887 5.74609 4.71191 5.60156C4.58496 5.45508 4.48828 5.28418 4.42188 5.08887C4.35547 4.8916 4.32227 4.67773 4.32227 4.44727ZM5.0957 4.38574V4.44727C5.0957 4.58594 5.10938 4.71582 5.13672 4.83691C5.16406 4.95801 5.20605 5.06445 5.2627 5.15625C5.31934 5.24805 5.39258 5.32031 5.48242 5.37305C5.57422 5.42383 5.68359 5.44922 5.81055 5.44922C5.93555 5.44922 6.04297 5.42383 6.13281 5.37305C6.22266 5.32031 6.2959 5.24805 6.35254 5.15625C6.41113 5.06445 6.4541 4.95801 6.48145 4.83691C6.50879 4.71582 6.52246 4.58594 6.52246 4.44727V4.38574C6.52246 4.24902 6.50879 4.12109 6.48145 4.00195C6.4541 3.88086 6.41113 3.77441 6.35254 3.68262C6.2959 3.58887 6.22168 3.51562 6.12988 3.46289C6.04004 3.4082 5.93164 3.38086 5.80469 3.38086C5.67969 3.38086 5.57227 3.4082 5.48242 3.46289C5.39258 3.51562 5.31934 3.58887 5.2627 3.68262C5.20605 3.77441 5.16406 3.88086 5.13672 4.00195C5.10938 4.12109 5.0957 4.24902 5.0957 4.38574ZM8.74023 5.23828L9.43457 2.83008H9.92676L9.78027 3.66211L9.08008 6H8.65527L8.74023 5.23828ZM8.35645 2.83008L8.87793 5.24414L8.9248 6H8.43555L7.60352 2.83008H8.35645ZM10.5713 5.20898L11.0811 2.83008H11.8311L11.0049 6H10.5156L10.5713 5.20898ZM10.0029 2.83008L10.6914 5.21484L10.7822 6H10.3574L9.65137 3.66211L9.50781 2.83008H10.0029ZM13.7119 6.05859C13.4717 6.05859 13.2559 6.01953 13.0645 5.94141C12.873 5.86328 12.71 5.75488 12.5752 5.61621C12.4424 5.47559 12.3398 5.3125 12.2676 5.12695C12.1973 4.93945 12.1621 4.73828 12.1621 4.52344V4.40625C12.1621 4.16211 12.1973 3.94043 12.2676 3.74121C12.3379 3.54004 12.4375 3.36719 12.5664 3.22266C12.6953 3.07812 12.8496 2.9668 13.0293 2.88867C13.209 2.81055 13.4072 2.77148 13.624 2.77148C13.8486 2.77148 14.0469 2.80957 14.2188 2.88574C14.3906 2.95996 14.5342 3.06543 14.6494 3.20215C14.7646 3.33887 14.8516 3.50293 14.9102 3.69434C14.9688 3.88379 14.998 4.09375 14.998 4.32422V4.64941H12.5137V4.11621H14.2363V4.05762C14.2324 3.93457 14.209 3.82227 14.166 3.7207C14.123 3.61719 14.0566 3.53516 13.9668 3.47461C13.877 3.41211 13.7607 3.38086 13.6182 3.38086C13.5029 3.38086 13.4023 3.40625 13.3164 3.45703C13.2324 3.50586 13.1621 3.57617 13.1055 3.66797C13.0508 3.75781 13.0098 3.86523 12.9824 3.99023C12.9551 4.11523 12.9414 4.25391 12.9414 4.40625V4.52344C12.9414 4.65625 12.959 4.7793 12.9941 4.89258C13.0312 5.00586 13.085 5.10449 13.1553 5.18848C13.2275 5.27051 13.3135 5.33496 13.4131 5.38184C13.5146 5.42676 13.6299 5.44922 13.7588 5.44922C13.9209 5.44922 14.0674 5.41797 14.1982 5.35547C14.3311 5.29102 14.4463 5.19629 14.5439 5.07129L14.9336 5.47559C14.8672 5.57324 14.7773 5.66699 14.6641 5.75684C14.5527 5.84668 14.418 5.91992 14.2598 5.97656C14.1016 6.03125 13.9189 6.05859 13.7119 6.05859ZM16.29 3.47754V6H15.5166V2.83008H16.249L16.29 3.47754ZM17.2539 2.80957L17.2422 3.53027C17.1992 3.52246 17.1504 3.5166 17.0957 3.5127C17.043 3.50879 16.9932 3.50684 16.9463 3.50684C16.8271 3.50684 16.7227 3.52344 16.6328 3.55664C16.543 3.58789 16.4678 3.63379 16.4072 3.69434C16.3486 3.75488 16.3037 3.8291 16.2725 3.91699C16.2412 4.00293 16.2236 4.10059 16.2197 4.20996L16.0527 4.18945C16.0527 3.98828 16.0732 3.80176 16.1143 3.62988C16.1553 3.45801 16.2148 3.30762 16.293 3.17871C16.3711 3.0498 16.4688 2.9502 16.5859 2.87988C16.7051 2.80762 16.8418 2.77148 16.9961 2.77148C17.0391 2.77148 17.085 2.77539 17.1338 2.7832C17.1846 2.78906 17.2246 2.79785 17.2539 2.80957ZM19.0439 6.05859C18.8037 6.05859 18.5879 6.01953 18.3965 5.94141C18.2051 5.86328 18.042 5.75488 17.9072 5.61621C17.7744 5.47559 17.6719 5.3125 17.5996 5.12695C17.5293 4.93945 17.4941 4.73828 17.4941 4.52344V4.40625C17.4941 4.16211 17.5293 3.94043 17.5996 3.74121C17.6699 3.54004 17.7695 3.36719 17.8984 3.22266C18.0273 3.07812 18.1816 2.9668 18.3613 2.88867C18.541 2.81055 18.7393 2.77148 18.9561 2.77148C19.1807 2.77148 19.3789 2.80957 19.5508 2.88574C19.7227 2.95996 19.8662 3.06543 19.9814 3.20215C20.0967 3.33887 20.1836 3.50293 20.2422 3.69434C20.3008 3.88379 20.3301 4.09375 20.3301 4.32422V4.64941H17.8457V4.11621H19.5684V4.05762C19.5645 3.93457 19.541 3.82227 19.498 3.7207C19.4551 3.61719 19.3887 3.53516 19.2988 3.47461C19.209 3.41211 19.0928 3.38086 18.9502 3.38086C18.835 3.38086 18.7344 3.40625 18.6484 3.45703C18.5645 3.50586 18.4941 3.57617 18.4375 3.66797C18.3828 3.75781 18.3418 3.86523 18.3145 3.99023C18.2871 4.11523 18.2734 4.25391 18.2734 4.40625V4.52344C18.2734 4.65625 18.291 4.7793 18.3262 4.89258C18.3633 5.00586 18.417 5.10449 18.4873 5.18848C18.5596 5.27051 18.6455 5.33496 18.7451 5.38184C18.8467 5.42676 18.9619 5.44922 19.0908 5.44922C19.2529 5.44922 19.3994 5.41797 19.5303 5.35547C19.6631 5.29102 19.7783 5.19629 19.876 5.07129L20.2656 5.47559C20.1992 5.57324 20.1094 5.66699 19.9961 5.75684C19.8848 5.84668 19.75 5.91992 19.5918 5.97656C19.4336 6.03125 19.251 6.05859 19.0439 6.05859ZM22.75 5.32617V1.5H23.5293V6H22.8262L22.75 5.32617ZM20.7139 4.45312V4.3916C20.7139 4.14941 20.7412 3.92969 20.7959 3.73242C20.8525 3.5332 20.9346 3.3623 21.042 3.21973C21.1494 3.07715 21.2793 2.9668 21.4316 2.88867C21.5859 2.81055 21.7607 2.77148 21.9561 2.77148C22.1455 2.77148 22.3105 2.80957 22.4512 2.88574C22.5938 2.96191 22.7148 3.07031 22.8145 3.21094C22.916 3.35156 22.9971 3.51855 23.0576 3.71191C23.1182 3.90332 23.1621 4.11426 23.1895 4.34473V4.51172C23.1621 4.73633 23.1182 4.94238 23.0576 5.12988C22.9971 5.31738 22.916 5.48145 22.8145 5.62207C22.7148 5.76074 22.5938 5.86816 22.4512 5.94434C22.3086 6.02051 22.1416 6.05859 21.9502 6.05859C21.7568 6.05859 21.583 6.01855 21.4287 5.93848C21.2764 5.8584 21.1465 5.74609 21.0391 5.60156C20.9336 5.45703 20.8525 5.28711 20.7959 5.0918C20.7412 4.89648 20.7139 4.68359 20.7139 4.45312ZM21.4902 4.3916V4.45312C21.4902 4.58984 21.502 4.71777 21.5254 4.83691C21.5488 4.95605 21.5869 5.06152 21.6396 5.15332C21.6924 5.24316 21.7598 5.31348 21.8418 5.36426C21.9258 5.41504 22.0273 5.44043 22.1465 5.44043C22.2988 5.44043 22.4238 5.40723 22.5215 5.34082C22.6211 5.27246 22.6982 5.17969 22.7529 5.0625C22.8076 4.94336 22.8428 4.80957 22.8584 4.66113V4.20117C22.8506 4.08398 22.8301 3.97559 22.7969 3.87598C22.7656 3.77637 22.7207 3.69043 22.6621 3.61816C22.6055 3.5459 22.5352 3.48926 22.4512 3.44824C22.3672 3.40723 22.2676 3.38672 22.1523 3.38672C22.0332 3.38672 21.9316 3.41309 21.8477 3.46582C21.7637 3.5166 21.6953 3.58789 21.6426 3.67969C21.5898 3.77148 21.5508 3.87793 21.5254 3.99902C21.502 4.12012 21.4902 4.25098 21.4902 4.3916ZM25.7207 1.5H26.4971V5.2998L26.4209 6H25.7207V1.5ZM28.5361 4.38281V4.44434C28.5361 4.68066 28.5098 4.89746 28.457 5.09473C28.4062 5.29199 28.3291 5.46289 28.2256 5.60742C28.1221 5.75 27.9932 5.86133 27.8389 5.94141C27.6865 6.01953 27.5078 6.05859 27.3027 6.05859C27.1074 6.05859 26.9375 6.02051 26.793 5.94434C26.6504 5.86816 26.5303 5.76074 26.4326 5.62207C26.335 5.48145 26.2568 5.31641 26.1982 5.12695C26.1396 4.93555 26.0957 4.72656 26.0664 4.5V4.33301C26.0957 4.10449 26.1396 3.89551 26.1982 3.70605C26.2568 3.5166 26.335 3.35156 26.4326 3.21094C26.5303 3.07031 26.6504 2.96191 26.793 2.88574C26.9355 2.80957 27.1035 2.77148 27.2969 2.77148C27.5039 2.77148 27.6846 2.81152 27.8389 2.8916C27.9951 2.96973 28.124 3.08105 28.2256 3.22559C28.3291 3.36816 28.4062 3.53809 28.457 3.73535C28.5098 3.93066 28.5361 4.14648 28.5361 4.38281ZM27.7598 4.44434V4.38281C27.7598 4.24805 27.749 4.12109 27.7275 4.00195C27.7061 3.88086 27.6709 3.77441 27.6221 3.68262C27.5732 3.59082 27.5068 3.51855 27.4229 3.46582C27.3389 3.41309 27.2334 3.38672 27.1064 3.38672C26.9854 3.38672 26.8818 3.40723 26.7959 3.44824C26.7119 3.48926 26.6416 3.5459 26.585 3.61816C26.5303 3.69043 26.4873 3.77539 26.4561 3.87305C26.4268 3.9707 26.4072 4.07617 26.3975 4.18945V4.64648C26.4111 4.79688 26.4434 4.93262 26.4941 5.05371C26.5449 5.17285 26.6201 5.26758 26.7197 5.33789C26.8213 5.4082 26.9521 5.44336 27.1123 5.44336C27.2373 5.44336 27.3418 5.41895 27.4258 5.37012C27.5098 5.31934 27.5762 5.24902 27.625 5.15918C27.6738 5.06738 27.708 4.96094 27.7275 4.83984C27.749 4.71875 27.7598 4.58691 27.7598 4.44434ZM29.9922 5.64844L30.8418 2.83008H31.6709L30.3994 6.48047C30.3701 6.55859 30.332 6.64355 30.2852 6.73535C30.2402 6.82715 30.1797 6.91406 30.1035 6.99609C30.0273 7.08008 29.9316 7.14844 29.8164 7.20117C29.7031 7.25391 29.5654 7.28027 29.4033 7.28027C29.333 7.28027 29.2705 7.27539 29.2158 7.26562C29.1611 7.25586 29.1035 7.24316 29.043 7.22754V6.64746C29.0625 6.64941 29.085 6.65039 29.1104 6.65039C29.1377 6.65234 29.1611 6.65332 29.1807 6.65332C29.2939 6.65332 29.3877 6.63965 29.4619 6.6123C29.5361 6.58691 29.5957 6.54492 29.6406 6.48633C29.6875 6.42969 29.7266 6.35547 29.7578 6.26367L29.9922 5.64844ZM29.5732 2.83008L30.291 5.16504L30.417 5.98242L29.8838 6.0791L28.7383 2.83008H29.5732Z",
                        fill: "white"
                    }), ue("defs", {
                        children: ue("clipPath", {
                            id: "clip0_3838_11263",
                            children: ue("rect", {
                                width: "86.8636",
                                height: "16",
                                fill: "white",
                                transform: "translate(1.05957 14)"
                            })
                        })
                    })]
                })
            })
        }
        var an = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , cn = function() {
            return cn = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            cn.apply(this, arguments)
        }
          , sn = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.styleService = t,
                n._mode = de.PRODUCTION,
                n
            }
            return an(t, e),
            Object.defineProperty(t.prototype, "mode", {
                get: function() {
                    return this._mode
                },
                set: function(e) {
                    this._mode = e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "locale", {
                get: function() {
                    return this._locale
                },
                set: function(e) {
                    this._locale = e
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getLocalizationProperties = function(e) {
                var t, n = this;
                return e && e.localizationProperties && (this.locale ? t = e.localizationProperties.find((function(e) {
                    return e && e.locale === n.locale
                }
                )) : e.localizationProperties.length > 0 && e.localizationProperties[0] && (t = e.localizationProperties[0])),
                null !== t ? t : void 0
            }
            ,
            t.prototype.getTitle = function(e) {
                var t = this.getLocalizationProperties(e);
                return t && t.title ? ue(V, {
                    children: t.title
                }) : ue(V, {})
            }
            ,
            t.prototype.getDescription = function(e, t) {
                var n = this.getLocalizationProperties(e)
                  , o = Ne.getLocalizationProperties(t)
                  , r = [];
                o && (r.push([this.DSR_PORTAL_TOKEN, o.dsrPortalLink ? o.dsrPortalLink : void 0, o.dsrPortalLinkLabel ? o.dsrPortalLinkLabel : void 0]),
                r.push([this.COOKIE_POLICY_TOKEN, o.cookiePolicyLink ? o.cookiePolicyLink : void 0, o.cookiePolicyLinkLabel ? o.cookiePolicyLinkLabel : void 0]),
                r.push([this.PRIVACY_POLICY_TOKEN, o.privacyPolicyLink ? o.privacyPolicyLink : void 0, o.privacyPortalLinkLabel ? o.privacyPortalLinkLabel : void 0]));
                var i = [];
                return (null == n ? void 0 : n.description) && (i = this.replaceTokens(n.description, r, this.mode === de.DESIGN)),
                i
            }
            ,
            t.prototype.getButtonBar = function(e, t) {
                var n = []
                  , o = this.getLocalizationProperties(e);
                return o && (e.showRejectBtn && o.rejectAllButtonText && e.secondaryButton && n.push(this.getButton(e.secondaryButton, o.rejectAllButtonText, (function() {
                    return t(kt.CONSENT_PREFERENCE_CENTER_BUTTON_REJECT_ALL)
                }
                ))),
                e.showAcceptBtn && o.acceptAllButtonText && e.secondaryButton && n.push(this.getButton(e.secondaryButton, o.acceptAllButtonText, (function() {
                    return t(kt.CONSENT_PREFERENCE_CENTER_BUTTON_ACCEPT_ALL)
                }
                ))),
                e.showSaveBtn && o.saveButtonText && e.primaryButton && n.push(this.getButton(e.primaryButton, o.saveButtonText, (function() {
                    return t(kt.CONSENT_PREFERENCE_CENTER_BUTTON_SAVE)
                }
                )))),
                ue(V, {
                    children: [ue(rn, {}), ue("div", {
                        className: "rly-preference-center__actions",
                        children: n
                    })]
                })
            }
            ,
            t.prototype.getEditableButtonBar = function(e, t, n) {
                var o = this
                  , r = []
                  , i = this.getLocalizationProperties(e);
                return i && [{
                    show: e.showRejectBtn,
                    text: i.rejectAllButtonText,
                    style: e.secondaryButton,
                    type: kt.CONSENT_PREFERENCE_CENTER_BUTTON_REJECT_ALL,
                    editMode: n.rejectButtonEditMode,
                    onEditToggle: n.onRejectButtonEditToggle
                }, {
                    show: e.showAcceptBtn,
                    text: i.acceptAllButtonText,
                    style: e.secondaryButton,
                    type: kt.CONSENT_PREFERENCE_CENTER_BUTTON_ACCEPT_ALL,
                    editMode: n.acceptButtonEditMode,
                    onEditToggle: n.onAcceptButtonEditToggle
                }, {
                    show: e.showSaveBtn,
                    text: i.saveButtonText,
                    style: e.primaryButton,
                    type: kt.CONSENT_PREFERENCE_CENTER_BUTTON_SAVE,
                    editMode: n.saveButtonEditMode,
                    onEditToggle: n.onSaveButtonEditToggle
                }].forEach((function(e) {
                    e.show && e.text && e.style && r.push(o.getEditableButton(e.style, e.text, (function() {
                        return t(e.type)
                    }
                    ), e.type, e.editMode || n.mode === de.EDIT, e.onEditToggle, n.onButtonTextChanged, n.mode))
                }
                )),
                ue(V, {
                    children: [ue(rn, {}), ue("div", {
                        className: "rly-preference-center__actions",
                        children: r
                    })]
                })
            }
            ,
            t.prototype.getCloseButton = function(e, t) {
                if (!e || !e.primaryButton || !e.showCloseBtn)
                    return ue(V, {});
                var n = on.getButtonStyle(e.primaryButton);
                return n.width = "20px",
                n.height = "20px",
                n.position = "absolute",
                n.top = "-10px",
                n.right = "-15px",
                n.justifyContent = "center",
                n.paddingLeft = void 0,
                n.paddingRight = void 0,
                ue("div", {
                    style: n,
                    className: "rly-button-no-hover",
                    onClick: function() {
                        return t && t()
                    },
                    children: ue("div", {
                        children: "x"
                    })
                })
            }
            ,
            t.prototype.getButton = function(e, t, n) {
                return ue("div", {
                    onClick: function() {
                        return n && n()
                    },
                    className: "rly-button-no-hover",
                    style: on.getButtonStyle(e),
                    children: t
                })
            }
            ,
            t.prototype.getPurposesList = function(e, t, n, o) {
                var r = this;
                return ue("div", {
                    className: "rly-purposes-container",
                    children: t.filter((function(e) {
                        return e.visible
                    }
                    )).map((function(t) {
                        return r.renderPurpose(e, t, !0, (function(e) {
                            return function(e, t) {
                                n && n(e, t)
                            }(t.purposeId, e)
                        }
                        ), o)
                    }
                    ))
                })
            }
            ,
            t.prototype.renderPurpose = function(e, t, n, o, r) {
                var i, c, s = (null === (i = null == r ? void 0 : r.purposeNameEditModes) || void 0 === i ? void 0 : i[t.purposeId]) || (null == r ? void 0 : r.mode) === de.EDIT, l = (null === (c = null == r ? void 0 : r.purposeDescriptionEditModes) || void 0 === c ? void 0 : c[t.purposeId]) || (null == r ? void 0 : r.mode) === de.EDIT, u = function(e) {
                    "Enter" === e.key && (e.preventDefault(),
                    e.currentTarget.blur())
                }, p = function(e) {
                    (null == r ? void 0 : r.onPurposeNameEditToggle) && (r.onPurposeNameEditToggle(t.purposeId),
                    setTimeout((function() {
                        var t, n = null === (t = e.target.closest(".rly-editable-field-container")) || void 0 === t ? void 0 : t.querySelector(".rly-purpose-title");
                        if (n && "true" === n.contentEditable) {
                            n.focus();
                            var o = document.createRange()
                              , r = window.getSelection();
                            o.selectNodeContents(n),
                            o.collapse(!1),
                            null == r || r.removeAllRanges(),
                            null == r || r.addRange(o)
                        }
                    }
                    ), 0))
                }, d = function(e) {
                    (null == r ? void 0 : r.onPurposeDescriptionEditToggle) && (r.onPurposeDescriptionEditToggle(t.purposeId),
                    setTimeout((function() {
                        var t, n = null === (t = e.target.closest(".rly-editable-field-container")) || void 0 === t ? void 0 : t.querySelector(".rly-purpose-description");
                        if (n && "true" === n.contentEditable) {
                            n.focus();
                            var o = document.createRange()
                              , r = window.getSelection();
                            o.selectNodeContents(n),
                            o.collapse(!1),
                            null == r || r.removeAllRanges(),
                            null == r || r.addRange(o)
                        }
                    }
                    ), 0))
                };
                return ue("div", {
                    className: "rly-purpose-card",
                    children: [ue("div", {
                        className: "rly-purpose-title-and-description-container",
                        children: [ue("div", {
                            style: {
                                position: "relative",
                                background: s ? "rgba(128, 128, 128, 0.2)" : "transparent",
                                transition: "background 0.2s ease-in-out",
                                cursor: (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeNameEditToggle) ? s ? "text" : "pointer" : void 0,
                                marginBottom: "0.5rem"
                            },
                            className: "".concat((null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeNameEditToggle) ? "rly-editable-field-container rly-editable-description-container" : "rly-editable-field-container-no-hover rly-editable-description-container"),
                            children: [ue("div", cn({
                                onClick: s ? void 0 : function(e) {
                                    return p(e)
                                }
                                ,
                                className: "rly-purpose-title",
                                contentEditable: s
                            }, s && {
                                suppressContentEditableWarning: !0
                            }, {
                                onBlur: function(e) {
                                    var n = e.target.textContent || "";
                                    (null == r ? void 0 : r.onPurposeNameChanged) && r.onPurposeNameChanged(t.purposeId, n)
                                },
                                onKeyDown: u,
                                title: (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeNameEditToggle) ? s ? void 0 : "Click to edit purpose name" : void 0,
                                children: t.name
                            })), (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeNameEditToggle) && ue("div", {
                                className: "rly-edit-button",
                                title: "Edit purpose name",
                                onClick: function(e) {
                                    return p(e)
                                },
                                children: ue(void 0, {})
                            })]
                        }), ue("div", {
                            style: {
                                position: "relative",
                                background: l ? "rgba(128, 128, 128, 0.2)" : "transparent",
                                transition: "background 0.2s ease-in-out",
                                cursor: (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeDescriptionEditToggle) ? l ? "text" : "pointer" : void 0
                            },
                            className: "".concat((null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeDescriptionEditToggle) ? "rly-editable-field-container rly-editable-description-container" : "rly-editable-field-container-no-hover rly-editable-description-container"),
                            children: [ue("div", cn({
                                onClick: l ? void 0 : function(e) {
                                    return d(e)
                                }
                                ,
                                className: "rly-purpose-description",
                                contentEditable: l
                            }, l && {
                                suppressContentEditableWarning: !0
                            }, {
                                onBlur: function(e) {
                                    var n = e.target.textContent || "";
                                    (null == r ? void 0 : r.onPurposeDescriptionChanged) && r.onPurposeDescriptionChanged(t.purposeId, n)
                                },
                                onKeyDown: u,
                                title: (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeDescriptionEditToggle) ? l ? void 0 : "Click to edit purpose description" : void 0,
                                children: t.description
                            })), (null == r ? void 0 : r.mode) === de.DESIGN && (null == r ? void 0 : r.onPurposeDescriptionEditToggle) && ue("div", {
                                className: "rly-edit-button",
                                title: "Edit purpose description",
                                onClick: function(e) {
                                    return d(e)
                                },
                                children: ue(void 0, {
                                    className: "rls-icon16"
                                })
                            })]
                        }), n && this.getBorder(e)]
                    }), "Strictly Necessary" === t.name || t.consentModel === a.ConsentModelOptionsNoChoice ? ue("div", {
                        className: "rly-purpose-toggle-container rly-purpose-switch-notice-only",
                        children: "Always Active"
                    }) : ue("div", {
                        className: "rly-purpose-toggle-container",
                        children: [ue("div", {
                            style: {
                                marginLeft: "auto"
                            }
                        }), ue("label", {
                            className: "rly-toggle-switch",
                            children: [ue("input", {
                                type: "checkbox",
                                checked: t.checked,
                                onChange: function(e) {
                                    return function(e) {
                                        if (e.target && o) {
                                            var t = e.target;
                                            void 0 !== t.checked && o(t.checked)
                                        }
                                    }(e)
                                }
                            }), ue("span", {
                                className: "rly-slider"
                            })]
                        })]
                    })]
                })
            }
            ,
            t.prototype.getBorder = function(e) {
                var t = {};
                return t.backgroundColor = this.styleService.getBorderColor(e),
                ue("div", {
                    className: "rly-purpose-border",
                    style: t
                })
            }
            ,
            t.prototype.getEditableButton = function(e, t, n, o, r, i, a, c, s) {
                var l = this.styleService.getButtonStyle(e);
                return ue("div", {
                    className: "".concat(c === de.DESIGN && i ? "rly-editable-field-container-button" : "rly-editable-field-container-button-no-hover"),
                    style: {
                        position: "relative",
                        display: "inline-block",
                        background: r ? "rgba(128, 128, 128, 0.2)" : "transparent",
                        transition: "background 0.2s ease-in-out",
                        cursor: c === de.DESIGN && i ? r ? "text" : "pointer" : ""
                    },
                    children: [ue("div", cn({
                        onClick: r ? void 0 : function(e) {
                            var t = e.currentTarget;
                            r && "true" === t.contentEditable ? (e.preventDefault(),
                            function(e) {
                                var t = document.caretRangeFromPoint(e.clientX, e.clientY);
                                if (t) {
                                    var n = window.getSelection();
                                    null == n || n.removeAllRanges(),
                                    null == n || n.addRange(t)
                                }
                            }(e)) : i && (i(),
                            setTimeout((function() {
                                if (t && "true" === t.contentEditable) {
                                    t.focus();
                                    var e = document.createRange()
                                      , n = window.getSelection();
                                    e.selectNodeContents(t),
                                    e.collapse(!1),
                                    null == n || n.removeAllRanges(),
                                    null == n || n.addRange(e)
                                }
                            }
                            ), 0))
                        }
                        ,
                        className: "".concat(c === de.DESIGN && i ? "rly-button" : "rly-button-no-hover"),
                        style: cn(cn({}, l), {
                            outline: "none"
                        }),
                        contentEditable: r
                    }, r && {
                        suppressContentEditableWarning: !0
                    }, {
                        onBlur: function(e) {
                            var t = e.target.textContent || "";
                            a && a(o, t)
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && (e.preventDefault(),
                            e.currentTarget.blur())
                        },
                        title: r ? void 0 : "Click to edit button text",
                        children: t
                    })), c === de.DESIGN && i && ue("div", {
                        className: "rly-edit-button",
                        title: "Edit button text",
                        children: ue(void 0, {})
                    })]
                })
            }
            ,
            t
        }(Pe)
          , ln = new sn(on)
          , un = function() {
            return un = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            un.apply(this, arguments)
        };
        function pn(e) {
            var t = He(!1)
              , n = t[0]
              , o = t[1]
              , r = Ve(null)
              , i = Ve(null);
            function a(t) {
                e.onButtonClicked && e.onButtonClicked(t)
            }
            function c(e) {
                "Enter" === e.key && (e.preventDefault(),
                e.currentTarget.blur())
            }
            Fe((function() {
                for (var t = document.getElementsByClassName("rly-preference-center"), n = on.getTextColor(e.preferenceCenter), o = on.getBackgroundColor(e.preferenceCenter), r = 0; r < t.length; r++) {
                    var i = t[r];
                    i && (i.style.setProperty("--slider-color-fg", n),
                    i.style.setProperty("--slider-color-bg", o))
                }
            }
            ), [e.preferenceCenter]),
            Fe((function() {
                var e = setTimeout((function() {
                    o(!0)
                }
                ), 10);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), []),
            Fe((function() {
                for (var t = document.getElementsByClassName("rly-purposes-container"), n = on.getTextColor(e.preferenceCenter), o = on.getBackgroundColor(e.preferenceCenter), r = "".concat(n, " ").concat(o), i = 0; i < t.length; i++) {
                    var a = t[i];
                    a && (a.style.setProperty("--slider-color-fg", n),
                    a.style.setProperty("--slider-color-bg", o),
                    a.style.setProperty("--purposes-scrollbar-color", r))
                }
            }
            ), [e.preferenceCenter]),
            Fe((function() {
                ln.mode = e.mode
            }
            ), [e.mode]),
            Fe((function() {
                ln.locale = e.locale
            }
            ), [e.locale]);
            var s = e.titleEditMode || e.mode === de.EDIT
              , l = e.descriptionEditMode || e.mode === de.EDIT;
            function u(e, t) {
                return function() {
                    e && (e(),
                    setTimeout((function() {
                        (null == t ? void 0 : t.current) && function(e) {
                            e.focus();
                            var t = document.createRange()
                              , n = window.getSelection();
                            t.selectNodeContents(e),
                            t.collapse(!1),
                            null == n || n.removeAllRanges(),
                            null == n || n.addRange(t)
                        }(t.current)
                    }
                    ), 0))
                }
            }
            var p = u(e.onTitleEditToggle, r)
              , d = u(e.onDescriptionEditToggle, i)
              , f = e.purposeListConfig || {
                mode: e.mode
            }
              , h = e.buttonBarConfig || {
                mode: e.mode
            };
            return ue("div", {
                className: "rly-preference-center ".concat(n ? "rly-transitions-enabled" : ""),
                style: on.getPreferenceCenterStyles(e.preferenceCenter, e.globalSettings),
                children: [ue("div", {
                    className: "rly-preference-center__header-wrapper",
                    children: [ue("div", {
                        className: "".concat(e.mode === de.DESIGN && e.onTitleEditToggle ? "rly-editable-field-container" : "rly-editable-field-container-no-hover", " ").concat(e.mode === de.DESIGN && e.onTitleEditToggle ? s ? "design-editable" : "design-non-editable" : ""),
                        children: [ue("div", un({
                            ref: r,
                            onClick: s ? void 0 : p,
                            className: "rly-title-field",
                            contentEditable: s
                        }, s && {
                            suppressContentEditableWarning: !0
                        }, {
                            onBlur: function(t) {
                                var n = t.target.textContent || "";
                                e.onTitleChanged && e.onTitleChanged(n)
                            },
                            onKeyDown: c,
                            title: e.mode === de.DESIGN && e.onTitleEditToggle && s ? "Click to edit title" : void 0,
                            children: ln.getTitle(e.preferenceCenter)
                        })), e.mode === de.DESIGN && e.onTitleEditToggle && ue("div", {
                            className: "rly-edit-button",
                            title: "Edit title",
                            children: ue(void 0, {})
                        })]
                    }), ue("div", {
                        className: "".concat(e.mode === de.DESIGN && e.onDescriptionEditToggle ? "rly-editable-field-container rly-editable-description-container" : "rly-editable-field-container-no-hover rly-editable-description-container", " ").concat(e.mode === de.DESIGN && e.onDescriptionEditToggle ? l ? "design-editable" : "design-non-editable" : ""),
                        children: [ue("div", un({
                            ref: i,
                            onClick: l ? void 0 : d,
                            className: "rly-description-field",
                            contentEditable: l
                        }, l && {
                            suppressContentEditableWarning: !0
                        }, {
                            onBlur: function(t) {
                                var n = t.target.textContent || "";
                                e.onDescriptionChanged && e.onDescriptionChanged(n)
                            },
                            onKeyDown: c,
                            title: e.mode === de.DESIGN && e.onDescriptionEditToggle && l ? "Click to edit description" : void 0,
                            children: ln.getDescription(e.preferenceCenter, e.banner)
                        })), e.mode === de.DESIGN && e.onDescriptionEditToggle && ue("div", {
                            className: "rly-edit-button",
                            title: "Edit description",
                            children: ue(void 0, {})
                        })]
                    }), ln.getCloseButton(e.preferenceCenter, (function() {
                        e.onCloseButtonClicked && e.onCloseButtonClicked()
                    }
                    )), ue("div", {
                        className: "rly-purpose-border",
                        style: {
                            backgroundColor: on.getBorderColor(e.preferenceCenter)
                        }
                    })]
                }), ue(V, {
                    children: ln.getPurposesList(e.preferenceCenter, e.purposeDefinitions, (function(t, n) {
                        e.onPurposeClicked && e.onPurposeClicked(t, n)
                    }
                    ), f)
                }), ue("div", {
                    className: "rly-preference-center__footer",
                    children: e.mode === de.DESIGN && e.onDescriptionEditToggle ? ln.getEditableButtonBar(e.preferenceCenter, a, h) : ln.getButtonBar(e.preferenceCenter, a)
                })]
            })
        }
        var dn, fn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), hn = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }, An = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }, Cn = function(t) {
            function n(e, n) {
                var o = t.call(this, e, n) || this;
                return o.agent = e,
                o.api = n,
                o._currentPurposeInteractions = new Map,
                o.addEventListeners(),
                o
            }
            return fn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyancePreferenceCenterService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "consentInterfaceTemplate", {
                get: function() {
                    return this._consentInterface
                },
                set: function(e) {
                    this._consentInterface = e
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getPreferenceCenterContainer = function() {
                return document.getElementById(n.RELYANCE_PREFERENCE_CENTER_CONTAINER_ID)
            }
            ,
            n.prototype.renderPreferenceCenter = function() {
                return hn(this, void 0, void 0, (function() {
                    var e, t, n, o, r = this;
                    return An(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return this.consentInterfaceTemplate ? [3, 1] : [2];
                        case 1:
                            return e = this.agent.relyanceBehaviorsConfigService.getConsentModelImmediate(),
                            this._currentPurposeInteractions.clear(),
                            (t = e ? this.agent.relyanceConsentStorageService.readConsentFromBrowser() : null) && t.consentPurposes ? t.consentPurposes.forEach((function(e) {
                                return r._currentPurposeInteractions.set(e.purposeId, e.checked)
                            }
                            )) : this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata().forEach((function(t) {
                                return r._currentPurposeInteractions.set(t.purposeId, C[e])
                            }
                            )),
                            [4, this.renderPreferenceCenterContainer()];
                        case 2:
                            i.sent(),
                            (n = this.getPreferenceCenterContainer()) ? "div" === n.tagName.toLowerCase() && this.consentInterfaceTemplate.preferenceCenter && this.consentInterfaceTemplate.banner && ((o = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata()).forEach((function(e) {
                                var t = r._currentPurposeInteractions.get(e.purposeId);
                                void 0 !== t && (e.checked = t)
                            }
                            )),
                            se(ue("div", {
                                style: {
                                    pointerEvents: "auto"
                                },
                                children: ue(pn, {
                                    mode: de.PRODUCTION,
                                    purposeDefinitions: o,
                                    preferenceCenter: this.consentInterfaceTemplate.preferenceCenter,
                                    banner: this.consentInterfaceTemplate.banner,
                                    onButtonClicked: function(e) {
                                        return r.onPreferenceCenterButtonClicked(e)
                                    },
                                    onCloseButtonClicked: function() {
                                        return r.onPreferenceCenterButtonClicked(kt.CONSENT_PREFERENCE_CENTER_BUTTON_CLOSE)
                                    },
                                    onPurposeClicked: function(e, t) {
                                        return r.onPurposeButtonClicked(e, t)
                                    }
                                })
                            }), n)) : setTimeout((function() {
                                return r.renderPreferenceCenter()
                            }
                            ), 250),
                            i.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.onPreferenceCenterButtonClicked = function(t) {
                return hn(this, void 0, void 0, (function() {
                    var n, o, r, i, a, c, s, l = this;
                    return An(this, (function(u) {
                        switch (this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Consent preference button ".concat(t, " was clicked.")),
                        n = this.agent.relyanceBehaviorsConfigService.behaviorsConfig,
                        this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "[DEBUG] onPreferenceCenterButtonClicked called with type: ".concat(t, " at ").concat(Date.now())),
                        this.agent.dispatchEvent(new Jt(g.RELYANCE_PREFERENCE_CENTER_BUTTON_CLICKED,t)),
                        t) {
                        case kt.CONSENT_PREFERENCE_CENTER_BUTTON_SAVE:
                            (o = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata()).forEach((function(e) {
                                var t = l._currentPurposeInteractions.get(e.purposeId);
                                e.alwaysActive ? e.checked = !0 : void 0 !== t && (e.checked = t)
                            }
                            )),
                            this.agent.relyanceConsentStorageService.createCustomPreferencesRecord(o, n),
                            r = {},
                            o.forEach((function(e) {
                                r[e.purposeId] = e.checked
                            }
                            )),
                            this.agent.dispatchEvent(new Zt(g.RELYANCE_CONSENT_UPDATE,r));
                            break;
                        case kt.CONSENT_PREFERENCE_CENTER_BUTTON_ACCEPT_ALL:
                            this.agent.relyanceConsentStorageService.acceptAll(n),
                            i = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata(),
                            a = {},
                            i.forEach((function(e) {
                                a[e.purposeId] = !0
                            }
                            )),
                            this.agent.dispatchEvent(new Zt(g.RELYANCE_CONSENT_UPDATE,a));
                            break;
                        case kt.CONSENT_PREFERENCE_CENTER_BUTTON_REJECT_ALL:
                            this.agent.relyanceConsentStorageService.rejectAll(n),
                            c = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata(),
                            s = {},
                            c.forEach((function(e) {
                                s[e.purposeId] = !!e.alwaysActive
                            }
                            )),
                            this.agent.dispatchEvent(new Zt(g.RELYANCE_CONSENT_UPDATE,s));
                            break;
                        case kt.CONSENT_PREFERENCE_CENTER_BUTTON_CLOSE:
                            this.agent.relyanceBannerService.showBanner();
                            break;
                        default:
                            this.agent.relyanceLoggerService.log(this.serviceName, e.WARN, "Unhandled preference center button type: ".concat(t))
                        }
                        return this.destroyPreferenceCenter(),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.storeConsentInBrowser = function(t, n) {
                return hn(this, void 0, void 0, (function() {
                    var o, r, i, c;
                    return An(this, (function(s) {
                        return o = Array.from(this._currentPurposeInteractions.keys()),
                        r = this.agent.relyanceBehaviorsConfigService.behaviorsConfig,
                        i = n.map((function(e) {
                            return {
                                purposeId: e.purposeId,
                                name: e.name,
                                accepted: t === a.ConsentModelOptionsNoChoice || (t === a.ConsentModelOptionsOptIn ? o.includes(e.purposeId) : !o.includes(e.purposeId))
                            }
                        }
                        )),
                        c = {
                            model: t,
                            processingActivities: i,
                            timestamp: Date.now(),
                            consentStorageEnabled: (null == r ? void 0 : r.consentStorage) || !1
                        },
                        this.agent.relyanceConsentStorageService.storeCookieEncoded(h.CONSENT_COOKIE_NAME, c),
                        this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Stored ".concat(t === a.ConsentModelOptionsOptIn ? "opt-in" : "opt-out", " consent for purposes: ").concat(o.join(", "))),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.onPurposeButtonClicked = function(e, t) {
                this.agent.dispatchEvent(new $t(g.RELYANCE_PREFERENCE_CENTER_PURPOSE_CLICKED,e,t)),
                this.agent.relyanceBehaviorsConfigService.getConsentModelImmediate() !== a.ConsentModelOptionsNoChoice && this._currentPurposeInteractions.set(e, t)
            }
            ,
            n.prototype.addEventListeners = function() {
                var e = this;
                this.agent.addEventListener(g.RELYANCE_BANNER_BUTTON_CLICKED, (function(t) {
                    return e.onBannerButtonClicked(t)
                }
                ))
            }
            ,
            n.prototype.onBannerButtonClicked = function(e) {
                e.bannerButton === fe.CONSENT_BANNER_BUTTON_MANAGE_PREFERENCES && (this.agent.relyanceBannerService.destroyBanner(),
                this.renderPreferenceCenter())
            }
            ,
            n.prototype.destroyPreferenceCenter = function() {
                var e = this.getPreferenceCenterContainer();
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            ,
            n.prototype.renderPreferenceCenterContainer = function() {
                return hn(this, void 0, void 0, (function() {
                    var t = this;
                    return An(this, (function(o) {
                        return this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Rendering pref. center container."),
                        this.getPreferenceCenterContainer() ? (this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Container already present -- aborting."),
                        [2]) : [2, new Promise((function(o) {
                            if (!document || !document.body)
                                return t.agent.relyanceLoggerService.log(t.serviceName, e.INFO, "document.body not found; auto-retry in 250ms."),
                                void setTimeout((function() {
                                    t.renderPreferenceCenterContainer().then((function() {
                                        return o()
                                    }
                                    ))
                                }
                                ), 250);
                            var r = t.agent.relyanceBehaviorsConfigService.behaviorsConfig
                              , i = document.createElement("div");
                            i.id = n.RELYANCE_PREFERENCE_CENTER_CONTAINER_ID,
                            i.style.position = "fixed",
                            i.style.top = "0",
                            i.style.left = "0",
                            i.style.width = "100%",
                            i.style.height = "100%",
                            i.style.zIndex = "10000",
                            i.style.display = "flex",
                            i.style.alignItems = "center",
                            i.style.justifyContent = "center",
                            i.style.padding = "1rem",
                            (null == r ? void 0 : r.requireInteraction) ? (i.style.pointerEvents = "auto",
                            i.style.backgroundColor = "rgba(255, 255, 255, 0.8)") : (i.style.pointerEvents = "none",
                            i.style.backgroundColor = "transparent"),
                            i.addEventListener("click", (function(e) {
                                if (!e.target.classList.contains("rly-slider")) {
                                    var n = new ge(g.RELYANCE_PREFERENCE_CENTER_CONTAINER_CLICKED,e);
                                    t.agent.dispatchEvent(n)
                                }
                            }
                            ), !0),
                            document.body.appendChild(i),
                            t.agent.relyanceLoggerService.log(t.serviceName, e.INFO, "Pref. center container rendered."),
                            o()
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            n.RELYANCE_PREFERENCE_CENTER_CONTAINER_ID = "relyance-preference-center-container",
            n
        }(Dt), gn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Tn = function(e) {
            function t(t, n) {
                var o = e.call(this, t, n) || this;
                return o.agent = t,
                o.api = n,
                o.addEventListeners(),
                o
            }
            return gn(t, e),
            Object.defineProperty(t.prototype, "serviceName", {
                get: function() {
                    return "RelyanceBrowserEventService"
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.onAgentInitialized = function() {
                e.prototype.onAgentInitialized.call(this)
            }
            ,
            t.prototype.addEventListeners = function() {
                var e = this;
                window.addEventListener("wheel", (function(t) {
                    e.onWheelEvent()
                }
                )),
                window.addEventListener("click", (function(t) {
                    e.onClickEvent(t)
                }
                ), !0)
            }
            ,
            t.prototype.onWheelEvent = function() {
                this.agentInitialized && this.agent.dispatchEvent(new _(g.RELYANCE_DOM_WHEEL_EVENT))
            }
            ,
            t.prototype.onClickEvent = function(e) {
                this.isElementADescendantOfElementWithId(e, Vt.RELYANCE_BANNER_CONTAINER_ID) || this.isElementADescendantOfElementWithId(e, Cn.RELYANCE_PREFERENCE_CENTER_CONTAINER_ID) || this.agent.dispatchEvent(new _(g.RELYANCE_CLICK_OFF_BANNER))
            }
            ,
            t
        }(Dt), yn = n(863), bn = n.n(yn), _n = {
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            SAFARI: "Safari",
            EDGE: "Edge",
            OPERA: "Opera",
            UNKNOWN: "Unknown"
        }, vn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Sn = function() {
            return Sn = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            Sn.apply(this, arguments)
        }, En = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }, Pn = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }, In = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return vn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceClientHelperService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.fetchDomainConfigs = function(t, n, o) {
                return En(this, void 0, void 0, (function() {
                    var r, i, a;
                    return Pn(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return r = this.agent.domainAppId,
                            i = "/api/config/v1/".concat(r, "/").concat(t),
                            a = Sn(Sn({}, n && {
                                regionName: n
                            }), o && {
                                localeName: o
                            }),
                            this.log(e.INFO, "Fetching Domain - ".concat(t, " config from ").concat(i)),
                            [4, this.sendCdnRequest(p.GET, i, a, {})];
                        case 1:
                            return [2, c.sent().json()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.fetchUserLatestConsent = function(t) {
                return En(this, void 0, void 0, (function() {
                    var n, o, r, i, a, c;
                    return Pn(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return n = this.agent.domainAppId,
                            o = "/api/user-consent/v1/consent/known-user/".concat(n),
                            r = {
                                externalUserId: t
                            },
                            this.log(e.INFO, "Fetching Rly Consent userId - from ".concat(o)),
                            [4, this.sendCdnRequest(p.GET, o, r, {})];
                        case 1:
                            return [4, (i = s.sent()).headers.get("X-Relyance-Consent-User-Id")];
                        case 2:
                            return a = s.sent() || "",
                            [4, i.json()];
                        case 3:
                            return [2, {
                                responseJson: null !== (c = s.sent()) && void 0 !== c ? c : {},
                                relyanceConsentUserId: a
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.handleConsentStorage = function(t) {
                return En(this, void 0, void 0, (function() {
                    var o, r, i, a, c, s;
                    return Pn(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "[DEBUG] handleConsentStorage called at ".concat(Date.now())),
                            o = this.agent.relyanceBehaviorsConfigService.behaviorsConfig,
                            [4, this.agent.relyanceGeolocationService.fetchLocation()];
                        case 1:
                            return r = l.sent(),
                            i = r ? {
                                state: r.state || "unknown",
                                country: r.country || "unknown",
                                region: r.region || "unknown"
                            } : void 0,
                            o ? o.consentStorage ? (this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Consent storage is enabled. Anonymize IP: ".concat(o.anonymizeIp, ", Store Browser Type Only: ").concat(o.storeBrowserTypeOnly)),
                            [4, this.generateConsentPayload({
                                userLocation: i,
                                purposes: t,
                                anonymizeIp: null !== (c = o.anonymizeIp) && void 0 !== c ? c : n.DEFAULT_ANONYMIZE_IP,
                                storeBrowserTypeOnly: null !== (s = o.storeBrowserTypeOnly) && void 0 !== s ? s : n.DEFAULT_STORE_BROWSER_TYPE_ONLY,
                                isGpcEnabled: this.agent.relyanceGPCService.shouldHonorGPC(o.gpcIntegrationSwitch)
                            })]) : (this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Consent storage is disabled - no consent record will be created"),
                            [2]) : (this.agent.relyanceLoggerService.log(this.serviceName, e.WARN, "No behaviors config available for consent storage"),
                            [2]);
                        case 2:
                            return a = l.sent(),
                            [4, this.storeConsentRecord(a)];
                        case 3:
                            return l.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.generateConsentPayload = function() {
                return En(this, arguments, void 0, (function(t) {
                    var o, r, i, a, c, s, l, u, p, d, f, h, A, C, g, T, y, b, _, v, S, E;
                    return void 0 === t && (t = {}),
                    Pn(this, (function(P) {
                        switch (P.label) {
                        case 0:
                            return P.trys.push([0, 2, , 3]),
                            o = t.userLocation,
                            r = t.purposes,
                            i = t.anonymizeIp,
                            a = void 0 === i ? n.DEFAULT_ANONYMIZE_IP : i,
                            c = t.storeBrowserTypeOnly,
                            s = void 0 === c ? n.DEFAULT_STORE_BROWSER_TYPE_ONLY : c,
                            l = t.isGpcEnabled,
                            u = void 0 === l ? n.DEFAULT_IS_GPC_ENABLED : l,
                            p = t.appId,
                            d = void 0 === p ? this.agent.domainAppId : p,
                            f = this.validateAndGetProcessingActivities(r),
                            h = this.calculateConsentStates(f),
                            A = h.acceptedAll,
                            C = h.rejectedAll,
                            [4, this.getTenantSafely()];
                        case 1:
                            return g = P.sent(),
                            T = this.agent.relyanceConsentStorageService.readUserDataFromBrowser(),
                            y = null !== (S = null == T ? void 0 : T.userId) && void 0 !== S ? S : "",
                            b = null !== (E = null == T ? void 0 : T.externalUserId) && void 0 !== E ? E : "",
                            _ = {
                                timestamp: this.getCurrentTimestamp(),
                                agentVersion: n.AGENT_VERSION,
                                tenant: g,
                                regionName: this.agent.relyanceBehaviorsConfigService.bestMatchingLocationName || n.UNKNOWN_VALUE,
                                userLocation: this.buildUserLocation(o),
                                sourceIp: n.DEFAULT_SOURCE_IP,
                                domainName: this.getDomainNameSafely(),
                                processingActivities: this.mapProcessingActivities(f),
                                acceptedAll: A,
                                rejectedAll: C,
                                userAgent: this.getUserAgent(s),
                                deviceName: this.getDeviceName(),
                                isGpcEnabled: u,
                                anonymizeIp: a,
                                appId: d,
                                deviceId: this.agent.getOrGenerateDeviceId(),
                                userId: y,
                                externalUserId: b
                            },
                            this.logPayloadGeneration(_),
                            [2, _];
                        case 2:
                            throw v = P.sent(),
                            this.agent.relyanceLoggerService.log(this.serviceName, e.ERROR, "Failed to generate consent payload: ".concat(v)),
                            new Error("Consent payload generation failed: ".concat(v));
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.storeConsentRecord = function(t) {
                return En(this, void 0, void 0, (function() {
                    var n, o;
                    return Pn(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]),
                            [4, this.sendCdnRequest(p.POST, "/api/user-consent/v1/consent", t, {})];
                        case 1:
                            if (!((n = r.sent()).status >= 200 && n.status < 300))
                                throw new Error("Consent storage failed with status");
                            return this.log(e.INFO, "Consent record stored successfully"),
                            [3, 3];
                        case 2:
                            return o = r.sent(),
                            this.log(e.WARN, "Consent storage failed: ".concat(o)),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.prepareSHARequestHeaders = function(e) {
                return En(this, void 0, void 0, (function() {
                    var t, n, o, r;
                    return Pn(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t = new TextEncoder,
                            n = t.encode(e),
                            [4, crypto.subtle.digest("SHA-256", n)];
                        case 1:
                            return o = i.sent(),
                            r = Array.from(new Uint8Array(o)),
                            [2, r.map((function(e) {
                                return e.toString(16).padStart(2, "0")
                            }
                            )).join("")]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.validateAndGetProcessingActivities = function(e) {
                if (!e)
                    return this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata().map((function(e) {
                        return {
                            purposeId: e.purposeId,
                            name: null == e ? void 0 : e.name,
                            description: null == e ? void 0 : e.description,
                            checked: e.checked,
                            consentModel: void 0,
                            visible: e.visible,
                            alwaysActive: e.alwaysActive
                        }
                    }
                    ));
                if (!Array.isArray(e))
                    throw new Error("Processing activities must be an array");
                return e
            }
            ,
            n.prototype.calculateConsentStates = function(e) {
                return {
                    acceptedAll: e.every((function(e) {
                        return !0 === e.checked
                    }
                    )),
                    rejectedAll: e.every((function(e) {
                        return e.alwaysActive || !1 === e.checked
                    }
                    ))
                }
            }
            ,
            n.prototype.getTenantSafely = function() {
                return En(this, void 0, void 0, (function() {
                    var t, n;
                    return Pn(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceBehaviorsConfigService.getTenantFromBehaviorsConfig()];
                        case 1:
                            return [2, o.sent()];
                        case 2:
                            return t = o.sent(),
                            n = JSON.stringify(t),
                            this.agent.relyanceLoggerService.log(this.serviceName, e.WARN, "Failed to get tenant: ".concat(n)),
                            [2, void 0];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.getDomainNameSafely = function() {
                var t = "";
                try {
                    t = this.agent.relyanceBehaviorsConfigService.getDomainFromBehaviorsConfig()
                } catch (t) {
                    var n = JSON.stringify(t);
                    this.agent.relyanceLoggerService.log(this.serviceName, e.WARN, "Failed to get actual Domain Name: ".concat(n))
                } finally {
                    return t || (t = this.getDomainName()),
                    t
                }
            }
            ,
            n.prototype.buildUserLocation = function(e) {
                return {
                    state: (null == e ? void 0 : e.state) || n.UNKNOWN_VALUE,
                    country: (null == e ? void 0 : e.country) || n.UNKNOWN_VALUE,
                    region: (null == e ? void 0 : e.region) || n.UNKNOWN_VALUE
                }
            }
            ,
            n.prototype.mapProcessingActivities = function(e) {
                return e.map((function(e) {
                    return {
                        processingActivityId: e.purposeId,
                        isEnabled: e.checked
                    }
                }
                ))
            }
            ,
            n.prototype.getCurrentTimestamp = function() {
                return Math.floor(Date.now() / 1e3)
            }
            ,
            n.prototype.getDomainName = function() {
                return window.location.origin
            }
            ,
            n.prototype.logPayloadGeneration = function(t) {
                this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Generated consent payload with ".concat(t.processingActivities.length, " processing activities"))
            }
            ,
            n.prototype.delay = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }
                ))
            }
            ,
            n.prototype.detectBrowser = function(e) {
                var t = e.toLowerCase()
                  , n = Object.entries(_n).find((function(e) {
                    var n = e[0];
                    return t.includes(n.toLowerCase())
                }
                ));
                return n ? n[1] : _n.UNKNOWN
            }
            ,
            n.prototype.getUserAgent = function(e) {
                var t = navigator.userAgent;
                return e ? this.detectBrowser(t) : t
            }
            ,
            n.prototype.getDeviceName = function() {
                var e = navigator.userAgent
                  , t = new (bn())(e);
                if (null != t.mobile())
                    return t.mobile();
                if (null != t.tablet())
                    return t.tablet();
                var n = [{
                    pattern: /Windows/i,
                    name: "Windows"
                }, {
                    pattern: /Macintosh/i,
                    name: "Mac"
                }, {
                    pattern: /Linux/i,
                    name: "Linux"
                }].find((function(t) {
                    return t.pattern.test(e)
                }
                ));
                return (null == n ? void 0 : n.name) || "Unknown"
            }
            ,
            n.prototype.sendCdnRequest = function(e, t, n, o) {
                return En(this, void 0, void 0, (function() {
                    var r, i, a, c, s, l, u, d, f, h, A, C, g, T, y, b;
                    return Pn(this, (function(_) {
                        switch (_.label) {
                        case 0:
                            if (r = this.agent.CDN_URL,
                            i = Sn({
                                "Content-Type": "application/json",
                                "X-Relyance-Consent-App-Id": this.agent.domainAppId
                            }, o),
                            a = "".concat(r).concat(t),
                            c = {
                                method: e,
                                headers: i
                            },
                            e !== p.GET)
                                return [3, 1];
                            for (s = new URLSearchParams,
                            l = 0,
                            u = Object.entries(n); l < u.length; l++)
                                d = u[l],
                                f = d[0],
                                null != (h = d[1]) && s.set(f, String(h));
                            return a += "?".concat(s.toString()),
                            [3, 3];
                        case 1:
                            return A = JSON.stringify(n),
                            c.body = A,
                            C = c,
                            g = [Sn({}, c.headers || {})],
                            b = {},
                            T = "x-amz-content-sha256",
                            [4, this.prepareSHARequestHeaders(A)];
                        case 2:
                            C.headers = Sn.apply(void 0, g.concat([(b[T] = _.sent(),
                            b)])),
                            _.label = 3;
                        case 3:
                            return [4, fetch(a, c)];
                        case 4:
                            if (!(y = _.sent()).ok)
                                throw new Error("CDN request failed with status ".concat(y.status));
                            return [4, y];
                        case 5:
                            return [2, _.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.DEFAULT_ANONYMIZE_IP = !1,
            n.DEFAULT_STORE_BROWSER_TYPE_ONLY = !1,
            n.DEFAULT_IS_GPC_ENABLED = !1,
            n.UNKNOWN_VALUE = "unknown",
            n.DEFAULT_SOURCE_IP = "127.0.0.1",
            n.AGENT_VERSION = "1.0.0",
            n
        }(Dt), mn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Nn = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return mn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceConsentPurposesService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getConsentPurposesWithMetadata = function() {
                try {
                    var t = []
                      , n = new Set
                      , o = this.agent.relyanceProcessingActivitiesLocalizationService.localizationData;
                    if (!o || !Array.isArray(o))
                        return [];
                    var r = this.agent.relyanceBehaviorsConfigService.getConsentModelImmediate()
                      , i = C[r];
                    return o.forEach((function(e) {
                        if (e && e.id && !n.has(e.id)) {
                            n.add(e.id);
                            var o = e.name
                              , r = e.purposeOfProcessing
                              , a = e.visible;
                            o && r && t.push({
                                purposeId: e.id,
                                name: o,
                                description: r,
                                visible: a,
                                checked: !!e.alwaysActive || i,
                                consentModel: void 0,
                                alwaysActive: e.alwaysActive
                            })
                        }
                    }
                    )),
                    t
                } catch (t) {
                    return this.log(e.ERROR, "Failed to get consent purposes with metadata: ".concat(t)),
                    []
                }
            }
            ,
            n
        }(Dt), Bn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), On = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, "cookie"),
                r.log(e.INFO, "[CookieInterceptor] Service initialized"),
                r
            }
            return Bn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceCookieInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.deleteCookie = function(t) {
                var n, o;
                this.logWithPrefix(e.INFO, "Deleting cookie: ".concat(t));
                var r = new Date;
                r.setTime(r.getTime() - 864e9);
                var i = "".concat(t, "=; expires=").concat(r.toUTCString(), "; path=/");
                if (this.logWithPrefix(e.INFO, "Deleting cookie with string: ".concat(i)),
                !(null === (n = this._originalCookieDescriptor) || void 0 === n ? void 0 : n.set))
                    throw new Error("Original cookie descriptor not available for deletion");
                if (this.logWithPrefix(e.INFO, "Deleting cookie with string: ".concat(i)),
                this._originalCookieDescriptor.set.call(document, i),
                null === (o = this._originalCookieDescriptor) || void 0 === o ? void 0 : o.get) {
                    var a = this._originalCookieDescriptor.get.call(document).split(";").map((function(e) {
                        return e.trim()
                    }
                    ))
                      , c = a.find((function(e) {
                        return e.split("=")[0].trim() === t
                    }
                    ));
                    if (c) {
                        var s = "".concat(t, "=; expires=").concat(r.toUTCString(), "; path=/; domain=").concat(document.domain);
                        this.logWithPrefix(e.INFO, "Deleting cookie with domain: ".concat(s)),
                        this._originalCookieDescriptor.set.call(document, s)
                    }
                }
            }
            ,
            n.prototype.parseCookiesFromDocument = function() {
                var t = document.cookie;
                if (!t)
                    return this.logWithPrefix(e.INFO, "No cookies found in document.cookie"),
                    [];
                var n = t.split(";").map((function(e) {
                    return e.trim()
                }
                ));
                return this.logWithPrefix(e.INFO, "Parsed ".concat(n.length, " cookies: ").concat(n.join(", "))),
                n
            }
            ,
            n.prototype.extractCookieName = function(e) {
                return this.extractCookieNameGeneric(e)
            }
            ,
            n.prototype.processCookieForConsent = function(t) {
                var n = this.extractCookieName(t);
                this.logWithPrefix(e.INFO, "Checking cookie: ".concat(t));
                var o = this.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(n, i.ConsentTrackingTechnologyTypeCookie);
                this.logWithPrefix(e.INFO, "Cookie ".concat(n, " should be allowed: ").concat(o)),
                o || (this.logWithPrefix(e.INFO, "Cookie ".concat(n, " should be blocked, deleting...")),
                this.deleteCookie(n))
            }
            ,
            n.prototype.processAllCookies = function(e) {
                var t = this;
                e.forEach((function(e) {
                    t.processCookieForConsent(e)
                }
                ))
            }
            ,
            n.prototype.handleExistingCookies = function() {
                this.logWithPrefix(e.INFO, "Starting handleExistingCookies");
                var t = this.parseCookiesFromDocument();
                this.processAllCookies(t)
            }
            ,
            n.prototype.initializeCookieInterceptor = function() {
                this.logWithPrefix(e.INFO, "Initializing full cookie interceptor");
                var t = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                if (!t || (null == t ? void 0 : t.isDefaultConsent)) {
                    this.logWithPrefix(e.INFO, "Consent cookie is not set, setting it");
                    var n = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata()
                      , o = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                    this.agent.relyanceConsentStorageService.writeConsentCookie(n, o, !0)
                }
                this.handleExistingCookies();
                var r = this;
                Object.defineProperty(document, "cookie", {
                    configurable: !0,
                    enumerable: !0,
                    set: function(t) {
                        var n, o, a, c;
                        r.logWithPrefix(e.INFO, "Intercepted cookie: ".concat(t));
                        var s = r.extractCookieNameGeneric(t)
                          , l = null === (o = null === (n = t.split("=")[1]) || void 0 === n ? void 0 : n.split(";")[0]) || void 0 === o ? void 0 : o.trim();
                        if (r.logWithPrefix(e.INFO, "Full interceptor - Setting cookie: ".concat(s, " = ").concat(l)),
                        !r.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(s, i.ConsentTrackingTechnologyTypeCookie))
                            return r.logWithPrefix(e.INFO, "Interceptor - Cookie ".concat(s, " is blocked, adding to blocked set and deleting")),
                            void r.deleteCookie(s);
                        r.logWithPrefix(e.INFO, "Interceptor - Cookie ".concat(s, " is allowed, setting it")),
                        null === (c = null === (a = r._originalCookieDescriptor) || void 0 === a ? void 0 : a.set) || void 0 === c || c.call(this, t)
                    },
                    get: function() {
                        var e, t;
                        return null === (t = null === (e = r._originalCookieDescriptor) || void 0 === e ? void 0 : e.get) || void 0 === t ? void 0 : t.call(this)
                    }
                }),
                this.logWithPrefix(e.INFO, "Full interceptor initialized")
            }
            ,
            n.prototype.extractCookieNameGeneric = function(t) {
                return this.logWithPrefix(e.INFO, "Extracting cookie name from: ".concat(t)),
                t.split("=")[0].trim()
            }
            ,
            n.prototype.logWithPrefix = function(e, t, n) {
                var o = "[CookieInterceptor]";
                if (void 0 !== n) {
                    var r = "object" == typeof n ? JSON.stringify(n, null, 2) : n;
                    this.log(e, "".concat(o, " ").concat(t), r)
                } else
                    this.log(e, "".concat(o, " ").concat(t))
            }
            ,
            n.prototype.isValidArray = function(t) {
                return !(!t || !Array.isArray(t) || 0 === t.length) || (this.logWithPrefix(e.WARN, "No array available"),
                !1)
            }
            ,
            n
        }(Dt), wn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        !function(e) {
            e.GPC_INTEGRATION_MODE_DISABLED = "GPC_INTEGRATION_MODE_DISABLED",
            e.GPC_INTEGRATION_MODE_HONOR_ALL = "GPC_INTEGRATION_MODE_HONOR_ALL",
            e.GPC_INTEGRATION_MODE_CUSTOMIZE_BY_PURPOSE = "GPC_INTEGRATION_MODE_CUSTOMIZE_BY_PURPOSE"
        }(dn || (dn = {}));
        var Mn = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return wn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceGPCService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "isGPCSignalPresent", {
                get: function() {
                    return "undefined" != typeof navigator && void 0 !== navigator.globalPrivacyControl
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "isGPCSignalEnabled", {
                get: function() {
                    return this.isGPCSignalPresent && "undefined" != typeof navigator && !0 === navigator.globalPrivacyControl
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.shouldHonorGPC = function(e) {
                return !!e && this.isGPCSignalEnabled
            }
            ,
            n.prototype.checkAndLogGPCSignal = function() {
                return this.log(e.INFO, "Checking for GPC signal..."),
                "undefined" == typeof navigator ? (this.log(e.WARN, "Navigator object not available - cannot check GPC signal"),
                !1) : !0 === navigator.globalPrivacyControl
            }
            ,
            n
        }(Dt)
          , Rn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Gn = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Ln = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , kn = function(t) {
            function n(e, n, o) {
                var r = t.call(this, e, n) || this;
                return r.agent = e,
                r.api = n,
                r.location_service = "".concat("https://consent.app.relyancestage.xyz", "/api/location"),
                r._locationFetched = !1,
                o && (r.location_service = o),
                r
            }
            return Rn(n, t),
            Object.defineProperty(n.prototype, "location", {
                get: function() {
                    return this._location
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "locationFetched", {
                get: function() {
                    return this._locationFetched
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceGeolocationService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.fetchLocation = function() {
                return Gn(this, void 0, void 0, (function() {
                    var t, o, r, i, a, c, s = this;
                    return Ln(this, (function(l) {
                        if (this.locationFetched)
                            return [2, this.location];
                        if (t = this.getUrlParameterValue(n.REGION_URL_PARAMETER))
                            try {
                                return o = t.split("-"),
                                r = {
                                    continent: void 0,
                                    country: o[0],
                                    state: o.length > 1 ? o[1] : void 0
                                },
                                this._locationFetched = !0,
                                this._location = r,
                                this.agent.dispatchEvent(new _(g.RELYANCE_LOCATION_FETCHED)),
                                this.log(e.INFO, "Location overridden by URL parameter '".concat(n.REGION_URL_PARAMETER, "': ").concat(JSON.stringify(r))),
                                [2, Promise.resolve(r)]
                            } catch (e) {
                                console.error(e)
                            }
                        if (i = this.getUrlParameterValue(n.LOCATION_URL_PARAMETER))
                            try {
                                if ((a = i.split("|")).length > 0)
                                    return c = {
                                        continent: a[0],
                                        country: a.length >= 2 ? a[1] : void 0,
                                        state: a.length >= 3 ? a[2] : void 0
                                    },
                                    this._locationFetched = !0,
                                    this._location = c,
                                    this.agent.dispatchEvent(new _(g.RELYANCE_LOCATION_FETCHED)),
                                    [2, Promise.resolve(c)]
                            } catch (e) {
                                console.error(e)
                            }
                        return this.location ? [2, this._location] : (this._fetchLocationPromise || (this._fetchLocationPromise = new Promise((function(t) {
                            return Gn(s, void 0, void 0, (function() {
                                var n, o, r;
                                return Ln(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, fetch(this.location_service)];
                                    case 1:
                                        return n = i.sent(),
                                        this._locationFetched = !0,
                                        n.ok ? [3, 2] : (this.log(e.INFO, "Could not load location."),
                                        [3, 4]);
                                    case 2:
                                        return [4, n.json()];
                                    case 3:
                                        o = i.sent(),
                                        (r = o).continent && r.country ? (this._location = r,
                                        this.log(e.INFO, "Got location: ".concat(JSON.stringify(r)))) : (this._location = void 0,
                                        this.log(e.INFO, "Recieved malformed geolocation response: ".concat(JSON.stringify(r)))),
                                        i.label = 4;
                                    case 4:
                                        return this.agent.dispatchEvent(new _(g.RELYANCE_LOCATION_FETCHED)),
                                        t(this._location),
                                        this._fetchLocationPromise = void 0,
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))),
                        [2, this._fetchLocationPromise])
                    }
                    ))
                }
                ))
            }
            ,
            n.LOCATION_URL_PARAMETER = h.LOCATION_URL_PARAMETER,
            n.REGION_URL_PARAMETER = h.REGION_URL_PARAMETER,
            n
        }(Dt)
          , Dn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , xn = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Hn = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , Fn = function(t) {
            function n(e, n) {
                var o = t.call(this, e, n) || this;
                return o.agent = e,
                o.api = n,
                o
            }
            return Dn(n, t),
            Object.defineProperty(n.prototype, "bannerLocalizationProperties", {
                get: function() {
                    return this._bannerLocalizationProperties
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "preferenceCenterLocalizationProperties", {
                get: function() {
                    return this._preferenceCenterLocalizationProperties
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceLocaleService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getLocale = function() {
                var e, t = document.documentElement || document.querySelector("html");
                return (e = t && t.lang ? t.lang : navigator.language) ? e.split(/[-_]/)[0] : "en"
            }
            ,
            n.prototype.fetchConfig = function(t, n) {
                return xn(this, arguments, void 0, (function(t, n, o) {
                    var r, i, a, c, s;
                    return void 0 === o && (o = "en"),
                    Hn(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return l.trys.push([0, 3, , 4]),
                            this._preferenceCenterLocalizationProperties && this._bannerLocalizationProperties ? (this.applyLocalizationPropertiesToConsentInterface(n),
                            [2]) : [4, this.attemptFetch(t, this.getLocale())];
                        case 1:
                            return (r = l.sent()) && r.results ? (i = r.results[0],
                            this.setLocalizationProperties(i),
                            this.applyLocalizationPropertiesToConsentInterface(n),
                            [2]) : [4, this.attemptFetch(t, o)];
                        case 2:
                            return (a = l.sent()) && a.results ? (c = a.results[0],
                            this.setLocalizationProperties(c),
                            this.applyLocalizationPropertiesToConsentInterface(n),
                            [2]) : (this.log(e.ERROR, "Could not fetch localization config for either locale: ".concat(this.getLocale(), " or default: ").concat(o)),
                            this._bannerLocalizationProperties = void 0,
                            this._preferenceCenterLocalizationProperties = void 0,
                            [3, 4]);
                        case 3:
                            return s = l.sent(),
                            this.log(e.ERROR, 'Could not fetch localization config: error"'.concat(s, '"')),
                            [2];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.attemptFetch = function(t, n) {
                return xn(this, void 0, void 0, (function() {
                    var o;
                    return Hn(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.LOCALE_CONFIGS, t, n)];
                        case 1:
                            return [2, r.sent()];
                        case 2:
                            return o = r.sent(),
                            this.log(e.ERROR, 'Could not fetch localization config for locale "'.concat(n, '", Error: ').concat(o)),
                            [2, void 0];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.setLocalizationProperties = function(t) {
                this._bannerLocalizationProperties = t.banner,
                this._preferenceCenterLocalizationProperties = t.preferenceCenter,
                this.log(e.INFO, "Localization properties set.")
            }
            ,
            n.prototype.applyLocalizationPropertiesToConsentInterface = function(e) {
                e && (e.banner && this._bannerLocalizationProperties && (e.banner.localizationProperties = [this._bannerLocalizationProperties]),
                e.preferenceCenter && this._preferenceCenterLocalizationProperties && (e.preferenceCenter.localizationProperties = [this._preferenceCenterLocalizationProperties]))
            }
            ,
            n
        }(Dt)
          , Vn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Un = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var o, r = 0, i = t.length; r < i; r++)
                    !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)),
                    o[r] = t[r]);
            return e.concat(o || Array.prototype.slice.call(t))
        }
          , Wn = function(t) {
            function n(e, n) {
                var o = t.call(this, e, n) || this;
                return o.agent = e,
                o.api = n,
                o.DEBUG_KEY = A.CONSENT_DEBUG,
                o.COOKIE_NAME_LOGGING_LEVELS = "relyance_logging_settings",
                o._levels = [],
                o._logs = [],
                o.readCookie(),
                o
            }
            return Vn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceLoggerService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "levels", {
                get: function() {
                    return Un([], this._levels, !0)
                },
                set: function(e) {
                    this._levels = Un([], e, !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "logs", {
                get: function() {
                    return this._logs
                },
                set: function(e) {
                    this._logs = e
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.isDebugModeEnabled = function() {
                return !("undefined" == typeof window || !window.localStorage) && "true" === window.localStorage.getItem(this.DEBUG_KEY)
            }
            ,
            n.prototype.log = function(t, n) {
                void 0 === n && (n = e.INFO);
                for (var o = [], r = 2; r < arguments.length; r++)
                    o[r - 2] = arguments[r];
                if (this.isDebugModeEnabled()) {
                    var i = "".concat((new Date).toLocaleTimeString(), " ").concat(n, " ").concat(t);
                    switch (n) {
                    case e.WARN:
                        o.forEach((function(e) {
                            return console.warn(i, e)
                        }
                        ));
                        break;
                    case e.ERROR:
                        o.forEach((function(e) {
                            return console.error(i, e)
                        }
                        ));
                        break;
                    case e.INFO:
                        o.forEach((function(e) {
                            return console.info(i, e)
                        }
                        ));
                        break;
                    case e.TRACE:
                        o.forEach((function(e) {
                            return console.trace(i, e)
                        }
                        ));
                        break;
                    default:
                        o.forEach((function(e) {
                            return console.log(i, e)
                        }
                        ))
                    }
                }
            }
            ,
            n.prototype.readCookie = function() {
                var t = this.getCookie(this.COOKIE_NAME_LOGGING_LEVELS)
                  , n = new Set;
                t && t.trim().split(",").forEach((function(t) {
                    "info" === (t = t.trim().toLowerCase()) && n.add(e.INFO),
                    "warn" === t && n.add(e.WARN),
                    "error" === t && n.add(e.ERROR),
                    "trace" === t && n.add(e.TRACE)
                }
                )),
                this.levels = Array.from(n)
            }
            ,
            n
        }(Dt)
          , jn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Kn = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Xn = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , Yn = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return jn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceProcessingActivitiesLocalizationService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "localizationData", {
                get: function() {
                    return this._localizationData
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.getLocalizedProcessingActivities = function() {
                return Kn(this, arguments, void 0, (function(t) {
                    var n, o, r, i;
                    return void 0 === t && (t = "en"),
                    Xn(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return a.trys.push([0, 3, , 4]),
                            n = this.agent.relyanceLocaleService.getLocale(),
                            [4, this.attemptFetch(n)];
                        case 1:
                            return (o = a.sent()) && (this._localizationData = this.transformApiResponse(o),
                            this.log(e.INFO, "Successfully loaded processing activities from API.", this._localizationData),
                            this._localizationData && this._localizationData.length >= 1) ? [2] : [4, this.attemptFetch(t)];
                        case 2:
                            if (r = a.sent())
                                return this._localizationData = this.transformApiResponse(r),
                                this.log(e.INFO, "Successfully loaded processing activities from API (fallback).", this._localizationData),
                                [2];
                            throw new Error("Failed to fetch processing activities from API");
                        case 3:
                            throw i = a.sent(),
                            this.log(e.ERROR, "Error fetching processing activities: ".concat(i)),
                            i;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.attemptFetch = function(t) {
                return Kn(this, void 0, void 0, (function() {
                    var n;
                    return Xn(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.DOMAIN_PROCESSING_ACTIVITIES, "", t)];
                        case 1:
                            return [2, o.sent()];
                        case 2:
                            return n = o.sent(),
                            this.log(e.ERROR, 'Could not fetch processing activities for locale "'.concat(t, '": ').concat(n)),
                            [2, void 0];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.transformApiResponse = function(e) {
                return (e.results || []).map((function(e) {
                    var t;
                    return {
                        id: e.paId,
                        name: e.paName,
                        purposeOfProcessing: e.purposeOfProcessing,
                        alwaysActive: e.alwaysActive,
                        visible: null === (t = e.visible) || void 0 === t || t
                    }
                }
                ))
            }
            ,
            n
        }(Dt)
          , zn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Zn = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return zn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceRequestUrlsService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "requestUrlsByPurpose", {
                get: function() {
                    return this._requestUrlsByPurpose
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.fetchRequestUrlsByPurpose = function() {
                return function(e, t, n, o) {
                    return new (n || (n = Promise))((function(r, i) {
                        function a(e) {
                            try {
                                s(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function c(e) {
                            try {
                                s(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function s(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, c)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }
                    ))
                }(this, void 0, void 0, (function() {
                    var t, n;
                    return function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0])
                                    throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        i;
                        function c(c) {
                            return function(s) {
                                return function(c) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0,
                                    c[0] && (a = 0)),
                                    a; )
                                        try {
                                            if (n = 1,
                                            o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                            0) : o.next) && !(r = r.call(o, c[1])).done)
                                                return r;
                                            switch (o = 0,
                                            r && (c = [2 & c[0], r.value]),
                                            c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                o = c[1],
                                                c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                    r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                    a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            c = t.call(e, a)
                                        } catch (e) {
                                            c = [6, e],
                                            o = 0
                                        } finally {
                                            n = r = 0
                                        }
                                    if (5 & c[0])
                                        throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, s])
                            }
                        }
                    }(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.DOMAIN_TRACKING_TECHNOLOGIES_REQUEST_URLS_BY_PA)];
                        case 1:
                            return t = o.sent(),
                            this._requestUrlsByPurpose = this.transformApiResponse(t),
                            this.log(e.INFO, "Request URLs by purpose fetched from API.", this._requestUrlsByPurpose),
                            [2, this._requestUrlsByPurpose];
                        case 2:
                            return n = o.sent(),
                            this.log(e.ERROR, "Error fetching request URLs by purpose: ".concat(n)),
                            [2, {}];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.transformApiResponse = function(e) {
                var t = {};
                return e.results.forEach((function(e) {
                    e.paName && e.requestUrl && e.requestUrl.length > 0 && (t[e.paName] = e.requestUrl)
                }
                )),
                t
            }
            ,
            n
        }(Dt)
          , Qn = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Jn = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Qn(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceTrackingTechnologiesService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "trackingTechnologies", {
                get: function() {
                    return this._trackingTechnologies
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.fetchTrackingTechnologies = function() {
                return function(e, t, n, o) {
                    return new (n || (n = Promise))((function(r, i) {
                        function a(e) {
                            try {
                                s(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function c(e) {
                            try {
                                s(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function s(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, c)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }
                    ))
                }(this, void 0, void 0, (function() {
                    var t, n;
                    return function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0])
                                    throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        i;
                        function c(c) {
                            return function(s) {
                                return function(c) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0,
                                    c[0] && (a = 0)),
                                    a; )
                                        try {
                                            if (n = 1,
                                            o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                            0) : o.next) && !(r = r.call(o, c[1])).done)
                                                return r;
                                            switch (o = 0,
                                            r && (c = [2 & c[0], r.value]),
                                            c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                o = c[1],
                                                c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                    r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                    a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            c = t.call(e, a)
                                        } catch (e) {
                                            c = [6, e],
                                            o = 0
                                        } finally {
                                            n = r = 0
                                        }
                                    if (5 & c[0])
                                        throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, s])
                            }
                        }
                    }(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.DOMAIN_TRACKING_TECHNOLOGIES)];
                        case 1:
                            return t = o.sent(),
                            this._trackingTechnologies = this.transformApiResponse(t),
                            this.log(e.INFO, "Tracking technologies fetched from API.", this._trackingTechnologies),
                            window.relyanceTrackingData = this.trackingTechnologies || [],
                            [2, this._trackingTechnologies];
                        case 2:
                            return n = o.sent(),
                            this.log(e.ERROR, "Error fetching tracking technologies: ".concat(n)),
                            [2, []];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.transformApiResponse = function(e) {
                return e.results.filter((function(e) {
                    return null != e
                }
                )).map((function(e) {
                    return {
                        keyName: e.keyName || "",
                        elements: (e.elements || []).filter((function(e) {
                            return null != e
                        }
                        )).map((function(e) {
                            var t, n, o, r, i, a, c, s, l, u, p, d, f, h;
                            return {
                                trackingTechnology: {
                                    name: (null === (t = e.trackingTechnology) || void 0 === t ? void 0 : t.name) || "",
                                    domain: (null === (n = e.trackingTechnology) || void 0 === n ? void 0 : n.domain) || "",
                                    description: (null === (o = e.trackingTechnology) || void 0 === o ? void 0 : o.description) || "",
                                    expires: (null === (r = e.trackingTechnology) || void 0 === r ? void 0 : r.expires) || 0,
                                    path: (null === (i = e.trackingTechnology) || void 0 === i ? void 0 : i.path) || "",
                                    secure: (null === (a = e.trackingTechnology) || void 0 === a ? void 0 : a.secure) || !1,
                                    httpOnly: (null === (c = e.trackingTechnology) || void 0 === c ? void 0 : c.httpOnly) || !1,
                                    sameSite: (null === (s = e.trackingTechnology) || void 0 === s ? void 0 : s.sameSite) || "",
                                    status: null === (l = e.trackingTechnology) || void 0 === l ? void 0 : l.status,
                                    trackingTechnologyType: (null === (u = e.trackingTechnology) || void 0 === u ? void 0 : u.trackingTechnologyType) || "",
                                    dateFound: (null === (p = e.trackingTechnology) || void 0 === p ? void 0 : p.dateFound) || 0,
                                    consentProcessingActivities: (null === (d = e.trackingTechnology) || void 0 === d ? void 0 : d.consentProcessingActivities) || [],
                                    purposesOfProcessing: (null === (f = e.trackingTechnology) || void 0 === f ? void 0 : f.purposesOfProcessing) || [],
                                    associatedVendors: (null === (h = e.trackingTechnology) || void 0 === h ? void 0 : h.associatedVendors) || [],
                                    requestUrl: e.trackingTechnology.requestUrl || ""
                                }
                            }
                        }
                        ))
                    }
                }
                ))
            }
            ,
            n
        }(Dt)
          , qn = function(e, t, n, o, r) {
            void 0 === r && (r = !1),
            this.model = e,
            this.consentPurposes = t,
            this.timestamp = n,
            this.consentStorageEnabled = o,
            this.isDefaultConsent = r
        }
          , $n = function(e, t) {
            this.userId = e,
            this.externalUserId = t
        }
          , eo = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , to = function() {
            return to = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            to.apply(this, arguments)
        }
          , no = function(t) {
            function n(o, r) {
                var i = t.call(this, o, r) || this;
                i.agent = o,
                i.api = r,
                i.CONSENT_COOKIE_NAME = h.CONSENT_COOKIE_NAME,
                i.CONSENT_COOKIE_LIFETIME = 365;
                var a = i.getUrlParameterValue(n.CLEAR_COOKIE_URL_PARAMETER);
                return a && "true" === a.toLowerCase() && (i.log(e.INFO, 'Clearing consent cookie because "rly_clear_cookie=true" was set in URL.'),
                i.deleteConsentCookie()),
                i
            }
            return eo(n, t),
            n.prototype.onServicesInitialized = function() {
                var e = this;
                t.prototype.onServicesInitialized.call(this);
                var n = function() {
                    e.onDomWheelEvent(),
                    e.agent.removeEventListener(g.RELYANCE_DOM_WHEEL_EVENT, n)
                }
                  , o = function() {
                    e.agent.removeEventListener(g.RELYANCE_CLICK_OFF_BANNER, o),
                    e.onClickOutsideBanner()
                };
                this.agent.addEventListener(g.RELYANCE_DOM_WHEEL_EVENT, n),
                this.agent.addEventListener(g.RELYANCE_BANNER_BUTTON_CLICKED, (function(t) {
                    var n = t
                      , o = e.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                    n && n.bannerButton && (n.bannerButton === fe.CONSENT_BANNER_BUTTON_CLOSE ? e.onBannerClosedEvent() : n.bannerButton === fe.CONSENT_BANNER_BUTTON_ACCEPT ? e.acceptAll(o) : n.bannerButton === fe.CONSENT_BANNER_BUTTON_REJECT && e.rejectAll(o))
                }
                )),
                this.agent.addEventListener(g.RELYANCE_CLICK_OFF_BANNER, o),
                this.agent.addEventListener(g.RELYANCE_BANNER_CONTAINER_CLICKED, (function(t) {
                    return e.onClickBannerContainer(t)
                }
                ))
            }
            ,
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "ReylanceConsentStorageService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.writeConsentCookie = function(e, t, n) {
                void 0 === n && (n = !1);
                var o = [];
                e.forEach((function(e) {
                    e && e.purposeId && o.push({
                        purposeId: e.purposeId,
                        name: e.name,
                        description: void 0,
                        visible: e.visible,
                        checked: e.checked,
                        consentModel: void 0,
                        alwaysActive: e.alwaysActive
                    })
                }
                ));
                var r = new qn(t.consentModel,o,Date.now(),t.consentStorage,n);
                this.storeCookieEncoded(this.CONSENT_COOKIE_NAME, r)
            }
            ,
            n.prototype.deleteConsentCookie = function() {
                this.log(e.INFO, "Deleting consent cookie: ".concat(this.CONSENT_COOKIE_NAME)),
                this.setCookie(this.CONSENT_COOKIE_NAME, "", -1e4),
                this.log(e.INFO, "Consent cookie deletion completed")
            }
            ,
            n.prototype.storeCookieEncoded = function(t, n) {
                try {
                    var o = JSON.stringify(n)
                      , r = btoa(o)
                      , i = "".concat(t, "=").concat(encodeURIComponent(r), "; path=/; SameSite=Strict; max-age=").concat(31536e3);
                    "https:" === window.location.protocol && (i += "; Secure"),
                    document.cookie = i,
                    this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Stored consent data in cookie: ".concat(t))
                } catch (t) {
                    this.agent.relyanceLoggerService.log(this.serviceName, e.ERROR, "Failed to store consent data in cookie: ".concat(t))
                }
            }
            ,
            n.prototype.readConsentFromBrowser = function() {
                try {
                    var t = this.getCookie(this.CONSENT_COOKIE_NAME);
                    if (t)
                        try {
                            var n = atob(decodeURIComponent(t))
                              , o = JSON.parse(n);
                            if (o.consentPurposes && Array.isArray(o.consentPurposes))
                                return new qn(o.model,o.consentPurposes,o.timestamp || Date.now(),o.consentStorageEnabled,o.isDefaultConsent)
                        } catch (t) {
                            this.agent.relyanceLoggerService.log(this.serviceName, e.INFO, "Failed to parse consent cookie: ".concat(t))
                        }
                } catch (t) {
                    this.agent.relyanceLoggerService.log(this.serviceName, e.WARN, "Failed to read consent from browser storage")
                }
                return null
            }
            ,
            n.prototype.storeUserDataCookie = function(e, t) {
                var n = new $n(e,t);
                this.storeCookieEncoded(h.CONSENT_USER_COOKIE_NAME, n)
            }
            ,
            n.prototype.readUserDataFromBrowser = function() {
                try {
                    var t = this.getCookie(h.CONSENT_USER_COOKIE_NAME);
                    if (t)
                        try {
                            var n = atob(decodeURIComponent(t))
                              , o = JSON.parse(n);
                            if (o.userId && o.externalUserId)
                                return new $n(o.userId,o.externalUserId)
                        } catch (t) {
                            this.log(e.WARN, "Failed to parse user cookie: ".concat(t))
                        }
                } catch (t) {
                    this.log(e.WARN, "Failed to read user cookie from browser storage")
                }
                return null
            }
            ,
            n.prototype.deleteUserCookie = function() {
                this.log(e.INFO, "Deleting user cookie: ".concat(h.CONSENT_USER_COOKIE_NAME)),
                this.setCookie(h.CONSENT_USER_COOKIE_NAME, "", -1e4),
                this.log(e.INFO, "User cookie deletion completed")
            }
            ,
            n.prototype.rejectAll = function(t) {
                this.log(e.INFO, "[DEBUG] rejectAll called at ".concat(Date.now()));
                var n = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata();
                n.forEach((function(e) {
                    e.alwaysActive ? e.checked = !0 : e.checked = !1
                }
                )),
                this.writeConsentCookie(n, t),
                this.agent.relyanceCommonInterceptorService.handleConsentUpdate(n);
                var o = {};
                n.forEach((function(e) {
                    e.alwaysActive ? o[e.purposeId] = !0 : o[e.purposeId] = !1
                }
                )),
                this.agent.dispatchEvent(new Zt(g.RELYANCE_CONSENT_UPDATE,o)),
                t.consentStorage ? this.agent.relyanceClientHelperService.handleConsentStorage(n) : this.log(e.INFO, "Consent storage is disabled - no consent record created for rejection. User preferences saved in browser only.")
            }
            ,
            n.prototype.acceptAll = function(t) {
                this.log(e.INFO, "[DEBUG] acceptAll called at ".concat(Date.now()));
                var n = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata();
                n.forEach((function(e) {
                    return e.checked = !0
                }
                )),
                this.writeConsentCookie(n, t),
                this.agent.relyanceCommonInterceptorService.handleConsentUpdate(n);
                var o = {};
                n.forEach((function(e) {
                    o[e.purposeId] = e.checked
                }
                )),
                this.agent.dispatchEvent(new Zt(g.RELYANCE_CONSENT_UPDATE,o)),
                t.consentStorage ? this.agent.relyanceClientHelperService.handleConsentStorage(n) : this.log(e.INFO, "Consent storage is disabled - no consent record created for acceptance. User preferences saved in browser only.")
            }
            ,
            n.prototype.acceptOrRejectProcessingActivities = function(t) {
                var n = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                if (n) {
                    var o = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata()
                      , r = o.map((function(e) {
                        return t.has(e.purposeId) ? to(to({}, e), {
                            checked: t.get(e.purposeId)
                        }) : e
                    }
                    ));
                    this.writeConsentCookie(r, n),
                    this.agent.relyanceCommonInterceptorService.handleConsentUpdate(o),
                    n.consentStorage ? this.agent.relyanceClientHelperService.handleConsentStorage(r) : this.log(e.INFO, "Consent storage is disabled - no consent record created for selectively accepting or rejecting purposes. User preferences saved in browser only.")
                } else
                    this.log(e.ERROR, "Invalid Behaviour Config - skipping processing activity update.")
            }
            ,
            n.prototype.createNoChoiceRecord = function(t) {
                var n = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata();
                t.consentStorage ? this.agent.relyanceClientHelperService.handleConsentStorage(n) : this.log(e.INFO, "Consent storage is disabled - no consent record created for no choice. User preferences saved in browser only.")
            }
            ,
            n.prototype.createCustomPreferencesRecord = function(t, n) {
                this.log(e.INFO, "[DEBUG] createCustomPreferencesRecord called at ".concat(Date.now())),
                this.writeConsentCookie(t, n),
                this.agent.relyanceCommonInterceptorService.handleConsentUpdate(t),
                n.consentStorage ? this.agent.relyanceClientHelperService.handleConsentStorage(t) : this.log(e.INFO, "Consent storage is disabled - no consent record created for custom preferences. User preferences saved in browser only.")
            }
            ,
            n.prototype.updatePurposeConsent = function(t, n, o) {
                var r = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata()
                  , i = r.map((function(e) {
                    return e.purposeId === t ? to(to({}, e), {
                        checked: n
                    }) : e
                }
                ));
                this.writeConsentCookie(i, o),
                this.agent.relyanceCommonInterceptorService.handleConsentUpdate(r),
                this.log(e.INFO, "Updated consent for purpose ".concat(t, ": ").concat(n ? "accepted" : "rejected"))
            }
            ,
            n.prototype.onDomWheelEvent = function() {
                var t = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                t && t.onUserScrollsPage && (t.onUserScrollsPage === c.InterfaceBehaviorsOptionsDenyAll ? (this.log(e.INFO, "Denying all purposes on scroll wheel."),
                this.rejectAll(t),
                this.agent.relyanceBannerService.removeBanner()) : t.onUserScrollsPage === c.InterfaceBehaviorsOptionsAcceptAll ? (this.log(e.INFO, "Accepting all purposes on scroll wheel."),
                this.acceptAll(t),
                this.agent.relyanceBannerService.removeBanner()) : this.log(e.INFO, "Taking no action on scroll wheel event."))
            }
            ,
            n.prototype.onBannerClosedEvent = function() {
                var t = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                t && (t.onUserCloseBanner ? t.onUserCloseBanner === c.InterfaceBehaviorsOptionsDenyAll ? (this.log(e.INFO, "Denying all purposes on banner closed."),
                this.rejectAll(t)) : t.onUserCloseBanner === c.InterfaceBehaviorsOptionsAcceptAll ? (this.log(e.INFO, "Accepting all purposes on banner closed."),
                this.acceptAll(t)) : (this.log(e.INFO, "Taking no action on banner closed."),
                this.createNoChoiceRecord(t)) : this.createNoChoiceRecord(t))
            }
            ,
            n.prototype.onClickOutsideBanner = function() {
                var t = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                if (t)
                    if (t.onUserClicksPage)
                        if (t.onUserClicksPage === c.InterfaceBehaviorsOptionsDenyAll)
                            this.log(e.INFO, "Denying all purposes on click off banner."),
                            this.agent.relyanceBannerService.removeBanner(),
                            this.rejectAll(t);
                        else {
                            if (t.onUserClicksPage !== c.InterfaceBehaviorsOptionsAcceptAll)
                                return void this.log(e.INFO, "Taking no action on banner closed.");
                            this.log(e.INFO, "Accepting all purposes on click off banner."),
                            this.agent.relyanceBannerService.removeBanner(),
                            this.acceptAll(t)
                        }
                    else
                        this.createNoChoiceRecord(t)
            }
            ,
            n.prototype.onClickBannerContainer = function(e) {
                var t = e
                  , n = this.agent.relyanceBehaviorsConfigService.behaviorsConfig;
                if (n && n.requireInteraction) {
                    if (this.isElementADescendantOfElementWithId(t.event, Vt.RELYANCE_BANNER_CONTAINER_ID))
                        return;
                    t.event.preventDefault(),
                    t.event.stopPropagation(),
                    t.event.stopImmediatePropagation()
                }
            }
            ,
            n.CLEAR_COOKIE_URL_PARAMETER = h.CLEAR_COOKIE_URL_PARAMETER,
            n
        }(Dt)
          , oo = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , ro = function() {
            return ro = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ,
            ro.apply(this, arguments)
        }
          , io = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var o, r = 0, i = t.length; r < i; r++)
                    !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)),
                    o[r] = t[r]);
            return e.concat(o || Array.prototype.slice.call(t))
        }
          , ao = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._consentGrantedPAs = {
                    PROCESSING_ACTIVITY_STRICTLY_NECESSARY: !0,
                    PROCESSING_ACTIVITY_NECESSARY: !0
                },
                r._consentGrantedData = [],
                r.log(e.INFO, "[CommonInterceptor] Service initialized"),
                r
            }
            return oo(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceCommonInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.shouldAllowTrackingTech = function(e, t) {
                if (t === i.ConsentTrackingTechnologyTypePixel && !this.agent.relyancePixelInterceptorService.isTrackingPixelOrBeacon(e))
                    return !0;
                if (this.isTechnologyWhitelisted(e, t))
                    return !0;
                var n = this.getTechnologyProcessingActivities(e, t);
                return !!this.hasEssentialProcessingActivities(n) || (0 === n.length ? this.handleVendorDiscoveryOptions() : this.areAllProcessingActivitiesAllowed(n))
            }
            ,
            n.prototype.initialiseConsentGrantedFromBrowserCookie = function() {
                var t = this;
                this.log(e.INFO, "Initialising consent granted");
                var n = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                this.log(e.INFO, "Read consent from browser:", JSON.stringify(n, null, 2));
                var o = this.agent.relyanceProcessingActivitiesLocalizationService.localizationData;
                this.log(e.INFO, "Processing activities:", JSON.stringify(o, null, 2)),
                this._consentGrantedData = [],
                this.isValidArray(o) && (o && o.forEach((function(o) {
                    var r, i, a;
                    if (t.log(e.INFO, "Processing activity ", JSON.stringify(o, null, 2)),
                    o && o.id) {
                        var c = o.id
                          , s = t.agent.relyanceBehaviorsConfigService.getConsentModelImmediate()
                          , l = !1;
                        o.alwaysActive ? (l = !0,
                        t._consentGrantedPAs[c] = l,
                        t.log(e.INFO, "Essential activity ".concat(c, " set to true"))) : (t.log(e.INFO, "consent model is: ", JSON.stringify(s, null, 2)),
                        l = null !== (a = null === (i = null === (r = null == n ? void 0 : n.consentPurposes) || void 0 === r ? void 0 : r.find((function(e) {
                            return (null == e ? void 0 : e.purposeId) === c
                        }
                        ))) || void 0 === i ? void 0 : i.checked) && void 0 !== a ? a : C[s],
                        t._consentGrantedPAs[c] = l,
                        t.log(e.INFO, "Activity ".concat(c, " consent set to: ").concat(l, " "))),
                        t._consentGrantedData.push({
                            id: o.id,
                            name: o.name,
                            consent: l
                        })
                    }
                }
                )),
                this.log(e.INFO, "Initialized consent activities.Final state: ".concat(JSON.stringify(this._consentGrantedPAs), " ")))
            }
            ,
            n.prototype.handleConsentUpdate = function(e) {
                var t = {};
                e.forEach((function(e) {
                    e.checked ? t[e.purposeId] = !0 : t[e.purposeId] = !1
                }
                )),
                this.updateConsentGrantedPAs(t)
            }
            ,
            Object.defineProperty(n.prototype, "consentGranted", {
                get: function() {
                    return this._consentGrantedPAs
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.initializeCommonInterceptor = function() {
                this.initialiseConsentGrantedFromBrowserCookie(),
                this.exposeConsentWindowVariable()
            }
            ,
            n.prototype.exposeConsentWindowVariable = function() {
                try {
                    var t = this
                      , n = new Proxy({
                        get data() {
                            try {
                                return t._consentGrantedData
                            } catch (n) {
                                return t.log(e.ERROR, "Error accessing consent data"),
                                []
                            }
                        },
                        getConsentStatus: function(n) {
                            try {
                                var o = t._consentGrantedData.find((function(e) {
                                    return e.id === n
                                }
                                ));
                                return o ? o.consent : void 0
                            } catch (o) {
                                return void t.log(e.ERROR, "Error getting consent status for ".concat(n, ":"), o)
                            }
                        }
                    },{
                        get: function(n, o) {
                            try {
                                if (o in n)
                                    return n[o];
                                var r = t._consentGrantedData.find((function(e) {
                                    return e.id === o
                                }
                                ));
                                return r ? r.consent : void 0
                            } catch (n) {
                                return void t.log(e.ERROR, "Error getting property '".concat(String(o), "' on consent proxy:"), n)
                            }
                        },
                        set: function() {
                            return console.error("Direct modification of consent state is not allowed"),
                            !1
                        },
                        ownKeys: function(n) {
                            try {
                                return io(io([], Reflect.ownKeys(n), !0), t._consentGrantedData.map((function(e) {
                                    return e.id
                                }
                                )), !0)
                            } catch (o) {
                                return t.log(e.ERROR, "Error getting ownKeys from consent proxy:", o),
                                Reflect.ownKeys(n)
                            }
                        },
                        getOwnPropertyDescriptor: function(n, o) {
                            try {
                                if (o in n)
                                    return {
                                        enumerable: !0,
                                        configurable: !1
                                    };
                                var r = t._consentGrantedData.find((function(e) {
                                    return e.id === o
                                }
                                ));
                                return r ? {
                                    enumerable: !0,
                                    configurable: !1,
                                    value: r.consent
                                } : void 0
                            } catch (n) {
                                return void t.log(e.ERROR, "Error getting property descriptor for '".concat(String(o), "':"), n)
                            }
                        }
                    });
                    Object.defineProperty(window, "relyanceConsent", {
                        value: n,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                } catch (t) {
                    this.log(e.ERROR, "Failed to expose relyanceConsent variable:", t)
                }
            }
            ,
            n.prototype.handleExistingTrackingTechnologies = function() {
                return function(e, t, n, o) {
                    return new (n || (n = Promise))((function(r, i) {
                        function a(e) {
                            try {
                                s(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function c(e) {
                            try {
                                s(o.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function s(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, c)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }
                    ))
                }(this, void 0, void 0, (function() {
                    return function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0])
                                    throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        i;
                        function c(c) {
                            return function(s) {
                                return function(c) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0,
                                    c[0] && (a = 0)),
                                    a; )
                                        try {
                                            if (n = 1,
                                            o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                            0) : o.next) && !(r = r.call(o, c[1])).done)
                                                return r;
                                            switch (o = 0,
                                            r && (c = [2 & c[0], r.value]),
                                            c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                o = c[1],
                                                c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                    r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                    a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            c = t.call(e, a)
                                        } catch (e) {
                                            c = [6, e],
                                            o = 0
                                        } finally {
                                            n = r = 0
                                        }
                                    if (5 & c[0])
                                        throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, s])
                            }
                        }
                    }(this, (function(e) {
                        return this.agent.relyanceCookieInterceptorService.handleExistingCookies(),
                        this.updateNetworkInterceptorConsent(),
                        this.agent.relyanceStorageInterceptorService.handleExistingLocalStorage(),
                        this.agent.relyanceStorageInterceptorService.handleExistingSessionStorage(),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.updateNetworkInterceptorConsent = function() {
                var e = this
                  , t = Object.keys(this._consentGrantedPAs).filter((function(t) {
                    return e._consentGrantedPAs[t]
                }
                ));
                y.updateConsent(t)
            }
            ,
            n.prototype.updateConsentGrantedPAs = function(e) {
                var t = this;
                this._consentGrantedPAs = ro(ro({}, this._consentGrantedPAs), e),
                this._consentGrantedData = this._consentGrantedData.map((function(e) {
                    return ro(ro({}, e), {
                        consent: Boolean(t._consentGrantedPAs[e.id])
                    })
                }
                )),
                this.handleExistingTrackingTechnologies(),
                this.agent.scriptBlockingFeatureFlag && this.agent.relyanceScriptInterceptorService.handleConsentUpdates(this._consentGrantedData)
            }
            ,
            n.prototype.isTechnologyWhitelisted = function(e, t) {
                var n;
                switch (t) {
                case i.ConsentTrackingTechnologyTypeCookie:
                    n = Object.values(h).includes(e);
                    break;
                case i.ConsentTrackingTechnologyTypeLocalStorage:
                    n = Object.values(A).includes(e);
                    break;
                default:
                    n = !1
                }
                return n
            }
            ,
            n.prototype.isTrackingDataAvailable = function() {
                return !!window.relyanceTrackingData || (this.log(e.TRACE, "[StorageInterceptor] No tracking data available"),
                !1)
            }
            ,
            n.prototype.isTrackingTechnologyMatched = function(t, n, o) {
                var r, a = t.name.toLowerCase(), c = null === (r = t.requestUrl) || void 0 === r ? void 0 : r.toLowerCase(), s = !1;
                switch (o) {
                case i.ConsentTrackingTechnologyTypePixel:
                case i.ConsentTrackingTechnologyTypeBeacon:
                    s = c === n.toLowerCase();
                    break;
                default:
                    s = a === n.toLowerCase()
                }
                return s && t.trackingTechnologyType === o && this.log(e.INFO, "Found matching tracking technology : ".concat(n)),
                s
            }
            ,
            n.prototype.extractProcessingActivityIds = function(t) {
                var n = this
                  , o = [];
                return t.consentProcessingActivities && Array.isArray(t.consentProcessingActivities) ? (this.log(e.INFO, "Processing activities count: ".concat(t.consentProcessingActivities.length)),
                t.consentProcessingActivities.forEach((function(t) {
                    t && (o.push(t),
                    n.log(e.INFO, "Added processing activity ID: ".concat(t)))
                }
                ))) : this.log(e.INFO, "No consent processing activities found for trackingTechnology: ".concat(t.name)),
                o
            }
            ,
            n.prototype.mapProcessingActivityIdsToLocalizedData = function(t) {
                var n = this
                  , o = this.agent.relyanceProcessingActivitiesLocalizationService.localizationData;
                return t.map((function(t) {
                    var r, i, a = null == o ? void 0 : o.find((function(e) {
                        return (null == e ? void 0 : e.id) === t
                    }
                    )), c = {
                        id: t,
                        name: null !== (r = null == a ? void 0 : a.name) && void 0 !== r ? r : "",
                        alwaysActive: null !== (i = null == a ? void 0 : a.alwaysActive) && void 0 !== i && i
                    };
                    return n.log(e.INFO, "Mapped activity: ".concat(JSON.stringify(c))),
                    c
                }
                ))
            }
            ,
            n.prototype.searchTechnologyInTrackingData = function(e, t) {
                for (var n = 0, o = window.relyanceTrackingData; n < o.length; n++)
                    for (var r = 0, i = o[n].elements || []; r < i.length; r++) {
                        var a = i[r];
                        if (this.isTrackingTechnologyMatched(a.trackingTechnology, e, t)) {
                            var c = this.extractProcessingActivityIds(a.trackingTechnology);
                            return this.mapProcessingActivityIdsToLocalizedData(c)
                        }
                    }
                return []
            }
            ,
            n.prototype.getTechnologyProcessingActivities = function(e, t) {
                return this.isTrackingDataAvailable() ? this.searchTechnologyInTrackingData(e, t) : []
            }
            ,
            n.prototype.hasEssentialProcessingActivities = function(t) {
                var n = t.some((function(e) {
                    return e.alwaysActive
                }
                ));
                return n && this.log(e.INFO, "Cookie has essential processing activities"),
                n
            }
            ,
            n.prototype.isValidArray = function(e) {
                return !(!e || !Array.isArray(e) || 0 === e.length)
            }
            ,
            n.prototype.hasUserAcceptedAllConsentPurposes = function() {
                var t = this.agent.relyanceConsentPurposesService.getConsentPurposesWithMetadata();
                try {
                    if (!this.isValidArray(t))
                        return !1;
                    var n = t.every((function(e) {
                        return !(!e.name || !e.alwaysActive && !0 !== e.checked)
                    }
                    ));
                    return this.log(e.INFO, "Accept all check - Total activities: ".concat(t.length, ", All accepted: ").concat(n)),
                    n
                } catch (t) {
                    return this.log(e.ERROR, "Error checking if user accepted all: ".concat(t)),
                    !1
                }
            }
            ,
            n.prototype.handleVendorDiscoveryOptions = function() {
                switch (this.agent.relyanceBehaviorsConfigService.getConsentVendorOption()) {
                case s.VendorDiscoveredOptionsAlwaysAllow:
                    return !0;
                case s.VendorDiscoveredOptionsOnlyAllowIfAccepted:
                    return this.hasUserAcceptedAllConsentPurposes();
                case s.VendorDiscoveredOptionsNeverAllow:
                default:
                    return !1
                }
            }
            ,
            n.prototype.areAllProcessingActivitiesAllowed = function(e) {
                var t = this;
                return e.every((function(e) {
                    var n = e.id;
                    return !0 === t._consentGrantedPAs[n]
                }
                ))
            }
            ,
            n
        }(Dt)
          , co = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , so = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._originalLocalStorage = {
                    localStorage: window.localStorage,
                    getItem: window.localStorage.getItem,
                    setItem: window.localStorage.setItem,
                    removeItem: window.localStorage.removeItem,
                    clear: window.localStorage.clear
                },
                r._originalSessionStorage = {
                    sessionStorage: window.sessionStorage,
                    getItem: window.sessionStorage.getItem,
                    setItem: window.sessionStorage.setItem,
                    removeItem: window.sessionStorage.removeItem,
                    clear: window.sessionStorage.clear
                },
                r.log(e.INFO, "[StorageInterceptor] Service initialized"),
                r
            }
            return co(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceStorageInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.initializeLocalStorageInterceptor = function() {
                var t = this;
                this.log(e.INFO, "Initializing Local Storage interceptor");
                var n = window.localStorage;
                n.setItem = function(o, r) {
                    return t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(o, i.ConsentTrackingTechnologyTypeLocalStorage) ? t._originalLocalStorage.setItem.call(n, o, r) : (t.log(e.WARN, "Blocked localStorage setItem for key:", o),
                    void t._originalLocalStorage.removeItem.call(n, o))
                }
                ,
                n.getItem = function(e) {
                    return t._originalLocalStorage.getItem.call(n, e)
                }
                ,
                this.handleExistingLocalStorage(),
                this.log(e.INFO, "Local Storage interceptor Initialized")
            }
            ,
            n.prototype.initializeSessionStorageInterceptor = function() {
                var t = this;
                this.log(e.INFO, "Initializing Session Storage interceptor");
                var n = window.sessionStorage;
                n.setItem = function(o, r) {
                    return t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(o, i.ConsentTrackingTechnologyTypeSessionStorage) ? t._originalSessionStorage.setItem.call(n, o, r) : (t.log(e.WARN, "Blocked sessionStorage setItem for key:", o),
                    void t._originalSessionStorage.removeItem.call(n, o))
                }
                ,
                n.getItem = function(e) {
                    return t._originalSessionStorage.getItem.call(n, e)
                }
                ,
                this.handleExistingSessionStorage(),
                this.log(e.INFO, "Session Storage interceptor Initialized")
            }
            ,
            n.prototype.handleExistingLocalStorage = function() {
                for (var t = this._originalLocalStorage.localStorage, n = 0; n < t.length; n++) {
                    var o = t.key(n);
                    null !== o && (this.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(o, i.ConsentTrackingTechnologyTypeLocalStorage) || (this.log(e.INFO, "Local Storage ".concat(o, " should be blocked, removing...")),
                    this._originalLocalStorage.removeItem.call(t, o)))
                }
            }
            ,
            n.prototype.handleExistingSessionStorage = function() {
                for (var t = this._originalSessionStorage.sessionStorage, n = 0; n < t.length; n++) {
                    var o = t.key(n);
                    null !== o && (this.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(o, i.ConsentTrackingTechnologyTypeSessionStorage) || (this.log(e.INFO, "Session Storage ".concat(o, " should be blocked, removing...")),
                    this._originalSessionStorage.removeItem.call(t, o)))
                }
            }
            ,
            n
        }(Dt)
          , lo = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , uo = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._originalImageConstructor = window.Image,
                r.log(e.INFO, "[PixelInterceptor] Service initialized"),
                r
            }
            return lo(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyancePixelInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.initializePixelInterceptor = function() {
                this.log(e.INFO, "Initializing Pixel interceptor");
                var t = this;
                window.Image = function(n, o) {
                    var r = new t._originalImageConstructor(n,o);
                    return Object.defineProperty(r, "src", {
                        set: function(n) {
                            t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(n, i.ConsentTrackingTechnologyTypePixel) ? r.setAttribute("src", n) : t.log(e.INFO, "Blocked tracking pixel: ".concat(n))
                        },
                        get: function() {
                            return r.getAttribute("src") || ""
                        },
                        configurable: !0
                    }),
                    r
                }
                ,
                this.handleImagePrototype(),
                this.handleExistingImageElements(),
                this.log(e.INFO, "Pixel interceptor initialized")
            }
            ,
            n.prototype.handleImagePrototype = function() {
                var t = this
                  , n = HTMLImageElement.prototype.setAttribute;
                HTMLImageElement.prototype.setAttribute = function(o, r) {
                    if ("src" !== o.toLowerCase() || t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(r, i.ConsentTrackingTechnologyTypePixel))
                        return n.call(this, o, r);
                    t.log(e.INFO, "Blocked tracking pixel via setAttribute: ".concat(r))
                }
            }
            ,
            n.prototype.handleExistingImageElements = function() {
                var t = this;
                document.querySelectorAll("img[src]").forEach((function(n) {
                    var o = n.getAttribute("src");
                    o && (t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(o, i.ConsentTrackingTechnologyTypePixel) || (t.log(e.WARN, "Removing blocked tracking pixel: ".concat(o)),
                    n.removeAttribute("src")))
                }
                ))
            }
            ,
            n.prototype.isTrackingPixelOrBeacon = function(t) {
                var n;
                try {
                    var o = new URL(t);
                    n = o.hostname
                } catch (n) {
                    return this.log(e.WARN, "Invalid tracking pixel URL: ".concat(t), n),
                    !1
                }
                if (this.log(e.INFO, "Checking pixel/beacon candidate: ".concat(t)),
                /\.(gif|png|jpg|jpeg)(\?|$)/i.test(t) && (t.includes("1x1") || t.includes("pixel") || t.includes("track") || t.includes("beacon")))
                    return !0;
                for (var r = 0, i = Object.values({
                    facebook: {
                        domains: ["facebook.com", "connect.facebook.net", "static.ads-fb.com"],
                        patterns: ["/tr\\?id=\\d+&ev=\\w+"]
                    },
                    google: {
                        domains: ["googletagmanager.com", "google-analytics.com", "doubleclick.net", "googleadservices.com", "adservice.google.com"],
                        patterns: ["/collect", "/viewthroughconversion/"]
                    },
                    linkedin: {
                        domains: ["px.ads.linkedin.com", "linkedin.com"],
                        patterns: ["/collect", "/px"]
                    },
                    twitter: {
                        domains: ["analytics.twitter.com", "ads.twitter.com", "t.co"],
                        patterns: ["/i/adsct", "/conversion_tracking"]
                    },
                    pinterest: {
                        domains: ["ct.pinterest.com"],
                        patterns: ["/v3/"]
                    },
                    snapchat: {
                        domains: ["snapads.com"],
                        patterns: []
                    },
                    microsoft: {
                        domains: ["bing.com"],
                        patterns: ["/fd/ls"]
                    },
                    hotjar: {
                        domains: ["static.hotjar.com", "vars.hotjar.com"],
                        patterns: []
                    },
                    adobe: {
                        domains: ["demdex.net", "2o7.net"],
                        patterns: ["/event"]
                    },
                    criteo: {
                        domains: ["dis.criteo.com"],
                        patterns: ["/sync"]
                    },
                    zoominfo: {
                        domains: ["ws.zoominfo.com"],
                        patterns: ["/pixel/"]
                    }
                }); r < i.length; r++) {
                    var a = i[r];
                    if (a.domains.some((function(e) {
                        return n.includes(e)
                    }
                    ))) {
                        if (0 === a.patterns.length)
                            return !0;
                        for (var c = 0, s = a.patterns; c < s.length; c++) {
                            var l = s[c];
                            if (new RegExp(l).test(t))
                                return !0
                        }
                    }
                }
                return !!["/collect", "/track", "/beacon", "/event", "/pixel"].some((function(e) {
                    return t.includes(e)
                }
                ))
            }
            ,
            n.prototype.restorePixelInterceptor = function() {
                window.Image = this._originalImageConstructor,
                this.log(e.INFO, "Pixel interceptor restored")
            }
            ,
            n
        }(Dt)
          , po = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , fo = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._originalSendBeacon = navigator.sendBeacon,
                r.log(e.INFO, "[BeaconInterceptor] Service initialized"),
                r
            }
            return po(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceBeaconInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.initializeBeaconInterceptor = function() {
                this.log(e.INFO, "Initializing Beacon interceptor");
                var t = this;
                navigator.sendBeacon = function(n, o) {
                    return t.agent.relyanceCommonInterceptorService.shouldAllowTrackingTech(n.toString(), i.ConsentTrackingTechnologyTypeBeacon) ? t._originalSendBeacon.call(navigator, n, o) : (t.log(e.INFO, "[BeaconInterceptor] Blocked beacon request: ".concat(n)),
                    !1)
                }
                ,
                this.log(e.INFO, "Beacon interceptor initialized")
            }
            ,
            n
        }(Dt)
          , ho = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Ao = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Co = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , go = function(t) {
            function n(n, o) {
                var r = t.call(this, n, o) || this;
                return r.agent = n,
                r.api = o,
                r._scriptDataByPurpose = [],
                r.blockedScriptUrls = [],
                r.blockedPatterns = [],
                r.deferred = [],
                r.origCreateElement = Document.prototype.createElement,
                r.origCreateElementNS = Document.prototype.createElementNS,
                r.origNodeAppendChild = Node.prototype.appendChild,
                r.origNodeInsertBefore = Node.prototype.insertBefore,
                r.origElementSetAttribute = Element.prototype.setAttribute,
                r.scriptConfigInitialized = !1,
                r.log(e.INFO, "[ScriptInterceptor] Service initialized"),
                r
            }
            return ho(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceScriptInterceptorService"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "scriptDataByPurpose", {
                get: function() {
                    return this._scriptDataByPurpose
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.fetchScriptDataByPurpose = function() {
                return Ao(this, void 0, void 0, (function() {
                    var t, n;
                    return Co(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.agent.relyanceClientHelperService.fetchDomainConfigs(u.DOMAIN_TRACKING_TECHNOLOGIES_SCRIPT_DATA_BY_PA)];
                        case 1:
                            return t = o.sent(),
                            this._scriptDataByPurpose = this.transformApiResponse(t),
                            this.log(e.INFO, "Script Data by purpose fetched from API.", this._scriptDataByPurpose),
                            [2, this._scriptDataByPurpose];
                        case 2:
                            return n = o.sent(),
                            this.log(e.ERROR, "Error fetching Script Data by purpose: ".concat(n)),
                            [2, []];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.handleConsentUpdates = function(e) {
                var t, n;
                this.blockedScriptUrls = [],
                this.blockedPatterns = [];
                for (var o = 0, r = e; o < r.length; o++)
                    for (var i = r[o], a = 0, c = this._scriptDataByPurpose; a < c.length; a++) {
                        var s = c[a];
                        i.id !== s.paId && i.name !== s.paName || i.consent || ((t = this.blockedScriptUrls).push.apply(t, s.scriptUrls),
                        (n = this.blockedPatterns).push.apply(n, s.scriptPatterns.map((function(e) {
                            return e
                        }
                        ))))
                    }
                this.scanExistingScripts(),
                this.unblockDeferredScripts()
            }
            ,
            n.prototype.initializeScriptInterceptor = function() {
                return Ao(this, void 0, void 0, (function() {
                    var t = this;
                    return Co(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.log(e.INFO, "Initializing Script interceptor"),
                            this.installHooks(),
                            this.installObserver(),
                            this.scanExistingScripts(),
                            [4, this.fetchScriptDataByPurpose()];
                        case 1:
                            return n.sent(),
                            this.initializeBlockedUrlPatternsFromCookie(),
                            this.scriptConfigInitialized = !0,
                            document.addEventListener("DOMContentLoaded", (function() {
                                return t.scanExistingScripts()
                            }
                            ), {
                                once: !0
                            }),
                            window.addEventListener("load", (function() {
                                return t.scanExistingScripts()
                            }
                            ), {
                                once: !0
                            }),
                            window.__rly_unblockDeferredScripts = function() {
                                return t.unblockDeferredScripts()
                            }
                            ,
                            this.log(e.INFO, "Script interceptor initialized"),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.postInitializeScriptInterceptor = function() {
                this.unblockDeferredScripts()
            }
            ,
            n.prototype.transformApiResponse = function(e) {
                var t;
                return null !== (t = e.results) && void 0 !== t ? t : []
            }
            ,
            n.prototype.initializeBlockedUrlPatternsFromCookie = function() {
                var e, t, n = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                if (n && !(null == n ? void 0 : n.isDefaultConsent)) {
                    this.blockedScriptUrls = [],
                    this.blockedPatterns = [];
                    for (var o = 0, r = n.consentPurposes; o < r.length; o++)
                        for (var i = r[o], a = 0, c = this._scriptDataByPurpose; a < c.length; a++) {
                            var s = c[a];
                            i.purposeId !== s.paId && i.name !== s.paName || i.checked || ((e = this.blockedScriptUrls).push.apply(e, s.scriptUrls),
                            (t = this.blockedPatterns).push.apply(t, s.scriptPatterns.map((function(e) {
                                return e
                            }
                            ))))
                        }
                }
            }
            ,
            n.prototype.shouldBlockSource = function(e) {
                if (!e)
                    return !1;
                if (e.includes(n.RELYANCE_AGENT_WHITELIST_STRING))
                    return !1;
                if (!this.scriptConfigInitialized)
                    return !0;
                var t = String(e).toLowerCase()
                  , o = this.agent.relyanceConsentStorageService.readConsentFromBrowser();
                if (!o || (null == o ? void 0 : o.isDefaultConsent)) {
                    var r = this.agent.relyanceBehaviorsConfigService.getConsentModelImmediate()
                      , i = C[r];
                    return this._scriptDataByPurpose.some((function(e) {
                        return !e.alwaysActive && !i && (e.scriptPatterns.some((function(e) {
                            return RegExp(e).test(t)
                        }
                        )) || e.scriptUrls.some((function(e) {
                            return t.includes(e)
                        }
                        )))
                    }
                    ))
                }
                return this.blockedPatterns.some((function(e) {
                    return RegExp(e).test(t)
                }
                )) || this.blockedScriptUrls.some((function(e) {
                    return t.includes(e)
                }
                ))
            }
            ,
            n.prototype.neutralizeScriptInstance = function(t, o, r, i) {
                try {
                    this.origElementSetAttribute.call(t, n.ATTR_TYPE, n.TYPE_PLAIN),
                    r && this.origElementSetAttribute.call(t, n.ATTR_BLOCKED_SRC, String(r)),
                    i && this.origElementSetAttribute.call(t, n.ATTR_BLOCKED_TEXT, i),
                    this.origElementSetAttribute.call(t, n.ATTR_BLOCKED, o || n.REASON_BLOCKED),
                    this.deferred.includes(t) || this.deferred.push(t)
                } catch (t) {
                    this.log(e.WARN, "[RLY] neutralizeScriptInstance error", t)
                }
            }
            ,
            n.prototype.instrumentScript = function(e) {
                var t = this
                  , o = e.setAttribute.bind(e);
                e.setAttribute = function(r, i) {
                    try {
                        return e.hasAttribute(n.ATTR_SAFE) ? o(r, i) : r.toLowerCase() === n.ATTR_SRC && t.shouldBlockSource(i) ? void t.neutralizeScriptInstance(e, n.REASON_SRC_BLOCKED, i) : o(r, i)
                    } catch (e) {
                        return o(r, i)
                    }
                }
                ;
                try {
                    var r = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, n.ATTR_SRC);
                    Object.defineProperty(e, n.ATTR_SRC, {
                        configurable: !0,
                        set: function(i) {
                            if (e.hasAttribute(n.ATTR_SAFE) || !t.shouldBlockSource(i))
                                return (null == r ? void 0 : r.set) ? r.set.call(e, i) : o(n.ATTR_SRC, i);
                            t.neutralizeScriptInstance(e, n.REASON_SRC_BLOCKED, i)
                        },
                        get: function() {
                            return (null == r ? void 0 : r.get) ? r.get.call(e) : e.getAttribute(n.ATTR_SRC)
                        }
                    })
                } catch (e) {}
            }
            ,
            n.prototype.installHooks = function() {
                var t = this;
                Document.prototype.createElement = function(e, o) {
                    var r = t.origCreateElement.call(this, e, o);
                    return String(e).toLowerCase() === n.TAG_SCRIPT && t.instrumentScript(r),
                    r
                }
                ,
                Document.prototype.createElementNS = function(e, o, r) {
                    var i = t.origCreateElementNS.call(this, e, o, r);
                    return String(o).toLowerCase() === n.TAG_SCRIPT && t.instrumentScript(i),
                    i
                }
                ,
                Node.prototype.appendChild = function(o) {
                    try {
                        if (o instanceof HTMLScriptElement) {
                            if (o.hasAttribute(n.ATTR_SAFE))
                                return t.origNodeAppendChild.call(this, o);
                            var r = o.getAttribute(n.ATTR_SRC)
                              , i = o.textContent || "";
                            if (r && t.shouldBlockSource(r))
                                return t.neutralizeScriptInstance(o, n.REASON_DYNAMIC_SRC_BLOCKED, r),
                                o;
                            if (!r && t.shouldBlockSource(i))
                                return t.neutralizeScriptInstance(o, n.REASON_DYNAMIC_INLINE_BLOCKED, null, i),
                                o
                        }
                    } catch (n) {
                        t.log(e.WARN, "[RLY] appendChild hook error", n)
                    }
                    return t.origNodeAppendChild.call(this, o)
                }
                ,
                Node.prototype.insertBefore = function(o, r) {
                    try {
                        if (o instanceof HTMLScriptElement) {
                            if (o.hasAttribute(n.ATTR_SAFE))
                                return t.origNodeInsertBefore.call(this, o, r);
                            var i = o.getAttribute(n.ATTR_SRC)
                              , a = o.textContent || "";
                            if (i && t.shouldBlockSource(i))
                                return t.neutralizeScriptInstance(o, n.REASON_DYNAMIC_SRC_BLOCKED, i),
                                o;
                            if (!i && t.shouldBlockSource(a))
                                return t.neutralizeScriptInstance(o, n.REASON_DYNAMIC_INLINE_BLOCKED, null, a),
                                o
                        }
                    } catch (n) {
                        t.log(e.WARN, "[RLY] insertBefore hook error", n)
                    }
                    return t.origNodeInsertBefore.call(this, o, r)
                }
            }
            ,
            n.prototype.installObserver = function() {
                var e = this
                  , t = new MutationObserver((function(t) {
                    for (var o = 0, r = t; o < r.length; o++)
                        for (var i = r[o], a = 0, c = Array.from(i.addedNodes); a < c.length; a++) {
                            var s = c[a];
                            if (s instanceof HTMLScriptElement && !s.hasAttribute(n.ATTR_SAFE))
                                try {
                                    var l = s.getAttribute(n.ATTR_SRC);
                                    if (l && e.shouldBlockSource(l))
                                        e.neutralizeScriptInstance(s, n.REASON_MO_SRC_BLOCKED, l);
                                    else {
                                        var u = s.textContent || "";
                                        e.shouldBlockSource(u) && e.neutralizeScriptInstance(s, n.REASON_MO_INLINE_BLOCKED, null, u)
                                    }
                                } catch (e) {}
                        }
                }
                ));
                t.observe(document.documentElement || document, {
                    childList: !0,
                    subtree: !0
                })
            }
            ,
            n.prototype.scanExistingScripts = function() {
                try {
                    for (var t = document.getElementsByTagName(n.TAG_SCRIPT), o = 0; o < t.length; o++) {
                        var r = t[o];
                        if (!r.hasAttribute(n.ATTR_SAFE) && !r.getAttribute(n.ATTR_BLOCKED)) {
                            var i = r.getAttribute(n.ATTR_SRC)
                              , a = r.textContent || "";
                            i && this.shouldBlockSource(i) ? this.neutralizeScriptInstance(r, n.REASON_POST_SCAN_BLOCKED, i) : !i && this.shouldBlockSource(a) && this.neutralizeScriptInstance(r, n.REASON_POST_SCAN_BLOCKED, null, a)
                        }
                    }
                } catch (t) {
                    this.log(e.WARN, "[RLY] scanExistingScripts error", t)
                }
            }
            ,
            n.prototype.unblockDeferredScripts = function() {
                try {
                    for (var t = this.deferred.slice(), o = 0, r = t; o < r.length; o++) {
                        var i = r[o];
                        try {
                            var a = i.parentNode;
                            if (!a)
                                continue;
                            var c = i.getAttribute(n.ATTR_BLOCKED_SRC)
                              , s = i.getAttribute(n.ATTR_BLOCKED_TEXT);
                            if (this.shouldBlockSource(c) || this.shouldBlockSource(s))
                                continue;
                            for (var l = this.origCreateElement.call(document, n.TAG_SCRIPT), u = 0, p = Array.from(i.attributes); u < p.length; u++) {
                                var d = p[u];
                                /^data-rly-/.test(d.name) || d.name === n.ATTR_TYPE || l.setAttribute(d.name, d.value)
                            }
                            c ? l.setAttribute(n.ATTR_SRC, c) : s && (l.textContent = s),
                            a.replaceChild(l, i);
                            var f = this.deferred.indexOf(i);
                            f > -1 && this.deferred.splice(f, 1)
                        } catch (t) {
                            this.log(e.WARN, "[RLY] unblock error for placeholder", t)
                        }
                    }
                } catch (t) {
                    this.log(e.WARN, "[RLY] __rly_unblockDeferredScripts error", t)
                }
            }
            ,
            n.RELYANCE_AGENT_WHITELIST_STRING = "relyance-agent.js",
            n.TAG_SCRIPT = "script",
            n.ATTR_SAFE = "data-rly-safe",
            n.ATTR_BLOCKED = "data-rly-blocked",
            n.ATTR_BLOCKED_SRC = "data-rly-blocked-src",
            n.ATTR_BLOCKED_TEXT = "data-rly-inlined-text",
            n.ATTR_TYPE = "type",
            n.TYPE_PLAIN = "text/plain",
            n.ATTR_SRC = "src",
            n.REASON_BLOCKED = "blocked",
            n.REASON_SRC_BLOCKED = "src-blocked",
            n.REASON_DYNAMIC_SRC_BLOCKED = "dynamic-src-blocked",
            n.REASON_DYNAMIC_INLINE_BLOCKED = "dynamic-inline-blocked",
            n.REASON_MO_SRC_BLOCKED = "mo-src-blocked",
            n.REASON_MO_INLINE_BLOCKED = "mo-inline-blocked",
            n.REASON_POST_SCAN_BLOCKED = "post-scan-blocked",
            n
        }(Dt)
          , To = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , yo = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , bo = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , _o = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return To(n, t),
            Object.defineProperty(n.prototype, "serviceName", {
                get: function() {
                    return "RelyanceUserLoginService"
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.onUserLoginCallBack = function(t) {
                return yo(this, void 0, void 0, (function() {
                    var n, o, r, i, a, c, s, l, u, p, d, f, h, A, C;
                    return bo(this, (function(g) {
                        switch (g.label) {
                        case 0:
                            return (null === (u = this.agent.relyanceBehaviorsConfigService.behaviorsConfig) || void 0 === u ? void 0 : u.consentStorage) && t ? [4, this.agent.relyanceClientHelperService.fetchUserLatestConsent(t)] : [2];
                        case 1:
                            return n = g.sent(),
                            (o = n.relyanceConsentUserId) ? (this.agent.relyanceConsentStorageService.storeUserDataCookie(o, t),
                            r = n.responseJson,
                            i = null !== (f = null === (d = null === (p = r.results) || void 0 === p ? void 0 : p[0]) || void 0 === d ? void 0 : d.updatedAt) && void 0 !== f ? f : "",
                            a = null !== (C = null === (A = null === (h = r.results) || void 0 === h ? void 0 : h[0]) || void 0 === A ? void 0 : A.processingActivities) && void 0 !== C ? C : [],
                            i && a.length ? (c = new Map,
                            a.forEach((function(e) {
                                c.set(e.processingActivityId, e.isEnabled)
                            }
                            )),
                            this.agent.relyanceConsentStorageService.acceptOrRejectProcessingActivities(c),
                            this.agent.relyanceBannerService.destroyBanner()) : (s = this.getLocalConsentData()) && !(null == s ? void 0 : s.isDefaultConsent) && (l = new Map,
                            s.consentPurposes.forEach((function(e) {
                                l.set(e.purposeId, e.checked)
                            }
                            )),
                            this.agent.relyanceConsentStorageService.acceptOrRejectProcessingActivities(l))) : this.log(e.WARN, "Invalid rlyConsentUserId, skipping LoginCallback"),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.onUserLogoutCallBack = function() {
                this.agent.relyanceConsentStorageService.deleteUserCookie()
            }
            ,
            n.prototype.onAgentInitialized = function() {
                t.prototype.onAgentInitialized.call(this),
                this.onPageLoadReload()
            }
            ,
            n.prototype.onPageLoadReload = function() {
                return yo(this, void 0, void 0, (function() {
                    var t, n, o, r, i, a, c, s, l, u, p, d, f, h, A, C, g, T, y, b, _, v;
                    return bo(this, (function(S) {
                        switch (S.label) {
                        case 0:
                            return t = this.agent.relyanceConsentStorageService.readUserDataFromBrowser(),
                            n = null !== (f = null == t ? void 0 : t.userId) && void 0 !== f ? f : "",
                            o = null !== (h = null == t ? void 0 : t.externalUserId) && void 0 !== h ? h : "",
                            (null === (A = this.agent.relyanceBehaviorsConfigService.behaviorsConfig) || void 0 === A ? void 0 : A.consentStorage) && n && o ? [4, this.agent.relyanceClientHelperService.fetchUserLatestConsent(o)] : [2];
                        case 1:
                            if ((r = S.sent()).relyanceConsentUserId == n)
                                if (i = r.responseJson,
                                a = null !== (T = null === (g = null === (C = i.results) || void 0 === C ? void 0 : C[0]) || void 0 === g ? void 0 : g.updatedAt) && void 0 !== T ? T : "",
                                c = null !== (_ = null === (b = null === (y = i.results) || void 0 === y ? void 0 : y[0]) || void 0 === b ? void 0 : b.processingActivities) && void 0 !== _ ? _ : [],
                                a && c.length)
                                    if (s = this.getLocalConsentData(),
                                    l = (null == s ? void 0 : s.timestamp) ? Math.floor((null == s ? void 0 : s.timestamp) / 1e3) : 0,
                                    u = null !== (v = null == s ? void 0 : s.consentPurposes) && void 0 !== v ? v : [],
                                    p = this.safeIsoToTimestampSeconds(a),
                                    s && !(null == s ? void 0 : s.isDefaultConsent) && l && p && l > p)
                                        ;
                                    else {
                                        if (this.areConsentsEqual(c, u))
                                            return this.log(e.INFO, "Local Consent exactly matched global consent, skipping pageLoadReload flow"),
                                            [2];
                                        d = new Map,
                                        c.forEach((function(e) {
                                            d.set(e.processingActivityId, e.isEnabled)
                                        }
                                        )),
                                        this.agent.relyanceConsentStorageService.acceptOrRejectProcessingActivities(d)
                                    }
                                else
                                    this.log(e.WARN, "Invalid rlyConsentUserId, skipping pageLoadReload flow");
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.areConsentsEqual = function(e, t) {
                if (e.length !== t.length)
                    return !1;
                for (var n = new Map(e.map((function(e) {
                    return [e.processingActivityId, e.isEnabled]
                }
                ))), o = 0, r = t; o < r.length; o++) {
                    var i = r[o]
                      , a = n.get(i.purposeId);
                    if (void 0 === a)
                        return !1;
                    if (a !== i.checked)
                        return !1
                }
                return !0
            }
            ,
            n.prototype.safeIsoToTimestampSeconds = function(e) {
                try {
                    var t = new Date(e);
                    return isNaN(t.getTime()) ? 0 : t.getTime() / 1e3
                } catch (e) {
                    return 0
                }
            }
            ,
            n.prototype.getLocalConsentData = function() {
                return this.agent.relyanceConsentStorageService.readConsentFromBrowser()
            }
            ,
            n
        }(Dt)
          , vo = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , So = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Eo = function(e, t) {
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(s) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, c[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (e) {
                                c = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, s])
                }
            }
        }
          , Po = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.CDN_URL = "https://consent.app.relyancestage.xyz",
                e.domain = "",
                e.domainAppId = "",
                e.forceAlwaysAllowVendorOptions = !1,
                e.scriptBlockingFeatureFlag = !1,
                e.chosenRegionGroup = d,
                e.api = new b(e),
                e.domain = e.getDomain(),
                e.domainAppId = e.getDomainAppId(),
                e.forceAlwaysAllowVendorOptions = e.isForceAlwaysAllowVendorOptions(),
                e.scriptBlockingFeatureFlag = e.getScriptBlockingFeatureFlag(),
                e.relyanceLoggerService = new Wn(e,e.api),
                e.relyanceBannerService = new Vt(e,e.api),
                e.relyancePreferenceCenterService = new Cn(e,e.api),
                e.relyanceLocaleService = new Fn(e,e.api),
                e.relyanceGeolocationService = new kn(e,e.api),
                e.relyanceTrackingTechnologyService = new Jn(e,e.api),
                e.relyanceRequestUrlsService = new Zn(e,e.api),
                e.relyanceProcessingActivitiesLocalizationService = new Yn(e,e.api),
                e.relyanceConsentStorageService = new no(e,e.api),
                e.relyanceBehaviorsConfigService = new Yt(e,e.api),
                e.relyanceScriptInterceptorService = new go(e,e.api),
                e.relyanceCommonInterceptorService = new ao(e,e.api),
                e.relyanceCookieInterceptorService = new On(e,e.api),
                e.relyanceStorageInterceptorService = new so(e,e.api),
                e.relyancePixelInterceptorService = new uo(e,e.api),
                e.relyanceBeaconInterceptorService = new fo(e,e.api),
                e.relyanceBrowserEventService = new Tn(e,e.api),
                e.relyanceClientHelperService = new In(e,e.api),
                e.relyanceConsentPurposesService = new Nn(e,e.api),
                e.relyanceGPCService = new Mn(e,e.api),
                e.relyanceUserLoginService = new _o(e,e.api),
                e.dispatchEvent(new _(g.RELYANCE_SERVICES_INITALIZED)),
                window.Relyance = e.api,
                e
            }
            return vo(n, t),
            n.getInstance = function() {
                return n._instance || (n._instance = new n),
                n._instance
            }
            ,
            n.prototype.initialize = function() {
                return So(this, void 0, void 0, (function() {
                    var t, n;
                    return Eo(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            this.log(e.INFO, "Initializing Relyance Consent Agent"),
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 10, , 11]),
                            this.scriptBlockingFeatureFlag ? [4, this.relyanceScriptInterceptorService.initializeScriptInterceptor()] : [3, 3];
                        case 2:
                            o.sent(),
                            o.label = 3;
                        case 3:
                            return [4, this.relyanceGeolocationService.fetchLocation()];
                        case 4:
                            return o.sent(),
                            t = this,
                            [4, this.fetchConfig()];
                        case 5:
                            return t.consentInterfaceTemplate = o.sent(),
                            [4, this.validateDomain()];
                        case 6:
                            return o.sent() ? [4, Promise.all([this.relyanceTrackingTechnologyService.fetchTrackingTechnologies(), this.relyanceRequestUrlsService.fetchRequestUrlsByPurpose(), this.relyanceProcessingActivitiesLocalizationService.getLocalizedProcessingActivities()])] : [3, 8];
                        case 7:
                            return o.sent(),
                            this.log(e.INFO, "Initializing interceptors..."),
                            this.relyanceCommonInterceptorService.initializeCommonInterceptor(),
                            this.relyanceCookieInterceptorService.initializeCookieInterceptor(),
                            this.relyanceStorageInterceptorService.initializeLocalStorageInterceptor(),
                            this.relyanceStorageInterceptorService.initializeSessionStorageInterceptor(),
                            this.relyancePixelInterceptorService.initializePixelInterceptor(),
                            this.relyanceBeaconInterceptorService.initializeBeaconInterceptor(),
                            this.initializeNetworkInterceptor(),
                            this.log(e.INFO, "-----------------Interceptors initialized-------------------"),
                            this.log(e.INFO, "Initializing consent agent..."),
                            this.applyConsentInterfaceToServices(),
                            this.dispatchEvent(new _(g.RELYANCE_AGENT_INITIALIZED)),
                            this.scriptBlockingFeatureFlag && this.relyanceScriptInterceptorService.postInitializeScriptInterceptor(),
                            [3, 9];
                        case 8:
                            throw new Error("Domain validation failed");
                        case 9:
                            return [3, 11];
                        case 10:
                            return n = o.sent(),
                            this.log(e.ERROR, "Consent initialization failed:", n),
                            [3, 11];
                        case 11:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.onLoginCallBack = function(e) {
                this.relyanceUserLoginService.onUserLoginCallBack(e)
            }
            ,
            n.prototype.onLogoutCallBack = function() {
                this.relyanceUserLoginService.onUserLogoutCallBack()
            }
            ,
            n.prototype.validateDomain = function() {
                return So(this, void 0, void 0, (function() {
                    var e, t;
                    return Eo(this, (function(n) {
                        return [2, null === (t = null === (e = this.consentInterfaceTemplate) || void 0 === e ? void 0 : e.domainName) || void 0 === t ? void 0 : t.includes(this.domain)]
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.initializeNetworkInterceptor = function() {
                y.initialize(this.relyanceRequestUrlsService.requestUrlsByPurpose, this.relyanceLoggerService)
            }
            ,
            n.prototype.log = function(t) {
                void 0 === t && (t = e.INFO);
                for (var n = [], o = 1; o < arguments.length; o++)
                    n[o - 1] = arguments[o];
                this.relyanceLoggerService.log("Relyance Consent Agent", t, n)
            }
            ,
            n.prototype.applyConsentInterfaceToServices = function() {
                this.relyanceBannerService.consentInterfaceTemplate = this.consentInterfaceTemplate,
                this.relyancePreferenceCenterService.consentInterfaceTemplate = this.consentInterfaceTemplate
            }
            ,
            n.prototype.getDomain = function() {
                //return window.location.hostname
                var e = window.location.hostname;
                // START Bypass for localhost:3000
                if (e === "localhost" || e === "127.0.0.1" || e.startsWith("localhost:") || e.startsWith("127.0.0.1:")) {
                    // Replace with a domain you know is configured in your CMP
                    return "cta-nextjs-pages-router.rai-csglab.xyz"; 
                }
                // END Bypass
                return e
            }
            ,
            n.prototype.getDomainAppId = function() {
                var e = document.currentScript
                  , t = (null == e ? void 0 : e.getAttribute(f)) || "";
                if (!t)
                    throw new Error("Cannot Initialize Relyance Consent Agent.\n AppId - ".concat(f, " is not configured for the Domain"));
                return t
            }
            ,
            n.prototype.isForceAlwaysAllowVendorOptions = function() {
                var e = document.currentScript;
                return "true" == ((null == e ? void 0 : e.getAttribute("data-force-allow-new-technologies")) || "")
            }
            ,
            n.prototype.getScriptBlockingFeatureFlag = function() {
                var e = document.currentScript;
                return "true" == ((null == e ? void 0 : e.getAttribute("data-relyance-zero-fire-mode")) || "")
            }
            ,
            n.prototype.fetchConfig = function() {
                return So(this, void 0, void 0, (function() {
                    var t, n, o, r, i;
                    return Eo(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            if (!(t = this.relyanceGeolocationService.location))
                                return this.log(e.WARN, "Location not available, cannot fetch config"),
                                [2, void 0];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 5, , 6]),
                            [4, this.relyanceBehaviorsConfigService.getBestMatchingBehaviorConfig(t)];
                        case 2:
                            if (!(n = a.sent()))
                                throw new Error("No matching behavior config found");
                            return this.chosenRegionGroup = n.regionGroup,
                            [4, this.relyanceClientHelperService.fetchDomainConfigs(u.REGION_CONFIGS, n.regionGroup)];
                        case 3:
                            return o = a.sent(),
                            r = o.results[0],
                            [4, this.relyanceLocaleService.fetchConfig(this.chosenRegionGroup, r)];
                        case 4:
                            return a.sent(),
                            [2, r];
                        case 5:
                            return i = a.sent(),
                            this.log(e.ERROR, "Error fetching config:", i),
                            [2, void 0];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n._instance = null,
            n
        }(T);
        !function() {
            So(this, void 0, void 0, (function() {
                return Eo(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, Po.getInstance().initialize()];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }()
    }
    )(),
    relyance_consent_management_agent = o
}
)();
//# sourceMappingURL=relyance-agent.js.map
