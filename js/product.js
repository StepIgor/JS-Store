$(document).ready(function(){
    $('.slider').slider({height:400,interval:3000});
  });


var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );


if (params['id'] == "" || params['id'] == undefined){
  location.href = "index.html"
} else {

  var found = true;

  try{
    test = db[parseInt(params['id'])]['product_name'];
  } catch(e){
    found = false;
  }




  if (found == true){
    //fill data
    document.getElementById('icon_block').src = "img/apps_screenshots/"+params['id']+"/0.png";
    document.getElementById('title_block').innerHTML = db[parseInt(params['id'])]['product_name'];
    document.getElementById('developer_block').innerHTML = developers[parseInt(params['id'])]['username'];
    document.getElementById('app_category').innerHTML = types[db[parseInt(params['id'])]['type']];
    document.getElementById('short_desc').innerHTML = db[parseInt(params['id'])]['short_description'];
    document.getElementById('version_block').innerHTML = db[parseInt(params['id'])]['version'];
    document.getElementById('source_web').href = db[parseInt(params['id'])]['active_url'];
    document.getElementById('github_url').href = db[parseInt(params['id'])]['repos_url'];
    document.getElementById('prod_description').innerHTML = db[parseInt(params['id'])]['full_description'];
    document.getElementById('changelog_block').innerHTML = db[parseInt(params['id'])]['change_log'];
    document.getElementById('pub_date_line').innerHTML = db[parseInt(params['id'])]['publish_date'];
    document.getElementById('dev_info_line').innerHTML = developers[parseInt(params['id'])]['username'];
    document.getElementById('cat_info_line').innerHTML = types[db[parseInt(params['id'])]['type']];

    if (db[parseInt(params['id'])]['mobile_support'] == true){
      $('#mobile_support').html('Продукт поддерживает мобильную версию.');
      $('#mobile_support_icon').css({'color':'green'});
    } else {
      $('#mobile_support').html('Продукт поддерживает не мобильную версию.');
      $('#mobile_support_icon').css({'color':'red'});
      $('#mobile_support_icon').html();
    }


    if (db[parseInt(params['id'])]['other_sources'].length > 0){

      for (elem_id = 0; elem_id < db[parseInt(params['id'])]['other_sources'].length; elem_id++){
        if (db[parseInt(params['id'])]['other_sources'][elem_id].indexOf('google') != -1){
          $('#source_android_img').css({'display':'inline'});
          document.getElementById('source_android').href = db[parseInt(params['id'])]['other_sources'][elem_id];
        } else if (db[parseInt(params['id'])]['other_sources'][elem_id].indexOf('microsoft') != -1){
          $('#source_windows_img').css({'display':'inline'});
          document.getElementById('source_windows').href = db[parseInt(params['id'])]['other_sources'][elem_id];
        }
      }
    }


    for (elem = 1; elem <= db[parseInt(params['id'])]['screenshots']; elem++){
      document.getElementById('scr_slides').innerHTML += '<li><div style="margin:0 auto;height:400px;width:708px;background-size:100% 100%;background-position:center;background-repeat:no-repeat;background:url(\'img/apps_screenshots/'+params['id']+'/'+elem+'.png\');"></div></li>';
    }

    $(document).ready(function(){
      document.getElementById('install_but').style.marginTop = (($('#id_card_for_but').height()/2) - ($('#install_but').height()/2)) + 'px';
      setTimeout(function(){$('#install_but').css({'visibility':'visible'});},200);
    });

    $('#found').css({'display':'block'});

    document.title = db[params['id']]['product_name'] + " | JS Store";
  } else {
    $('#not_found').css({'display':'block'});
    document.title = "Ошибка, приложение не найдено! | JS Store";
  }

}
