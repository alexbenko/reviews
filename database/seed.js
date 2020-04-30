var model = require('./index')


let rating = [5, 4, 3, 2, 1];
//random rating generator
// let ratingGenerator = rating[Math.floor(Math.random() * rating.length)];

let adjective = ['Stretchy', 'Soft', 'High-Rise', 'ABC', 'Warpstreme'];
const noun = [
  'Jogger',
  'Sweats',
  'Hoodie',
  'Bra',
  'Tight',
  'Shirt',
  'T-Shirt',
  'Coat',
  'Jacket'
];

let reviewTitle = [
  'Wicked',
  'Awesome',
  'Terrible',
  'Mehh',
  'Fits',
  'Thank you!',
  'Perfect pants',
  'Are a must!',
  'Overpriced',
  'Super Comfy',
  'Quality that can be felt',
  'A little dissapointed'
];

//random title generator
// let titleGenerator = `${reviewTitle[Math.floor(Math.random() * reviewTitle.length)]} ${adjective[Math.floor(Math.random() * adjective.length)]} ${noun[Math.floor(Math.random() * noun.length)]}`

let pronouns = ['I', 'She', 'he', 'it']
let connectingWords = ["didn't", "can't", "wouldn't", "isn't", "especially", "loved", "hated", "enjoyed", "damaged", "begin", "appear", "climb", "danced", "eat", "find", "hesitated", "lay", "might", "neglect", "received"]
let moreWords = ['are', 'super', 'have', 'been', 'everyday', 'color', 'different', 'office', 'gym', 'rock climbing', 'sucks', 'second pair', 'doing well', 'well done', 'will buy more', 'other', 'picture', 'instagram', 'tik-tok', 'ratchet', 'clubbing', 'girls night out', 'pub crawl', 'sleeping']
let evenMoreWords = ['saggy', 'sexy', 'never washed', 'had a problem', 'gift', 'regularly experience', 'no room down there', 'brother', 'great gift']

//random review generator
let reviewGenerator = `${pronouns[Math.floor(Math.random() * pronouns.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]} ${evenMoreWords[Math.floor(Math.random() * evenMoreWords.length)]}`



let recommendation = [true, false];

//random recommendation generator
// let randomRecommendation = recommendation[Math.floor(Math.random() * recommendation.length)]

let username = [
  'Joshua0612',
  'Freedom Ha',
  'Kyo',
  'Kim2Smooth',
  'Siddharth117',
  'OMGurl',
  'TopStud441',
  'RonaVis19',
  'Running4Days',
  'ABC-NotMe',
  'Basic442',
  'Christoferr',
  'Jerrrmy',
  'Annna332',
  'Danny494',
  'Jennifer444',
  'TapDat44',
  'Stupd',
  'jurr',
  'Dopemac',
  'NookieMonster',
  'KMan2674984',
  'Jayjayjayjay',
  'MrComfy',
  'Trishm'
];

//random username generator
// let usernameGenerator = username[Math.floor(Math.random() * username.length)]

let emails = [
  'Joshua0612@gmail.com',
  'Freedom@gmail.com',
  'Kyo@gmail.com',
  'Kim2Smooth@gmail.com',
  'OMGurl@gmail.com',
  'MrComfy@gmail.com',
  'Siddharth117@gmail.com',
  'ABC-NotMe@gmail.com',
  'Christoferr@gmail.com',
  'Jayjayjayjay@gmail.com',
  'Dopemac@gmail.com',
  'TapDat44@gmail.com',
  'KMan2674984@gmail.com',
  'Stupd@gmail.com'
];

//random email generator
// const randomEmail = emails[Math.floor(Math.random() * emails.length)]

let age = [
  'noAge',
  'under18',
  'between1824',
  'between2534',
  'between3544',
  'between4554',
  'between5565',
  'over65'
];

let createAge = () => {
  let createAge = {};
  for (let i = 0; i < age.length; i++) {
    createAge[age[i]] = false;
  }
  return createAge;
};

//random age input for database
let randomAge = () => {
  let newAgeGroup = createAge();
  let randomAgeGroup = Math.floor(Math.random() * age.length);
  newAgeGroup[age[randomAgeGroup]] = true;
  return newAgeGroup;
};

let bodyTypes = [
  'athletic',
  'curvy',
  'lean',
  'muscular',
  'petite',
  'slim',
  'solid'
];

