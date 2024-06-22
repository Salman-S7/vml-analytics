/* eslint-disable react/prop-types */
import { useState } from "react";
// import logo from '../../assets/logo.svg'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
// import a from "";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-3 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
          >
              <a href="/" className="mr-12 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 454 376" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M255.114 19.8877C258.471 10.1475 251.235 0 240.932 0H169.131C163.098 0 157.652 3.61448 155.309 9.17388L142.914 38.5795C137.602 51.1837 119.572 50.6825 114.968 37.8026L105.76 12.0441C103.626 6.07634 97.9726 2.09326 91.635 2.09326H15.0145C4.43273 2.09326 -2.82237 12.7551 1.06129 22.5984L136.622 366.184C138.882 371.914 144.415 375.679 150.575 375.679H242.074C248.208 375.679 253.725 371.944 256.002 366.248L393.378 22.6621C397.317 12.8094 390.061 2.09326 379.45 2.09326H304.254C297.916 2.09326 292.263 6.07633 290.129 12.0441L240.387 151.195C221.965 202.499 208.859 245.931 201.07 281.493C200.295 285.032 195.007 285.01 194.325 281.451C192.411 271.774 188.657 257.029 183.066 237.215C182.231 234.258 182.313 231.113 183.314 228.208L255.114 19.8877Z" fill="white"/>
                <ellipse cx="400.043" cy="320.432" rx="53.5621" ry="55.2469" fill="#009ED6"/>
                  </svg>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                  
              </a>
        {navItems.map((navItem, idx) => (
          <a
            key={`a=${idx}`}
            href={navItem.a}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
