let num;
for (num=0; num<100; num++)
 {
    if (num%5 === 0 && num%3 === 0) { console.log("FIzz_Buzz") 
    }
    else if(num%5 === 0){console.log("buzz")
    }
    else if (num%3 === 0) {console.log('Fiz')
    }
    else{ console.log(num)}
}