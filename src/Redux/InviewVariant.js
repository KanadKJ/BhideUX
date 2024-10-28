import { easeIn } from "framer-motion";

export const inViewVariantType1 = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: easeIn,
      staggerChildren: 0.3,
    },
  },
};
export const inViewVariantType2 = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 0.2,
      ease: easeIn,
      staggerChildren: 0.3,
    },
  },
};
export const inViewVariantForChildrens = {
  initial: {
    opacity: 0,
    x: -100,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: easeIn,
      staggerChildren: 0.3,
    },
  },
};
