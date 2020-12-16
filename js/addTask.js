window.onload = function () {
  includeSidebar();
  joinAuth.onAuthStateChanged(function (user) {
    initSidebar(user);
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      window.location.href = '/';
    }
  });
};