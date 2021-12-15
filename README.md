# Pretty-Good-Prefecture-Selector

# Spec

- Tab キーでフォーカスを移した際にもポップアップ

# 動作確認

- Ubuntu
    - Google Chrome

# Bugs

## select をクリックした際、ブラウザーのプルダウンを表示しないようにする
### 調査
- どのイベントによってプルダウン表示がキックされるかを調べる
pref.addEventListener('click', show_widget, false)
pref.addEventListener('focus', show_widget, false)
pref.addEventListener('input', show_widget, false)
prefectures.addEventListener('click', show_widget, false)
prefectures.addEventListener('input', show_widget, false)
prefectures.addEventListener('focus', show_widget, true)

function show_widget(event){
    console.log(event)  // この実験の結果、click の前にprefectures の focus が捕まえられていることがわかった.
                        // 逆にclick は捕獲していない
    console.log(event.cancelable)   // focus はcancelable = false なので、
                                    // event.preventDefault() を入れても効き目なし
}

-
function show_widget(event){
    prefectures.style.display = 'none' これをしても一瞬、表示されてしまう
- ブラウザーのデフォルトスタイルシートを確認し、上書きしてみる
option:checked {
    border: 10px solid red;
    background-color: red !important;
    color: blue !important;
}
select > option {
    padding-inline: 0px;
}
option {
    display: none;
    padding-block: 0px;
    line-height: normal !important;
    user-select: none;
    text-indent: 0;
    white-space: nowrap !important;
    word-wrap: normal !important;
    text-align: match-parent;
}

# TODO

- 北海道以外も選択できるようにする
- 送信ボタンかEnter で選択されたものが送信されることをわかるようにalert() で表示するようにする
- フェード効果を使ってスムーズな手触りにしたい

# Refs

https://developer.mozilla.org/ja/docs/Web/HTML/Element/select
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
https://www.javadrive.jp/javascript/event/index10.hl
https://www.javadrive.jp/javascript/event/index12.html
https://monakaice88.hatenablog.com/entry/2017/02/23/082200
- datalist 要素を使う
    - http://jsfiddle.net/817gtvr6/1/
    - http://www.shurey.com/js/labo/combobox.html
- modal
    - https://tech-dig.jp/js-modal/
    - https://shogo-log.com/modal-javascript/
    - https://www.codexworld.com/cookie-consent-popup-with-javascript/

## Similar

https://qiita.com/fakefurcoronet/items/8984bc078b2511f60cd7
https://kinocolog.com/pref_select/
https://mndangler.net/2014/08/japan-map_jquery_plugin/
https://shu-naka-blog.com/website/address/