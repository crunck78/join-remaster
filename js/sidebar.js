const CURRENT_HREF = window.location.href;
console.log("Current Href: ", CURRENT_HREF);
const CURRENT_PATH_NAME = window.location.pathname;
console.log("Current Path Name: ", CURRENT_PATH_NAME);


function includeSidebar() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-sidebar");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* add the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-sidebar");
                    //await includeSidebar();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function initSidebar(user) {
    if (user) {
        document.getElementById('page-links').classList.remove('d-none');
        document.getElementById('user-img').classList.remove('d-none');
        document.getElementById('user-img').setAttribute('src', user.photoURL);
        document.getElementById('btn-logout').classList.remove('d-none');
        document.getElementById('list-link').innerHTML = CURRENT_PATH_NAME == '/' ? "View List" : "List";
    } else {
        document.getElementById('page-links').classList.add('d-none');
        document.getElementById('user-img').classList.add('d-none');
        document.getElementById('btn-logout').classList.add('d-none');
    }
    if(CURRENT_PATH_NAME != '/') highlightCurrentLink();
}

function highlightCurrentLink() {
    let allLinks = document.getElementsByClassName('link');
    for (let link of allLinks) {
        if (link.href.includes(CURRENT_PATH_NAME)) {
            console.log(link.href);
            link.classList.add('link-active');
        }
    }
}

function logOut() {
    joinAuth.signOut();
}