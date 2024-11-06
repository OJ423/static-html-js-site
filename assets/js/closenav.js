  document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-items li a");
    console.log("Number of menu items:", menuItems); // Check if the correct number of menu items is selected
    menuItems.forEach(item => {
      item.addEventListener("click", function() {
        console.log("Menu item clicked:", item.textContent); // Check which menu item is clicked
        const checkbox = document.querySelector(".checkbox");
        console.log("Checkbox:", checkbox); // Check if the checkbox is found
        checkbox.checked = false; // Close the menu when a menu item is clicked
      });
    });
  });