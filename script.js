 const gameContainer = document.querySelector(".container"),
 userResult = document.querySelector(".user_result img"),
 cpuResult = document.querySelector(".cpu_result img"),
 result = document.querySelector(".result"),
 optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");


        let imageSrc = e.target.querySelector("img").src;//для отримання посилання на картинку
        userResult.src = imageSrc;//заміна картинки на варианті юзера

        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/rock.png", "images/scissors.png", "images/paper.png"];
        cpuResult.src = cpuImages[randomNumber];//рандомна заміна картинки ПК

        let cpuValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R", "P", "S"][index];

        // умова результатів гри
        let outcomes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PS: "Cpu",
            PR: "User",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };
        let outComeValue = outcomes[userValue + cpuValue]; 
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;// вивод переможця на єкран
    }, 2000);
    });
})