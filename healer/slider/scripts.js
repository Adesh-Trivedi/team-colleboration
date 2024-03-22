document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('Phone').value.trim();
    var subject = document.getElementById('Subject').value.trim();
    var message = document.getElementById('Message').value.trim();

    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email ex:example123@gmail.com';
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (phone === '') {
        document.getElementById('phoneError').style.display = 'block';
    } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number ex:1234567891';
        document.getElementById('phoneError').style.display = 'block';
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (subject === '') {
        document.getElementById('subjectError').style.display = 'block';
    } else {
        document.getElementById('subjectError').style.display = 'none';
    }

    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // Check if all fields are filled and valid
    if (name !== '' && isValidEmail(email) && isValidPhone(phone) && subject !== '' && message !== '') {
        // Submit form or show success message
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    // Regular expression for validating phone number format
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
