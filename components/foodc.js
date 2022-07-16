const get = (req,res)=>{res.send([
    {
        "id":"11",
        "category":"Food",
        "note":"For many, a cup of hot coffee is exactly what’s required to kickstart on a refreshing note. This is due to the presence of caffeine in your cuppa which “gives us the morning jolt we need,” according to nutritionist Bhakti Kapoor. However, for several others, drinking coffee is linked to the feeling of anxiety and jitteriness, further making one feel agitated and restless. This is because your coffee contains more than just caffeine, the expert continued.",
        "title":"Does drinking coffee make you feel anxious? This could be the reason",
        "image":"https://images.indianexpress.com/2022/07/coffee1200_getty.jpg",
    },

    {
        "id":"12",
        "category":"Food",
        "note":"Protein supplements are extremely crucial for muscle repair, however, one should always consult a physician before consuming them, so that any potential side effects can be prevented, says Dr. Suranjit Chatterjee, Senior Consultant, Internal Medicine, Indraprastha Apollo Hospital.",
        "title":"Potential side effects of protein supplements gym enthusiasts must know",
        "image":"https://images.indianexpress.com/2022/07/whey-6759621-chatterjee.jpg",
    },

    {
        "id":"13",
        "category":"Food",
        "note":"If you are on social media, you would have definitely come across some bizarre food videos that left you scratching your head. The latest addition to such food experiments is the 'ice pizza'. Yes, you read that right! Shared by an Instagram page — 'Does He Bake Dough' — the ice pizza recipe has gone viral on the internet, amassing over 1 lakh views and thousands of comments.",
        "title":"Watch: This viral recipe for ice pizza has left netizens puzzled",
        "image":"https://images.indianexpress.com/2022/07/pizza_1200_getty.jpg",
    },

    {
        "id":"14",
        "category":"Food",
        "note":"What makes fried okra so special is more than how it's prepared: It's how the dish reflects the spirit of the Black American cooks who have preserved its legacy, while creating their own versions and interpretations.",
        "title":"Fried okra, beyond the batter",
        "image":"https://images.indianexpress.com/2022/07/FRIED-OKRA-1200.jpg",
    },

    {
        "id":"15",
        "category":"Food",
        "note":"Detection in the Chinese city of Wuhan of a bacteria that caused cholera in a student and was separately found in samples from softshell turtles at a food market has struck a sensitive nerve with ordinary Chinese people, with some relating it to Covid-19.",
        "title":"In China's Wuhan, cholera-causing bacteria in turtles strikes nerve",
        "image":"https://images.indianexpress.com/2022/07/Meat-china-1200.jpg",
    },
])}

module.exports.apiController = get;