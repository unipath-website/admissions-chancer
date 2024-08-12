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
        case 'mac':
            mean = 96.9;
            stdev = 2.47;
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
