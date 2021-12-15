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
    body.style.background = "white"
    // 選ばれた都道府県を選択結果として格納
    pref.value=string
    pref.innerText=string
    // 選択可能にする
    prefectures.disabled = false
}

// <select>--都道府県--</select> をクリックしたら
pref.addEventListener('click', show_widget, false)
pref.addEventListener('focus', show_widget, false)
pref.addEventListener('input', show_widget, false)
prefectures.addEventListener('click', show_widget, false)
prefectures.addEventListener('input', show_widget, false)
prefectures.addEventListener('focus', show_widget, true)

function show_widget(event){
    // select を選択不可能にする
//    prefectures.disabled = true
    // 都道府県選択ウィジェットを表示
    prefecture_list.style.display = "block"
    // modal であることを示すため、背景色を暗くする
    body.style.background = "gray"
    
    console.log(event)  // この実験の結果、click の前にfocus が捕まえられていることがわかった. 逆にclick は捕獲していない
    console.log(event.cancelable)   // focus はcancelable = false なので、
                                    // event.preventDefault() // これを入れても効き目なし
}