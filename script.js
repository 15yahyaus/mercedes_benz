const buttonElement = document.querySelector("#btnSubmit");
const messageField = document.querySelector("#message");
let position = 0;

messageField.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.length > 10) {
        position = 0;
        buttonElement.style.transform = 'translateX(0)';
        buttonElement.style.backgroundColor = 'darkgreen';
    } else {
        buttonElement.style.backgroundColor = 'red';
    }
    message = value;
});

buttonElement.addEventListener("click", function(event) {
    event.preventDefault();
});

buttonElement.addEventListener("mouseover", function() {
    const value = messageField.value;

    if (value.length > 10) {
        return; // لا تتحرك إذا كان طول الرسالة > 10
    }

    if (position === 0) {
        position = 120;
    } else {
        position = 0;
    }

    buttonElement.style.transform = `translate(${position}px, 0px)`;
});
