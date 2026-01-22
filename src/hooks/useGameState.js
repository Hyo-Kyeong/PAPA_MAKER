import { useState, useCallback } from 'react';
import { stages } from '../data/stages';
import { determineEnding } from '../data/endings';

const initialStats = {
  work: 30,      // 성실도
  faith: 30,     // 신앙심
  love: 30,      // 로맨스
  family: 30,    // 가족행복
  reputation: 30, // 명성
  health: 50,    // 건강
  nestEgg: 20,   // 노후자금
  patience: 30   // 인내심
};

const STAT_MAX = 100;
const STAT_MIN = 0;

export const useGameState = () => {
  const [gamePhase, setGamePhase] = useState('start'); // start, playing, response, ending
  const [stats, setStats] = useState(initialStats);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [lastChoice, setLastChoice] = useState(null);
  const [history, setHistory] = useState([]);
  const [ending, setEnding] = useState(null);

  const currentStage = stages[currentStageIndex];
  const currentYear = currentStage?.year || 2025;

  // 스탯 클램핑 (최소 0, 최대 100)
  const clampStat = (value) => Math.min(STAT_MAX, Math.max(STAT_MIN, value));

  // 선택지 처리
  const makeChoice = useCallback((choiceIndex) => {
    const choice = currentStage.choices[choiceIndex];

    // 스탯 업데이트
    setStats(prevStats => {
      const newStats = { ...prevStats };
      Object.entries(choice.effects).forEach(([stat, change]) => {
        if (newStats[stat] !== undefined) {
          newStats[stat] = clampStat(newStats[stat] + change);
        }
      });
      return newStats;
    });

    // 히스토리에 기록
    setHistory(prev => [...prev, {
      year: currentStage.year,
      title: currentStage.title,
      choice: choice.text,
      effects: choice.effects
    }]);

    setLastChoice(choice);
    setGamePhase('response');
  }, [currentStage]);

  // 다음 스테이지로 이동
  const nextStage = useCallback(() => {
    if (currentStageIndex < stages.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
      setLastChoice(null);
      setGamePhase('playing');
    } else {
      // 게임 종료 - 엔딩 결정
      const finalEnding = determineEnding(stats);
      setEnding(finalEnding);
      setGamePhase('ending');
    }
  }, [currentStageIndex, stats]);

  // 게임 시작
  const startGame = useCallback(() => {
    setStats(initialStats);
    setCurrentStageIndex(0);
    setHistory([]);
    setLastChoice(null);
    setEnding(null);
    setGamePhase('playing');
  }, []);

  // 게임 리셋
  const resetGame = useCallback(() => {
    setStats(initialStats);
    setCurrentStageIndex(0);
    setHistory([]);
    setLastChoice(null);
    setEnding(null);
    setGamePhase('start');
  }, []);

  // 스탯 레이블
  const statLabels = {
    work: '성실도',
    faith: '신앙심',
    love: '로맨스',
    family: '가족행복',
    reputation: '명성',
    health: '건강',
    nestEgg: '노후자금',
    patience: '인내심'
  };

  // 스탯 색상
  const statColors = {
    work: '#4a90a4',
    faith: '#9b7ed9',
    love: '#e88b8b',
    family: '#7bc47f',
    reputation: '#d4a745',
    health: '#e85d5d',
    nestEgg: '#5cb85c',
    patience: '#5bc0de'
  };

  return {
    // 상태
    gamePhase,
    stats,
    currentStage,
    currentYear,
    currentStageIndex,
    totalStages: stages.length,
    lastChoice,
    history,
    ending,

    // 메타 데이터
    statLabels,
    statColors,

    // 액션
    startGame,
    makeChoice,
    nextStage,
    resetGame,
  };
};

export default useGameState;
