const firstRow = "";
const secondRow = ""; 
var retry = true;

function getRow(firstRow, secondRow) { 

    alert("задание 1");
    firstRow = prompt("впишите 1 строку: "); 
    secondRow = prompt("впишите 2 строку: "); 

    var first = (firstRow.replace(/[^a]/gi, "").length+firstRow.replace(/[^а]/gi, "").length);
    var second = (secondRow.replace(/[^a]/gi, "").length+secondRow.replace(/[^а]/gi, "").length);
    alert("a в 1 ="+first); 
    alert("a в 2 ="+second); 
    if (first>second) 
        alert(firstRow+" - Больше всего а") 
    else  alert(secondRow+" -  Больше всего а")  
} 
console.log(getRow(firstRow, secondRow)); 

function getCustomRow(firstRow, secondRow) { 

    alert("задание 1*");
    var cust = prompt("Введите букву: ")
    firstRow = prompt("Введите 1 строку: "); 
    secondRow = prompt("Введите 2 строку: "); 

    var first = 0;
    var second = 0;
    for (var i = 0; i < firstRow.length; i++) {
        if (firstRow[i]==cust) {
            first++;
        }
    }
    for (var i = 0; i < secondRow.length; i++) {
        if (secondRow[i]==cust) {
            second++;
        }
    }
    //var first = (firstRow.replace(/['cust']/gi, "").length);
    //var second = (secondRow.replace(cust, "").length);
    alert(cust +" в 1 ="+first); 
    alert(cust +" в 2 ="+second); 
} 
console.log(getCustomRow(firstRow, secondRow));

function formattedPhone() { 
    alert("задание 2 ");
    var phone = prompt("Введите номер телефона: "); 
    var lenPhone = phone.length;
    if (lenPhone == 12){
        var tt=phone.split('');
        if (tt[1] != 7) tt[1] = 7; 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 11)
    {
        var tt=phone.split('');
        if (tt[0] != 7) tt[0] = 7;
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 10)
    {
        var tt=phone.split('');
        tt.splice(0,"",7) 
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else {alert("Неверный номер")}
    /* var lenPhone = phone.length; 
    var tt=phone.split(''); 
    lenPhone == 12 
    tt.splice(2,"", " ("); 
    tt.splice(6,"", ") "); 
    tt.splice(10,"", "-"); 
    tt.splice(13,"", "-"); 
     */
    alert(tt.join(''))
    var ret = prompt("Попробывать еще ? (yes/no)");
    if (ret=="yes") {
        retry = true;
    }
    else{retry = false;}
    } 
while (true){
    if (retry == true) console.log(formattedPhone());
    else break;
}
