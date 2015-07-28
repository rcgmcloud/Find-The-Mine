function mineLocation(field){
  var mine = [0,0];

  for(var i=0; i<field.length; i++){
    if(field[i].indexOf(1) !== -1){
      mine[0] = field.indexOf(field[i]);
      mine[1] = field[i].indexOf(1);
    }
  }
  return mine;
}