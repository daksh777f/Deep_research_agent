module.exports = [
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-compose-ref_287cebad18042fd6fb5af8faf437ffd9/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.7_react@19.2.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-compose-ref_287cebad18042fd6fb5af8faf437ffd9/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.7_react@19.2.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-compose-ref_287cebad18042fd6fb5af8faf437ffd9/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-primitive@2_a3e640c09100c2f131c6304f3af699b7/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.7_react@19.2.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-primitive@2_72ad84f0602c524d55aabfe4774191a7/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.7_react@19.2.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-use-layout-_b582217860a0dd762399d5cad38b0909/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/use-layout-effect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-presence@1._a854ca95c1338f0b689e2e1899ae0fb5/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-compose-ref_287cebad18042fd6fb5af8faf437ffd9/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_b582217860a0dd762399d5cad38b0909$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-use-layout-_b582217860a0dd762399d5cad38b0909/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_b582217860a0dd762399d5cad38b0909$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_b582217860a0dd762399d5cad38b0909$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node2)=>{
            stylesRef.current = node2 ? getComputedStyle(node2) : null;
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Presence;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-context@1.1_3a3d7d42a802082a2ea34724da0084cb/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/create-context.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-use-callbac_acbafd22d8d3c6a28594fb08f352e578/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/use-callback-ref.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-direction@1_12722afd2eb6d17522476aeaad977ea7/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var canUseDOM = !!(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-scroll-area_a97a365de5626125f3ace9d3e2d13968/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Corner",
    ()=>Corner,
    "Root",
    ()=>Root,
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner,
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar,
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb,
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport,
    "Scrollbar",
    ()=>Scrollbar,
    "Thumb",
    ()=>Thumb,
    "Viewport",
    ()=>Viewport,
    "createScrollAreaScope",
    ()=>createScrollAreaScope
]);
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-primitive@2_a3e640c09100c2f131c6304f3af699b7/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_a854ca95c1338f0b689e2e1899ae0fb5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-presence@1._a854ca95c1338f0b689e2e1899ae0fb5/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_3a3d7d42a802082a2ea34724da0084cb$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-context@1.1_3a3d7d42a802082a2ea34724da0084cb/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-compose-ref_287cebad18042fd6fb5af8faf437ffd9/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-use-callbac_acbafd22d8d3c6a28594fb08f352e578/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_12722afd2eb6d17522476aeaad977ea7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-direction@1_12722afd2eb6d17522476aeaad977ea7/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_b582217860a0dd762399d5cad38b0909$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+react-use-layout-_b582217860a0dd762399d5cad38b0909/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$number$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
;
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_3a3d7d42a802082a2ea34724da0084cb$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarX, setScrollbarX] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarY, setScrollbarY] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [cornerWidth, setCornerWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [cornerHeight, setCornerHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollArea(node));
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_12722afd2eb6d17522476aeaad977ea7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
            }
        })
    });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-radix-scroll-area-viewport": "",
                ...viewportProps,
                ref: composedRefs,
                style: {
                    /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */ overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
                    ...props.style
                },
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: context.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children
                })
            })
        ]
    });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarHover, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarScroll, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false), context.scrollHideDelay);
            };
            scrollArea.addEventListener("pointerenter", handlePointerEnter);
            scrollArea.addEventListener("pointerleave", handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                scrollArea.removeEventListener("pointerleave", handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_a854ca95c1338f0b689e2e1899ae0fb5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(()=>send("SCROLL_END"), 100);
    const [state, send] = useStateMachine("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (state === "idle") {
            const hideTimer = window.setTimeout(()=>send("HIDE"), context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer);
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send("SCROLL");
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_a854ca95c1338f0b689e2e1899ae0fb5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || state !== "hidden",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: forwardedRef,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>send("POINTER_ENTER")),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>send("POINTER_LEAVE"))
        })
    });
});
var ScrollAreaScrollbarAuto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_a854ca95c1338f0b689e2e1899ae0fb5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarVisible = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const [sizes, setSizes] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarX, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                    thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarY, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                    thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
        });
    }
    return null;
});
var ScrollAreaScrollbarX = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarXChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            bottom: 0,
            left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollWidth,
                    viewport: context.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: toInt(computedStyle.paddingLeft),
                        paddingEnd: toInt(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
var ScrollAreaScrollbarY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarYChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            top: 0,
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: toInt(computedStyle.paddingTop),
                        paddingEnd: toInt(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollbar(node));
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevWebkitUserSelectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onWheelScroll);
    const handleThumbPositionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar?.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener("wheel", handleWheel, {
                passive: false
            });
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbChange),
        onThumbPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerDown),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            ...scrollbarProps,
            ref: composeRefs,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, handleDragScroll),
            onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    element.releasePointerCapture(event.pointerId);
                }
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                if (context.viewport) context.viewport.style.scrollBehavior = "";
                rectRef.current = null;
            })
        })
    });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_a854ca95c1338f0b689e2e1899ae0fb5$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || scrollbarContext.hasThumb,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaThumbImpl, {
            ref: forwardedRef,
            ...thumbProps
        })
    });
});
var ScrollAreaThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_287cebad18042fd6fb5af8faf437ffd9$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>scrollbarContext.onThumbChange(node));
    const removeUnlinkedScrollListenerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const debounceScrollEnd = useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = void 0;
        }
    }, 100);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$3$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaCornerImpl, {
        ...props,
        ref: forwardedRef
    }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, ()=>{
        const height2 = context.scrollbarX?.offsetHeight || 0;
        context.onCornerHeightChange(height2);
        setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, ()=>{
        const width2 = context.scrollbarY?.offsetWidth || 0;
        context.onCornerWidthChange(width2);
        setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_a3e640c09100c2f131c6304f3af699b7$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...cornerProps,
        ref: forwardedRef,
        style: {
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...props.style
        }
    }) : null;
});
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$number$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollPos, scrollClampRange);
    const interpolate = linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
    const handleCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(callback);
    const debounceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>()=>window.clearTimeout(debounceTimerRef.current), []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_acbafd22d8d3c6a28594fb08f352e578$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_b582217860a0dd762399d5cad38b0909$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
];
const ArrowUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-up", __iconNode);
;
 //# sourceMappingURL=arrow-up.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19h8",
            key: "baeox8"
        }
    ],
    [
        "path",
        {
            d: "m4 17 6-6-6-6",
            key: "1yngyt"
        }
    ]
];
const Terminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("terminal", __iconNode);
;
 //# sourceMappingURL=terminal.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
];
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("globe", __iconNode);
;
 //# sourceMappingURL=globe.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/dna.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Dna
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m10 16 1.5 1.5",
            key: "11lckj"
        }
    ],
    [
        "path",
        {
            d: "m14 8-1.5-1.5",
            key: "1ohn8i"
        }
    ],
    [
        "path",
        {
            d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
            key: "80uv8i"
        }
    ],
    [
        "path",
        {
            d: "m16.5 10.5 1 1",
            key: "696xn5"
        }
    ],
    [
        "path",
        {
            d: "m17 6-2.891-2.891",
            key: "xu6p2f"
        }
    ],
    [
        "path",
        {
            d: "M2 15c6.667-6 13.333 0 20-6",
            key: "1pyr53"
        }
    ],
    [
        "path",
        {
            d: "m20 9 .891.891",
            key: "3xwk7g"
        }
    ],
    [
        "path",
        {
            d: "M3.109 14.109 4 15",
            key: "q76aoh"
        }
    ],
    [
        "path",
        {
            d: "m6.5 12.5 1 1",
            key: "cs35ky"
        }
    ],
    [
        "path",
        {
            d: "m7 18 2.891 2.891",
            key: "1sisit"
        }
    ],
    [
        "path",
        {
            d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
            key: "q3hbxp"
        }
    ]
];
const Dna = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("dna", __iconNode);
;
 //# sourceMappingURL=dna.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/dna.js [app-ssr] (ecmascript) <export default as Dna>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dna",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/dna.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle", __iconNode);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Circle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BrainCircuit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M9 13a4.5 4.5 0 0 0 3-4",
            key: "10igwf"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M12 13h4",
            key: "1ku699"
        }
    ],
    [
        "path",
        {
            d: "M12 18h6a2 2 0 0 1 2 2v1",
            key: "105ag5"
        }
    ],
    [
        "path",
        {
            d: "M12 8h8",
            key: "1lhi5i"
        }
    ],
    [
        "path",
        {
            d: "M16 8V5a2 2 0 0 1 2-2",
            key: "u6izg6"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "13",
            r: ".5",
            key: "ry7gng"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "3",
            r: ".5",
            key: "1aiba7"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "21",
            r: ".5",
            key: "yhc1fs"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "8",
            r: ".5",
            key: "1e43v0"
        }
    ]
];
const BrainCircuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("brain-circuit", __iconNode);
;
 //# sourceMappingURL=brain-circuit.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript) <export default as BrainCircuit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrainCircuit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertTriangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
 //# sourceMappingURL=layers.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
 //# sourceMappingURL=chevron-up.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>GraduationCap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
];
const GraduationCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("graduation-cap", __iconNode);
;
 //# sourceMappingURL=graduation-cap.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraduationCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleQuestionMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const CircleQuestionMark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-question-mark", __iconNode);
;
 //# sourceMappingURL=circle-question-mark.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "path",
        {
            d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
            key: "zcdpyk"
        }
    ],
    [
        "path",
        {
            d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
            key: "1yorad"
        }
    ],
    [
        "path",
        {
            d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
            key: "eua70x"
        }
    ],
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ]
];
const Scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("scale", __iconNode);
;
 //# sourceMappingURL=scale.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Lightbulb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
];
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("lightbulb", __iconNode);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Share2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }
    ]
];
const Share2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("share-2", __iconNode);
;
 //# sourceMappingURL=share-2.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Share2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("book-open", __iconNode);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/presentation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Presentation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2 3h20",
            key: "91anmk"
        }
    ],
    [
        "path",
        {
            d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",
            key: "2k9sn8"
        }
    ],
    [
        "path",
        {
            d: "m7 21 5-5 5 5",
            key: "bip4we"
        }
    ]
];
const Presentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("presentation", __iconNode);
;
 //# sourceMappingURL=presentation.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/presentation.js [app-ssr] (ecmascript) <export default as Presentation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presentation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/presentation.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SquareCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
            key: "2acyp4"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const SquareCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("square-check-big", __iconNode);
;
 //# sourceMappingURL=square-check-big.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SendHorizontal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
            key: "117uat"
        }
    ],
    [
        "path",
        {
            d: "M6 12h16",
            key: "s4cdu5"
        }
    ]
];
const SendHorizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("send-horizontal", __iconNode);
;
 //# sourceMappingURL=send-horizontal.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-ssr] (ecmascript) <export default as SendHorizonal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendHorizonal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SkipForward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 4v16",
            key: "7j8fe9"
        }
    ],
    [
        "path",
        {
            d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
            key: "zs4d6"
        }
    ]
];
const SkipForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("skip-forward", __iconNode);
;
 //# sourceMappingURL=skip-forward.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-ssr] (ecmascript) <export default as SkipForward>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CodeXml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
];
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("code-xml", __iconNode);
;
 //# sourceMappingURL=code-xml.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChartColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
];
const ChartColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chart-column", __iconNode);
;
 //# sourceMappingURL=chart-column.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeftRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 3 4 7l4 4",
            key: "9rb6wj"
        }
    ],
    [
        "path",
        {
            d: "M4 7h16",
            key: "6tx8e3"
        }
    ],
    [
        "path",
        {
            d: "m16 21 4-4-4-4",
            key: "siv7j2"
        }
    ],
    [
        "path",
        {
            d: "M20 17H4",
            key: "h6l3hr"
        }
    ]
];
const ArrowLeftRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left-right", __iconNode);
;
 //# sourceMappingURL=arrow-left-right.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript) <export default as ArrowLeftRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeftRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
            key: "1n3hpd"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
            key: "rfe1zi"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a1 1 0 0 0 0-5H18",
            key: "7xy6bh"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
            key: "1mhfuq"
        }
    ],
    [
        "path",
        {
            d: "M6 9H4.5a1 1 0 0 1 0-5H6",
            key: "tex48p"
        }
    ]
];
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trophy", __iconNode);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Minus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
];
const Minus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("minus", __iconNode);
;
 //# sourceMappingURL=minus.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Minus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
 //# sourceMappingURL=shield-check.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
];
const ShieldAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shield-alert", __iconNode);
;
 //# sourceMappingURL=shield-alert.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldAlert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldQuestionMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
            key: "mhlwft"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const ShieldQuestionMark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shield-question-mark", __iconNode);
;
 //# sourceMappingURL=shield-question-mark.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-ssr] (ecmascript) <export default as ShieldQuestion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldQuestion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExternalLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Maximize2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "m21 3-7 7",
            key: "1l2asr"
        }
    ],
    [
        "path",
        {
            d: "m3 21 7-7",
            key: "tjx5ai"
        }
    ],
    [
        "path",
        {
            d: "M9 21H3v-6",
            key: "wtvkvv"
        }
    ]
];
const Maximize2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("maximize-2", __iconNode);
;
 //# sourceMappingURL=maximize-2.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Maximize2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Minimize2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m14 10 7-7",
            key: "oa77jy"
        }
    ],
    [
        "path",
        {
            d: "M20 10h-6V4",
            key: "mjg0md"
        }
    ],
    [
        "path",
        {
            d: "m3 21 7-7",
            key: "tjx5ai"
        }
    ],
    [
        "path",
        {
            d: "M4 14h6v6",
            key: "rmj7iw"
        }
    ]
];
const Minimize2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("minimize-2", __iconNode);
;
 //# sourceMappingURL=minimize-2.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Minimize2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Link2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 17H7A5 5 0 0 1 7 7h2",
            key: "8i5ue5"
        }
    ],
    [
        "path",
        {
            d: "M15 7h2a5 5 0 1 1 0 10h-2",
            key: "1b9ql8"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12",
            key: "1jonct"
        }
    ]
];
const Link2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("link-2", __iconNode);
;
 //# sourceMappingURL=link-2.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$560$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/lucide-react@0.560.0_react@19.2.1/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecate",
    ()=>deprecate,
    "equal",
    ()=>equal,
    "ok",
    ()=>ok,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)");
;
/**
 * @type {Set<string>}
 */ const codesWarned = new Set();
