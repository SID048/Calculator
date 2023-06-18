
   const hourEl=document.getElementById("hourr");
   function time(){
       let h=new Date().getHours();
       let getminute=new Date().getMinutes;
       let gethsecond=new Date().getSeconds;
       
    //    h.innerText=getthour;
    //    console.log(getthour);
      hourEl.innerText=h;
}
time();

