module.exports = function toReadable (number) {
    const words = {
        '0':'zero',
        '1':'one', 
        '2':'two', 
        '3':'three',  
        '4':'four', 
        '5':'five', 
        '6':'six', 
        '7':'seven', 
        '8':'eight', 
        '9':'nine',
        '10':'ten', '11':'eleven', '12':'twelve', '13':'thirteen', '14':'fourteen', '15':'fifteen', '16':'sixteen', '17':'seventeen', '18':'eighteen', '19':'nineteen',
        '20':'twenty', '30':'thirty', '40':'forty', '50':'fifty', '60':'sixty', '70':'seventy', '80':'eighty', '90':'ninety'
      }
      let str = String(number);
  if (str in words) {
    str = words[str];
    console.log(str);
  } else if (str.length === 2) {
    str = words[str[0]+"0"]+" "+words[str[1]];
  } else if (str.length === 3) {
      if (str[1] === "0" && str[2] === "0") {
        str = words[str[0]] + " " + "hundred"; 
      } else if (str[1] === "0") {
        str = words[str[0]] + " " + "hundred" + " " + words[str[2]];
      } else if (str[1]+str[2] in words) {
        str = words[str[0]] + " " + "hundred" + " " + words[str[1]+str[2]];
      } else {
        str = words[str[0]] + " " + "hundred" + " " + words[str[1]+"0"] + " " + words[str[2]];
      }
  } return str;
}
