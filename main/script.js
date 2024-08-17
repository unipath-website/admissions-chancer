let mean;
let stdev;
let name;
let schoolloc;


const dropdown = document.getElementById('schoolSelect');
const resultParagraph = document.getElementById('result');

const imageElement = document.getElementById("displayedImage");
const schoolName = document.getElementById('schoolname');
const schoolLocation = document.getElementById('schoollocation');


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
    const selectedValue = dropdown.value;

    switch (selectedValue) {
        case 'utsg':
            mean = 96.9;
            stdev = 3.05;
            imageElement.src = "utsg.jpg";
            name = "University of Toronto"
            schoolloc = "Toronto, ON"
            break;
        case 'utm':
            mean = 92;
            stdev = 4.2;
            imageElement.src = "utsg.png";
            name = "University of Toronto Mississauga"
            schoolloc = "Mississauga, ON"
            break;
        case 'utsc':
            mean = 95.2;
            stdev = 3.43;
            name = "University of Toronto Scarborough"
            schoolloc = "Scarborough, ON"
            break;
        case 'uw':
            mean = 97.8;
            stdev = 3.9;
            break;
        case 'qu':
            mean = 93.3;
            stdev = 3.96;
            break;
        case 'mac':
            mean = 96.9;
            stdev = 2.47;
            break;
        case 'wu':
            mean = 92.5;
            stdev = 3.88;
            break;
        case 'tmu':
            mean = 93.9;
            stdev = 2;
            break;
        case 'ott':
            mean = 91;
            stdev = 4.82;
            break;
        case 'wlu':
            mean = 83.8;
            stdev = 6.55;
            break;
        case 'yu':
            mean = 87.9;
            stdev = 5.76;
            break;
        default:
            mean = 0;
            stdev = 1;
            break;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let top6 = sum / numbers.length;
    let zscnum = top6 - mean
    let zscore = zscnum / (Math.sqrt(2) * stdev)
    let probabilitor = 100 * (0.5 + 0.5 * (math.erf(zscore)))
    schoolName.textContent = `${name}`;
    schoolLocation.textContent = `${schoolloc}`
    document.getElementById('result').textContent = `${probabilitor.toFixed(2)} ${"%"}`;
}`${num} ${str}`