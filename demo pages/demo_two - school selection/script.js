function schoolSelection() {
    const dropdown = document.getElementById('myDropdown');

    // Get the selected value
    const selectedValue = dropdown.value;

    // Define a mapping of values to display text
    const displayMap = {
        'utsg': 'University of Toronto St. George',
        'utsc': 'University of Toronto Scarborough',
        'utm': 'University of Toronto Mississauga',
        'uw': 'University of Waterloo',
        'qu': "Queen's University",
        'mac': 'McMaster University',
        'wu': 'Western University'
    };

    // Get the <p> element where the selected value will be displayed
    const displayText = document.getElementById('displayText');

    // Set the text content of the <p> element based on the selected value
    displayText.textContent = displayMap[selectedValue] || 'Selected value will be displayed here.';
}