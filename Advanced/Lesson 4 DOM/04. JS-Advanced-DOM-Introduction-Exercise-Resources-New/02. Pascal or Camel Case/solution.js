function solve() {
  let text = document.getElementById("text").value;
  text = text.toLowerCase()
  let command = document.getElementById("naming-convention").value;

  const toPascalCase = (text, trimSpace=false) => text.split(' ').map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase()).join("")
  function toCamelCase(str) {
        var arr= str.match(/[a-z]+|\d+/gi);
        return arr.map((m,i)=>{
          let low = m.toLowerCase();
          
          if (i!=0){
            low = low.split('').map((s,k)=>k==0?s.toUpperCase():s).join``}
            return low;
  }).join``;
}

let result = document.getElementById("result");

if (command == "Pascal Case") {
  result.textContent = toPascalCase(text)
} else if ( command == "Camel Case") {
  result.textContent = toCamelCase(text)
} else  {
  result.textContent = "Error!" }
}