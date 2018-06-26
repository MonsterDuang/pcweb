import cityData from '../api/city.json'

let cityHash = {}

function toHash(data, hash) {
    data.forEach((item) => {
        hash[item.code] = item
        if (item.district && item.district.length > 0) {
            toHash(item.district, hash)
        }
    })

}
toHash(cityData, cityHash)

function searchCityCode(province, city, region) {
    let len = cityData.length;
    let code = []
    let cityArr = []
    let regionArr = []
    for (let i = 0; i < len; i++) {
        if (cityData[i].fullname.indexOf(province) !== -1) {
            code.push(cityData[i].code)
            cityArr = cityData[i].district
            break
        }
    }
    let cLen = cityArr.length
    for (let i = 0; i < cLen; i++) {
        if (cityArr[i].fullname.indexOf(city) !== -1) {
            code.push(cityArr[i].code)
            regionArr = cityArr[i].district
            break
        }
    }
    let rLen = regionArr.length
    for (let i = 0; i < rLen; i++) {
        if (regionArr[i].fullname.indexOf(region) !== -1) {
            code.push(regionArr[i].code)
            break
        }
    }
    return code
}
export {
    cityHash,
    cityData,
    searchCityCode
}