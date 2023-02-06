
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
    var temp;
    var deToBi= []
    var intNum;
    intNum = parseInt(unconvert);
    if (intNum<0) {
        var reverse = intNum*-1;
        var lengthPow;
        for (let i = 0, g = 0;g==0;i++){
            if (Math.pow(2,i)>reverse) {
                g = 5;
                lengthPow = i-1;
                deToBi.push(1);
            }
        }

        reverse = Math.pow(2,lengthPow + 1) - reverse;
        for(let x = lengthPow; x>=0 ;x--){
            if (reverse < Math.pow(2,x)) {
                deToBi.push(0);
            }
            else {
                reverse = reverse - Math.pow(2,x) ;
                deToBi.push(1);
            }

        }
        if (deToBi.length < 8) {
            for (let index = deToBi.length; index < 8; index++) {
                deToBi.unshift(1);
            }
            return deToBi.join("");
    
        }
        else {
            return deToBi.join("");
    
        }

    }
    else {

        for (let i = 0;unconvert >=1; i++) {
            temp = unconvert % 2;
            deToBi.unshift(temp);
            unconvert = Math.floor(unconvert/2);
    
        }
        if (deToBi.length < 8) {
            for (let index = deToBi.length; index < 8; index++) {
                deToBi.unshift(0);
            }
            return deToBi.join("");
    
        }
        else {
            return deToBi.join("");
    
        }
    }
}
function binaryToDecimal(unconvert){
    var lengthNumber = unconvert.length;
    var count = 0;
    unconvert = parseInt(unconvert);
    for(let i = 0;i<lengthNumber;i++){
        var temp = unconvert %2 ;
        count = count + temp*Math.pow(2,i)
        unconvert = Math.floor(unconvert/10);
    }
    return count.toString() ;
}
function octalToDecimal(unconvert){
    var lengthNumber = unconvert.length;
    var count = 0;
    unconvert = parseInt(unconvert);
    for(let i = 0;i<lengthNumber;i++){
        var temp = unconvert %10;
        count = count + temp*Math.pow(8,i)
        unconvert = Math.floor(unconvert/10);
    }
    return count.toString() ;
}
function decimalToOctal(unconvert){
    var deToBi= [];
    var temp;
    for (let i = 0;unconvert >=1; i++) {
        temp = unconvert % 8;
        deToBi.unshift(temp);
        unconvert = Math.floor(unconvert/8);

    }
        return deToBi.join("");
}
function decimalToHexadecimal(unconvert){
    var deToBi= [];
    var temp;
    for (let i = 0;unconvert >=1; i++) {
        temp = unconvert % 16;
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
        unconvert = Math.floor(unconvert/16);

    }
        return deToBi.join("");
}
function hexadecimalToDecimal(unconvert){
    unconvert = unconvert.toUpperCase();
    var lengthNumber = unconvert.length - 1;
    var count = 0;
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
function checkBinary(){
    var unconvert = document.getElementById('input').value.trim();
    if (/^[0-1]{1,}$/g.test(unconvert)) {
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
    if (/^-?[0-9]{1,}$/g.test(unconvert)) {
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
    if (/\b(0x)?[0-9A-F]+\b/gi.test(unconvert)) {
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
    if (/^[0-7]*$/g.test(unconvert)) {
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
//ckdsmvsd