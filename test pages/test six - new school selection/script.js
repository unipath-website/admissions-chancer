let mean;
let stdev;

const schooldropdown = document.getElementById('OUAC');
const resultParagraph = document.getElementById('result');
const OUACOpts = [...OUAC.children];

document.getElementById('schoolSelect').addEventListener(
    'change',
    (e) => {
        OUAC.innerHTML = OUACOpts.filter(
            o => e.target.value.includes(o.value)
        ).map(o => o.outerHTML).join('')
    })
function schoolStatistics() {
    const selectedValue = schooldropdown.value;

    switch (selectedValue) {
        case 'TAD':
            mean = 96.9;
            stdev = 3.05;
            break;
        case 'TAH':
            mean = 91.5;
            stdev = 5.1;
            break;
        case 'TLG':
            mean = 94.1;
            stdev = 4.08;
            break;
        case 'TPG':
            mean = 93.4;
            stdev = 4.11;
            break;
        case 'TAC':
            mean = 95.2;
            stdev = 3.25;
            break;
        case 'TAX':
            mean = 91.8;
            stdev = 4.65;
            break;
        case 'ME':
            mean = 91.8;
            stdev = 4.65;
            break;
        default:
            mean = 0;
            stdev = 1;
            break;
    }

    resultParagraph.textContent = `Mean: ${mean}, Standard Deviation: ${stdev}`;
}

schooldropdown.addEventListener('change', schoolStatistics);

schoolStatistics();
