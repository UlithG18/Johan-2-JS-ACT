usersInSystem = {}


function main() {
    alert("Welcome to the CRUDLab");
    console.log("Welcome to the CRUDLab");

    let usersList = { name: "", age: 0, courses: 0 }

    option = principalMenu()

    switch (option) {
        case 1:

        case 2:

        case 3:


        case 4:
            alert("Thank you for using our services")
            alert("Exiting...")
            return
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

function validateName(message) {
    while (true) {
        let name = prompt(message);

        if (name === null) {
            alert("Action cancelled");
            return null;
        }

        name = name.trim();

        if (name === "") {
            alert("You need to enter a name");
            continue;
        }

        if (!/^[a-zA-Z]+$/.test(name)) {
            alert("The field must include only letters");
            continue;
        }

        return name;
    }
}

function validateAge(age) {
    while (true) {
        if (Number.isInteger(age) === false || age <= 0 || age > 100) {
            alert("Enter a correct age");
            continue;
        }

        age < 18 ? console.log("This user is a minor") : console.log("This user is an adult");

        return age;
    }
};

function principalMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n1. User register\n2. Show user information\n3. Test simulation\n4.Exit \nEnter an option: ", 1, 4)
    return option
}

function showUserData(name, age, email, status) {
    alert(`Name: ${name} -> ${typeof name} \nAge: ${age} -> ${typeof age} \nEmail: ${email} -> ${typeof email} \nStatus: ${status} -> ${typeof status}`);
    console.log(`Name: ${name} -> ${typeof name} \nAge: ${age} -> ${typeof age} \nEmail: ${email} -> ${typeof email} \nStatus: ${status} -> ${typeof status}`);
};

function userRegister() {
    const name = validateName("Enter your name")
    const age = validateAge("Enter your age")
    const courses = validateInteger("How many courses do you have register?", 0)


}

// Registrar usuario

// Mostrar información del usuario

// Simular evaluación

// Salir