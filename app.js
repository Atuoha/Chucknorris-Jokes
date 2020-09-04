const form = document.getElementById('form');
const ul = document.querySelector('.jokes');
const inputField = document.getElementById('number');

inputField.addEventListener('keyup',function(){
  const input = document.getElementById('number').value;
    fetchJoke(input);
})

function fetchJoke(input){
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random//${input}`,true);
  xhr.onload = function(){
    if(this.status === 200){
        const responses = JSON.parse(this.responseText);
        let output = '';
          if(responses.type === 'success'){
              responses.value.forEach(function(response){
                output += `
                <li>
                  - ${response.joke}
                <li>
                `
              })
          }else{
            output += '<li>404! Error was encountered</li>'
          }
        ul.innerHTML = output;
    }
  }

  xhr.send();
  input = ''
}

