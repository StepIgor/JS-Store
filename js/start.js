//show new in Store

for (elem = Object.keys(db).length; elem > Object.keys(db).length-6; elem--){
  if (elem < 1){
    break;
  }
  document.getElementById('new_in_store').innerHTML += '<div class="col s4 m2 l2"><div style="padding:0;cursor:pointer;" onclick="document.location.href = \'product.html?id='+elem+'\'" class="card hoverable"><div class="card-image"><img class="responsive-img" src="img/apps_screenshots/'+elem+'/0.png"></div><div class="card-content" style="padding-top:5px;padding-left:15px;"><b class="truncate">'+db[elem]['product_name']+'</b><br><span class="grey-text truncate">'+types[db[elem]['type']]+'</span></div></div></div>';
}


//show programs

for (elem = Object.keys(db).length; elem > Object.keys(db).length-6; elem--){
  if (elem < 1){
    break;
  }
  if (db[elem]['type'] == 1){
    document.getElementById('apps_in_store').innerHTML += '<div class="col s4 m2 l2"><div style="padding:0;cursor:pointer;" onclick="document.location.href = \'product.html?id='+elem+'\'" class="card hoverable"><div class="card-image"><img class="responsive-img" src="img/apps_screenshots/'+elem+'/0.png"></div><div class="card-content" style="padding-top:5px;padding-left:15px;"><b class="truncate">'+db[elem]['product_name']+'</b><br><span class="grey-text truncate">'+developers[db[elem]['developer_id']]['username']+'</span></div></div></div>';
  }
}


//show games

for (elem = Object.keys(db).length; elem > Object.keys(db).length-6; elem--){
  if (elem < 1){
    break;
  }
  if (db[elem]['type'] == 2){
    document.getElementById('games_in_store').innerHTML += '<div style="padding:0;cursor:pointer;" onclick="document.location.href = \'product.html?id='+elem+'\'" class="card col s4 m2 l2 hoverable"><div class="card-image"><img class="responsive-img" src="img/apps_screenshots/'+elem+'/0.png"></div><div class="card-content" style="padding-top:5px;padding-left:15px;"><b class="truncate">'+db[elem]['product_name']+'</b><br><span class="grey-text truncate">'+developers[db[elem]['developer_id']]['username']+'</span></div></div>';
  }
}
