function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = Array.from(JSON.parse(document.querySelector("textarea").value));
      let bestInfo = document.querySelector("#bestRestaurant p");
      let workersInfo = document.querySelector("#workers p")

      let result = {};
      
      for (let i = 0; i< input.length; i ++ ) {
         let [restName, workers] = input[i].split(' - ');
         let workersArr = workers.split(", ")
        
         if (!result.hasOwnProperty(restName)) {
            result[restName] = {
               avgSalary: 0,
               bestSalary:0,
               employee: []
            };
         }
            for (let l = 0; l < workersArr.length; l ++) {


            let [employeeName, salary] = workersArr[l].split(" ");

            let ok = true;

            for(var n = 0; n < result[restName].employee.length; n++) {
               if (result[restName].employee[n].name === employeeName) {
                  result[restName].employee[n].salary = Number(salary);
                  ok = false;
               } 
           }
           if (ok) {
            result[restName].employee.push ({
               name: employeeName,
               salary: Number(salary)
            })
         }

         bestSalary(result[restName])

         }

      }

      let best = findBestRest(result)
      appendText(best)
      appendWorkerInfo(best[1].employee)

      best[1].employee.sort((a,b) => b.salary - a.salary);

      function findBestRest (restaurants) {
         return Object.entries(restaurants).sort((a,b) =>  { 
            return b[1].avgSalary - a[1].avgSalary
         })[0];
         }

         function appendText (data) {
            bestInfo.textContent =  `Name: ${data[0]} Average Salary: ${ (best[1].avgSalary).toFixed(2)} Best Salary: ${ (best[1].bestSalary).toFixed(2)}`;

         }
         function appendWorkerInfo (data) {
            let info = "";
            data.forEach(element => {
               info += (`Name: ${element.name} With Salary: ${element.salary} `)
               workersInfo.textContent = info;
            });
         }

         function bestSalary (restaurant) {
            let sumOfSalary = 0;
            let bestSalary = 0;

            restaurant.employee.forEach(employee => {
               sumOfSalary += employee.salary;
               if (bestSalary < employee.salary) {
                  bestSalary = employee.salary;
               }
            })

            restaurant.bestSalary = bestSalary;
            restaurant.avgSalary = sumOfSalary / restaurant.employee.length
         }
      }
   
}
   


      



// ["PizzaHut - Peter

// 500, George 300, Mark

// 800",

// "TheLake - Bob 1300,

// Joe 780, Jane 660"]