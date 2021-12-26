var menu = document.getElementById('menu-f');

        function closeMenu() {

            menu.style.top = "-100vh";
        }

        function openMenu() {
            menu.style.transition = "0.5s";
            menu.style.display = "flex";
            menu.style.top = "0";
        }
        function optionClick(){
            closeMenu();
}