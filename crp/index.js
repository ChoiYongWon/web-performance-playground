
// sleep(1000)
const el = document.getElementsByTagName('span')
for(let i=0;i<el.length;i++) {
    el[i].style.color = 'red'
}

// function sleep(ms) {
//     const wakeUpTime = Date.now() + ms;
//     while (Date.now() < wakeUpTime) {}
//   }


// setTimeout(()=>{
//     const el = document.getElementsByTagName('span')
//     for(let i=0;i<el.length;i++) {
//         el[i].style.color = 'red'
//     }
// }, 1000)

    
// }, 2000)