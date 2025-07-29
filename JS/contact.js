console.log("This is contact page JS");

console.log("Form validation in JS");

let userName = document.getElementById("contactname");
let email = document.getElementById("mail");
let useraddress = document.getElementById("address");
let phone = document.getElementById("phone");
let course = document.getElementById("course");
let submit = document.getElementById("submitbtn");

// console.log(userName, email, useraddress, phone, course, submit);

let testName;
let testMail;
let testAddress;
let testPhone;
let testCourse;
let testPackage;


userName.addEventListener("blur", () => {
    let str = userName.value;
    let regex = /^\w[a-zA-Z]{3,15}/;

    if(regex.test(str)){
        testName = true;
        console.log("Hello true gg");
        document.getElementById("isEmptyName").innerHTML = "";
    }
    
    else{
        testName = false;
        document.getElementById("isEmptyName").innerHTML = "Started letter must be Word";
        
    }
    
});

email.addEventListener("blur", () => {
    let str = email.value;
    let regex = /[a-zA-Z0-9]{7,16}@[a-zA-Z.]{3,10}/;
    
    if(regex.test(str)){
        testMail = true;
        document.getElementById("isEmptyMail").innerHTML = "";
    }
    
    else{
        testMail = false;
        document.getElementById("isEmptyMail").innerHTML = "Enter the correct Mail";
    }
    
});


useraddress.addEventListener("blur", () => {
    let str = useraddress.value;
    let regex = /[a-zA-Z0-9#-_. ]{12,50}/;
    
    if(regex.test(str)){
        testAddress = true;
        document.getElementById("isEmptyAddress").innerHTML = "";
    }
    
    else{
        testAddress = false;
        document.getElementById("isEmptyAddress").innerHTML = "Must contains atleast 12 words";
    }
    
});


phone.addEventListener("blur", () => {
    let str = phone.value;
    let regex = /^\+[0-9]{10,14}/;
    
    if(regex.test(str)){
        testPhone = true;
        document.getElementById("isEmptyPhone").innerHTML = "";
    }
    
    else{
        testPhone = false;
        document.getElementById("isEmptyPhone").innerHTML = "Number must be +923371733897";
    }
    
});



course.addEventListener("blur", () => {
    let str = course.value;
    let regex = /\w[a-zA-Z]{3,25}/;
    
    if(regex.test(str)){
        testCourse = true;
        document.getElementById("isEmptyCourse").innerHTML = "";
    }
    
    else{
        testCourse = false;
        document.getElementById("isEmptyCourse").innerHTML = "Must contain only Aplahbets";
    }

    
});



submit.addEventListener("click", (e) => {
    let valid = false;
    
    if(document.getElementById("course1").checked){
        valid = true;
    }
    
    else if(document.getElementById("course2").checked){
        valid = true;
    }
    
    else if(document.getElementById("course3").checked){
        valid = true;
    }
    
    
    if(valid){
        testPackage = true;
        document.getElementById("isEmptyPackage").innerHTML = "";
    }
    
    else{
        e.preventDefault();
        testPackage = false;
        document.getElementById("isEmptyPackage").innerHTML = "Must select a Package";
    }
    
});



submit.addEventListener("click", () => {
    let isEmpty = false;
    if(userName.value == '' || email.value == '' ||  useraddress.value == '' || phone.value == '' ||course.value == '' || 
    testName == false || testMail == false || testAddress == false || testPhone == false || testCourse == false || testPackage == false){
        isEmpty = false;
    }

    else{
        isEmpty = true;
    }

    if(!isEmpty){
        document.getElementById('isEmpty').innerHTML = "Plzz fill all the fields Correctly";
    }
    
    else{
        document.getElementById('isEmpty').innerHTML = "Your form is submitted successfully";
        document.getElementById("isEmptyName").innerHTML = "";
        document.getElementById("isEmptyMail").innerHTML = "";
        document.getElementById("isEmptyAddress").innerHTML = "";
        document.getElementById("isEmptyPhone").innerHTML = "";
        document.getElementById("isEmptyCourse").innerHTML = "";
        document.getElementById("isEmptyPackage").innerHTML = "";   
        userName.innerHTML = "";
        email.innerHTML = "";
        useraddress.innerHTML = "";
        phone.innerHTML = "";
        course.innerHTML = "";
    }
    
    
});


document.getElementById("resetbtn").addEventListener("click", () => {
    document.getElementById("isEmpty").innerHTML = "";
    document.getElementById("isEmptyPackage").innerHTML = "";
    userName.innerHTML = "";
    email.innerHTML = "";
    useraddress.innerHTML = "";
    phone.innerHTML = "";
    course.innerHTML = "";
    document.getElementById("isEmptyName").innerHTML = "";
    document.getElementById("isEmptyMail").innerHTML = "";
    document.getElementById("isEmptyAddress").innerHTML = "";
    document.getElementById("isEmptyPhone").innerHTML = "";
    document.getElementById("isEmptyCourse").innerHTML = "";
    document.getElementById("isEmptyPackage").innerHTML = "";
});

