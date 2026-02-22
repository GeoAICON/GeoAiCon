'use client';

import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.4, className = "" }: { children: React.ReactNode, delay?: number, duration?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.4 } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);
