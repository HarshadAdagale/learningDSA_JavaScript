const studentsDatabase = ["Harshad", "Ashish", "Frank", "Atul", "Rahul"];

const findStudents = (studentsDatabase, name) => { 
    for (let i = 0; i < studentsDatabase.length; i++) {
        if (studentsDatabase[i] === name) {
            console.log(`Found ${name}`);
        }
    }
}

findStudents(studentsDatabase, "Frank");