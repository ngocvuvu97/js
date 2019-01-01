function isEven(x){
    if(x<0){
         console.log("??");
    }
    else{
        var kq=x%2;
        switch (kq) {
            case 0:
            console.log("true")
                break;
            default:
                console.log("false")
        }
    }
}
isEven(-7);