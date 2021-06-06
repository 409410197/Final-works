function changeVideo(index){
    const player=document.querySelector('#player');
    console.log('player',player);
    switch(index){
        case 1:
            player.innerHTML=`<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/RechrtUxfQc" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 2:
            player.innerHTML=`<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/MRWX49Furew" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 3:
            player.innerHTML=`<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/METhdbL_iMw" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 4:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            break;
        case 5:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            break;
    }
}
function changeColor(index){
    const p=document.querySelector('#section');
    switch(index){
        case 1:
            p.style.backgroundColor='yellow';
            break;
        case 2:
            p.style.backgroundColor='blue';
            break;
        case 3:
            p.style.backgroundColor='black';
            break;
    }
}
function changePicture(index){
    const p=document.querySelector('#player');
    switch(index){
        case 1:
            player.innerHTML=`<img src="./1.jpg"style="width: 100%; height: auto" />`
        break;
        case 2:
            player.innerHTML=`<img src="./2.jpg"style="width: 100%; height: auto" />`
        break;
        case 3:
            player.innerHTML=`<img src="./3.jpg"style="width: 100%; height: auto" />`
        break;
        case 4:
            player.innerHTML=`<img src="./4.jpg"style="width: 100%; height: auto" />`
        break;
        case 5:
            player.innerHTML=`<img src="./5.jpg"style="width: 100%; height: auto" />`
        break;
    }
}