
function firstLast6(array){
    return(array[0] == 6 || array[array.length-1] == 6)
}

function has23(array){
    var i = "";
    var first = array[0];
    var last = array[1]
    if(first == 2 || last == 2){
        i = true;
    }else if(first == 3 || last == 3) {
        i = true;
    }else{
        i = false;
    }
  return i;
}

function fix23(array){
    for(var i = 0; i < array.length; i++) {
        if (array[i] == 3 && array[i - 1] == 2) {
                array[i] = 0;
        }
    }
    return array;
}

function countYZ(arry){
    var arry = arry + " ";
    var count = 0;
     arry = arry.toLowerCase();
    for(var i = 0; i < arry.length; i++){
        if(arry[i] == "z"  && arry[i + 1] == " "){
            count += 1;
        }

        if(arry[i] == "y"  && arry[i + 1] == " "){
            count += 1;
        }

    }

    return count;
}


function endOther(str1, str2) {
    var str1Lower = str1.toLowerCase();
    var str2Lower = str2.toLowerCase();
    var endOther = "";
    var bigStr= "";
    var smallerStr = "";
    if(str1.length > str2.length){
        bigStr = str1Lower;
        smallerStr = str2Lower;
    } else {
        bigStr = str2Lower;
        smallerStr = str1Lower;
    }
    var subLength = smallerStr.length;
    var index = bigStr.indexOf(smallerStr);
    if(index == bigStr.length - subLength){
        endOther = true;
    } else {
        endOther = false;
    }
    return endOther;
}



function starOut(string){
    var x = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != "*" && string[i-1] != "*" && string[i + 1] != "*"){
            x += string[i];
        }
    }
    return x;
}
function getSandwich(str){
    var first = str.indexOf("bread");
    var last = str.lastIndexOf("bread");
    if (first == -1||first==last){
        var sand = "";
    } else {
        var sand = str.substring(first+5, last);
    }
    return sand;
}


function canBalance(array){
    var lSum = 0;
    var rSum = 0;
    for (var i = 0; i < array.length; i++) {
        lSum += array[i];

        for (var j = i + 1; j < array.length; j++) {
            rSum += array[j];
        }
        if(rSum == lSum) {
            return true;
        }
    rSum = 0;
        }

    return false;
}


function countClumps(arr){
    var count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i] != arr[i-1]){
            count += 1;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    var spaced;
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var sum = a + b + c;
    var mid = sum -(min+max);
    if(mid - min == max - mid){
        return true;
    }
    return false;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6([6, 1]);
    document.getElementById("output").innerHTML += has23([6, 1]);
    document.getElementById("output").innerHTML += fix23([6, 1]);
    document.getElementById("output").innerHTML += countYZ("xx xy");
    document.getElementById("output").innerHTML += endOther([6, 1]);
    document.getElementById("output").innerHTML += starOut("bpp*phu");
    document.getElementById("output").innerHTML += getSandwich("9breadjellybread2");
    document.getElementById("output").innerHTML += canBalance([1, 3, 4, 5, 2]);
    document.getElementById("output").innerHTML += countClumps([1, 3, 3, 5, 2]);
    document.getElementById("output").innerHTML += evenlySpaced(5, 10, 15);
}



