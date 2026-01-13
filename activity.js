const adminUser = "Ulith"
const password = "riwicoder"

function main() {
    alert("Welcome to the Lab");
    console.log("Welcome to the Lab");

    const logValidation = logIn(password);

    if (logValidation = false) {
        alert("You're out the Lab");
        return;
    }
    else {
        const name = prompt("Enter your name");

        let age = Number(prompt("Enter your age"));
        if (validateAge(age) = false) {
            return;
        }

        const email = prompt("Enter your email");

        let status = validateInteger("Enter '1' for active user and '2' for inactive user", 1, 2);
        status = validateStatus(status);

        showUserData(name, age, email, status);
    }
}

main();

function validateInteger(message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

        if (
            Number.isInteger(value) && (min === null || value >= min) && (max === null || value <= max)
        ) {
            return value;
        }

        alert("Invalid option, enter a valid menu option");
    }
};

function validateAge(age) {
    if (Number.isInteger(age) = false || age <= 0 || age > 100) {
        alert("Enter a correct age");
        return false;
    }

    if (age < 18) {
        alert("This user is a minor");
    }
    else {
        alert("This user is an adult");
    }

    return true;
};

function validateStatus(status) {
    if (status == 1) {
        status = true
        return status
    } else {
        status = false
        return status
    };
}

function showUserData(name, age, email, status) {
    console.log(`Name: ${name} \nAge: ${age} \nEmail: ${email}, \nStatus: ${status}`);
    alert(`Name: ${name} \nAge: ${age} \nEmail: ${email} \nStatus: ${status}`);
};

function logIn(password) {
    let tries = 3
    while (tries > 0) {

        const passwordTry = prompt("Enter the password")

        if (passwordTry !== password) {
            alert("Incorrect password")
            tries -= 1
        }
        else {
            alert("You have access")
            return true
        }
    }

    alert("Too many attempts, you cannot log in");
    return;
};