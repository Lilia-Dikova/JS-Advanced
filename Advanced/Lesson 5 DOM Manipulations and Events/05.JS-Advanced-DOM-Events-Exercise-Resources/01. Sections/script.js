function create(words) {

   const content = document.getElementById("content");

   for (const word of words) {
      let divElement = document.createElement('div');
      divElement.addEventListener('click', showText);


      let p = document.createElement('p');
      p.textContent = word;
      p.style.display='none';

      divElement.appendChild(p);
      content.appendChild(divElement);

      
      function showText (ev) {
         p.style.display='block';
      }
}
}