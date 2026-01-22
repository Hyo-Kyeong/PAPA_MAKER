import { AnimatePresence, motion } from 'framer-motion';
import useGameState from './hooks/useGameState';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndingScreen from './components/EndingScreen';
import './index.css';

function App() {
  const {
    gamePhase,
    stats,
    statLabels,
    statColors,
    currentStage,
    currentStageIndex,
    totalStages,
    lastChoice,
    ending,
    startGame,
    makeChoice,
    nextStage,
    resetGame,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5e6d3] to-[#e8d4bc]">
      {/* 레트로 효과 오버레이 */}
      <div className="scanlines" />
      <div className="vignette" />

      <AnimatePresence mode="wait">
        {gamePhase === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StartScreen onStart={startGame} />
          </motion.div>
        )}

        {(gamePhase === 'playing' || gamePhase === 'response') && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GameScreen
              gamePhase={gamePhase}
              stats={stats}
              statLabels={statLabels}
              statColors={statColors}
              currentStage={currentStage}
              currentStageIndex={currentStageIndex}
              totalStages={totalStages}
              lastChoice={lastChoice}
              makeChoice={makeChoice}
              nextStage={nextStage}
            />
          </motion.div>
        )}

        {gamePhase === 'ending' && ending && (
          <motion.div
            key="ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EndingScreen
              ending={ending}
              stats={stats}
              statLabels={statLabels}
              onRestart={resetGame}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
