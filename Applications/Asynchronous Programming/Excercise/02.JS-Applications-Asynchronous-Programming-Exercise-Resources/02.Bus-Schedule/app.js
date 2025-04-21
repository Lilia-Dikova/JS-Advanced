function solve() {

    let info = document.querySelector("#info span");
    const stop = {
        currentStop: '',
        nextStop: 'depot'
    }

    let btnArrive = document.getElementById('arrive');
    let btnDepart = document.getElementById('depart');
    const url = `http://localhost:3030/jsonstore/bus/schedule/`

    async function depart() {

        try {
            const response = await fetch(url + stop.nextStop);
            const data = await response.json();
            stop.currentStop = data.name;
            stop.nextStop = data.next;
            info.textContent = `Next stop ${stop.currentStop}`
            btnDepart.disabled = true;
            btnArrive.disabled = false;
        } catch (error) {
            info.textContent = 'Error';
            btnDepart.disabled = true;
            btnArrive.disabled = true;
        }
    }


    function arrive() {

        info.textContent = `Arriving at ${stop.currentStop}`
        btnDepart.disabled = false;
        btnArrive.disabled = true;
    }

    return {
        depart,
        arrive
    };
}


let result = solve();