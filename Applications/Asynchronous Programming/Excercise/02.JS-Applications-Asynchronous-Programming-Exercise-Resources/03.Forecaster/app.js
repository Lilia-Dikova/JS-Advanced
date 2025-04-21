let input = document.getElementById('location');
let btnSubmit = document.getElementById('submit');
let forecastDiv = document.getElementById('forecast');
let current = document.getElementById('current');
let upcoming = document.getElementById('upcoming');

function createNewElement(type, value, classType, innerEl) {
    let element = document.createElement(type);
    element.textContent = value;
    let isOk = true;
    if (classType) {
        if (typeof (classType) == 'object') {
            element.classList.add(...classType)
        }
        else {
            element.classList.add(classType)
        }
    }
    if (innerEl) {
        element.innerHTML = innerEl;
    }
    return element;
}

function getSymbol(condition) {
    let symbol = ''
    switch (condition) {
        case 'Sunny': symbol = '&#x2600'; break;
        case 'Partly sunny': symbol = '&#x26C5'; break;
        case 'Overcast': symbol = '&#x2601'; break;
        case 'Rain': symbol = '&#x2614'; break;
        case 'Degrees': symbol = '&#176'; break;
    }
    return symbol;
}

function createNewSpan(object) {
    let span = createNewElement('span', '', 'upcoming');
    span.appendChild(createNewElement('span', '', 'symbol', getSymbol(object.condition)));
    span.appendChild(createNewElement('span', `${object.low}°/${object.high}°`, 'forecast-data'));
    span.appendChild(createNewElement('span', object.condition, 'forecast-data'));

    return span;
}

async function attachEvents() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    btnSubmit.addEventListener('click', onSubmit);

     async function onSubmit() {
        const response = await fetch(url);
        const data = await response.json();

        forecastDiv.style.display = 'block';
        let code = '';
        for (const key of data) {
            if (key.name == input.value) {
                code = key.code;
                await addContent(code);
            }
        }
        if (code == "") {
            forecastDiv.textContent = 'Error'
        }
    }

    async function addContent(code) {
        const urlCurrentdata = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const url3day = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        let currConditions = await fetch(urlCurrentdata);
        let currCondData = await currConditions.json();

        let upcomingCond = await fetch(url3day);
        let upcomingCondData = await upcomingCond.json();

        let divForecast = createNewElement('div', '', 'forecasts');
        current.appendChild(divForecast);

        let forecastSymbol = createNewElement('span', '', ['condition', 'symbol'], getSymbol(currCondData.forecast.condition));
        divForecast.appendChild(forecastSymbol)

        let condition = createNewElement('span', '', 'condition');
        divForecast.appendChild(condition);

        condition.appendChild(createNewElement('span', currCondData.name, 'forecast-data'));
        condition.appendChild(createNewElement('span', `${currCondData.forecast.low}°/${currCondData.forecast.high}°`, 'forecast-data'));
        condition.appendChild(createNewElement('span', currCondData.forecast.condition, 'forecast-data'));

        let divForecastInfo = createNewElement('div', '', 'forecast-info');
        upcoming.appendChild(divForecastInfo);

        for (let i = 0; i < 3; i++) {
            divForecastInfo.appendChild(createNewSpan(upcomingCondData.forecast[i]))
        }
    }
}
attachEvents();