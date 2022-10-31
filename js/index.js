

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

function product1() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('option1').selected = 'selected';
    document.getElementById('modal-title').innerHTML = 'Семена';
    document.getElementById('body').style.overflowY = 'hidden';
}

function product2() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('option2').selected = 'selected';
    document.getElementById('modal-title').innerHTML = 'СЗР';
    document.getElementById('body').style.overflowY = 'hidden';
}

function product3() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('option3').selected = 'selected';
    document.getElementById('modal-title').innerHTML = 'Удобрения';
    document.getElementById('body').style.overflowY = 'hidden';
}

function product4() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('option4').selected = 'selected';
    document.getElementById('modal-title').innerHTML = 'Техника';
    document.getElementById('body').style.overflowY = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('body').style.overflowY = 'auto';
}

function openModalCredit() {
    document.getElementById('modal-credit').style.display = 'flex';
    document.getElementById('body').style.overflowY = 'hidden';
}

function closeModalCredit() {
    document.getElementById('modal-credit').style.display = 'none';
    document.getElementById('body').style.overflowY = 'auto';
}