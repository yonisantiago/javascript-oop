/*
-----Paradigmas de Programacion-----
-Estructurado-
-Orientado a Objetos-
-Funcional-




*/

const elonMusk = {
    name: "Elon",
    age: 36,
    approvedCourses: [
        "HTML Course",
        "CSS Course"
    ],
    passCourse(newCourse){
        this.approvedCourses.push(newCourse)
    },
};

//Making elon approve other course
elonMusk.approvedCourses.push("Responsive Design")
elonMusk.passCourse("Javascript Pro")
console.log(elonMusk) // 

// ------------------------ //

function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    // this.passCourse = function(newCourse){
    //     this.approvedCourses.push(newCourse);
    // }
}

Student.prototype.passCourse = function(newCourse){
    this.approvedCourses.push(newCourse)
}

const juanito = new Student(
    "juanito a",
    25,
    ["Videogames production", "Javascript Pro", "Python"]
)

console.log(juanito) 
juanito.passCourse("unReal enginge Pro")
console.log(juanito)


//Prototypes with class syntax

class Student2 {
    constructor({name, age, approvedCourses = [], email, facebook, instagram}){
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = email;
        this.facebook = facebook;
        this.instagram = instagram;
    }

    passCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}
const billgates = new Student2({
    email: "bill.com", 
    age: 60, 
    name: "bill gates", 
    approvedCourses: ['entrepreneur 101']
})
console.log(billgates)
billgates.passCourse("business 1010")
console.log(billgates)

//-----

const johnny = {
    name: "Johnny",
    username: "johnnys",
    points: 200,
    socialMedia: {
        twitter: "twitter",
        facebook: "facebook"
    },
    approvedCourses: [
        "business Course",
        "programming 101",
    ],
    learningPaths: [
        {
            name: 'Web development school',
            courses: ["HTML", "CSS", "JAVASCRIPT"]
        },
        {
            name: "Gaming School",
            courses: ["Unreal Engine"," C++", "Game design"]
        }
    ]
}

const miguel = {
    name: "miguelit",
    username: "miguelito21",
    points: 200,
    socialMedia: {
        twitter: "twitter",
        facebook: "facebook"
    },
    approvedCourses: [
        "business data",
        "entrepreneur 101",
    ],
    learningPaths: [
        {
            name: 'Web development school',
            courses: ["HTML", "CSS", "JAVASCRIPT"]
        },
        {
            name: "business School",
            courses: ["business 101", " Game design"]
        }
    ]
}