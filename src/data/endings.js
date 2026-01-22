// 다양한 엔딩 정의
// 최종 스탯에 따라 엔딩이 결정됩니다

export const endings = [
  {
    id: "faithful_patriarch",
    title: "믿음의 가장",
    condition: (stats) => stats.faith >= 70 && stats.family >= 60,
    priority: 10,
    description: `40년의 세월 동안, 당신은 흔들리지 않는 신앙으로 가정을 이끌었습니다.

어려운 시기마다 기도로 이겨냈고, 자녀들에게 믿음의 유산을 물려주었습니다.

교회에서 존경받는 장로님이 되었고, 손주들도 할아버지의 기도 소리를 기억합니다.

"여호와를 경외하는 것이 지혜의 근본이라"

당신의 삶 자체가 한 편의 아름다운 간증입니다.`,
    color: "#9b7ed9",
    bgGradient: "from-purple-200 to-amber-100"
  },
  {
    id: "loving_husband",
    title: "사랑꾼 남편",
    condition: (stats) => stats.love >= 70 && stats.family >= 65,
    priority: 9,
    description: `40년 전 교회에서 만난 그녀와의 사랑은 세월이 지나도 변치 않았습니다.

매일 "사랑해"라고 말하는 것을 잊지 않았고,
작은 기념일도 챙기는 다정한 남편이었습니다.

아내는 말합니다.
"다음 생에도 당신과 결혼하고 싶어요."

손주들에게도 사랑하는 법을 알려주는 멋진 할아버지입니다.`,
    color: "#e88b8b",
    bgGradient: "from-rose-200 to-orange-100"
  },
  {
    id: "family_first",
    title: "가족 중심 가장",
    condition: (stats) => stats.family >= 80,
    priority: 8,
    description: `당신에게 가족은 언제나 최우선이었습니다.

승진보다 가족 저녁을, 야근보다 아이들 운동회를 선택했습니다.
덕분에 자녀들은 "우리 아빠가 최고"라고 자랑스럽게 말합니다.

주말이면 온 가족이 모여 식사하고,
명절이면 집이 북적북적합니다.

무엇보다 행복한 것은, 모든 가족이 당신을 사랑한다는 것입니다.`,
    color: "#7bc47f",
    bgGradient: "from-green-200 to-teal-100"
  },
  {
    id: "company_legend",
    title: "회사의 전설",
    condition: (stats) => stats.work >= 75 && stats.reputation >= 70,
    priority: 7,
    description: `40년간 한 우물을 판 당신은 회사의 살아있는 전설이 되었습니다.

IMF도, 금융위기도, 코로나도 함께 이겨낸 당신의 경험담은
후배들에게 교과서와 같습니다.

은퇴식에는 역대 CEO들까지 참석하여
당신의 헌신에 경의를 표했습니다.

"그 시절 이 회사를 지킨 건 당신 같은 분들입니다."`,
    color: "#4a90a4",
    bgGradient: "from-blue-200 to-slate-100"
  },
  {
    id: "wealthy_grandfather",
    title: "알뜰한 부자 할아버지",
    condition: (stats) => stats.nestEgg >= 80,
    priority: 6,
    description: `티끌 모아 태산이라 했습니다.

첫 월급부터 한 푼 두 푼 모은 당신은
어느새 넉넉한 노후 자금을 마련했습니다.

손주들 용돈도 넉넉히 주고,
원하는 곳 여행도 다닐 수 있습니다.

자녀들이 말합니다.
"아버지 덕분에 저희도 저축의 중요성을 배웠어요."

현명한 경제 관념이 자녀들에게도 유산으로 남았습니다.`,
    color: "#5cb85c",
    bgGradient: "from-emerald-200 to-yellow-100"
  },
  {
    id: "healthy_elder",
    title: "정정한 어르신",
    condition: (stats) => stats.health >= 75,
    priority: 5,
    description: `아침마다 공원을 산책하고, 주말이면 등산을 합니다.

동년배들이 여기저기 아프다고 할 때,
당신은 여전히 청년 못지않은 체력을 자랑합니다.

손주와 축구도 하고, 자전거도 탑니다.

건강한 몸으로 가족과 더 오래 함께할 수 있어
감사한 마음입니다.

"할아버지 진짜 젊어 보여요!"`,
    color: "#e85d5d",
    bgGradient: "from-red-200 to-orange-100"
  },
  {
    id: "patient_sage",
    title: "인내의 현자",
    condition: (stats) => stats.patience >= 75 && stats.faith >= 50,
    priority: 4,
    description: `40년의 세월은 당신에게 깊은 지혜를 선물했습니다.

급할수록 돌아가라는 것을,
기다림 끝에 열매가 맺힌다는 것을 알게 되었습니다.

어려운 일이 생기면 가족들이 당신에게 묻습니다.
당신의 말 한마디에 마음이 편해진다고 합니다.

"아버지는 어떻게 항상 그렇게 침착하세요?"

웃으며 대답합니다.
"살다 보니 그렇게 되더라고."`,
    color: "#5bc0de",
    bgGradient: "from-cyan-200 to-blue-100"
  },
  {
    id: "respected_elder",
    title: "존경받는 어른",
    condition: (stats) => stats.reputation >= 75,
    priority: 3,
    description: `당신이 지나간 자리에는 언제나 좋은 이야기가 남았습니다.

회사에서도, 교회에서도, 동네에서도
당신을 나쁘게 말하는 사람이 없습니다.

성실함, 정직함, 따뜻함...
당신을 설명하는 말들은 모두 좋은 것들뿐입니다.

"저분처럼 나이 들고 싶다"
사람들이 당신을 보며 말합니다.

명예로운 인생입니다.`,
    color: "#d4a745",
    bgGradient: "from-amber-200 to-yellow-100"
  },
  {
    id: "balanced_life",
    title: "균형 잡힌 인생",
    condition: (stats) => {
      const values = [stats.work, stats.faith, stats.love, stats.family];
      const min = Math.min(...values);
      const max = Math.max(...values);
      return max - min <= 30 && min >= 40;
    },
    priority: 2,
    description: `일도, 신앙도, 사랑도, 가정도...
어느 하나 소홀히 하지 않았습니다.

완벽하진 않았지만, 균형 있는 삶을 살았습니다.

아침에 일어나 감사하고,
저녁에 잠들며 만족합니다.

후회 없는 40년이었습니다.

"인생이란 이런 것이구나."

평범하지만 행복한,
가장 아름다운 인생입니다.`,
    color: "#8b7355",
    bgGradient: "from-amber-100 to-stone-100"
  },
  {
    id: "default",
    title: "나만의 길",
    condition: () => true, // 기본 엔딩
    priority: 1,
    description: `40년의 여정이 끝났습니다.

완벽하지 않았을지 모릅니다.
후회도 있고, 아쉬움도 있습니다.

하지만 그 모든 순간들이 모여
지금의 당신을 만들었습니다.

가족이 있고, 추억이 있고,
함께 나눌 이야기가 있습니다.

그것만으로도 충분히
의미 있는 인생이었습니다.

수고하셨습니다, 아버지.`,
    color: "#8b7355",
    bgGradient: "from-stone-200 to-amber-100"
  }
];

