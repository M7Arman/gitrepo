function Apple (type) {
   this.type = type;
   this.color = "red";
   this.getInfo = getAppleInfo;
}

function getAppleInfo(){
   return this.color + ' ' + this.type + ' apple';
}

var theApple = new Apple('macintosh');
theApple.color = "raddish";
alert(theApple.getInfo());
