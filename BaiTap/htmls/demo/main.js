const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let tabs = $$(".tab-item");
let tabContent = $$(".tab-pane");
let tabActive = $(".tab-item.active");
let line = $(".tabs .line");
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab,index) => {
  tab.addEventListener("click", () => {
  tabs.forEach(tab => tab.classList.remove("active"));
  tab.classList.add("active");

  tabContent.forEach(tabContent => tabContent.classList.remove("active"));
  tabContent[index].classList.add("active");
  line.style.left = tab.offsetLeft + "px";
  line.style.width = tab.offsetWidth + "px";
  });
}) mj
