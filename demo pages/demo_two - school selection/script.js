function schoolSelection() {
    let mean;
    let stdev;

    const dropdown = document.getElementById('schoolSelect');
    const resultParagraph = document.getElementById('result');

    function updateValues() {
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
                stdev = 0;
                break;
        }


        console.log('Mean:', mean);
        console.log('Standard Deviation:', stdev);
        resultParagraph.textContent = `Mean: ${mean}, Standard Deviation: ${stdev}`;
    }




// Initialize values on page load

}
dropdown.addEventListener('change', updateValues);
updateValues();