function validate() {

    const pattern = new RegExp(/^\S+@\S+\.\S+$/gm);

    let input = document.getElementById('email');

    input.addEventListener('change', addMail)


    function addMail (ev) { 
        ev.target.classList.remove('error');
        if(!pattern.test(ev.target.value)){
            ev.target.classList.add('error');
        }
    }
}