let createBodyType = () => {
  let createbodyType = {};
  for (let i = 0; i < bodyTypes.length; i++) {
    createbodyType[bodyTypes[i]] = false;
  }
  return createbodyType;
};

//random bodytype input for database
let randomBodyType = () => {
  let newBodyType = createBodyType();
  let randomBodyType = Math.floor(Math.random() * bodyTypes.length);
  newBodyType[bodyTypes[randomBodyType]] = true;
  return newBodyType;
};

let location = [
  'Los Angeles',
  'London',
  'Texas',
  'Hawaii',
  'Japan',
  'Seattle',
  'Kyoto',
  'Portland',
  'Italy',
  'France',
  'Denver',
  'New York',
  'SGV',
  'Irvine',
  'Hong Kong',
  'Rome',
  'Spain',
  'Berlin'
];

//random location generator
// let randomLocation = location[Math.floor(Math.random() * location.length)]

let wearTo = ['practiceYoga', 'dance', 'cycle', 'run', 'wearCasually'];

const createWearGear = () => {
  let createWearTo = {};
  for (let i = 0; i < wearTo.length; i++) {
    createWearTo[wearTo[i]] = false;
  }
  console.log('inside createWearGear', createWearTo)
  return createWearTo;
};
//random wear to input for database
let randomWearTo = () => {
  let newWearTo = createWearGear();
  let randomWear = Math.floor(Math.random() * wearTo.length);
  newWearTo[wearTo[randomWear]] = true;
  console.log('newWearTo in randomwear', newWearTo)
  return newWearTo;
};

//random likes generator
// const randomLikes = `${adjective[Math.floor(Math.random() * adjective.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]}`

//random dislikes generator
// let randomDislikes = `${adjective[Math.floor(Math.random() * adjective.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]}`

let createImage = () => {
  for(let i = 0; i < 100; i++){
    let imageUrl = `https://hrla36fec.s3.us-east-2.amazonaws.com/images/image${i}.png`
  }
}

// let createReview = () => {
//   let review = {}
//   review.rating = ratingGenerator
//   review.title = titleGenerator
//   review.review = reviewGenerator
//   review.recommendation = randomRecommendation
//   review.nickname = usernameGenerator
//   review.email = randomEmail
//   review.age = randomAge()
//   review.bodyType = randomBodyType()
//   review.location = randomLocation
//   review.wearTo = randomWearTo()
//   review.likes = randomLikes
//   review.dislikes = randomDislikes
//   review.image = `https://hrla36fec.s3.us-east-2.amazonaws.com/images/image${Math.ceil(Math.random() * Math.ceil(100))}.png`
//   return review
// }

let createReview = () => {
  let review = {}
  review.rating = rating[Math.floor(Math.random() * rating.length)]
  review.title = `${reviewTitle[Math.floor(Math.random() * reviewTitle.length)]} ${adjective[Math.floor(Math.random() * adjective.length)]} ${noun[Math.floor(Math.random() * noun.length)]}`
  review.review = `${pronouns[Math.floor(Math.random() * pronouns.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]} ${evenMoreWords[Math.floor(Math.random() * evenMoreWords.length)]}`
  review.recommendation = recommendation[Math.floor(Math.random() * recommendation.length)]
  review.nickname = username[Math.floor(Math.random() * username.length)]
  review.email = emails[Math.floor(Math.random() * emails.length)]
  review.age = randomAge()
  review.bodyType = randomBodyType()
  review.location = location[Math.floor(Math.random() * location.length)]
  review.wearTo = randomWearTo()
  review.likes = `${adjective[Math.floor(Math.random() * adjective.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]}`
  review.dislikes = `${adjective[Math.floor(Math.random() * adjective.length)]} ${connectingWords[Math.floor(Math.random() * connectingWords.length)]} ${moreWords[Math.floor(Math.random() * moreWords.length)]}`
  review.image = `https://hrla36fec.s3.us-east-2.amazonaws.com/images/image${Math.ceil(Math.random() * Math.ceil(100))}.png`
  return review
}


let createProduct = () => {
  let productArr = []
  for(let i = 0; i < 100; i++){
    productArr.push(createReview())
  }
  return productArr
}

let data = createProduct()

let seedData = () => {
  data.forEach((item) => {
    model.create(item)
    .then((result) => {
      console.log("seeded", result)
    })
    .catch(err => console.log(err))
  })
}


seedData()