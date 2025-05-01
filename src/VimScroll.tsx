import { ReactNode, useEffect } from "react";

let startedJAt = 0;
let startedKAt = 0;
let lastScroll = 0;
let inCooldown = false;

const VimScroll = ({
  cooldown = 300,
  scrollBy = 150,
  ignoreOn = ["input", "textarea"],
}: {
  cooldown?: number;
  scrollBy?: number;
  ignoreOn?: string[];
}): ReactNode => {
  useEffect(() => {
    const onKeyPressed = (evt: KeyboardEvent) => {
      if (evt.key === "j") {
        startedJAt = Date.now();
      }

      if (evt.key === "k") {
        startedKAt = Date.now();
      }
    };

    const onKeyDown = (evt: KeyboardEvent) => {
      const activeElement = document.activeElement?.tagName.toLowerCase();

      if (activeElement && ignoreOn.includes(activeElement)) return;

      if (inCooldown) {
        if (Date.now() - lastScroll > cooldown) {
          inCooldown = false;
        } else {
          return;
        }
      }

      if (evt.key === "j") {
        evt.preventDefault();
        window.scrollBy({ top: scrollBy, behavior: "smooth" });
        lastScroll = Date.now();
        inCooldown = true;
      }

      if (evt.key === "k") {
        evt.preventDefault();
        window.scrollBy({ top: -scrollBy, behavior: "smooth" });
        lastScroll = Date.now();
        inCooldown = true;
      }
    };

    addEventListener("keypress", onKeyPressed);
    addEventListener("keydown", onKeyDown);

    return () => {
      removeEventListener("keypress", onKeyPressed);
      removeEventListener("keydown", onKeyDown);
    };
  }, [cooldown]);

  return null;
};

export default VimScroll;
