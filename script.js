async function gitGetir(){
    const kaynak=await fetch('data.json');
    let veriler=await kaynak.json();
    console.log(veriler);
    console.log("veriler");
    veriler.ogrenciler.forEach(element => {
        let arkadaş=document.createElement("li");
        document.getElementById("arkadaşlar").appendChild(arkadaş);
        arkadaş.innerHTML=element.ad+" "+element.soyad;
    });

}
