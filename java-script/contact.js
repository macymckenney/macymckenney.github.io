const form = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "your-email@gmail.com",
        Password: "your-password",
        To: "macymckenney@gmail.com",
        From: email,
        Subject: `New message from ${name}`,
        Body: message,
    }).then(() => {
        confirmationMessage.innerHTML = "Email sent successfully!";
        form.reset();
    });
}
