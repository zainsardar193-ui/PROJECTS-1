function calculateAge() {
    const cd = document.getElementById('cd').value;
    const dob = document.getElementById('dob').value;
    const ageText = document.getElementById('agetext');

    if (!cd || !dob) {
        ageText.textContent = "Please select both dates.";
        return;
    }

    const currentDate = new Date(cd);
    const birthDate = new Date(dob);

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn’t happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    ageText.textContent = `${age} years old`;
}
