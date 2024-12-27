// ローディング画面を非表示にしてサイトを表示
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const nav = document.querySelector('nav');
    setTimeout(() => {
        loadingScreen.classList.add('hidden'); // ローディング画面を非表示
        setTimeout(() => {
            nav.classList.add('show'); // ナビゲーションを表示
        }, 100); // 少し遅れてナビゲーションを表示
    }, 1500); // ローディング画面を1.5秒間表示
});


// ハンバーガーメニューの動作
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});
