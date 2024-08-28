document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "Time to party! Sundays are for adventures, relaxation, and fun. It’s a day to let go of the week's stresses and to enjoy the company of friends and family.",
        "Mondays are for fresh starts and new opportunities. Tackle the week with energy and determination.",
        "Tuesdays are for building momentum. Keep moving forward and making progress.",
        "Wednesdays are for reflection and midweek motivation. Stay focused and finish the week strong.",
        "Thursdays are for perseverance. Keep pushing through the challenges.",
        "Fridays are for celebration! The weekend is near, and it's time to unwind.",
        "Saturdays are for relaxation and fun. It's a day to enjoy life and recharge for the coming week."
    ];

    const daySelector = document.getElementById('daySelector');
    const quoteElement = document.getElementById('quote');

    function updateQuote() {
        const selectedDayIndex = daySelector.value;
        const selectedQuote = quotes[selectedDayIndex];
        quoteElement.textContent = selectedQuote;
    }

    daySelector.addEventListener('change', updateQuote);

    updateQuote();
});
