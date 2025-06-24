const a="*";
const b=" ";

for(let i=0; i<10; i++){
    if(i%2==1){
    console.log(b.repeat((10-i)/2)+a.repeat(i));
    }
}