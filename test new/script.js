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
            "Social Sciences (HBA)": {mean: 91.8, stdev: 4.65},
            "Physical and Mathematical Sciences (HBSc)": {mean: 93.4, stdev: 4.112},
            "Humanities (HBA)": {mean: 91.5, stdev: 5.1},
            "Life Sciences (HBSc)": {mean: 94.1, stdev: 4.08},
            "Rotman Commerce (BCom)": {mean: 95.2, stdev: 3.248},
            "Computer Science (HBSc)": {mean: 96.9, stdev: 3.05},
        },
        image: "./logo/UniversityOfToronto.jpg"
    },
    uw: {
        name: "University of Waterloo",
        location: "Waterloo, ON",
        programs: {
            "Computer Science": { mean: 97, stdev: 3.0 },
            "Engineering": { mean: 96, stdev: 2.8 },
            "Mathematics": { mean: 94, stdev: 4.0 }
        },
        image: "./logo/UniversityOfWaterloo.svg"
    },
    mac: {
        name: "McMaster University",
        location: "Hamilton, ON",
        programs: {
            "Health Sciences": { mean: 98, stdev: 2.0 },
            "Engineering": { mean: 92, stdev: 3.8 },
            "Business": { mean: 90, stdev: 4.2 }
        },
        image: "./logo/McMaster_University_Logo.svg"
    }
};

function populatePrograms() {
    programDropdown.innerHTML = '';

    const selectedSchool = schoolDropdown.value;
    const programs = schoolPrograms[selectedSchool]?.programs;

    if (programs) {
        Object.keys(programs).forEach(program => {
            const option = document.createElement('option');
            option.value = program;
            option.textContent = program;
            programDropdown.appendChild(option);
        });
    }

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
        imageElement.src = schoolPrograms[selectedSchool].image;
    } else {
        mean = 0;
        stdev = 1;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let top6 = sum / numbers.length;
    let zscnum = top6 - mean;
    let zscore = zscnum / (Math.sqrt(2) * stdev);
    let probabilitor = 100 * (0.5 + 0.5 * (math.erf(zscore)));

    schoolLocation.textContent = schoolloc;
    document.getElementById('result').textContent = `${probabilitor.toFixed(2)}%`;
}

schoolDropdown.addEventListener('change', populatePrograms);

populatePrograms();
