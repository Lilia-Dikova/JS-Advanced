// function toggle() {

//      let buttonName = document.getElementsByClassName("button")[0].textContent;

//     if (buttonName == "More") {
//         document.getElementById('extra').style.display = 'block';
//         document.getElementsByClassName("button")[0].textContent = "Less";
//     } else {

//         document.getElementById('extra').style.display = 'none';
//         document.getElementsByClassName("button")[0].textContent = "More";
// }
// }

function toggle() {

    let el = document.getElementsByClassName("button")[0]
  
    let extra = document.getElementById("extra")
  
    extra.style.display = extra.style.display == "none" ? "block" : "none"
  
    el.textContent= el.textContent == "Less" ? "More" : "Less"
  
  }