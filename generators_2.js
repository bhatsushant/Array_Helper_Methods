// Example of Generators

const testingTeam = {
    size: 2,
    department: 'testing',
    mainDepartment: 'engineering',
    lead: 'Bill',
    tester: 'Bob'
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engeneering',
    lead: 'Alex',
    manager: 'Jill',
    engineer: 'Sam'
}

function* teamEngineeringIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = teamTestingIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function *teamTestingIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names =[];
for (let name of teamEngineeringIterator(engineeringTeam)) {
    names.push(name);
}