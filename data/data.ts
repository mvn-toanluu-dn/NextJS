import { Images } from "../assets/images";
import { Service } from "../type/type";
import Diploma from "../components/svg/diploma";
import Electric from "../components/svg/electric";

export const services:Service[] = [
  {
    src: Images.apple,
    title: "Online Courses",
    content:
      "Choose from hundreds of free training courses, or pay to get certified to complete a course or specialization.",
    more: Images.more,
  },
  {
    src: Images.lamp,
    title: "Our Mission",
    content:
      "Developing strong vision and mission statements can help stakeholders in your school reach such a common understanding.",
    more: Images.more,
  },
  {
    src: Images.solar,
    title: "Professional Certificate",
    content:
      "Join the millions of students around the world who are already learning! Find an experienced and suitable instructor only for you..",
    more: Images.more,
  },
];

export const slider = [
  {
    id:1,
    subtitle: "Studeon Innovative & Succesful",
    maintitle: "ONLINE COURSES",
    btntitle: "MORE COURSES",
    className:"background-slider bg1"
  },
  {
    id:2,
    subtitle: "Studeon Innovative & Succesful",
    maintitle: "ONLINE COURSES",
    btntitle: "MORE COURSES",
    className:"background-slider bg2"

  },
  {
    id:3,
    subtitle: "Studeon Innovative & Succesful",
    maintitle: "ONLINE COURSES",
    btntitle: "MORE COURSES",
    className:"background-slider bg3"

  }
];

export const countup = [
  {

    countNumber: 2563,
    title: "LEARNERS EDUCATED",
  },
  {
    countNumber: 52356,
    title: "GRADUATES",
  },
  {
    countNumber: 684,
    title: "COURCES PUBLISHED",
  },
  {
    countNumber: 9584,
    title: "GLOBAL LEARNERS",
  },
]

export const features = [
  {
    src: Diploma,
    title: "Professional Degree",
    content: "Professional degrees are degrees recognized by the US Department of Education as necessary for subsequent licensing.",
    button: "MORE INFORMATION",
  },
  {
    src: Electric,
    title: "The Best Online Courses",
    content: "Find Courses and Specializations from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM.",
    button: "MORE INFORMATION",
  }
]