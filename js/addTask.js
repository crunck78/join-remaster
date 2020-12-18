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

function createTask(){
	let newTask = {
		title: document.getElementById('title').value,
		category : document.getElementById('category').value,
		description : document.getElementById('description').value,
		dueDate : document.getElementById('dueDate').value,
		importance : document.getElementById('importance').value,
		assignee : []
	};
}

async function openDialog(){
	await getUsers();
	document.getElementById('dialog-container').classList.remove('d-none');
}

function getUsers(){
	return joinDatabase.ref('/users')
	.once('value')
	.then( (snapshot) =>{
		const allUsers = snapshot.val();
	})
	.catch( (error) =>{
		console.error( error );
	});
}
