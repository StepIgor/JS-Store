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


    $('#found').css({'display':'block'});
  } else {
    $('#not_found').css({'display':'block'});
  }

}
