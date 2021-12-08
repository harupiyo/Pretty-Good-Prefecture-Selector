// 表示のコントロール用
const body = document.querySelector('body')
const prefecture_list = document.querySelector('.prefecture-list')

// 操作の対象
const prefectures = document.querySelector('#prefectures')
const pref = document.querySelector('#pref')

// 都道府県のリストを加工する
// <li>北海道</li>
//      ↓
// <li><a href="selectit("北海道")">北海道</a></li>
const lists = document.querySelectorAll('.provinces li')
lists.forEach((l) => {
    const p = l.innerText
    const a = document.createElement('a')
    a.href=`javascript: selectit("${p}");`
    a.innerText = p
    l.innerText=""
    l.appendChild(a)
})

// 都道府県が選択されたら
function selectit(string){
    // 都道府県リストのウィジェットを非表示にし、
    prefecture_list.style.display = "none"
    // modal であったことを示す背景の色を戻し、(本格的なmodal の実装とは異なり、ここでは単にbody の背景色を変えているだけである)
    prefectures.style.display="block"   // TODO
    body.style.background = "white"
    // 選ばれた都道府県を選択結果として格納
    pref.value=string
    pref.innerText=string
}

// <select>--都道府県--</select> をクリックしたら
prefectures.addEventListener('click', (event) => {
    prefectures.style.display="none"    // NG ここでselect 自体を消しても、
                                        // 1. ポップアップしてくるものを防ぐことができない
                                        // 2. このselect がなくなることにより、後続のフローに悪影響が出る
    // ウィジェットを表示
    prefecture_list.style.display = "block"
    // modal であることを示すため、背景色を暗くする
    body.style.background = "gray"
    // TODO ブラウザーのselect のプルダウンの表示を禁止したい
    event.preventDefault()
})

// NG focus イベントは関係がなかった
// https://developer.mozilla.org/ja/docs/Web/API/GlobalEventHandlers/onfocus
prefectures.addEventListener('focus',(e)=>{
    console.log('prefecture focus')
    e.preventDefault()
})
// NG change イベントは関係なかった
prefectures.addEventListener('change',(e)=>{
    console.log('prefecture change')
    e.preventDefault()
})
// NG input イベントは関係がなかった
// https://developer.mozilla.org/ja/docs/Web/API/HTMLSelectElement
prefectures.addEventListener('input',(e)=>{
    console.log('prefecture input')
    e.preventDefault()
})

// NG <option> 要素は関係がないようだ
const opt = document.querySelector('option')
opt.style.display="none"                // これでポップアップするものの内容は消えてくれる
                                        // ただしborder が残ってしまう
                                        // click 時にボタンを押しっぱなしにするとborder が出続ける
opt.style.border = "100px solid red"    // NG こいつ自身のボーダーではないようだ
prefectures.style.border = "10px solid red" // NG <select> のボーダーとも違う
// NG
opt.addEventListener('click', (e) => {
    console.log('option click')
    e.preventDefault()
})
// NG
opt.addEventListener('focus', (e) => {
    console.log('option focus')
    e.preventDefault()
})
// NG
opt.addEventListener('change',(e)=>{
    console.log('opt change')
    e.preventDefault()
})
// NG
opt.addEventListener('input',(e)=>{
    console.log('opt input')
    e.preventDefault()
})
