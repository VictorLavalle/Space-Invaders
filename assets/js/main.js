
// Get the navbar links
const navLinks = document.querySelectorAll(".nav-link");

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default behavior of link
    e.preventDefault();

    // Remove "active" class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add "active" class to clicked nav link
    link.classList.add("active");

    // Get the target section id from the href attribute of the link
    const targetId = link.getAttribute("href").slice(1);

    // Get the target section element using the targetId
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Add scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Get the current scroll position of the window
  const scrollPosition = window.scrollY;

  // Loop through all sections
  document.querySelectorAll("section").forEach((section) => {
    // Get the offset position of the section from the top of the page
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    // Check if the section is currently visible on the screen
    if (
      scrollPosition >= sectionTop - 50 &&
      scrollPosition < sectionTop + sectionHeight - 50
    ) {
      // Remove "active" class from all nav links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Get the nav link that corresponds to the current section
      const targetLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      // Add "active" class to the corresponding nav link
      targetLink.classList.add("active");
    }
  });
});

