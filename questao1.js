var vetNum=[]; x=0
    tamanho = 0

    while(x<10){
        vetNum[x]=parseInt(prompt("Digite os numeros: "));
        x++;
    }
    
    
    function MyMax(myarr){
    var al = myarr.length;
    maximum = myarr[al-1];
    while (al--){
        if(myarr[al] > maximum){
            maximum = myarr[al]
        }
    }
            return maximum;
};

var m = MyMax(vetNum);
console.log(m)