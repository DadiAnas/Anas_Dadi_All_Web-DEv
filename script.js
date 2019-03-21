
function showGrid(){
    var layout = document.querySelector('#layouts .user')
    var dest = document.querySelector('.users .row')
    users.forEach(function(user, index){
        var copy = layout.cloneNode(true);
        copy.querySelector('.name').innerHTML = '<b>' + user.name.last + '</b> ' + user.name.first;
        copy.querySelector('.email').innerText = user.email;
        copy.querySelector('img').setAttribute('src', user.picture.large);
        copy.classList.add(user.gender);
        copy.querySelector('button').setAttribute('onclick', 'update(' + index + ')');
        dest.appendChild(copy);
    })
    console.log(dest);
}
showGrid();

var keys = Object.keys(users[0])
function objToString (obj) {
        var str = '';
        for (var p in obj) {
          str +=p+" : "+obj[p]+"<br>"
        }
        return str;
      }
      var keys = Object.keys(users[0])
      function objToString (obj) {
              var str = '';
              for (var p in obj) {
                str +=p+" : "+obj[p]+"<br>"
  }
        return str;
}
function showTable()
      {
        var row=document.querySelector(".row")
        var btn=document.querySelector("#switchBtn")
        var table=document.querySelector("#table")
        
        var tab='<table class="table">'+
                  '<thead class="thead-blue">'+
                  '<tr><th>ID</th>' ;
        for(i in keys){tab+=' <th scope="col">'+keys[i].toUpperCase()+'</th>'}
        tab+='</tr> </thead><tbody>';

        for(i=0;i<users.length;i++){
          tab+='<tr><td>'+i+'</td>';
        for (x in keys) {
          var output=users[i][keys[x]];
          if(typeof output === "object")
          {
            tab+='<td>'+objToString(output)+'</td>';
          }
          else
            tab+='<td>'+output+'</td>'  ;
        }
        tab+='</tr>';
        }       
        tab+='</table>';
        table.innerHTML=tab;
        if(row.style.display!="none")
        {
          row.setAttribute("style","display: none")
          table.setAttribute("style","display: ")
          btn.innerHTML="Grid"

        }else
        {
          row.setAttribute("style","display: ")
          table.setAttribute("style","display: none")
          btn.innerHTML="Table"
        }
      }

function update(userIndex){
    titles = prompt("title:", users[userIndex].name.title );
    genders = prompt("Gender:", users[userIndex].name.gender );
    names = prompt("first name:", users[userIndex].name.first );
    lasts = prompt("last:", users[userIndex].name.last );
    emails = prompt("email:", users[userIndex].name.email );

    if (titles != null) users[userIndex].name.title=titles;
    if (names != null) users[userIndex].name.first=names;
    if (lasts != null)  users[userIndex].name.last=lasts;
    if (emails != null)  users[userIndex].name.email=emails;
    if (genders != null)  users[userIndex].name.gender=genders;
    

    var layout = document.querySelector('#layouts .user')
    var dest = document.querySelector('.users .row')
    
        var copy = layout.cloneNode(true);
        copy.querySelector('.name').innerHTML = '<b>' + lasts + '</b> ' + names;
        copy.querySelector('.email').innerText = emails;
        copy.querySelector('img').setAttribute('src', users[userIndex].picture.large);
        copy.classList.add(user.gender);
        copy.querySelector('button').setAttribute('onclick', 'update(' + userIndex + ')');
        dest.appendChild(copy);
}