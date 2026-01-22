import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EndingScreen = ({ ending, stats, statLabels, onRestart }) => {
  const [showStats, setShowStats] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowDescription(true), 1000);
    const timer2 = setTimeout(() => setShowStats(true), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`min-h-screen p-6 bg-gradient-to-br ${ending.bgGradient}`}>
      {/* 스캔라인 효과 */}
      <div className="scanlines" />
      <div className="vignette" />

      <div className="max-w-2xl mx-auto">
        {/* 엔딩 타이틀 */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#4a3728] rounded mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-[#fff8f0] text-sm">ENDING</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl text-shadow-retro mb-2"
            style={{ color: ending.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {ending.title}
          </motion.h1>

          {ending.id === 'perfect_life' && (
            <motion.div
              className="flex justify-center gap-1 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* 엔딩 설명 */}
        <AnimatePresence>
          {showDescription && (
            <motion.div
              className="bg-[#fff8f0] pixel-border p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#4a3728] text-lg leading-loose whitespace-pre-line">
                {ending.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 최종 스탯 */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              className="bg-[#f5e6d3] pixel-border p-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[#4a3728] text-lg mb-4 text-center border-b-2 border-[#8b7355] pb-2">
                최종 능력치
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-[#8b7355]">{statLabels[key]}</span>
                    <span
                      className="font-bold text-lg"
                      style={{
                        color: value >= 70 ? '#5cb85c' : value >= 40 ? '#d4a745' : '#e85d5d'
                      }}
                    >
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* 총점 */}
              <motion.div
                className="mt-4 pt-4 border-t-2 border-[#8b7355] text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-[#8b7355]">총점: </span>
                <span className="text-2xl text-[#4a3728] font-bold">
                  {Object.values(stats).reduce((a, b) => a + b, 0)}점
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 축하 메시지 */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <p className="text-[#4a3728] text-xl">
            아버지, 은퇴를 축하드립니다!
          </p>
          <p className="text-[#8b7355] mt-2">
            40년간 수고 많으셨습니다.
          </p>
        </motion.div>

        {/* 다시하기 버튼 */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <button
            className="px-6 py-3 bg-[#c4956a] pixel-button text-[#fff8f0]"
            onClick={onRestart}
          >
            다시 플레이하기
          </button>
        </motion.div>

        {/* 하단 장식 */}
        <motion.div
          className="text-center mt-8 text-[#8b7355] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <p>PAPA MAKER</p>
          <p className="mt-1">1985 - 2025</p>
          <p className="mt-2 text-xs">Made with Love for Dad</p>
        </motion.div>
      </div>
    </div>
  );
};

export default EndingScreen;
