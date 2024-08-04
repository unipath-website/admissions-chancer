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

    
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let mean = sum / numbers.length;
    let zscnum = mean - 96.9
    let zscore = zscnum / 3.05
    let probabilitor = 100 * (0.5 + 0.5 * (math.erf(zscore)))

    document.getElementById('result').textContent = `${probabilitor.toFixed(2)} ${"%"}`;
}`${num} ${str}`