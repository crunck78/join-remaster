// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(joinAuth);

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        var user = authResult.user;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        console.log("Auth result: ",authResult);

        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInSuccessUrl: 'addTask.html',
    signInOptions: [
       {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
      },
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

