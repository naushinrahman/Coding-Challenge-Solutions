function titleToNumber(title) {
    var letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var i, ret = 0, j = 0, bool;
    var titleLength = title.length;
     for(let k = 0; k < titleLength; k++) {
      bool = true;
      for(i = 0; i<letterArray.length && bool;i++) {
        if (letterArray[i]===title[j]) {
          j++;
          ret = (ret * 26) + i + 1;
          bool = false;
        }
      }
    }
    return ret;
  }

  console.log(titleToNumber('A'),1);
  console.log(titleToNumber('Z'),26);
  console.log(titleToNumber('AA'),27);
  console.log(titleToNumber('AZ'),52);
  console.log(titleToNumber('BA'),53);
  console.log(titleToNumber('CODEWARS'),28779382963);
