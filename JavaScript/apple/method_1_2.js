function array_max( ){
   var i, max = this[0];
   for (i = 1; i < this.length; i++) {
      if (max < this[i])
         max = this[i];
   }
   return max;
}

Array.prototype.max = array_max;

// а теперь создадим новый массив 
// // // и запустим новый метод
var x = [ 1, 2, 3, 4, 5, 6]
var y = x.max( );
alert(this.y);

