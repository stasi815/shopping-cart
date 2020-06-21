import data from './data.json'


function getDataCategories() {
    const categories = data.map((product) => {
        return product.category
    })
    return categories
}

function uniqueCategories() {
    const categories = getDataCategories()
    const categoryObjects = categories.reduce((obj, cat) => {
        obj[cat] = 0;
        return obj
    }, {})

    const uniqueCategories = Object.keys(categoryObjects)

    return uniqueCategories
}

function categoryCounts() {
    const categories = getDataCategories()
    const categoriesWithCounts = categories.reduce((obj,cat) => {
        if (obj[cat]) {
            obj[cat] += 1
        } else {
            obj[cat] = 1
        } return obj
    }, {})

    return categoriesWithCounts
}

function catsWithCountsList() {
    const catsCountsList = uniqueCatsArray.map((cat) => {
        return {
            name: cat,
            count: productCountObject[cat]
        }
    })

    return catsCountsList
}

const uniqueCatsArray = uniqueCategories()
const productCountObject = categoryCounts()
const categoriesAndCountArray = catsWithCountsList()

export default data
export {uniqueCatsArray, productCountObject, categoriesAndCountArray}
