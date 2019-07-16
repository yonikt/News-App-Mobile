class NewsManager {
    constructor(cityData) {
        this.newsData = []
    }


    async getNewsData(newsID) {
        let x = await $.get(`/news/${newsID}`)
        this.newsData.push(x)
        console.log(x)
        return x
    }


    // async saveCity(cityName) {
    //     let self = this.cityData
    //     let data = await this.cityData.find(i => i.name === cityName)
    //     await $.post('/city', data)
    //     return data
    // }


    // removeCity(cityName) {
    //     $.ajax({
    //         type: "DELETE",
    //         url: `/city/${cityName}`,
    //         success: function () {
    //             console.log("deleted")
    //         }
    //     })
    //     this.cityData = this.cityData.filter(c => c.name != cityName)
    // }

   
}

