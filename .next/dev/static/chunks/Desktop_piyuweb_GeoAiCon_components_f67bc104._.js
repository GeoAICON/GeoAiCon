(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn,
    "StaggerContainer",
    ()=>StaggerContainer,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var FadeIn = function(param) {
    var children = param.children, _param_delay = param.delay, delay = _param_delay === void 0 ? 0 : _param_delay, _param_duration = param.duration, duration = _param_duration === void 0 ? 0.4 : _param_duration, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: false,
            amount: 0.1
        },
        transition: {
            duration: duration,
            delay: delay,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, _this);
};
_c = FadeIn;
var StaggerContainer = function(param) {
    var children = param.children, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: false,
            amount: 0.1
        },
        variants: {
            hidden: {},
            show: {
                transition: {
                    staggerChildren: 0.1
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, _this);
};
_c1 = StaggerContainer;
var StaggerItem = function(param) {
    var children = param.children, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: {
            hidden: {
                opacity: 0,
                y: 30
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.4
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, _this);
};
_c2 = StaggerItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FadeIn");
__turbopack_context__.k.register(_c1, "StaggerContainer");
__turbopack_context__.k.register(_c2, "StaggerItem");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden section-padding bg-transparent flex items-center min-h-[90vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-standard relative z-10 w-full pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                className: "max-w-4xl space-y-10 pointer-events-auto pr-4 lg:pr-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block py-1 px-3 border border-base-300 rounded-badge text-xs font-semibold tracking-widest text-primary uppercase bg-base-200/50 backdrop-blur-sm shadow-sm",
                                children: "The Global GeoAI Conference Hub"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "leading-tight",
                                children: [
                                    "Advancing Geospatial AI ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 15,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base-content/50",
                                        children: "for Global Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl text-lg md:text-xl text-base-content/70 leading-relaxed font-light",
                            children: "An institutional ecosystem uniting top academic minds, government leaders, and industry pioneers to build the next generation of precise, scalable geospatial solutions."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                        className: "flex flex-col sm:flex-row gap-4 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#editions",
                                className: "btn btn-primary rounded-btn btn-lg px-8 border-transparent hover:border-transparent text-primary-content font-medium transition-transform hover:-translate-y-1 hover:shadow-lg",
                                children: "Explore Editions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#ecosystem",
                                className: "btn btn-outline border-base-300 rounded-btn btn-lg px-8 bg-base-100 text-base-content hover:bg-base-200 hover:border-base-300 transition-transform hover:-translate-y-1",
                                children: "View the Network"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-8 border-t border-base-300/50",
                        "aria-label": "Conference Statistics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: "5.2K+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 40,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold",
                                        children: "Attendees"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 39,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: "120+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 44,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold",
                                        children: "Publications"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 45,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: "45"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold",
                                        children: "Nations"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 47,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: "80+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 52,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold",
                                        children: "Keynotes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                        lineNumber: 53,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                                lineNumber: 51,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Hero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "section-padding bg-transparent relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-standard relative z-10 bg-base-100/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-base-200/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                    className: "grid lg:grid-cols-12 gap-12 lg:gap-24 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-primary uppercase text-sm font-semibold tracking-widest",
                                        children: "About The Brand Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
                                        children: "Pioneering Intelligent Spatial Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-base-content/70 leading-relaxed font-light",
                                        children: "GeoAI CON is the leading international platform dedicated to the convergence of Geographic Information Systems (GIS) and Artificial Intelligence."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                                className: "grid sm:grid-cols-2 gap-8 md:gap-12 pl-0 lg:pl-12 lg:border-l lg:border-base-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-6 h-6 text-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.516-.073 4.306-1.757c.567-1.65.073-3.515-1.757-4.306z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold tracking-tight",
                                                children: "Our Core Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base-content/70 leading-relaxed text-sm lg:text-base",
                                                children: "To drive innovation in spatial data science, earth observation, and intelligent mapping through collaborative research and scalable deployment across domains."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-xl bg-base-200 border border-base-300 flex items-center justify-center mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-6 h-6 text-base-content/80",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold tracking-tight",
                                                children: "Global Impact"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base-content/70 leading-relaxed text-sm lg:text-base",
                                                children: "Establishing technical standards, publishing peer-reviewed execution models, and connecting a decentralized network of working GeoAI professionals worldwide."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/About.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Editions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Editions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "editions",
        className: "section-padding bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-base-200/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-primary uppercase tracking-widest",
                                children: "The Conferences"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-4xl md:text-5xl font-bold tracking-tight",
                                children: "Official Editions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                    className: "grid lg:grid-cols-2 gap-8 md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group border border-base-300 rounded-box overflow-hidden hover:border-primary transition-all duration-300 bg-base-100 shadow-sm hover:shadow-md flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[16/9] w-full overflow-hidden border-b border-base-300/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/hero/2026.png",
                                            alt: "GeoAI CON 2026 Preview",
                                            fill: true,
                                            sizes: "(max-width: 768px) 100vw, 50vw",
                                            className: "object-cover group-hover:scale-105 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 flex flex-col justify-between flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "badge badge-primary badge-outline font-semibold uppercase tracking-wider text-xs px-3 py-3 rounded-badge",
                                                                children: "Upcoming Edition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                                lineNumber: 34,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-base-content/60 font-medium text-sm",
                                                                children: "Dec 2026"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-3xl font-bold mb-4",
                                                        children: "GeoAI CON 2026"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base-content/70 mb-8 leading-relaxed",
                                                        children: "The next frontier in intelligent geospatial systems. Join global innovators, researchers, and government leaders as we define the 2026 standards."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://2026.geoaicon.com",
                                                target: "_blank",
                                                className: "btn btn-primary w-fit rounded-btn text-primary-content hover:-translate-y-1 transition-transform",
                                                children: "Visit 2026 Portal →"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group border border-base-300 rounded-box overflow-hidden bg-base-200/30 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[16/9] w-full overflow-hidden border-b border-base-300/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/hero/2025.png",
                                            alt: "GeoAI CON 2025 Retrospective",
                                            fill: true,
                                            sizes: "(max-width: 768px) 100vw, 50vw",
                                            className: "object-cover group-hover:scale-105 transition-all duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 flex flex-col justify-between flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "badge font-semibold uppercase tracking-wider text-xs px-3 py-3 rounded-badge bg-base-300 border-none text-base-content/80",
                                                                children: "Completed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-base-content/60 font-medium text-sm",
                                                                children: "Dec 2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-3xl font-bold mb-4",
                                                        children: "GeoAI CON 2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base-content/70 mb-8 leading-relaxed",
                                                        children: "Our landmark previous edition that brought together thousands of researchers and established foundational frameworks for modern spatial AI."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://2025.geoaicon.com",
                                                target: "_blank",
                                                className: "btn btn-outline border-base-300 rounded-btn text-base-content w-fit hover:bg-base-300 hover:border-base-300 transition-colors hover:-translate-y-1",
                                                children: "Explore 2025 Retrospective"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify([
                            {
                                '@context': 'https://schema.org',
                                '@type': 'Event',
                                'name': 'GeoAI CON 2026',
                                'description': 'The next frontier in intelligent geospatial systems. Join global innovators, researchers, and government leaders.',
                                'startDate': '2026-12-01',
                                'endDate': '2026-12-03',
                                'eventStatus': 'https://schema.org/EventScheduled',
                                'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
                                'location': {
                                    '@type': 'Place',
                                    'name': 'To Be Announced'
                                },
                                'organizer': {
                                    '@type': 'Organization',
                                    'name': 'GeoAI CON'
                                }
                            },
                            {
                                '@context': 'https://schema.org',
                                '@type': 'Event',
                                'name': 'GeoAI CON 2025',
                                'description': 'Landmark previous edition that established foundational frameworks for modern spatial AI.',
                                'startDate': '2025-12-01',
                                'endDate': '2025-12-03',
                                'eventStatus': 'https://schema.org/EventCompleted',
                                'location': {
                                    '@type': 'Place',
                                    'name': 'Past Venue'
                                }
                            }
                        ])
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Editions.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Editions;
var _c;
__turbopack_context__.k.register(_c, "Editions");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntersessionPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function IntersessionPreview() {
    var _this = this;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), 2), activeDay = _useState[0], setActiveDay = _useState[1];
    // Grouped by day
    var galleryData = {
        1: [
            {
                src: '/gallery/day-1-2.jpg',
                title: 'Core Frameworks',
                desc: 'Setting the 2026 foundation'
            },
            {
                src: '/gallery/day-1-3.jpg',
                title: 'Main Keynote',
                desc: 'Opening the global portal'
            },
            {
                src: '/gallery/day-1-4.jpg',
                title: 'Panel Session',
                desc: 'Industry leaders debate'
            }
        ],
        2: [
            {
                src: '/gallery/day-2-1.jpg',
                title: 'Spatial Systems',
                desc: 'Next-gen mapping'
            },
            {
                src: '/gallery/day-2-2.jpg',
                title: 'Technology Demo',
                desc: 'Hands on application'
            },
            {
                src: '/gallery/day-2-3.jpg',
                title: 'Networking',
                desc: 'Global connections'
            }
        ],
        3: [
            {
                src: '/gallery/day-3-1.jpg',
                title: 'Drone Deployments',
                desc: 'Multi-spectral testing'
            },
            {
                src: '/gallery/day-3-2.jpg',
                title: 'Flight Systems',
                desc: 'Field operations'
            },
            {
                src: '/gallery/day-3-3.jpg',
                title: 'Data Capture',
                desc: 'Live spatial feeds'
            }
        ],
        4: [
            {
                src: '/gallery/day-4-1.jpg',
                title: 'Bathymetry Mapping',
                desc: 'Water-based intelligence'
            },
            {
                src: '/gallery/day-4-2.jpg',
                title: 'Hardware Config',
                desc: 'Marine sensors setup'
            },
            {
                src: '/gallery/day-4-3.jpg',
                title: 'Data Processing',
                desc: 'Analysis and rendering'
            }
        ]
    };
    var currentImages = galleryData[activeDay];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "intersession",
        className: "section-padding bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-base-200/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    className: "flex flex-col md:flex-row justify-between items-end gap-6 mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-primary uppercase tracking-widest",
                                children: "Ongoing Work"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-4xl md:text-5xl font-bold tracking-tight",
                                children: "Intersession Glimpses"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base-content/70 mt-4 max-w-lg leading-relaxed text-lg",
                                children: "Behind the scenes of our continual global research deployment and field operations between main events."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    delay: 0.2,
                    className: "mb-10 w-full overflow-x-auto pb-4 hide-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2 md:space-x-4 min-w-max border-b border-base-300",
                        children: [
                            1,
                            2,
                            3,
                            4
                        ].map(function(day) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    return setActiveDay(day);
                                },
                                className: "relative px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ".concat(activeDay === day ? 'text-primary' : 'text-base-content/50 hover:text-base-content'),
                                "aria-label": "View Day ".concat(day, " content"),
                                children: [
                                    "DAY 0",
                                    day,
                                    activeDay === day && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "activeTabUnderline",
                                        className: "absolute left-0 right-0 bottom-[-1px] h-[2px] bg-primary",
                                        initial: false,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, day, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[400px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            },
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                currentImages.map(function(img, i) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        transition: {
                                            duration: 0.4,
                                            ease: "easeOut"
                                        },
                                        className: "relative aspect-[4/5] overflow-hidden rounded-2xl group border border-base-300 shadow-sm cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: img.src,
                                                alt: img.title,
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw",
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary font-semibold text-xs tracking-widest uppercase mb-1",
                                                        children: [
                                                            "Day 0",
                                                            activeDay
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-medium text-lg leading-tight mb-1",
                                                        children: img.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/70 text-sm",
                                                        children: img.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, _this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://2026.geoaicon.com",
                                    target: "_blank",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut"
                                    },
                                    className: "relative aspect-[4/5] overflow-hidden rounded-2xl group border border-base-300 shadow-sm cursor-pointer bg-base-200 flex items-center justify-center isolate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/gallery/day-1-2.jpg",
                                            alt: "Background blur",
                                            fill: true,
                                            sizes: "25vw",
                                            className: "object-cover opacity-20 blur-md scale-110",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-base-100/40 to-base-200/90 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-20 flex flex-col items-center justify-center p-6 text-center space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl font-light text-primary",
                                                    children: "+87"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base-content font-medium uppercase tracking-widest text-sm",
                                                    children: "More Photos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base-content/60 text-xs text-center mt-2 max-w-[150px]",
                                                    children: "View the complete event gallery archive"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, activeDay, true, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    delay: 0.4,
                    className: "mt-16 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://2026.geoaicon.com",
                        target: "_blank",
                        className: "btn btn-primary rounded-full px-8 outline-none hover:shadow-lg transition-all",
                        children: "View Complete Intersession Gallery →"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/IntersessionPreview.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(IntersessionPreview, "YSYJ3hneyUn9UnH7CnZMz5l2c7g=");
_c = IntersessionPreview;
var _c;
__turbopack_context__.k.register(_c, "IntersessionPreview");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ecosystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
var rLogos = [
    'r1.png',
    'r2-fixed.png',
    'r3.png',
    'r5.png',
    'r6.jpeg',
    'r7.jpeg',
    'r8.jpeg'
];
var cLogos = [
    'c1.jpeg',
    'c2.png',
    'c5.jpeg',
    'c6.jpeg',
    'c1.jpeg',
    'c2.png',
    'c5.jpeg',
    'c6.jpeg'
];
function Ecosystem() {
    var _this = this;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ecosystem",
        className: "section-padding bg-transparent overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-base-200/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    className: "text-center max-w-3xl mx-auto mb-16 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-primary uppercase text-sm font-semibold tracking-widest",
                            children: "Global Reach"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-4xl md:text-5xl font-bold tracking-tight",
                            children: "The GeoAI Ecosystem"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base-content/70 text-lg leading-relaxed pt-2",
                            children: "A consortium of the world's leading academic institutions, spatial tech enterprises, and government spatial data infrastructures."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col gap-6 md:gap-10 mt-10 md:mt-12 w-full max-w-[100vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-base-100/30 to-transparent z-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-base-100/30 to-transparent z-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-max animate-infinite-scroll-reverse hover:[animation-play-state:paused]",
                        children: [
                            1,
                            2
                        ].map(function(setIdx) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max",
                                children: rLogos.map(function(logo, i) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-[160px] md:w-[240px] h-24 md:h-32 p-4 md:p-6 mx-3 md:mx-4 bg-white rounded-box border border-gray-200 shadow-sm transition-all duration-300 group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/LogoLoop/".concat(logo),
                                            alt: "GeoAI Partner",
                                            width: 200,
                                            height: 100,
                                            className: "object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                            lineNumber: 33,
                                            columnNumber: 19
                                        }, _this)
                                    }, "r-".concat(setIdx, "-").concat(i), false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, _this);
                                })
                            }, "r-set-".concat(setIdx), false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-max animate-infinite-scroll hover:[animation-play-state:paused]",
                        children: [
                            1,
                            2
                        ].map(function(setIdx) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max",
                                children: cLogos.map(function(logo, i) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-[160px] md:w-[240px] h-24 md:h-32 p-4 md:p-6 mx-3 md:mx-4 bg-white rounded-box border border-gray-200 shadow-sm transition-all duration-300 group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/LogoLoop/".concat(logo),
                                            alt: "GeoAI Partner",
                                            width: 200,
                                            height: 100,
                                            className: "object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, _this)
                                    }, "c-".concat(setIdx, "-").concat(i), false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, _this);
                                })
                            }, "c-set-".concat(setIdx), false, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/Ecosystem.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Ecosystem;
