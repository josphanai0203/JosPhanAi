
function myFunction(){
    var data = document.getElementById('result')
    var a = document.getElementById('unconvert').value;
    var b = document.getElementById('convert').value;
    var unconvert = document.getElementById('input').value.trim();
    switch (a) {
        case "Binary":
            switch (b) {
                case "Binary":
                    if (checkBinary()) {
                        data.value = document.getElementById('input').value;
                    }
                    break;
                case "Decimal":
                    if (checkBinary()) {
                        data.value = binaryToDecimal(unconvert)
                    }
                    break;    
                case "Octal":
                    if (checkBinary()) {
                        data.value = decimalToOctal(binaryToDecimal(unconvert));
                    }
                    
                    break;    
                case "Hexadecimal":
                    if (checkBinary()) {
                        data.value = decimalToHexadecimal(binaryToDecimal(unconvert))
                    }
                    
                    break;
                default:
                    break;
            }
            break;
        case "Decimal":
            switch (b) {
                case "Binary":
                    if ( checkDecimal()) {
                       data.value = DecimalToBinary(unconvert);
                    }
                    break;
                case "Decimal":
                    if (checkDecimal()) {
                        data.value = document.getElementById('input').value;
                        
                    }
                    
                    break;    
                case "Octal":
                    if (checkDecimal()) {
                        data.value = decimalToOctal(unconvert)
                        
                    }
                    
                    break;    
                case "Hexadecimal":
                    if (checkDecimal()) {
                        data.value = decimalToHexadecimal(unconvert);
                        
                    }
                    
                    break;
                default:
                    break;
            }
            
            break;    
        case "Octal":
            switch (b) {
                case "Binary":
                    if (checkOctal()) {
                        data.value = DecimalToBinary(octalToDecimal(unconvert))
                        
                    }
                    break;
                case "Decimal":
                    if (checkOctal()) {
                        data.value = octalToDecimal(unconvert);
                            
                        }
                    
                    break;    
                case "Octal":
                    if (checkOctal()) {
                        data.value = document.getElementById('input').value;

                            
                        }
                    
                    break;    
                case "Hexadecimal":
                    if (checkOctal()) {
                        data.value = decimalToHexadecimal(octalToDecimal(unconvert))
                            
                        }
                    
                    break;
                default:
                    break;
            }
            
            break;    
        case "Hexadecimal":
            switch (b) {
                case "Binary":
                    if (checkHexadi()) {
                        data.value = DecimalToBinary(hexadecimalToDecimal(unconvert))
                        
                    }
                    break;
                case "Decimal":
                    
                    if (checkHexadi()) {
                        data.value = hexadecimalToDecimal(unconvert);
                        
                    }
                    break;    
                case "Octal":
                    
                    if (checkHexadi()) {
                        data.value = decimalToOctal(hexadecimalToDecimal(unconvert))
                        
                    }
                    break;    
                case "Hexadecimal":
                    if (checkHexadi()) {
                        data.value = document.getElementById('input').value;
                        
                    }
                    
                    break;
                default:
                    break;
            }
            
            break;
        default:
            break;
    }
}
function DecimalToBinary(unconvert){
    var deToBi= []
    var intNum;
    var floatNum;
    var intergerPart = [];
    intNum = parseInt(unconvert);
    floatNum = parseFloat(unconvert);

    
    if (intNum == floatNum) {
        if (intNum<0) {
            return negativeNumberInterger(intNum,deToBi);
        }
        else {
            return positiveNumberInterger(intNum,deToBi,"1");
            
        }
    } 
    else {
        if (floatNum<0) {
            floatNum = floatNum - intNum ;
            
        }
        else {
            floatNum = floatNum - intNum ;
            intergerPart = positiveNumberInterger(intNum,deToBi,"no").split("");
            intergerPart.push(".");
            return fractionPart(floatNum,intergerPart).join("")
        }

    }
    
}
function decimalToOctal(unconvert){
    var deToBi= []
    var intNum;
    var floatNum;
    intNum = parseInt(unconvert);
    floatNum = parseFloat(unconvert);
    var temp;
    if (intNum == floatNum) {
        if (intNum == 0) {
            deToBi.unshift(0);
            
        }
        for (let i = 0;intNum >=1; i++) {
            temp = intNum % 8;
            deToBi.unshift(temp);
            intNum = Math.floor(intNum/8);
    
        }
            return deToBi.join("");    
    
    } else {
        floatNum = floatNum - intNum ;
        if (intNum == 0) {
            deToBi.unshift(0);
            
        }
        for (let i = 0;intNum >=1; i++) {
            temp = intNum % 8;
            deToBi.unshift(temp);
            intNum = Math.floor(intNum/8);
    
        }
        deToBi.push(".");
        for( let i =0 ;i <= 8 ;i++){
            floatNum = floatNum *8;
            if (parseInt(floatNum)>=1&&parseInt(floatNum)<=8) {
                deToBi.push(parseInt(floatNum));
                floatNum = floatNum - parseInt(floatNum);
            }else if (floatNum == 0){
                return deToBi.join("");    
            }else if(floatNum > 0 && floatNum < 1){
                deToBi.push(0);
            }
            
        }
        return deToBi.join(""); 
    }

    
}
function decimalToHexadecimal(unconvert){
    var deToBi= [];
    var temp;
    var intNum;
    var floatNum;
    intNum = parseInt(unconvert);
    floatNum = parseFloat(unconvert);
    if (intNum == floatNum) {
        
        for (let i = 0;intNum >=1; i++) {
            temp = intNum % 16;
            switch (temp) {
                case 10:
                    temp = "A";
                    break;
                case 11:
                    temp = "B";
                    break;
                case 12:
                    temp = "C";
                        break;
                case 13:
                    temp = "D";
                    break;
                case 14:
                    temp = "E";
                    break;
                case 15:
                    temp = "F";
                    break;
                default:
                    temp = temp;
                    break;
            }
            deToBi.unshift(temp);
            intNum = Math.floor(intNum/16);
    
        }
            return deToBi.join("");
    }
    else {
        floatNum = floatNum - intNum ;
        for (let i = 0;intNum >=1; i++) {
            temp = intNum % 16;
            switch (temp) {
                case 10:
                    temp = "A";
                    break;
                case 11:
                    temp = "B";
                    break;
                case 12:
                    temp = "C";
                        break;
                case 13:
                    temp = "D";
                    break;
                case 14:
                    temp = "E";
                    break;
                case 15:
                    temp = "F";
                    break;
                default:
                    temp = temp;
                    break;
            }
            deToBi.unshift(temp);
            intNum = Math.floor(intNum/16);
    
        }
        deToBi.push(".");
        for( let i =0 ;i <= 8 ;i++){
            floatNum = floatNum *16;
            if (parseInt(floatNum)>=1&&parseInt(floatNum)<=16) {
                switch (parseInt(floatNum)) {
                    case 10:
                        deToBi.push("A");
                        break;
                    case 11:
                        deToBi.push("B");
                        break;
                    case 12:
                        deToBi.push("C");
                            break;
                    case 13:
                        deToBi.push("D");
                        break;
                    case 14:
                        deToBi.push("E");
                        break;
                    case 15:
                        deToBi.push("F");
                        break;
                    default:
                        deToBi.push(parseInt(floatNum));
                        break;
                }
                floatNum = floatNum - parseInt(floatNum);
            }else if (floatNum == 0){
                return deToBi.join("");    
            }else if(floatNum > 0 && floatNum < 1){
                deToBi.push(0);
            }
            
        }
        return deToBi.join(""); 
        

    }
}
function binaryToDecimal(unconvert){
    var lengthNumber = unconvert.length;
    var count = 0;
    var haveDot = unconvert.search("\\.")
    if (haveDot >0) {
        var subArr = unconvert.split("")
        unconvert = parseInt(unconvert);
        for(let i = 0;i<lengthNumber;i++){
            var temp = unconvert %2 ;
            count = count + temp*Math.pow(2,i)
            unconvert = Math.floor(unconvert/10);
        }
        for (let i = haveDot +1, g = -1; i < subArr.length; i++,g--) {
               count += parseInt(subArr[i])*Math.pow(2,g);
        }
        return count.toString()

    }
    else {
        unconvert = parseInt(unconvert);
        console.log(unconvert)

         for(let i = 0;i<lengthNumber;i++){
             var temp = unconvert %2 ;
              count = count + temp*Math.pow(2,i)
                 unconvert = Math.floor(unconvert/10);
                console.log(count.toString())
            }
            return count.toString() ;
        }
}
function octalToDecimal(unconvert){
    var haveDot = unconvert.search("\\.")
    var lengthNumber = unconvert.length;
    var count = 0;
    if (haveDot>0) {
        var subArr = unconvert.split("")
        unconvert = parseInt(unconvert);
        for(let i = 0;i<lengthNumber;i++){
            var temp = unconvert %10;
            count = count + temp*Math.pow(8,i)
            unconvert = Math.floor(unconvert/10);
        }
        for (let i = haveDot +1, g = -1; i < subArr.length; i++,g--) {
               count += parseInt(subArr[i])*Math.pow(8,g);
        }
        return count.toString()
    }
    else {
        unconvert = parseInt(unconvert);
        for(let i = 0;i<lengthNumber;i++){
            var temp = unconvert %10;
            count = count + temp*Math.pow(8,i)
            unconvert = Math.floor(unconvert/10);
        }
        return count.toString() ;

    }
}
function hexadecimalToDecimal(unconvert){
    var haveDot = unconvert.search("\\.")
    unconvert = unconvert.toUpperCase();
    var lengthNumber = unconvert.length - 1;
    var count = 0;
    if (haveDot>0) {
        var subArr = unconvert.split("")
        for(let i = 1 , g = 0;i<=haveDot;i++ ,g++){
            var temp = unconvert.charAt(haveDot -i);
            switch (temp) {
                case "1":
                    temp = 1;
                    break;
                case "2":
                    temp = 2;
                    
                    break;
                case "3":
                    temp = 3;
                    
                    break;
                case "4":
                    temp = 4;
                    
                    break;
                case "5":
                    temp = 5;
                    
                    break;
                case "6":
                    temp = 6;
                    
                    break;
                case "7":
                    temp = 7;
                    
                    break;
                case "8":
                    temp = 8;
                    
                    break;
                case "9":
                    temp = 9;
                    
                    break;
                case "A":
                    temp = 10;
                    
                    break;
                case "B":
                    temp = 11;
                    
                    break;
                case "C":
                    temp = 12;
                    
                    break;
                case "D":
                    temp = 13;
                    
                    break;
                case "E":
                    temp = 14;
                    
                    break;
                case "F":
                    temp = 15;
                    break;
                default:
                    break;
            }
            count = count + temp*Math.pow(16,g)
        }
        for (let i = haveDot +1, g = -1; i <= lengthNumber; i++,g--) {
            var temp = subArr[i];
            switch (temp) {
                case "1":
                    temp = 1;
                    break;
                case "2":
                    temp = 2;
                    
                    break;
                case "3":
                    temp = 3;
                    
                    break;
                case "4":
                    temp = 4;
                    
                    break;
                case "5":
                    temp = 5;
                    
                    break;
                case "6":
                    temp = 6;
                    
                    break;
                case "7":
                    temp = 7;
                    
                    break;
                case "8":
                    temp = 8;
                    
                    break;
                case "9":
                    temp = 9;
                    
                    break;
                case "A":
                    temp = 10;
                    
                    break;
                case "B":
                    temp = 11;
                    
                    break;
                case "C":
                    temp = 12;
                    
                    break;
                case "D":
                    temp = 13;
                    
                    break;
                case "E":
                    temp = 14;
                    
                    break;
                case "F":
                    temp = 15;
                    break;
                default:
                    break;
            }
            count = count + temp*Math.pow(16,g)
     }
     return count.toString()

    }
    else {
        for(let i = 0;i<=lengthNumber;i++){
            var temp = unconvert.charAt(lengthNumber-i);
            switch (temp) {
                case "1":
                    temp = 1;
                    break;
                case "2":
                    temp = 2;
                    
                    break;
                case "3":
                    temp = 3;
                    
                    break;
                case "4":
                    temp = 4;
                    
                    break;
                case "5":
                    temp = 5;
                    
                    break;
                case "6":
                    temp = 6;
                    
                    break;
                case "7":
                    temp = 7;
                    
                    break;
                case "8":
                    temp = 8;
                    
                    break;
                case "9":
                    temp = 9;
                    
                    break;
                case "A":
                    temp = 10;
                    
                    break;
                case "B":
                    temp = 11;
                    
                    break;
                case "C":
                    temp = 12;
                    
                    break;
                case "D":
                    temp = 13;
                    
                    break;
                case "E":
                    temp = 14;
                    
                    break;
                case "F":
                    temp = 15;
                    break;
                default:
                    break;
            }
            count = count + temp*Math.pow(16,i)
        }
        return count.toString() ;

    }
}
//check input 
function checkBinary(){
    var unconvert = document.getElementById('input').value.trim();
    if (/^[0-1]{1,}(\.)?[0-1]+$/g.test(unconvert)) {
        return true
    }
    else {
        alert("Sai Định Dạng Vui lòng nhập lại số")
        reset()
            return false

    }

}
function checkDecimal(){
    var unconvert = document.getElementById('input').value.trim();
    if (/^(-)?([0-9]+\.)?[0-9]+/g.test(unconvert)) {
        return true
    }
    else {
        alert("Sai Định Dạng Vui lòng nhập lại số")
        reset()
            return false

    }
}

