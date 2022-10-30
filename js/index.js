function menuOpen() {
    document.getElementById('aside-menu').style.left = '0';
    document.getElementById('aside-menu-open').style.display = 'none';
    document.getElementById('aside-menu-close').style.display = 'block';
}

function menuClose() {
    document.getElementById('aside-menu').style.left = '-400px';
    document.getElementById('aside-menu-open').style.display = 'block';
    document.getElementById('aside-menu-close').style.display = 'none';
}