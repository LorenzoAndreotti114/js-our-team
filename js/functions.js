function cardStamper (array) {
    for (x = 0; x < array.length; x++) {
        console.log(array[x]["username"]);
        console.log(array[x]["role"]);
        console.log(array[x]["photo"]);
        console.log("---------------");

        document.getElementById("innerContainer").innerHTML += 

        `

        <div class="card">
        <div class="top-card">
            <img src=" ./img/${objectArray[x]["photo"]} " alt="">
        </div>

        <div class="bottom-card">
            <h2>${objectArray[x]["username"]}</h2>

            <div>${objectArray[x]["role"]}</div>
        </div>
        </div>


        `
    }
}