import { defineComponent as _, reactive as g, ref as m, onMounted as y, openBlock as v, createElementBlock as N, normalizeStyle as b, normalizeClass as B, createElementVNode as i, renderSlot as p } from "vue";
const S = /* @__PURE__ */ _({
  __name: "index",
  props: {
    placeholder: { default: "" },
    src: { default: "" },
    animation: { type: Boolean, default: !0 },
    onBeforeLoad: { default: null },
    blur: { default: NaN },
    scale: { default: NaN },
    time: { default: NaN },
    delay: { default: 0 }
  },
  emits: ["beforeLoad", "onload"],
  setup(s, { emit: l }) {
    const e = s, t = g({
      loaded: !1,
      style: ""
    });
    (() => {
      let a = "";
      e.blur && (a = `--blur: ${e.blur}px;`), e.scale && (a += ` --scale: ${e.scale};`), e.time && (a += ` --time: ${e.time}s;`), t.style = a;
    })();
    const r = m(), c = m(), d = m(), f = () => {
      const a = new Image();
      a.className = "_pmage-placeholder";
      const o = document.createElement("div");
      o.className = "_pmage-overlay-placeholder", a.onload = () => {
        r.value.insertBefore(a, c.value), r.value.insertBefore(o, c.value);
      }, a.src = e.placeholder || e.src;
    }, u = () => {
      const a = new Image();
      a.className += " _pmage-origin";
      const o = document.createElement("div");
      o.className = "_pmage-overlay-all", a.onload = () => {
        r.value.insertBefore(a, d.value), r.value.insertBefore(o, d.value), t.loaded = !0, l("onload");
      }, a.src = e.src;
    };
    return y(() => {
      f(), setTimeout(() => {
        if (!e.onBeforeLoad)
          return u();
        l("beforeLoad", () => u());
      }, e.delay);
    }), (a, o) => (v(), N("div", {
      ref_key: "_pmage",
      ref: r,
      style: b(t.style),
      class: B({ _pmage: !0, "_pmage-loaded": t.loaded, "_pmage-animation": e.animation })
    }, [
      i("div", {
        ref_key: "_pmageSlotDefault",
        ref: c,
        class: "_pmage-slot-default"
      }, [
        p(a.$slots, "default")
      ], 512),
      i("div", {
        ref_key: "_pmageSlotTop",
        ref: d,
        class: "_pmage-slot-top"
      }, [
        p(a.$slots, "top")
      ], 512)
    ], 6));
  }
});
const $ = (s) => {
  const { blur: l, scale: e, time: t } = s;
  let n = "";
  return n = `--blur: ${l || 10}px;`, n += ` --scale: ${e || 1.2};`, n += ` --time: ${t || 0.5}s;`, n;
}, x = {
  install(s, l) {
    let e = "";
    e = $(l || {}), e = `<style type="text/css">._pmage{${e}}</style>`, document.head.insertAdjacentHTML("beforeend", e), s.component("Pmage", S);
  }
};
export {
  S as Pmage,
  x as default
};
