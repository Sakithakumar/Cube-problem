let m=prompt("enter the no");
let n=prompt("enter second no");
if(m>n){
    document.write(0);
}else if(n>=m){
    sum=0;
    for(i=m;i<=n;i++){
sum+=i*i*i;

    }
    console.log(sum);
}
