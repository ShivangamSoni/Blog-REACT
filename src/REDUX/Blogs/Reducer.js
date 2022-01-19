import ACTION_TYPES from "./ActionTypes";

// const posts = [
//   {
//     id: 1636970373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636970373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636971373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636972373352,
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
//     id: 1636973373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636974373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636975373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636976373352,
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
//     id: 1636977373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636978373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636979373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636980373352,
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
//     id: 1636981373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636982373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636983373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636984373352,
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
//     id: 1636985373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636986373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636987373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636988373352,
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
//     id: 1636989373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636990373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636991373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636992373352,
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
//     id: 1636993373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636994373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },

//   {
//     id: 1636995373349,
//     category: "Technology",
//     authorId: 0,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/test_user/5_ways_to_animate_a_react_app",
//     title: "5 Ways to Animate a REACT App",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "5 Ways to Animate a REACT App",
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
//     id: 1636996373352,
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
//     id: 1636997373355,
//     category: "Hollywood",
//     authorId: 2,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/akhil_thakur/eternals_release_date_star_cast_trailer_and_everything_you_need_to_know",
//     title: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Eternals: Release Date, Star Cast, Trailer and Everything You Need To Know",
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
//           "Marvel’s Eternals bring up a whole spectrum of new superheroes in the Marvel Cinematic Universe. Eternals are those archaic aliens that have lived, or say hidden, for around 7,000 years on planet Earth. Following the events of Avengers: Endgame, an unexpected tragedy occurs. Observing all this, Eternals reunite themselves and protect the planet from their cruel companions, the Deviants, for the sake of humanity.",
//       },
//       {
//         id: 1636970319702,
//         type: "sub-heading",
//         content: "Eternals Release Date",
//       },
//       {
//         id: 1636970319705,
//         type: "paragraph",
//         content: "Beginning with the release date, Eternals will release in theatres on November 5, 2021 in the United States.",
//       },
//     ],
//     tags: [
//       { label: "Eternals", value: 1 },
//       { label: "Star Cast", value: 2 },
//     ],
//   },
//   {
//     id: 1636998373360,
//     category: "Fitness",
//     authorId: 1,
//     creationTime: "15/11/2021",
//     readTime: 1,
//     slug: "/post/shivangam_soni/change_your_breathing_change_your_life",
//     title: "Change Your Breathing, Change Your Life",
//     upVotes: 0,
//     content: [
//       {
//         id: 1636970319698,
//         type: "heading",
//         content: "Change Your Breathing, Change Your Life",
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
//           "Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process.",
//       },
//     ],
//     tags: [
//       { label: "Breathing", value: 1 },
//       { label: "Meditation", value: 2 },
//       { label: "Life Style", value: 3 },
//       { label: "Healthy Living", value: 4 },
//     ],
//   },
// ];

const defaultState = { blogs: [], active: { blog: {}, user: {}, latestByUser: [] } };

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.STORE_ALL_BLOGS:
      const { blogs } = payload;
      return { ...state, blogs: blogs };
    case ACTION_TYPES.STORE_ACTIVE_BLOG:
      const { blog } = payload;
      return { ...state, active: { ...state.active, blog } };
    case ACTION_TYPES.STORE_ACTIVE_AUTHOR:
      const { user } = payload;
      return { ...state, active: { ...state.active, user } };
    case ACTION_TYPES.STORE_LATEST_BY_USER:
      const { latestByUser } = payload;
      return { ...state, active: { ...state.active, latestByUser } };
    default:
      return state;
  }
};

export default reducer;