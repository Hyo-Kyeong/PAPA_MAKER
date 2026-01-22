import { motion } from 'framer-motion';

const ChoiceButtons = ({ choices, onChoice, disabled = false }) => {
  return (
    <motion.div
      className="space-y-3 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {choices.map((choice, index) => (
        <motion.button
          key={index}
          onClick={() => !disabled && onChoice(index)}
          className={`
            w-full px-4 py-3 text-left
            bg-[#f5e6d3] pixel-button
            text-[#4a3728] text-base
            hover:bg-[#e8d4bc]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
          `}
          disabled={disabled}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 * index }}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          <span className="text-[#8b7355] mr-2">{index + 1}.</span>
          {choice.text}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ChoiceButtons;
