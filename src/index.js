const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event)=>{
    event.preventDefault();
                                                                                                    // const display = document.getElementById('searchByID').value
                                                                                                    // console.log(display)
    const input = document.querySelector('input#searchByID'); 
    fetch(`http://localhost:3000/movies/${input.value}`)
   .then (response => response.json())
   .then (data => {                                                                                   //   .then (function(data){
                                                                                                      //     console.log(data)
                                                                                                      //   })
                                                                                                     // }
   const title = document.querySelector('section#movieDetails h4');
   const summary = document.querySelector('section#movieDetails p');
   title.innerText = data.title;
   summary,innerText = data.summary;

   } );                                                                                             
});
};

document.addEventListener('DOMContentLoaded', init);

