// $(document).ready(function () {

//       /* Disable Right Click */
//       $(document).on("contextmenu", function (e) {
//         e.preventDefault();
//       });

//       /* Disable Key Shortcuts */
//       $(document).keydown(function (e) {

//         // Ctrl + Shift + I
//         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//           return false;
//         }

//         // Ctrl + U
//         if (e.ctrlKey && e.keyCode == 85) {
//           return false;
//         }

//         // Ctrl + P (Print)
//         if (e.ctrlKey && e.keyCode == 80) {
//           e.preventDefault();
//           return false;
//         }

//         // F12
//         if (e.keyCode == 123) {
//           return false;
//         }

//         // Print Screen (PrtSc)
//         if (e.keyCode == 44) {
//           alert("Print Screen is disabled!");
//           $("body").css("filter", "blur(20px)");
//           setTimeout(() => {
//             $("body").css("filter", "none");
//           }, 2000);
//           return false;
//         }
//       });
//     });
// // pop up modal js
//      document.querySelectorAll("[data-modal]").forEach(span => {
//       span.addEventListener("click", function () {
//         let modalId = this.getAttribute("data-modal");
//         let modal = new bootstrap.Modal(document.getElementById(modalId));
//         modal.show();
//       });
//     });

document.addEventListener("scroll", function () {
  const header = document.getElementById("siteHeader");

  if (window.scrollY > 50) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});