const btn=document.querySelector('.claim')
const inputs=document.querySelectorAll('.forminput')
const labels=document.querySelectorAll('.warning')
const email=document.querySelector('.email')
const emptyFeild =()=>{
    
    for (const item of inputs ){
    if (item.value <1) {
        item.classList.toggle('inputError')
    

    }
}
for (const item of labels ){
   
    item.classList.toggle('hidden')

}
if ( email.placeholder==='Email Address') {
            
    email.placeholder='email@example/com'   
} else {
    email.placeholder='Email Address'
}

    }

   


btn.addEventListener('click',emptyFeild)

















