var screen = document.querySelector('#screen');
        var btn = document.querySelectorAll('.btn');
        var body = document.querySelector('body');
        var toggleButton = document.querySelector('.toggle-theme');

        /* Get value from buttons */
        for (item of btn) {
            item.addEventListener('click', (e) => {
                btntext = e.target.innerText;
                if (btntext == '×') {
                    btntext = '*';
                }
                if (btntext == '÷') {
                    btntext = '/';
                }
                screen.value += btntext;
            });
        }

        /* Math functions */
        function sin() {
            screen.value = Math.sin(screen.value);
        }

        function cos() {
            screen.value = Math.cos(screen.value);
        }

        function tan() {
            screen.value = Math.tan(screen.value);
        }

        function pow() {
            screen.value = Math.pow(screen.value, 2);
        }

        function sqrt() {
            screen.value = Math.sqrt(screen.value, 2);
        }

        function log() {
            screen.value = Math.log(screen.value);
        }

        function pi() {
            screen.value += Math.PI;
        }

        function e() {
            screen.value += Math.E;
        }

        function fact() {
            let i, num, f;
            f = 1;
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            screen.value = f;
        }

        /* Backspace function */
        function backspc() {
            screen.value = screen.value.substr(0, screen.value.length - 1);
        }

        /* Toggle theme function */
        function toggleTheme() {
            body.classList.toggle('dark');
            toggleButton.classList.toggle('dark');
            if (body.classList.contains('dark')) {
                toggleButton.innerText = "Dark Mode";
            } else {
                toggleButton.innerText = "Light Mode";
            }
        }