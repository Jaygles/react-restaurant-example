export default function (state = null, action) {
  const menu = {
    appetiser: [
      {
        name: 'Carrot Rillettes',
        price: 599,
        img: './assets/img/app-carrotrillettes.jpg',
        desc:
          'These carrot rillettes look as good as they taste. A three day maturation process ensures the smoothest carrot experience.',
      },
      {
        name: 'Hummus Cake',
        price: 499,
        img: './assets/img/app-hummuscake.jpg',
        desc:
          'They said hummus and cake could not be done. Alphonso Carroway V introduced these when he was a young lad and they have been a hit ever since',
      },
      {
        name: 'Sweetmeat Brie with Carrot Sauce',
        price: 699,
        img: './assets/img/app-brie.jpg',
        desc:
          'We only use the finest locally crafted triple cream brie. A sauce of Sun-Maid raisins and Craisin dried cranberries envelops this creamy treat. Dig in!',
      },
      {
        name: 'Artichoke Dip',
        price: 699,
        img: './assets/img/app-artichokedip.jpg',
        desc: 'Every bar needs artichoke dip.',
      },
    ],
    main: [
      {
        name: 'Pub Style Carrot Burgers',
        price: 1599,
        img: './assets/img/main-carrotburger.jpg',
        desc:
          'We\'ve raised a lion on nothing but carrot burgers. He was recently released to the wild and has been seen leading a pride of lions that only eat tofu antelope.',
      },
      {
        name: 'Allspice Pork Chops with a Cream Cheese Frosting',
        price: 999,
        img: './assets/img/main-porkchop.jpg',
        desc:
          'We couldn\'t decide which spice to use for our pork chops so we decided to use it all! This dish helped put us on the map.',
      },
      {
        name: 'Bourbon Pecan Chicken',
        price: 899,
        img: './assets/img/main-chicken.jpg',
        desc:
          'Our pecans are made from 100% carrot seeds. I guarentee you will cross the road for this chicken.',
      },
      {
        name: 'Carrot Glazed Mahi Mahi',
        price: 1099,
        img: './assets/img/main-mahimahi.jpg',
        desc:
          'Mahi Mahi is not native to Kansas. We\'ve sent our cousin Vinny to go and get some from across the way. The carrots however are locally sourced.',
      },
    ],
    dessert: [
      {
        name: 'Citrus Carrot Cheesecake',
        price: 499,
        img: './assets/img/dessert-carrotcheesecake.jpg',
        desc:
          'Rumor has it it took Alphonso Carroway VI 537 tries to get the right balance of carrots to cheese. We would ask him how it felt to finally get it right but he\'s been sleeping off those cheesecakes for the last 27 years.',
      },
      {
        name: 'Carrot Cake',
        price: 599,
        img: './assets/img/dessert-carrotcake.jpg',
        desc: 'Just a carrot cake.',
      },
      {
        name: 'Carrot Tiramisu',
        price: 599,
        img: './assets/img/dessert-carrottiramisu.jpg',
        desc:
          'After letting the staff sample our latest batch we all could not stop baking and made way too many of these. These are on special until further notice.',
      },
      {
        name: 'Cake of Carrot',
        price: 899,
        img: './assets/img/dessert-cakeofcarrot.jpg',
        desc:
          'This is a novel dessert that isn\'t for everyone. We pressed a bunch of carrots into a cake.',
      },
    ],
    drink: [
      {
        name: 'Carrot Juice',
        price: 399,
        img: './assets/img/drink-carrotjuice.jpg',
        desc: 'Refreshing carrot juice. Juice it up!',
      },
      {
        name: 'Carrot Soda',
        price: 299,
        img: './assets/img/drink-carrotsoda.jpg',
        desc: 'Fizzy carrots, what more can you ask for?(A straw)',
      },
      {
        name: 'Carrot Tea',
        price: 199,
        img: './assets/img/drink-carrottea.jpg',
        desc: 'Carrots steeped in hot carrot juice.',
      },
      {
        name: 'Hot Carrot',
        price: 499,
        img: './assets/img/drink-hotcarrot.jpg',
        desc: 'Our signature hot drink. Let sit for 17 minutes before drinking.',
      },
    ],
  };

  switch (action.type) {
  case 'LOAD_MENU': {
    action.payload = menu;
    return action.payload;
  }
  default:
    return state;
  }
}
