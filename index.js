class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navlist = document.querySelector(navList);
    this.nsvLinks = document.querySelectorAll(navLinks);
    this.active = "active";
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => console.log("Heey"));
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();
