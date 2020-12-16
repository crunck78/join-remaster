console.log("Window Location: ", window.location);

async function writeUserData(userId, name, email, imageUrl) {
  await joinDatabase.ref('users/' + userId).set({
    username: name,
    email: email,
    profilePicture: imageUrl
  });
}

async function updateProfileImgURL(url){
  var user = joinAuth.currentUser;
  await user.updateProfile({
    photoURL: url
  });
}