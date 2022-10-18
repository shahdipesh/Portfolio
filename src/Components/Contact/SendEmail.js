import emailjs from '@emailjs/browser';


export const sendEmail =(templateParams)=>{
    emailjs.send('service_njd0ae6', 'template_mdvut93', templateParams,'vKftFFIoO5AYyuhF0')
.then(function(response) {
   console.log('SUCCESS!', response.status, response.text);
   return new Promise((resolve,reject)=>{
     resolve(response)
     })
     ;
}, function(error) {
  return "failure";
})
}



