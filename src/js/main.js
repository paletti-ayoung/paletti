(()=>{

    let yOffset= 0;
    let currentScene = 0;//현재 활성화된 씬
    const Info=[
        {//0
            type:'sticky',
            heightNum:5,
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-0'),
                logo:document.querySelector("#main-logo")
            },
            values:{
                logo_opacity_in:[0, 1, { start: 0.1, end: 0.2 }],
                loco_opacity_out:[0, 1, { start: 0.3, end: 0.4 }],
            }

        }
    ]

function setLayout(){
    for(let i =0; i<Info.length; i++){
        console.log(i)
        if(Info[i].type == 'sticky'){
            Info[i].scrollHeight=Info[i].heightNum * window.innerHeight;
        }
        // else if(Info[i].type=='normal'){
        //     Info[i].scrollHeight=Info[i].objs.content.offsetHeight+window.innerHeight*0.5;
        // }
        console.log(Info[i].scrollHeight)
        Info[i].objs.container.style.height=`${Info[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;

    let totalScrollHeight=0;

    for(let i =0; i<Info[i].length; i++){
        totalScrollHeight += Info[i].scrollHeight;
        if(totalScrollHeight >= yOffset){
            currentScene= i;
            break;
        }
    }//현재 어디 씬인지 알려줌
}


window.addEventListener('load',()=>{
    setLayout()

})



})();