let mean;
let stdev;

const dropdown = document.getElementById('schoolSelect');
const resultParagraph = document.getElementById('result');

function schoolStatistics() {
    const selectedValue = dropdown.value;

    switch (selectedValue) {
        case 'utsg':
            mean = 96.9;
            stdev = 3.05;
            break;
        case 'utm':
            mean = 92;
            stdev = 4.2;
            break;
        case 'utsc':
            mean = 95.2;
            stdev = 3.43;
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

    resultParagraph.textContent = `Mean: ${mean}, Standard Deviation: ${stdev}`;
}

dropdown.addEventListener('change', schoolStatistics);

schoolStatistics();
