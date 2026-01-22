// 아버지의 실제 이야기를 담은 스테이지
// 1965년생 아버지의 인생 여정
// 분기형 스토리 구조 - choice에 nextStage로 분기 지정

export const stages = [
  {
    id: 1,
    year: 1985,
    era: "대학 시절",
    title: "서울대학교 입학",
    description: "1985년, 스무 살의 청년이 서울대학교에 입학했습니다. 새로운 세상이 펼쳐졌습니다.",
    question: "대학 생활을 어떻게 보내시겠습니까?",
    background: "university",
    choices: [
      {
        text: "학업에 열중하며 미래를 준비한다",
        effects: { work: 15, reputation: 10, patience: 10 },
        response: "도서관에서 밤을 새우며 공부했습니다. 서울대생으로서 최선을 다했습니다."
      },
      {
        text: "다양한 경험을 쌓으며 자신을 찾는다",
        effects: { faith: 10, love: 5, patience: 10 },
        response: "동아리 활동, 봉사활동 등 다양한 경험을 했습니다. 삶의 의미를 고민하기 시작했습니다."
      },
      {
        text: "신앙 생활에 더 깊이 빠져든다",
        effects: { faith: 20, patience: 10 },
        response: "성당 활동에 열심히 참여하며 신앙이 깊어졌습니다. 마음 속에 소명이 자라났습니다."
      }
    ]
  },
  {
    id: 2,
    year: 1989,
    era: "인생의 갈림길",
    title: "졸업, 그리고 새로운 선택",
    description: "서울대학교 졸업을 앞둔 시점. 좋은 직장에 갈 수 있는 길이 열려 있었지만, 마음 한켠에는 다른 꿈이 있었습니다.",
    question: "신부님이 되고 싶은 마음이 커졌습니다. 어떻게 하시겠습니까?",
    background: "church_80s",
    choices: [
      {
        text: "신학대학에 입학하여 신부의 길을 간다",
        effects: { faith: 25, patience: 15, work: -5 },
        response: "용기를 내어 신학대학에 입학했습니다. 하느님의 부르심에 응답하기로 했습니다.",
        nextStage: 3  // 신학대학 스토리로
      },
      {
        text: "일단 취직하고 신앙생활은 평신도로",
        effects: { work: 20, nestEgg: 15, faith: 5 },
        response: "현실적인 선택을 했습니다. 좋은 직장에 취직하여 사회생활을 시작했습니다.",
        nextStage: 101  // 대체 스토리라인으로
      }
    ]
  },

  // ========== 메인 스토리라인 (신학대학 루트) ==========
  {
    id: 3,
    year: 1991,
    era: "신학대학",
    title: "운명적인 만남",
    description: "신학대학에서 공부하던 어느 날, 6살 어린 후배가 입학했습니다. 첫눈에 마음이 흔들렸습니다.",
    question: "신부가 되려면 결혼할 수 없습니다. 이 마음을 어떻게 하시겠습니까?",
    background: "church_80s",
    choices: [
      {
        text: "마음을 숨기고 신부의 길을 계속 간다",
        effects: { faith: 15, patience: 20, love: -10 },
        response: "기도하며 마음을 다잡았습니다. 하지만 그녀의 모습이 자꾸 떠올랐습니다.",
        nextStage: 201  // 신부 루트로
      },
      {
        text: "용기를 내어 다가가 마음을 전한다",
        effects: { love: 25, faith: -5, family: 10 },
        response: "떨리는 마음으로 말을 걸었습니다. 그녀도 미소로 답해주었습니다.",
        nextStage: 4
      },
      {
        text: "기도하며 하느님의 뜻을 구한다",
        effects: { faith: 20, patience: 15, love: 5 },
        response: "무릎 꿇고 기도했습니다. '제 길을 인도해 주소서...'",
        nextStage: 4
      }
    ]
  },
  {
    id: 4,
    year: 1993,
    era: "인생의 결단",
    title: "신부냐, 가정이냐",
    description: "그녀와의 사랑이 깊어졌습니다. 하지만 신부가 되면 결혼할 수 없습니다. 인생 최대의 결정 앞에 섰습니다.",
    question: "어떤 선택을 하시겠습니까?",
    background: "church_80s",
    choices: [
      {
        text: "사랑하는 그녀와 가정을 이루기로 한다",
        effects: { love: 30, family: 25, faith: 5 },
        response: "오랜 고민 끝에 결정했습니다. 신부의 길 대신 가정을 선택했습니다. 하느님은 다른 방식으로 섬기기로 했습니다.",
        nextStage: 5
      },
      {
        text: "신부의 소명을 따르기로 한다",
        effects: { faith: 30, patience: 20, love: -20 },
        response: "눈물을 머금고 그녀에게 이별을 고했습니다. 신부의 길을 가기로 했습니다.",
        nextStage: 201  // 신부 루트로
      }
    ]
  },
  {
    id: 5,
    year: 1994,
    era: "새로운 시작",
    title: "결혼과 첫 직장",
    description: "신학교를 졸업하고 사랑하는 그녀와 결혼했습니다. 이제 가장으로서 책임을 져야 할 때입니다. 생전 처음 '개발자'라는 직업에 도전하게 되었습니다.",
    question: "처음 해보는 개발 일, 어떻게 임하시겠습니까?",
    background: "office_90s",
    choices: [
      {
        text: "밤새워 공부하며 기술을 익힌다",
        effects: { work: 25, reputation: 15, health: -10 },
        response: "처음 보는 코드들... 밤을 새워가며 공부했습니다. 서울대 출신의 자존심을 걸었습니다."
      },
      {
        text: "선배들에게 적극적으로 물어보며 배운다",
        effects: { work: 20, reputation: 10, patience: 10 },
        response: "모르는 건 부끄러운 게 아닙니다. 선배들에게 배우며 빠르게 성장했습니다."
      },
      {
        text: "일과 가정의 균형을 맞추며 일한다",
        effects: { work: 10, family: 15, love: 10, health: 5 },
        response: "신혼이니까요. 일도 중요하지만 가정도 소중히 했습니다."
      }
    ]
  },
  {
    id: 6,
    year: 1995,
    era: "아버지가 되다",
    title: "첫째 원경이의 탄생",
    description: "1995년, 첫 아이가 태어났습니다. 아들입니다! 이름은 '원경'이라고 지었습니다.",
    question: "처음으로 아버지가 되었습니다. 어떤 아버지가 되고 싶으신가요?",
    background: "home_90s",
    choices: [
      {
        text: "열심히 일해서 부족함 없이 키우겠다",
        effects: { work: 20, nestEgg: 15, family: 10, health: -5 },
        response: "아이에게 좋은 것만 해주고 싶었습니다. 더 열심히 일했습니다."
      },
      {
        text: "바쁘더라도 아이와 시간을 보내겠다",
        effects: { family: 25, love: 10, work: -5 },
        response: "퇴근 후 아이를 안아주는 것이 하루의 가장 행복한 순간이었습니다."
      },
      {
        text: "신앙 안에서 아이를 키우겠다",
        effects: { faith: 15, family: 15, patience: 10 },
        response: "아이를 축복하며 기도했습니다. 신앙의 가정을 이루겠다고 다짐했습니다."
      }
    ]
  },
  {
    id: 7,
    year: 1997,
    era: "격동의 시대",
    title: "IMF 외환위기",
    description: "IMF 외환위기가 터졌습니다. 주변에서 하나둘 직장을 잃고 있습니다. 금모으기 운동이 시작되었습니다.",
    question: "이 위기를 어떻게 대처하시겠습니까?",
    background: "city_90s",
    choices: [
      {
        text: "금모으기 운동에 동참한다",
        effects: { reputation: 20, faith: 10, nestEgg: -15, patience: 10 },
        response: "결혼반지까지 내놓았습니다. 나라를 위해, 모두를 위해. 아내도 동의해주었습니다."
      },
      {
        text: "회사에서 더 열심히 일하며 버틴다",
        effects: { work: 20, reputation: 15, health: -10 },
        response: "구조조정의 위기 속에서 묵묵히 일했습니다. 회사가 당신을 필요로 했습니다."
      },
      {
        text: "가족과 함께 절약하며 이겨낸다",
        effects: { family: 20, nestEgg: 10, love: 10, patience: 15 },
        response: "외식을 줄이고, 가족끼리 집에서 시간을 보냈습니다. 오히려 가족이 더 가까워졌습니다."
      }
    ]
  },
  {
    id: 8,
    year: 1999,
    era: "가족의 확장",
    title: "둘째 효경이의 탄생",
    description: "1999년, 둘째 아이가 태어났습니다. 딸입니다! 이름은 '효경'이라고 지었습니다. 이제 2남매의 아버지가 되었습니다.",
    question: "아들과 딸, 어떻게 키우고 싶으신가요?",
    background: "home_90s",
    choices: [
      {
        text: "공부 강요 없이 자유롭게 키운다",
        effects: { family: 25, patience: 15, love: 10 },
        response: "아이들이 하고 싶은 것을 할 수 있도록 지켜봐주기로 했습니다. 강요는 하지 않겠다고 다짐했습니다."
      },
      {
        text: "신앙 안에서 바르게 키운다",
        effects: { faith: 20, family: 15, patience: 10 },
        response: "주일마다 함께 성당에 갔습니다. 하지만 강요하지는 않았습니다."
      },
      {
        text: "사랑으로 감싸주며 키운다",
        effects: { love: 20, family: 20, patience: 10 },
        response: "아이들에게 '사랑해'라는 말을 아끼지 않았습니다."
      }
    ]
  },
  {
    id: 9,
    year: 2002,
    era: "바쁜 나날",
    title: "승진과 출장",
    description: "회사에서 인정받아 승진했습니다. 하지만 출장이 잦아지고 야근도 늘었습니다. 아이들이 보고 싶습니다.",
    question: "일과 가정, 어떻게 균형을 맞추시겠습니까?",
    background: "office_2000",
    choices: [
      {
        text: "가족을 위해 더 열심히 일한다",
        effects: { work: 20, nestEgg: 20, reputation: 15, family: -10 },
        response: "출장을 다녀오면 아이들이 자라 있었습니다. 마음이 아팠지만, 가족을 위한 것이라 믿었습니다."
      },
      {
        text: "출장에서 돌아오면 아이들과 시간을 보낸다",
        effects: { family: 20, love: 15, work: 5 },
        response: "출장에서 돌아오는 날이면 아이들이 현관에서 기다렸습니다. 그 모습에 피로가 녹았습니다."
      },
      {
        text: "선물로 마음을 전한다",
        effects: { family: 10, nestEgg: -10, love: 10 },
        response: "출장지에서 아이들 선물을 꼭 샀습니다. 작은 정성이지만..."
      }
    ]
  },
  {
    id: 10,
    year: 2005,
    era: "2000년대",
    title: "원경이의 초등학교",
    description: "원경이가 초등학교에 입학했습니다. 벌써 이렇게 컸네요.",
    question: "아이의 교육에 대해 어떻게 생각하시나요?",
    background: "home_2020",
    choices: [
      {
        text: "학원 보내지 않고 자유롭게",
        effects: { family: 20, patience: 15, nestEgg: 10 },
        response: "학원에 보내는 대신 함께 책을 읽고, 자연을 보여주었습니다."
      },
      {
        text: "기본적인 것만 챙겨준다",
        effects: { family: 15, nestEgg: -5, patience: 10 },
        response: "필요한 것은 지원하되, 강요하지 않았습니다."
      },
      {
        text: "아이가 원하는 것을 지원한다",
        effects: { family: 20, love: 10, patience: 10 },
        response: "아이가 하고 싶다고 하면 지원해주었습니다. 스스로 선택하게 했습니다."
      }
    ]
  },
  {
    id: 11,
    year: 2008,
    era: "2000년대",
    title: "금융위기와 투자",
    description: "글로벌 금융위기가 터졌습니다. 주식 시장이 폭락하고 있습니다.",
    question: "이 상황에서 어떻게 하시겠습니까?",
    background: "city_2000",
    choices: [
      {
        text: "위기는 기회다. 투자를 시작한다",
        effects: { nestEgg: 25, patience: 10, reputation: 5 },
        response: "남들이 팔 때 사기로 했습니다. 장기적으로 보면 기회라고 생각했습니다."
      },
      {
        text: "안전하게 예금만 한다",
        effects: { nestEgg: 10, patience: 15, health: 5 },
        response: "위험한 투자보다 안전한 예금을 선택했습니다. 마음이 편했습니다."
      },
      {
        text: "기부와 나눔을 실천한다",
        effects: { faith: 20, reputation: 15, nestEgg: -10 },
        response: "어려운 때일수록 나눔이 필요하다고 생각했습니다. 꾸준히 기부를 이어갔습니다."
      }
    ]
  },
  {
    id: 12,
    year: 2010,
    era: "2010년대",
    title: "꾸준한 기부",
    description: "회사에서 안정적인 위치를 잡았습니다. 매달 꾸준히 기부를 하고 있습니다.",
    question: "기부에 대해 어떻게 생각하시나요?",
    background: "church_80s",
    choices: [
      {
        text: "티 내지 않고 꾸준히 기부한다",
        effects: { faith: 20, reputation: 10, nestEgg: -10, patience: 15 },
        response: "남들에게 알리지 않고 조용히 기부를 이어갔습니다. 신앙인으로서 당연한 일이라 생각했습니다."
      },
      {
        text: "가족들에게도 나눔을 가르친다",
        effects: { family: 20, faith: 15, love: 10 },
        response: "아이들에게도 나눔의 의미를 알려주었습니다."
      },
      {
        text: "더 많이 기부하고 싶다",
        effects: { faith: 25, reputation: 15, nestEgg: -20 },
        response: "받은 것이 많으니 나누는 것도 당연하다고 생각했습니다."
      }
    ]
  },
  {
    id: 13,
    year: 2014,
    era: "2010년대",
    title: "원경이의 대학 입학",
    description: "원경이가 대학생이 되었습니다. 시간이 정말 빠르네요.",
    question: "성인이 된 아들에게 어떤 아버지가 되고 싶으신가요?",
    background: "university",
    choices: [
      {
        text: "믿고 지켜봐준다",
        effects: { family: 20, patience: 20, love: 10 },
        response: "간섭하지 않고 아들의 선택을 존중했습니다. 필요할 때 옆에 있어주었습니다."
      },
      {
        text: "경제적으로 지원해준다",
        effects: { family: 15, nestEgg: -20, love: 10 },
        response: "학비와 용돈을 지원하며 공부에 집중할 수 있게 해주었습니다."
      },
      {
        text: "인생 조언을 해준다",
        effects: { family: 15, reputation: 10, faith: 10 },
        response: "살아온 경험을 나누며 조언해주었습니다. 강요가 아닌 제안으로."
      }
    ]
  },
  {
    id: 14,
    year: 2018,
    era: "2010년대",
    title: "효경이의 대학 입학",
    description: "막내 효경이도 대학생이 되었습니다. 이제 두 자녀 모두 성인이 되었습니다.",
    question: "자녀들이 다 컸습니다. 어떤 기분이신가요?",
    background: "university",
    choices: [
      {
        text: "뿌듯하다. 잘 키웠다",
        effects: { family: 20, love: 15, patience: 10 },
        response: "강요 없이 자유롭게 키웠는데 잘 자라주었습니다. 감사한 마음입니다."
      },
      {
        text: "이제 아내와의 시간을 더 갖겠다",
        effects: { love: 25, family: 10, health: 10 },
        response: "아이들 키우느라 바빴던 시간... 이제 아내와 더 많은 시간을 보내기로 했습니다."
      },
      {
        text: "부모님께 더 효도해야겠다",
        effects: { family: 20, faith: 15, reputation: 10 },
        response: "부모님도 연로해지셨습니다. 더 자주 찾아뵙기로 했습니다."
      }
    ]
  },
  {
    id: 15,
    year: 2019,
    era: "2010년대",
    title: "부모님의 선물",
    description: "부모님께서 땅과 건물을 자녀들에게 나누어 주셨습니다. 형제들과 함께 물려받게 되었습니다.",
    question: "부모님의 선물에 어떻게 하시겠습니까?",
    background: "home_2020",
    choices: [
      {
        text: "감사히 받고 잘 관리한다",
        effects: { nestEgg: 30, family: 15, patience: 10 },
        response: "부모님의 평생 노력이 담긴 유산입니다. 감사히 받아 잘 관리하기로 했습니다."
      },
      {
        text: "형제들과 사이좋게 나눈다",
        effects: { family: 25, patience: 15, reputation: 10 },
        response: "형제들과 다툼 없이 나누었습니다. 부모님이 기뻐하셨습니다."
      },
      {
        text: "부모님께 더 효도한다",
        effects: { family: 20, faith: 15, love: 10 },
        response: "물질적인 것보다 부모님과 함께하는 시간이 더 중요하다고 생각했습니다."
      }
    ]
  },
  {
    id: 16,
    year: 2020,
    era: "코로나 시대",
    title: "팬데믹",
    description: "코로나19로 세상이 멈췄습니다. 재택근무가 시작되었습니다.",
    question: "집에서 보내는 시간이 많아졌습니다.",
    background: "home_2020",
    choices: [
      {
        text: "가족과 더 많은 시간을 보낸다",
        effects: { family: 25, love: 20, health: 10 },
        response: "오랜만에 가족과 함께하는 시간이 많아졌습니다. 소중함을 다시 느꼈습니다."
      },
      {
        text: "건강 관리에 신경 쓴다",
        effects: { health: 25, patience: 15, family: 10 },
        response: "집에서 운동하고, 건강한 식사를 챙겼습니다."
      },
      {
        text: "투자 공부를 시작한다",
        effects: { nestEgg: 20, work: 10, patience: 10 },
        response: "주식, 예금 등 다양한 투자 방법을 공부했습니다."
      }
    ]
  },
  {
    id: 17,
    year: 2022,
    era: "2020년대",
    title: "노후 준비",
    description: "은퇴가 다가오고 있습니다. 예금, 주식 등 다양하게 투자하고 있습니다.",
    question: "노후 준비, 어떻게 하고 계신가요?",
    background: "home_2020",
    choices: [
      {
        text: "안정적인 예금 위주로",
        effects: { nestEgg: 15, patience: 15, health: 5 },
        response: "위험한 투자보다 안전한 예금을 선호했습니다."
      },
      {
        text: "주식 등 다양하게 분산 투자",
        effects: { nestEgg: 25, patience: 10 },
        response: "예금, 주식 등 다양하게 분산 투자했습니다. 현명한 선택이었습니다."
      },
      {
        text: "자녀들에게 물려줄 준비를 한다",
        effects: { family: 20, nestEgg: 10, love: 15 },
        response: "자녀들의 미래를 위해 준비했습니다. 부모님께 받은 것처럼."
      }
    ]
  },
  {
    id: 18,
    year: 2024,
    era: "2020년대",
    title: "은퇴를 앞두고",
    description: "개발자로 시작한 회사 생활도 이제 마무리가 다가옵니다. 30년이 넘는 세월이었습니다.",
    question: "은퇴 후 무엇을 하고 싶으신가요?",
    background: "sunset",
    choices: [
      {
        text: "아내와 여행을 다니고 싶다",
        effects: { love: 25, health: 15, family: 10 },
        response: "신학대학에서 만난 그녀와 함께 세상을 여행하고 싶습니다."
      },
      {
        text: "성당에서 봉사하고 싶다",
        effects: { faith: 25, reputation: 15, family: 10 },
        response: "신부가 되지는 못했지만, 다른 방식으로 하느님을 섬기겠습니다."
      },
      {
        text: "자녀들과 더 많은 시간을",
        effects: { family: 25, love: 15, patience: 10 },
        response: "바쁘게 살았던 시간... 이제 가족과 더 함께하고 싶습니다."
      }
    ]
  },
  {
    id: 19,
    year: 2025,
    era: "현재",
    title: "은퇴",
    description: "드디어 은퇴의 날입니다. 신학대학 후배와 결혼해 개발자가 되고, 두 자녀를 키우고, 꾸준히 기부하며 살아온 인생... 모든 것이 감사합니다.",
    question: "은퇴식에서 무슨 말을 하시겠습니까?",
    background: "retirement",
    isEnding: true,
    choices: [
      {
        text: "가족에게 감사를 전한다",
        effects: { family: 30, love: 25, faith: 10 },
        response: "\"신부의 길 대신 가정을 선택한 것... 후회 없습니다. 사랑하는 아내와 원경이, 효경이가 있어 행복했습니다.\""
      },
      {
        text: "하느님께 감사를 드린다",
        effects: { faith: 30, family: 15, patience: 10 },
        response: "\"신부는 되지 못했지만, 다른 방식으로 신앙을 지켜왔습니다. 모든 것이 은혜였습니다.\""
      },
      {
        text: "함께한 모든 이들에게 감사",
        effects: { reputation: 25, family: 20, love: 10 },
        response: "\"함께 일한 동료들, 가족들, 그리고 저를 이끌어주신 모든 분들께 감사드립니다.\""
      }
    ]
  },

  // ========== 대체 스토리라인 1: 취직 루트 (id: 101~) ==========
  {
    id: 101,
    year: 1990,
    era: "사회초년생",
    title: "직장 생활의 시작",
    description: "좋은 회사에 취직했습니다. 서울대 출신답게 인정받고 있습니다. 하지만 가끔 신부의 꿈이 떠오릅니다.",
    question: "회사 생활을 어떻게 하시겠습니까?",
    background: "office_90s",
    choices: [
      {
        text: "열심히 일하며 출세를 목표로",
        effects: { work: 25, reputation: 20, nestEgg: 15 },
        response: "승승장구했습니다. 젊은 나이에 과장으로 승진했습니다.",
        nextStage: 102
      },
      {
        text: "일과 신앙생활의 균형을 맞춘다",
        effects: { faith: 15, work: 15, patience: 10 },
        response: "주일에는 꼭 성당에 갔습니다. 평신도로서의 삶도 의미있었습니다.",
        nextStage: 102
      }
    ]
  },
  {
    id: 102,
    year: 1993,
    era: "사회에서의 만남",
    title: "성당에서 다시 만난 인연",
    description: "직장 근처 성당에서 미사를 드리던 중, 눈에 띄는 여성이 있었습니다. 어딘가 익숙한 얼굴...",
    question: "용기를 내어 말을 걸어볼까요?",
    background: "church_80s",
    choices: [
      {
        text: "말을 걸어본다",
        effects: { love: 25, faith: 10, family: 10 },
        response: "알고 보니 같은 대학 후배였습니다. 6살 어린 그녀... 운명처럼 느껴졌습니다.",
        nextStage: 103
      },
      {
        text: "그냥 지나친다",
        effects: { patience: 10, work: 10 },
        response: "인연이 아니었나 봅니다. 다시 일에 집중했습니다.",
        nextStage: "ending_alone"  // 혼자 사는 엔딩
      }
    ]
  },
  {
    id: 103,
    year: 1994,
    era: "새로운 시작",
    title: "결혼",
    description: "성당에서 다시 만난 그녀와 교제 끝에 결혼하게 되었습니다. 신학대학에서 만났다면 어땠을까... 하지만 지금 이대로도 행복합니다.",
    question: "결혼 후 어떻게 살고 싶으신가요?",
    background: "wedding",
    choices: [
      {
        text: "행복한 가정을 꾸리겠다",
        effects: { family: 25, love: 20, faith: 10 },
        response: "늦었지만, 아니 어쩌면 딱 맞는 타이밍에 만난 것인지도 모릅니다.",
        nextStage: 6  // 메인 스토리 원경이 탄생으로 합류
      }
    ]
  },

  // ========== 대체 스토리라인 2: 신부 루트 (id: 201~) ==========
  {
    id: 201,
    year: 1995,
    era: "신부의 길",
    title: "서품",
    description: "오랜 준비 끝에 신부로 서품받았습니다. 가끔 그녀 생각이 나지만, 이것이 하느님의 뜻이라 믿습니다.",
    question: "어떤 신부가 되고 싶으신가요?",
    background: "church_80s",
    choices: [
      {
        text: "봉사하는 신부",
        effects: { faith: 30, reputation: 25, patience: 20 },
        response: "가난한 이들을 위해 봉사하며 살기로 했습니다.",
        nextStage: 202
      },
      {
        text: "가르치는 신부",
        effects: { faith: 25, reputation: 20, work: 15 },
        response: "젊은이들에게 신앙을 가르치는 일에 헌신하기로 했습니다.",
        nextStage: 202
      }
    ]
  },
  {
    id: 202,
    year: 2025,
    era: "현재",
    title: "30년의 사제 생활",
    description: "30년간 신부로 살았습니다. 많은 신자들을 만나고, 기쁨과 슬픔을 함께했습니다. 가끔 그녀 생각이 나지만, 후회는 없습니다.",
    question: "신부로서의 삶을 돌아보며...",
    background: "church_80s",
    isEnding: true,
    endingId: "priest_ending",
    choices: [
      {
        text: "하느님께 모든 영광을",
        effects: { faith: 40, reputation: 30, patience: 20 },
        response: "\"제 삶의 모든 순간이 은총이었습니다. 하느님, 감사합니다.\""
      },
      {
        text: "신자들에게 감사를",
        effects: { faith: 30, reputation: 35, love: 10 },
        response: "\"함께 신앙의 여정을 걸어온 모든 분들께 감사드립니다.\""
      }
    ]
  }
];

// 스테이지 ID로 찾기 헬퍼
export const getStageById = (id) => stages.find(s => s.id === id);

// 다음 스테이지 ID 계산 (분기가 없을 때)
export const getDefaultNextStageId = (currentId) => {
  // 메인 스토리 (1-19)
  if (currentId >= 1 && currentId < 19) return currentId + 1;
  // 취직 루트 (101-103)
  if (currentId >= 101 && currentId < 103) return currentId + 1;
  // 신부 루트 (201-202)
  if (currentId >= 201 && currentId < 202) return currentId + 1;
  return null;
};

export default stages;
