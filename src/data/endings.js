// 아버지의 실제 이야기에 맞춘 엔딩들
// 최종 스탯에 따라 엔딩이 결정됩니다

export const endings = [
  {
    id: "faithful_father",
    title: "신앙의 가장",
    condition: (stats) => stats.faith >= 70 && stats.family >= 60,
    priority: 10,
    description: `신부가 되려던 꿈을 내려놓았지만,
당신은 다른 방식으로 신앙을 지켜왔습니다.

매주일 성당에 가고, 꾸준히 기부하며,
가정 안에서 하느님의 사랑을 실천했습니다.

원경이와 효경이에게 강요하지 않았지만,
아버지의 신앙하는 모습을 보며 자랐습니다.

신부가 되지 못한 것이 아니라,
더 많은 이들에게 신앙을 보여준 삶이었습니다.

"모든 것이 은혜였습니다."`,
    color: "#9b7ed9",
    bgGradient: "from-purple-200 to-amber-100"
  },
  {
    id: "loving_husband",
    title: "사랑꾼 남편",
    condition: (stats) => stats.love >= 70 && stats.family >= 65,
    priority: 9,
    description: `신학대학에서 만난 6살 어린 후배...
신부의 길을 포기하게 만든 그 사랑은,
30년이 지난 지금도 변함이 없습니다.

출장이 잦고 바빴던 시절에도
그녀를 향한 마음은 한결같았습니다.

"다음 생에도 당신과 결혼할 거예요."
아내의 말에 눈시울이 붉어집니다.

신부의 길 대신 선택한 사랑,
단 한 번도 후회한 적 없습니다.`,
    color: "#e88b8b",
    bgGradient: "from-rose-200 to-orange-100"
  },
  {
    id: "devoted_father",
    title: "자상한 아버지",
    condition: (stats) => stats.family >= 80,
    priority: 8,
    description: `원경이, 효경이...
공부를 강요하지 않고, 신앙을 강요하지 않고,
그저 사랑으로 키웠습니다.

바쁜 출장 속에서도 아이들 생각뿐이었고,
돌아오면 꼭 안아주었습니다.

이제 다 큰 자녀들이 말합니다.
"아빠가 최고예요."

강요 없이 키운 아이들이
스스로 훌륭하게 자라주었습니다.`,
    color: "#7bc47f",
    bgGradient: "from-green-200 to-teal-100"
  },
  {
    id: "developer_legend",
    title: "개발자의 전설",
    condition: (stats) => stats.work >= 75 && stats.reputation >= 70,
    priority: 7,
    description: `서울대를 나와 신학대학까지 갔던 사람이
생전 처음 개발자가 되었습니다.

처음엔 코드 한 줄 읽기도 어려웠지만,
30년이 지난 지금은 회사의 기둥이 되었습니다.

IMF도, 금융위기도, 코로나도 함께 이겨낸
당신의 경험은 후배들의 교과서입니다.

"서울대 출신이 개발을 배워서 여기까지..."
겸손하게 웃으며 말합니다.
"하면 됩니다."`,
    color: "#4a90a4",
    bgGradient: "from-blue-200 to-slate-100"
  },
  {
    id: "generous_giver",
    title: "나눔의 사람",
    condition: (stats) => stats.faith >= 60 && stats.reputation >= 60,
    priority: 6,
    description: `IMF 때 금모으기 운동에 동참하고,
매달 꾸준히 기부를 이어왔습니다.

티 내지 않고, 조용히, 꾸준히...
받은 것이 많으니 나누는 것도 당연하다 여겼습니다.

아이들에게도 나눔을 가르쳤고,
그 마음은 대를 이어 전해집니다.

"오른손이 하는 일을 왼손이 모르게..."
신앙인으로서 당연한 일을 했을 뿐입니다.`,
    color: "#d4a745",
    bgGradient: "from-amber-200 to-yellow-100"
  },
  {
    id: "wealthy_father",
    title: "현명한 가장",
    condition: (stats) => stats.nestEgg >= 80,
    priority: 5,
    description: `부모님께 물려받은 유산을 잘 관리하고,
예금, 주식 등 다양하게 투자했습니다.

위기가 올 때마다 현명하게 대처했고,
가족의 노후를 안정적으로 준비했습니다.

자녀들에게도 물려줄 것이 있어 다행입니다.
부모님께 받은 것처럼, 대를 이어 전합니다.

"아버지 덕분에 저축의 중요성을 배웠어요."
자녀들의 말에 뿌듯합니다.`,
    color: "#5cb85c",
    bgGradient: "from-emerald-200 to-yellow-100"
  },
  {
    id: "patient_sage",
    title: "인내의 아버지",
    condition: (stats) => stats.patience >= 75,
    priority: 4,
    description: `신부가 되려던 꿈을 내려놓고,
처음 해보는 개발을 배우고,
바쁜 출장을 견디며 가족을 지켰습니다.

IMF도, 금융위기도, 코로나도...
묵묵히 인내하며 이겨냈습니다.

"아버지는 어떻게 항상 그렇게 침착하세요?"
아이들이 물으면 웃으며 대답합니다.

"기도하면 됩니다."`,
    color: "#5bc0de",
    bgGradient: "from-cyan-200 to-blue-100"
  },
  {
    id: "respected_elder",
    title: "존경받는 어른",
    condition: (stats) => stats.reputation >= 75,
    priority: 3,
    description: `회사에서도, 성당에서도, 가정에서도
당신을 나쁘게 말하는 사람이 없습니다.

성실함, 겸손함, 따뜻함...
당신을 설명하는 말들은 모두 좋은 것들뿐입니다.

서울대 출신이라 자랑하지 않고,
신학대학 나왔다고 내세우지 않고,
그저 묵묵히 자신의 자리를 지켰습니다.

"저분처럼 나이 들고 싶다."
사람들이 당신을 보며 말합니다.`,
    color: "#8b7355",
    bgGradient: "from-stone-200 to-amber-100"
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
    description: `신앙도, 사랑도, 일도, 가정도...
어느 하나 소홀히 하지 않았습니다.

신부의 길을 포기했지만 신앙을 지켰고,
개발자가 되어 열심히 일했고,
아내를 사랑했고, 자녀를 잘 키웠습니다.

완벽하진 않았지만,
균형 있는 삶을 살았습니다.

후회 없는 40년이었습니다.`,
    color: "#8b7355",
    bgGradient: "from-amber-100 to-stone-100"
  },
  {
    id: "default",
    title: "나만의 길",
    condition: () => true,
    priority: 1,
    description: `40년의 여정이 끝났습니다.

서울대에서 신학대학으로,
신부의 꿈에서 개발자로,
그리고 두 아이의 아버지로...

예상치 못한 길이었지만,
그 모든 선택이 모여 지금의 당신을 만들었습니다.

사랑하는 아내와 원경이, 효경이가 있고,
함께 나눌 추억이 있습니다.

그것만으로도 충분히
의미 있는 인생이었습니다.`,
    color: "#8b7355",
    bgGradient: "from-stone-200 to-amber-100"
  }
];

// 특별 엔딩 (실제 아버지의 삶과 가장 가까운 엔딩)
export const specialEnding = {
  id: "perfect_father",
  title: "최고의 아버지",
  condition: (stats) => {
    const allStats = [stats.work, stats.faith, stats.love, stats.family,
                      stats.reputation, stats.health, stats.nestEgg, stats.patience];
    return allStats.every(stat => stat >= 55);
  },
  priority: 100,
  description: `서울대를 나와 신부가 되려 했던 청년이
신학대학에서 만난 6살 어린 후배와 사랑에 빠졌습니다.

신부의 길 대신 가정을 선택하고,
생전 처음 개발자가 되어 30년을 일했습니다.

원경이, 효경이를 공부 강요 없이 자유롭게 키웠고,
IMF 때는 금모으기 운동에 동참했으며,
꾸준히 기부하며 나눔을 실천했습니다.

부모님께 물려받은 유산을 잘 관리하고,
예금, 주식 등 다양하게 투자하며 노후를 준비했습니다.

신부가 되지 못한 것이 아쉽지 않습니다.
더 큰 축복을 받았으니까요.

아버지, 은퇴를 축하드립니다.
원경이와 효경이가 아버지를 사랑합니다.`,
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
