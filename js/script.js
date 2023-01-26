// Setting copyright year
const copyrightYearElement = document.querySelector(".copyright-year");
copyrightYearElement.textContent = new Date().getFullYear();

//Mobile Navigation
const toggleMobileMenu = () => {
  const headerElement = document.querySelector(".header");
  headerElement.classList.toggle("nav-open");
};

//Close Mobile Navigation on click
const closeMobileMenu = (e) => {
  if (e.target.nodeName === "A") {
    const headerElement = document.querySelector(".header");
    if (headerElement.classList.contains("nav-open")) {
      headerElement.classList.remove("nav-open");
    }
  }
};
const mainNav = document.querySelector(".main-nav-list");
mainNav.addEventListener("click", closeMobileMenu);

// Sticky Navigation
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(document.querySelector(".section-hero"));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
