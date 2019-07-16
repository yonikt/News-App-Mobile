const renderer = new Renderer
const newsManager = new NewsManager


const getData = async function () {
    const input = $('input').val()
    const data = await newsManager.getNewsData(input)
   renderer.renderData(data)
}




$('#save').on('click', getData)



