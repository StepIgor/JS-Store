//show user user_apps_list

function show_now(){
  var last_select = "";

  document.getElementById('user_apps_list').innerHTML = "";

  lib = JSON.parse(localStorage.getItem('library'));

  for (elem = lib.length-1; elem >= 0; elem--){
    document.getElementById('user_apps_list').innerHTML += '<li class="collection-item"><img class="responsive-img" style="width:32px;height:32px;vertical-align:middle;" src="img/apps_screenshots/'+lib[elem]+'/0.png"> <b style="vertical-align:middle;">'+db[lib[elem]]['product_name']+'</b> <span class="grey-text hide-on-med-and-down" style="vertical-align:middle;">'+types[db[lib[elem]]['type']]+'</span><a class="secondary-content dropdown-trigger btn amber" href="#" data-target="dropdown1" onclick="change_last_select('+lib[elem]+')"><i class="material-icons">arrow_drop_down</i></a><a target="_blank" href="'+db[lib[elem]]['active_url']+'" class="secondary-content waves-effect waves-light btn amber"><i class="material-icons left">launch</i><span class="hide-on-med-and-down">Запустить</span></a></li>';
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
