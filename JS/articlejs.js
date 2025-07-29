console.log("this is JS file");

let username = document.getElementById("name");
let comments = document.getElementById("comment");
let submit = document.getElementById("submit");
// console.log(name, comments, submit);

let form = document.getElementsByTagName("form")[0];

let a = submit.addEventListener("click", (e) => {
    e.preventDefault();
        
    if(username.value && comments.value){
        let h2 = document.createElement("h2");
        h2.classList.add("commentHead");
        h2.innerHTML = username.value;
        form.after(h2);
        
        let p = document.createElement("p");
        p.classList.add("commentpara")
        p.innerHTML = comments.value;
        h2.after(p);

        username.value = "";
        comments.value = "";
    }
});

