import { useState, useCallback } from 'react';
import { stages, getStageById, getDefaultNextStageId } from '../data/stages';
import { determineEnding, endings } from '../data/endings';

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

// 특수 엔딩 정의
const specialEndings = {
  ending_alone: {
    id: "ending_alone",
    title: "고독한 성공가",
    description: `인연을 지나쳤습니다.

회사에서는 승승장구했지만,
가정을 이루지 못했습니다.

성공했지만, 가끔 외롭습니다.
그때 그녀에게 말을 걸었다면 어땠을까...

하지만 후회는 없습니다.
이것도 하나의 인생이니까요.`,
    color: "#8b7355",
    bgGradient: "from-slate-300 to-gray-400"
  },
  priest_ending: {
    id: "priest_ending",
    title: "신실한 사제",
    description: `30년간 신부로 살았습니다.

신학대학에서 만난 그녀...
가끔 생각나지만, 후회는 없습니다.

수많은 신자들과 함께 기쁨과 슬픔을 나누었고,
하느님의 사랑을 전했습니다.

다른 방식의 아버지가 되었습니다.
영적인 자녀들의 아버지로.

"주님, 감사합니다."`,
    color: "#9b7ed9",
    bgGradient: "from-purple-200 to-indigo-200"
  }
};

export const useGameState = () => {
  const [gamePhase, setGamePhase] = useState('start'); // start, playing, response, ending
  const [stats, setStats] = useState(initialStats);
  const [currentStageId, setCurrentStageId] = useState(1);  // ID 기반으로 변경
  const [lastChoice, setLastChoice] = useState(null);
  const [history, setHistory] = useState([]);
  const [ending, setEnding] = useState(null);
  const [stageCount, setStageCount] = useState(0);  // 진행한 스테이지 수

  const currentStage = getStageById(currentStageId);
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
    // 현재 스테이지가 엔딩인지 확인
    if (currentStage?.isEnding) {
      // 특수 엔딩 ID가 있으면 해당 엔딩 사용
      if (currentStage.endingId && specialEndings[currentStage.endingId]) {
        setEnding(specialEndings[currentStage.endingId]);
      } else {
        // 일반 엔딩 결정
        const finalEnding = determineEnding(stats);
        setEnding(finalEnding);
      }
      setGamePhase('ending');
      return;
    }

    // 선택에 따른 다음 스테이지 결정
    let nextId = null;

    if (lastChoice?.nextStage) {
      // 선택지에 명시된 nextStage가 있으면 사용
      if (typeof lastChoice.nextStage === 'string') {
        // 특수 엔딩으로 이동
        if (specialEndings[lastChoice.nextStage]) {
          setEnding(specialEndings[lastChoice.nextStage]);
          setGamePhase('ending');
          return;
        }
      } else {
        nextId = lastChoice.nextStage;
      }
    } else {
      // 기본 다음 스테이지 계산
      nextId = getDefaultNextStageId(currentStageId);
    }

    if (nextId) {
      const nextStageData = getStageById(nextId);
      if (nextStageData) {
        setCurrentStageId(nextId);
        setStageCount(prev => prev + 1);
        setLastChoice(null);
        setGamePhase('playing');
      } else {
        // 다음 스테이지가 없으면 엔딩
        const finalEnding = determineEnding(stats);
        setEnding(finalEnding);
        setGamePhase('ending');
      }
    } else {
      // 다음 스테이지가 없으면 엔딩
      const finalEnding = determineEnding(stats);
      setEnding(finalEnding);
      setGamePhase('ending');
    }
  }, [currentStage, currentStageId, lastChoice, stats]);

  // 게임 시작
  const startGame = useCallback(() => {
    setStats(initialStats);
    setCurrentStageId(1);
    setStageCount(0);
    setHistory([]);
    setLastChoice(null);
    setEnding(null);
    setGamePhase('playing');
  }, []);

  // 게임 리셋
  const resetGame = useCallback(() => {
    setStats(initialStats);
    setCurrentStageId(1);
    setStageCount(0);
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

  // 진행률 계산 (대략적인 값)
  const getProgress = () => {
    // 메인 스토리는 19개, 대체 루트는 더 짧음
    const maxStages = currentStageId >= 200 ? 5 : currentStageId >= 100 ? 8 : 19;
    return Math.min(100, (stageCount / maxStages) * 100);
  };

  return {
    // 상태
    gamePhase,
    stats,
    currentStage,
    currentYear,
    currentStageId,
    stageCount,
    progress: getProgress(),
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
