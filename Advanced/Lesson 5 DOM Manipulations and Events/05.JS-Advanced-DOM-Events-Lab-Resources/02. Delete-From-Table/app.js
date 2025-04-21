function deleteByEmail() {
    let emailList = Array.from(document.querySelectorAll('td:nth-child(2)'))
    let input = (document.querySelector("input[name='email']" ));

    for (const td of emailList) {
        if (td.textContent == input.value) {
            td.parentNode.remove()
            document.getElementById("result").textContent = "Deleted"
            return;
        }
    }
    document.getElementById('result').textContent = "Not found.";
}
