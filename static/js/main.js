var btns = $('#navbarContent .navbar-nav .nav-link');
for(var i=0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

$(window).scroll(function () { 
  var distance = $(window).scrollTop(); 
  $('.page-section').each(function (i) { 
      if ($(this).position().top  
          <= distance + 50) { 
              $('.navbar-nav a.active') 
                  .removeClass('active'); 

              $('.navbar-nav a').eq(i) 
                  .addClass('active'); 
      } 
  }); 
}).scroll(); 

// Tooltip Section
var isMobile = false; 

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
  $(document).ready(function(){
    $('i[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        trigger: 'click'
    });
  });

  $(function () {
    $(document).on('shown.bs.tooltip', function (e) {
      setTimeout(function () {
        $(e.target).tooltip('hide');
      }, 3000);
    });
  });
} else {
  $(document).ready(function(){
    $('i[data-toggle="tooltip"]').tooltip({
        animation: true,
        animated: 'fade',
        trigger: 'hover',
        delay: {show: 300, hide: 3000}
    });
  });
}

// Fading about text 
$(document).ready(function(){
  $(".about_p").hide();
  $(".about_p").fadeIn(2000);
});

$(document).ready(function(){
  $("#experience_section").hide();
  $("#experience_section").fadeIn(2000);
});

$(document).ready(function(){
  $("#section3").hide();
  $("#section3").fadeIn(2000);
});

$(document).ready(function(){
  $("#section4").hide();
  $("#section4").fadeIn(2000);
});

// Fading icons - Skills section
$(document).ready(function(){
  $(".fa-python").hide();
  $(".fa-python").fadeIn(1000);
});

$(document).ready(function(){
  $(".fa-terminal").hide();
  $(".fa-terminal").fadeIn(1250);
});

$(document).ready(function(){
  $(".fa-cubes").hide();
  $(".fa-cubes").fadeIn(1500);
});

$(document).ready(function(){
  $(".fa-project-diagram").hide();
  $(".fa-project-diagram").fadeIn(1750);
});

$(document).ready(function(){
  $(".fa-yammer").hide();
  $(".fa-yammer").fadeIn(2000);
});

$(document).ready(function(){
  $(".fa-linux").hide();
  $(".fa-linux").fadeIn(2250);
});

$(document).ready(function(){
  $(".fa-cloud").hide();
  $(".fa-cloud").fadeIn(2500);
});

$(document).ready(function(){
  $(".fa-aws").hide();
  $(".fa-aws").fadeIn(2750);
});

$(document).ready(function(){
  $(".fa-google").hide();
  $(".fa-google").fadeIn(3000);
});

$(document).ready(function(){
  $(".fa-jenkins").hide();
  $(".fa-jenkins").fadeIn(3250);
});

$(document).ready(function(){
  $(".fa-database").hide();
  $(".fa-database").fadeIn(3500);
});

$(document).ready(function(){
  $(".fa-git").hide();
  $(".fa-git").fadeIn(4000);
});

// Experience Section

$(document).ready(function(){
  $("#pointer_1").on('click', function(){
    $("#work_details_1").slideToggle('slow');
  });
});


$(document).ready(function(){
  $("#pointer_2").on('click', function(){
    $("#work_details_2").slideToggle('slow');
  });
});

$(document).ready(function(){
  $("#pointer_3").on('click', function(){
    $("#work_details_3").slideToggle('slow');
  });
});

$(document).ready(function(){
  $("#pointer_4").on('click', function(){
    $("#work_details_4").slideToggle('slow');
  });
});
