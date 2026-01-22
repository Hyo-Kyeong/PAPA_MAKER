import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextBox = ({ text, onComplete, speed = 30, showCursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    setIsSkipped(false);
  }, [text]);

  useEffect(() => {
    if (isSkipped) {
      setDisplayedText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [displayedText, text, speed, isSkipped, onComplete]);

  const handleClick = () => {
    if (!isComplete) {
      setIsSkipped(true);
    }
  };

  return (
    <motion.div
      className="bg-[#fff8f0] pixel-border p-4 min-h-[120px] cursor-pointer select-none"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-[#4a3728] text-lg leading-relaxed whitespace-pre-line">
        {displayedText}
        {showCursor && !isComplete && (
          <span className="cursor-blink ml-1 text-[#c4956a]">|</span>
        )}
      </p>
      {!isComplete && (
        <p className="text-xs text-[#8b7355] mt-2 text-right">
          클릭하면 스킵
        </p>
      )}
    </motion.div>
  );
};

export default TextBox;
