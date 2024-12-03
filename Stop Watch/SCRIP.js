// Select the HTML element to display the timer  
let timerDisplay = document.querySelector(".timerDisplay");  

// Select the buttons by their IDs  
let stopBtn = document.getElementById('stopBtn');  
let startBtn = document.getElementById('startBtn');  
let resetBtn = document.getElementById('resetBtn');  

// Initialize timer variables for milliseconds, seconds, and minutes  
let msec = 0;   
let secs = 0;  
let mins = 0;  

// Variable to hold the ID of the timer interval  
let timerId = null; // Declare timerId at the top  

// Add event listener to the Start button  
startBtn.addEventListener('click', function() {  
    // If a timer is already running, clear it to prevent multiple timers  
    if (timerId !== null) {  
        clearInterval(timerId);  
    }  

    // Start the timer, calling startTimer function every 10 milliseconds  
    timerId = setInterval(startTimer, 10);  
});  

// Add event listener to the Stop button  
stopBtn.addEventListener('click', function() {  
    // Stop the timer by clearing the interval  
    clearInterval(timerId);  
});  

// Add event listener to the Reset button  
resetBtn.addEventListener('click', function() {  
    // Stop the timer when resetting  
    clearInterval(timerId);  

    // Reset the display to "00 : 00 : 00"  
    timerDisplay.innerHTML = `00 : 00 : 00`;  

    // Reset timer variables to 0  
    msec = secs = mins = 0;  
});  

// Function to update the timer every 10 milliseconds  
function startTimer() {  
    // Increment milliseconds  
    msec++;  

    // Check if milliseconds reached 100 (1 second)  
    if (msec === 100) {  
        // Reset milliseconds and increment seconds  
        msec = 0;  
        secs++;  

        // Check if seconds reached 60  
        if (secs === 60) {  
            // Reset seconds and increment minutes  
            secs = 0;  
            mins++;  
        }  
    }  

    // Format milliseconds with leading zero if necessary  
    let msecString = msec < 10 ? `0${msec}` : msec;  
    // Format seconds with leading zero if necessary  
    let secsString = secs < 10 ? `0${secs}` : secs;  
    // Format minutes with leading zero if necessary  
    let minsString = mins < 10 ? `0${mins}` : mins;  

    // Update the display with the formatted timer values  
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;  
}