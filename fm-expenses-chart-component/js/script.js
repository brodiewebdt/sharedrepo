fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        const span = document.querySelectorAll("span");
        console.log(span);

        for (let i = 0; i < span.length; i++) {
            span[i].dataset.title = data[i].day;
            span[i].dataset.amount = "$" + data[i].amount;
            span[i].style.height = data[i].amount * 3 + "px";

            const day = new Date().getDay(); //return 0 to 6
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            if (weekday[day].toLowerCase() === data[i].day) {
                span[i].classList.add("current-day")
            }
        }

        let total = 0;

        for (let x = 0; x < data.length; x++) {
            total += data[x].amount;
            console.log(total / 100);
        }
    });
