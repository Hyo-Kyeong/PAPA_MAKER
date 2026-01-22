import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StatusBar from './StatusBar';
import TextBox from './TextBox';
import ChoiceButtons from './ChoiceButtons';

// 배경 색상 매핑 (실제 이미지 대신 그라데이션 사용)
const backgroundStyles = {
  office_80s: 'from-slate-300 to-slate-400',
  church_80s: 'from-amber-200 to-purple-200',
  park_80s: 'from-green-200 to-blue-200',
  home_90s: 'from-orange-200 to-yellow-200',
  office_90s: 'from-gray-300 to-blue-300',
  city_90s: 'from-slate-400 to-gray-500',
  city_2000: 'from-blue-300 to-purple-300',
  office_2000: 'from-gray-200 to-blue-200',
  hospital: 'from-blue-100 to-green-100',
  university: 'from-red-200 to-yellow-200',
  office_2010: 'from-slate-200 to-blue-300',
  wedding: 'from-pink-200 to-rose-300',
  home_2020: 'from-amber-100 to-orange-200',
  sunset: 'from-orange-300 to-red-300',
  retirement: 'from-amber-200 to-yellow-300',
};

const GameScreen = ({
  gamePhase,
  stats,
  statLabels,
  statColors,
  currentStage,
  currentStageIndex,
  totalStages,
  lastChoice,
  makeChoice,
  nextStage,
}) => {
  const [textComplete, setTextComplete] = useState(false);
  const bgGradient = backgroundStyles[currentStage?.background] || 'from-amber-100 to-orange-100';

  useEffect(() => {
    setTextComplete(false);
  }, [currentStage, gamePhase]);

  const handleTextComplete = () => {
    setTextComplete(true);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col">
      {/* 상단 스탯 바 */}
      <StatusBar
        stats={stats}
        statLabels={statLabels}
        statColors={statColors}
        currentYear={currentStage?.year}
        era={currentStage?.era}
      />

      {/* 진행도 표시 */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-[#8b7355] mb-1">
          <span>{currentStage?.title}</span>
          <span>{currentStageIndex + 1} / {totalStages}</span>
        </div>
        <div className="h-2 bg-[#e8d4bc] rounded overflow-hidden border border-[#8b7355]">
          <motion.div
            className="h-full bg-[#c4956a]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStageIndex + 1) / totalStages) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* 메인 게임 영역 */}
      <div className="flex-1 flex flex-col">
        {/* 배경 영역 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage?.id}
            className={`relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${bgGradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 배경 패턴 */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #4a3728 25%, transparent 25%),
                    linear-gradient(-45deg, #4a3728 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #4a3728 75%),
                    linear-gradient(-45deg, transparent 75%, #4a3728 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
              />
            </div>

            {/* 캐릭터 영역 (슬라이드 애니메이션) */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: '-50%', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* 캐릭터 플레이스홀더 - 실제 이미지로 대체 가능 */}
              <div className="w-24 h-32 bg-[#4a3728] rounded-t-full opacity-30 flex items-end justify-center pb-2">
                <span className="text-white text-xs">아버지</span>
              </div>
            </motion.div>

            {/* 연도 오버레이 */}
            <div className="absolute top-2 right-2 bg-[#4a3728] bg-opacity-80 px-3 py-1 rounded">
              <span className="text-[#fff8f0] text-sm">{currentStage?.year}년</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 텍스트 박스 영역 */}
        <div className="flex-1">
          {gamePhase === 'playing' && (
            <>
              <TextBox
                text={`${currentStage?.description}\n\n${currentStage?.question}`}
                onComplete={handleTextComplete}
              />
              <AnimatePresence>
                {textComplete && (
                  <ChoiceButtons
                    choices={currentStage?.choices || []}
                    onChoice={makeChoice}
                  />
                )}
              </AnimatePresence>
            </>
          )}

          {gamePhase === 'response' && lastChoice && (
            <>
              <TextBox
                text={lastChoice.response}
                onComplete={handleTextComplete}
              />

              {/* 스탯 변화 표시 */}
              <motion.div
                className="mt-4 p-3 bg-[#e8d4bc] rounded-lg border-2 border-[#8b7355]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-[#4a3728] mb-2">능력치 변화:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(lastChoice.effects).map(([stat, change]) => (
                    <span
                      key={stat}
                      className={`
                        px-2 py-1 rounded text-sm
                        ${change > 0 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}
                      `}
                    >
                      {statLabels[stat]} {change > 0 ? '+' : ''}{change}
                    </span>
                  ))}
                </div>
              </motion.div>

              {textComplete && (
                <motion.button
                  className="w-full mt-4 px-4 py-3 bg-[#c4956a] pixel-button text-[#fff8f0] text-lg"
                  onClick={nextStage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentStageIndex < totalStages - 1 ? '다음으로' : '결과 보기'}
                </motion.button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
