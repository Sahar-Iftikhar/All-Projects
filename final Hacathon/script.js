document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var modeToggle = document.getElementById('modeToggle');
    if (!modeToggle) {
        console.error('Mode toggle button not found!');
        return;
    }
    var currentMode = localStorage.getItem('mode') || 'light';
    var setMode = function (mode) {
        var _a;
        document.body.className = mode;
        (_a = document.querySelector('form')) === null || _a === void 0 ? void 0 : _a.classList.add(mode);
        document.querySelectorAll('fieldset').forEach(function (fieldset) {
            fieldset.className = mode;
        });
        var resumeOutput = document.getElementById('resumeOutput');
        if (resumeOutput) {
            resumeOutput.className = mode;
        }
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            if (mode === 'dark') {
                input.classList.add('dark');
            }
            else {
                input.classList.remove('dark');
            }
        });
        var labels = document.querySelectorAll('label');
        labels.forEach(function (label) {
            if (mode === 'dark') {
                label.classList.add('dark');
            }
            else {
                label.classList.remove('dark');
            }
        });
        var legends = document.querySelectorAll('legend');
        legends.forEach(function (legend) {
            if (mode === 'dark') {
                legend.classList.add('dark');
            }
            else {
                legend.classList.remove('dark');
            }
        });
        var isDark = mode === 'dark';
        modeToggle.innerText = isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode';
        localStorage.setItem('mode', mode);
    };
    setMode(currentMode);
    modeToggle.addEventListener('click', function () {
        currentMode = currentMode === 'light' ? 'dark' : 'light';
        setMode(currentMode);
    });
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var profilePictureInput = document.getElementById('profile-pic');
        var nameElement = document.getElementById('name');
        var emailElement = document.getElementById('email');
        var phoneElement = document.getElementById('phone');
        var qualificationElement = document.getElementById('qualification');
        var experienceElement = document.getElementById('experience');
        var skillsElement = document.getElementById('skills');
        var addressElement = document.getElementById('address');
        var certificateElement = document.getElementById('certificate');
        if (profilePictureInput && nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement && addressElement && certificateElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var qualification = qualificationElement.value;
            var experience = experienceElement.value;
            var skills = skillsElement.value;
            var address = addressElement.value;
            var quater = certificateElement.value;
            var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
            var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"Profile-pic\">") : "", "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, "</span></p>\n        <p><strong>Quarter:</strong> <span id=\"edit-quater\" class=\"editable\">").concat(quater, "</span></p>\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(qualification, "</p>\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n      ");
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                makeEditableAgain(); // Call the function to make the fields editable
            }
        }
        else {
            console.error('One or more input elements are missing');
        }
    });
});
function makeEditableAgain() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        var currentElement = element;
        currentElement.addEventListener('click', function () {
            var _a;
            var currentValue = currentElement.textContent || '';
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
