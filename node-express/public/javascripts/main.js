var nameNode = document.querySelector("#name");
var animalNode = document.querySelector("#animal");
var submitNode = document.querySelector("#submit");
var outputNode = document.querySelector("#output");

function submitHandler(evt) {
    var postvars = {
        name: nameNode.value,
        animal: animalNode.value
    };

    // change the origin value here to something that works.
    // You can edit your hosts file to create custom domains
    var url = "http://otherdomain.tld/jsonpost";

    jsonpost(url, postvars, {callback: postHandler});
}

function postHandler(err, response) {
    if (err) {
        throw err;
    }

    response = JSON.parse(response);

    outputNode.innerHTML = "Server says \"" +
                           "Hey " + response.name + ", " +
                           response.message + "\".";

}

submitNode.addEventListener("click", submitHandler);