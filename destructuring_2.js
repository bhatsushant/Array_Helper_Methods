// Array and Object destructuring

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes.map(( [subject, time, teacher] ) => {
      return { subject, time, teacher };
  });

  /* Output -   {subject: "Chemistry", time: "9AM", teacher: "Mr. Darnick"}
                {subject: "Physics", time: "10:15AM", teacher: "Mrs. Lithun"}
                {subject: "Math", time: "11:30AM", teacher: "Mrs. Vitalis"} */