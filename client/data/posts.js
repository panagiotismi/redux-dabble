/* eslint quote-props:  ['error', 'consistent'] */

const posts = [
  {
    code: 'BAcyDyQwcXX',
    caption:
      'I ordered some bubble wrap online. It arrived in a box surrounded by packing peanuts.',
    likes: 56,
    id: '1161022966406956503',
    display_src: 'https://source.unsplash.com/collection/397770/weekly',
  },
  {
    code: 'BAcJeJrQca9',
    caption:
      'I’m not saying my golf game went bad, but if I grew tomatoes, they’d come up sliced.',
    likes: 59,
    id: '1160844458347054781',
    display_src: 'https://source.unsplash.com/collection/1215/weekly',
  },
  {
    code: 'BAF_KY4wcRY',
    caption:
      'If you like someone, set them free. If they comeback, it means nobody liked them. Set them free again.',
    likes: 79,
    id: '1154606670337393752',
    display_src: 'https://source.unsplash.com/collection/263/weekly',
  },
  {
    code: 'BAPIPRjQce9',
    caption: 'I find it a little insensitive for Batman movies to be rated PG.',
    likes: 47,
    id: '1157179863266871229',
    display_src: 'https://source.unsplash.com/collection/1261/weekly',
  },
  {
    code: '-hZh6IQcfN',
    caption:
      'Sorry, I just saw your text from last night. Are you guys still at the restaurant?',
    likes: 66,
    id: '1126293663140399053',
    display_src: 'https://source.unsplash.com/collection/189929/weekly',
  },
  {
    code: '-B3eiIwcYV',
    caption:
      'I would run a marathon. If the only 2 bars were 26.2 miles apart and the first one was closed.',
    likes: 33,
    id: '1117418173361145365',
    display_src: 'https://source.unsplash.com/collection/200774/weekly',
  },
  {
    code: 'BAhvZrRwcfu',
    caption:
      'Dropping a can of soda and sticking it back in the fridge all shaken up for the next person to open is not as funny when you live by yourself.',
    likes: 30,
    id: '1162418651480049646',
    display_src: 'https://source.unsplash.com/collection/415854/weekly',
  },
  {
    code: 'BAAJqbOQcW5',
    caption:
      'I used to eat a lot of natural foods until I learned that most people die of natural causes...',
    likes: 40,
    id: '1152964002473690553',
    display_src: 'https://source.unsplash.com/collection/436278/weekly',
  },
  {
    code: '_4jHytwcUA',
    caption: 'Each day is a gift, but some days are socks and underwear',
    likes: 62,
    id: '1150824171912152320',
    display_src: 'https://source.unsplash.com/collection/155679/weekly',
  },
  {
    code: '_zbaOlQcbn',
    caption:
      'Traffic jams are more tolerable if you just think of them as really boring parades.',
    likes: 52,
    id: '1149382879529256679',
    display_src: 'https://source.unsplash.com/collection/145698/weekly',
  },
  {
    code: '_rmvQfQce8',
    caption:
      'so nice outside I should probably close the blinds so there isn’t a glare on my screen.',
    likes: 35,
    id: '1147180903383025596',
    display_src: 'https://source.unsplash.com/collection/1012/weekly',
  },
  {
    code: '_ep9kiQcVy',
    caption: 'Some people should come with subtitles.',
    likes: 64,
    id: '1143535906423162226',
    display_src: 'https://source.unsplash.com/collection/570661/weekly',
  },
  {
    code: '_XpJcrwcSn',
    caption:
      'I put my phone on airplane mode, and it dragged me out of my seat.',
    likes: 74,
    id: '1141561999742846119',
    display_src: 'https://source.unsplash.com/collection/411697/weekly',
  },
  {
    code: '_KnU7MwceA',
    caption:
      'Receptionist: "The doctor will see you now." Invisible Man: "Finally, a cure!"',
    likes: 54,
    id: '1137894817632733056',
    display_src: 'https://source.unsplash.com/collection/147415/weekly',
  },
  {
    code: '_HMejJQcY5',
    caption: 'Today I learned that a long pull espresso is called a "lungo"',
    likes: 18,
    id: '1136932306813044281',
    display_src: 'https://source.unsplash.com/collection/173229/weekly',
  },
  {
    code: '_Fq2zmwcaz',
    caption: 'I was hooked on auctions after only going once... going twice',
    likes: 48,
    id: '1136502965197194931',
    display_src: 'https://source.unsplash.com/collection/143479/weekly',
  },
  {
    code: '_A2r0aQcfD',
    caption:
      'I love it when I Google something I should know the answer to and find out 308 people are just as dumb as I am.',
    likes: 57,
    id: '1135147611821557699',
    display_src: 'https://source.unsplash.com/collection/329482/weekly',
  },
  {
    code: '-1rhFawccs',
    caption:
      'Chocolate is a flavor of milk, and milk is a flavor of chocolate.',
    likes: 39,
    id: '1132002270913873708',
    display_src: 'https://source.unsplash.com/collection/645510/weekly',
  },
  {
    code: '-pjx-gQcVi',
    caption:
      'I think the guy who invented the word kumquats should have gotten to name more stuff!',
    likes: 81,
    id: '1128590547628442978',
    display_src: 'https://source.unsplash.com/collection/210562/weekly',
  },
  {
    code: '-oTZ0zQcWt',
    caption:
      'The trouble with being punctual is that nobody is there to appreciate it.',
    likes: 81,
    id: '1128237044221461933',
    display_src: 'https://source.unsplash.com/collection/342335/weekly',
  },
  {
    code: '-mxKQoQcQh',
    caption: 'Bricks are just rocks that have been domesticated.',
    likes: 47,
    id: '1127804966031967265',
    display_src: 'https://source.unsplash.com/collection/139346/weekly',
  },
  {
    code: '-fasqlQceO',
    caption:
      'What if the lightbulb had never been invented? How would we know when someone has a really good idea?',
    likes: 46,
    id: '1125735850454402958',
    display_src: 'https://source.unsplash.com/collection/790892/weekly',
  },
  {
    code: '-VBgtGQcSf',
    caption:
      'The most powerful I ever feel is waving pedestrians to walk in front of my car. “Go forth, and trust that I will not kill you.”',
    likes: 27,
    id: '1122810327591928991',
    display_src: 'https://source.unsplash.com/collection/171229/weekly',
  },
  {
    code: '-FpTyHQcau',
    caption:
      'Every Scooby-Doo episode would literally be two minutes long if the gang went to the mask store first and asked a few questions.',
    likes: 82,
    id: '1118481761857291950',
    display_src: 'https://source.unsplash.com/collection/434728/weekly',
  },
];

export default posts;
