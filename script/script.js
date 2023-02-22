console.log("Start")
document.body.style.height=window.innerHeight+'px';

let nagysag=3;
document.getElementById('palya').style.width=nagysag*200+'px';

let tomb=[];
for(let i=1;i<=nagysag;i++){
    let sor=document.createElement('div');
    sor.className='sor';
    for(let j=1;j<=nagysag;j++){
        let cella=document.createElement('div');
        cella.className='cella';

        do{
            var szam=Math.round(Math.random()*(nagysag*nagysag-1));
            for (var num of tomb){
                if(num===szam) break;
            }
        }while(num===szam);

        tomb.push(szam);
        if(szam==0){
            cella.classList.add('ures');
        } else{
            cella.innerHTML=szam;
        }
        cella.onclick=csuszik;
        sor.appendChild(cella);
    }
    document.getElementById('palya').appendChild(sor);
}

function csuszik(){
    console.log("Csúszik", this);
    let mozog=false;
    if(!mozog){
    if((this.previousElementSibling) && (this.previousElementSibling.classList[1]=="ures")){
        this.classList.add('bal');
        mozog=true;
    }
    if((this.nextElementSibling) && (this.nextElementSibling.classList[1]=="ures")){
        this.classList.add('jobb');
        mozog=true;
    }

    let hanyadik=0;
    let elozo=this.previousElementSibling;
    while(elozo){
        hanyadik++;
        elozo=elozo.previousElementSibling;
    }
    
    if((this.parentNode.previousElementSibling) && (this.parentNode.previousElementSibling.children[hanyadik].classList[1]=='ures')){
        this.classList.add('fel');
        mozog=true;
    }

    if((this.parentNode.nextElementSibling) && (this.parentNode.nextElementSibling.children[hanyadik].classList[1]=='ures')){
        this.classList.add('le');
        mozog=true;
    }

    if(mozog) setTimeout(function(c){
        document.getElementsByClassName('ures')[0].innerHTML=c.innerHTML;
        document.getElementsByClassName('ures')[0].classList.remove('ures');
        c.classList.add('ures');
        c.classList.remove('jobb');
        c.classList.remove('bal');
        c.classList.remove('fel');
        c.classList.remove('le');
        c.innerHTML='';
        mozog=false;
        kesz();
    },1000,this);
    }
};
function kesz(){
    let cellak=document.getElementsByClassName('cella');
    for(let i=0;i<cellak.length;i++){
        if(cellak[i].innerHTML==(i+1)) cellak[i].classList.add('jo');
        else cellak[i].classList.remove('jo');
    }
    if(document.getElementsByClassName('jo').length==cellak.length-1) console.log('Nyert');
};