const toggleButton = document.querySelector('.toggle-btn');

  // Check if the user's preference is set to dark mode
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }

  // Function to toggle between light and dark modes
  function toggleMode() {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('mode', 'light');
    } else {
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('mode', 'dark');
    }
  }

  // Toggle mode when the button is clicked
  toggleButton.addEventListener('click', toggleMode);


 // Check if the user is logged in (a basic example)
const isUserLoggedIn = false; // Set this to true if the user is logged in

document.addEventListener("DOMContentLoaded", function () {
    const takeTestButton = document.querySelector(".btn");

    if (isUserLoggedIn) {
        // User is logged in, allow them to take the test
        takeTestButton.addEventListener("click", function () {
            // Redirect the user to the test page
            window.location.href = "test.html";
        });
    } else {
        // User is not logged in, show a popup or message
        takeTestButton.addEventListener("click", function () {
            alert("Please log in to take the test.");
        });
    }
});
