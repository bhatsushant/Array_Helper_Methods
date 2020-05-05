// every() function

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

let username = new Field("user");
let password = new Field("pass");
let birthdate = new Field("10/10/96");

let fields = [username,password,birthdate];

var formIsValid = fields.every(function(field) {
    field.validate();
});

if(formIsValid) {
    // Submit user form
} else {
    // Show validation error
}