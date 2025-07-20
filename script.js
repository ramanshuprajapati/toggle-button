let getBtn = document.querySelector('#toggleMode');

let themes = localStorage.getItem('theme');


if(themes == "dark"){
       document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode'); 
    }




getBtn.addEventListener('click',function(){
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode')
        localStorage.setItem('theme',"light")
    }else{
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme',"dark")
    }
})
