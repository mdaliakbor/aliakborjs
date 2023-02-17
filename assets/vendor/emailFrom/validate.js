function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    
}
const serviceID = "service_g2dmi1c";
const templateID = "template_6cgm7wq";

emailjs.send(serviceID, templateID, params)
.then((res)=> {
    document.getElementById("name").value = "",
    document.getElementById("email").value = "",
    document.getElementById("subject").value = "",
    document.getElementById("message").value = "", 
    alert("Your message sent successfully")
})
.catch((err)=>console.log(err))