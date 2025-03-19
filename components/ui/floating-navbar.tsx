"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

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
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        <Link href="/" className="text-xl font-semibold mr-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bookr
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-600 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-300"
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <Link
            href="/login"
            className="text-sm font-medium relative text-neutral-600 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-300"
          >
            <span>Log In</span>
          </Link>
          <Link
            href="/signup"
            className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <span>Sign Up</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 