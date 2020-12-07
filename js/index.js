window.onload = async function () {
  await includeSidebar();
  joinAuth.onAuthStateChanged(async function (user) {
    if (user) {
      // User is signed in.
      document.getElementById('loader').classList.add('d-none');
      if (isNewUser(user)) {
        await updateProfileImgURL("./assets/imgs/user.png")
        await writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      }
    } else {
      // No user is signed in.
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    }
    initSidebar(user);
  });
};

function isNewUser(user) {
  return user.metadata.creationTime == user.metadata.lastSignInTime;
}