class AssertionError extends Error {
    name = 'Assertion';
    code = 'ERR_ASSERTION';
    /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */ // eslint-disable-next-line max-params
    constructor(message, actual, expected, operator, generated){
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        /**
     * @type {unknown}
     */ this.actual = actual;
        /**
     * @type {unknown}
     */ this.expected = expected;
        /**
     * @type {boolean}
     */ this.generated = generated;
        /**
     * @type {string}
     */ this.operator = operator;
    }
}
class DeprecationError extends Error {
    name = 'DeprecationWarning';
    /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */ constructor(message, code){
        super(message);
        /**
     * @type {string | undefined}
     */ this.code = code;
    }
}
function deprecate(fn, message, code) {
    let warned = false;
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    // @ts-expect-error: it’s perfect, typescript…
    return deprecated;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */ function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (typeof code === 'string' && codesWarned.has(code)) {
            // Empty.
            } else {
                console.error(new DeprecationError(message, code || undefined));
                if (typeof code === 'string') codesWarned.add(code);
            }
        }
        return new.target ? Reflect.construct(fn, args, new.target) : Reflect.apply(fn, this, args);
    }
}
function equal(actual, expected, message) {
    assert((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"])(actual, expected), actual, expected, 'equal', 'Expected values to be deeply equal', message);
}
function ok(value, message) {
    assert(Boolean(value), false, true, 'ok', 'Expected value to be truthy', message);
}
function unreachable(message) {
    assert(false, false, true, 'ok', 'Unreachable', message);
}
/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */ // eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
    if (!bool) {
        throw userMessage instanceof Error ? userMessage : new AssertionError(userMessage || defaultMessage, actual, expected, operator, !userMessage);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */ /**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */ /**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    /** @type {Array<string>} */ const tokens = [];
    const input = String(value || '');
    let index = input.indexOf(',');
    let start = 0;
    /** @type {boolean} */ let end = false;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        const token = input.slice(start, index).trim();
        if (token || !end) {
            tokens.push(token);
        }
        start = index + 1;
        index = input.indexOf(',', start);
    }
    return tokens;
}
function stringify(values, options) {
    const settings = options || {};
    // Ensure the last empty entry is seen.
    const input = values[values.length - 1] === '' ? [
        ...values,
        ''
    ] : values;
    return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [jsx=false]
 *   Support JSX identifiers (default: `false`).
 */ __turbopack_context__.s([
    "cont",
    ()=>cont,
    "name",
    ()=>name,
    "start",
    ()=>start
]);
const startRe = /[$_\p{ID_Start}]/u;
const contRe = /[$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const contReJsx = /[-$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
/** @type {Options} */ const emptyOptions = {};
function start(code) {
    return code ? startRe.test(String.fromCodePoint(code)) : false;
}
function cont(code, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? contReJsx : contRe;
    return code ? re.test(String.fromCodePoint(code)) : false;
}
function name(name, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? nameReJsx : nameRe;
    return re.test(name);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ // HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
__turbopack_context__.s([
    "whitespace",
    ()=>whitespace
]);
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
    return typeof thing === 'object' ? thing.type === 'text' ? empty(thing.value) : false : empty(thing);
}
/**
 * @param {string} value
 * @returns {boolean}
 */ function empty(value) {
    return value.replace(re, '') === '';
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info as InfoType} from 'property-information'
 */ /** @type {InfoType} */ __turbopack_context__.s([
    "Info",
    ()=>Info
]);
class Info {
    /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */ constructor(property, attribute){
        this.attribute = attribute;
        this.property = property;
    }
}
Info.prototype.attribute = '';
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = '';
Info.prototype.spaceSeparated = false;
Info.prototype.space = undefined;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolean",
    ()=>boolean,
    "booleanish",
    ()=>booleanish,
    "commaOrSpaceSeparated",
    ()=>commaOrSpaceSeparated,
    "commaSeparated",
    ()=>commaSeparated,
    "number",
    ()=>number,
    "overloadedBoolean",
    ()=>overloadedBoolean,
    "spaceSeparated",
    ()=>spaceSeparated
]);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Space} from 'property-information'
 */ __turbopack_context__.s([
    "DefinedInfo",
    ()=>DefinedInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const checks = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
class DefinedInfo extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"] {
    /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, 'space', space);
        if (typeof mask === 'number') {
            while(++index < checks.length){
                const check = checks[index];
                mark(this, checks[index], (mask & __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]);
            }
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @template {keyof DefinedInfo} Key
 *   Key type.
 * @param {DefinedInfo} values
 *   Info.
 * @param {Key} key
 *   Key.
 * @param {DefinedInfo[Key]} value
 *   Value.
 * @returns {undefined}
 *   Nothing.
 */ function mark(values, key, value) {
    if (value) {
        values[key] = value;
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the cleaned case insensitive form of an attribute or property.
 *
 * @param {string} value
 *   An attribute-like or property-like name.
 * @returns {string}
 *   Value that can be used to look up the properly cased property on a
 *   `Schema`.
 */ __turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
function normalize(value) {
    return value.toLowerCase();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema} from 'property-information'
 */ __turbopack_context__.s([
    "find",
    ()=>find
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
;
;
;
const cap = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;
function find(schema, value) {
    const normal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(value);
    let property = value;
    let Type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"];
    if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === '-') {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            property = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== '-') {
                    dashes = '-' + dashes;
                }
                value = 'data' + dashes;
            }
        }
        Type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"];
    }
    return new Type(property, value);
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Kebab.
 */ function kebab($0) {
    return '-' + $0.toLowerCase();
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Camel.
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Special cases for React (`Record<string, string>`).
 *
 * `hast` is close to `React` but differs in a couple of cases.
 * To get a React property from a hast property,
 * check if it is in `hastToReact`.
 * If it is, use the corresponding value;
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "hastToReact",
    ()=>hastToReact
]);
const hastToReact = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink'
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema as SchemaType, Space} from 'property-information'
 */ /** @type {SchemaType} */ __turbopack_context__.s([
    "Schema",
    ()=>Schema
]);
class Schema {
    /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */ constructor(property, normal, space){
        this.normal = normal;
        this.property = property;
        if (space) {
            this.space = space;
        }
    }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = undefined;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ __turbopack_context__.s([
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
function merge(definitions, space) {
    /** @type {Record<string, Info>} */ const property = {};
    /** @type {Record<string, string>} */ const normal = {};
    for (const definition of definitions){
        Object.assign(property, definition.property);
        Object.assign(normal, definition.normal);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](property, normal, space);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ /**
 * @typedef Definition
 *   Definition of a schema.
 * @property {Record<string, string> | undefined} [attributes]
 *   Normalzed names to special attribute case.
 * @property {ReadonlyArray<string> | undefined} [mustUseProperty]
 *   Normalized names that must be set as properties.
 * @property {Record<string, number | null>} properties
 *   Property names to their types.
 * @property {Space | undefined} [space]
 *   Space.
 * @property {Transform} transform
 *   Transform a property name.
 */ /**
 * @callback Transform
 *   Transform.
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} property
 *   Property.
 * @returns {string}
 *   Attribute.
 */ __turbopack_context__.s([
    "create",
    ()=>create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
;
;
function create(definition) {
    /** @type {Record<string, Info>} */ const properties = {};
    /** @type {Record<string, string>} */ const normals = {};
    for (const [property, value] of Object.entries(definition.properties)){
        const info = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"](property, definition.transform(definition.attributes || {}, property), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
            info.mustUseProperty = true;
        }
        properties[property] = info;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(property)] = property;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(info.attribute)] = property;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](properties, normals, definition.space);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aria",
    ()=>aria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const aria = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaAutoComplete: null,
        ariaBusy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaChecked: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaColCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColSpan: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaControls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaCurrent: null,
        ariaDescribedBy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaDetails: null,
        ariaDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaDropEffect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaErrorMessage: null,
        ariaExpanded: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaFlowTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaGrabbed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaHasPopup: null,
        ariaHidden: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaLevel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaLive: null,
        ariaModal: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiLine: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiSelectable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaOrientation: null,
        ariaOwns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaPlaceholder: null,
        ariaPosInSet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaPressed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaReadOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRelevant: null,
        ariaRequired: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRoleDescription: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaRowCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSelected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaSetSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSort: null,
        ariaValueMax: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueMin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueNow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueText: null,
        role: null
    },
    transform (_, property) {
        return property === 'role' ? property : 'aria-' + property.slice(4).toLowerCase();
    }
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} attribute
 *   Attribute.
 * @returns {string}
 *   Transformed attribute.
 */ __turbopack_context__.s([
    "caseSensitiveTransform",
    ()=>caseSensitiveTransform
]);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseInsensitiveTransform",
    ()=>caseInsensitiveTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
;
function caseInsensitiveTransform(attributes, property) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"])(attributes, property.toLowerCase());
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv'
    },
    mustUseProperty: [
        'checked',
        'multiple',
        'muted',
        'selected'
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        acceptCharset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        accessKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        action: null,
        allow: null,
        allowFullScreen: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowPaymentRequest: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowUserMedia: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        alt: null,
        as: null,
        async: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoCapitalize: null,
        autoComplete: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoPlay: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        blocking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        capture: null,
        charSet: null,
        checked: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        cite: null,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        cols: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        colSpan: null,
        content: null,
        contentEditable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        controls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        controlsList: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        coords: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"] | __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        defer: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dir: null,
        dirName: null,
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        download: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        draggable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        formTarget: null,
        headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hidden: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        high: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        href: null,
        hrefLang: null,
        htmlFor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        httpEquiv: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        inputMode: null,
        integrity: null,
        is: null,
        isMap: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemId: null,
        itemProp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemRef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemScope: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        low: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        manifest: null,
        max: null,
        maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        media: null,
        method: null,
        min: null,
        minLength: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        multiple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        muted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        name: null,
        nonce: null,
        noModule: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noValidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        optimum: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pattern: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        placeholder: null,
        playsInline: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        referrerPolicy: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        reversed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sandbox: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        scope: null,
        scoped: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        seamless: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        selected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootClonable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootDelegatesFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootMode: null,
        shape: null,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sizes: null,
        slot: null,
        span: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spellCheck: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        step: null,
        style: null,
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        useMap: null,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        width: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        wrap: null,
        writingSuggestions: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        axis: null,
        background: null,
        bgColor: null,
        border: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        borderColor: null,
        bottomMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        declare: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        leftMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        marginWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        noResize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noHref: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noShade: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rules: null,
        scheme: null,
        scrolling: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        standby: null,
        summary: null,
        text: null,
        topMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        disableRemotePlayback: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        prefix: null,
        property: null,
        results: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        security: null,
        unselectable: null
    },
    space: 'html',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        transformOrigin: 'transform-origin',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin'
    },
    properties: {
        about: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        accentHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        amplitude: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        arabicForm: null,
        ascent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        attributeName: null,
        attributeType: null,
        azimuth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        by: null,
        calcMode: null,
        capHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        diffuseConstant: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        direction: null,
        display: null,
        dur: null,
        divisor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        dominantBaseline: null,
        download: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        enableBackground: null,
        end: null,
        event: null,
        exponent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        g2: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        id: null,
        ideographic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k1: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k2: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k3: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k4: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        kernelMatrix: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        overlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtY: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtZ: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        rev: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFeatures: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFonts: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFormats: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        specularExponent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strikethroughThickness: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        string: null,
        stroke: null,
        strokeDashArray: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeWidth: null,
        style: null,
        surfaceScale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        tableValues: null,
        target: null,
        targetX: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        targetY: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        underlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        values: null,
        vAlphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vMathematical: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vectorEffect: null,
        vHanging: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vIdeographic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        version: null,
        vertAdvY: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: 'svg',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"]
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xlink",
    ()=>xlink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: 'xlink',
    transform (_, property) {
        return 'xlink:' + property.slice(5).toLowerCase();
    }
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xmlns",
    ()=>xmlns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
;
;
const xmlns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        xmlnsxlink: 'xmlns:xlink'
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: 'xmlns',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: 'xml',
    transform (_, property) {
        return 'xml:' + property.slice(3).toLowerCase();
    }
});
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Note: types exposed from `index.d.ts`.
__turbopack_context__.s([
    "html",
    ()=>html,
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'html');
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svg"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'svg');
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    const input = String(value || '').trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(' ').trim();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ function index(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) ;
        else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
}
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
module.exports = index; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
const inline_style_parser_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/cjs/index.js [app-ssr] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    let styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    const declarations = (0, inline_style_parser_1.default)(style);
    const hasIterator = typeof iterator === 'function';
    declarations.forEach((declaration)=>{
        if (declaration.type !== 'declaration') {
            return;
        }
        const { property, value } = declaration;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase; //# sourceMappingURL=utilities.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */ __turbopack_context__.s([
    "pointEnd",
    ()=>pointEnd,
    "pointStart",
    ()=>pointStart,
    "position",
    ()=>position
]);
const pointEnd = point('end');
const pointStart = point('start');
/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */ function point(type) {
    return point;
    //TURBOPACK unreachable
    ;
    /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */ function point(node) {
        const point = node && node.position && node.position[type] || {};
        if (typeof point.line === 'number' && point.line > 0 && typeof point.column === 'number' && point.column > 0) {
            return {
                line: point.line,
                column: point.column,
                offset: typeof point.offset === 'number' && point.offset > -1 ? point.offset : undefined
            };
        }
    }
}
function position(node) {
    const start = pointStart(node);
    const end = pointEnd(node);
    if (start && end) {
        return {
            start,
            end
        };
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ __turbopack_context__.s([
    "stringifyPosition",
    ()=>stringifyPosition
]);
function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== 'object') {
        return '';
    }
    // Node.
    if ('position' in value || 'type' in value) {
        return position(value.position);
    }
    // Position.
    if ('start' in value || 'end' in value) {
        return position(value);
    }
    // Point.
    if ('line' in value || 'column' in value) {
        return point(value);
    }
    // ?
    return '';
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function point(point) {
    return index(point && point.line) + ':' + index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + '-' + point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === 'number' ? value : 1;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Point, Position} from 'unist'
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef Options
 *   Configuration.
 * @property {Array<Node> | null | undefined} [ancestors]
 *   Stack of (inclusive) ancestor nodes surrounding the message (optional).
 * @property {Error | null | undefined} [cause]
 *   Original error cause of the message (optional).
 * @property {Point | Position | null | undefined} [place]
 *   Place of message (optional).
 * @property {string | null | undefined} [ruleId]
 *   Category of message (optional, example: `'my-rule'`).
 * @property {string | null | undefined} [source]
 *   Namespace of who sent the message (optional, example: `'my-package'`).
 */ __turbopack_context__.s([
    "VFileMessage",
    ()=>VFileMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
class VFileMessage extends Error {
    /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */ // eslint-disable-next-line complexity
    constructor(causeOrReason, optionsOrParentOrPlace, origin){
        super();
        if (typeof optionsOrParentOrPlace === 'string') {
            origin = optionsOrParentOrPlace;
            optionsOrParentOrPlace = undefined;
        }
        /** @type {string} */ let reason = '';
        /** @type {Options} */ let options = {};
        let legacyCause = false;
        if (optionsOrParentOrPlace) {
            // Point.
            if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('type' in optionsOrParentOrPlace) {
                options = {
                    ancestors: [
                        optionsOrParentOrPlace
                    ],
                    place: optionsOrParentOrPlace.position
                };
            } else {
                options = {
                    ...optionsOrParentOrPlace
                };
            }
        }
        if (typeof causeOrReason === 'string') {
            reason = causeOrReason;
        } else if (!options.cause && causeOrReason) {
            legacyCause = true;
            reason = causeOrReason.message;
            options.cause = causeOrReason;
        }
        if (!options.ruleId && !options.source && typeof origin === 'string') {
            const index = origin.indexOf(':');
            if (index === -1) {
                options.ruleId = origin;
            } else {
                options.source = origin.slice(0, index);
                options.ruleId = origin.slice(index + 1);
            }
        }
        if (!options.place && options.ancestors && options.ancestors) {
            const parent = options.ancestors[options.ancestors.length - 1];
            if (parent) {
                options.place = parent.position;
            }
        }
        const start = options.place && 'start' in options.place ? options.place.start : options.place;
        /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */ this.ancestors = options.ancestors || undefined;
        /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */ this.cause = options.cause || undefined;
        /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */ this.column = start ? start.column : undefined;
        /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */ this.fatal = undefined;
        /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */ this.file = '';
        // Field from `Error`.
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.message = reason;
        /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */ this.line = start ? start.line : undefined;
        // Field from `Error`.
        /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */ this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])(options.place) || '1:1';
        /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */ this.place = options.place || undefined;
        /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */ this.reason = this.message;
        /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */ this.ruleId = options.ruleId || undefined;
        /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */ this.source = options.source || undefined;
        // Field from `Error`.
        /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */ this.stack = legacyCause && options.cause && typeof options.cause.stack === 'string' ? options.cause.stack : '';
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */ this.actual = undefined;
        /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */ this.expected = undefined;
        /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */ this.note = undefined;
        /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */ this.url = undefined;
    }
}
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = undefined;
VFileMessage.prototype.line = undefined;
VFileMessage.prototype.ancestors = undefined;
VFileMessage.prototype.cause = undefined;
VFileMessage.prototype.fatal = undefined;
VFileMessage.prototype.place = undefined;
VFileMessage.prototype.ruleId = undefined;
VFileMessage.prototype.source = undefined;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Identifier, Literal, MemberExpression} from 'estree'
 * @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
 * @import {Element, Nodes, Parents, Root, Text} from 'hast'
 * @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
 * @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
 * @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
 * @import {Position} from 'unist'
 * @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
 */ __turbopack_context__.s([
    "toJsxRuntime",
    ()=>toJsxRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$21$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/style-to-js@1.1.21/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// To do: next major: `Object.hasOwn`.
const own = {}.hasOwnProperty;
/** @type {Map<string, number>} */ const emptyMap = new Map();
const cap = /[A-Z]/g;
// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.
// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set([
    'table',
    'tbody',
    'thead',
    'tfoot',
    'tr'
]);
const tableCellElement = new Set([
    'td',
    'th'
]);
const docs = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function toJsxRuntime(tree, options) {
    if (!options || options.Fragment === undefined) {
        throw new TypeError('Expected `Fragment` in options');
    }
    const filePath = options.filePath || undefined;
    /** @type {Create} */ let create;
    if (options.development) {
        if (typeof options.jsxDEV !== 'function') {
            throw new TypeError('Expected `jsxDEV` in options when `development: true`');
        }
        create = developmentCreate(filePath, options.jsxDEV);
    } else {
        if (typeof options.jsx !== 'function') {
            throw new TypeError('Expected `jsx` in production options');
        }
        if (typeof options.jsxs !== 'function') {
            throw new TypeError('Expected `jsxs` in production options');
        }
        create = productionCreate(filePath, options.jsx, options.jsxs);
    }
    /** @type {State} */ const state = {
        Fragment: options.Fragment,
        ancestors: [],
        components: options.components || {},
        create,
        elementAttributeNameCase: options.elementAttributeNameCase || 'react',
        evaluater: options.createEvaluater ? options.createEvaluater() : undefined,
        filePath,
        ignoreInvalidStyle: options.ignoreInvalidStyle || false,
        passKeys: options.passKeys !== false,
        passNode: options.passNode || false,
        schema: options.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
        tableCellAlignToStyle: options.tableCellAlignToStyle !== false
    };
    const result = one(state, tree, undefined);
    // JSX element.
    if (result && typeof result !== 'string') {
        return result;
    }
    // Text node or something that turned into nothing.
    return state.create(tree, state.Fragment, {
        children: result || undefined
    }, undefined);
}
/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function one(state, node, key) {
    if (node.type === 'element') {
        return element(state, node, key);
    }
    if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
        return mdxExpression(state, node);
    }
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        return mdxJsxElement(state, node, key);
    }
    if (node.type === 'mdxjsEsm') {
        return mdxEsm(state, node);
    }
    if (node.type === 'root') {
        return root(state, node, key);
    }
    if (node.type === 'text') {
        return text(state, node);
    }
}
/**
 * Handle element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function element(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = findComponentFromName(state, node.tagName, false);
    const props = createElementProps(state, node);
    let children = createChildren(state, node);
    if (tableElements.has(node.tagName)) {
        children = children.filter(function(child) {
            return typeof child === 'string' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(child) : true;
        });
    }
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle MDX expression.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxExpression(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        const program = node.data.estree;
        const expression = program.body[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
        // Assume result is a child.
        return state.evaluater.evaluateExpression(expression.expression);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX ESM.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxjsEsmHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxEsm(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        // Assume result is a child.
        return state.evaluater.evaluateProgram(node.data.estree);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX JSX.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxJsxElement(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.name === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
    const props = createJsxElementProps(state, node);
    const children = createChildren(state, node);
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Root} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function root(state, node, key) {
    /** @type {Props} */ const props = {};
    addChildren(props, createChildren(state, node));
    return state.create(node, state.Fragment, props, key);
}
/**
 * Handle text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Text} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function text(_, node) {
    return node.value;
}
/**
 * Add `node` to props.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Props} props
 *   Props.
 * @param {unknown} type
 *   Type.
 * @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Node.
 * @returns {undefined}
 *   Nothing.
 */ function addNode(state, props, type, node) {
    // If this is swapped out for a component:
    if (typeof type !== 'string' && type !== state.Fragment && state.passNode) {
        props.node = node;
    }
}
/**
 * Add children to props.
 *
 * @param {Props} props
 *   Props.
 * @param {Array<Child>} children
 *   Children.
 * @returns {undefined}
 *   Nothing.
 */ function addChildren(props, children) {
    if (children.length > 0) {
        const value = children.length > 1 ? children : children[0];
        if (value) {
            props.children = value;
        }
    }
}
/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */ function productionCreate(_, jsx, jsxs) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(_, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const fn = isStaticChildren ? jsxs : jsx;
        return key ? fn(type, props, key) : fn(type, props);
    }
}
/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */ function developmentCreate(filePath, jsxDEV) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(node, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node);
        return jsxDEV(type, props, key, isStaticChildren, {
            columnNumber: point ? point.column - 1 : undefined,
            fileName: filePath,
            lineNumber: point ? point.line : undefined
        }, undefined);
    }
}
/**
 * Create props from an element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current element.
 * @returns {Props}
 *   Props.
 */ function createElementProps(state, node) {
    /** @type {Props} */ const props = {};
    /** @type {string | undefined} */ let alignValue;
    /** @type {string} */ let prop;
    for(prop in node.properties){
        if (prop !== 'children' && own.call(node.properties, prop)) {
            const result = createProperty(state, prop, node.properties[prop]);
            if (result) {
                const [key, value] = result;
                if (state.tableCellAlignToStyle && key === 'align' && typeof value === 'string' && tableCellElement.has(node.tagName)) {
                    alignValue = value;
                } else {
                    props[key] = value;
                }
            }
        }
    }
    if (alignValue) {
        // Assume style is an object.
        const style = props.style || (props.style = {});
        style[state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = alignValue;
    }
    return props;
}
/**
 * Create props from a JSX element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current JSX element.
 * @returns {Props}
 *   Props.
 */ function createJsxElementProps(state, node) {
    /** @type {Props} */ const props = {};
    for (const attribute of node.attributes){
        if (attribute.type === 'mdxJsxExpressionAttribute') {
            if (attribute.data && attribute.data.estree && state.evaluater) {
                const program = attribute.data.estree;
                const expression = program.body[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                const objectExpression = expression.expression;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(objectExpression.type === 'ObjectExpression');
                const property = objectExpression.properties[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(property.type === 'SpreadElement');
                Object.assign(props, state.evaluater.evaluateExpression(property.argument));
            } else {
                crashEstree(state, node.position);
            }
        } else {
            // For JSX, the author is responsible of passing in the correct values.
            const name = attribute.name;
            /** @type {unknown} */ let value;
            if (attribute.value && typeof attribute.value === 'object') {
                if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
                    const program = attribute.value.data.estree;
                    const expression = program.body[0];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                    value = state.evaluater.evaluateExpression(expression.expression);
                } else {
                    crashEstree(state, node.position);
                }
            } else {
                value = attribute.value === null ? true : attribute.value;
            }
            // Assume a prop.
            props[name] = value;
        }
    }
    return props;
}
/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */ function createChildren(state, node) {
    /** @type {Array<Child>} */ const children = [];
    let index = -1;
    /** @type {Map<string, number>} */ // Note: test this when Solid doesn’t want to merge my upcoming PR.
    /* c8 ignore next */ const countsByName = state.passKeys ? new Map() : emptyMap;
    while(++index < node.children.length){
        const child = node.children[index];
        /** @type {string | undefined} */ let key;
        if (state.passKeys) {
            const name = child.type === 'element' ? child.tagName : child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement' ? child.name : undefined;
            if (name) {
                const count = countsByName.get(name) || 0;
                key = name + '-' + count;
                countsByName.set(name, count + 1);
            }
        }
        const result = one(state, child, key);
        if (result !== undefined) children.push(result);
    }
    return children;
}
/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */ function createProperty(state, prop, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(state.schema, prop);
    // Ignore nullish and `NaN` values.
    if (value === null || value === undefined || typeof value === 'number' && Number.isNaN(value)) {
        return;
    }
    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value);
    }
    // React only accepts `style` as object.
    if (info.property === 'style') {
        let styleObject = typeof value === 'object' ? value : parseStyle(state, String(value));
        if (state.stylePropertyNameCase === 'css') {
            styleObject = transformStylesToCssCasing(styleObject);
        }
        return [
            'style',
            styleObject
        ];
    }
    return [
        state.elementAttributeNameCase === 'react' && info.space ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hastToReact"][info.property] || info.property : info.attribute,
        value
    ];
}
/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */ function parseStyle(state, value) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$21$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, {
            reactCompat: true
        });
    } catch (error) {
        if (state.ignoreInvalidStyle) {
            return {};
        }
        const cause = error;
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot parse `style` attribute', {
            ancestors: state.ancestors,
            cause,
            ruleId: 'style',
            source: 'hast-util-to-jsx-runtime'
        });
        message.file = state.filePath || undefined;
        message.url = docs + '#cannot-parse-style-attribute';
        throw message;
    }
}
/**
 * Create a JSX name from a string.
 *
 * @param {State} state
 *   To do.
 * @param {string} name
 *   Name.
 * @param {boolean} allowExpression
 *   Allow member expressions and identifiers.
 * @returns {unknown}
 *   To do.
 */ function findComponentFromName(state, name, allowExpression) {
    /** @type {Identifier | Literal | MemberExpression} */ let result;
    if (!allowExpression) {
        result = {
            type: 'Literal',
            value: name
        };
    } else if (name.includes('.')) {
        const identifiers = name.split('.');
        let index = -1;
        /** @type {Identifier | Literal | MemberExpression | undefined} */ let node;
        while(++index < identifiers.length){
            /** @type {Identifier | Literal} */ const prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(identifiers[index]) ? {
                type: 'Identifier',
                name: identifiers[index]
            } : {
                type: 'Literal',
                value: identifiers[index]
            };
            node = node ? {
                type: 'MemberExpression',
                object: node,
                property: prop,
                computed: Boolean(index && prop.type === 'Literal'),
                optional: false
            } : prop;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'always a result');
        result = node;
    } else {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(name) && !/^[a-z]/.test(name) ? {
            type: 'Identifier',
            name
        } : {
            type: 'Literal',
            value: name
        };
    }
    // Only literals can be passed in `components` currently.
    // No identifiers / member expressions.
    if (result.type === 'Literal') {
        const name = result.value;
        return own.call(state.components, name) ? state.components[name] : name;
    }
    // Assume component.
    if (state.evaluater) {
        return state.evaluater.evaluateExpression(result);
    }
    crashEstree(state);
}
/**
 * @param {State} state
 * @param {Position | undefined} [place]
 * @returns {never}
 */ function crashEstree(state, place) {
    const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot handle MDX estrees without `createEvaluater`', {
        ancestors: state.ancestors,
        place,
        ruleId: 'mdx-estree',
        source: 'hast-util-to-jsx-runtime'
    });
    message.file = state.filePath || undefined;
    message.url = docs + '#cannot-handle-mdx-estrees-without-createevaluater';
    throw message;
}
/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */ function transformStylesToCssCasing(domCasing) {
    /** @type {Style} */ const cssCasing = {};
    /** @type {string} */ let from;
    for(from in domCasing){
        if (own.call(domCasing, from)) {
            cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
        }
    }
    return cssCasing;
}
/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */ function transformStyleToCssCasing(from) {
    let to = from.replace(cap, toDash);
    // Handle `ms-xxx` -> `-ms-xxx`.
    if (to.slice(0, 3) === 'ms-') to = '-' + to;
    return to;
}
/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */ function toDash($0) {
    return '-' + $0.toLowerCase();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/html-url-attributes@3.0.1/node_modules/html-url-attributes/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HTML URL properties.
 *
 * Each key is a property name and each value is a list of tag names it applies
 * to or `null` if it applies to all elements.
 *
 * @type {Record<string, Array<string> | null>}
 */ __turbopack_context__.s([
    "urlAttributes",
    ()=>urlAttributes
]);
const urlAttributes = {
    action: [
        'form'
    ],
    cite: [
        'blockquote',
        'del',
        'ins',
        'q'
    ],
    data: [
        'object'
    ],
    formAction: [
        'button',
        'input'
    ],
    href: [
        'a',
        'area',
        'base',
        'link'
    ],
    icon: [
        'menuitem'
    ],
    itemId: null,
    manifest: [
        'html'
    ],
    ping: [
        'a',
        'area'
    ],
    poster: [
        'video'
    ],
    src: [
        'audio',
        'embed',
        'iframe',
        'img',
        'input',
        'script',
        'source',
        'track',
        'video'
    ]
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */ /** @type {Options} */ __turbopack_context__.s([
    "toString",
    ()=>toString
]);
const emptyOptions = {};
function toString(value, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === 'boolean' ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;
    return one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function one(value, includeImageAlt, includeHtml) {
    if (node(value)) {
        if ('value' in value) {
            return value.type === 'html' && !includeHtml ? '' : value.value;
        }
        if (includeImageAlt && 'alt' in value && value.alt) {
            return value.alt;
        }
        if ('children' in value) {
            return all(value.children, includeImageAlt, includeHtml);
        }
    }
    if (Array.isArray(value)) {
        return all(value, includeImageAlt, includeHtml);
    }
    return '';
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length){
        result[index] = one(values[index], includeImageAlt, includeHtml);
    }
    return result.join('');
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */ function node(value) {
    return Boolean(value && typeof value === 'object');
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Parsing markdown comes with a couple of constants, such as minimum or maximum
 * sizes of certain sequences.
 * Additionally, there are a couple symbols used inside micromark.
 * These are all defined here, but compiled away by scripts.
 */ __turbopack_context__.s([
    "constants",
    ()=>constants
]);
const constants = {
    attentionSideAfter: 2,
    attentionSideBefore: 1,
    atxHeadingOpeningFenceSizeMax: 6,
    autolinkDomainSizeMax: 63,
    autolinkSchemeSizeMax: 32,
    cdataOpeningString: 'CDATA[',
    characterGroupPunctuation: 2,
    characterGroupWhitespace: 1,
    characterReferenceDecimalSizeMax: 7,
    characterReferenceHexadecimalSizeMax: 6,
    characterReferenceNamedSizeMax: 31,
    codeFencedSequenceSizeMin: 3,
    contentTypeContent: 'content',
    contentTypeDocument: 'document',
    contentTypeFlow: 'flow',
    contentTypeString: 'string',
    contentTypeText: 'text',
    hardBreakPrefixSizeMin: 2,
    htmlBasic: 6,
    htmlCdata: 5,
    htmlComment: 2,
    htmlComplete: 7,
    htmlDeclaration: 4,
    htmlInstruction: 3,
    htmlRawSizeMax: 8,
    htmlRaw: 1,
    linkResourceDestinationBalanceMax: 32,
    linkReferenceSizeMax: 999,
    listItemValueSizeMax: 10,
    numericBaseDecimal: 10,
    numericBaseHexadecimal: 0x10,
    tabSize: 4,
    thematicBreakMarkerCountMin: 3,
    v8MaxSafeChunkSize: 10_000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Character codes.
 *
 * This module is compiled away!
 *
 * micromark works based on character codes.
 * This module contains constants for the ASCII block and the replacement
 * character.
 * A couple of them are handled in a special way, such as the line endings
 * (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
 * tab) and its expansion based on what column it’s at (virtual space),
 * and the end-of-file (eof) character.
 * As values are preprocessed before handling them, the actual characters LF,
 * CR, HT, and NUL (which is present as the replacement character), are
 * guaranteed to not exist.
 *
 * Unicode basic latin block.
 */ __turbopack_context__.s([
    "codes",
    ()=>codes
]);
const codes = {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    virtualSpace: -1,
    eof: null,
    nul: 0,
    soh: 1,
    stx: 2,
    etx: 3,
    eot: 4,
    enq: 5,
    ack: 6,
    bel: 7,
    bs: 8,
    ht: 9,
    lf: 10,
    vt: 11,
    ff: 12,
    cr: 13,
    so: 14,
    si: 15,
    dle: 16,
    dc1: 17,
    dc2: 18,
    dc3: 19,
    dc4: 20,
    nak: 21,
    syn: 22,
    etb: 23,
    can: 24,
    em: 25,
    sub: 26,
    esc: 27,
    fs: 28,
    gs: 29,
    rs: 30,
    us: 31,
    space: 32,
    exclamationMark: 33,
    quotationMark: 34,
    numberSign: 35,
    dollarSign: 36,
    percentSign: 37,
    ampersand: 38,
    apostrophe: 39,
    leftParenthesis: 40,
    rightParenthesis: 41,
    asterisk: 42,
    plusSign: 43,
    comma: 44,
    dash: 45,
    dot: 46,
    slash: 47,
    digit0: 48,
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    colon: 58,
    semicolon: 59,
    lessThan: 60,
    equalsTo: 61,
    greaterThan: 62,
    questionMark: 63,
    atSign: 64,
    uppercaseA: 65,
    uppercaseB: 66,
    uppercaseC: 67,
    uppercaseD: 68,
    uppercaseE: 69,
    uppercaseF: 70,
    uppercaseG: 71,
    uppercaseH: 72,
    uppercaseI: 73,
    uppercaseJ: 74,
    uppercaseK: 75,
    uppercaseL: 76,
    uppercaseM: 77,
    uppercaseN: 78,
    uppercaseO: 79,
    uppercaseP: 80,
    uppercaseQ: 81,
    uppercaseR: 82,
    uppercaseS: 83,
    uppercaseT: 84,
    uppercaseU: 85,
    uppercaseV: 86,
    uppercaseW: 87,
    uppercaseX: 88,
    uppercaseY: 89,
    uppercaseZ: 90,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
    caret: 94,
    underscore: 95,
    graveAccent: 96,
    lowercaseA: 97,
    lowercaseB: 98,
    lowercaseC: 99,
    lowercaseD: 100,
    lowercaseE: 101,
    lowercaseF: 102,
    lowercaseG: 103,
    lowercaseH: 104,
    lowercaseI: 105,
    lowercaseJ: 106,
    lowercaseK: 107,
    lowercaseL: 108,
    lowercaseM: 109,
    lowercaseN: 110,
    lowercaseO: 111,
    lowercaseP: 112,
    lowercaseQ: 113,
    lowercaseR: 114,
    lowercaseS: 115,
    lowercaseT: 116,
    lowercaseU: 117,
    lowercaseV: 118,
    lowercaseW: 119,
    lowercaseX: 120,
    lowercaseY: 121,
    lowercaseZ: 122,
    leftCurlyBrace: 123,
    verticalBar: 124,
    rightCurlyBrace: 125,
    tilde: 126,
    del: 127,
    // Unicode Specials block.
    byteOrderMarker: 65_279,
    // Unicode Specials block.
    replacementCharacter: 65_533 // `�`
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Here is the list of all types of tokens exposed by micromark, with a short
 * explanation of what they include and where they are found.
 * In picking names, generally, the rule is to be as explicit as possible
 * instead of reusing names.
 * For example, there is a `definitionDestination` and a `resourceDestination`,
 * instead of one shared name.
 */ // Note: when changing the next record, you must also change `TokenTypeMap`
// in `micromark-util-types/index.d.ts`.
__turbopack_context__.s([
    "types",
    ()=>types
]);
const types = {
    // Generic type for data, such as in a title, a destination, etc.
    data: 'data',
    // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
    // Such as, between a fenced code fence and an info string.
    whitespace: 'whitespace',
    // Generic type for line endings (line feed, carriage return, carriage return +
    // line feed).
    lineEnding: 'lineEnding',
    // A line ending, but ending a blank line.
    lineEndingBlank: 'lineEndingBlank',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
    // line.
    linePrefix: 'linePrefix',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
    // line.
    lineSuffix: 'lineSuffix',
    // Whole ATX heading:
    //
    // ```markdown
    // #
    // ## Alpha
    // ### Bravo ###
    // ```
    //
    // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
    atxHeading: 'atxHeading',
    // Sequence of number signs in an ATX heading (`###`).
    atxHeadingSequence: 'atxHeadingSequence',
    // Content in an ATX heading (`alpha`).
    // Includes text.
    atxHeadingText: 'atxHeadingText',
    // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
    // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
    autolink: 'autolink',
    // Email autolink w/o markers (`admin@example.com`)
    autolinkEmail: 'autolinkEmail',
    // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
    autolinkMarker: 'autolinkMarker',
    // Protocol autolink w/o markers (`https://example.com`)
    autolinkProtocol: 'autolinkProtocol',
    // A whole character escape (`\-`).
    // Includes `escapeMarker` and `characterEscapeValue`.
    characterEscape: 'characterEscape',
    // The escaped character (`-`).
    characterEscapeValue: 'characterEscapeValue',
    // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
    // Includes `characterReferenceMarker`, an optional
    // `characterReferenceMarkerNumeric`, in which case an optional
    // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
    characterReference: 'characterReference',
    // The start or end marker (`&` or `;`).
    characterReferenceMarker: 'characterReferenceMarker',
    // Mark reference as numeric (`#`).
    characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',
    // Mark reference as numeric (`x` or `X`).
    characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',
    // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
    characterReferenceValue: 'characterReferenceValue',
    // Whole fenced code:
    //
    // ````markdown
    // ```js
    // alert(1)
    // ```
    // ````
    codeFenced: 'codeFenced',
    // A fenced code fence, including whitespace, sequence, info, and meta
    // (` ```js `).
    codeFencedFence: 'codeFencedFence',
    // Sequence of grave accent or tilde characters (` ``` `) in a fence.
    codeFencedFenceSequence: 'codeFencedFenceSequence',
    // Info word (`js`) in a fence.
    // Includes string.
    codeFencedFenceInfo: 'codeFencedFenceInfo',
    // Meta words (`highlight="1"`) in a fence.
    // Includes string.
    codeFencedFenceMeta: 'codeFencedFenceMeta',
    // A line of code.
    codeFlowValue: 'codeFlowValue',
    // Whole indented code:
    //
    // ```markdown
    //     alert(1)
    // ```
    //
    // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
    codeIndented: 'codeIndented',
    // A text code (``` `alpha` ```).
    // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
    // `codeTextPadding`.
    codeText: 'codeText',
    codeTextData: 'codeTextData',
    // A space or line ending right after or before a tick.
    codeTextPadding: 'codeTextPadding',
    // A text code fence (` `` `).
    codeTextSequence: 'codeTextSequence',
    // Whole content:
    //
    // ```markdown
    // [a]: b
    // c
    // =
    // d
    // ```
    //
    // Includes `paragraph` and `definition`.
    content: 'content',
    // Whole definition:
    //
    // ```markdown
    // [micromark]: https://github.com/micromark/micromark
    // ```
    //
    // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
    // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
    definition: 'definition',
    // Destination of a definition (`https://github.com/micromark/micromark` or
    // `<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
    definitionDestination: 'definitionDestination',
    // Enclosed destination of a definition
    // (`<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteralMarker` and optionally
    // `definitionDestinationString`.
    definitionDestinationLiteral: 'definitionDestinationLiteral',
    // Markers of an enclosed definition destination (`<` or `>`).
    definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',
    // Unenclosed destination of a definition
    // (`https://github.com/micromark/micromark`).
    // Includes `definitionDestinationString`.
    definitionDestinationRaw: 'definitionDestinationRaw',
    // Text in an destination (`https://github.com/micromark/micromark`).
    // Includes string.
    definitionDestinationString: 'definitionDestinationString',
    // Label of a definition (`[micromark]`).
    // Includes `definitionLabelMarker` and `definitionLabelString`.
    definitionLabel: 'definitionLabel',
    // Markers of a definition label (`[` or `]`).
    definitionLabelMarker: 'definitionLabelMarker',
    // Value of a definition label (`micromark`).
    // Includes string.
    definitionLabelString: 'definitionLabelString',
    // Marker between a label and a destination (`:`).
    definitionMarker: 'definitionMarker',
    // Title of a definition (`"x"`, `'y'`, or `(z)`).
    // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
    definitionTitle: 'definitionTitle',
    // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
    definitionTitleMarker: 'definitionTitleMarker',
    // Data without markers in a title (`z`).
    // Includes string.
    definitionTitleString: 'definitionTitleString',
    // Emphasis (`*alpha*`).
    // Includes `emphasisSequence` and `emphasisText`.
    emphasis: 'emphasis',
    // Sequence of emphasis markers (`*` or `_`).
    emphasisSequence: 'emphasisSequence',
    // Emphasis text (`alpha`).
    // Includes text.
    emphasisText: 'emphasisText',
    // The character escape marker (`\`).
    escapeMarker: 'escapeMarker',
    // A hard break created with a backslash (`\\n`).
    // Note: does not include the line ending.
    hardBreakEscape: 'hardBreakEscape',
    // A hard break created with trailing spaces (`  \n`).
    // Does not include the line ending.
    hardBreakTrailing: 'hardBreakTrailing',
    // Flow HTML:
    //
    // ```markdown
    // <div
    // ```
    //
    // Inlcudes `lineEnding`, `htmlFlowData`.
    htmlFlow: 'htmlFlow',
    htmlFlowData: 'htmlFlowData',
    // HTML in text (the tag in `a <i> b`).
    // Includes `lineEnding`, `htmlTextData`.
    htmlText: 'htmlText',
    htmlTextData: 'htmlTextData',
    // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
    // `![alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    image: 'image',
    // Whole link label (`[*alpha*]`).
    // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
    label: 'label',
    // Text in an label (`*alpha*`).
    // Includes text.
    labelText: 'labelText',
    // Start a link label (`[`).
    // Includes a `labelMarker`.
    labelLink: 'labelLink',
    // Start an image label (`![`).
    // Includes `labelImageMarker` and `labelMarker`.
    labelImage: 'labelImage',
    // Marker of a label (`[` or `]`).
    labelMarker: 'labelMarker',
    // Marker to start an image (`!`).
    labelImageMarker: 'labelImageMarker',
    // End a label (`]`).
    // Includes `labelMarker`.
    labelEnd: 'labelEnd',
    // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    link: 'link',
    // Whole paragraph:
    //
    // ```markdown
    // alpha
    // bravo.
    // ```
    //
    // Includes text.
    paragraph: 'paragraph',
    // A reference (`[alpha]` or `[]`).
    // Includes `referenceMarker` and an optional `referenceString`.
    reference: 'reference',
    // A reference marker (`[` or `]`).
    referenceMarker: 'referenceMarker',
    // Reference text (`alpha`).
    // Includes string.
    referenceString: 'referenceString',
    // A resource (`(https://example.com "alpha")`).
    // Includes `resourceMarker`, an optional `resourceDestination` with an optional
    // `whitespace` and `resourceTitle`.
    resource: 'resource',
    // A resource destination (`https://example.com`).
    // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
    resourceDestination: 'resourceDestination',
    // A literal resource destination (`<https://example.com>`).
    // Includes `resourceDestinationLiteralMarker` and optionally
    // `resourceDestinationString`.
    resourceDestinationLiteral: 'resourceDestinationLiteral',
    // A resource destination marker (`<` or `>`).
    resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',
    // A raw resource destination (`https://example.com`).
    // Includes `resourceDestinationString`.
    resourceDestinationRaw: 'resourceDestinationRaw',
    // Resource destination text (`https://example.com`).
    // Includes string.
    resourceDestinationString: 'resourceDestinationString',
    // A resource marker (`(` or `)`).
    resourceMarker: 'resourceMarker',
    // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
    // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
    resourceTitle: 'resourceTitle',
    // A resource title marker (`"`, `'`, `(`, or `)`).
    resourceTitleMarker: 'resourceTitleMarker',
    // Resource destination title (`alpha`).
    // Includes string.
    resourceTitleString: 'resourceTitleString',
    // Whole setext heading:
    //
    // ```markdown
    // alpha
    // bravo
    // =====
    // ```
    //
    // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
    // `setextHeadingLine`.
    setextHeading: 'setextHeading',
    // Content in a setext heading (`alpha\nbravo`).
    // Includes text.
    setextHeadingText: 'setextHeadingText',
    // Underline in a setext heading, including whitespace suffix (`==`).
    // Includes `setextHeadingLineSequence`.
    setextHeadingLine: 'setextHeadingLine',
    // Sequence of equals or dash characters in underline in a setext heading (`-`).
    setextHeadingLineSequence: 'setextHeadingLineSequence',
    // Strong (`**alpha**`).
    // Includes `strongSequence` and `strongText`.
    strong: 'strong',
    // Sequence of strong markers (`**` or `__`).
    strongSequence: 'strongSequence',
    // Strong text (`alpha`).
    // Includes text.
    strongText: 'strongText',
    // Whole thematic break:
    //
    // ```markdown
    // * * *
    // ```
    //
    // Includes `thematicBreakSequence` and `whitespace`.
    thematicBreak: 'thematicBreak',
    // A sequence of one or more thematic break markers (`***`).
    thematicBreakSequence: 'thematicBreakSequence',
    // Whole block quote:
    //
    // ```markdown
    // > a
    // >
    // > b
    // ```
    //
    // Includes `blockQuotePrefix` and flow.
    blockQuote: 'blockQuote',
    // The `>` or `> ` of a block quote.
    blockQuotePrefix: 'blockQuotePrefix',
    // The `>` of a block quote prefix.
    blockQuoteMarker: 'blockQuoteMarker',
    // The optional ` ` of a block quote prefix.
    blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',
    // Whole ordered list:
    //
    // ```markdown
    // 1. a
    //    b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listOrdered: 'listOrdered',
    // Whole unordered list:
    //
    // ```markdown
    // - a
    //   b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listUnordered: 'listUnordered',
    // The indent of further list item lines.
    listItemIndent: 'listItemIndent',
    // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
    listItemMarker: 'listItemMarker',
    // The thing that starts a list item, such as `1. `.
    // Includes `listItemValue` if ordered, `listItemMarker`, and
    // `listItemPrefixWhitespace` (unless followed by a line ending).
    listItemPrefix: 'listItemPrefix',
    // The whitespace after a marker.
    listItemPrefixWhitespace: 'listItemPrefixWhitespace',
    // The numerical value of an ordered item.
    listItemValue: 'listItemValue',
    // Internal types used for subtokenizers, compiled away
    chunkDocument: 'chunkDocument',
    chunkContent: 'chunkContent',
    chunkFlow: 'chunkFlow',
    chunkText: 'chunkText',
    chunkString: 'chunkString'
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * While micromark works based on character codes, this module includes the
 * string versions of ’em.
 * The C0 block, except for LF, CR, HT, and w/ the replacement character added,
 * are available here.
 */ __turbopack_context__.s([
    "values",
    ()=>values
]);
const values = {
    ht: '\t',
    lf: '\n',
    cr: '\r',
    space: ' ',
    exclamationMark: '!',
    quotationMark: '"',
    numberSign: '#',
    dollarSign: '$',
    percentSign: '%',
    ampersand: '&',
    apostrophe: "'",
    leftParenthesis: '(',
    rightParenthesis: ')',
    asterisk: '*',
    plusSign: '+',
    comma: ',',
    dash: '-',
    dot: '.',
    slash: '/',
    digit0: '0',
    digit1: '1',
    digit2: '2',
    digit3: '3',
    digit4: '4',
    digit5: '5',
    digit6: '6',
    digit7: '7',
    digit8: '8',
    digit9: '9',
    colon: ':',
    semicolon: ';',
    lessThan: '<',
    equalsTo: '=',
    greaterThan: '>',
    questionMark: '?',
    atSign: '@',
    uppercaseA: 'A',
    uppercaseB: 'B',
    uppercaseC: 'C',
    uppercaseD: 'D',
    uppercaseE: 'E',
    uppercaseF: 'F',
    uppercaseG: 'G',
    uppercaseH: 'H',
    uppercaseI: 'I',
    uppercaseJ: 'J',
    uppercaseK: 'K',
    uppercaseL: 'L',
    uppercaseM: 'M',
    uppercaseN: 'N',
    uppercaseO: 'O',
    uppercaseP: 'P',
    uppercaseQ: 'Q',
    uppercaseR: 'R',
    uppercaseS: 'S',
    uppercaseT: 'T',
    uppercaseU: 'U',
    uppercaseV: 'V',
    uppercaseW: 'W',
    uppercaseX: 'X',
    uppercaseY: 'Y',
    uppercaseZ: 'Z',
    leftSquareBracket: '[',
    backslash: '\\',
    rightSquareBracket: ']',
    caret: '^',
    underscore: '_',
    graveAccent: '`',
    lowercaseA: 'a',
    lowercaseB: 'b',
    lowercaseC: 'c',
    lowercaseD: 'd',
    lowercaseE: 'e',
    lowercaseF: 'f',
    lowercaseG: 'g',
    lowercaseH: 'h',
    lowercaseI: 'i',
    lowercaseJ: 'j',
    lowercaseK: 'k',
    lowercaseL: 'l',
    lowercaseM: 'm',
    lowercaseN: 'n',
    lowercaseO: 'o',
    lowercaseP: 'p',
    lowercaseQ: 'q',
    lowercaseR: 'r',
    lowercaseS: 's',
    lowercaseT: 't',
    lowercaseU: 'u',
    lowercaseV: 'v',
    lowercaseW: 'w',
    lowercaseX: 'x',
    lowercaseY: 'y',
    lowercaseZ: 'z',
    leftCurlyBrace: '{',
    verticalBar: '|',
    rightCurlyBrace: '}',
    tilde: '~',
    replacementCharacter: '�'
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "push",
    ()=>push,
    "splice",
    ()=>splice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {Array<unknown>} */ let parameters;
    // Make start between zero and `end` (included).
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    // No need to chunk the items if there’s only a couple (10k) items.
    if (items.length < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        // @ts-expect-error Hush, it’s fine.
        list.splice(...parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) list.splice(start, remove);
        // Insert the items in chunks to not cause stack overflows.
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize);
            parameters.unshift(start, 0);
            // @ts-expect-error Hush, it’s fine.
            list.splice(...parameters);
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
            start += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Extension,
 *   Handles,
 *   HtmlExtension,
 *   NormalizedExtension
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "combineExtensions",
    ()=>combineExtensions,
    "combineHtmlExtensions",
    ()=>combineHtmlExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
;
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length){
        syntaxExtension(all, extensions[index]);
    }
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function syntaxExtension(all, extension) {
    /** @type {keyof Extension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});
        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];
        /** @type {string} */ let code;
        if (right) {
            for(code in right){
                if (!hasOwnProperty.call(left, code)) left[code] = [];
                const value = right[code];
                constructs(// @ts-expect-error Looks like a list.
                left[code], Array.isArray(value) ? value : value ? [
                    value
                ] : []);
            }
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 *   List of constructs to merge into.
 * @param {Array<unknown>} list
 *   List of constructs to merge.
 * @returns {undefined}
 *   Nothing.
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {Array<unknown>} */ const before = [];
    while(++index < list.length){
        // @ts-expect-error Looks like an object.
        ;
        (list[index].add === 'after' ? existing : before).push(list[index]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length){
        htmlExtension(handlers, htmlExtensions[index]);
    }
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function htmlExtension(all, extension) {
    /** @type {keyof HtmlExtension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {keyof Handles} */ let type;
        if (right) {
            for(type in right){
                // @ts-expect-error assume document vs regular handler are managed correctly.
                left[type] = right[type];
            }
        }
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "asciiAlpha",
    ()=>asciiAlpha,
    "asciiAlphanumeric",
    ()=>asciiAlphanumeric,
    "asciiAtext",
    ()=>asciiAtext,
    "asciiControl",
    ()=>asciiControl,
    "asciiDigit",
    ()=>asciiDigit,
    "asciiHexDigit",
    ()=>asciiHexDigit,
    "asciiPunctuation",
    ()=>asciiPunctuation,
    "markdownLineEnding",
    ()=>markdownLineEnding,
    "markdownLineEndingOrSpace",
    ()=>markdownLineEndingOrSpace,
    "markdownSpace",
    ()=>markdownSpace,
    "unicodePunctuation",
    ()=>unicodePunctuation,
    "unicodeWhitespace",
    ()=>unicodeWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].del));
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code) {
    return code !== null && code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab;
}
function markdownLineEndingOrSpace(code) {
    return code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].nul || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space);
}
function markdownSpace(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = regexCheck(/\s/);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 *   Expression.
 * @returns {(code: Code) => boolean}
 *   Check.
 */ function regexCheck(regex) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */ function check(code) {
        return code !== null && code > -1 && regex.test(String.fromCharCode(code));
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factorySpace",
    ()=>factorySpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
;
function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpliceBuffer",
    ()=>SpliceBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
class SpliceBuffer {
    /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */ constructor(initial){
        /** @type {Array<T>} */ this.left = initial ? [
            ...initial
        ] : [];
        /** @type {Array<T>} */ this.right = [];
    }
    /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */ get(index) {
        if (index < 0 || index >= this.left.length + this.right.length) {
            throw new RangeError('Cannot access index `' + index + '` in a splice buffer of size `' + (this.left.length + this.right.length) + '`');
        }
        if (index < this.left.length) return this.left[index];
        return this.right[this.right.length - index + this.left.length - 1];
    }
    /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */ get length() {
        return this.left.length + this.right.length;
    }
    /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ shift() {
        this.setCursor(0);
        return this.right.pop();
    }
    /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */ slice(start, end) {
        /** @type {number} */ const stop = end === null || end === undefined ? Number.POSITIVE_INFINITY : end;
        if (stop < this.left.length) {
            return this.left.slice(start, stop);
        }
        if (start > this.left.length) {
            return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
        }
        return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
    }
    /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */ splice(start, deleteCount, items) {
        /** @type {number} */ const count = deleteCount || 0;
        this.setCursor(Math.trunc(start));
        const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
        if (items) chunkedPush(this.left, items);
        return removed.reverse();
    }
    /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ pop() {
        this.setCursor(Number.POSITIVE_INFINITY);
        return this.left.pop();
    }
    /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ push(item) {
        this.setCursor(Number.POSITIVE_INFINITY);
        this.left.push(item);
    }
    /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ pushMany(items) {
        this.setCursor(Number.POSITIVE_INFINITY);
        chunkedPush(this.left, items);
    }
    /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ unshift(item) {
        this.setCursor(0);
        this.right.push(item);
    }
    /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ unshiftMany(items) {
        this.setCursor(0);
        chunkedPush(this.right, items.reverse());
    }
    /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */ setCursor(n) {
        if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
        if (n < this.left.length) {
            // Move cursor to the this.left
            const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
            chunkedPush(this.right, removed.reverse());
        } else {
            // Move cursor to the this.right
            const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
            chunkedPush(this.left, removed.reverse());
        }
    }
}
/**
 * Avoid stack overflow by pushing items onto the stack in segments
 *
 * @template T
 *   Item type.
 * @param {Array<T>} list
 *   List to inject into.
 * @param {ReadonlyArray<T>} right
 *   Items to inject.
 * @return {undefined}
 *   Nothing.
 */ function chunkedPush(list, right) {
    /** @type {number} */ let chunkStart = 0;
    if (right.length < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        list.push(...right);
    } else {
        while(chunkStart < right.length){
            list.push(...right.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize));
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Chunk, Event, Token} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "subtokenize",
    ()=>subtokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$subtokenize$40$2$2e$1$2e$0$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)");
;
;
;
;
;
function subtokenize(eventsArray) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number | undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Array<Event>} */ let parameters;
    /** @type {Array<Event>} */ let subevents;
    /** @type {boolean | undefined} */ let more;
    const events = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$subtokenize$40$2$2e$1$2e$0$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpliceBuffer"](eventsArray);
    while(++index < events.length){
        while(index in jumps){
            index = jumps[index];
        }
        event = events.get(index);
        // Add a hook for the GFM tasklist extension, which needs to know if text
        // is in the first content of a list item.
        if (index && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow && events.get(index - 1)[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(event[1]._tokenizer, 'expected `_tokenizer` on subtokens');
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                otherIndex += 2;
            }
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                while(++otherIndex < subevents.length){
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                        break;
                    }
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText) {
                        subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                        otherIndex++;
                    }
                }
            }
        }
        // Enter.
        if (event[0] === 'enter') {
            if (event[1].contentType) {
                Object.assign(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events.get(otherIndex);
                if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                    if (otherEvent[0] === 'enter') {
                        if (lineIndex) {
                            events.get(lineIndex)[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                        }
                        otherEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                        lineIndex = otherIndex;
                    }
                } else if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                // Move past.
                } else {
                    break;
                }
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = {
                    ...events.get(lineIndex)[1].start
                };
                // Switch container exit w/ line endings.
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                events.splice(lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    // The changes to the `events` buffer must be copied back into the eventsArray
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {SpliceBuffer<Event>} events
 *   Events.
 * @param {number} eventIndex
 *   Index.
 * @returns {Record<string, number>}
 *   Gaps.
 */ function subcontent(events, eventIndex) {
    const token = events.get(eventIndex)[1];
    const context = events.get(eventIndex)[2];
    let startPosition = eventIndex - 1;
    /** @type {Array<number>} */ const startPositions = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.contentType, 'expected `contentType` on subtokens');
    let tokenizer = token._tokenizer;
    if (!tokenizer) {
        tokenizer = context.parser[token.contentType](token.start);
        if (token._contentTypeTextTrailing) {
            tokenizer._contentTypeTextTrailing = true;
        }
    }
    const childEvents = tokenizer.events;
    /** @type {Array<[number, number]>} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Array<Chunk>} */ let stream;
    /** @type {Token | undefined} */ let previous;
    let index = -1;
    /** @type {Token | undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ];
    // Loop forward through the linked tokens to pass them in order to the
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events.get(++startPosition)[1] !== current){
        // Empty.
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || current.previous === previous, 'expected previous to match');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || previous.next === current, 'expected next to match');
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) {
                stream.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof);
            }
            if (previous) {
                tokenizer.defineSkip(current.start);
            }
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        }
        // Unravel the next token.
        previous = current;
        current = current.next;
    }
    // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length){
        if (// Find a void token that includes a break.
        childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(current, 'expected a current token');
            start = index + 1;
            breaks.push(start);
            // Help GC.
            current._tokenizer = undefined;
            current.previous = undefined;
            current = current.next;
        }
    }
    // Help GC.
    tokenizer.events = [];
    // If there’s one more token (which is the cases for lines that end in an
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!current.next, 'expected no next token');
    } else {
        breaks.pop();
    }
    // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(start !== undefined, 'expected a start position when splicing');
        jumps.push([
            start,
            start + slice.length - 1
        ]);
        events.splice(start, 2, slice);
    }
    jumps.reverse();
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "classifyCharacter",
    ()=>classifyCharacter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
function classifyCharacter(code) {
    if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupWhitespace;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupPunctuation;
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */ __turbopack_context__.s([
    "resolveAll",
    ()=>resolveAll
]);
function resolveAll(constructs, events, context) {
    /** @type {Array<Resolver>} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "characterEntities",
    ()=>characterEntities
]);
const characterEntities = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Abreve: 'Ă',
    Acirc: 'Â',
    Acy: 'А',
    Afr: '𝔄',
    Agrave: 'À',
    Alpha: 'Α',
    Amacr: 'Ā',
    And: '⩓',
    Aogon: 'Ą',
    Aopf: '𝔸',
    ApplyFunction: '⁡',
    Aring: 'Å',
    Ascr: '𝒜',
    Assign: '≔',
    Atilde: 'Ã',
    Auml: 'Ä',
    Backslash: '∖',
    Barv: '⫧',
    Barwed: '⌆',
    Bcy: 'Б',
    Because: '∵',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    Bfr: '𝔅',
    Bopf: '𝔹',
    Breve: '˘',
    Bscr: 'ℬ',
    Bumpeq: '≎',
    CHcy: 'Ч',
    COPY: '©',
    Cacute: 'Ć',
    Cap: '⋒',
    CapitalDifferentialD: 'ⅅ',
    Cayleys: 'ℭ',
    Ccaron: 'Č',
    Ccedil: 'Ç',
    Ccirc: 'Ĉ',
    Cconint: '∰',
    Cdot: 'Ċ',
    Cedilla: '¸',
    CenterDot: '·',
    Cfr: 'ℭ',
    Chi: 'Χ',
    CircleDot: '⊙',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    Colon: '∷',
    Colone: '⩴',
    Congruent: '≡',
    Conint: '∯',
    ContourIntegral: '∮',
    Copf: 'ℂ',
    Coproduct: '∐',
    CounterClockwiseContourIntegral: '∳',
    Cross: '⨯',
    Cscr: '𝒞',
    Cup: '⋓',
    CupCap: '≍',
    DD: 'ⅅ',
    DDotrahd: '⤑',
    DJcy: 'Ђ',
    DScy: 'Ѕ',
    DZcy: 'Џ',
    Dagger: '‡',
    Darr: '↡',
    Dashv: '⫤',
    Dcaron: 'Ď',
    Dcy: 'Д',
    Del: '∇',
    Delta: 'Δ',
    Dfr: '𝔇',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    Diamond: '⋄',
    DifferentialD: 'ⅆ',
    Dopf: '𝔻',
    Dot: '¨',
    DotDot: '⃜',
    DotEqual: '≐',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrow: '↓',
    DownArrowBar: '⤓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVector: '↽',
    DownLeftVectorBar: '⥖',
    DownRightTeeVector: '⥟',
    DownRightVector: '⇁',
    DownRightVectorBar: '⥗',
    DownTee: '⊤',
    DownTeeArrow: '↧',
    Downarrow: '⇓',
    Dscr: '𝒟',
    Dstrok: 'Đ',
    ENG: 'Ŋ',
    ETH: 'Ð',
    Eacute: 'É',
    Ecaron: 'Ě',
    Ecirc: 'Ê',
    Ecy: 'Э',
    Edot: 'Ė',
    Efr: '𝔈',
    Egrave: 'È',
    Element: '∈',
    Emacr: 'Ē',
    EmptySmallSquare: '◻',
    EmptyVerySmallSquare: '▫',
    Eogon: 'Ę',
    Eopf: '𝔼',
    Epsilon: 'Ε',
    Equal: '⩵',
    EqualTilde: '≂',
    Equilibrium: '⇌',
    Escr: 'ℰ',
    Esim: '⩳',
    Eta: 'Η',
    Euml: 'Ë',
    Exists: '∃',
    ExponentialE: 'ⅇ',
    Fcy: 'Ф',
    Ffr: '𝔉',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    Fopf: '𝔽',
    ForAll: '∀',
    Fouriertrf: 'ℱ',
    Fscr: 'ℱ',
    GJcy: 'Ѓ',
    GT: '>',
    Gamma: 'Γ',
    Gammad: 'Ϝ',
    Gbreve: 'Ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    Gcy: 'Г',
    Gdot: 'Ġ',
    Gfr: '𝔊',
    Gg: '⋙',
    Gopf: '𝔾',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    Gt: '≫',
    HARDcy: 'Ъ',
    Hacek: 'ˇ',
    Hat: '^',
    Hcirc: 'Ĥ',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    Hopf: 'ℍ',
    HorizontalLine: '─',
    Hscr: 'ℋ',
    Hstrok: 'Ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    IEcy: 'Е',
    IJlig: 'Ĳ',
    IOcy: 'Ё',
    Iacute: 'Í',
    Icirc: 'Î',
    Icy: 'И',
    Idot: 'İ',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    Im: 'ℑ',
    Imacr: 'Ī',
    ImaginaryI: 'ⅈ',
    Implies: '⇒',
    Int: '∬',
    Integral: '∫',
    Intersection: '⋂',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    Iogon: 'Į',
    Iopf: '𝕀',
    Iota: 'Ι',
    Iscr: 'ℐ',
    Itilde: 'Ĩ',
    Iukcy: 'І',
    Iuml: 'Ï',
    Jcirc: 'Ĵ',
    Jcy: 'Й',
    Jfr: '𝔍',
    Jopf: '𝕁',
    Jscr: '𝒥',
    Jsercy: 'Ј',
    Jukcy: 'Є',
    KHcy: 'Х',
    KJcy: 'Ќ',
    Kappa: 'Κ',
    Kcedil: 'Ķ',
    Kcy: 'К',
    Kfr: '𝔎',
    Kopf: '𝕂',
    Kscr: '𝒦',
    LJcy: 'Љ',
    LT: '<',
    Lacute: 'Ĺ',
    Lambda: 'Λ',
    Lang: '⟪',
    Laplacetrf: 'ℒ',
    Larr: '↞',
    Lcaron: 'Ľ',
    Lcedil: 'Ļ',
    Lcy: 'Л',
    LeftAngleBracket: '⟨',
    LeftArrow: '←',
    LeftArrowBar: '⇤',
    LeftArrowRightArrow: '⇆',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVector: '⇃',
    LeftDownVectorBar: '⥙',
    LeftFloor: '⌊',
    LeftRightArrow: '↔',
    LeftRightVector: '⥎',
    LeftTee: '⊣',
    LeftTeeArrow: '↤',
    LeftTeeVector: '⥚',
    LeftTriangle: '⊲',
    LeftTriangleBar: '⧏',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVector: '↿',
    LeftUpVectorBar: '⥘',
    LeftVector: '↼',
    LeftVectorBar: '⥒',
    Leftarrow: '⇐',
    Leftrightarrow: '⇔',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    LessLess: '⪡',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    Lfr: '𝔏',
    Ll: '⋘',
    Lleftarrow: '⇚',
    Lmidot: 'Ŀ',
    LongLeftArrow: '⟵',
    LongLeftRightArrow: '⟷',
    LongRightArrow: '⟶',
    Longleftarrow: '⟸',
    Longleftrightarrow: '⟺',
    Longrightarrow: '⟹',
    Lopf: '𝕃',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    Lscr: 'ℒ',
    Lsh: '↰',
    Lstrok: 'Ł',
    Lt: '≪',
    Map: '⤅',
    Mcy: 'М',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    MinusPlus: '∓',
    Mopf: '𝕄',
    Mscr: 'ℳ',
    Mu: 'Μ',
    NJcy: 'Њ',
    Nacute: 'Ń',
    Ncaron: 'Ň',
    Ncedil: 'Ņ',
    Ncy: 'Н',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    Nfr: '𝔑',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    Nopf: 'ℕ',
    Not: '⫬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangle: '⋫',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    Nscr: '𝒩',
    Ntilde: 'Ñ',
    Nu: 'Ν',
    OElig: 'Œ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ocy: 'О',
    Odblac: 'Ő',
    Ofr: '𝔒',
    Ograve: 'Ò',
    Omacr: 'Ō',
    Omega: 'Ω',
    Omicron: 'Ο',
    Oopf: '𝕆',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    Or: '⩔',
    Oscr: '𝒪',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Otimes: '⨷',
    Ouml: 'Ö',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    PartialD: '∂',
    Pcy: 'П',
    Pfr: '𝔓',
    Phi: 'Φ',
    Pi: 'Π',
    PlusMinus: '±',
    Poincareplane: 'ℌ',
    Popf: 'ℙ',
    Pr: '⪻',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    Prime: '″',
    Product: '∏',
    Proportion: '∷',
    Proportional: '∝',
    Pscr: '𝒫',
    Psi: 'Ψ',
    QUOT: '"',
    Qfr: '𝔔',
    Qopf: 'ℚ',
    Qscr: '𝒬',
    RBarr: '⤐',
    REG: '®',
    Racute: 'Ŕ',
    Rang: '⟫',
    Rarr: '↠',
    Rarrtl: '⤖',
    Rcaron: 'Ř',
    Rcedil: 'Ŗ',
    Rcy: 'Р',
    Re: 'ℜ',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    Rfr: 'ℜ',
    Rho: 'Ρ',
    RightAngleBracket: '⟩',
    RightArrow: '→',
    RightArrowBar: '⇥',
    RightArrowLeftArrow: '⇄',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVector: '⇂',
    RightDownVectorBar: '⥕',
    RightFloor: '⌋',
    RightTee: '⊢',
    RightTeeArrow: '↦',
    RightTeeVector: '⥛',
    RightTriangle: '⊳',
    RightTriangleBar: '⧐',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVector: '↾',
    RightUpVectorBar: '⥔',
    RightVector: '⇀',
    RightVectorBar: '⥓',
    Rightarrow: '⇒',
    Ropf: 'ℝ',
    RoundImplies: '⥰',
    Rrightarrow: '⇛',
    Rscr: 'ℛ',
    Rsh: '↱',
    RuleDelayed: '⧴',
    SHCHcy: 'Щ',
    SHcy: 'Ш',
    SOFTcy: 'Ь',
    Sacute: 'Ś',
    Sc: '⪼',
    Scaron: 'Š',
    Scedil: 'Ş',
    Scirc: 'Ŝ',
    Scy: 'С',
    Sfr: '𝔖',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    Sigma: 'Σ',
    SmallCircle: '∘',
    Sopf: '𝕊',
    Sqrt: '√',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    Sscr: '𝒮',
    Star: '⋆',
    Sub: '⋐',
    Subset: '⋐',
    SubsetEqual: '⊆',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    SuchThat: '∋',
    Sum: '∑',
    Sup: '⋑',
    Superset: '⊃',
    SupersetEqual: '⊇',
    Supset: '⋑',
    THORN: 'Þ',
    TRADE: '™',
    TSHcy: 'Ћ',
    TScy: 'Ц',
    Tab: '\t',
    Tau: 'Τ',
    Tcaron: 'Ť',
    Tcedil: 'Ţ',
    Tcy: 'Т',
    Tfr: '𝔗',
    Therefore: '∴',
    Theta: 'Θ',
    ThickSpace: '  ',
    ThinSpace: ' ',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    Topf: '𝕋',
    TripleDot: '⃛',
    Tscr: '𝒯',
    Tstrok: 'Ŧ',
    Uacute: 'Ú',
    Uarr: '↟',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    Ubreve: 'Ŭ',
    Ucirc: 'Û',
    Ucy: 'У',
    Udblac: 'Ű',
    Ufr: '𝔘',
    Ugrave: 'Ù',
    Umacr: 'Ū',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    Uopf: '𝕌',
    UpArrow: '↑',
    UpArrowBar: '⤒',
    UpArrowDownArrow: '⇅',
    UpDownArrow: '↕',
    UpEquilibrium: '⥮',
    UpTee: '⊥',
    UpTeeArrow: '↥',
    Uparrow: '⇑',
    Updownarrow: '⇕',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    Upsi: 'ϒ',
    Upsilon: 'Υ',
    Uring: 'Ů',
    Uscr: '𝒰',
    Utilde: 'Ũ',
    Uuml: 'Ü',
    VDash: '⊫',
    Vbar: '⫫',
    Vcy: 'В',
    Vdash: '⊩',
    Vdashl: '⫦',
    Vee: '⋁',
    Verbar: '‖',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    Vopf: '𝕍',
    Vscr: '𝒱',
    Vvdash: '⊪',
    Wcirc: 'Ŵ',
    Wedge: '⋀',
    Wfr: '𝔚',
    Wopf: '𝕎',
    Wscr: '𝒲',
    Xfr: '𝔛',
    Xi: 'Ξ',
    Xopf: '𝕏',
    Xscr: '𝒳',
    YAcy: 'Я',
    YIcy: 'Ї',
    YUcy: 'Ю',
    Yacute: 'Ý',
    Ycirc: 'Ŷ',
    Ycy: 'Ы',
    Yfr: '𝔜',
    Yopf: '𝕐',
    Yscr: '𝒴',
    Yuml: 'Ÿ',
    ZHcy: 'Ж',
    Zacute: 'Ź',
    Zcaron: 'Ž',
    Zcy: 'З',
    Zdot: 'Ż',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    Zfr: 'ℨ',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    aacute: 'á',
    abreve: 'ă',
    ac: '∾',
    acE: '∾̳',
    acd: '∿',
    acirc: 'â',
    acute: '´',
    acy: 'а',
    aelig: 'æ',
    af: '⁡',
    afr: '𝔞',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    alpha: 'α',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    and: '∧',
    andand: '⩕',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsd: '∡',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    aogon: 'ą',
    aopf: '𝕒',
    ap: '≈',
    apE: '⩰',
    apacir: '⩯',
    ape: '≊',
    apid: '≋',
    apos: "'",
    approx: '≈',
    approxeq: '≊',
    aring: 'å',
    ascr: '𝒶',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    atilde: 'ã',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    bNot: '⫭',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    barvee: '⊽',
    barwed: '⌅',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bnot: '⌐',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxDL: '╗',
    boxDR: '╔',
    boxDl: '╖',
    boxDr: '╓',
    boxH: '═',
    boxHD: '╦',
    boxHU: '╩',
    boxHd: '╤',
    boxHu: '╧',
    boxUL: '╝',
    boxUR: '╚',
    boxUl: '╜',
    boxUr: '╙',
    boxV: '║',
    boxVH: '╬',
    boxVL: '╣',
    boxVR: '╠',
    boxVh: '╫',
    boxVl: '╢',
    boxVr: '╟',
    boxbox: '⧉',
    boxdL: '╕',
    boxdR: '╒',
    boxdl: '┐',
    boxdr: '┌',
    boxh: '─',
    boxhD: '╥',
    boxhU: '╨',
    boxhd: '┬',
    boxhu: '┴',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxuL: '╛',
    boxuR: '╘',
    boxul: '┘',
    boxur: '└',
    boxv: '│',
    boxvH: '╪',
    boxvL: '╡',
    boxvR: '╞',
    boxvh: '┼',
    boxvl: '┤',
    boxvr: '├',
    bprime: '‵',
    breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsol: '\\',
    bsolb: '⧅',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    bumpeq: '≏',
    cacute: 'ć',
    cap: '∩',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    capcup: '⩇',
    capdot: '⩀',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    ccaps: '⩍',
    ccaron: 'č',
    ccedil: 'ç',
    ccirc: 'ĉ',
    ccups: '⩌',
    ccupssm: '⩐',
    cdot: 'ċ',
    cedil: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    cfr: '𝔠',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    chi: 'χ',
    cir: '○',
    cirE: '⧃',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledR: '®',
    circledS: 'Ⓢ',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    conint: '∮',
    copf: '𝕔',
    coprod: '∐',
    copy: '©',
    copysr: '℗',
    crarr: '↵',
    cross: '✗',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cup: '∪',
    cupbrcap: '⩈',
    cupcap: '⩆',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dArr: '⇓',
    dHar: '⥥',
    dagger: '†',
    daleth: 'ℸ',
    darr: '↓',
    dash: '‐',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    dcaron: 'ď',
    dcy: 'д',
    dd: 'ⅆ',
    ddagger: '‡',
    ddarr: '⇊',
    ddotseq: '⩷',
    deg: '°',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    dfr: '𝔡',
    dharl: '⇃',
    dharr: '⇂',
    diam: '⋄',
    diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    dopf: '𝕕',
    dot: '˙',
    doteq: '≐',
    doteqdot: '≑',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    downarrow: '↓',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    dscr: '𝒹',
    dscy: 'ѕ',
    dsol: '⧶',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    dzcy: 'џ',
    dzigrarr: '⟿',
    eDDot: '⩷',
    eDot: '≑',
    eacute: 'é',
    easter: '⩮',
    ecaron: 'ě',
    ecir: '≖',
    ecirc: 'ê',
    ecolon: '≕',
    ecy: 'э',
    edot: 'ė',
    ee: 'ⅇ',
    efDot: '≒',
    efr: '𝔢',
    eg: '⪚',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    eng: 'ŋ',
    ensp: ' ',
    eogon: 'ę',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    equals: '=',
    equest: '≟',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erDot: '≓',
    erarr: '⥱',
    escr: 'ℯ',
    esdot: '≐',
    esim: '≂',
    eta: 'η',
    eth: 'ð',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    fallingdotseq: '≒',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    ffr: '𝔣',
    filig: 'ﬁ',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    fopf: '𝕗',
    forall: '∀',
    fork: '⋔',
    forkv: '⫙',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    gE: '≧',
    gEl: '⪌',
    gacute: 'ǵ',
    gamma: 'γ',
    gammad: 'ϝ',
    gap: '⪆',
    gbreve: 'ğ',
    gcirc: 'ĝ',
    gcy: 'г',
    gdot: 'ġ',
    ge: '≥',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    ges: '⩾',
    gescc: '⪩',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    gfr: '𝔤',
    gg: '≫',
    ggg: '⋙',
    gimel: 'ℷ',
    gjcy: 'ѓ',
    gl: '≷',
    glE: '⪒',
    gla: '⪥',
    glj: '⪤',
    gnE: '≩',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    gopf: '𝕘',
    grave: '`',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gt: '>',
    gtcc: '⪧',
    gtcir: '⩺',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    hArr: '⇔',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    hardcy: 'ъ',
    harr: '↔',
    harrcir: '⥈',
    harrw: '↭',
    hbar: 'ℏ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    horbar: '―',
    hscr: '𝒽',
    hslash: 'ℏ',
    hstrok: 'ħ',
    hybull: '⁃',
    hyphen: '‐',
    iacute: 'í',
    ic: '⁣',
    icirc: 'î',
    icy: 'и',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    ijlig: 'ĳ',
    imacr: 'ī',
    image: 'ℑ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    imof: '⊷',
    imped: 'Ƶ',
    in: '∈',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    int: '∫',
    intcal: '⊺',
    integers: 'ℤ',
    intercal: '⊺',
    intlarhk: '⨗',
    intprod: '⨼',
    iocy: 'ё',
    iogon: 'į',
    iopf: '𝕚',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    isin: '∈',
    isinE: '⋹',
    isindot: '⋵',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    itilde: 'ĩ',
    iukcy: 'і',
    iuml: 'ï',
    jcirc: 'ĵ',
    jcy: 'й',
    jfr: '𝔧',
    jmath: 'ȷ',
    jopf: '𝕛',
    jscr: '𝒿',
    jsercy: 'ј',
    jukcy: 'є',
    kappa: 'κ',
    kappav: 'ϰ',
    kcedil: 'ķ',
    kcy: 'к',
    kfr: '𝔨',
    kgreen: 'ĸ',
    khcy: 'х',
    kjcy: 'ќ',
    kopf: '𝕜',
    kscr: '𝓀',
    lAarr: '⇚',
    lArr: '⇐',
    lAtail: '⤛',
    lBarr: '⤎',
    lE: '≦',
    lEg: '⪋',
    lHar: '⥢',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    lambda: 'λ',
    lang: '⟨',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    laquo: '«',
    larr: '←',
    larrb: '⇤',
    larrbfs: '⤟',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    lat: '⪫',
    latail: '⤙',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    lcaron: 'ľ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    leftarrow: '←',
    leftarrowtail: '↢',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    leftthreetimes: '⋋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    les: '⩽',
    lescc: '⪨',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    lessgtr: '≶',
    lesssim: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    ljcy: 'љ',
    ll: '≪',
    llarr: '⇇',
    llcorner: '⌞',
    llhard: '⥫',
    lltri: '◺',
    lmidot: 'ŀ',
    lmoust: '⎰',
    lmoustache: '⎰',
    lnE: '≨',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    longleftrightarrow: '⟷',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    lstrok: 'ł',
    lt: '<',
    ltcc: '⪦',
    ltcir: '⩹',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltrPar: '⦖',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    mDDot: '∺',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    mcy: 'м',
    mdash: '—',
    measuredangle: '∡',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    mid: '∣',
    midast: '*',
    midcir: '⫰',
    middot: '·',
    minus: '−',
    minusb: '⊟',
    minusd: '∸',
    minusdu: '⨪',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    mstpos: '∾',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nGg: '⋙̸',
    nGt: '≫⃒',
    nGtv: '≫̸',
    nLeftarrow: '⇍',
    nLeftrightarrow: '⇎',
    nLl: '⋘̸',
    nLt: '≪⃒',
    nLtv: '≪̸',
    nRightarrow: '⇏',
    nVDash: '⊯',
    nVdash: '⊮',
    nabla: '∇',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natur: '♮',
    natural: '♮',
    naturals: 'ℕ',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    ncaron: 'ň',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    ncy: 'н',
    ndash: '–',
    ne: '≠',
    neArr: '⇗',
    nearhk: '⤤',
    nearr: '↗',
    nearrow: '↗',
    nedot: '≐̸',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    nexist: '∄',
    nexists: '∄',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    ngsim: '≵',
    ngt: '≯',
    ngtr: '≯',
    nhArr: '⇎',
    nharr: '↮',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    njcy: 'њ',
    nlArr: '⇍',
    nlE: '≦̸',
    nlarr: '↚',
    nldr: '‥',
    nle: '≰',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nlsim: '≴',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nmid: '∤',
    nopf: '𝕟',
    not: '¬',
    notin: '∉',
    notinE: '⋹̸',
    notindot: '⋵̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    npar: '∦',
    nparallel: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    npre: '⪯̸',
    nprec: '⊀',
    npreceq: '⪯̸',
    nrArr: '⇏',
    nrarr: '↛',
    nrarrc: '⤳̸',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvDash: '⊭',
    nvHarr: '⤄',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwArr: '⇖',
    nwarhk: '⤣',
    nwarr: '↖',
    nwarrow: '↖',
    nwnear: '⤧',
    oS: 'Ⓢ',
    oacute: 'ó',
    oast: '⊛',
    ocir: '⊚',
    ocirc: 'ô',
    ocy: 'о',
    odash: '⊝',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    oelig: 'œ',
    ofcir: '⦿',
    ofr: '𝔬',
    ogon: '˛',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    omacr: 'ō',
    omega: 'ω',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    oopf: '𝕠',
    opar: '⦷',
    operp: '⦹',
    oplus: '⊕',
    or: '∨',
    orarr: '↻',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oscr: 'ℴ',
    oslash: 'ø',
    osol: '⊘',
    otilde: 'õ',
    otimes: '⊗',
    otimesas: '⨶',
    ouml: 'ö',
    ovbar: '⌽',
    par: '∥',
    para: '¶',
    parallel: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    pfr: '𝔭',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plus: '+',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    pointint: '⨕',
    popf: '𝕡',
    pound: '£',
    pr: '≺',
    prE: '⪳',
    prap: '⪷',
    prcue: '≼',
    pre: '⪯',
    prec: '≺',
    precapprox: '⪷',
    preccurlyeq: '≼',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    precsim: '≾',
    prime: '′',
    primes: 'ℙ',
    prnE: '⪵',
    prnap: '⪹',
    prnsim: '⋨',
    prod: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    pscr: '𝓅',
    psi: 'ψ',
    puncsp: ' ',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    qprime: '⁗',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    rAarr: '⇛',
    rArr: '⇒',
    rAtail: '⤜',
    rBarr: '⤏',
    rHar: '⥤',
    race: '∽̱',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarr: '→',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    rcaron: 'ř',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    rect: '▭',
    reg: '®',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    rho: 'ρ',
    rhov: 'ϱ',
    rightarrow: '→',
    rightarrowtail: '↣',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    rightthreetimes: '⋌',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoust: '⎱',
    rmoustache: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    roplus: '⨮',
    rotimes: '⨵',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    rsaquo: '›',
    rscr: '𝓇',
    rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    ruluhar: '⥨',
    rx: '℞',
    sacute: 'ś',
    sbquo: '‚',
    sc: '≻',
    scE: '⪴',
    scap: '⪸',
    scaron: 'š',
    sccue: '≽',
    sce: '⪰',
    scedil: 'ş',
    scirc: 'ŝ',
    scnE: '⪶',
    scnap: '⪺',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    scy: 'с',
    sdot: '⋅',
    sdotb: '⊡',
    sdote: '⩦',
    seArr: '⇘',
    searhk: '⤥',
    searr: '↘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    shchcy: 'щ',
    shcy: 'ш',
    shortmid: '∣',
    shortparallel: '∥',
    shy: '­',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    softcy: 'ь',
    sol: '/',
    solb: '⧄',
    solbar: '⌿',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    squ: '□',
    square: '□',
    squarf: '▪',
    squf: '▪',
    srarr: '→',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    subE: '⫅',
    subdot: '⪽',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    subseteq: '⊆',
    subseteqq: '⫅',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succ: '≻',
    succapprox: '⪸',
    succcurlyeq: '≽',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    supE: '⫆',
    supdot: '⪾',
    supdsub: '⫘',
    supe: '⊇',
    supedot: '⫄',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swArr: '⇙',
    swarhk: '⤦',
    swarr: '↙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    target: '⌖',
    tau: 'τ',
    tbrk: '⎴',
    tcaron: 'ť',
    tcedil: 'ţ',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    thorn: 'þ',
    tilde: '˜',
    times: '×',
    timesb: '⊠',
    timesbar: '⨱',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    top: '⊤',
    topbot: '⌶',
    topcir: '⫱',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    tscr: '𝓉',
    tscy: 'ц',
    tshcy: 'ћ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    uArr: '⇑',
    uHar: '⥣',
    uacute: 'ú',
    uarr: '↑',
    ubrcy: 'ў',
    ubreve: 'ŭ',
    ucirc: 'û',
    ucy: 'у',
    udarr: '⇅',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    ufr: '𝔲',
    ugrave: 'ù',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    umacr: 'ū',
    uml: '¨',
    uogon: 'ų',
    uopf: '𝕦',
    uparrow: '↑',
    updownarrow: '↕',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    upsi: 'υ',
    upsih: 'ϒ',
    upsilon: 'υ',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    uring: 'ů',
    urtri: '◹',
    uscr: '𝓊',
    utdot: '⋰',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    uuml: 'ü',
    uwangle: '⦧',
    vArr: '⇕',
    vBar: '⫨',
    vBarv: '⫩',
    vDash: '⊨',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vcy: 'в',
    vdash: '⊢',
    vee: '∨',
    veebar: '⊻',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    vert: '|',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    vzigzag: '⦚',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    wedgeq: '≙',
    weierp: '℘',
    wfr: '𝔴',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    xfr: '𝔵',
    xhArr: '⟺',
    xharr: '⟷',
    xi: 'ξ',
    xlArr: '⟸',
    xlarr: '⟵',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrArr: '⟹',
    xrarr: '⟶',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    yacute: 'ý',
    yacy: 'я',
    ycirc: 'ŷ',
    ycy: 'ы',
    yen: '¥',
    yfr: '𝔶',
    yicy: 'ї',
    yopf: '𝕪',
    yscr: '𝓎',
    yucy: 'ю',
    yuml: 'ÿ',
    zacute: 'ź',
    zcaron: 'ž',
    zcy: 'з',
    zdot: 'ż',
    zeetrf: 'ℨ',
    zeta: 'ζ',
    zfr: '𝔷',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌'
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNamedCharacterReference",
    ()=>decodeNamedCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js [app-ssr] (ecmascript)");
;
// To do: next major: use `Object.hasOwn`.
const own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
    return own.call(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"], value) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"][value] : false;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryDestination",
    ()=>factoryDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return enclosedBefore;
        }
        // ASCII control, space, closing paren.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return raw(code);
    }
    /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosedBefore(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return enclosed(code);
    }
    /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosed(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            return enclosedBefore(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? enclosedEscape : enclosed;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */ function enclosedEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return enclosed;
        }
        return enclosed(code);
    }
    /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function raw(code) {
        if (!balance && (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code))) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (balance < limit && code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.consume(code);
            balance++;
            return raw;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis) {
            effects.consume(code);
            balance--;
            return raw;
        }
        // ASCII control (but *not* `\0`) and space and `(`.
        // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
        // doesn’t.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? rawEscape : raw;
    }
    /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */ function rawEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return raw;
        }
        return raw(code);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Effects,
 *   State,
 *   TokenizeContext,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryLabel",
    ()=>factoryLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (size > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket && !seen || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].caret && !size && '_hiddenFootnoteSupport' in self.parser.constructs) {
            return nok(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        // To do: indent? Link chunks and EOLs together?
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return atBreak;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return labelInside(code);
    }
    /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code) || size++ > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        if (!seen) seen = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Code,
 *   Effects,
 *   State,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryTitle",
    ()=>factoryTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].quotationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].apostrophe || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.enter(type);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            marker = code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis : code;
            return begin;
        }
        return nok(code);
    }
    /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function begin(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atBreak(code);
    }
    /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return begin(marker);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            return nok(code);
        }
        // Note: blank lines can’t exist in content.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            // To do: use `space_or_tab_eol_with_options`, connect.
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, atBreak, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix);
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return inside(code);
    }
    /**
   *
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? escape : inside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */ function escape(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return inside;
        }
        return inside(code);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryWhitespace",
    ()=>factoryWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryWhitespace(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            seen = true;
            return start;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, start, seen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineSuffix)(code);
        }
        return ok(code);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeIdentifier",
    ()=>normalizeIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function normalizeIdentifier(value) {
    return value// Collapse markdown whitespace.
    .replace(/[\t\n\r ]+/g, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].space)// Trim.
    .replace(/^ | $/g, '')// Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */ __turbopack_context__.s([
    "htmlBlockNames",
    ()=>htmlBlockNames,
    "htmlRawNames",
    ()=>htmlRawNames
]);
const htmlBlockNames = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul'
];
const htmlRawNames = [
    'pre',
    'script',
    'style',
    'textarea'
];
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNumericCharacterReference",
    ()=>decodeNumericCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space.
    code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ht || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].vt || code > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].cr && code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].tilde && code < 160 || code > 55_295 && code < 57_344 || code > 64_975 && code < 65_008 || /* eslint-disable no-bitwise */ (code & 65_535) === 65_535 || (code & 65_535) === 65_534 || /* eslint-enable no-bitwise */ // Out of range
    code > 1_114_111) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
    }
    return String.fromCodePoint(code);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeString",
    ()=>decodeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
