import Justin from '../assets/images/justin.png'
import Matt from '../assets/images/matt.png'
import Joe from '../assets/images/joe.png'
import Brandon from '../assets/images/brandon.png'

interface teamDetails {
    name: string,
    linkedin: string,
    image: string
}

export const team = [
    {
        name: "Justin Lee",
        linkedin: "https://www.linkedin.com/in/justin-lee-626a69116/",
        image: Justin
    },
    {
        name: "Matt Sattler",
        linkedin: "https://www.linkedin.com/in/matthew-sattler-879a6258/",
        image: Matt
    },
    {
        name: "Joe Richard",
        linkedin: "https://www.linkedin.com/in/joe-richard/",
        image: Joe
    },
    {
        name: "Brandon Biron",
        linkedin: "https://www.linkedin.com/in/brandon-biron-b52275110/",
        image: Brandon
    },
]