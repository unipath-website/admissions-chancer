function changeImage() {
    const imageSelector = document.getElementById("imageSelector").value;
    const imageElement = document.getElementById("displayedImage");
    const schoolName = document.getElementById('schoolname');
    const schoolLocation = document.getElementById('schoollocation');

    switch (imageSelector) {
        case "utsg":
            imageElement.src = "utsg.jpg";
            name = "University of Toronto"
            schoolloc = "Toronto, ON"
            break;
        case 'utm':
            imageElement.src = "utsg.png";
            name = "University of Toronto Mississauga"
            schoolloc = "Mississauga, ON"
            break;
        case 'utsc':
            name = "University of Toronto Scarborough"
            schoolloc = "Scarborough, ON"
            break;
        case 'uw':
            name = "University of Waterloo"
            schoolloc = "Waterloo, ON"
            break;
        case 'qu':
            name = "Queen's University"
            schoolloc = "Kingston, ON"
            break;
        case 'mac':
            name = "McMaster University"
            schoolloc = "Hamilton, ON"
            break;
        case 'wu':
            name = "Western University"
            schoolloc = "London, ON"
            break;
        case 'tmu':
            name = "Toronto Metropolitan University"
            schoolloc = "Toronto, ON"
            break;
        case 'ott':
            name = "University of Ottawa"
            schoolloc = "Ottawa, ON"
            break;
        case 'wlu':
            name = "Wilfrid Laurier University"
            schoolloc = "Waterloo, ON"
            break;
        case 'yu':
            name = "York University"
            schoolloc = "Toronto, ON"
            break;
        default:

            break;
    }
    schoolName.textContent = `${name}`;
    schoolLocation.textContent = `${schoolloc}`
}