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

