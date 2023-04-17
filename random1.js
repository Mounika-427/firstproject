let quoteele = document.getElementById("quote");
let authorele = document.getElementById("author");
let url = "http://api.quotable.io/random";
    let options = {
    method: "GET"
}


async function g(){
    try{
        await fetch(url, options)
        .then((response) => {
            return response.json()
        }).then((h) => {
            let m = h.content
            let s = h.author
            quoteele.textContent = m
            authorele.textContent = s
            
        })
        document.getElementById("second").style.display = "flex"
        document.getElementById("second").style.flexDirection = "column";
        document.getElementById("second").style.justifyContent = "center";
        document.getElementById("second").style.padding = "10px"
}catch(error){
    console.log(error)
}

}
button.onclick = function(){
    g()
}