function checkHexadi(){
    var unconvert = document.getElementById('input').value.trim();
    if (/\b^((0x)?[0-9A-F]+)([.,]{1})?[0-9A-F]+\b/gi.test(unconvert)) {
        return true
    }
    else {
        alert("Sai Định Dạng Vui lòng nhập lại số")
        reset()
            return false

    }
}
function checkOctal(){
    var unconvert = document.getElementById('input').value.trim();
    if (/^([0-7])+(\.)?[0-7]+$/g.test(unconvert)) {
        return true
    }
    else {
        alert("Sai Định Dạng Vui lòng nhập lại số")
        reset()
            return false

    }
}
function reset(){
    document.getElementById('result').value = "";
    document.getElementById('input').value = ""
}
//Modify function
function negativeNumberInterger(number,arr){
    if (number<0) {
        var reverse = number*-1;
        var lengthPow;
        for (let i = 0, g = 0;g==0;i++){
            if (Math.pow(2,i)>reverse) {
                g = 5;
                lengthPow = i-1;
                arr.push(1);
            }
        }

        reverse = Math.pow(2,lengthPow + 1) - reverse;
        for(let x = lengthPow; x>=0 ;x--){
            if (reverse < Math.pow(2,x)) {
                arr.push(0);
            }
            else {
                reverse = reverse - Math.pow(2,x) ;
                arr.push(1);
            }

        }
        if (arr.length < 8) {
            for (let index = arr.length; index < 8; index++) {
                arr.unshift(1);
            }
            return arr.join("");
    
        }
        else {
            return arr.join("");
    
        }
    }
}
function positiveNumberInterger(number,arr,type){
    var temp;
    if (number == 0) {
        arr.unshift(0);
        
    }
    for (let i = 0;number >=1; i++) {
        temp = number % 2;
        arr.unshift(temp);
        number = Math.floor(number/2);

    }
    if (type == "no") {
        return arr.join("");
    }
    else {
        
        if (arr.length < 8) {
            for (let index = arr.length; index < 8; index++) {
                arr.unshift(0);
            }
            return arr.join("");
    
        }
        else {
            return arr.join("");
    
        }
    }
}
function fractionPart(floatNum,arr){
    for( let i =0 ;i <= 8 ;i++){

        floatNum = floatNum *2;
        if (floatNum>=1) {
            arr.push(1)
            floatNum = floatNum -1;
            
        }
        else if(floatNum>0) {
            arr.push(0);
        } else if (floatNum == 0) {
            return arr
        }
    }
    return arr
}