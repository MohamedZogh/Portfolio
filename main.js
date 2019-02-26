

function apparence() {
    var menu = document.getElementById("menu");
    var index = menu.style.display;
    var flex = 'flex';
    var none = 'none';


    switch (index) {
        case none:
            menu.style.display= 'flex';
            break;
        case flex:
            menu.style.display = 'none';
            break;
        default:
            break;
    }
} 