function search_show_result(txt) {
  if (txt == ""){return}
  result_html = "";
  txt = txt.toLowerCase();
  found = [];

  for (prod = 1; prod <= Object.keys(db).length; prod++){
    if (db[prod]['product_name'].toLowerCase().indexOf(txt) != -1){
      found.push(prod);
    }
  }

  for (prod = 0; prod < found.length; prod++){
    result_html += "<a style='line-height:20px;' href='product.html?id="+found[prod]+"'><table class='search_line_effect'><tr><td style='width:79px;'><img style='height:64px;width:64px;margin-left:15px;' src='img/apps_screenshots/"+found[prod]+"/0.png'></td><td><span>"+db[parseInt(found[prod])]['product_name']+"</span><br><span style='color:grey;'>"+types[db[found[prod]]['type']]+"</span></td></tr></table></a>";
  }

  if (found.length == 0){
    result_html = "<div style='margin-left:15px;'>Ничего не найдено.</div>"
  }

  $('#searchResults').html(result_html);
}

function search_hide_result() {
  setTimeout(function(){$('#searchResults').html('');},85);
}
