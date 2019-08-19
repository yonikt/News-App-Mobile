class NewsManager {
    constructor(cityData) {
        this.newsData = []
    }

    async getNewsData() {
        let x = await $.get(`/news`)
        this.newsData.push(x)
        console.log(this.newsData)
        return this.newsData[0]
    }

}

