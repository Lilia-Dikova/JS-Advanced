function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', createTask);

    let open = document.querySelector('section:nth-child(2) div:nth-child(2)')
    
    function createTask (ev) {
        ev.preventDefault();

        let art = document.createElement('article');
        open.appendChild(art);
        let hNew = document.createElement('h3');
        hNew.textContent = task.value;
        art.appendChild(hNew);
        let pNew = document.createElement('p')
        pNew.textContent = description.value;
        art.appendChild(pNew);
        let pNew2 = document.createElement('p')
        pNew2.textContent = dueDate.value;
        art.appendChild(pNew2);
        let divNew = document.createElement('div');
        divNew.classList.add ("flex")
        let btnStart = document.createElement('button');
        btnStart.classList.add ("green")
        art.appendChild(divNew);
        btnStart.textContent = "Start";
        divNew.appendChild(btnStart)
        let btnDelete = document.createElement('button')
        btnDelete.classList.add ("red")
        btnDelete.textContent = "Delete";
        divNew.appendChild(btnDelete)

        let btnFinish = document.createElement('button');
        btnFinish.classList.add ("orange")
        btnFinish.textContent = "Finish";
        

        btnDelete.addEventListener("click", deleteInfo);
        btnStart.addEventListener("click", startTask);
        btnFinish.addEventListener("click", finishTask)

        function deleteInfo (ev) {
        ev.target.parentElement.parentElement.remove();
        }

        function startTask () {
            btnStart.remove();
            divNew.appendChild(btnFinish);
            document.getElementById('in-progress').appendChild(art)
        }
        function finishTask() {
            btnDelete.remove();
            btnFinish.remove()
            let finishEl = document.querySelector('section:nth-child(4) div:nth-child(2)')
            finishEl.appendChild(art)
        }


    }
}
