class Renderer {

   async renderData(data) {
   
$('#container').append(`<div>Source: ${data.source} <br>
<div>Author: ${data.author} <br>
Published At: ${data.updatedAt} <br>
<div class="title">${data.title}</div><br>
${data.description} <br>
<img src= ${data.picture} width="120"></div> <br> <br>`)
     }
     
    }
    
