
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeBorderColor() {
    const container = document.querySelector('.container');
    setInterval(() => {
        container.style.borderColor = getRandomColor(); 
    }, 1000); 
}


document.addEventListener("DOMContentLoaded", function() {
    changeBorderColor(); 
});


document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".input");
    const buttons = document.querySelectorAll(".bttn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "=") {
                try {
                   
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = "Error";
                }
            } else if (value === "C") {
 
                inputField.value = "";
            } else {
             
                inputField.value += value;
            }
        });
    });
});

