// Typing effect for name
const fullName = "System User";
let currentNameIndex = 0;

function typeName() {
    if (currentNameIndex < fullName.length) {
        document.getElementById('userName').textContent = fullName.substring(0, currentNameIndex + 1);
        currentNameIndex++;
        setTimeout(typeName, 100);
    } else {
        document.getElementById('cursor').style.opacity = 0;
    }
}

// Terminal text effect
const terminalLines = [
    "> Initializing system...",
    "> Loading user profile...",
    "> Connecting to mainframe...",
    "> System ready."
];

let currentLine = 0;
let currentChar = 0;

function typeTerminal() {
    if (currentLine < terminalLines.length) {
        const terminal = document.getElementById('terminalText');
        const line = terminalLines[currentLine];
        
        if (currentChar <= line.length) {
            const text = terminal.textContent.split('\n');
            if (text.length <= currentLine) {
                text.push("");
            }
            text[currentLine] = line.substring(0, currentChar);
            terminal.textContent = text.join('\n');
            currentChar++;
            setTimeout(typeTerminal, 30);
        } else {
            currentLine++;
            currentChar = 0;
            setTimeout(typeTerminal, 300);
        }
    }
}

// System status update
function updateSystemStatus() {
    const statusElement = document.getElementById('systemStatus');
    setInterval(() => {
        let currentStatus = parseFloat(statusElement.textContent);
        const fluctuation = (Math.random() * 6 - 3);
        currentStatus = Math.min(100, Math.max(70, currentStatus + fluctuation));
        statusElement.textContent = currentStatus.toFixed(1) + '%';
    }, 2000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeName, 500);
    setTimeout(typeTerminal, 500);
    updateSystemStatus();
});
