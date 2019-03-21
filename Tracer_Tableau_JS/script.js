
function makeTable(NombreDeColonne,NombreDeLigne)
{
    var tableau = "<table class='table'><thead><tr>";
    for(var i = 0; i < NombreDeColonne; i++)
        {
            tableau+= "<th scope='col'>"+parseInt(i+1)+"</th>";
        }
    tableau+="</tr>  </thead>";
    tableau+="<tbody>";
    for(i = 0; i < NombreDeLigne; i++)
        {
            tableau+= "<tr><th scope='row'>"+i+"</th>                        <td></td><td></td><td></td></tr>"
        }
    tableau+=" </tbody> </table>";
    return tableau;
}
function afficherTableau()
{
    var NombreDeLigne = parseInt(document.getElementById("1").value);
var NombreDeColonne = parseInt(document.getElementById("2").value);
    var table=makeTable(NombreDeColonne,NombreDeLigne);
    document.getElementById("tables").innerHTML=table;
}
afficherTableau();