// 특별 엔딩 (모든 스탯이 높을 때)
export const specialEnding = {
  id: "perfect_life",
  title: "완벽한 인생",
  condition: (stats) => {
    const allStats = [stats.work, stats.faith, stats.love, stats.family,
                      stats.reputation, stats.health, stats.nestEgg, stats.patience];
    return allStats.every(stat => stat >= 60);
  },
  priority: 100,
  description: `40년 동안 모든 면에서 균형 잡힌 삶을 살았습니다.

성실한 직장인이자, 신실한 신앙인,
다정한 남편, 자상한 아버지,
존경받는 어른, 건강한 할아버지,
현명한 저축가, 인내의 사람...

당신은 그 모든 것이었습니다.

이런 아버지를 둔 가족은
세상에서 가장 행복합니다.

아버지, 은퇴를 축하드립니다.
사랑합니다.`,
  color: "#FFD700",
  bgGradient: "from-yellow-200 via-amber-100 to-orange-200"
};

// 엔딩 결정 함수
export const determineEnding = (stats) => {
  // 특별 엔딩 체크
  if (specialEnding.condition(stats)) {
    return specialEnding;
  }

  // 일반 엔딩 중 조건에 맞는 것을 우선순위 순으로 확인
  const eligibleEndings = endings
    .filter(ending => ending.condition(stats))
    .sort((a, b) => b.priority - a.priority);

  return eligibleEndings[0];
};

export default endings;
