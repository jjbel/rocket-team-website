document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");
  
    // Observer for slide-in animation
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Unobserve once animated
        }
      });
    });
  
    // Apply observer to each team member
    teamMembers.forEach(member => {
      observer.observe(member);
    });
  });
  