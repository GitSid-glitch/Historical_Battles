const paragraphElement = document.getElementById("typewriter");
const fullHTML = `
   <p>The <span class="highlight">Battle of Pratapgarh</span> took place on 10 November 1659, at <span class="highlight">Pratapgarh Fort </span> in Satara. The battle was fought between the Maratha forces led by <span class="highlight">Shivaji Raje Bhosale </span> and the Bijapur troops under <span class="highlight"> General Afzal Khan</span> .Shivaji held a commendable position in parts of Maval. The Adilshahi court wanted to curb his activities. Afzal Khan, a renowned general of Bijapur who had previously killed Shivaji's brother in a battle treacherously, was selected to lead an assault against Shivaji. He started from <span class="highlight">Bijapur</span> in June 1659. </p>
                    
    <p>The Marathas emerged victorious, making their first significant military triumph against a major regional power. In the aftermath of this victory  Shivaji captured 65 elephants, 4000 horses, 1200 camels and 10 Lakh rupees of cash and jewellery. Shivaji, at last,defeated  the Afzal Khan and also took the revenge of his brother's death. This remarkable victory made <span class="highlight">Shivaji </span> a hero of Maratha folklore and a legendary figure among his people. After the successful elimination of Afzal Khan , Shivaji swiftly dispatched <span class="highlight">Netoji Palkar </span> from Wai snd followed suit shortly thereafter.</p>
                        
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

