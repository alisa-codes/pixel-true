import card1 from '../../../Assets/cards/part1Img.svg';
import card2 from '../../../Assets/cards/part2Img.svg';
import card3 from '../../../Assets/cards/part3Img.svg';
import card4 from '../../../Assets/cards/poor.svg';
import card5 from '../../../Assets/cards/bad.svg';
import card6 from '../../../Assets/cards/missed.svg';

import demo1 from '../../../Assets/backgrounds/demo1.png';
import demo2 from '../../../Assets/backgrounds/demo2.svg';
import demo3 from '../../../Assets/backgrounds/demo3.png';
import demo4 from '../../../Assets/backgrounds/demo4.jpg';

import {ReactComponent as Icon1} from '../../../Assets/Icons/breath.svg';
import {ReactComponent as Icon2} from '../../../Assets/Icons/communication.svg';
import {ReactComponent as Icon3} from '../../../Assets/Icons/deadline.svg';

import work1 from '../../../Assets/cards/work1.png';
import work2 from '../../../Assets/cards/work2.png';
import work3 from '../../../Assets/cards/work3.png';

import profile1 from '../../../Assets/cards/profile1.jpg';
import profile2 from '../../../Assets/cards/profile2.png';
import profile3 from '../../../Assets/cards/profile3.jpg';


export const parts = [
    {
        icon:<Icon1 />,
        title:"Breath-taking Designs",
        desc:"All of our designers are carefully vetted and have years of experience working in the design industry.You’ll get a dedicated UI Designer, Graphic Designer, Illustrator and Project Manager. With a full design team, getting breath-taking designs couldn't be any easier!",
        image:card1
    },
    {
        icon:<Icon2 />,
        title:"Communication That Matters",
        desc:"With a dedicated Project Manager who cares about your success and direct live-chat access to your experienced designers, communication issues will be no more!",
        image:card2,
        styles:"reversed-part"
    },
    {
        icon:<Icon3 />,
        title:"Breath-taking Designs",
        desc:"All of our designers are carefully vetted and have years of experience working in the design industry.You’ll get a dedicated UI Designer, Graphic Designer, Illustrator and Project Manager. With a full design team, getting breath-taking designs couldn't be any easier!",
        image:card3
    },
]

export const disAdv = [
    {
        title:"Poor Quality",
        desc:"You’re tired of the guessing game to find the right designer.",
        img:card4
    },
    {
        title:"Bad Communication",
        desc:"You’re fed up with having to explain yourself multiple times.",
        img:card5
    },
    {
        title:"Missed deadlines",
        desc:"You lose hope as deadlines are missed over and over again.",
        img:card6
    }
]
export const demos = [
    {
        backgroundImage:demo1,
        sub:"UI Design",
        desc:"Graphics for Xrii.io"
    },
    {
        backgroundImage:demo2,
        sub:"App Design",
        desc:"Mobile Design"
    },
    {
        backgroundImage:demo3,
        sub:"UI Design",
        desc:"Website Design for Flash Hiring"
    },
    {
        backgroundImage:demo4,
        sub:"App Design",
        desc:"Habits App Design"
    }
]
export const workList = [
    {
        number:"01",
        image:work1,
        title:"Create design projects",
        desc:"Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests"
    },
    {
        number:"02",
        image:work2,
        title:"Drafts & revisions",
        desc:"You’ll receive your design within a few business days. Submit as many revisions as you want until the design is perfect!"
    },
    {
        number:"03",
        image:work3,
        title:"Complete & download",
        desc:"Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests"
    },
]

export const feedbacks = [
    {
        image:profile1,
        name:"ALISTAIR FRASER",
        job:"Founder at peoplecollective.io",
        desc:"From the kick off call, right through to the end of the project, the comms was on point and they always kept us updated. The speed at which they work is phenomenal and this is no doubt down to not only having a dedicated account manager but also the skill of the designer."
    },
    {
        image:profile2,
        name:"TYLER SCOTT",
        job:"Founder at callshark.com",
        desc:"My experience was nothing short of amazing! In less than 6 weeks, I was able to get 30+ high quality designs that we were able to put into production right away. The project management was great and it was awesome communicating directly with the designers throughout the process."
    },
    {
        image:profile3,
        name:"JOON K LEE",
        job:"CEO, Inquivix",
        desc:"I have nothing but praise for the Pixel True team and their services. The project manager coordinates everything very well and all the designers are on the same page."
    }
]