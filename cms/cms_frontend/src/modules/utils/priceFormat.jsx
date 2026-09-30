const formatPrice = (v) => {


  console.log(v);
  if (v == undefined) return v;

  const regex = /[۱۲۳۴۵۶۷۸۹۰]/g; // \d matches any digit, 'g' flag for global search

  var digits = v.match(regex);

  if(digits==null) return '';
    if(digits.length>0 && digits[0]== "۰"){
    digits.splice(0,1);
  }
  const  _v = digits.join('');



  const reversed = _v.split("").reverse().join("");
  const tkn = [];
  var tempP = "";
  var c = 0;
  for (var i = 0; i < reversed.length; i++) {
    tempP = reversed[i] + tempP;
    c += 1;
    if (c == 3) {
      c = 0;
      tkn.push(tempP);
      tempP = "";
    }
  }
  if (tempP.trim().length != 0) {
    tkn.push(tempP);
  }
  return tkn.reverse().join(",");
};


export default formatPrice;