(() => {
  const initCollapsibleToc = () => {
    const tocNavs = document.querySelectorAll(
      '[data-md-component="toc"], .md-nav--secondary',
    );
    if (!tocNavs.length) return;

    tocNavs.forEach((tocNav) => {
      tocNav.querySelectorAll(".toc-toggle").forEach((btn) => btn.remove());
      tocNav
        .querySelectorAll(".toc-collapsible, .toc-open")
        .forEach((item) =>
          item.classList.remove("toc-collapsible", "toc-open"),
        );

      const list = tocNav.matches(".md-nav__list")
        ? tocNav
        : tocNav.querySelector(":scope > .md-nav__list");
      if (!list) return;

      const topItems = list.querySelectorAll(":scope > .md-nav__item");

      topItems.forEach((item) => {
        const subnav = item.querySelector(
          ":scope > nav.md-nav, :scope > ul.md-nav__list",
        );
        if (!subnav) return;

        item.classList.add("toc-collapsible");

        const link = item.querySelector(":scope > .md-nav__link");
        if (!link) return;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "toc-toggle";
        button.setAttribute("aria-label", "Toggle section");

        const setExpanded = (expanded) => {
          item.classList.toggle("toc-open", expanded);
          button.setAttribute("aria-expanded", expanded ? "true" : "false");
        };

        link.after(button);

        if (item.querySelector(".md-nav__link--active")) {
          setExpanded(true);
        } else {
          setExpanded(false);
        }

        button.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          setExpanded(!item.classList.contains("toc-open"));
        });
      });
    });
  };

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initCollapsibleToc);
  } else {
    document.addEventListener("DOMContentLoaded", initCollapsibleToc);
  }
})();
