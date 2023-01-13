generateHTML = (data) => {
    cardArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            cardArr.push(`
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h4>Manager</h4>
                        <h3>${employee.name}</h3><i class="material-icons">content_paste</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${employee.id}</p>
                        <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                        <p class="office">Office Number: ${employee.officeNumber}</p>
                    </div>
                </div>
            </div>
            `);
        }

        if (role === 'Engineer') {
            cardArr.push(`
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h4>Engineer</h4>
                        <h3>${employee.name}</h3><i class="material-icons">laptop_mac</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${employee.id}</p>
                        <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                        <p class="github">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
                    </div>
                </div>
            </div>
            `);
        }

        if (role === 'Intern') {
            cardArr.push(`
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h4>Intern</h4>
                        <h3>${employee.name}</h3><i class="material-icons">assignment_ind</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${employee.id}</p>
                        <p class="email">Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
                        <p class="school">School: ${employee.school}</p>
                    </div>
                </div>
            </div>
            `);
        }
    }

    const cards = cardArr.join('');

    return generatePage(cards);
}

const generatePage = function (employeeCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>
      
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = generateHTML; 