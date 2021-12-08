const prefectures = document.querySelector('#prefectures')
const pref = document.querySelector('#pref')
prefectures.addEventListener('click', (e) => {
    pref.value="test"
    pref.innerText="test"
})