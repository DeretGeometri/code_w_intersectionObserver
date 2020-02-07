let suspect = document.querySelector(`.section_suspect`);

function callback(entries){
    entries.forEach(entry => {
       if(entry.isIntersecting){
         entry.target.style.setProperty(`animation`, `animasi 2s ease-in`);
       }
       else{
        entry.target.style.setProperty(`animation`, `none`);
       }
    });
}
let observer = new IntersectionObserver(callback);

observer.observe(suspect);
