let mean;
let stdev;
let schoolloc;

const schoolDropdown = document.getElementById('schoolSelect');
const programDropdown = document.getElementById('programSelect');
const resultParagraph = document.getElementById('result');
const imageElement = document.getElementById("displayedImage");
const schoolLocation = document.getElementById('schoollocation');

const schoolPrograms = {
    utsg: {
        name: "University of Toronto",
        location: "Toronto, ON",
        programs: {
            "Social Sciences": {mean: 91.8, stdev: 4.65},
            "Physical and Mathematical Sciences": {mean: 93.4, stdev: 4.112},
            "Humanities": {mean: 91.5, stdev: 5.1},
            "Life Sciences": {mean: 94.1, stdev: 4.08},
            "Rotman Commerce": {mean: 95.2, stdev: 3.248},
            "Computer Science": {mean: 96.9, stdev: 3.05},
        },
        image: "./logo/UniversityOfToronto.jpg"
    },
    uw: {
        name: "University of Waterloo",
        location: "Waterloo, ON",
        programs: {
            "School of Architecture": {mean: 91.3, stdev: 4.77},
            "School of Computer Science": {mean: 97.8, stdev: 3.9},
            "Faculty of Engineering": {mean: 95.6, stdev: 3.43},
            "Faculty of Mathematics": {mean: 95.1, stdev: 3.37},
            "Faculty of Health": {mean: 90.7, stdev: 3.82},
            "Faculty of Science": {mean: 91.4, stdev: 4.91},
        },
        image: "./logo/UniversityOfWaterloo.svg"
    },
    mac: {
        name: "McMaster University",
        location: "Hamilton, ON",
        programs: {
            "Health Sciences": {mean: 98, stdev: 2.0},
            "Engineering": {mean: 92, stdev: 3.8},
            "Business": {mean: 90, stdev: 4.2}
        },
        image: "./logo/McMaster_University_Logo.svg"
    },
    qu: {
        name: "Queen's University",
        location: "Kingston, ON",
        programs: {
            "Life Sciences and Biochemistry": {mean: 94.5, stdev: 3.36},
            "Commerce": {mean: 94.5, stdev: 3.73},
            "Computing": {mean: 93.3, stdev: 3.96},
            "Concurrent Education": {mean: 93.1, stdev: 4.59},
            "Engineering and Applied Science": {mean: 93.5, stdev: 3.8},
            "Health Sciences": {mean: 96.8, stdev: 3.7},
            "Kinesiology": {mean: 92.7, stdev: 3.69},
            "Arts": {mean: 89.7, stdev: 5.03},
            "Music/Theatre": {mean: 90.8, stdev: 8},
            "Nursing": {mean: 94.5, stdev: 3.48},
            "Psychology": {mean: 85.3, stdev: 6.2},
            "Science": {mean: 90.5, stdev: 4.88},
        },
        image: "./logo/QueensU.svg"
    }
};

function populatePrograms() {
    // Clear the current options in the program dropdown
    programDropdown.innerHTML = '';

    const selectedSchool = schoolDropdown.value;
    const programs = schoolPrograms[selectedSchool]?.programs;

    if (programs) {
        // Add new program options dynamically
        Object.keys(programs).forEach(program => {
            const option = document.createElement('option');
            option.value = program;
            option.textContent = program;
            programDropdown.appendChild(option);
        });
    }

    // Automatically calculate the probability after programs are populated
    calculateProb();
}

function calculateProb() {
    const values = [
        document.getElementById('course1').value,
        document.getElementById('course2').value,
        document.getElementById('course3').value,
        document.getElementById('course4').value,
        document.getElementById('course5').value,
        document.getElementById('course6').value
    ];

    const numbers = values.map(value => parseFloat(value)).filter(value => !isNaN(value));

    if (numbers.length === 0) {
        document.getElementById('result').textContent = '';
        return;
    }

    const selectedSchool = schoolDropdown.value;
    const selectedProgram = programDropdown.value;

    if (schoolPrograms[selectedSchool] && schoolPrograms[selectedSchool].programs[selectedProgram]) {
        mean = schoolPrograms[selectedSchool].programs[selectedProgram].mean;
        stdev = schoolPrograms[selectedSchool].programs[selectedProgram].stdev;
        schoolloc = schoolPrograms[selectedSchool].location;
        
        // Check if the school has an image and display/hide accordingly
        const imageSrc = schoolPrograms[selectedSchool].image;
        if (imageSrc) {
            imageElement.src = imageSrc;
            imageElement.style.display = 'block'; // Show the image
        } else {
            imageElement.style.display = 'none'; // Hide the image
        }
        
    } else {
        mean = 0;
        stdev = 1;
        imageElement.style.display = 'none'; // Hide the image if no school/program selected
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let top6 = sum / numbers.length;
    let zscnum = top6 - mean;
    let zscore = zscnum / (Math.sqrt(2) * stdev);
    let probabilitor = 100 * (0.5 + 0.5 * (math.erf(zscore)));
    
    schoolLocation.textContent = schoolloc;
    document.getElementById('result').textContent = `${probabilitor.toFixed(2)}%`;
}

// Event listener for school selection to populate programs
schoolDropdown.addEventListener('change', populatePrograms);

// Initialize the program dropdown based on the first selected school
populatePrograms();
const schools = [
    {
        name: 'University of Toronto',
        location: 'Toronto, ON',
        programs: 700,
        meanAdmission: 96.9,
        stdev: 3.05,
        logo: './logo/UniversityOfToronto.jpg'
    },
    {
        name: 'University of Waterloo',
        location: 'Waterloo, ON',
        programs: 400,
        meanAdmission: 97.8,
        stdev: 3.9,
        logo: './logo/UniversityOfWaterloo.svg'
    },
    {
        name: 'Queen\'s University',
        location: 'Kingston, ON',
        programs: 150,
        meanAdmission: 93.3,
        stdev: 3.96,
        logo: './logo/QueensU.svg'
    },
    {
        name: 'McMaster University',
        location: 'Hamilton, ON',
        programs: 300,
        meanAdmission: 96.9,
        stdev: 2.47,
        logo: './logo/McMaster_University_Logo.svg'
    }
];

function displaySchoolCards(schoolsToDisplay) {
    const schoolCardsContainer = document.getElementById('school-cards');
    schoolCardsContainer.innerHTML = ''; // Clear existing cards

    schoolsToDisplay.forEach(school => {
        const card = document.createElement('div');
        card.classList.add('school-card');

        card.innerHTML = `
      <img src="${school.logo}" alt="${school.name} Logo" class="school-logo">
      <h3>${school.name}</h3>
      <p>Location: ${school.location}</p>
      <p>Programs: ${school.programs}</p>
      <p>Mean Admission Score: ${school.meanAdmission}</p>
      <p>Standard Deviation: ${school.stdev}</p>
    `;

        // Add click event to each card to redirect to the school info page
        card.addEventListener('click', () => {
            // Save the selected school data in localStorage
            localStorage.setItem('selectedSchool', JSON.stringify(school));

            // Redirect to the info page
            window.location.href = 'school-info.html';
        });

        schoolCardsContainer.appendChild(card);
    });
}

displaySchoolCards(schools);

function filterSchools() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSchools = schools.filter(school => school.name.toLowerCase().includes(searchInput));
    displaySchoolCards(filteredSchools);
}


/* made w love by soroush paidar */