var _c;
__turbopack_context__.k.register(_c, "Ecosystem");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/components/layout/Animations.tsx [app-client] (ecmascript)");
'use client';
;
;
;
var faqs = [
    {
        question: 'What is GeoAI CON?',
        answer: 'GeoAI CON is the premier international conference dedicated to the convergence of Geospatial Information Systems (GIS) and Artificial Intelligence. It brings together researchers, industry leaders, and policymakers to discuss the latest advancements in spatial AI.'
    },
    {
        question: 'When is the next GeoAI CON?',
        answer: 'The next edition, GeoAI CON 2026, is scheduled for December 2026. Stay tuned for official announcements regarding the exact dates and venue.'
    },
    {
        question: 'How can I partner with GeoAI CON?',
        answer: 'We offer various partnership opportunities for academic institutions, tech companies, and government organizations. You can reach out to us via the "Partner with us" button in the navigation bar.'
    },
    {
        question: 'Are past conference recordings available?',
        answer: 'Yes, retrospectives and select recordings from past editions like GeoAI CON 2025 are available through our archives and dedicated portal links on this site.'
    }
];
function FAQ() {
    var _this = this;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "section-padding bg-transparent border-b border-base-300/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-base-200/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                    className: "text-center max-w-3xl mx-auto mb-16 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-primary uppercase text-sm font-semibold tracking-widest",
                            children: "Support"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-4xl md:text-5xl font-bold tracking-tight",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerContainer"], {
                    className: "max-w-4xl mx-auto divide-y divide-base-300",
                    children: faqs.map(function(faq, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$components$2f$layout$2f$Animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                            className: "py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "collapse collapse-plus bg-base-200/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "faq-accordion"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "collapse-title text-xl font-medium",
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "collapse-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base-content/70 leading-relaxed",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, _this)
                        }, index, false, {
                            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': faqs.map(function(faq) {
                                return {
                                    '@type': 'Question',
                                    'name': faq.question,
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': faq.answer
                                    }
                                };
                            })
                        })
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/sections/FAQ.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/piyuweb/GeoAiCon/components/3d/DroneBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DroneBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/piyuweb/GeoAiCon/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var Spline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
    return __turbopack_context__.A("[project]/Desktop/piyuweb/GeoAiCon/node_modules/@splinetool/react-spline/dist/react-spline.js [app-client] (ecmascript, next/dynamic entry, async loader)");
}, {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/piyuweb/GeoAiCon/node_modules/@splinetool/react-spline/dist/react-spline.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Spline;
function DroneBackground() {
    _s();
    var spline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var scrollYProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])().scrollYProgress;
    // Create a rotation value that maps 0-1 scroll progress to -90 to +90 degrees (Math.PI / 2)
    // This makes the drone "turn" as the user scrolls.
    var rotationY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        Math.PI
    ]);
    // Track vertical drift to give it a slight "flying down" feel
    var positionY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -150
    ]);
    function onLoad(splineApp) {
        spline.current = splineApp;
    }
    // Use Motion Value Event to update Spline safely on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(rotationY, "change", {
        "DroneBackground.useMotionValueEvent": function(latest) {
            if (spline.current) {
                var drone = spline.current.findObjectByName('Drone');
                if (drone) {
                    drone.rotation.y = latest;
                }
            }
        }
    }["DroneBackground.useMotionValueEvent"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(positionY, "change", {
        "DroneBackground.useMotionValueEvent": function(latest) {
            if (spline.current) {
                var drone = spline.current.findObjectByName('Drone');
                if (drone) {
                    drone.position.y = latest;
                }
            }
        }
    }["DroneBackground.useMotionValueEvent"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[-10] w-full h-full pointer-events-none overflow-hidden select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full pointer-events-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spline, {
                scene: "https://prod.spline.design/w1MzRxYCg9LT1Zi6/scene.splinecode",
                onLoad: onLoad
            }, void 0, false, {
                fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/3d/DroneBackground.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/3d/DroneBackground.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/piyuweb/GeoAiCon/components/3d/DroneBackground.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(DroneBackground, "/N3R2lyk6br30CsoUy+yz1X/zWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c1 = DroneBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "Spline");
__turbopack_context__.k.register(_c1, "DroneBackground");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$piyuweb$2f$GeoAiCon$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_piyuweb_GeoAiCon_components_f67bc104._.js.map