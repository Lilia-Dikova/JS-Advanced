function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', createTask);

    let open = document.querySelector('section:nth-child(2) div:nth-child(2)')
    
    function createTask (ev) {
        ev.preventDefault();ßß

        let article = document.createElement('article');
        let hNew = document.createElement('h3');
        hNew.textContent = task.value;
        article.appendChild(hNew);
        let pNew = document.createElement('p')
        pNew.textContent = `Description: ${description.value}`;
        article.appendChild(pNew);
        let pNew2 = document.createElement('p')
        pNew2.textContent = `Due Date: ${dueDate.value}`
        article.appendChild(pNew2);
        let divNew = document.createElement('div');
        divNew.classList.add ("flex")
        let btnStart = document.createElement('button');
        btnStart.classList.add ("green")
        article.appendChild(divNew);
        btnStart.textContent = "Start";
        divNew.appendChild(btnStart)
        let btnDelete = document.createElement('button')
        btnDelete.classList.add ("red")
        btnDelete.textContent = "Delete";
        divNew.appendChild(btnDelete)

        let btnFinish = document.createElement('button');
        btnFinish.classList.add ("orange")
        btnFinish.textContent = "Finish";
        open.appendChild(article);
        

        btnDelete.addEventListener("click", deleteInfo);
        btnStart.addEventListener("click", startTask);
        btnFinish.addEventListener("click", finishTask)

        function deleteInfo (ev) {
        ev.target.parentElement.parentElement.remove();
        }

        function startTask () {
            btnStart.remove();
            divNew.appendChild(btnFinish);
            document.getElementById('in-progress').appendChild(article)
        }
        function finishTask() {
            divNew.remove()
            let finishEl = document.querySelector('section:nth-child(4) div:nth-child(2)')
            finishEl.appendChild(article)
        }
    }
}
