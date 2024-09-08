let kmd;
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
            "Social Sciences": {kmd: 91.8, stdev: 4.65},
            "Physical and Mathematical Sciences": {kmd: 93.4, stdev: 4.112},
            "Humanities": {kmd: 91.5, stdev: 5.1},
            "Life Sciences": {kmd: 94.1, stdev: 4.08},
            "Rotman Commerce": {kmd: 95.2, stdev: 3.248},
            "Computer Science": {kmd: 96.9, stdev: 3.05},
        },
        image: "./logo/UniversityOfToronto.jpg"
    },
    uw: {
        name: "University of Waterloo",
        location: "Waterloo, ON",
        programs: {
            "School of Architecture": {kmd: 91.3, stdev: 4.77},
            "School of Computer Science": {kmd: 97.8, stdev: 3.9},
            "Faculty of Engineering": {kmd: 95.6, stdev: 3.43},
            "Faculty of Mathematics": {kmd: 95.1, stdev: 3.37},
            "Faculty of Health": {kmd: 90.7, stdev: 3.82},
            "Faculty of Science": {kmd: 91.4, stdev: 4.91},
        },
        image: "./logo/UniversityOfWaterloo.svg"
    },
    mac: {
        name: "McMaster University",
        location: "Hamilton, ON",
        programs: {
            "Health Sciences": {kmd: 98, stdev: 2.0},
            "Engineering": {kmd: 92, stdev: 3.8},
            "Business": {kmd: 90, stdev: 4.2}
        },
        image: "./logo/McMaster_University_Logo.svg"
    },
    qu: {
        name: "Queen's University",
        location: "Kingston, ON",
        programs: {
            "Life Sciences and Biochemistry": {kmd: 94.5, stdev: 3.36},
            "Commerce": {kmd: 94.5, stdev: 3.73},
            "Computing": {kmd: 93.3, stdev: 3.96},
            "Concurrent Education": {kmd: 93.1, stdev: 4.59},
            "Engineering and Applied Science": {kmd: 93.5, stdev: 3.8},
            "Health Sciences": {kmd: 96.8, stdev: 3.7},
            "Kinesiology": {kmd: 92.7, stdev: 3.69},
            "Arts": {kmd: 89.7, stdev: 5.03},
            "Music/Theatre": {kmd: 90.8, stdev: 8},
            "Nursing": {kmd: 94.5, stdev: 3.48},
            "Psychology": {kmd: 85.3, stdev: 6.2},
            "Science": {kmd: 90.5, stdev: 4.88},
        },
        image: "./logo/QueensU.svg"
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
        kmd = schoolPrograms[selectedSchool].programs[selectedProgram].kmd;
        stdev = schoolPrograms[selectedSchool].programs[selectedProgram].stdev;
        schoolloc = schoolPrograms[selectedSchool].location;
        imageElement.src = schoolPrograms[selectedSchool].image;
    } else {
        kmd = 0;
        stdev = 1;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let top6 = sum / numbers.length;
    let zscnum = top6 - kmd;
    let zscore = zscnum / (Math.sqrt(2) * stdev);
    let probabilitor = 100 * (0.5 + 0.5 * (math.erf(zscore)));

    schoolLocation.textContent = schoolloc;
    document.getElementById('result').textContent = `${probabilitor.toFixed(2)}%`;
}

schoolDropdown.addEventListener('change', populatePrograms);

populatePrograms();

/* made w love by soroush paidar */