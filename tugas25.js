function tugas25(){
  var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya : ",deret.toString());
  urut = deret.sort();
  console.log("Ascending : ",urut.toString());
  reverse = urut.reverse();
  console.log("Descending : ",reverse.toString());
  saring = deret.filter(function (x){
    return x >= 10;
  })
  console.log("Filter > 10 : ", saring.toString());
}

tugas25()
