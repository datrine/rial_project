function calculate(){
    let airtime = document.getElementById('airtime').value;
    let money;
    money = airtime * 0.8;
    document.getElementById('money').value = "N" + Math.floor(money);
}
