/* Demo code
fetch("https://corona.blloc.com/current?country=Australia")
.then(res => res.json())
.then((out) =>{
    console.log("Output: ", out.statesData[0].confirmed);
}).catch(err => console.error(err));
*/


//Fetches country info

function getCountryInfo (url){
    setInterval(function(){
        fetch("https://corona.blloc.com/current?country=Australia")
        .then(res => res.json())
        .then((out) =>{
            document.getElementById("confirmed").innerHTML = out.confirmed;
            document.getElementById("recovered").innerHTML = out.recovered;
            document.getElementById("deaths").innerHTML = out.deaths;
            document.getElementById("source").innerHTML = out.source;
        }).catch(err => console.error(err));
    }, 500);
}


//Fetches state info
function getStateInfo (url){
    setInterval(function(){
        fetch("https://corona.blloc.com/current?country=Australia")
        .then(res => res.json())
        .then((out) =>{
    
            for(var i = 0; i < out.statesData.length; i++) {
                var obj = (out.statesData[i]);
                if (obj.id == "au.act"){
                    document.getElementById("act").innerHTML= obj.label_en;
                    document.getElementById("act-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("act-recovered").innerHTML= obj.recovered;
                    document.getElementById("act-deaths").innerHTML= obj.deaths;
                }
                
                if (obj.id == "au.nsw"){
                    document.getElementById("nsw").innerHTML= obj.label_en;
                    document.getElementById("nsw-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("nsw-recovered").innerHTML= obj.recovered;
                    document.getElementById("nsw-deaths").innerHTML= obj.deaths;
                }
                if (obj.id == "au.nt"){
                    document.getElementById("nt").innerHTML= obj.label_en;
                    document.getElementById("nt-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("nt-recovered").innerHTML= obj.recovered;
                    document.getElementById("nt-deaths").innerHTML= obj.deaths;
                }
    
                if (obj.id == "au.qld"){
                    document.getElementById("qld").innerHTML= obj.label_en;
                    document.getElementById("qld-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("qld-recovered").innerHTML= obj.recovered;
                    document.getElementById("qld-deaths").innerHTML= obj.deaths;
                }
                if (obj.id == "au.sa"){
                    document.getElementById("sa").innerHTML= obj.label_en;
                    document.getElementById("sa-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("sa-recovered").innerHTML= obj.recovered;
                    document.getElementById("sa-deaths").innerHTML= obj.deaths;
                }
                
                if (obj.id == "au.tas"){
                    document.getElementById("tas").innerHTML= obj.label_en;
                    document.getElementById("tas-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("tas-recovered").innerHTML= obj.recovered;
                    document.getElementById("tas-deaths").innerHTML= obj.deaths;
                }
    
                if (obj.id == "au.vic"){
                    document.getElementById("vic").innerHTML= obj.label_en;
                    document.getElementById("vic-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("vic-recovered").innerHTML= obj.recovered;
                    document.getElementById("vic-deaths").innerHTML= obj.deaths;
                }
                if (obj.id == "au.wa"){
                    document.getElementById("wa").innerHTML= obj.label_en;
                    document.getElementById("wa-confirmed").innerHTML= obj.confirmed;
                    document.getElementById("wa-recovered").innerHTML= obj.recovered;
                    document.getElementById("wa-deaths").innerHTML= obj.deaths;
                }
            }
            
            
        }).catch(err => console.error(err));
    }, 500);
}


let url = "https://corona.blloc.com/current?country=Australia";

document.addEventListener('DOMContentLoaded', function(){
    getCountryInfo(url);
    getStateInfo(url);  
})

