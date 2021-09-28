
import {ReactComponent as Icon1} from '../../../Assets/Icons/breath.svg';
import {ReactComponent as Icon2} from '../../../Assets/Icons/communication.svg';
import {ReactComponent as Icon3} from '../../../Assets/Icons/deadline.svg';

import card1 from '../../../Assets/cards/platform1.png';
import card2 from '../../../Assets/cards/platform2.png';
import card3 from '../../../Assets/cards/platform3.png';
import card4 from '../../../Assets/cards/platform4.png';


export const parts = [
    {
        icon:<Icon1 />,
        title:"Submit Design Requests",
        desc:"Create a design task with just a few clicks - UI/UX, Illustrations, Graphics & Animations - we got your back! Simply fill out our brief sheet, hit submit and we’ll get started on your task right away.",
        image:card1
    },
    {
        icon:<Icon2 />,
        title:"Track Your Requests",
        desc:"Easily track all your tasks at a glance with our intuitive dashboard - you’ll never have to worry about what’s going on with your project. See what’s been submitted, what’s in progress, easily reply to your creative design team and give feedback.",
        image:card2,
        styles:"reversed-part"
    },
    {
        icon:<Icon3 />,
        title:"Everything You Need In One Place",
        desc:"Storage, Invoices and Billing all in one place. No more losing files, long email chains and lost invoices!",
        image:card3
    },
    {
        icon:<Icon1 />,
        title:"User Management",
        desc:"Have more than one team member? Invite as many team members as you’d like. Your members will be able to directly collaborate with your dedicated design team with ease.",
        image:card4,
        styles:"reversed-part"

    },
]