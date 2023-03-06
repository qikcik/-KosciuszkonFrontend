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

    const createMemeFromDbEntry = (entry) => {
        let element = document.createElement("single-mem");
        element.setAttribute("id",entry.id);
        element.setAttribute("src",entry.url);
        document.querySelector(`main`).appendChild(element);
    };

    Memes.forEach(x => {
        createMemeFromDbEntry(x);
    });

    const threshold = 0.2;

    const response = {
        liked: [],
        disliked: [],
    }

    const TransformLastElement = (value) => {
        document.querySelector(`single-mem:first-of-type`).style.transform = `translate(${value*100}vw)`;
        if(Math.abs(value) > threshold) {
            document.querySelector(`single-mem:first-of-type`).style.opacity = `${1 - (Math.abs(value) * 3)}`;
        }
        if(value == 0)
        {
            document.querySelector(`single-mem:first-of-type`).style.opacity = `1`;
        }
    }

    GESTURE.swipe.onChange_delegates.push(TransformLastElement);

    GESTURE.swipe.onApply_delegates.push((value)=>{
        if(Math.abs(value) < threshold) {
            TransformLastElement(0);
            return;
        }
        const element = document.querySelector(`single-mem:first-of-type`);
        if(value > 0)
        {
            response.liked.push(element.id);
        }
        else
        {
            response.disliked.push(element.id);
        }
        console.log(response);

        element.remove();

        // actual logic:
        const left = document.querySelectorAll(`single-mem`);
        if(left.length < 3) {
            Memes.forEach(x => {
                createMemeFromDbEntry(x);
            });
        }
    })
})();