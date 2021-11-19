import { createContext, useState } from "react";
import useMediaQuery from "../Utilities/useMediaQuery";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const mediaQuerySize = "(max-width: 770px)";
  const mediaMatches = useMediaQuery(mediaQuerySize);

  const [isAuthenticated, setAuthenticated] = useState(false);

  const [posts, setPost] = useState([
    {
      id: 1636970373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636970373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636970373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636970373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636971373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636972373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636973373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636974373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636975373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636976373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636977373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636978373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636979373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636980373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636981373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636982373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636983373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636984373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636985373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636986373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636987373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636988373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636989373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636990373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636991373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636992373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636993373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636994373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },

    {
      id: 1636995373349,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/5_ways_to_animate_a_react_app",
      title: "5 Ways to Animate a REACT App",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "5 Ways to Animate a REACT App",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Let's talk about them",
        },
        {
          id: 1636970319705,
          type: "image",
          content: "Image 2",
          src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
        },
      ],
      tags: [
        { label: "JavaScript", value: 1 },
        { label: "REACT", value: 2 },
        { label: "Animation", value: 3 },
      ],
    },
    {
      id: 1636996373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
      title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
        },
        {
          id: 1636970319702,
          type: "paragraph",
          content:
            "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
        },
      ],
      tags: [
        { label: "Photos", value: 1 },
        { label: "Deepika Padukone", value: 2 },
      ],
    },
    {
      id: 1636997373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
      title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
        },
        {
          id: 1636970319702,
          type: "sub-heading",
          content: "Eternals Release Date",
        },
        {
          id: 1636970319705,
          type: "paragraph",
          content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
        },
      ],
      tags: [
        { label: "Eternals", value: 1 },
        { label: "Star Cast", value: 2 },
      ],
    },
    {
      id: 1636998373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
      title: "Change Your Breathing, Change Your Life",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Change Your Breathing, Change Your Life",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        },
        {
          id: 1636970319700,
          type: "paragraph",
          content:
            "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
        },
      ],
      tags: [
        { label: "Breathing", value: 1 },
        { label: "Meditation", value: 2 },
        { label: "Life Style", value: 3 },
        { label: "Healthy Living", value: 4 },
      ],
    },
  ]);

  // const [posts, setPost] = useState([
  //   {
  //     id: 1636970373349,
  //     category: "Technology",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_1",
  //     title: "Demo Post 1",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 1",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //     tags: [
  //       { label: "JavaScript", value: 1 },
  //       { label: "REACT", value: 2 },
  //       { label: "Animation", value: 3 },
  //     ],
  //   },
  //   {
  //     id: 1636970373352,
  //     category: "Bollywood",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/deepika_padukone_looks_jaw_droppingly_stunning_in_latest_photos",
  //     title: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Deepika Padukone looks Jaw Droppingly Stunning in Latest Photos",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. Deepika Padukone was spotted at the airport two days ago looking fabulous in an all-black look.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "paragraph",
  //         content:
  //           "The actress is in New York City for a work commitment and her makeup artist shared several photos of Deepika on his Instagram account. Deepika looks breathtakingly beautiful in the snaps. Dewy makeup and soft curls accentuate her look. The actress took a sabbatical last year after the release of Padmaavat to replenish emotionally. She, however, shot for multiple commercials and magazine covers in 2018. It is not clear as to whether Deepika is shooting for a magazine cover in New York today.",
  //       },
  //     ],
  //     tags: [
  //       { label: "Photos", value: 1 },
  //       { label: "Deepika Padukone", value: 2 },
  //     ],
  //   },
  //   {
  //     id: 1636970373355,
  //     category: "Hollywood",
  //     authorId: 2,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/akhil_thakur/demo_post_3",
  //     title: "Demo Post 3",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 3",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373360,
  //     category: "Fitness",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_4",
  //     title: "Demo Post 4",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 4",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373370,
  //     category: "Technology",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_5",
  //     title: "Demo Post 5",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 5",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373375,
  //     category: "Bollywood",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/prithviraj_ott_release_date_cast_digital_rights_and_more",
  //     title: "Prithviraj: OTT Release Date, Cast, Digital Rights and More",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Prithviraj: OTT Release Date, Cast, Digital Rights and More",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Akshay Kumar has a big lineup of movies scheduled to release in the next couple of years. One of the most anticipated movies among these is the historical epic action-drama Prithviraj. The movie is based on the life of Prithviraj Chauhan, a legendary Hindu Rajput warrior king of the Chahamana Dynasty. Prithviraj marks the Bollywood debut of Manushi Chhillar, the winner of the Miss World 2017 pageant. Akshay Kumar’s fans are eagerly waiting for the release of the movie as it is probably the first time he is appearing in a historical biopic. Here’s everything you need to know about Prithviraj.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Prithviraj Star Cast",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "paragraph",
  //         content:
  //           "The epic historic drama stars Akshay Kumar, Manushi Chhillar, Sonu Sood, Sanjay Dutt and Ashutosh Rana in lead roles. Akshay Kumar is in the titular role of Prithviraj Chauhan. Manushi plays Prithvira’s beloved wife Sanyogita.",
  //       },
  //     ],
  //     tags: [
  //       { label: "OTT", value: 1 },
  //       { label: "Akshay Kumar", value: 2 },
  //       { label: "Manushi Chhillar", value: 3 },
  //       { label: "Prithviraj", value: 4 },
  //     ],
  //   },
  //   {
  //     id: 1636970373377,
  //     category: "Hollywood",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_7",
  //     title: "Demo Post 7",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 7",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373379,
  //     category: "Fitness",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_8",
  //     title: "Demo Post 8",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 8",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373380,
  //     category: "Technology",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_9",
  //     title: "Demo Post 9",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 9",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373385,
  //     category: "Bollywood",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_10",
  //     title: "Demo Post 10",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 10",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373387,
  //     category: "Hollywood",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_11",
  //     title: "Demo Post 11",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 11",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373390,
  //     category: "Fitness",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_12",
  //     title: "Demo Post 12",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 12",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373394,
  //     category: "Technology",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_13",
  //     title: "Demo Post 13",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 13",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373395,
  //     category: "Bollywood",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_14",
  //     title: "Demo Post 14",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 14",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373398,
  //     category: "Hollywood",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_15",
  //     title: "Demo Post 15",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 15",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373399,
  //     category: "Fitness",
  //     authorId: 0,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/test_user/demo_post_16",
  //     title: "Demo Post 16",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 16",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373410,
  //     category: "Technology",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_17",
  //     title: "Demo Post 17",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 17",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373415,
  //     category: "Bollywood",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_18",
  //     title: "Demo Post 18",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 18",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373419,
  //     category: "Hollywood",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_19",
  //     title: "Demo Post 19",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 19",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1636970373429,
  //     category: "Fitness",
  //     authorId: 1,
  //     creationTime: "15/11/2021",
  //     readTime: 1,
  //     slug: "/post/shivangam_soni/demo_post_20",
  //     title: "Demo Post 20",
  //     upVotes: 0,
  //     content: [
  //       {
  //         id: 1636970319698,
  //         type: "heading",
  //         content: "Demo Post 20",
  //       },
  //       {
  //         id: 1636970319699,
  //         type: "image",
  //         content: "Image 1",
  //         src: "https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg",
  //       },
  //       {
  //         id: 1636970319700,
  //         type: "paragraph",
  //         content:
  //           "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
  //       },
  //       {
  //         id: 1636970319702,
  //         type: "sub-heading",
  //         content: "Let's talk about them",
  //       },
  //       {
  //         id: 1636970319705,
  //         type: "image",
  //         content: "Image 2",
  //         src: "https://cdn.pixabay.com/photo/2019/04/16/16/19/tokyo-4132144_1280.jpg",
  //       },
  //     ],
  //   },
  // ]);

  const [users, setUser] = useState([
    {
      id: 0,
      name: "Test User",
      userName: "test_user",
      email: "user@test.com",
      password: "user@1234",
      image: require("../Assets/User.png").default,
      reactions: [],
    },
    {
      id: 1,
      name: "Shivangam Soni",
      userName: "shivangam_soni",
      email: "shivangamsoni99@gmail.com",
      password: "user@1234",
      image: require("../Assets/User.png").default,
      reactions: [],
    },
    {
      id: 2,
      name: "Akhil thakur",
      userName: "akhil_thakur",
      email: "akneo@gmail.com",
      password: "user@1234",
      image: require("../Assets/User.png").default,
      reactions: [],
    },
  ]);

  return <DataContext.Provider value={{ posts, setPost, users, setUser, isAuthenticated, setAuthenticated, mediaMatches }}>{props.children}</DataContext.Provider>;
};
