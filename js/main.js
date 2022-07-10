
var time = 0;
var hover = 0;
var out = 0;
let merda = 0;
var interval;


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

        var value=50;//global variable
        b.onmouseover = (e) => {



            var startTime = Date.now();

            interval = setInterval(function() {
                var elapsedTime = Date.now() - startTime;
                document.querySelector('.merda').innerHTML = (elapsedTime / 1000).toFixed(3);
                merda = (elapsedTime / 1000).toFixed(3);
            }, 100);





            setTimeout(() => {
                e.target.firstElementChild.innerHTML =  e.target.getAttribute('data-link-attribute');
                e.target.firstElementChild.style.display = 'block'
            }, 300)





            e.target.firstElementChild.addEventListener('click',function(){

                if(e.target.getAttribute('data-destination-attribute') === 'top') {

                    window.scrollTo({ top: 0, behavior: 'smooth' });

                } else {

                    window.open(e.target.getAttribute('data-destination-attribute'),'_blank');
                }

            });
        };

        b.onmout = (e) => {

            clearInterval(interval)

            //document.querySelector('.merda').innerHTML = " Show hover time: " + getOutTime() + 'ms';





            e.target.firstElementChild.innerHTML = ''
            setTimeout(() => {
                e.target.firstElementChild.style.display = 'none'
            }, 300);


        };


    });
}

getArrowsContent();