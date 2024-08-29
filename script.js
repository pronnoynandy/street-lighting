document.addEventListener('DOMContentLoaded', () => {
    // Load votes from localStorage or initialize to 0
    let blueVotes = parseInt(localStorage.getItem('blueVotes')) || 0;
    let yellowVotes = parseInt(localStorage.getItem('yellowVotes')) || 0;

    // Initialize chart with saved votes
    updateChart('blue', blueVotes);
    updateChart('yellow', yellowVotes);

    // Function to handle button click
    window.submitVote = function (color) {
        if (color === 'blue') {
            blueVotes++;
            localStorage.setItem('blueVotes', blueVotes); // Save to localStorage
        } else if (color === 'yellow') {
            yellowVotes++;
            localStorage.setItem('yellowVotes', yellowVotes); // Save to localStorage
        }

        // Update the displayed results as a bar chart
        updateChart('blue', blueVotes);
        updateChart('yellow', yellowVotes);

        // Hide the buttons after selection
        document.querySelector('.button-container').style.display = 'none';

        // Show the thank you message
        document.getElementById('thankYouMessage').style.display = 'block';
    };

    // Function to update the bar chart
    function updateChart(color, votes) {
        const bar = document.getElementById(`${color}Bar`);
        const maxVotes = Math.max(blueVotes, yellowVotes, 1); // Prevent division by 0
        const maxWidth = 300; // Maximum width for the bar in pixels

        bar.textContent = `${capitalizeFirstLetter(color)}: ${votes}`;
        bar.style.width = `${(votes / maxVotes) * maxWidth}px`; // Scale width proportionally
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
