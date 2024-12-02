function getJoke() {
    var request = new XMLHttpRequest();
    //use this end point to get one joke
    request.open("GET", "https://official-joke-api.appspot.com/random_joke");
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);
        console.log(data.setup);
        console.log(data.punchline);
        document.getElementById("setup").textContent = data.setup;
        document.getElementById("punchline").textContent = data.punchline;
    }

    request.send();

}