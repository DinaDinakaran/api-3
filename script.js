let maindiv=document.createElement("div")
let span1=document.createElement("span");
span1.setAttribute("class","title");
span1.innerText="Find Meaning !!!"
let div1=document.createElement("div")
div1.setAttribute("class","info");
div1.innerText="Enter The Words..."
let contentdiv=document.createElement("div");
contentdiv.setAttribute("class","content")
let input=document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","input");

let btn=document.createElement("button");
btn.setAttribute("class","btn");
btn.addEventListener("click",f1)
btn.innerText="search"


contentdiv.append(input,btn)
document.body.append(span1,div1,contentdiv)






















async function f1 (){
    var one=document.getElementById("input").value;
    let a= one
    console.log(a)
   let res= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${a}`)
let res1= await res.json();
console.log(res1)
res1.forEach(word => {
  if(word){
      let ar=word.phonetics
      for(let i=0;i<1;i++){
         if(ar[i].audio){
        const b= document.createElement("br")
          const lab=document.createElement("label")
          lab.innerText="Audio"
          lab.style.color="red"
          lab.setAttribute("class","audio")
          const audio= document.createElement("audio");
          audio.src=ar[i].audio
          audio.innerText="hello"
          audio.setAttribute("class","audio")
         audio.setAttribute("controls","controls");
         const b1= document.createElement("br")
          document.body.append(b,lab,b1,audio);
         }else{
            const bi= document.createElement("br")
            const labi=document.createElement("label")
            labi.innerText="Audio"
            labi.style.color="red"
            labi.setAttribute("class","audio");
            const bii= document.createElement("br")
            let er= document.createElement("label");
            er.innerText="This Word No voice Clip Is Availble"
            er.setAttribute("class","audio")
            document.body.append(bi,labi,bii,er)
            
          
        }

        }
        let ar1=word.meanings;
        for(let i=0;i<1;i++){
        var men=ar1[i].definitions[0].definition
        const b2= document.createElement("br")
        const lab1=document.createElement("label")
          lab1.innerText="Meaning"
          lab1.style.color="red"
          lab1.setAttribute("class","audio")
          
          const b3= document.createElement("br")

    let mean=document.createElement("label");
    mean.innerHTML=men
    mean.setAttribute("class","audio")
    document.body.append(b2,lab1,b3,mean)
          
        }
  }

});
}
