let input = document.getElementById("pass")
let btn = document.getElementById("visible")

let input2 = document.getElementById("mail")
let btn2 = document.getElementById("clean")



btn.addEventListener( 'click', () =>{
    if ( input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
});

btn2.addEventListener( 'click', () =>{
    if ( input2.type === "email") {
        input2.value = ' '
    } else {
        input2.type = "email"
    }
});