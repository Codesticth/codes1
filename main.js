// JavaScript:
document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.getElementById("terminal");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type here...";
    input.style.width = "100%";
    terminal.appendChild(input);

    input.focus();

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const command = input.value;
            input.value = "";

            // Handle command execution
            executeCommand(command);
        }
    });
});
