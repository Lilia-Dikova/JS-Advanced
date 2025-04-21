function attachEventsListeners() {
     console.log('TODO:...');

     let allFields = Array.from(document.querySelectorAll('div'));
     

     for (const field of allFields) {
        let button = field.querySelector('input[type=button]');
        button.addEventListener('click', calculate)
        
     }
     function calculate (ev) {
        let info = ev.target.parentNode.querySelector('input[type=text]');

        convertAll (info)        
     }
     
     function convertAll (info) {
        let value = Number (info.value)
        let type = info.id;

        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds')


        console.log( type, value)
        if (type == "days") {

           hours.value = value * 24;
           minutes.value = Number (hours.value) * 60;
           seconds.value = Number (minutes.value) * 60;
            
        }
        if (type == "hours") {
         
            days.value = Number (hours.value) / 24;
            minutes.value = Number (hours.value) * 60;
            seconds.value = Number (minutes.value) * 60;
        }

        if (type == "minutes") {
         
            hours.value = Number (minutes.value) / 60;
            days.value = Number (hours.value) / 24 ;
            seconds.value = Number (minutes.value) * 60;
        }

        if (type == "seconds") {
         
            minutes.value  = Number (seconds.value) / 60;
            hours.value = Number (minutes.value) / 60;
            days.value = Number (hours.value) / 24 ;

        }
     }

}