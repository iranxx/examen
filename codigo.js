var id_pregunta;
var contador=0;
var contbuenas=0;
var id;


$(function(){

  $('div.divresp button').on('click',user)
  $('button.califica').on('click',califica);

});


function user()
{

  contador=contador+1;
  id=$(this).data().resuser;
  console.log("respuesta user: "+id);

  id_pregunta=parseInt($(this).parent().parent().data().pregunta);
  console.log("pregunta: "+id_pregunta);

 $.ajax({
      url: 'respagregada.php',
      type: 'POST',
      dataType: 'JSON',
      data: {
           id: id,
           id_pregunta: id_pregunta
          }
    })
    .done(function(data) {
    console.log(data); 
    
    });

    $.ajax({
      url: 'califica.php',
      type: 'GET',
      dataType: 'JSON',
      data: {
           id_pregunta: id_pregunta,
          

          }
    })
    

    .done(function(data){
      console.log(data);
    

      
      if(id==data.correcta){
        
        contbuenas=contbuenas+1;
         
        }else{
         
          
        }

       
 



});
}

  function califica(){
    
    var calificacion=(contbuenas/contador)*10;
    console.log("la calificacion es: "+calificacion);

    var inserta='<h2 class="calificacion">Calificacion: '+calificacion+'</h2>';
    
    $('h2.calificacion').append(inserta);
    $('h2.calificacion').show('slow');
    $('button.califica').hide('slow');

  }

  
