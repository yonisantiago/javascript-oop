class Comment {
    constructor({
        content,
        studentName,
        studentRole = "student",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0
    }



    post(){
        console.log(this.studentName + " (" + this.studentRole + ")")
        //Elon (student)
        console.log(this.likes + " likes")
        // 0 likes 
        console.log(this.content)
        //loved the course
    }

}








function videoPlay(id){
    const secretUrl = 'https://ultrasecret.com/' +id;
    console.log('video is playing from ' + secretUrl);
}

function videoPause(id){
    const secretUrl = 'https://ultrasecret.com/' +id;
    console.log('video is paused from ' + secretUrl);
}

 class PlatziClass {
    constructor({name, videoId}){
        this.name = name;
        this.videoId = videoId;
    }

    play(){
        videoPlay(this.videoId);
    }
    pause(){
        videoPause(this.videoId);
    }
}


//instancias studiante, learningPath
class Student{
    constructor({
        name, 
        email, 
        username, 
        twitter = undefined,
        instagram = undefined, 
        fb = undefined,
        points = 0,
        approvedCourses = [], 
        learningPaths = []
    }){
        this.points = points
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia={
            twitter,
            instagram,
            fb
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    }

    postComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        })
        comment.post()
    }

}
//Free student class
class FreeStudent extends Student {
    constructor(props){
        super(props)
    }
    approveCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Sorry" + this.name + " you only can watch free courses")
        }
    }
}
//Basic student class
class BasicStudent extends Student {
    constructor(props){
        super(props)
    }
    approveCourse(newCourse) {
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Sorry " + this.name + " you cannot take english courses")
        }
    }
}
//Expert student class
class ExpertStudent extends Student {
    constructor(props){
        super(props)
    }
    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
}
//Teacher 
class TeacherStudent extends Student {
    constructor(props){
        super(props)
    }
    
    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }

    postComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher"

        })
        comment.post()
    }


}

//Courses
class Course{
    constructor({
        id, 
        name, 
        teacher, 
        lessons =[],
        isFree = false,
        lang = "spanish"
    }){
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.isFree = isFree;
        this.lang = lang;

    }
    //getter/setter 
    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

}


////Courses creating
const html101 =  new Course({
    id:1, 
    name:"html 101", 
    teacher: "jeff bezos", 
    lessons: ['html tags', 'syntax', "html5"],
    isFree: true,
});

const css101 = new Course({
    id:2, 
    name:"css 101", 
    teacher: "bill bezos", 
    lessons: ['css tags', 'syntax', "css3"],
    lang: "english",
    
});

const javascript101 = new Course({
    id:3, 
    name:"javascript 101", 
    teacher: "elon bezos", 
    lessons: ['javascript basis', 'syntax', "es6"]


});
const bigData = new Course({
    id:1, 
    name:"big data 101", 
    teacher: "jeff bezos", 
    lessons: ['data science', 'syntax', "statistics"]
});
const math101 = new Course({
    id:2, 
    name:"mathfor data 101", 
    teacher: "bill bezos", 
    lessons: ['machine learnig ', 'syntax',]
});
const python101 = new Course({
    id:3, 
    name:"python 101", 
    teacher: "elon bezos", 
    lessons: ['python basis', 'syntax', "ai python"],
    lang: "english"
});
const videoGames101 = new Course({
    id:1, 
    name:"videogames dev 101", 
    teacher: "jeff bezos", 
    lessons: ['graphics tags', 'syntax', "render"]
});
const unrealEngines101 = new Course({
    id:3, 
    name:"unreal engine 101", 
    teacher: "elon bezos", 
    lessons: ['unreal engine basis', 'tools', "templates"]
})

videoGames101.name = "VideoGames 101";

//Learning Paths
class learningPath{
    constructor({id, schoolName, courses = []}){
        this.id = id;
        this.schoolName = schoolName;
        this.courses = courses;
    }
    addCourses(course) {
        this.courses.push(course)
    }
}



//creating 3 new learning paths
const webSchool = new learningPath({
        id: 1,
        schoolName: "Web Development School",
        courses: [
           html101,
            css101,
            javascript101
        ]
});
const dataScienceSchool = new learningPath({
    id: 2,
    schoolName: "Data Science  School",
    courses: [
        bigData,
        math101,
        python101
    ]
});

const videoGameSchool = new learningPath({
    id: 3,
    schoolName: "Video Games School",
    courses: [
        videoGames101,
        unrealEngines101
    ]
});



const ronaldo = new FreeStudent({
    name: "Cristiano Ronaldo Bezos",
    username: "jeffb",
    email: "jeffb@gmail.com",
    fb: "@jeffbezos",
    learningPaths: [webSchool, dataScienceSchool]
})

const mark = new BasicStudent({
    name: "mark Zucker",
    username: "jeffb",
    email: "jeffb@gmail.com",
    fb: "@jeffbezos",
    points: 200,
    learningPaths: [videoGameSchool, dataScienceSchool]
})

const messi = new ExpertStudent({
    name: "Lionel Messi",
    username: "leo10",
    email: "bestgollie@gmail.com",
    fb: "@leomessi",
    points: 200,
    learningPaths: [videoGameSchool, dataScienceSchool]
});

const freddy = new TeacherStudent({
    name: "Freddy",
    username: "FreddyV",
    email: "freddy@gmail.com",
    
})

console.log(mark)
console.log(ronaldo)
console.log(messi)
console.log(freddy)

//polymorphism 
//