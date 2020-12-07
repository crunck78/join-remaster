window.onload = function () {
  console.log("Window Location: ", window.location);
  includeSidebar();
  joinAuth.onAuthStateChanged(function (user) {
    initSidebar(user);
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    
    }
  });
};