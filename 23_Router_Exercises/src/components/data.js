import whiskey from "../assets/images/whiskey.jpg"
import hazel from "../assets/images/hazel.jpg"
import tubby from "../assets/images/tubby.jpg"

const data = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Hazel",
            age: 3,
            src: hazel,
            facts: [
                "Hazel has soooo much energy!",
                "Hazel is highly intelligent.",
                "Hazel loves people more than dogs."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is not the brightest dog",
                "Tubby does not like walks or exercise.",
                "Tubby loves eating food."
            ]
        }
    ]
}

export default data;
