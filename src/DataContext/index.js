import { createContext, useState } from "react";
import useMediaQuery from "../Utilities/useMediaQuery";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const mediaQuerySize = "(max-width: 770px)";
  const mediaMatches = useMediaQuery(mediaQuerySize);

  const [isAuthenticated, setAuthenticated] = useState(false);

  const posts = [
    {
      id: "1",
      category: "Technology",
      title: "JS Functions",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "2",
      category: "Technology",
      title: "JS Functions vs Arrow Functions",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "3",
      category: "Fitness",
      title: "My Trip to Manali",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "4",
      category: "Hollywood",
      title: "Photography Tips",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "5",
      category: "Bollywood",
      title: "Koi Naye Bakwas",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "6",
      category: "Technology",
      title: "JS Functions 2",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions-2",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "7",
      category: "Technology",
      title: "JS Functions vs Arrow Functions 2",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions-2",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "8",
      category: "Fitness",
      title: "My Trip to Manali 2",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali-2",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "9",
      category: "Hollywood",
      title: "Photography Tips 2",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips-2",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "10",
      category: "Bollywood",
      title: "Koi Naye Bakwas 2",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas-2",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "11",
      category: "Technology",
      title: "JS Functions 3",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions-3",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "12",
      category: "Technology",
      title: "JS Functions vs Arrow Functions 3",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions-3",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "13",
      category: "Fitness",
      title: "My Trip to Manali 3",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali-3",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "14",
      category: "Hollywood",
      title: "Photography Tips 3",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips-3",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "15",
      category: "Bollywood",
      title: "Koi Naye Bakwas 3",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas-3",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "16",
      category: "Technology",
      title: "JS Functions 4",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions-4",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "17",
      category: "Technology",
      title: "JS Functions vs Arrow Functions 4",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions-4",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "18",
      category: "Fitness",
      title: "My Trip to Manali 4",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali-4",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "19",
      category: "Hollywood",
      title: "Photography Tips 4",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips-4",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "20",
      category: "Bollywood",
      title: "Koi Naye Bakwas 4",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas-4",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "21",
      category: "Technology",
      title: "JS Functions 5",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions-5",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "22",
      category: "Technology",
      title: "JS Functions vs Arrow Functions 5",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions-5",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "23",
      category: "Fitness",
      title: "My Trip to Manali 5",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali-5",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "24",
      category: "Hollywood",
      title: "Photography Tips 5",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips-5",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "25",
      category: "Bollywood",
      title: "Koi Naye Bakwas 5",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas-5",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "26",
      category: "Technology",
      title: "JS Functions 6",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 2400000,
      slug: "/post/shivangam-soni/js-functions-6",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "27",
      category: "Technology",
      title: "JS Functions vs Arrow Functions 6",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 19000,
      slug: "/post/akhil-thakur/js-functions-vs-arrow-functions-6",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "28",
      category: "Fitness",
      title: "My Trip to Manali 6",
      authorId: "1",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 270,
      slug: "/post/shivangam-soni/my-trip-to-manali-6",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "29",
      category: "Hollywood",
      title: "Photography Tips 6",
      authorId: "2",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 10,
      slug: "/post/akhil-thakur/photography-tips-6",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
    {
      id: "30",
      category: "Bollywood",
      title: "Koi Naye Bakwas 6",
      authorId: "3",
      creationTime: "Today",
      readTime: "2 Minutes",
      upVotes: 98000,
      slug: "/post/mridul-walia/koi-naye-bakwas-6",
      content:
        "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.",
    },
  ];

  const users = [
    {
      id: "1",
      name: "Shivangam Soni",
      email: "shivangamsoni99@gmail.com",
    },
    {
      id: "2",
      name: "Akhil thakur",
      email: "akneo@gmail.com",
    },
    {
      id: "3",
      name: "Mridula Walia",
      email: "walia728@gmail.com",
    },
  ];

  return <DataContext.Provider value={{ posts, users, mediaMatches, isAuthenticated, setAuthenticated }}>{props.children}</DataContext.Provider>;
};
