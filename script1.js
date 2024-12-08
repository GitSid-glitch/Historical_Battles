const paragraphElement = document.getElementById("typewriter");
const fullHTML = `
   <p>The <span class="highlight">Battle of Raichur</span> was fought between the <span class="highlight">Vijayanagara Empire</span> under its ruler <span class="highlight"> Krishnadevaraya </span>,and the <span class="highlight"> Sultanate of Bijapur</span> led by Sultan Ismail Adil Shah in 1520 in the town of Raichur, India. It  resulted in a decisive victory for Vijayanagara forces, and the Bijapur ruler was defeated and pushed across the river Krishna. </span></p>
    <p>The fort of Raichur was built by Kakatiya king Prataparudra in 1294, and passed on to the Vijayanagara Kingdom after the decline of Kakatiyas. In the aftermath , the victory at Raichur bolsstered the Vijayanagara Empire's dominance in southern India . It demonstrated Krishnadevaraya's military powers and reinforced the empire's strategic position. The empire's success also led to a period of prosperity, marked by architectural achievements and cultural advancements.</p>
    <p>The Battle of Raichur is remembered as one of the high points of Krishnadevaraya's reign and a key moment in the history of medieval India.</p>
                        
`; 

paragraphElement.innerHTML = ",   "; 
let index = 0;

function typeWriter() {
    if (index < fullHTML.length) {
        paragraphElement.innerHTML = fullHTML.slice(0, index + 1); // Append one character at a time
        index++;
        setTimeout(typeWriter, 10); // Adjust the speed here
    }
}

// Start the typing effect
typeWriter();

