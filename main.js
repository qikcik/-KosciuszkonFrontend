(()=>{

    const Memes = [
        {
            id: 0,
            url: "https://www.datavail.com/wp-content/uploads/2019/10/Week-4-winner.jpg",
        },
        {
            id: 1,
            url: "https://media.discordapp.net/attachments/902959930548551740/1073622766168854610/RDT_20221118_0140243950117114334951072.jpg",
        },
        {
            id: 2,
            url: "https://cdn.discordapp.com/attachments/805813146345275492/1070328764682207334/328043028_893135768729342_166255618862658111_n.png",
        },
        {
            id: 3,
            url: "https://cdn.discordapp.com/attachments/805813146345275492/1067039030916681788/image-6.png",
        },

    ];

    Memes.forEach(x => {
        document.querySelector(`main`).innerHTML += `<section><div><img src="${x.url}""></div></section>`;
    });

    const threshold = 0.2;

    const TransformLastElement = (value) => {
        document.querySelector(`section:first-of-type`).style.transform = `translate(${value*100}vw)`;
        if(Math.abs(value) > threshold) {
            document.querySelector(`section:first-of-type`).style.opacity = `${1 - (Math.abs(value) * 3)}`;
        }
    }

    GESTURE.swipe.onChange_delegates.push(TransformLastElement);

    GESTURE.swipe.onApply_delegates.push((value)=>{
        if(Math.abs(value) < threshold) {
            TransformLastElement(0);
            return;
        }

        document.querySelector(`section:first-of-type`).remove();

        // actual logic:
        const left = document.querySelectorAll(`section`);
        console.log(left);
        if(left.length < 3) {
            Memes.forEach(x => {
                document.querySelector(`main`).innerHTML += `<section><div><img src="${x.url}""></div></section>`;
            });
        }
    })
})();