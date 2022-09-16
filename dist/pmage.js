import { defineComponent as f, reactive as _, ref as m, onMounted as g, openBlock as v, createElementBlock as y, normalizeStyle as B, normalizeClass as h, createElementVNode as u, renderSlot as p } from "vue";
const S = /* @__PURE__ */ f({
  __name: "index",
  props: {
    placeholder: { default: "" },
    src: { default: "" },
    animation: { type: Boolean, default: !0 },
    onBeforeLoad: { default: null },
    blur: { default: 10 },
    scale: { default: 1.2 },
    time: { default: 0.5 },
    delay: { default: 0 }
  },
  emits: ["beforeLoad", "onload"],
  setup(s, { emit: t }) {
    const a = s, n = _({
      loaded: !1,
      style: `--blur: ${a.blur}px; --scale: ${a.scale}; --time: ${a.time}s;`
    }), o = m(), r = m(), d = m(), i = () => {
      const e = new Image();
      e.className = "_pmage-placeholder";
      const l = document.createElement("div");
      l.className = "_pmage-overlay-placeholder", e.onload = () => {
        o.value.insertBefore(e, r.value), o.value.insertBefore(l, r.value);
      }, e.src = a.placeholder || a.src;
    }, c = () => {
      const e = new Image();
      e.className += " _pmage-origin";
      const l = document.createElement("div");
      l.className = "_pmage-overlay-all", e.onload = () => {
        o.value.insertBefore(e, d.value), o.value.insertBefore(l, d.value), n.loaded = !0, t("onload");
      }, e.src = a.src;
    };
    return g(() => {
      i(), setTimeout(() => {
        if (!a.onBeforeLoad)
          return c();
        t("beforeLoad", () => c());
      }, a.delay);
    }), (e, l) => (v(), y("div", {
      ref_key: "_pmage",
      ref: o,
      style: B(n.style),
      class: h({ _pmage: !0, "_pmage-loaded": n.loaded, "_pmage-animation": a.animation })
    }, [
      u("div", {
        ref_key: "_pmageSlotDefault",
        ref: r,
        class: "_pmage-slot-default"
      }, [
        p(e.$slots, "default")
      ], 512),
      u("div", {
        ref_key: "_pmageSlotTop",
        ref: d,
        class: "_pmage-slot-top"
      }, [
        p(e.$slots, "top")
      ], 512)
    ], 6));
  }
});
const k = {
  install(s, t) {
    console.log(123, t), s.component("Pmage", S);
  }
};
export {
  S as Pmage,
  k as default
};
