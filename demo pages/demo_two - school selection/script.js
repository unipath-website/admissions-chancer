function schoolSelection() {
    const dropdown = document.getElementById('myDropdown');

    // Get the selected value
    const selectedValue = dropdown.value;

    // Define a mapping of values to display text
    const displayMap = {
        'utsg': 'University of Toronto St. George',
        'another': 'Another School',
        'yetAnother': 'Yet Another School'
    };

    // Get the <p> element where the selected value will be displayed
    const displayText = document.getElementById('displayText');

    // Set the text content of the <p> element based on the selected value
    displayText.textContent = displayMap[selectedValue] || 'Selected value will be displayed here.';
}