// Get the modal
var row_modal = document.getElementById("rowModal");

// Get the button that opens the modal
var row_btn = document.getElementById("rowDropdown");

// Get the <span> element that closes the modal


// When the user clicks on the button, open the modal
row_btn.onclick = function() {
  row_modal.style.display = "block";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == row_modal) {
    row_modal.style.display = "none";
  }
}