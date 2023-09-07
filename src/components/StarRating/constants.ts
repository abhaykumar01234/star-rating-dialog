export const RATING = {
  1: {
    img: "/star-rating/edit_modal_1_star.png",
    confirmationModal: `We're Sorry Your Experience Didn't Match Your Expectations. It Was An Uncommon Instance And We'll Do Better.`,
    reaction: {
      title: "Very Bad",
      subtitle: `Oh no... What can we do to improve the experience?`,
    },
  },
  2: {
    img: "/star-rating/edit_modal_2_star.png",
    confirmationModal: `We're Sorry Your Experience Didn't Match Your Expectations. It Was An Uncommon Instance And We'll Do Better.`,
    reaction: {
      title: "Bad",
      subtitle: "Oh no... What can we do to improve the experience?",
    },
  },
  3: {
    img: "/star-rating/edit_modal_3_star.png",
    confirmationModal: `Looks Like You Are Not Completely Satisfied We'll Strive To Do Better.`,
    reaction: {
      title: "Average",
      subtitle: `You Don't Sound Too Pleased.`,
    },
  },
  4: {
    img: "/star-rating/edit_modal_4_star.png",
    confirmationModal: `We're So Glad You Had A Good Experience.`,
    reaction: {
      title: "Good",
      subtitle: `That's Great! Tell Us What We Got Right!`,
    },
  },
  5: {
    img: "/star-rating/edit_modal_5_star.png",
    confirmationModal: `We're So Glad You Had A Good Experience.`,
    reaction: {
      title: "Excellent!",
      subtitle: `That's Great! Tell Us What We Got Right!`,
    },
  },
} as const;

export const WHAT_WAS_GOOD_LIST = [
  {
    name: "Buying Experience",
    img: "/star-rating/buy_expr.png",
    selected_img: "/star-rating/buy_expr_select.png",
  },
  {
    name: "Transaction Process",
    img: "/star-rating/trans_process.png",
    selected_img: "/star-rating/trans_process_select.png",
  },
  {
    name: "Product Offering",
    img: "/star-rating/prod_offer.png",
    selected_img: "/star-rating/prod_offer_select.png",
  },
] as const;
