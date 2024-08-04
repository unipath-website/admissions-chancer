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

    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    if (sum.valueOf > 600) {
        document.getElementById('result').textContent = 'Invalid';
        return;
    }
    const mean = sum / numbers.length;
    const zscnum = mean - 96.9
    const zscore = zscnum / 3.05
    const probabilitor = math.erf(zscore)

    document.getElementById('result').textContent = `${probabilitor.toFixed(2)}`;
}