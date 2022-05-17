
const chart = document.querySelector('#chart').getContext('2d');

new Chart (chart, {
    type:'line',
    data:{
labels:['jan','feb','mar','apr','may','jun','jul','aug','se'],
datasets:[
    {
        label:'BTC',
        data:[232,101,0,12,225,252,22,22,22,2,45,55],
        borderColor:'red',
        borderWidth:2
    },
    {
        label:'ETH',
        data:[54,89,0,12,585,785,22,22,22,2,45,55],
        borderColor:'blue',
        borderWidth:2
    }
]
    },
    options:{
        responsive:true
    }
})
//show or hide sidebar
const menuBtn= document.querySelector('#menu-btn');
const closeBtn= document.querySelector('#close-btn');
const sidebar= document.querySelector('aside');
menuBtn.addEventListener('click', ()=>{
    sidebar.style.display='block';
})

closeBtn.addEventListener('click', ()=>{
    sidebar.style.display='none';
})



const themeBtn = document.querySelector('.theme-btn');
console.log(themeBtn);
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})