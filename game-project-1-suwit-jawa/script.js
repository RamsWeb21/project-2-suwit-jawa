function getPilihanComputer (){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang'; return 'semut';
    }

    //rules
    function getHasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    }; 

    


    function roll(){
        const imgComputer = document.querySelector('.img-comp');
        const gambar = ['gajah', 'semut', 'orang'];
        const start = new Date(). getTime();
        let i = 0;
        setInterval(function(){
            if( new Date(). getTime() - start > 1000){
                clearInterval;
                return;
            };
            imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
            if( i == gambar.length ) i = 0;
        }, 100);
    };

   let win = 1;
   let lose = 1;
  
    //looping
    const pilihan = document.querySelectorAll('li img');

    pilihan.forEach(function(pil){

        pil.addEventListener('click', function(){

        const pilihanComp = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComp, pilihanPlayer);

        roll();
        
        setTimeout(function(){
            const imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil; 

        const scorePlayer = document.querySelector('.score-p');
            if(hasil == 'MENANG!'){
                scorePlayer.innerHTML = win++;
            }

        const scoreComp = document.querySelector('.score-c')
            if(hasil== 'KALAH!'){
                scoreComp.innerHTML = lose++
            }

        
    
        }, 1000)
        
        

        });
        

    });

          //score
 
      



 

    //event
    //const pGajah = document.querySelector('.gajah')
    //pGajah.addEventListener('click', function() {
        //const pilihanComp = getPilihanComputer();
        //const pilihanPlayer = pGajah.className;
        //const hasil = getHasil(pilihanComp, pilihanPlayer);
    
        //const imgComp = document.querySelector('.img-comp');
        //imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');
    
        //const info = document.querySelector('.info');
        //info.innerHTML = hasil
    //});


