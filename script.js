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


$(document).ready(function() {
    // メニューのトグル機能
    $('.menu-toggle').click(function() {
        // メニューの表示/非表示をスライドイン・スライドアウトで切り替え
        $('.menu').stop(true, true).slideToggle(500);
        
        // ハンバーガーアイコンのアニメーション
        $(this).toggleClass('open');
    });
});
