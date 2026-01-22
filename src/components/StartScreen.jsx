import { motion } from 'framer-motion';

const StartScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* 스캔라인 효과 */}
      <div className="scanlines" />
      <div className="vignette" />

      {/* 타이틀 */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl text-[#4a3728] text-shadow-retro mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          파파 메이커
        </motion.h1>
        <motion.p
          className="text-xl text-[#8b7355] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          PAPA MAKER
        </motion.p>
        <motion.p
          className="text-lg text-[#c4956a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          ~ 아버지의 40년 ~
        </motion.p>
      </motion.div>

      {/* 서브타이틀 */}
      <motion.div
        className="bg-[#fff8f0] pixel-border p-6 mb-8 max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-[#4a3728] leading-relaxed">
          1985년, 사회초년생이던 아버지.
          <br />
          <br />
          40년간의 선택이
          <br />
          어떤 인생을 만들었을까요?
          <br />
          <br />
          <span className="text-[#8b7355] text-sm">
            은퇴를 축하드립니다
          </span>
        </p>
      </motion.div>

      {/* 시작 버튼 */}
      <motion.button
        className="px-8 py-4 bg-[#c4956a] pixel-button text-[#fff8f0] text-xl"
        onClick={onStart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        이야기 시작하기
      </motion.button>

      {/* 안내 텍스트 */}
      <motion.p
        className="mt-8 text-sm text-[#8b7355]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        선택에 따라 능력치가 변하고, 다양한 엔딩이 펼쳐집니다.
      </motion.p>

      {/* 데코레이션 */}
      <motion.div
        className="absolute bottom-4 left-4 text-[#c4956a] text-sm opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        1985 - 2025
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 text-[#c4956a] text-sm opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        Made with Love
      </motion.div>
    </div>
  );
};

export default StartScreen;
