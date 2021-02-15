const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i=1; i<=5; i++) {
    const newImage = document.createElement('img');
    newImage.id = i;  // from Nate
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);

/* First pass (per instructions) added an event handler to each image in the thumbBar: 
    newImage.onclick = function() {
        // in HTML: <img class="displayed-img" src="images/pic1.jpg">
        // displayedImage.setAttribute("src") = 'images/pic'+i+'.jpg';
        console.log('newImage src: ' + newImage.src);
        displayedImage.src = newImage.src;
    }  
*/

/* Second pass, added event handler to thumbBar */
thumbBar.addEventListener('click', (event) => 
    displayedImage.src = 'images/pic'+event.target.id+'.jpg' );
}

/* Wiring up the Darken/Lighten button */
btn.setAttribute("class","light");
btn.addEventListener('click', darkLight);
function darkLight() {
    btnClass = btn.getAttribute("class");
    console.log(`btnClass="${btnClass}".`);
    if (btnClass ==='light') {
        btn.setAttribute("class","dark");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class","light");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

