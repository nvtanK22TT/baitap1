const outer = document.querySelector('.outer')
const inner = document.querySelector('.inner')
const details = document.querySelector('.details')
icon = document.querySelector('.icon')
span = document.querySelector('.showHide')

const onImerClick = function(event){
}
inner.addEventListener('click', function(event){
    console.group('inner clicked')
})
outer.addEventListener('click', function(e){
    console.group('inner clicked')
},{capture: true})
body = document.querySelector('body')
body.addEventListener('click', function(){
    console.log('body clicked')
}, {capture: true})
html = document.querySelector('html')
html.addEventListener('click', function(){
    console.log('html clicked')
})
