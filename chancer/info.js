const selectedSchool = JSON.parse(localStorage.getItem('selectedSchool'));

if (selectedSchool) {
    document.getElementById('school-title').textContent = selectedSchool.name;
    document.getElementById('school-logo').src = selectedSchool.logo;
    document.getElementById('school-location').textContent = `Location: ${selectedSchool.location}`;
}
