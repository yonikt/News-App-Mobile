class Renderer {

   async renderData(data) {

      for (let i = 0; i < data.length; i++) {


         if(data[i].author===null || data[i].author.length>25  ){
            data[i].author= "מערכת" + data[i].title.split("-").pop()
         }


         if(data[i].description===null){
            data[i].description= data[i].title.split("-")[0]
         }


         $('#container').append(`<div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style="width: 360px; overflow: hidden; border-radius: 1px;">
         <img src=${data[i].picture} onError="this.onerror=null;this.src='https://www.mdcomms.co.uk/wp-content/uploads/2017/03/8c880ec2fa87287cbd8e61bbeaf473fd_0.jpg';" 
         class="d-block w-full">

<div class="px-2 py-2">
<p class=" title mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
${data[i].title.split("-").pop()}
</p>

<h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">
${data[i].title.split("-")[0]}
</h1>

<p class="mb-1" >
<h5>מאת: ${data[i].author} <br> ${data[i].updatedAt.slice(11, 16)}</h5>
</p>


<p class="mb-1">
${data[i].description}
</p>

</div>

<a href=${data[i].url}  target="_blank" class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
קרא עוד</a>


</div></div>`)
      }
   }

}

