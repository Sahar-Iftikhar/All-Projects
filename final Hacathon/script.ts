document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('modeToggle');

  if (!modeToggle) {
    console.error('Mode toggle button not found!');
    return;
  }

  let currentMode = (localStorage.getItem('mode') as 'light' | 'dark') || 'light';

  const setMode = (mode) => {
    document.body.className = mode;
    document.querySelector('form')?.classList.add(mode);
    document.querySelectorAll('fieldset').forEach(fieldset => {
      fieldset.className = mode;
    });

    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
      resumeOutput.className = mode;
    }

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (mode === 'dark') {
        input.classList.add('dark');
      } else {
        input.classList.remove('dark');
      }
    });

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      if (mode === 'dark') {
        label.classList.add('dark');
      } else {
        label.classList.remove('dark');
      }
    });

    const legends = document.querySelectorAll('legend');
    legends.forEach(legend => {
      if (mode === 'dark') {
        legend.classList.add('dark');
      } else {
        legend.classList.remove('dark');
      }
    });

    const isDark = mode === 'dark';
    modeToggle.innerText = isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode';
    localStorage.setItem('mode', mode);
  };

  setMode(currentMode);

  modeToggle.addEventListener('click', () => {
    currentMode = currentMode === 'light' ? 'dark' : 'light';
    setMode(currentMode);
  });

  document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profile-pic') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const qualificationElement = document.getElementById('qualification') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const addressElement = document.getElementById('address') as HTMLInputElement | null;
    const certificateElement = document.getElementById('certificate') as HTMLInputElement | null;

    if (profilePictureInput && nameElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement && addressElement && certificateElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const qualification = qualificationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const address = addressElement.value;
      const quater = certificateElement.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

      const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="Profile-pic">` : ""}
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
        <p><strong>Address:</strong> <span id="edit-address" class="editable">${address}</span></p>
        <p><strong>Quarter:</strong> <span id="edit-quater" class="editable">${quater}</span></p>
        <h3>Education</h3>
        <p id="edit-education" class="editable">${qualification}</p>
        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>
        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
      `;

      const resumeOutputElement = document.getElementById('resumeOutput');
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditableAgain(); // Call the function to make the fields editable
      }
    } else {
      console.error('One or more input elements are missing');
    }
  });
});

function makeEditableAgain() {
  const editableElements = document.querySelectorAll<HTMLElement>('.editable');

  editableElements.forEach(element => {
    const currentElement = element;

    currentElement.addEventListener('click', function () {
      const currentValue = currentElement.textContent || '';
      
      if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing-input');

        input.addEventListener('blur', function () {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline';
          input.remove();
        });

        currentElement.style.display = 'none';
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
