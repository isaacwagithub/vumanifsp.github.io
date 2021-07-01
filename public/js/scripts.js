var services,myOutput;
var vso = [
    {
        id: "funeral",
        HTMLContent: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Family Funeral Cover"+"</h5>"+""+"<p>"+"We offer our clients a peace of mind knowing that they can bury their loved ones with dignity"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+""+"<br/>"+""+"<h4>"+"Benefits"+"</h4>"+""+"<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Tombstone"+"</p>"+""+"</li>"+""
    },
    {
        id: "brokery",
        HTMLContent: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Broker Service"+"</h5>"+""+"<p>"+"We offer our clients a peace of mind knowing that they can bury their loved ones with dignity"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+""+"<br/>"+""+"<h4>"+"Benefits"+"</h4>"+""+"<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Tombstone"+"</p>"+""+"</li>"+""
    },
    {
        id: "lifeCover",
        HTMLContent: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Life Cover Service"+"</h5>"+""+"<p>"+"We offer our clients a peace of mind knowing that they can bury their loved ones with dignity"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+""+"<br/>"+""+"<h4>"+"Benefits"+"</h4>"+""+"<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Tombstone"+"</p>"+""+"</li>"+""
    },
    {
        id: "career",
        HTMLContent: ""+"<br/>"+""+"<li>"+""+"<h5 style='font-weight:bold;font-size:150%;'>"+"Career"+"</h5>"+""+"<p>"+"We offer our clients a peace of mind knowing that they can bury their loved ones with dignity"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Family funeral cover from R100 per month"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Cover anyone from the age of 0 - 100 years"+"</p>"+""+"<br/>"+""+"<h4>"+"Benefits"+"</h4>"+""+"<p>"+""+"<span>"+""+"</span>"+"Groceries"+"</p>"+""+"<p>"+""+"<span>"+""+"</span>"+"Tombstone"+"</p>"+""+"</li>"+""
    }
];
function changeService(id){

    services = document.getElementsByClassName("service");    
    myOutput = document.getElementById("ulOffers");
   
    for(var i = 0; i <= services.length-1; i++){
        
        if(services[i].attributes[1].value == id){
            //Adding the tab_actrive class to the clicked nav link
            services[i].classList.add("tab_active");
            //clearing the output to display new content
            myOutput.innerHTML = "";
            //Appending data associated with the clicked nav link
            myOutput.innerHTML = vso[i].HTMLContent
        }else{
            services[i].classList.remove("tab_active");
        }
    }
}
