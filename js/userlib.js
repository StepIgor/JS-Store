//show user user_apps_list

function show_now(){
  var last_select = "";

  document.getElementById('user_apps_list').innerHTML = "";

  lib = JSON.parse(localStorage.getItem('library'));

  for (elem = lib.length-1; elem >= 0; elem--){
    document.getElementById('user_apps_list').innerHTML += '<div class="col s4 l2 m2"><div style="padding:0;" class="card hoverable"><div class="card-image"><img class="responsive-img" src="img/apps_screenshots/'+lib[elem]+'/0.png"></div><div class="card-content" style="padding-top:5px;padding-left:15px;"><b>'+db[lib[elem]]['product_name']+'</b><br><span class="grey-text">'+types[db[lib[elem]]['type']]+'</span></div><div class="card-action center-align"><a target="_blank" href="'+db[lib[elem]]['active_url']+'" class="waves-effect waves-light btn amber"><i class="material-icons left">launch</i><span class="hide-on-med-and-down">Запустить</span></a><a class="dropdown-trigger btn amber" href="#" data-target="dropdown1" onclick="change_last_select('+lib[elem]+')"><i class="material-icons">arrow_drop_down</i></a></div></div></div>';
  }
}

show_now();

$(document).ready(function(){
  $(".dropdown-trigger").dropdown({constrainWidth: false });
});


function change_last_select(prod_id){
  last_select = prod_id;
}


function open_store_page(){
  document.location.href = "product.html?id="+last_select;
}

function delete_app_from_lib(){
  lib.splice(lib.indexOf(lib[last_select]),1);

  localStorage.setItem('library',JSON.stringify(lib));

  show_now();
}
