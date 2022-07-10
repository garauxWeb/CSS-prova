
var time = 0;
var hover = 0;
var out = 0;
let merda = 0;
var interval;
var elapsedTime = 0;


function getInTime() {
    hover = Date.now();
}

function getOutTime() {
    out = Date.now();
    time = out-hover;
    //document.querySelector('.merda').innerHTML = " Show hover time: " + time + 'ms';
    return time;

}

function getArrowsContent() {

    document.querySelectorAll(".right-slide-menu__element").forEach((b) => {

         b.addEventListener('mouseover',function (e){

             var startTime = Date.now();
             var counter = 0;

             elapsedTime = 0;

             interval = setInterval(function() {
                 elapsedTime = Date.now() - startTime;
                 counter = (elapsedTime);
                 counter = Number(counter)
                 document.querySelector('.merda').innerHTML =  counter;

                 if(counter >= 300) {

                         e.target.firstElementChild.innerHTML =  e.target.getAttribute('data-link-attribute');
                         e.target.firstElementChild.style.display = 'block'

                 }

             }, 100);


         });


        b.addEventListener('mouseout',function (e){

            clearInterval(interval)



            e.target.firstElementChild.innerHTML = ''
            setTimeout(() => {
                e.target.firstElementChild.style.display = 'none'
            }, 300);




        });


    });
}

getArrowsContent();