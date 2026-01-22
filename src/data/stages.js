// 1985년부터 2025년까지 40년간의 인생 여정
// 각 스테이지는 중요한 인생의 선택을 담고 있습니다

export const stages = [
  {
    id: 1,
    year: 1985,
    era: "사회초년생",
    title: "첫 출근",
    description: "1985년, 당신은 대학을 졸업하고 첫 직장에 출근했습니다. 긴장되는 마음으로 회사 문을 열었습니다.",
    question: "첫 직장에서 당신의 목표는?",
    background: "office_80s",
    choices: [
      {
        text: "열심히 일해서 인정받겠다",
        effects: { work: 15, reputation: 10, health: -5 },
        response: "당신은 누구보다 일찍 출근하고 늦게 퇴근했습니다. 상사들이 당신을 주목하기 시작했습니다."
      },
      {
        text: "동료들과 좋은 관계를 만들겠다",
        effects: { love: 5, patience: 10, family: 5 },
        response: "당신은 동료들과 점심도 함께하고, 회식 자리에서 분위기 메이커가 되었습니다."
      },
      {
        text: "월급을 아껴서 저축하겠다",
        effects: { nestEgg: 20, patience: 5 },
        response: "당신은 첫 월급의 절반을 저축했습니다. '티끌 모아 태산'이라는 말을 마음에 새겼습니다."
      }
    ]
  },
  {
    id: 2,
    year: 1987,
    era: "사회초년생",
    title: "교회에서의 만남",
    description: "어느 일요일, 친구의 권유로 교회에 나가게 되었습니다. 그곳에서 마음에 드는 사람을 발견했습니다.",
    question: "어떻게 하시겠습니까?",
    background: "church_80s",
    choices: [
      {
        text: "용기를 내어 말을 걸어본다",
        effects: { love: 20, faith: 10, patience: -5 },
        response: "떨리는 마음으로 인사를 건넸습니다. 그녀의 미소가 마음에 남았습니다."
      },
      {
        text: "먼저 신앙생활에 집중한다",
        effects: { faith: 20, patience: 15 },
        response: "당신은 매주 빠짐없이 예배에 참석하며, 신앙의 깊이를 더해갔습니다."
      },
      {
        text: "친구에게 소개를 부탁한다",
        effects: { love: 15, family: 5, reputation: 5 },
        response: "친구가 자연스럽게 소개해주었습니다. 어색하지만 설레는 시작이었습니다."
      }
    ]
  },
  {
    id: 3,
    year: 1989,
    era: "청년기",
    title: "승진의 기회",
    description: "회사에서 당신의 능력을 인정받아 과장 승진 대상자가 되었습니다. 하지만 야근이 더 늘어날 것 같습니다.",
    question: "승진을 수락하시겠습니까?",
    background: "office_80s",
    choices: [
      {
        text: "당연히 승진한다",
        effects: { work: 20, reputation: 15, nestEgg: 15, health: -10, family: -5 },
        response: "과장으로 승진했습니다! 책임감과 함께 월급도 올랐습니다."
      },
      {
        text: "가정을 위해 거절한다",
        effects: { family: 15, love: 10, patience: 10, work: -5 },
        response: "당신은 가족과의 시간을 선택했습니다. 회사에서는 아쉬워했지만, 집에서는 환영받았습니다."
      }
    ]
  },
  {
    id: 4,
    year: 1990,
    era: "청년기",
    title: "프로포즈",
    description: "교회에서 만난 그녀와 3년째 교제 중입니다. 주변에서 결혼 이야기가 나오기 시작합니다.",
    question: "프로포즈를 하시겠습니까?",
    background: "park_80s",
    choices: [
      {
        text: "평생 함께하자고 말한다",
        effects: { love: 25, family: 20, faith: 10, nestEgg: -20 },
        response: "'네'라는 대답을 들었습니다. 두 사람의 새로운 여정이 시작됩니다."
      },
      {
        text: "조금 더 준비가 필요하다",
        effects: { nestEgg: 15, patience: 10, work: 5 },
        response: "조금 더 안정적인 기반을 마련하기로 했습니다. 그녀도 이해해주었습니다."
      }
    ]
  },
  {
    id: 5,
    year: 1992,
    era: "신혼기",
    title: "첫 아이",
    description: "결혼 2년 차, 아내가 임신 소식을 전했습니다. 기쁨과 함께 책임감이 밀려옵니다.",
    question: "아버지가 될 준비가 되셨나요?",
    background: "home_90s",
    choices: [
      {
        text: "최고의 아버지가 되겠다",
        effects: { family: 25, love: 15, work: 10, health: -5 },
        response: "당신은 육아책을 읽고, 태교 음악을 틀어주며 아이를 기다렸습니다."
      },
      {
        text: "열심히 일해서 돈을 벌겠다",
        effects: { work: 15, nestEgg: 20, family: 5 },
        response: "아이에게 부족함 없이 해주고 싶어 더 열심히 일했습니다."
      },
      {
        text: "신앙으로 가정을 이끌겠다",
        effects: { faith: 20, family: 15, patience: 10 },
        response: "매일 가정예배를 드리며 신앙의 가정을 세워갔습니다."
      }
    ]
  },
  {
    id: 6,
    year: 1995,
    era: "가장의 시기",
    title: "IMF 전야",
    description: "경제가 불안정해지고 있습니다. 회사에서도 구조조정 이야기가 나옵니다.",
    question: "어떻게 대처하시겠습니까?",
    background: "office_90s",
    choices: [
      {
        text: "더 열심히 일해서 살아남는다",
        effects: { work: 20, reputation: 10, health: -15, patience: -5 },
        response: "당신은 누구보다 열심히 일했습니다. 지치지만 가족을 생각하며 버텼습니다."
      },
      {
        text: "부업을 시작한다",
        effects: { nestEgg: 20, work: 5, health: -10 },
        response: "퇴근 후 작은 부업을 시작했습니다. 힘들지만 저축은 늘어났습니다."
      },
      {
        text: "가족과 함께 기도한다",
        effects: { faith: 20, family: 15, patience: 15 },
        response: "어려운 시기, 가족이 함께 무릎 꿇고 기도했습니다. 마음의 평안을 얻었습니다."
      }
    ]
  },
  {
    id: 7,
    year: 1998,
    era: "IMF 시대",
    title: "외환위기",
    description: "IMF 외환위기가 터졌습니다. 많은 동료들이 회사를 떠나고 있습니다.",
    question: "이 위기를 어떻게 넘기시겠습니까?",
    background: "city_90s",
    choices: [
      {
        text: "끝까지 회사를 지킨다",
        effects: { work: 15, reputation: 20, patience: 15, nestEgg: -10 },
        response: "월급이 깎였지만, 당신은 회사와 함께 위기를 넘겼습니다. 회사는 당신을 기억합니다."
      },
      {
        text: "새로운 기회를 찾는다",
        effects: { work: 10, nestEgg: 15, reputation: 5 },
        response: "과감하게 이직을 결정했습니다. 새로운 환경에서 다시 시작합니다."
      },
      {
        text: "가족과 함께 절약 생활",
        effects: { family: 20, nestEgg: 20, patience: 10, health: 5 },
        response: "외식을 줄이고, 가족끼리 집에서 시간을 보냈습니다. 오히려 가족이 더 가까워졌습니다."
      }
    ]
  },
  {
    id: 8,
    year: 2000,
    era: "새 천년",
    title: "밀레니엄",
    description: "새 천년이 밝았습니다. Y2K 걱정도 있었지만, 모든 것이 순조롭습니다.",
    question: "새 천년, 어떤 결심을 하시겠습니까?",
    background: "city_2000",
    choices: [
      {
        text: "건강 관리를 시작한다",
        effects: { health: 25, patience: 10, family: 5 },
        response: "매일 아침 운동을 시작했습니다. 몸도 마음도 가벼워졌습니다."
      },
      {
        text: "자녀 교육에 집중한다",
        effects: { family: 20, nestEgg: -15, reputation: 10 },
        response: "아이들 교육에 투자하기로 했습니다. 학원비가 부담되지만 아이들의 미래를 위해!"
      },
      {
        text: "신앙 공동체 활동을 늘린다",
        effects: { faith: 25, family: 10, love: 10 },
        response: "교회에서 더 많은 봉사활동을 시작했습니다. 삶이 더 풍요로워졌습니다."
      }
    ]
  },
  {
    id: 9,
    year: 2003,
    era: "2000년대",
    title: "부장 승진",
    description: "회사에서 부장으로 승진 제안이 왔습니다. 하지만 지방 발령이 조건입니다.",
    question: "어떻게 하시겠습니까?",
    background: "office_2000",
    choices: [
      {
        text: "가족과 함께 지방으로 간다",
        effects: { work: 20, family: 10, reputation: 15, nestEgg: 10 },
        response: "새로운 환경에서 가족과 함께 새 출발을 했습니다."
      },
      {
        text: "승진을 포기하고 가족 곁에 남는다",
        effects: { family: 25, love: 15, patience: 10, work: -10 },
        response: "아이들의 학교와 아내의 직장을 생각해 남았습니다. 가족이 당신을 안아주었습니다."
      },
      {
        text: "혼자 가서 주말부부를 한다",
        effects: { work: 20, reputation: 15, nestEgg: 15, family: -10, health: -10 },
        response: "주중에는 열심히 일하고, 주말에는 가족에게 달려갔습니다. 힘들지만 버텼습니다."
      }
    ]
  },
  {
    id: 10,
    year: 2005,
    era: "2000년대",
    title: "부모님의 병환",
    description: "연로하신 부모님께서 건강이 안 좋아지셨습니다. 병원에 자주 가셔야 합니다.",
    question: "어떻게 부모님을 모시겠습니까?",
    background: "hospital",
    choices: [
      {
        text: "모시고 함께 살기로 한다",
        effects: { family: 25, faith: 15, nestEgg: -15, patience: 10 },
        response: "부모님을 모시고 살기로 했습니다. 아이들도 할아버지 할머니와 정을 쌓았습니다."
      },
      {
        text: "병원비와 간병을 지원한다",
        effects: { family: 15, nestEgg: -25, work: 5, patience: 5 },
        response: "경제적 지원을 아끼지 않았습니다. 부모님께 효도하는 마음입니다."
      },
      {
        text: "형제들과 분담한다",
        effects: { family: 10, nestEgg: -10, patience: 15 },
        response: "형제들과 상의하여 역할을 나누었습니다. 함께하니 부담이 덜했습니다."
      }
    ]
  },
  {
    id: 11,
    year: 2008,
    era: "2000년대",
    title: "글로벌 금융위기",
    description: "세계 금융위기가 터졌습니다. 주식과 부동산 가격이 폭락하고 있습니다.",
    question: "당신의 선택은?",
    background: "city_2000",
    choices: [
      {
        text: "이럴 때 투자해야 한다",
        effects: { nestEgg: 30, patience: -10, health: -5 },
        response: "용기를 내어 투자했습니다. 몇 년 후, 그 결정이 옳았음이 증명됩니다."
      },
      {
        text: "안전하게 저축만 한다",
        effects: { nestEgg: 10, patience: 15, family: 5 },
        response: "위험한 투자보다 안전한 저축을 선택했습니다. 마음이 편안했습니다."
      },
      {
        text: "가족 여행을 간다",
        effects: { family: 20, love: 15, health: 10, nestEgg: -15 },
        response: "어려운 때일수록 가족과의 추억이 중요하다 생각했습니다. 행복한 여행이었습니다."
      }
    ]
  },
  {
    id: 12,
    year: 2010,
    era: "2010년대",
    title: "자녀의 대학 입학",
    description: "첫째 아이가 대학에 입학했습니다. 성인이 된 자녀를 보니 감회가 새롭습니다.",
    question: "자녀에게 해주고 싶은 것은?",
    background: "university",
    choices: [
      {
        text: "학비와 용돈을 넉넉히 지원한다",
        effects: { family: 15, nestEgg: -25, love: 10 },
        response: "자녀가 공부에만 집중할 수 있도록 전폭적으로 지원했습니다."
      },
      {
        text: "아르바이트를 권유한다",
        effects: { family: 5, patience: 15, nestEgg: -5 },
        response: "사회 경험도 중요하다며 아르바이트를 권했습니다. 아이가 더 성숙해졌습니다."
      },
      {
        text: "인생 조언을 해준다",
        effects: { family: 20, faith: 10, reputation: 5 },
        response: "당신의 경험담과 인생 조언을 나누었습니다. 아이가 고마워했습니다."
      }
    ]
  },
  {
    id: 13,
    year: 2013,
    era: "2010년대",
    title: "건강 검진 결과",
    description: "정기 건강검진에서 주의가 필요하다는 진단을 받았습니다.",
    question: "어떻게 대처하시겠습니까?",
    background: "hospital",
    choices: [
      {
        text: "생활 습관을 완전히 바꾼다",
        effects: { health: 30, patience: 10, work: -5 },
        response: "음주를 끊고, 매일 운동을 시작했습니다. 건강이 눈에 띄게 좋아졌습니다."
      },
      {
        text: "적당히 관리한다",
        effects: { health: 10, patience: 5, work: 5 },
        response: "무리하지 않는 선에서 건강을 관리했습니다."
      },
      {
        text: "가족과 함께 건강한 생활",
        effects: { health: 20, family: 15, love: 10 },
        response: "온 가족이 함께 건강한 식단과 운동을 시작했습니다. 가족의 사랑을 느꼈습니다."
      }
    ]
  },
  {
    id: 14,
    year: 2015,
    era: "2010년대",
    title: "30년 근속",
    description: "회사에서 30년을 근무했습니다. 회사에서 공로상을 수여합니다.",
    question: "시상식에서 어떤 소감을 말씀하시겠습니까?",
    background: "office_2010",
    choices: [
      {
        text: "가족에게 감사를 전한다",
        effects: { family: 25, love: 20, faith: 10 },
        response: "\"이 자리까지 올 수 있었던 건 가족 덕분입니다.\" 아내가 눈물을 글썽였습니다."
      },
      {
        text: "동료들에게 감사를 전한다",
        effects: { reputation: 25, work: 15, patience: 10 },
        response: "\"함께해준 동료들이 있어 가능했습니다.\" 동료들이 박수를 보냈습니다."
      },
      {
        text: "하나님께 영광을 돌린다",
        effects: { faith: 30, family: 10, reputation: 10 },
        response: "\"모든 것이 은혜입니다.\" 겸손한 고백에 많은 이들이 감동받았습니다."
      }
    ]
  },
  {
    id: 15,
    year: 2018,
    era: "2010년대",
    title: "자녀의 결혼",
    description: "첫째 아이가 결혼합니다. 이제 당신도 장인/장모가 됩니다.",
    question: "결혼 선물로 무엇을 해주시겠습니까?",
    background: "wedding",
    choices: [
      {
        text: "신혼집 전세금을 보태준다",
        effects: { family: 20, nestEgg: -35, love: 15 },
        response: "\"새 출발을 잘 하렴.\" 알뜰히 모은 돈을 자녀에게 주었습니다."
      },
      {
        text: "결혼 비용만 지원한다",
        effects: { family: 10, nestEgg: -15, patience: 10 },
        response: "자녀가 스스로 일어서길 바라며 적당한 지원을 했습니다."
      },
      {
        text: "인생 조언과 축복을 해준다",
        effects: { family: 15, faith: 15, love: 10, reputation: 5 },
        response: "편지와 함께 진심 어린 축복을 전했습니다. 아이가 울먹였습니다."
      }
    ]
  },
  {
    id: 16,
    year: 2020,
    era: "코로나 시대",
    title: "팬데믹",
    description: "코로나19로 세상이 멈췄습니다. 재택근무와 격리 생활이 시작됩니다.",
    question: "이 시간을 어떻게 보내시겠습니까?",
    background: "home_2020",
    choices: [
      {
        text: "가족과 오붓한 시간을 보낸다",
        effects: { family: 25, love: 20, health: 10, work: -5 },
        response: "오랜만에 가족과 함께하는 시간이 많아졌습니다. 소중함을 다시 느꼈습니다."
      },
      {
        text: "온라인으로 신앙생활을 이어간다",
        effects: { faith: 20, patience: 15, family: 10 },
        response: "온라인 예배에 참석하고, 가정예배를 드렸습니다. 신앙이 더 깊어졌습니다."
      },
      {
        text: "건강 관리에 집중한다",
        effects: { health: 25, patience: 10, nestEgg: 5 },
        response: "집에서 운동하고, 건강한 식사를 했습니다. 체력이 좋아졌습니다."
      }
    ]
  },
  {
    id: 17,
    year: 2022,
    era: "2020년대",
    title: "손주의 탄생",
    description: "첫 손주가 태어났습니다! 할아버지가 된 기분이 어떠신가요?",
    question: "손주에게 어떤 할아버지가 되고 싶으신가요?",
    background: "home_2020",
    choices: [
      {
        text: "매일 손주를 보러 간다",
        effects: { family: 30, love: 20, health: 5 },
        response: "손주 얼굴을 보는 것이 가장 큰 행복입니다. 인생의 보람을 느낍니다."
      },
      {
        text: "손주 적금을 들어준다",
        effects: { family: 15, nestEgg: -20, patience: 10 },
        response: "손주의 미래를 위해 적금을 시작했습니다. 작은 정성입니다."
      },
      {
        text: "건강하게 오래 살겠다고 다짐한다",
        effects: { health: 20, faith: 15, family: 10 },
        response: "손주가 클 때까지 건강하게 살아야겠다고 결심했습니다."
      }
    ]
  },
  {
    id: 18,
    year: 2024,
    era: "2020년대",
    title: "은퇴 준비",
    description: "정년이 다가오고 있습니다. 40년간의 직장 생활을 마무리할 때입니다.",
    question: "은퇴 후 무엇을 하고 싶으신가요?",
    background: "sunset",
    choices: [
      {
        text: "아내와 여행을 다니고 싶다",
        effects: { love: 25, family: 15, health: 10 },
        response: "아내와 함께 버킷리스트를 작성했습니다. 설레는 계획들입니다."
      },
      {
        text: "교회 봉사에 더 힘쓰고 싶다",
        effects: { faith: 30, reputation: 15, family: 10 },
        response: "은퇴 후에는 더 많이 봉사하기로 했습니다. 의미 있는 삶입니다."
      },
      {
        text: "손주 돌보며 여유롭게 살고 싶다",
        effects: { family: 25, patience: 15, love: 10 },
        response: "귀여운 손주와 함께하는 일상을 꿈꿉니다. 행복한 노후입니다."
      }
    ]
  },
  {
    id: 19,
    year: 2025,
    era: "현재",
    title: "은퇴식",
    description: "드디어 은퇴식 날입니다. 40년간의 여정을 되돌아보는 시간입니다.",
    question: "은퇴사에서 무슨 말씀을 하시겠습니까?",
    background: "retirement",
    choices: [
      {
        text: "감사했던 순간들을 이야기한다",
        effects: { reputation: 20, family: 15, patience: 10 },
        response: "40년간의 감사한 순간들을 나누었습니다. 모두가 감동받았습니다."
      },
      {
        text: "후배들에게 조언을 남긴다",
        effects: { reputation: 25, work: 10, faith: 10 },
        response: "진심 어린 조언을 남겼습니다. 후배들이 박수를 보냈습니다."
      },
      {
        text: "가족에 대한 사랑을 고백한다",
        effects: { family: 30, love: 25, faith: 10 },
        response: "\"가족이 있어 여기까지 올 수 있었습니다.\" 아내와 자녀들이 눈물을 흘렸습니다."
      }
    ]
  }
];

export default stages;
