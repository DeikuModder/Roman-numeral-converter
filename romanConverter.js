export const convertToRoman = (num) => {
    let numToString; //the variable that will hold the value of the num passed

    //if the num it's type of number, turn it to a string, else, it'll already be a string
    if (typeof num == "number"){
        numToString = String(num)
    }
    else {
        numToString = num;
    }

    const stringNum = [];
    //save each individual number into an array, starting from rigth to left (or end to start)
    for (let i = numToString.length - 1; i >= 0; i--){
      stringNum.push(numToString[i]);
    }
    //iterate trough the array and depending on the position of the arr and wich number it is, convert it to its equivalent in roman numeral
    for (let i = 0; i < stringNum.length; i++){
      if (stringNum[i] == 0){
        stringNum[i] = "";
      }
  
      switch (stringNum[0]){
        case "1":
          stringNum[0] = "I"
          break;
        case "2":
          stringNum[0] = "II"
          break;
        case "3":
          stringNum[0] = "III"
          break;
        case "4":
          stringNum[0] = "IV"
          break;
        case "5":
          stringNum[0] = "V"
          break;
        case "6":
          stringNum[0] = "VI"
          break;
        case "7":
          stringNum[0] = "VII"
          break;
        case "8":
          stringNum[0] = "VIII"
          break;
        case "9":
          stringNum[0] = "IX"
          break;
      }
      switch (stringNum[1]){
        case "1":
          stringNum[1] = "X"
          break;
        case "2":
          stringNum[1] = "XX"
          break;
        case "3":
          stringNum[1] = "XXX"
          break;
        case "4":
          stringNum[1] = "XL"
          break;
        case "5":
          stringNum[1] = "L"
          break;
        case "6":
          stringNum[1] = "LX"
          break;
        case "7":
          stringNum[1] = "LXX"
          break;
        case "8":
          stringNum[1] = "LXXX"
          break;
        case "9":
          stringNum[1] = "XC"
          break;
      }
      switch (stringNum[2]){
        case "1":
          stringNum[2] = "C"
          break;
        case "2":
          stringNum[2] = "CC"
          break;
        case "3":
          stringNum[2] = "CCC"
          break;
        case "4":
          stringNum[2] = "CD"
          break;
        case "5":
          stringNum[2] = "D"
          break;
        case "6":
          stringNum[2] = "DC"
          break;
        case "7":
          stringNum[2] = "DCC"
          break;
        case "8":
          stringNum[2] = "DCCC"
          break;
        case "9":
          stringNum[2] = "CM"
          break;
      }
      switch (stringNum[3]){
        case "1":
          stringNum[3] = "M"
          break;
        case "2":
          stringNum[3] = "MM"
          break;
        case "3":
          stringNum[3] = "MMM"
          break;
      }
    }
    //once its done, pass the convert numbers to a new array, from end to start
    let romanNum = [];
  
    for (let i = stringNum.length - 1; i >= 0; i--){
      romanNum.push(stringNum[i]);
    }
    //use the .join to return the new string
  
    return romanNum.join("");
  }