"use strict";
// DOMの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    // HTML要素の取得（型アサーションを使用）
    const langSwitch = document.getElementById('langSwitch');
    const body = document.body;
    // nullチェック（要素が存在しない場合のエラー防止）
    if (!langSwitch || !body) {
        console.error('必要な要素が見つかりません');
        return;
    }
    // 保存された言語設定があれば適用（リロードしても設定を維持）
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang === 'en') {
        enableEnglishMode(body, langSwitch);
    }
    // スイッチクリック時の挙動
    langSwitch.addEventListener('click', () => {
        // 現在 body に 'en-mode' クラスがついているか確認
        const isEnglish = body.classList.contains('en-mode');
        if (isEnglish) {
            // 英語モードなら -> 日本語モードへ
            disableEnglishMode(body, langSwitch);
        }
        else {
            // 日本語モードなら -> 英語モードへ
            enableEnglishMode(body, langSwitch);
        }
    });
});
/**
 * 英語モードを有効にする関数
 */
function enableEnglishMode(body, switchBtn) {
    body.classList.add('en-mode');
    localStorage.setItem('portfolio-lang', 'en'); // 設定を保存
    updateSwitchVisual(switchBtn, true);
}
/**
 * 英語モードを無効にする（日本語にする）関数
 */
function disableEnglishMode(body, switchBtn) {
    body.classList.remove('en-mode');
    localStorage.setItem('portfolio-lang', 'jp'); // 設定を保存
    updateSwitchVisual(switchBtn, false);
}
/**
 * スイッチの見た目（JP/ENの太字切り替え）を更新する関数
 */
function updateSwitchVisual(switchBtn, isEnglish) {
    const spans = switchBtn.getElementsByTagName('span');
    // spans[0] -> JP, spans[1] -> EN
    if (isEnglish) {
        spans[0].classList.remove('active');
        spans[1].classList.add('active');
    }
    else {
        spans[0].classList.add('active');
        spans[1].classList.remove('active');
    }
}
