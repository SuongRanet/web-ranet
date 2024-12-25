let name1 = document.querySelector('.merry');
document.querySelector('.gift-button').addEventListener('click', () => {
    document.querySelector('.message-box').style.display = 'block';
    document.querySelector('.gift-button').style.display = 'none';
    name1.innerHTML = 'Merry Christmas! Oun Ying🎄✨';
});
