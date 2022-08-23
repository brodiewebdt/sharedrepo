fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
        // Adds the JSON data to the bar chart spans
        const span = document.querySelectorAll("span");

        for (let i = 0; i < span.length; i++) {
            span[i].dataset.title = data[i].day;
            span[i].dataset.amount = "$" + data[i].amount;
            span[i].style.height = data[i].amount * 3 + "px";

            // Get the current day to show the correct day in the bar chart
            const day = new Date().getDay(); //returns 0 to 6
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            if (weekday[day].toLowerCase() === data[i].day) {
                span[i].classList.add("current-day");
            }
        }
    });
