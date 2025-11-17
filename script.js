/* script.js - Quiz logic for Milestone 2 */

/* Questions:
 Q1 fill-in: correct 'Modrić' or 'Modric' (case-insensitive)
 Q2 radio: b (Lionel Messi)
 Q3 radio: a (Lionel Messi) — FIXED
 Q4 checkboxes: a and c are correct (UCL top scorer + La Liga champion)
*/

document.getElementById('submitBtn').addEventListener('click', function () {

    const resultsArea = document.getElementById('resultsArea');

    // Reset feedback blocks
    document.querySelectorAll('.q-feedback').forEach(el => {
        el.textContent = '';
        el.className = 'q-feedback';
    });
    resultsArea.innerHTML = '';

    let totalQuestions = 4;
    let score = 0;
    const details = [];

    // ----------------------------
    // Q1 - Fill-in-the-blank
    // ----------------------------
    const q1input = document.getElementById('q1input').value.trim().toLowerCase();
    const q1Correct = ['modrić', 'modric']; 
    const q1isCorrect = q1Correct.includes(q1input);

    if (q1isCorrect) score += 1;

    document.getElementById('q1feedback').textContent =
        q1isCorrect ? 'Correct' : 'Incorrect - correct answer: Modrić (Modric)';

    document.getElementById('q1feedback').className =
        'q-feedback ' + (q1isCorrect ? 'correct' : 'incorrect');

    details.push({
        q: '1',
        yourAnswer: q1input || '(no answer)',
        correct: 'Modrić (Modric)',
        result: q1isCorrect
    });

    // ----------------------------
    // Q2 - Multiple choice (correct = b)
    // ----------------------------
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q2val = q2 ? q2.value : '';
    const q2isCorrect = q2val === 'b';

    if (q2isCorrect) score += 1;

    document.getElementById('q2feedback').textContent =
        q2isCorrect ? 'Correct' : 'Incorrect - correct: Lionel Messi';

    document.getElementById('q2feedback').className =
        'q-feedback ' + (q2isCorrect ? 'correct' : 'incorrect');

    details.push({
        q: '2',
        yourAnswer: q2val || '(no answer)',
        correct: 'b (Lionel Messi)',
        result: q2isCorrect
    });

    // ----------------------------
    // Q3 - Multiple choice (FIXED correct = a)
    // ----------------------------
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q3val = q3 ? q3.value : '';

    const q3isCorrect = q3val === 'a'; // FIXED

    if (q3isCorrect) score += 1;

    document.getElementById('q3feedback').textContent =
        q3isCorrect ? 'Correct' : 'Incorrect - correct: Lionel Messi';

    document.getElementById('q3feedback').className =
        'q-feedback ' + (q3isCorrect ? 'correct' : 'incorrect');

    details.push({
        q: '3',
        yourAnswer: q3val || '(no answer)',
        correct: 'a (Lionel Messi)',
        result: q3isCorrect
    });

    // ----------------------------
    // Q4 - Multi-select (correct = a and c)
    // ----------------------------
    const q4checks = Array.from(
        document.querySelectorAll('input[name="q4"]:checked')
    ).map(cb => cb.value);

    const required = ['a', 'c'];
    const q4isCorrect =
        required.every(v => q4checks.includes(v)) &&
        q4checks.length === required.length;

    if (q4isCorrect) score += 1;

    document.getElementById('q4feedback').textContent =
        q4isCorrect
            ? 'Correct'
            : 'Incorrect - correct: UCL top scorer AND La Liga champion';

    document.getElementById('q4feedback').className =
        'q-feedback ' + (q4isCorrect ? 'correct' : 'incorrect');

    details.push({
        q: '4',
        yourAnswer: q4checks.length ? q4checks.join(', ') : '(no answer)',
        correct: 'a, c (UCL top scorer, La Liga champion)',
        result: q4isCorrect
    });

    // ----------------------------
    // Final score
    // ----------------------------
    const percentage = Math.round((score / totalQuestions) * 100);
    let summary = `<h3>Your score: ${score} / ${totalQuestions} (${percentage}%)</h3>`;
    if (percentage >= 60) {
        summary += '<p style="color:green">Great job, you passed!</p>';
    } else {
        summary += '<p style="color:darkred">Keep studying and try again.</p>';
    }

    resultsArea.innerHTML = summary;
});

// ------------------------------
// Reset button (optional convenience)
// ------------------------------
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('quizForm').reset();
    document.querySelectorAll('.q-feedback').forEach(el => {
        el.textContent = '';
        el.className = 'q-feedback';
    });
    document.getElementById('resultsArea').innerHTML = '';
});