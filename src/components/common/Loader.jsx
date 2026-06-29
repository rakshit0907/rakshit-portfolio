import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onFinish();
                    }, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);
        return () => clearInterval(interval);
    }, [onFinish]);
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
                exit={{ opacity: 0 }}
            >
                <h1 className="text-4xl font-bold mb-8">
                  Rakshit Pandey
        </h1>

        <div className="w-72 h-[4px] bg-zinc-800 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-white"
            animate={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-4 text-zinc-400">
          {progress}%
        </p>
        </motion.div>
       </AnimatePresence>
       ); 
    }
