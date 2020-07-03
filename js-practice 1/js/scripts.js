var clickCount = 0;

const linkToClick = document.querySelector("a")

linkToClick.addEventListener("click",function(event){
        console.log("script works");
        clickCount ++;

        if (clickCount < 4)
        {
            console.log("You will have to click the link" + (4 - clickCount) + "more times before you get redirected");
            event.preventDefault();
        }
        else 
        {
            console.log("you should be redirected now");
        }

});