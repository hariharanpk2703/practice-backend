const get = (req,res)=>{res.send([
    {
        "id":"21",
        "category":"Tourism",
        "note":"IN ABOUT two months, four tourist destinations—Lonavala, Sinhagad, Shivneri and Bhima Shankar— is all set to get a facelift with detailed maps and additional features to woo more tourists to the city.",
        "title":"To woo tourists, four landmarks to get new look in Maharashtra",
        "image":"https://images.indianexpress.com/2016/03/75599.jpg",
    },

    {
        "id":"22",
        "category":"Tourism",
        "note":"If you want to see firsthand the impact of climate change, take a trip to Es Trenc, one of Mallorca’s finest beaches. Here, massive concrete bunkers — once built by Spain’s then-Dictator Francisco Franco — were originally hidden amid the sand dunes. Today, these structures stand out like sore thumbs — rising sea-water levels have swallowed up parts of the beach and radically altered this coastal landscape. In total, scientists have found that Es Trenc beach is now 40 meters shorter than it once was. If global warming continues as is projected, many more Mallorca beaches will disappear into the sea.",
        "title":"Climate change: Tourist destinations under threat",
        "image":"https://images.indianexpress.com/2022/07/climatechange1200_DW.jpeg",
    },

    {
        "id":"23",
        "category":"Tourism",
        "note":"With international travel regulations easing in most parts of the world, the first half of 2022 witnessed a surge in travellers who set out to explore various destinations after a prolonged lockdown. Airlines, too, saw a positive recovery after the pandemic caused massive losses amid a halt in operations.",
        "title":"The world's best airline for 2022 is…",
        "image":"https://images.indianexpress.com/2022/07/qatar-airways-1200.jpg",
    },

    {
        "id":"24",
        "category":"Tourism",
        "note":"It's hardly anything new when heavy monsoon rains disrupt train services in any part of our country. However, the Indian Railways went out of its way to help a young student when torrential rains spoiled his plans to reach IIT Madras. The heartwarming story has now gone viral, earning plaudits online.",
        "title":"After rain plays spoilsport, Indian Railways books cab so student doesn't miss train to Chennai",
        "image":"https://images.indianexpress.com/2022/07/railway-book-cab.jpg",
    },

    {
        "id":"25",
        "category":"Tourism",
        "note":"Indian city Ahmedabad and the state of Kerala have been mentioned in TIME magazine's list of world's greatest places of 2022. In an article dated July 12, 2022, TIME wrote, “To compile this list of the World’s Greatest Places, the top spots to visit this year, TIME solicited nominations of places from our international network of correspondents and contributors, with an eye toward those offering new and exciting experiences.”",
        "title":"What makes Kerala, Ahmedabad stand out in TIME's list of world's greatest places of 2022?",
        "image":"https://images.indianexpress.com/2022/07/Kerala-travel-1200.jpeg",
    },
])}

module.exports.apiController = get;