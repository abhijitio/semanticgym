

function findWordInfo() { 
    var input1 = document.getElementById("text").value;
    var input2 = input1.replace(/[^\d\w ]+/g," ");
    var input3 = input2.split(/[ ]+/);
    return input3;
}

function Loopone() {
    var input = findWordInfo();
    var wordMapping = [];
    var i =0;
    var lenloop = input.length;
    for ( i ;i < lenloop; i++) {
        wordMapping.push(input[i].length)
    }
    return wordMapping;
}

function objConstructor(name,count) { 
    this.name = name;
    this.count = count;
}

function maxiNum() {
    var arr1 = Loopone();
    var num = Math.max.apply(Math, arr1);
    return num;
}

function objArrConstructor() { 
    var num = maxiNum();
    var arr1 = [];
    var i = 2;
    for ( i ; i <= num; i++) {
        var myObj = new objConstructor(i,0);
        arr1.push(myObj);
    }
    return arr1;
}

function objArrParsing() { 
    var arr1 = Loopone();
    var arr2 = objArrConstructor();
    var lenloop1 = arr1.length;
    var lenloop2 = arr2.length;
    for (var i = 0; i < lenloop1; i++) {
        for (var m = 0; m < lenloop2; m++) {
            if (arr2[m].name === arr1[i]) {
                arr2[m].count++;
                }
        }
    }
    return arr2;
}

function objArrTruncation() {
    var arr1 = objArrParsing();
    var len = arr1.length;
    for (var i = 0;i < len; i++) {
        if (arr1[i].count === 0) {
            arr1.splice(i, 1);
            len--;
            }
        }
    return arr1;
}

function format() {
    var strArr = objArrTruncation();
    var arrlen = strArr.length;
    var formatStr = [];
    for (var i = 0; i < arrlen; i++) {
        var str = "Number of characters: " + strArr[i].name + ", Number of words with this length: " + strArr[i].count;
        formatStr.push(str);
    }
    return formatStr;
}

function clear(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function ButtonClick() {
    clear("results");
    var html = " ";
    var str = format();
    var len = str.length;
    for (var i = 0; i < len; i++) {
        html += "<p>" + str[i] + "<p>";
}
    document.getElementById("results").innerHTML += html;
}

function init() {
    var button = document.getElementById("analyse");
    button.onclick = ButtonClick;
}

window.onload = init;

