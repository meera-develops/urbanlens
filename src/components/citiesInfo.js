import orlando from "../assets/img/cityImages/orlando.jpg";
import boston from "../assets/img/cityImages/boston.jpg";
import baltimore from "../assets/img/cityImages/baltimore.jpg";
import leesburg from "../assets/img/cityImages/leesburg.jpg";
import frederick from "../assets/img/cityImages/frederick.jpg";
import sanfrancisco from "../assets/img/cityImages/sanfrancisco.jpg";
import newyork from "../assets/img/cityImages/newyork.jpg";
import bangor from "../assets/img/cityImages/bangor.jpg";
import berlin from "../assets/img/cityImages/berlin.jpg";
import charleston from "../assets/img/cityImages/charleston.jpg";

const citiesInfo = [
    {
        id: "1",
        img: orlando,
        title: "Orlando, FL",
        slug: "orlando",
        carousel: "Lorem Ipsum",
        subtitle: "Orlando is a central Florida city best known for its world-famous theme parks, including Walt Disney World and Universal Studios.",
        description: "Orlando is a warm, medium-sized city in central Florida known for its year-round sunshine, diverse population, and mix of urban and suburban neighborhoods. While tourism plays a major role in the regional economy, a growing technology and service sector supports a broad residential community with plentiful lifestyle amenities and cultural offerings.",
        price: "$3,000",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'

    },
    {
        id: "2",
        img: boston,
        title: "Boston, MA",
        slug: "boston",
        carousel: "Boston, lorem ipsum dolor",
        subtitle: "Boston blends old-world charm with modern innovation, especially in education, healthcare, and technology.",
        description: "Boston is a large coastal city in New England known for its historic neighborhoods, dense urban layout, and strong academic and healthcare presence. While education, healthcare, and technology anchor the local economy, a network of walkable neighborhoods and public transit supports an urban lifestyle shaped by history, culture, and regional connectivity.",
        price: "$3,500",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'

    },
    {
        id: "3",
        img: baltimore,
        title: "Baltimore, MD",
        slug: "baltimore",
        carousel: "Baltimore says hi",
        subtitle: "Baltimore is a Mid-Atlantic port city with deep maritime roots and a strong arts and sports culture.",
        description: "Baltimore is a large Mid-Atlantic city in Maryland known for its historic neighborhoods, waterfront districts, and strong cultural identity. While healthcare, education, and port activity anchor the local economy, a mix of revitalized urban areas and long-established communities shape daily life across the city.",
        price: "$3,000",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'

    },
    {
        id: "4",
        img: leesburg,
        title: "Leesburg, VA",
        slug: "leesburg",
        carousel: "You must check out Leesburg because",
        subtitle: "Leesburg is a charming town in Northern Virginia known for its historic downtown, wineries, and scenic countryside.",
        description: "Leesburg is a historic and affluent town in Northern Virginia known for its picturesque downtown, strong community feel, and suburban setting near the Washington, D.C. metro area. While many residents commute to larger employment hubs, the local economy supports a mix of small businesses, professional services, and cultural amenities that contribute to a high quality of life.",
        price: "$2,000",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    },
    {
        id: "5",
        img: frederick,
        title: "Frederick, MD",
        slug: "frederick",
        carousel: "Visit Frederick today!!! ",
        subtitle: "Frederick sits at the foothills of the Appalachians and is known for its arts scene and Civil War history.", 
        description: "Frederick is a mid-sized city in central Maryland known for its historic downtown, suburban neighborhoods, and proximity to larger employment hubs in the Washington, D.C. region. While many residents commute to surrounding metro areas, the city maintains a strong local identity supported by small businesses, community events, and steady residential growth.",
        price: "$2,100",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    },
    {
        id: "6",
        img: sanfrancisco,
        title: "San Francisco, CA",
        slug: "san-francisco",
        carousel: "Visit the Golden Gate Bridge",
        subtitle: "Vibrant coastal city known for its innovation, diverse culture, steep hills, and iconic landmarks like the Golden Gate Bridge.",
        description: "San Francisco is a large coastal city in Northern California known for its dense urban environment, distinctive neighborhoods, and strong global influence. While technology, finance, and tourism drive much of the local economy, the city supports a residential lifestyle shaped by walkability, public transit, and access to cultural and natural amenities.",
        price: "$3,800",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    },
    {
        id: "7",
        img: newyork,
        title: "New York, NY",
        slug: "new-york",
        carousel: "lorem ipsum, lorem ipsum",
        subtitle: "Global metropolis known for its energy, diversity, and iconic skyline, often called “the city that never sleeps.”",   
        description: "New York City is the largest city in the United States, known for its dense urban environment, diverse population, and global cultural influence. While finance, media, and technology drive much of the economy, the city supports a wide range of neighborhoods and lifestyles shaped by transit access, walkability, and constant activity.",      
        price: "$4,000",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    },
    {
        id: "8", 
        img: berlin,
        title: "Berlin, NH",
        slug: "berlin",
        carousel: "Lorem Ipsum",
        subtitle: "Berlin serves as a gateway to the White Mountains and attracts visitors for hiking, snowmobiling, and scenic wilderness.", 
        description: "Berlin is a small city in northern New Hampshire known for its mountainous surroundings, industrial history, and close-knit community. While its economy has shifted from paper manufacturing, the city today supports residents through healthcare, local services, and access to outdoor recreation that shapes a slower, rural lifestyle.",        
        price: "$2,200",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'

    },
    {
        id: "9",
        img: bangor,
        title: "Bangor, ME",
        slug: "bangor",
        carousel: "lorem ipsum",
        subtitle: "Bangor combines a quiet New England feel with arts, music, and access to Maine’s forests and coast.",
        description: "Bangor is a small city in central Maine known for its riverfront setting, regional healthcare presence, and close-knit community feel. While it serves as a hub for surrounding rural areas, the city offers residents a quieter lifestyle shaped by local institutions, seasonal tourism, and access to outdoor recreation.",
        price: "$2,000",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    },
    {
        id: "10",
        img: charleston,
        title: "Charleston, SC",
        slug: "charleston",
        carousel: "lorem ipsum goes here",
        subtitle: "Charleston is a coastal city celebrated for its well-preserved historic district, colorful architecture, and Southern charm.",
        description: ",Charleston is a historic coastal city in South Carolina known for its charming architecture, walkable neighborhoods, and relaxed Southern lifestyle. It blends a strong sense of history with modern growth, offering waterfront living, a vibrant food scene, and a community-oriented pace that attracts families, retirees, and creatives.",
        price: "$3,200",
        qol: 'xx%',
        salary: 'yyy',
        cost_index: 'xxx',
        population: 'yyy',
        climate: 'xxx',
        avg_commute: 'yyy',
        avg_cost_of_living: 'xxx',
        br_rent: 'yyy'
    }
];

export default citiesInfo;