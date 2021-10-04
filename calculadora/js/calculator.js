let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");

for (const button of buttons) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        if (e.target.dataset.key == 'equal') {
            screen.textContent = eval(screen.textContent);
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent = screen.textContent + e.target.dataset.key;
        }   
    });
}
