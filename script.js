const name = document.getElementById("name");
const startingBid = document.getElementById("startingbid");
const education = document.getElementById("education");
const networth = document.getElementById("networth");
const caste = document.getElementById("caste");
const skills = document.querySelectorAll("#skills");
const age = document.getElementsByName("age");
const reputation = document.querySelectorAll("#reputation");
const letter = document.getElementById("letter");

const calculate = () => {
    let price = Number(startingBid.value);

    if (!name || !price) {
        document.getElementById("result").textContent = "Please enter both name and starting bid!";
        return;
    }

    const educationValue = parseFloat(education.value) || 1;
    price *= educationValue;

    const networthValue = parseFloat(networth.value) || 1;
    price *= networthValue;

    const casteValue = parseInt(caste.value) || 0;
    price += casteValue;

    skills.forEach(skill => {
        if (skill.checked) {
            price += parseInt(skill.value);
        }
    });

    age.forEach(item => {
        if (item.checked) {
            price *= parseFloat(item.value);
        }
    });

    reputation.forEach(rep => {
        if (rep.checked) {
            const repValue = parseFloat(rep.value);
            if (Number.isInteger(repValue)) {
                price += repValue;
            } else {
                price *= repValue;
            }
        }
    });

    const brideName = document.getElementById("name").value || "Unknown";
    const loveLetter = letter.value || "No love letter provided.";

    document.getElementById("result").innerHTML = `
        <h3>Calculation Results</h3>
        <p>The price for your bride, ${brideName}, is $${price.toFixed(2)}.</p>
        <p>Love letter: "${loveLetter}"</p>
    `;
}

document.getElementById("calculatePrice").addEventListener("click", calculate);
