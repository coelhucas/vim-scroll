(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/VimScroll.tsx
  var import_react = __require("react");
  var startedJAt = 0;
  var startedKAt = 0;
  var lastScroll = 0;
  var inCooldown = false;
  var VimScroll = ({ cooldown = 300 }) => {
    (0, import_react.useEffect)(() => {
      const onKeyPressed = (evt) => {
        if (evt.key === "j") {
          startedJAt = Date.now();
        }
        if (evt.key === "k") {
          startedKAt = Date.now();
        }
      };
      const onKeyDown = (evt) => {
        evt.preventDefault();
        if (inCooldown) {
          if (Date.now() - lastScroll > cooldown) {
            inCooldown = false;
          } else {
            return;
          }
        }
        if (evt.key === "j") {
          evt.stopPropagation();
          console.log("pico");
          window.scrollBy({ top: 100, behavior: "smooth" });
          lastScroll = Date.now();
          inCooldown = true;
        }
        if (evt.key === "j") {
          window.scrollBy({ top: -10, behavior: "smooth" });
          lastScroll = Date.now();
          inCooldown = true;
        }
      };
      const onKeyUp = (evt) => {
      };
      addEventListener("keypress", onKeyPressed);
      addEventListener("keydown", onKeyDown);
      addEventListener("keyup", onKeyUp);
      return () => {
        removeEventListener("keypress", onKeyPressed);
        removeEventListener("keydown", onKeyDown);
        removeEventListener("keyup", onKeyUp);
      };
    }, []);
    return null;
  };
  var VimScroll_default = VimScroll;
})();
