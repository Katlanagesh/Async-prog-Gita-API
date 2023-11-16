
     


let chapters = document.getElementById("chapter")
var result ;
async function getCountry(){
   let data = await fetch('https://bhagavadgitaapi.in/chapters/')
    result = await data.json()
//console.log(result)
    for(let i=0; i<= result.length-1;i++){
       var obj = result[i];
    //   console.log(obj)
    chapters.innerHTML+= `<option value=${obj.name}>${obj.chapter_number}</option>`      
}
}
getCountry()



function displayCountryinfo(objByname){
    const objData = result.find(obj =>obj.name===objByname);
     console.log(objData);
document.getElementById("chapter_number").innerHTML = objData.chapter_number;
document.getElementById("name").innerHTML = objData.name;
document.getElementById("translation").innerHTML = objData.translation;
document.getElementById("meaning").innerHTML = objData.meaning.en;
document.getElementById("summary").innerHTML = objData.summary.en;

}
chapters.addEventListener("change", function(event){
    displayCountryinfo(event.target.value)
})


    
    
