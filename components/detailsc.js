const get = (req,res)=>{
    res.send([
    {
        "name": "Hariharan",
        "title":"Sri Lanka President likely to fly to Singapore; military calls for political resolution",
        "image":"https://images.indianexpress.com/2022/07/Sri-lanka-featured-3.jpg",
    },

    {   "name": "Hariharan2",
        "title":"Euro falls below dollar parity for first time since 2002",
        "image":"https://images.indianexpress.com/2022/07/euro-dollar-reuters-currency-1200.jpeg",
    },

    {   "name": "Hariharan3",
        "title":"India trump Pakistan in latest ICC ODI Team Rankings",
        "image":"https://images.indianexpress.com/2022/06/SA-IND-5.jpg",
    },

    {   "name": "Hariharan4",
        "title":"The fall of GARI: Whats happening with the Salman Khan backed social token",
        "image":"https://images.indianexpress.com/2020/06/chingari-main-fb.jpg",
    },

    {   "name": "Hariharan5",
        "title":"Symbiosis School of Sports Sciences (SSSS) launches undergraduate program: B.Sc (Sport & Exercise Science)",
        "image":"https://images.indianexpress.com/2022/07/SSSS-Image-1.jpg",
    }])
}

module.exports.apiController = get;
