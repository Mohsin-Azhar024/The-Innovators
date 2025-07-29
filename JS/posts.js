console.log("This is my posts page");


let url = "https://kontests.net/api/v1/all";

let contest = fetch(url);
contest.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value);

    let inner = "";
    for(items in value){
        console.log(value[items]);
        inner = inner + 
        `<div class="card" style="width: 22rem; padding: 20px; margin: 20px; display:flex; justify-content: space-around">
            <img src= "https://source.unsplash.com/random/300x300/?coding" class="card-img-top" alt="Competition">
            <div class="card-body">
            <h5 class="card-title">${value[items].name}</h5>
            <p class="card-text">${value[items].site}</p>
            <p>The contest starts at ${value[items].start_time}</p>
            <p>The contest ends at ${value[items].end_time}</p>
            <a href="${value[items].url}" class="btn btn-primary" target = "_blank">Get Register</a>
            </div>
        </div> `
    }

    let a = document.getElementById("cardapi").innerHTML = inner;

});
