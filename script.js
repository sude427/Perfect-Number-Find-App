//sayının bölenlerinin toplamı sayının iki katına eşitse mükemmel sayıdır

mükemmelSayi(9);

function mükemmelSayi(sayi){
    let toplam=0;
    for(i=2; i<=sayi/2; i++){
        if(sayi%i==0){
            toplam+=i;
        }
    }
    toplam+=1+sayi;
    if(toplam==sayi*2){
        console.log("Mükemmel sayıdır...");
    }else{
        console.log("Mükemmel sayı değildir...");
    }
}