/**
 * Created by Administrator on 2017/4/30.
 */
 function setDateTime(){
    var date=new Date();
    var day=date.getDay();
    var week;
    switch(day){
      case 0:week="星期日";break;
      case 1:week="星期一";break;
      case 2:week="星期二";break;
      case 3:week="星期三";break;
      case 4:week="星期四";break;
      case 5:week="星期五";break;
      case 6:week="星期六";break;
    }
    var today=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日  "+week+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    document.getElementById("today").innerHTML=today;
  }

  window.setInterval("setDateTime()", 1000);

