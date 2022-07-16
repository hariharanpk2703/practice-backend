const get = (req,res)=>{
    res.send([
    {
        "id": "1",
        "category":"Headlines",
        "note":"Sri Lankan police fired tear gas Saturday at protesters demanding that President Gotabaya Rajapaksa and his government resign over the island nation's worst economic crisis in recent memory.",
        "title":"Sri Lanka police fire tear gas at anti-government protesters",
        "image":"https://images.indianexpress.com/2022/07/sri-lanka-protesters.jpg",
    },

    {   
        "id": "2",
        "category":"Headlines",
        "note":"Three youths, including a woman, were Friday arrested in Surat for allegedly threatening a person who had posted comments in favour of suspended BJP leader Nupur Sharma.",
        "title":"'Death threats for Instagram post in favour of Nupur Sharma', woman among 3 held in Surat",
        "image":"https://images.indianexpress.com/2022/07/ARREST-1-5-3.jpg",
    },

    {   "id": "3",
        "category":"Headlines",
        "note":"Delhi News Live Updates (July 16):  Delhi Chief Minister Arvind Kejriwal Friday hit out at Prime Minister Narendra Modi's “rewri culture” jibe aimed at freebie politics asking whether providing free and quality education and medical care was “free rewri”. He further said that those “abusing him have spent thousands of crores to buy airplanes and private jets for themselves. Kejriwal doesn't buy airplanes for himself,” and added that despite making so many things free in Delhi, its budget is “still running in profit.",
        "title":"Delhi News Live Updates: Kejriwal slams PM Modi, asks if providing free & quality education, medical care was 'rewri politics'",
        "image":"https://images.indianexpress.com/2022/07/kejriwal-2.jpg",
    },

    {   "id": "4",
        "category":"Headlines",
        "note":"With approximately 6 lakh driver-partners and a presence in 100 cities and towns, Uber has created significant earning and employment opportunities for both owner-drivers and those who are contracted by owners to drive vehicles on the platform.",
        "title":"Explained: What is Uber's profile in India, and what do the Files say about its operations in the country?",
        "image":"https://images.indianexpress.com/2022/07/The-Indian-Express-6.jpg",
    },

    {   "id": "5",
        "category":"Headlines",
        "note":"So, you recently got the Nothing phone (1) and are done admiring the brilliant design of the phone. You're ready to make the most off the smartphone and enable all of its best features. However, if you're coming from an older iOS device or a heavy skin like Xiaomi's MIUI, you may find the stock-like interface of NothingOS a bit confusing to get around.",
        "title":"Nothing phone (1): Top 15 features, settings and where to find them",
        "image":"https://images.indianexpress.com/2022/07/Nothing-phone-1-Black-ExpressPhoto.jpg",
    }])
}

module.exports.apiController = get;
