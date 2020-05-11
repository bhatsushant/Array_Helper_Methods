// Example of Generator using 'Symbol Iterator'

const testingTeam = {
    size: 2,
    department: 'testing',
    mainDepartment: 'engineering',
    lead: 'Bill',
    tester: 'Bob',
    [Symbol.iterator] : function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engeneering',
    lead: 'Alex',
    manager: 'Jill',
    engineer: 'Sam',
    [Symbol.iterator] : function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

const names =[];
for (let name of engineeringTeam) {
    names.push(name);
}
names;

//  ["Alex", "Jill", "Sam", "Bill", "Bob"]