;
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 *   Match.
 * @param {string} $1
 *   Character escape.
 * @param {string} $2
 *   Character reference.
 * @returns {string}
 *   Decoded value
 */ function decode($0, $1, $2) {
    if ($1) {
        // Escape.
        return $1;
    }
    // Reference.
    const head = $2.charCodeAt(0);
    if (head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].numberSign) {
        const head = $2.charCodeAt(1);
        const hex = head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lowercaseX || head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].uppercaseX;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])($2.slice(hex ? 2 : 1), hex ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])($2) || $0;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Break,
 *   Blockquote,
 *   Code,
 *   Definition,
 *   Emphasis,
 *   Heading,
 *   Html,
 *   Image,
 *   InlineCode,
 *   Link,
 *   ListItem,
 *   List,
 *   Nodes,
 *   Paragraph,
 *   PhrasingContent,
 *   ReferenceType,
 *   Root,
 *   Strong,
 *   Text,
 *   ThematicBreak
 * } from 'mdast'
 * @import {
 *   Encoding,
 *   Event,
 *   Token,
 *   Value
 * } from 'micromark-util-types'
 * @import {Point} from 'unist'
 * @import {
 *   CompileContext,
 *   CompileData,
 *   Config,
 *   Extension,
 *   Handle,
 *   OnEnterError,
 *   Options
 * } from './types.js'
 */ __turbopack_context__.s([
    "fromMarkdown",
    ()=>fromMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$string$40$4$2e$0$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/postprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/preprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$string$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const own = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
    if (typeof encoding !== 'string') {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postprocess"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(options).document().write((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preprocess"])()(value, encoding, true))));
}
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */ function compiler(options) {
    /** @type {Config} */ const config = {
        transforms: [],
        canContainEols: [
            'emphasis',
            'fragment',
            'heading',
            'paragraph',
            'strong'
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            characterReference: onexitcharacterreference,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    };
    configure(config, (options || {}).mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    //TURBOPACK unreachable
    ;
    /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: 'root',
            children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: [
                tree
            ],
            tokenStack: [],
            config,
            enter,
            exit,
            buffer,
            resume,
            data
        };
        /** @type {Array<number>} */ const listStack = [];
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered || events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered) {
                if (events[index][0] === 'enter') {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof tail === 'number', 'expected list ot be open');
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if (own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
            const tail = context.tokenStack[context.tokenStack.length - 1];
            const handler = tail[1] || defaultOnError;
            handler.call(context, undefined, tail[0]);
        }
        // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        // Call transforms.
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */ let listItem;
        /** @type {number | undefined} */ let lineIndex;
        /** @type {number | undefined} */ let firstBlankLineIndex;
        /** @type {boolean | undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            switch(event[1].type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuote:
                    {
                        if (event[0] === 'enter') {
                            containerBalance++;
                        } else {
                            containerBalance--;
                        }
                        atMarker = undefined;
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank:
                    {
                        if (event[0] === 'enter') {
                            if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                                firstBlankLineIndex = index;
                            }
                            atMarker = undefined;
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemValue:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemMarker:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefixWhitespace:
                    {
                        break;
                    }
                default:
                    {
                        atMarker = undefined;
                    }
            }
            if (!containerBalance && event[0] === 'enter' && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix || containerBalance === -1 && event[0] === 'exit' && (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered || event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered)) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                            if (tailEvent[0] === 'exit') continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                                listSpread = true;
                            }
                            tailEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefixWhitespace || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuoteMarker || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        listItem._spread = true;
                    }
                    // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        'exit',
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                }
                // Create a new list item.
                if (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
                    /** @type {Token} */ const item = {
                        type: 'listItem',
                        _spread: false,
                        start: Object.assign({}, event[1].start),
                        // @ts-expect-error: we’ll add `end` in a second.
                        end: undefined
                    };
                    listItem = item;
                    events.splice(index, 0, [
                        'enter',
                        item,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Nodes} create
   *   Create a node.
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function opener(create, and) {
        return open;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /**
   * @type {CompileContext['buffer']}
   */ function buffer() {
        this.stack.push({
            type: 'fragment',
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(parent, 'expected `parent`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in parent, 'expected `parent`');
        /** @type {Array<Nodes>} */ const siblings = parent.children;
        siblings.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler || undefined
        ]);
        node.position = {
            start: point(token.start),
            // @ts-expect-error: `end` will be patched later.
            end: undefined
        };
    }
    /**
   * Create a closer handle.
   *
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function closer(and) {
        return close;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @type {CompileContext['exit']}
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected `node`');
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error('Cannot close `' + token.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
                start: token.start,
                end: token.end
            }) + '): it’s not open');
        } else if (open[0].type !== token.type) {
            if (onExitError) {
                onExitError.call(this, token, open[0]);
            } else {
                const handler = open[1] || defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type !== 'fragment', 'unexpected fragment `exit`ed');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.position, 'expected `position` to be defined');
        node.position.end = point(token.end);
    }
    /**
   * @type {CompileContext['resume']}
   */ function resume() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$string$40$4$2e$0$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(this.stack.pop());
    }
    //
    // Handlers.
    //
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistordered() {
        this.data.expectingFirstListItemValue = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistitemvalue(token) {
        if (this.data.expectingFirstListItemValue) {
            const ancestor = this.stack[this.stack.length - 2];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected nodes on stack');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'list', 'expected list on stack');
            ancestor.start = Number.parseInt(this.sliceSerialize(token), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
            this.data.expectingFirstListItemValue = undefined;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.lang = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.meta = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (this.data.flowCodeInside) return;
        this.buffer();
        this.data.flowCodeInside = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
        this.data.flowCodeInside = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/(\r?\n|\r)$/g, '');
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.label = label;
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(depth === 1 || depth === 2 || depth === 3 || depth === 4 || depth === 5 || depth === 6, 'expected `depth` between `1` and `6`');
            node.depth = depth;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadingtext() {
        this.data.setextHeadingSlurpLineEnding = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        node.depth = this.sliceSerialize(token).codePointAt(0) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].equalsTo ? 1 : 2;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheading() {
        this.data.setextHeadingSlurpLineEnding = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in node, 'expected parent on stack');
        /** @type {Array<Nodes>} */ const siblings = node.children;
        let tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== 'text') {
            // Add a new text node.
            tail = text();
            tail.position = {
                start: point(token.start),
                // @ts-expect-error: we’ll add `end` later.
                end: undefined
            };
            siblings.push(tail);
        }
        this.stack.push(tail);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdata(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected a `node` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected a `literal` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node` to have an open position');
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(context, 'expected `node`');
        // If we’re at a hard break, include the line ending in there.
        if (this.data.atHardBreak) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in context, 'expected `parent`');
            const tail = context.children[context.children.length - 1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected tail to have a starting position');
            tail.position.end = point(token.end);
            this.data.atHardBreak = undefined;
            return;
        }
        if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithardbreak() {
        this.data.atHardBreak = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'inlineCode', 'expected inline code on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image', 'expected image on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected ancestor on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'image' || ancestor.type === 'link', 'expected image or link on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$string$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString"])(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(string).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment.type === 'fragment', 'expected fragment on stack');
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        // Assume a reference.
        this.data.inReference = true;
        if (node.type === 'link') {
            /** @type {Array<PhrasingContent>} */ const children = fragment.children;
            node.children = children;
        } else {
            node.alt = value;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresource() {
        this.data.inReference = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterreference() {
        this.data.referenceType = 'collapsed';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image reference or link reference on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
        this.data.referenceType = 'full';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencemarker(token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.type === 'characterReferenceMarkerNumeric' || token.type === 'characterReferenceMarkerHexadecimal');
        this.data.characterReferenceType = token.type;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = this.data.characterReferenceType;
        /** @type {string} */ let value;
        if (type) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])(data, type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].characterReferenceMarkerNumeric ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal);
            this.data.characterReferenceType = undefined;
        } else {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result !== false, 'expected reference to decode');
            value = result;
        }
        const tail = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected `node.value`');
        tail.value += value;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreference(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node.position`');
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = this.sliceSerialize(token);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = 'mailto:' + this.sliceSerialize(token);
    }
    //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: 'blockquote',
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: 'code',
            lang: null,
            meta: null,
            value: ''
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: 'inlineCode',
            value: ''
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: 'definition',
            identifier: '',
            label: null,
            title: null,
            url: ''
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: 'emphasis',
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        return {
            type: 'heading',
            // @ts-expect-error `depth` will be set later.
            depth: 0,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: 'break'
        };
    }
    /** @returns {Html} */ function html() {
        return {
            type: 'html',
            value: ''
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: 'image',
            title: null,
            url: '',
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: 'link',
            title: null,
            url: '',
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: 'list',
            ordered: token.type === 'listOrdered',
            start: null,
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: 'listItem',
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: 'paragraph',
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: 'strong',
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: 'text',
            value: ''
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: 'thematicBreak'
        };
    }
}
/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */ function point(d) {
    return {
        line: d.line,
        column: d.column,
        offset: d.offset
    };
}
/**
 * @param {Config} combined
 * @param {Array<Array<Extension> | Extension>} extensions
 * @returns {undefined}
 */ function configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) {
            configure(combined, value);
        } else {
            extension(combined, value);
        }
    }
}
/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {undefined}
 */ function extension(combined, extension) {
    /** @type {keyof Extension} */ let key;
    for(key in extension){
        if (own.call(extension, key)) {
            switch(key){
                case 'canContainEols':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'transforms':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'enter':
                case 'exit':
                    {
                        const right = extension[key];
                        if (right) {
                            Object.assign(combined[key], right);
                        }
                        break;
                    }
            }
        }
    }
}
/** @type {OnEnterError} */ function defaultOnError(left, right) {
    if (left) {
        throw new Error('Cannot close `' + left.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: left.start,
            end: left.end
        }) + '): a different token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is open');
    } else {
        throw new Error('Cannot close document, a token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is still open');
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} FromMarkdownOptions
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */ /**
 * @typedef {Omit<FromMarkdownOptions, 'extensions' | 'mdastExtensions'>} Options
 */ __turbopack_context__.s([
    "default",
    ()=>remarkParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$from$2d$markdown$40$2$2e$0$2e$2$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)");
;
function remarkParse(options) {
    /** @type {Processor} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    self.parser = parser;
    /**
   * @type {Parser}
   */ function parser(doc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$from$2d$markdown$40$2$2e$0$2e$2$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMarkdown"])(doc, {
            ...self.data('settings'),
            ...options,
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: self.data('micromarkExtensions') || [],
            mdastExtensions: self.data('fromMarkdownExtensions') || []
        });
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARRAY",
    ()=>ARRAY,
    "BIGINT",
    ()=>BIGINT,
    "DATE",
    ()=>DATE,
    "ERROR",
    ()=>ERROR,
    "MAP",
    ()=>MAP,
    "OBJECT",
    ()=>OBJECT,
    "PRIMITIVE",
    ()=>PRIMITIVE,
    "REGEXP",
    ()=>REGEXP,
    "SET",
    ()=>SET,
    "VOID",
    ()=>VOID
]);
const VOID = -1;
const PRIMITIVE = 0;
const ARRAY = 1;
const OBJECT = 2;
const DATE = 3;
const REGEXP = 4;
const MAP = 5;
const SET = 6;
const ERROR = 7;
const BIGINT = 8; // export const SYMBOL = 9;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const env = typeof self === 'object' ? self : globalThis;
const deserializer = ($, _)=>{
    const as = (out, index)=>{
        $.set(index, out);
        return out;
    };
    const unpair = (index)=>{
        if ($.has(index)) return $.get(index);
        const [type, value] = _[index];
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]:
                return as(value, index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    const arr = as([], index);
                    for (const index of value)arr.push(unpair(index));
                    return arr;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    const object = as({}, index);
                    for (const [key, index] of value)object[unpair(key)] = unpair(index);
                    return object;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as(new Date(value), index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as(new RegExp(source, flags), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const map = as(new Map, index);
                    for (const [key, index] of value)map.set(unpair(key), unpair(index));
                    return map;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const set = as(new Set, index);
                    for (const index of value)set.add(unpair(index));
                    return set;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"]:
                {
                    const { name, message } = value;
                    return as(new env[name](message), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"]:
                return as(BigInt(value), index);
            case 'BigInt':
                return as(Object(BigInt(value)), index);
            case 'ArrayBuffer':
                return as(new Uint8Array(value).buffer, value);
            case 'DataView':
                {
                    const { buffer } = new Uint8Array(value);
                    return as(new DataView(buffer), value);
                }
        }
        return as(new env[type](value), index);
    };
    return unpair;
};
const deserialize = (serialized)=>deserializer(new Map, serialized)(0);
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const EMPTY = '';
const { toString } = {};
const { keys } = Object;
const typeOf = (value)=>{
    const type = typeof value;
    if (type !== 'object' || !value) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"],
        type
    ];
    const asString = toString.call(value).slice(8, -1);
    switch(asString){
        case 'Array':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                EMPTY
            ];
        case 'Object':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
                EMPTY
            ];
        case 'Date':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"],
                EMPTY
            ];
        case 'RegExp':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"],
                EMPTY
            ];
        case 'Map':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"],
                EMPTY
            ];
        case 'Set':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"],
                EMPTY
            ];
        case 'DataView':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                asString
            ];
    }
    if (asString.includes('Array')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
        asString
    ];
    if (asString.includes('Error')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"],
        asString
    ];
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
        asString
    ];
};
const shouldSkip = ([TYPE, type])=>TYPE === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"] && (type === 'function' || type === 'symbol');
const serializer = (strict, json, $, _)=>{
    const as = (out, value)=>{
        const index = _.push(out) - 1;
        $.set(value, index);
        return index;
    };
    const pair = (value)=>{
        if ($.has(value)) return $.get(value);
        let [TYPE, type] = typeOf(value);
        switch(TYPE){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
                {
                    let entry = value;
                    switch(type){
                        case 'bigint':
                            TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"];
                            entry = value.toString();
                            break;
                        case 'function':
                        case 'symbol':
                            if (strict) throw new TypeError('unable to serialize ' + type);
                            entry = null;
                            break;
                        case 'undefined':
                            return as([
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]
                            ], value);
                    }
                    return as([
                        TYPE,
                        entry
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    if (type) {
                        let spread = value;
                        if (type === 'DataView') {
                            spread = new Uint8Array(value.buffer);
                        } else if (type === 'ArrayBuffer') {
                            spread = new Uint8Array(value);
                        }
                        return as([
                            type,
                            [
                                ...spread
                            ]
                        ], value);
                    }
                    const arr = [];
                    const index = as([
                        TYPE,
                        arr
                    ], value);
                    for (const entry of value)arr.push(pair(entry));
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    if (type) {
                        switch(type){
                            case 'BigInt':
                                return as([
                                    type,
                                    value.toString()
                                ], value);
                            case 'Boolean':
                            case 'Number':
                            case 'String':
                                return as([
                                    type,
                                    value.valueOf()
                                ], value);
                        }
                    }
                    if (json && 'toJSON' in value) return pair(value.toJSON());
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const key of keys(value)){
                        if (strict || !shouldSkip(typeOf(value[key]))) entries.push([
                            pair(key),
                            pair(value[key])
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as([
                    TYPE,
                    value.toISOString()
                ], value);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as([
                        TYPE,
                        {
                            source,
                            flags
                        }
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const [key, entry] of value){
                        if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([
                            pair(key),
                            pair(entry)
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const entry of value){
                        if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
                    }
                    return index;
                }
        }
        const { message } = value;
        return as([
            TYPE,
            {
                name: type,
                message
            }
        ], value);
    };
    return pair;
};
const serialize = (value, { json, lossy } = {})=>{
    const _ = [];
    return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = typeof structuredClone === "function" ? /* c8 ignore start */ (any, options)=>options && ('json' in options || 'lossy' in options) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options)) : structuredClone(any) : (any, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options));
;
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-encode@2.0.1/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode
]);
const characterReferences = {
    '"': 'quot',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
};
function encode(value) {
    return value.replace(/["&<>]/g, replace);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} value
   *   Value to replace.
   * @returns {string}
   *   Encoded value.
   */ function replace(value) {
        return '&' + characterReferences[value] + ';';
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeUri",
    ()=>normalizeUri,
    "sanitizeUri",
    ()=>sanitizeUri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$encode$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-encode@2.0.1/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
;
;
function sanitizeUri(url, protocol) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$encode$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(normalizeUri(url || ''));
    if (!protocol) {
        return value;
    }
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
function normalizeUri(value) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = '';
        // A correct percent encoded value.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].percentSign && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 1)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 2))) {
            skip = 2;
        } else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
                replace = String.fromCharCode(code);
            }
        } else if (code > 55_295 && code < 57_344) {
            const next = value.charCodeAt(index + 1);
            // A correct surrogate pair.
            if (code < 56_320 && next > 56_319 && next < 57_344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else {
                replace = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
            }
        } else {
            replace = String.fromCharCode(code);
        }
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = '';
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join('') + value.slice(start);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementContent, Element} from 'hast'
 * @import {State} from './state.js'
 */ /**
 * @callback FootnoteBackContentTemplate
 *   Generate content for the backreference dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent> | ElementContent | string}
 *   Content for the backreference when linking back from definitions to their
 *   reference.
 *
 * @callback FootnoteBackLabelTemplate
 *   Generate a back label dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Back label to use when linking back from definitions to their reference.
 */ __turbopack_context__.s([
    "defaultFootnoteBackContent",
    ()=>defaultFootnoteBackContent,
    "defaultFootnoteBackLabel",
    ()=>defaultFootnoteBackLabel,
    "footer",
    ()=>footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
;
function defaultFootnoteBackContent(_, rereferenceIndex) {
    /** @type {Array<ElementContent>} */ const result = [
        {
            type: 'text',
            value: '↩'
        }
    ];
    if (rereferenceIndex > 1) {
        result.push({
            type: 'element',
            tagName: 'sup',
            properties: {},
            children: [
                {
                    type: 'text',
                    value: String(rereferenceIndex)
                }
            ]
        });
    }
    return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
    return 'Back to reference ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '');
}
function footer(state) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
    const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
    const footnoteLabel = state.options.footnoteLabel || 'Footnotes';
    const footnoteLabelTagName = state.options.footnoteLabelTagName || 'h2';
    const footnoteLabelProperties = state.options.footnoteLabelProperties || {
        className: [
            'sr-only'
        ]
    };
    /** @type {Array<ElementContent>} */ const listItems = [];
    let referenceIndex = -1;
    while(++referenceIndex < state.footnoteOrder.length){
        const definition = state.footnoteById.get(state.footnoteOrder[referenceIndex]);
        if (!definition) {
            continue;
        }
        const content = state.all(definition);
        const id = String(definition.identifier).toUpperCase();
        const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
        let rereferenceIndex = 0;
        /** @type {Array<ElementContent>} */ const backReferences = [];
        const counts = state.footnoteCounts.get(id);
        // eslint-disable-next-line no-unmodified-loop-condition
        while(counts !== undefined && ++rereferenceIndex <= counts){
            if (backReferences.length > 0) {
                backReferences.push({
                    type: 'text',
                    value: ' '
                });
            }
            let children = typeof footnoteBackContent === 'string' ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
            if (typeof children === 'string') {
                children = {
                    type: 'text',
                    value: children
                };
            }
            backReferences.push({
                type: 'element',
                tagName: 'a',
                properties: {
                    href: '#' + clobberPrefix + 'fnref-' + safeId + (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
                    dataFootnoteBackref: '',
                    ariaLabel: typeof footnoteBackLabel === 'string' ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
                    className: [
                        'data-footnote-backref'
                    ]
                },
                children: Array.isArray(children) ? children : [
                    children
                ]
            });
        }
        const tail = content[content.length - 1];
        if (tail && tail.type === 'element' && tail.tagName === 'p') {
            const tailTail = tail.children[tail.children.length - 1];
            if (tailTail && tailTail.type === 'text') {
                tailTail.value += ' ';
            } else {
                tail.children.push({
                    type: 'text',
                    value: ' '
                });
            }
            tail.children.push(...backReferences);
        } else {
            content.push(...backReferences);
        }
        /** @type {Element} */ const listItem = {
            type: 'element',
            tagName: 'li',
            properties: {
                id: clobberPrefix + 'fn-' + safeId
            },
            children: state.wrap(content, true)
        };
        state.patch(definition, listItem);
        listItems.push(listItem);
    }
    if (listItems.length === 0) {
        return;
    }
    return {
        type: 'element',
        tagName: 'section',
        properties: {
            dataFootnotes: true,
            className: [
                'footnotes'
            ]
        },
        children: [
            {
                type: 'element',
                tagName: footnoteLabelTagName,
                properties: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(footnoteLabelProperties),
                    id: 'footnote-label'
                },
                children: [
                    {
                        type: 'text',
                        value: footnoteLabel
                    }
                ]
            },
            {
                type: 'text',
                value: '\n'
            },
            {
                type: 'element',
                tagName: 'ol',
                properties: {},
                children: state.wrap(listItems, true)
            },
            {
                type: 'text',
                value: '\n'
            }
        ]
    };
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Blockquote} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `blockquote` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Blockquote} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "blockquote",
    ()=>blockquote
]);
function blockquote(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: state.wrap(state.all(node), true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Text} from 'hast'
 * @import {Break} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `break` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Break} node
 *   mdast node.
 * @returns {Array<Element | Text>}
 *   hast element content.
 */ __turbopack_context__.s([
    "hardBreak",
    ()=>hardBreak
]);
function hardBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'br',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return [
        state.applyData(node, result),
        {
            type: 'text',
            value: '\n'
        }
    ];
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Properties} from 'hast'
 * @import {Code} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `code` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Code} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "code",
    ()=>code
]);
function code(state, node) {
    const value = node.value ? node.value + '\n' : '';
    /** @type {Properties} */ const properties = {};
    // Someone can write `js&#x20;python&#x9;ruby`.
    const language = node.lang ? node.lang.split(/\s+/) : [];
    // GH/CM still drop the non-first languages.
    if (language.length > 0) {
        properties.className = [
            'language-' + language[0]
        ];
    }
    // Create `<code>`.
    /** @type {Element} */ let result = {
        type: 'element',
        tagName: 'code',
        properties,
        children: [
            {
                type: 'text',
                value
            }
        ]
    };
    if (node.meta) {
        result.data = {
            meta: node.meta
        };
    }
    state.patch(node, result);
    result = state.applyData(node, result);
    // Create `<pre>`.
    result = {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [
            result
        ]
    };
    state.patch(node, result);
    return result;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Delete} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `delete` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Delete} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "strikethrough",
    ()=>strikethrough
]);
function strikethrough(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'del',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Emphasis} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `emphasis` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Emphasis} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "emphasis",
    ()=>emphasis
]);
function emphasis(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'em',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {FootnoteReference} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "footnoteReference",
    ()=>footnoteReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function footnoteReference(state, node) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const id = String(node.identifier).toUpperCase();
    const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
    const index = state.footnoteOrder.indexOf(id);
    /** @type {number} */ let counter;
    let reuseCounter = state.footnoteCounts.get(id);
    if (reuseCounter === undefined) {
        reuseCounter = 0;
        state.footnoteOrder.push(id);
        counter = state.footnoteOrder.length;
    } else {
        counter = index + 1;
    }
    reuseCounter += 1;
    state.footnoteCounts.set(id, reuseCounter);
    /** @type {Element} */ const link = {
        type: 'element',
        tagName: 'a',
        properties: {
            href: '#' + clobberPrefix + 'fn-' + safeId,
            id: clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : ''),
            dataFootnoteRef: true,
            ariaDescribedBy: [
                'footnote-label'
            ]
        },
        children: [
            {
                type: 'text',
                value: String(counter)
            }
        ]
    };
    state.patch(node, link);
    /** @type {Element} */ const sup = {
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [
            link
        ]
    };
    state.patch(node, sup);
    return state.applyData(node, sup);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Heading} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `heading` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Heading} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "heading",
    ()=>heading
]);
function heading(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'h' + node.depth,
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Html} from 'mdast'
 * @import {State} from '../state.js'
 * @import {Raw} from '../../index.js'
 */ /**
 * Turn an mdast `html` node into hast (`raw` node in dangerous mode, otherwise
 * nothing).
 *
 * @param {State} state
 *   Info passed around.
 * @param {Html} node
 *   mdast node.
 * @returns {Element | Raw | undefined}
 *   hast node.
 */ __turbopack_context__.s([
    "html",
    ()=>html
]);
function html(state, node) {
    if (state.options.allowDangerousHtml) {
        /** @type {Raw} */ const result = {
            type: 'raw',
            value: node.value
        };
        state.patch(node, result);
        return state.applyData(node, result);
    }
    return undefined;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementContent} from 'hast'
 * @import {Reference, Nodes} from 'mdast'
 * @import {State} from './state.js'
 */ /**
 * Return the content of a reference without definition as plain text.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Extract<Nodes, Reference>} node
 *   Reference node (image, link).
 * @returns {Array<ElementContent>}
 *   hast content.
 */ __turbopack_context__.s([
    "revert",
    ()=>revert
]);
function revert(state, node) {
    const subtype = node.referenceType;
    let suffix = ']';
    if (subtype === 'collapsed') {
        suffix += '[]';
    } else if (subtype === 'full') {
        suffix += '[' + (node.label || node.identifier) + ']';
    }
    if (node.type === 'imageReference') {
        return [
            {
                type: 'text',
                value: '![' + node.alt + suffix
            }
        ];
    }
    const contents = state.all(node);
    const head = contents[0];
    if (head && head.type === 'text') {
        head.value = '[' + head.value;
    } else {
        contents.unshift({
            type: 'text',
            value: '['
        });
    }
    const tail = contents[contents.length - 1];
    if (tail && tail.type === 'text') {
        tail.value += suffix;
    } else {
        contents.push({
            type: 'text',
            value: suffix
        });
    }
    return contents;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {ImageReference} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "imageReference",
    ()=>imageReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function imageReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || ''),
        alt: node.alt
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Properties} from 'hast'
 * @import {Image} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "image",
    ()=>image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function image(state, node) {
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.alt !== null && node.alt !== undefined) {
        properties.alt = node.alt;
    }
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Text} from 'hast'
 * @import {InlineCode} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `inlineCode` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {InlineCode} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "inlineCode",
    ()=>inlineCode
]);
function inlineCode(state, node) {
    /** @type {Text} */ const text = {
        type: 'text',
        value: node.value.replace(/\r?\n|\r/g, ' ')
    };
    state.patch(node, text);
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [
            text
        ]
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {LinkReference} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "linkReference",
    ()=>linkReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function linkReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || '')
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Properties} from 'hast'
 * @import {Link} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "link",
    ()=>link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function link(state, node) {
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {ListItem, Parents} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `listItem` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ListItem} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "listItem",
    ()=>listItem
]);
function listItem(state, node, parent) {
    const results = state.all(node);
    const loose = parent ? listLoose(parent) : listItemLoose(node);
    /** @type {Properties} */ const properties = {};
    /** @type {Array<ElementContent>} */ const children = [];
    if (typeof node.checked === 'boolean') {
        const head = results[0];
        /** @type {Element} */ let paragraph;
        if (head && head.type === 'element' && head.tagName === 'p') {
            paragraph = head;
        } else {
            paragraph = {
                type: 'element',
                tagName: 'p',
                properties: {},
                children: []
            };
            results.unshift(paragraph);
        }
        if (paragraph.children.length > 0) {
            paragraph.children.unshift({
                type: 'text',
                value: ' '
            });
        }
        paragraph.children.unshift({
            type: 'element',
            tagName: 'input',
            properties: {
                type: 'checkbox',
                checked: node.checked,
                disabled: true
            },
            children: []
        });
        // According to github-markdown-css, this class hides bullet.
        // See: <https://github.com/sindresorhus/github-markdown-css>.
        properties.className = [
            'task-list-item'
        ];
    }
    let index = -1;
    while(++index < results.length){
        const child = results[index];
        // Add eols before nodes, except if this is a loose, first paragraph.
        if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
            children.push({
                type: 'text',
                value: '\n'
            });
        }
        if (child.type === 'element' && child.tagName === 'p' && !loose) {
            children.push(...child.children);
        } else {
            children.push(child);
        }
    }
    const tail = results[results.length - 1];
    // Add a final eol.
    if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
        children.push({
            type: 'text',
            value: '\n'
        });
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'li',
        properties,
        children
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
/**
 * @param {Parents} node
 * @return {Boolean}
 */ function listLoose(node) {
    let loose = false;
    if (node.type === 'list') {
        loose = node.spread || false;
        const children = node.children;
        let index = -1;
        while(!loose && ++index < children.length){
            loose = listItemLoose(children[index]);
        }
    }
    return loose;
}
/**
 * @param {ListItem} node
 * @return {Boolean}
 */ function listItemLoose(node) {
    const spread = node.spread;
    return spread === null || spread === undefined ? node.children.length > 1 : spread;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Properties} from 'hast'
 * @import {List} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `list` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {List} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "list",
    ()=>list
]);
function list(state, node) {
    /** @type {Properties} */ const properties = {};
    const results = state.all(node);
    let index = -1;
    if (typeof node.start === 'number' && node.start !== 1) {
        properties.start = node.start;
    }
    // Like GitHub, add a class for custom styling.
    while(++index < results.length){
        const child = results[index];
        if (child.type === 'element' && child.tagName === 'li' && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes('task-list-item')) {
            properties.className = [
                'contains-task-list'
            ];
            break;
        }
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: node.ordered ? 'ol' : 'ul',
        properties,
        children: state.wrap(results, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Paragraph} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `paragraph` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Paragraph} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "paragraph",
    ()=>paragraph
]);
function paragraph(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents as HastParents, Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `root` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastRoot} node
 *   mdast node.
 * @returns {HastParents}
 *   hast node.
 */ __turbopack_context__.s([
    "root",
    ()=>root
]);
function root(state, node) {
    /** @type {HastRoot} */ const result = {
        type: 'root',
        children: state.wrap(state.all(node))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {Strong} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `strong` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Strong} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "strong",
    ()=>strong
]);
function strong(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'strong',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Table} from 'mdast'
 * @import {Element} from 'hast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "table",
    ()=>table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
