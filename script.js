const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const dataTarget = +counter.getAttribute("data-target");
        const dataInitial = +counter.innerHTML;
        const inc = dataTarget / 100;
        if(dataInitial < dataTarget) {
            counter.innerHTML = `${Math.round(dataInitial + inc)}`;
            setTimeout(updateCounter, 10);
        }else {
            counter.innerHTML = dataTarget;
        }
    }
    
    updateCounter();
})