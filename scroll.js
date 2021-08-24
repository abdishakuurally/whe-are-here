window.addEventListener ('scroll', reveil);

function reveil(){
    var reveil = document.querySelectorAll('.reveil');
    for  ( var i = 0; i <reveil.length; i++)  {
        
        var windowheight = window.innerHeight;
        var reveiltop = reveil[i].getBoundingClientRect().top;
        var reveilpoint = 140;



        if  (reveiltop < windowheight - reveilpoint ){
            reveil[i].classList.add('active');
        }
        else{ 
            reveil[i].classList.remove('active')
        }
    }
}