;
function table(state, node) {
    const rows = state.all(node);
    const firstRow = rows.shift();
    /** @type {Array<Element>} */ const tableContent = [];
    if (firstRow) {
        /** @type {Element} */ const head = {
            type: 'element',
            tagName: 'thead',
            properties: {},
            children: state.wrap([
                firstRow
            ], true)
        };
        state.patch(node.children[0], head);
        tableContent.push(head);
    }
    if (rows.length > 0) {
        /** @type {Element} */ const body = {
            type: 'element',
            tagName: 'tbody',
            properties: {},
            children: state.wrap(rows, true)
        };
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node.children[1]);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointEnd"])(node.children[node.children.length - 1]);
        if (start && end) body.position = {
            start,
            end
        };
        tableContent.push(body);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'table',
        properties: {},
        children: state.wrap(tableContent, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, ElementContent, Properties} from 'hast'
 * @import {Parents, TableRow} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `tableRow` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableRow} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "tableRow",
    ()=>tableRow
]);
function tableRow(state, node, parent) {
    const siblings = parent ? parent.children : undefined;
    // Generate a body row when without parent.
    const rowIndex = siblings ? siblings.indexOf(node) : 1;
    const tagName = rowIndex === 0 ? 'th' : 'td';
    // To do: option to use `style`?
    const align = parent && parent.type === 'table' ? parent.align : undefined;
    const length = align ? align.length : node.children.length;
    let cellIndex = -1;
    /** @type {Array<ElementContent>} */ const cells = [];
    while(++cellIndex < length){
        // Note: can also be undefined.
        const cell = node.children[cellIndex];
        /** @type {Properties} */ const properties = {};
        const alignValue = align ? align[cellIndex] : undefined;
        if (alignValue) {
            properties.align = alignValue;
        }
        /** @type {Element} */ let result = {
            type: 'element',
            tagName,
            properties,
            children: []
        };
        if (cell) {
            result.children = state.all(cell);
            state.patch(cell, result);
            result = state.applyData(cell, result);
        }
        cells.push(result);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'tr',
        properties: {},
        children: state.wrap(cells, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {TableCell} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `tableCell` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableCell} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "tableCell",
    ()=>tableCell
]);
function tableCell(state, node) {
    // Note: this function is normally not called: see `table-row` for how rows
    // and their cells are compiled.
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'td',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element as HastElement, Text as HastText} from 'hast'
 * @import {Text as MdastText} from 'mdast'
 * @import {State} from '../state.js'
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$trim$2d$lines$40$3$2e$0$2e$1$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js [app-ssr] (ecmascript)");
;
function text(state, node) {
    /** @type {HastText} */ const result = {
        type: 'text',
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$trim$2d$lines$40$3$2e$0$2e$1$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimLines"])(String(node.value))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element} from 'hast'
 * @import {ThematicBreak} from 'mdast'
 * @import {State} from '../state.js'
 */ /**
 * Turn an mdast `thematicBreak` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ThematicBreak} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */ __turbopack_context__.s([
    "thematicBreak",
    ()=>thematicBreak
]);
function thematicBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'hr',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Handlers} from '../state.js'
 */ __turbopack_context__.s([
    "handlers",
    ()=>handlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const handlers = {
    blockquote: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockquote"],
    break: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hardBreak"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code"],
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strikethrough"],
    emphasis: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emphasis"],
    footnoteReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footnoteReference"],
    heading: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heading"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    imageReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageReference"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["image"],
    inlineCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineCode"],
    linkReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linkReference"],
    link: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["link"],
    listItem: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listItem"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paragraph"],
    // @ts-expect-error: root is different, but hard to type.
    root: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["root"],
    strong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strong"],
    table: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["table"],
    tableCell: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableCell"],
    tableRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableRow"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"],
    thematicBreak: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"],
    toml: ignore,
    yaml: ignore,
    definition: ignore,
    footnoteDefinition: ignore
};
// Return nothing for nodes that are ignored.
function ignore() {
    return undefined;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   ElementContent as HastElementContent,
 *   Element as HastElement,
 *   Nodes as HastNodes,
 *   Properties as HastProperties,
 *   RootContent as HastRootContent,
 *   Text as HastText
 * } from 'hast'
 * @import {
 *   Definition as MdastDefinition,
 *   FootnoteDefinition as MdastFootnoteDefinition,
 *   Nodes as MdastNodes,
 *   Parents as MdastParents
 * } from 'mdast'
 * @import {VFile} from 'vfile'
 * @import {
 *   FootnoteBackContentTemplate,
 *   FootnoteBackLabelTemplate
 * } from './footer.js'
 */ /**
 * @callback Handler
 *   Handle a node.
 * @param {State} state
 *   Info passed around.
 * @param {any} node
 *   mdast node to handle.
 * @param {MdastParents | undefined} parent
 *   Parent of `node`.
 * @returns {Array<HastElementContent> | HastElementContent | undefined}
 *   hast node.
 *
 * @typedef {Partial<Record<MdastNodes['type'], Handler>>} Handlers
 *   Handle nodes.
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Whether to persist raw HTML in markdown in the hast tree (default:
 *   `false`).
 * @property {string | null | undefined} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` property on footnotes to prevent them from
 *   *clobbering* (default: `'user-content-'`).
 *
 *   Pass `''` for trusted markdown and when you are careful with
 *   polyfilling.
 *   You could pass a different prefix.
 *
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id="x"></p>
 *   <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
 *   ```
 *
 *   The above example shows that elements are made available by browsers, by
 *   their ID, on the `window` object.
 *   This is a security risk because you might be expecting some other variable
 *   at that place.
 *   It can also break polyfills.
 *   Using a prefix solves these problems.
 * @property {VFile | null | undefined} [file]
 *   Corresponding virtual file representing the input document (optional).
 * @property {FootnoteBackContentTemplate | string | null | undefined} [footnoteBackContent]
 *   Content of the backreference back to references (default: `defaultFootnoteBackContent`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackContent(_, rereferenceIndex) {
 *     const result = [{type: 'text', value: '↩'}]
 *
 *     if (rereferenceIndex > 1) {
 *       result.push({
 *         type: 'element',
 *         tagName: 'sup',
 *         properties: {},
 *         children: [{type: 'text', value: String(rereferenceIndex)}]
 *       })
 *     }
 *
 *     return result
 *   }
 *   ```
 *
 *   This content is used in the `a` element of each backreference (the `↩`
 *   links).
 * @property {FootnoteBackLabelTemplate | string | null | undefined} [footnoteBackLabel]
 *   Label to describe the backreference back to references (default:
 *   `defaultFootnoteBackLabel`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
 *    return (
 *      'Back to reference ' +
 *      (referenceIndex + 1) +
 *      (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
 *    )
 *   }
 *   ```
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is used in the `ariaLabel` property on each backreference
 *   (the `↩` links).
 *   It affects users of assistive technology.
 * @property {string | null | undefined} [footnoteLabel='Footnotes']
 *   Textual label to use for the footnotes section (default: `'Footnotes'`).
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {HastProperties | null | undefined} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label (default: `{className:
 *   ['sr-only']}`).
 *
 *   Change it to show the label and add other properties.
 *
 *   This label is typically hidden visually (assuming an `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass an empty string.
 *   You can also add different properties.
 *
 *   > **Note**: `id: 'footnote-label'` is always added, because footnote
 *   > calls use it with `aria-describedby` to provide an accessible label.
 * @property {string | null | undefined} [footnoteLabelTagName='h2']
 *   HTML tag name to use for the footnote label element (default: `'h2'`).
 *
 *   Change it to match your document structure.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {Handlers | null | undefined} [handlers]
 *   Extra handlers for nodes (optional).
 * @property {Array<MdastNodes['type']> | null | undefined} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast (note that
 *   the node itself is passed, but eventual children are transformed)
 *   (optional).
 * @property {Handler | null | undefined} [unknownHandler]
 *   Handler for all unknown nodes (optional).
 *
 * @typedef State
 *   Info passed around.
 * @property {(node: MdastNodes) => Array<HastElementContent>} all
 *   Transform the children of an mdast parent to hast.
 * @property {<Type extends HastNodes>(from: MdastNodes, to: Type) => HastElement | Type} applyData
 *   Honor the `data` of `from`, and generate an element instead of `node`.
 * @property {Map<string, MdastDefinition>} definitionById
 *   Definitions by their identifier.
 * @property {Map<string, MdastFootnoteDefinition>} footnoteById
 *   Footnote definitions by their identifier.
 * @property {Map<string, number>} footnoteCounts
 *   Counts for how often the same footnote was called.
 * @property {Array<string>} footnoteOrder
 *   Identifiers of order when footnote calls first appear in tree order.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {(node: MdastNodes, parent: MdastParents | undefined) => Array<HastElementContent> | HastElementContent | undefined} one
 *   Transform an mdast node to hast.
 * @property {Options} options
 *   Configuration.
 * @property {(from: MdastNodes, node: HastNodes) => undefined} patch
 *   Copy a node’s positional info.
 * @property {<Type extends HastRootContent>(nodes: Array<Type>, loose?: boolean | undefined) => Array<HastText | Type>} wrap
 *   Wrap `nodes` with line endings between each node, adds initial/final line endings when `loose`.
 */ __turbopack_context__.s([
    "createState",
    ()=>createState,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)");
;
;
;
;
const own = {}.hasOwnProperty;
/** @type {Options} */ const emptyOptions = {};
function createState(tree, options) {
    const settings = options || emptyOptions;
    /** @type {Map<string, MdastDefinition>} */ const definitionById = new Map();
    /** @type {Map<string, MdastFootnoteDefinition>} */ const footnoteById = new Map();
    /** @type {Map<string, number>} */ const footnoteCounts = new Map();
    /** @type {Handlers} */ // @ts-expect-error: the root handler returns a root.
    // Hard to type.
    const handlers = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlers"],
        ...settings.handlers
    };
    /** @type {State} */ const state = {
        all,
        applyData,
        definitionById,
        footnoteById,
        footnoteCounts,
        footnoteOrder: [],
        handlers,
        one,
        options: settings,
        patch,
        wrap
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, function(node) {
        if (node.type === 'definition' || node.type === 'footnoteDefinition') {
            const map = node.type === 'definition' ? definitionById : footnoteById;
            const id = String(node.identifier).toUpperCase();
            // Mimick CM behavior of link definitions.
            // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/9032189/lib/index.js#L20-L21>.
            if (!map.has(id)) {
                // @ts-expect-error: node type matches map.
                map.set(id, node);
            }
        }
    });
    return state;
    //TURBOPACK unreachable
    ;
    /**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | undefined} [parent]
   *   Parent of `node`.
   * @returns {Array<HastElementContent> | HastElementContent | undefined}
   *   Resulting hast node.
   */ function one(node, parent) {
        const type = node.type;
        const handle = state.handlers[type];
        if (own.call(state.handlers, type) && handle) {
            return handle(state, node, parent);
        }
        if (state.options.passThrough && state.options.passThrough.includes(type)) {
            if ('children' in node) {
                const { children, ...shallow } = node;
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(shallow);
                // @ts-expect-error: TS doesn’t understand…
                result.children = state.all(node);
                // @ts-expect-error: TS doesn’t understand…
                return result;
            }
            // @ts-expect-error: it’s custom.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(node);
        }
        const unknown = state.options.unknownHandler || defaultUnknownHandler;
        return unknown(state, node, parent);
    }
    /**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */ function all(parent) {
        /** @type {Array<HastElementContent>} */ const values = [];
        if ('children' in parent) {
            const nodes = parent.children;
            let index = -1;
            while(++index < nodes.length){
                const result = state.one(nodes[index], parent);
                // To do: see if we van clean this? Can we merge texts?
                if (result) {
                    if (index && nodes[index - 1].type === 'break') {
                        if (!Array.isArray(result) && result.type === 'text') {
                            result.value = trimMarkdownSpaceStart(result.value);
                        }
                        if (!Array.isArray(result) && result.type === 'element') {
                            const head = result.children[0];
                            if (head && head.type === 'text') {
                                head.value = trimMarkdownSpaceStart(head.value);
                            }
                        }
                    }
                    if (Array.isArray(result)) {
                        values.push(...result);
                    } else {
                        values.push(result);
                    }
                }
            }
        }
        return values;
    }
}
/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {undefined}
 *   Nothing.
 */ function patch(from, to) {
    if (from.position) to.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"])(from);
}
/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {HastElement | Type}
 *   Nothing.
 */ function applyData(from, to) {
    /** @type {HastElement | Type} */ let result = to;
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (from && from.data) {
        const hName = from.data.hName;
        const hChildren = from.data.hChildren;
        const hProperties = from.data.hProperties;
        if (typeof hName === 'string') {
            // Transforming the node resulted in an element with a different name
            // than wanted:
            if (result.type === 'element') {
                result.tagName = hName;
            } else {
                /** @type {Array<HastElementContent>} */ // @ts-expect-error: assume no doctypes in `root`.
                const children = 'children' in result ? result.children : [
                    result
                ];
                result = {
                    type: 'element',
                    tagName: hName,
                    properties: {},
                    children
                };
            }
        }
        if (result.type === 'element' && hProperties) {
            Object.assign(result.properties, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(hProperties));
        }
        if ('children' in result && result.children && hChildren !== null && hChildren !== undefined) {
            result.children = hChildren;
        }
    }
    return result;
}
/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastElement | HastText}
 *   Resulting hast node.
 */ function defaultUnknownHandler(state, node) {
    const data = node.data || {};
    /** @type {HastElement | HastText} */ const result = 'value' in node && !(own.call(data, 'hProperties') || own.call(data, 'hChildren')) ? {
        type: 'text',
        value: node.value
    } : {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
function wrap(nodes, loose) {
    /** @type {Array<HastText | Type>} */ const result = [];
    let index = -1;
    if (loose) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    while(++index < nodes.length){
        if (index) result.push({
            type: 'text',
            value: '\n'
        });
        result.push(nodes[index]);
    }
    if (loose && nodes.length > 0) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    return result;
}
/**
 * Trim spaces and tabs at the start of `value`.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Result.
 */ function trimMarkdownSpaceStart(value) {
    let index = 0;
    let code = value.charCodeAt(index);
    while(code === 9 || code === 32){
        index++;
        code = value.charCodeAt(index);
    }
    return value.slice(index);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes as HastNodes} from 'hast'
 * @import {Nodes as MdastNodes} from 'mdast'
 * @import {Options} from './state.js'
 */ __turbopack_context__.s([
    "toHast",
    ()=>toHast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)");
;
;
;
function toHast(tree, options) {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createState"])(tree, options);
    const node = state.one(tree, undefined);
    const foot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footer"])(state);
    /** @type {HastNodes} */ const result = Array.isArray(node) ? {
        type: 'root',
        children: node
    } : node || {
        type: 'root',
        children: []
    };
    if (foot) {
        // If there’s a footer, there were definitions, meaning block
        // content.
        // So `result` is a parent node.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in result);
        result.children.push({
            type: 'text',
            value: '\n'
        }, foot);
    }
    return result;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-is@6.0.1/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Parent} from 'unist'
 */ /**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */ /**
 * @callback Check
 *   Check that an arbitrary value is a node.
 * @param {unknown} this
 *   The given context.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 *
 * @typedef {Record<string, unknown> | Node} Props
 *   Object to check for equivalence.
 *
 *   Note: `Node` is included as it is common but is not indexable.
 *
 * @typedef {Array<Props | TestFunction | string> | ReadonlyArray<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary node.
 *
 * @callback TestFunction
 *   Check if a node passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | undefined | void}
 *   Whether this node passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param {unknown} node
 *   Thing to check, typically `Node`.
 * @param {Test} test
 *   A check for a specific node.
 * @param {number | null | undefined} index
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} parent
 *   The node’s parent.
 * @param {unknown} context
 *   Context object (`this`) to pass to `test` functions.
 * @returns {boolean}
 *   Whether `node` is a node and passes a test.
 */ __turbopack_context__.s([
    "convert",
    ()=>convert,
    "is",
    ()=>is
]);
const is = /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error('Expected positive finite index');
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error('Expected parent node');
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error('Expected both parent and index');
    }
    return looksLikeANode(node) ? check.call(context, node, index, parent) : false;
};
const convert = /**
     * @param {Test} [test]
     * @returns {Check}
     */ function(test) {
    if (test === null || test === undefined) {
        return ok;
    }
    if (typeof test === 'function') {
        return castFactory(test);
    }
    if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : // narrows to `Array`.
        propertiesFactory(test);
    }
    if (typeof test === 'string') {
        return typeFactory(test);
    }
    throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */ function anyFactory(tests) {
    /** @type {Array<Check>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return castFactory(any);
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {TestFunction}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].apply(this, parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */ function propertiesFactory(check) {
    const checkAsRecord = check;
    return castFactory(all);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        const nodeAsRecord = node;
        /** @type {string} */ let key;
        for(key in check){
            if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */ function typeFactory(check) {
    return castFactory(type);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */ function castFactory(testFunction) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {Check}
   */ function check(value, index, parent) {
        return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === 'number' ? index : undefined, parent || undefined));
    }
}
function ok() {
    return true;
}
/**
 * @param {unknown} value
 * @returns {value is Node}
 */ function looksLikeANode(value) {
    return value !== null && typeof value === 'object' && 'type' in value;
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {string} d
 * @returns {string}
 */ __turbopack_context__.s([
    "color",
    ()=>color
]);
function color(d) {
    return '\u001B[33m' + d + '\u001B[39m';
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node as UnistNode, Parent as UnistParent} from 'unist'
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ /**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends ReadonlyArray<infer T>
 *   ? MatchesOne<Value, T>
 *   : Check extends Array<infer T>
 *   ? MatchesOne<Value, T>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {'skip' | boolean} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<VisitedParents>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [VisitedParents=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Tree type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "CONTINUE",
    ()=>CONTINUE,
    "EXIT",
    ()=>EXIT,
    "SKIP",
    ()=>SKIP,
    "visitParents",
    ()=>visitParents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$is$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-is@6.0.1/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$2$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)");
;
;
/** @type {Readonly<ActionTuple>} */ const empty = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = 'skip';
function visitParents(tree, test, visitor, reverse) {
    /** @type {Test} */ let check;
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
    } else {
        // @ts-expect-error visitor given, so `test` isn’t a visitor.
        check = test;
    }
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$is$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert"])(check);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */ function factory(node, index, parents) {
        const value = node && typeof node === 'object' ? node : {};
        if (typeof value.type === 'string') {
            const name = // `hast`
            typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
            Object.defineProperty(visit, 'name', {
                value: 'node (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$2$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"])(node.type + (name ? '<' + name + '>' : '')) + ')'
            });
        }
        return visit;
        //TURBOPACK unreachable
        ;
        function visit() {
            /** @type {Readonly<ActionTuple>} */ let result = empty;
            /** @type {Readonly<ActionTuple>} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<UnistParent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
                // @ts-expect-error: `visitor` is now a visitor.
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            if ('children' in node && node.children) {
                const nodeAsParent = node;
                if (nodeAsParent.children && result[0] !== SKIP) {
                    offset = (reverse ? nodeAsParent.children.length : -1) + step;
                    grandparents = parents.concat(nodeAsParent);
                    while(offset > -1 && offset < nodeAsParent.children.length){
                        const child = nodeAsParent.children[offset];
                        subresult = factory(child, offset, grandparents)();
                        if (subresult[0] === EXIT) {
                            return subresult;
                        }
                        offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                    }
                }
            }
            return result;
        }
    }
}
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return [
            CONTINUE,
            value
        ];
    }
    return value === null || value === undefined ? empty : [
        value
    ];
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ // To do: use types from `unist-util-visit-parents` when it’s released.
/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends UnistNode ? number | undefined : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [Ancestor=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
 *   Build a typed `Visitor` function from a node and all possible parents.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Visited
 *   Node type.
 * @template {UnistParent} Ancestor
 *   Parent type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     Matches<Descendant, Check>,
 *     Extract<Descendant, UnistParent>
 *   >
 * )} BuildVisitorFromDescendants
 *   Build a typed `Visitor` function from a list of descendants and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Node type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "visit",
    ()=>visit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$2$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/unist-util-visit-parents@6.0.2/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)");
;
;
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    /** @type {boolean | null | undefined} */ let reverse;
    /** @type {Test} */ let test;
    /** @type {Visitor} */ let visitor;
    if (typeof testOrVisitor === 'function' && typeof visitorOrReverse !== 'function') {
        test = undefined;
        visitor = testOrVisitor;
        reverse = visitorOrReverse;
    } else {
        // @ts-expect-error: assume the overload with test was given.
        test = testOrVisitor;
        // @ts-expect-error: assume the overload with test was given.
        visitor = visitorOrReverse;
        reverse = maybeReverse;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$2$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visitParents"])(tree, test, overload, reverse);
    /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        const index = parent ? parent.children.indexOf(node) : undefined;
        return visitor(node, index, parent);
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trimLines",
    ()=>trimLines
]);
const tab = 9 /* `\t` */ ;
const space = 32 /* ` ` */ ;
function trimLines(value) {
    const source = String(value);
    const search = /\r?\n|\r/g;
    let match = search.exec(source);
    let last = 0;
    /** @type {Array<string>} */ const lines = [];
    while(match){
        lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
        last = match.index + match[0].length;
        match = search.exec(source);
    }
    lines.push(trimLine(source.slice(last), last > 0, false));
    return lines.join('');
}
/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */ function trimLine(value, start, end) {
    let startIndex = 0;
    let endIndex = value.length;
    if (start) {
        let code = value.codePointAt(startIndex);
        while(code === tab || code === space){
            startIndex++;
            code = value.codePointAt(startIndex);
        }
    }
    if (end) {
        let code = value.codePointAt(endIndex - 1);
        while(code === tab || code === space){
            endIndex--;
            code = value.codePointAt(endIndex - 1);
        }
    }
    return endIndex > startIndex ? value.slice(startIndex, endIndex) : '';
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {Options as ToHastOptions} from 'mdast-util-to-hast'
 * @import {Processor} from 'unified'
 * @import {VFile} from 'vfile'
 */ /**
 * @typedef {Omit<ToHastOptions, 'file'>} Options
 *
 * @callback TransformBridge
 *   Bridge-mode.
 *
 *   Runs the destination with the new hast tree.
 *   Discards result.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {Promise<undefined>}
 *   Nothing.
 *
 * @callback TransformMutate
 *  Mutate-mode.
 *
 *  Further transformers run on the hast tree.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {HastRoot}
 *   Tree (hast).
 */ __turbopack_context__.s([
    "default",
    ()=>remarkRehype
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)");
;
function remarkRehype(destination, options) {
    if (destination && 'run' in destination) {
        /**
     * @type {TransformBridge}
     */ return async function(tree, file) {
            // Cast because root in -> root out.
            const hastTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
                file,
                ...options
            });
            await destination.run(hastTree, file);
        };
    }
    /**
   * @type {TransformMutate}
   */ return function(tree, file) {
        // Cast because root in -> root out.
        // To do: in the future, disallow ` || options` fallback.
        // With `unified-engine`, `destination` can be `undefined` but
        // `options` will be the file set.
        // We should not pass that as `options`.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Research_Agent$2f$frontend$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$1$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
            file,
            ...destination || options
        });
    };
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */ __turbopack_context__.s([
    "bail",
    ()=>bail
]);
function bail(error) {
    if (error) {
        throw error;
    }
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }
    return toStr.call(arr) === '[object Array]';
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj){}
    return typeof key === 'undefined' || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === '__proto__') {
        defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
        });
    } else {
        target[options.name] = options.newValue;
    }
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
            return void 0;
        } else if (gOPD) {
            // In early versions of node, obj['__proto__'] is buggy when obj has
            // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
            return gOPD(obj, name).value;
        }
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for(name in options){
                src = getProperty(target, name);
                copy = getProperty(options, name);
                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        setProperty(target, {
                            name: name,
                            newValue: extend(deep, clone, copy)
                        });
                    // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        setProperty(target, {
                            name: name,
                            newValue: copy
                        });
                    }
                }
            }
        }
    }
    // Return the modified object
    return target;
};
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPlainObject
]);
function isPlainObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
}),
"[project]/Desktop/Research_Agent/frontend/node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// To do: remove `void`s
// To do: remove `null` from output of our APIs, allow it as user APIs.
/**
 * @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback
 *   Callback.
 *
 * @typedef {(...input: Array<any>) => any} Middleware
 *   Ware.
 *
 * @typedef Pipeline
 *   Pipeline.
 * @property {Run} run
 *   Run the pipeline.
 * @property {Use} use
 *   Add middleware.
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 *
 *   Calls `done` on completion with either an error or the output of the
 *   last middleware.
 *
 *   > 👉 **Note**: as the length of input defines whether async functions get a
 *   > `next` function,
 *   > it’s recommended to keep `input` at one value normally.

 *
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add middleware.
 */ /**
 * Create new middleware.
 *
 * @returns {Pipeline}
 *   Pipeline.
 */ __turbopack_context__.s([
    "trough",
    ()=>trough,
    "wrap",
    ()=>wrap
]);
function trough() {
    /** @type {Array<Middleware>} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run,
        use
    };
    return pipeline;
    //TURBOPACK unreachable
    ;
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== 'function') {
            throw new TypeError('Expected function as last argument, not ' + callback);
        }
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error | null | undefined} error
     * @param {Array<any>} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length){
                if (output[index] === null || output[index] === undefined) {
                    output[index] = values[index];
                }
            }
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) {
                wrap(fn, next)(...output);
            } else {
                callback(null, ...output);
            }
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== 'function') {
            throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
        }
        fns.push(middelware);
        return pipeline;
    }
}
function wrap(middleware, callback) {
    /** @type {boolean} */ let called;
    return wrapped;
    //TURBOPACK unreachable
    ;
    /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) {
            parameters.push(done);
        }
        try {
            result = middleware.apply(this, parameters);
        } catch (error) {
            const exception = error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) {
                throw exception;
            }
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result && result.then && typeof result.then === 'function') {
                result.then(then, done);
            } else if (result instanceof Error) {
                done(result);
            } else {
                then(result);
            }
        }
    }
    /**
   * Call `callback`, only once.
   *
   * @type {Callback}
   */ function done(error, ...output) {
        if (!called) {
            called = true;
