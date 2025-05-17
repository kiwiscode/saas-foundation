(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/hooks/useWindowDimension.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useWindowDimension = ()=>{
    _s();
    const [windowDimensions, setWindowDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: window.innerWidth,
        height: window.innerHeight
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowDimension.useEffect": ()=>{
            const handleResize = {
                "useWindowDimension.useEffect.handleResize": ()=>{
                    setWindowDimensions({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["useWindowDimension.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "useWindowDimension.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useWindowDimension.useEffect"];
        }
    }["useWindowDimension.useEffect"], []);
    return windowDimensions;
};
_s(useWindowDimension, "BQuWig/GyKy7G3DAvvqMuWyjbJE=");
const __TURBOPACK__default__export__ = useWindowDimension;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=hooks_useWindowDimension_ts_352883af._.js.map