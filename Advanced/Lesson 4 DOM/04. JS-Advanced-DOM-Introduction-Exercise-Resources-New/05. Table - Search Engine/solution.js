function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchInput = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      let searchText = searchInput.value;
      console.log(searchText);

      for (const tableRow of tableRows) {
         let tableData = Array.from(tableRow.querySelectorAll("td"));
         for (const data of tableData) {
            if (data.textContent.includes(searchText)) {
               tableRow.classList.add("select");
               break;
            } else {
               tableRow.classList.remove("select")
            }
         }
      }

      searchInput.value = ""
      
   }
}