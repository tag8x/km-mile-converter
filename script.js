function convert(){
    var kkm = document.getElementById("km").value;
    km = Number(km);
    var mil = kkm * 0.621371192;
    document.getElementById("mil").innerHTML=kkm+"="+mil;
}

var hesapBTN = document.getElementById('btn');