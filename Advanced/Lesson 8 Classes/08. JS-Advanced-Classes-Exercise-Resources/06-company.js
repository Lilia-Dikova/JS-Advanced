class Company {
    constructor () {
        this.departments = {};
    }

    addEmployee (...params) {
        if (params.some(x => !x)) {
            throw new Error("Invalid input!");
        }
        let [name, salary, position, department] = params;

         salary = Number (salary);

         if (!(salary && salary > 0))  {
            throw new Error("Invalid input!");
         }

         if (!this.departments[department]) {
            this.departments[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            };
         }
         this.departments[department].employees.push({name,salary,position});
         this._updateDeprtment(department,salary);
         return `New employee is hired. Name: ${name}. Position: ${position}`
    }


    _findBestDepartment () {
        return Object.entries(this.departments).sort((a,b) => b[1].avg - a[1].avg)[0]
    }
    _updateDeprtment (department, salary) {
       let current = this.departments[department];
       current.sumSalary += salary;
       current.avg = current.sumSalary / current.employees.length;
    }
    bestDepartment () {
        let best = this._findBestDepartment();
        let buff =  `Best Department is: ${best[0]}\n`;
        buff +=`Average salary: ${best[1].avg.toFixed(2)}\n`

        best[1].employees.sort((emp1, emp2) => {
            return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name);
        }).forEach(emp => { buff += `${emp.name} ${emp.salary} ${emp.position}\n`
            
        });

        return buff.trim();
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources")

console.table(c.bestDepartment());