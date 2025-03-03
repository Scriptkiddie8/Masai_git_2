let arr = [10, 20 , 30, 40 ,50, 60, 70, 80, 90, 100]

for(let i=0; i<10; i++){
    if(arr[i] < 40){
        arr[i] += 20;
    }
    else if(arr[i] > 90){
        arr[i] = 90
    }
}

let cnt =0;
for(let i=0; i<10; i++){
    if(arr[i] >= 50){
        cnt++
    }
}
console.log(cnt)