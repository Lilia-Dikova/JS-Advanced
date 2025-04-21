// function search() {

//   let towns = document.getElementById("towns")
//   let searchField = document.getElementById("searchText").value

//   //let list = document.getElementById("items");

//     let items = Array.from(towns.children);
//     console.log(searchField)

//     for (const item of items) {
//       if (item.textContent.includes(searchField)) {
//          item.classList.add ("Select")
//       }

//     }


// }


function search() {
   towns = Array.from(document.querySelectorAll('ul#towns>li'));
   searchText = document.querySelector('input#searchText').value;
   resultDiv = document.querySelector('div#result');

   let matches = 0;
   towns.forEach(townLiElement => {
      let townName = townLiElement.textContent;
      if (searchText && townName.indexOf(searchText) >= 0) {
         townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
         debugger
      }
   });
   resultDiv.textContent = `${matches} matches found`;
}
