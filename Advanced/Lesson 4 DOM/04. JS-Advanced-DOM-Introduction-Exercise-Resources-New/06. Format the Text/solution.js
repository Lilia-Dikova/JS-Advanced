function solve() {

  let inputText = document.getElementById("input").value;
  let output = document.getElementById('output');
  
  let input = inputText
  .split(".")
  .filter((p) => p.length > 0);

  while (input.length > 0) {
    let arr = [];
    for (let i = 0; i < input.length; i+=3) {
      arr.push(input[i])
    }
    debugger
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
    input.splice(0,3)
  }
}