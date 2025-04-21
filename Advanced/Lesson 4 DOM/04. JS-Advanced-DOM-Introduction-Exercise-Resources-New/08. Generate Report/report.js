function generateReport() {
    let commandsArr = document.getElementsByTagName('th');
    let info = Array.from(document.querySelectorAll("td"));

    let checkedList = [];

    if (commandsArr[0].textContent.checked){
        console.log("hi")
    }


        for (let i = 0; i < commandsArr.length; i ++){
            let h1 = commandsArr[i].textContent.toLowerCase().trim();
            if (commandsArr[i].querySelector('input').checked) {
                checkedList.push ({
                    [h1]:i
            })
        }
    }
            let test = info[0];
            
            
            let finale = [];

            for (let i = 0; i < checkedList.length; i ++) {
                for (const key in checkedList[i]) {
                    let n = 0;
                    for (let l = checkedList[i][key]; l < info.length+checkedList[i][key]; l +=7) {
                        if (i == 0 ){
                            finale.push ({
                         [key]: info[l].textContent
                        })
                    } else {
                        finale[n][key] = info[l].textContent
                        n++;
                    }
                    }
                }
            }
            document.getElementById('output').textContent = JSON.stringify(finale);
        }
