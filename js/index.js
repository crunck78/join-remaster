window.onload = function(){
    console.log("Window Location PATHNAME: ", window.location.pathname);
    console.log("Window Location HREF: ", window.location.href);
    console.log("Window Location HOST: ", window.location.host);
    console.log("Window Location HASH: ", window.location.hash);
    console.log("Window Location: ", window.location);
    includeSidebar();
    joinAuth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.

        } else {
          // No user is signed in.

        }
      });
};