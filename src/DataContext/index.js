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
      slug: "/post/test_user/demo_post_1",
      title: "Demo Post 1",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 1",
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
    },
    {
      id: 1636970373352,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_2",
      title: "Demo Post 2",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 2",
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
    },
    {
      id: 1636970373355,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/demo_post_3",
      title: "Demo Post 3",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 3",
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
    },
    {
      id: 1636970373360,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_4",
      title: "Demo Post 4",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 4",
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
    },
    {
      id: 1636970373370,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_5",
      title: "Demo Post 5",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 5",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373375,
      category: "Bollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_6",
      title: "Demo Post 6",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 6",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
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
    },
    {
      id: 1636970373377,
      category: "Hollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_7",
      title: "Demo Post 7",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 7",
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
    },
    {
      id: 1636970373379,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_8",
      title: "Demo Post 8",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 8",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373380,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_9",
      title: "Demo Post 9",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 9",
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
    },
    {
      id: 1636970373385,
      category: "Bollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_10",
      title: "Demo Post 10",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 10",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
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
    },
    {
      id: 1636970373387,
      category: "Hollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_11",
      title: "Demo Post 11",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 11",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373390,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_12",
      title: "Demo Post 12",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 12",
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
    },
    {
      id: 1636970373394,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_13",
      title: "Demo Post 13",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 13",
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
    },
    {
      id: 1636970373395,
      category: "Bollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_14",
      title: "Demo Post 14",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 14",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
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
    },
    {
      id: 1636970373398,
      category: "Hollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_15",
      title: "Demo Post 15",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 15",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373399,
      category: "Fitness",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_16",
      title: "Demo Post 16",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 16",
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
    },
    {
      id: 1636970373410,
      category: "Technology",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_17",
      title: "Demo Post 17",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 17",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373415,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_18",
      title: "Demo Post 18",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 18",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
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
    },
    {
      id: 1636970373419,
      category: "Hollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_19",
      title: "Demo Post 19",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 19",
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
    },
    {
      id: 1636970373429,
      category: "Fitness",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_20",
      title: "Demo Post 20",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 20",
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
    },
    {
      id: 1636970373439,
      category: "Technology",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_21",
      title: "Demo Post 21",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 21",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373441,
      category: "Bollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_22",
      title: "Demo Post 22",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 22",
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
    },
    {
      id: 1636970373444,
      category: "Hollywood",
      authorId: 1,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/shivangam_soni/demo_post_23",
      title: "Demo Post 23",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 23",
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
    },
    {
      id: 1636970373449,
      category: "Fitness",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/demo_post_24",
      title: "Demo Post 24",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 24",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/05/09/06/07/dog-6240043_1280.jpg",
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
    },
    {
      id: 1636970373453,
      category: "Technology",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_25",
      title: "Demo Post 25",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 25",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373458,
      category: "Bollywood",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_26",
      title: "Demo Post 26",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 26",
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
    },
    {
      id: 1636970373460,
      category: "Hollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/demo_post_27",
      title: "Demo Post 27",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 27",
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
    },
    {
      id: 1636970373462,
      category: "Fitness",
      authorId: 0,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/test_user/demo_post_28",
      title: "Demo Post 28",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 28",
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
    },
    {
      id: 1636970373479,
      category: "Technology",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/demo_post_29",
      title: "Demo Post 29",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 29",
        },
        {
          id: 1636970319699,
          type: "image",
          content: "Image 1",
          src: "https://cdn.pixabay.com/photo/2021/11/13/21/07/mountains-6792383_1280.jpg",
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
    },
    {
      id: 1636970373499,
      category: "Bollywood",
      authorId: 2,
      creationTime: "15/11/2021",
      readTime: 1,
      slug: "/post/akhil_thakur/demo_post_30",
      title: "Demo Post 30",
      upVotes: 0,
      content: [
        {
          id: 1636970319698,
          type: "heading",
          content: "Demo Post 30",
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
    },
  ]);

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
