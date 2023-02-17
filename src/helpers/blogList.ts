import BlogListImgOne from '../assets/images/blogimg1.png'
import BlogListImgTwo from '../assets/images/blogimg2.png'


interface bloglist {
    img: any,
    heading: string, 
    description: string
}

export const blogList: bloglist[] = [
    {
        img: {BlogListImgOne},
        heading: "New Challenges Require New Perspectives",
        description: 'Climate change, aging infrastructure and increasing electricity demand - what to do?'
    },
    {
        img: {BlogListImgTwo},
        heading: "Building the Path to Preventative Maintenance",
        description: 'A calculated approach.'
    },
    {
        img: {BlogListImgOne},
        heading: "New Challenges Require New Perspectives",
        description: 'Climate change, aging infrastructure and increasing electricity demand - what to do?'
    },
    {
        img: {BlogListImgOne},
        heading: "New Challenges Require New Perspectives",
        description: 'Climate change, aging infrastructure and increasing electricity demand - what to do?'
    }
]