function calculateAge() {

    const dobInput = document.getElementById('dob');
    const dobValue = dobInput.value;

    if (!dobValue) {
        alert('Please select a valid date of birth.');
        return;
    }

   
    const dobDate = new Date(dobValue);

    const currentDate = new Date();

    const age = currentDate.getFullYear() - dobDate.getFullYear();

    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    
        age--;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<b>Your age is: ${age} years</b>`;
}
