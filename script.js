const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(text);
      const oldText = button.textContent;
      button.textContent = "已复制";
      window.setTimeout(() => {
        button.textContent = oldText;
      }, 1400);
    } catch {
      button.textContent = "复制失败";
      window.setTimeout(() => {
        button.textContent = "复制";
      }, 1400);
    }
  });
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll("[data-tab]");
  const panels = tabs.querySelectorAll("[data-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-tab");

      buttons.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.getAttribute("data-panel") === name);
      });
    });
  });
});
