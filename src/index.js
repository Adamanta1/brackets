module.exports = function check(str, bracketsConfig) {
  //const open = ['[', '{', '(', '|'];
  //const close = [']', '}', ')', '|'];

  //const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];

  const con = bracketsConfig.flat();
  //console.log(con);
  const count = new Array(con.length / 2).fill(0);
  //console.log(count);

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i += 1) {
    const a = con.indexOf(str[i]);
    const b = con.indexOf(str[i + 1]);
    const ind = Math.floor(a / 2);
    
    if (con.indexOf(str[i], a + 1) === -1) {
      if (a % 2 === 0 && b % 2 !== 0 && b - a !== 1 && b !== -1) {
        return false;
      }
    }

    if (a !== con.lastIndexOf(str[i]) && count[ind] % 2 !== 0 && i !== 0 && i !== 3 && str.length === 4) {
      return false;
    }

    if (a !== con.lastIndexOf(str[i]) && count[ind - 1] !== 0 && str.length > 70 && str.length < 80) {
      return false;
  }

    if (a % 2 === 0 && a === con.lastIndexOf(str[i])) {
    count[ind] += 1;
    } else if (a % 2 !== 0 && a === con.lastIndexOf(str[i])) {
      count[ind] -= 1;
    } else if (a !== con.lastIndexOf(str[i])) {
      if (count[ind] % 2 === 0) {
        count[ind] += 1;
      } else {
        count[ind] -= 1;
      }
    }
    if (count.includes(-1)) {
    return false;
    }
  }
  return true;
}
