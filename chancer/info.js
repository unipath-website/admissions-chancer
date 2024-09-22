const selectedSchool = JSON.parse(localStorage.getItem('selectedSchool'));

if (selectedSchool) {
    document.getElementById('school-title').textContent = selectedSchool.name;
    document.getElementById('school-header').src = selectedSchool.header;
    document.getElementById('school-location').textContent = selectedSchool.location;
}