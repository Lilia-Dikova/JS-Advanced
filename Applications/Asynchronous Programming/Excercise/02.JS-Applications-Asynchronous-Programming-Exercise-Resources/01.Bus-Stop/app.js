const stopNameRef = document.getElementById('stopName');
const busesRef = document.getElementById('buses');

async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    stopId.textContent = "";
    busesRef.innerHTML = "";

    try {
        const response = await fetch(url);
        const data = await response.json();

        stopNameRef.textContent = data.name;
        console.log(data)
        createItemList(Object.entries(data.buses))

    } catch (error) {
        stopNameRef.textContent = 'Error'
    }


    function createItemList(data) {
        for ([bus, time] of data) {
            let item = document.createElement('li');
            item.textContent = `Bus ${bus} arrives in ${time} minutes`
            busesRef.appendChild(item);
        }
    }
}