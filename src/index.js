module.exports = function getZerosCount(number) {
var x = 1;
var zeros =0;
while (Math.pow(5, x) <=number ){
  zeros = zeros + parseInt(number/Math.pow(5, x));
  x++;
}
  return zeros;// your implementation
}
/* I'm not a great matimatician, so the equations for
this task were found here:
https://bodheeprep.com/number-exponents-factorial/
*/
