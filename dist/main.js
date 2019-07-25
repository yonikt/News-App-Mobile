const renderer = new Renderer
const newsManager = new NewsManager


const getData = async function () {
    const data = await newsManager.getNewsData()
   renderer.renderData(data)
}

getData()



