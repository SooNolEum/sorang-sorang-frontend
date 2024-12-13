export type ExploreItem = {
    id: number;
    location: string;
    name: string;
    gender: string;
    title: string;
    keyword: string;
    description: string;
    fullDescription: string;
    quiz: string;
    options: string;
    answer: number;
};

export const exploreInfo: ExploreItem[] = [
    {
        id: 1,
        location: '제주시',
        name: '이순자',
        gender: '할머니',
        title: '제주시 설화 이야기',
        keyword: '바다',
        description:
            '제주시는 바다의 신들이 인간 세계에 평화를 가져왔다는 전설이 전해지는 아름다운 해변과 자연의 고장입니다.',
        fullDescription:
            '제주시 아름다운 해변과 자연경관으로 유명하며, 바다의 신들이 마을에 평화를 가져왔다는 전설이 전해집니다. 이 이야기는 자연과 공존의 가치를 전합니다.',
        quiz: '이순자 할머니가 이야기하는 전설에서 바다의 신들이 가져온 것은 무엇인가요?',
        options: "['평화', '풍요', '행운', '사랑']",
        answer: 1,
    },
    {
        id: 2,
        location: '조천읍',
        name: '김석진',
        gender: '할아버지',
        title: '한라산의 전설',
        keyword: '산',
        description:
            '한라산은 신성한 존재가 살며, 산을 오르는 이들에게 자연과 조화를 이루려는 마음이 있을 때 능력을 준다는 전설이 전해집니다.',
        fullDescription:
            '한라산은 제주도의 상징으로, 꼭대기에는 신이 살며 산을 오르는 이들에게 자연과 조화를 이루려는 마음이 있을 때 신비한 능력을 준다는 전설이 전해집니다.',
        quiz: '김석진 할아버지가 이야기하는 한라산의 꼭대기에는 무엇이 살고 있나요?',
        options: "['신', '용', '거인', '정령']",
        answer: 1,
    },
    {
        id: 3,
        location: '구좌읍',
        name: '박정희',
        gender: '할머니',
        title: '고산마을의 역사',
        keyword: '전통',
        description:
            '고산리는 고대 신들이 마을을 보호하고 예언을 전했다는 전설이 전해지는 제주의 전통적인 마을입니다.',
        fullDescription:
            '고산리는 고대 신들이 마을을 보호하고 지혜와 경고를 전했다는 전설이 전해집니다. 이 이야기는 자연과 조화로운 삶의 중요성을 강조하며 마을의 매력을 더합니다.',
        quiz: "박정희 할머니가 이야기하는 고산리의 고대 신들이 주민들에게 전해준 것은 무엇인가요?'",
        options: "['예언', '보물', '능력', '행운']",
        answer: 1,
    },
    {
        id: 4,
        location: '성산읍',
        name: '정민수',
        gender: '할아버지',
        title: '성산의 전설',
        keyword: '문화',
        description:
            '성산읍은 근대와 전통이 어우러진 도시로, 정민수 할아버지는 옛 건물들이 신들의 집이었다는 전설을 전합니다.',
        fullDescription:
            '성산읍에는 신들이 머물며 도시의 번영을 도왔다는 전설이 전해집니다. 이 이야기는 도시의 역사와 신화적 매력을 더하며 전통의 흔적을 느끼게 합니다.',
        quiz: '정민수 할아버지가 이야기하는 제주 시내의 오래된 건물들은 무엇이라고 전해지나요?',
        options: "['신들의 집', '왕의 집', '마을의 집', '용의 집']",
        answer: 1,
    },
    {
        id: 5,
        location: '표선면',
        name: '김하늘',
        gender: '할아버지',
        title: '조천의 민속',
        keyword: '김하늘',
        description:
            '조천읍은 민속과 전통이 살아 있는 곳으로, 김하늘 할머니는 풍요와 평안을 기원하는 제사 의식을 전합니다.',
        fullDescription:
            '조천읍은 풍요와 평안을 기원하며 수호신에게 제사를 올리던 전통이 전해집니다. 이 의식은 주민 단합과 자연과의 조화를 상징하며 제주의 문화를 이어가고 있습니다.',
        quiz: '김하늘 할머니가 이야기하는 조천의 민속 제사는 무엇을 기원하나요?',
        options: "['마을의 평안', '풍요', '행운', '사랑']",
        answer: 1,
    },
    {
        id: 6,
        location: '남원읍',
        name: '강영식',
        gender: '할아버지',
        title: '남원읍 신화',
        keyword: '신화',
        description:
            '남원읍은 하늘의 신이 바다에 떨어져 마을을 구했다는 전설이 전해지며, 주민들은 이를 기리는 축제를 엽니다.',
        fullDescription:
            '남원읍에는 하늘의 신이 바다에 떨어져 마을을 구했다는 전설이 전해집니다. 이를 기리며 주민들은 매년 축제를 열고 자연과 신화의 조화를 기립니다.',
        quiz: '강영식 할아버지가 이야기하는 애월의 하늘에 살던 신은 어디에 떨어졌나요?',
        options: "['바다', '산', '숲', '강']",
        answer: 1,
    },
    {
        id: 7,
        location: '서귀포시',
        name: '이정숙',
        gender: '할머니',
        title: '서귀포의 전설',
        keyword: '바다',
        description:
            '서귀포 바다에는 한 여인이 잃어버린 아이를 찾아 신에게 기도해 아이를 되찾았다는 전설이 전해집니다.',
        fullDescription:
            '서귀포 바다에는 한 여인이 잃어버린 아이를 찾아 신에게 기도해 아이를 되찾았다는 전설이 전해집니다. 이 이야기는 바다의 신비와 희망을 상징합니다.',
        quiz: '이정숙 할머니가 이야기하는 전설에서 바다의 신에게 기도한 여인은 무엇을 찾고 있었나요?',
        options:
            "['잃어버린 아이', '잃어버린 물건', '잃어버린 배', '잃어버린 사람']",
        answer: 1,
    },
    {
        id: 8,
        location: '안덕면',
        name: '홍준호',
        gender: '할아버지',
        title: '제주의 자연',
        keyword: '자연',
        description:
            '제주의 산과 바다가 싸우다 하나로 합쳐져 제주도가 되었다는 전설은 자연의 힘과 조화의 중요성을 전합니다.',
        fullDescription:
            '제주의 산과 바다는 다툼 끝에 조화를 이루며 하나가 되어 지금의 제주도가 되었다는 전설이 전해집니다. 이 이야기는 자연의 힘과 조화를 존중해야 한다는 교훈을 줍니다.',
        quiz: '홍준호 할아버지가 이야기하는 제주의 산과 바다는 무엇을 통해 하나로 합쳐졌나요?',
        options: "['싸움', '기후', '신의 축복', '자연재해']",
        answer: 1,
    },
    {
        id: 9,
        location: '대정읍',
        name: '최미정',
        gender: '할머니',
        title: '조천의 과거',
        keyword: '역사',
        description:
            '대정읍은 왕이 머물던 곳으로, 예언으로 제주를 구했다는 신화와 전설이 전해지는 제주 역사에서 중요한 장소입니다.',
        fullDescription:
            '대정읍은 왕이 머물던 곳으로, 예언으로 제주를 구했다는 전설이 전해집니다. 이 이야기는 조천이 제주 문화와 전통의 중심지임을 보여줍니다.',
        quiz: '최미정 할머니가 이야기하는 조천은 어떤 중요한 역할을 했다고 전해지나요?',
        options:
            "['왕조 시절 중요한 장소', '중요한 상업 중심지', '농업 중심지', '군사 요충지']",
        answer: 1,
    },
    {
        id: 10,
        location: '한경면',
        name: '박재호',
        gender: '할아버지',
        title: '한경면 이야기',
        keyword: '도시',
        description:
            '한경면에는 마을 수호신이 등장해 마을을 지켜주고 평화롭게 발전했다는 전설이 전해집니다.',
        fullDescription:
            '한경면에는 마을 수호신이 나타나 주민을 보호하고 축복을 내려 마을이 평화와 번영을 이루며 발전했다는 전설이 전해집니다.',
        quiz: '박재호 할아버지가 이야기하는 제주 시내의 초기 마을 건설과 관련된 전설에서 무엇이 등장하나요?',
        options: "['마을의 수호신', '왕', '용', '거인']",
        answer: 1,
    },
    {
        id: 11,
        location: '한림읍',
        name: '신정호',
        gender: '할아버지',
        title: '전쟁과 제건 이야기',
        keyword: '자연',
        description:
            '한국의 할아버지, 할머니는 전쟁과 전통 이야기를 통해 희망과 노력, 가족 사랑의 가치를 전해줍니다.',
        fullDescription:
            '한림읍 할아버지는 한국전쟁의 고난과 재건 이야기를, 할머니는 가족 사랑과 전통 생활 이야기를 전하며, 전통과 가족의 가치를 일깨웁니다.',
        quiz: '신정호 할아버지는 어떤 이야기를 통해 노력과 가족 사랑의 가치를 전할까요?',
        options: "['보물', '산', '숲', '강']",
        answer: 1,
    },
    {
        id: 12,
        location: '애월읍',
        name: '전용숙',
        gender: '할머니',
        title: '애월읍 신들의 전설',
        keyword: '신화',
        description:
            '애월읍 할머니는 하늘의 신이 바다에 떨어져 마을을 구한 전설과 이를 기리는 축제가 전해진다고 말합니다.',
        fullDescription:
            '애월읍 할머니는 하늘의 신이 바다에 떨어져 마을을 구하고 이를 기리기 위해 주민들이 매년 축제를 열었다는 전설을 전하며 마을의 전통을 이어갑니다.',
        quiz: '전용숙 할머니는 애월읍의 어떤 전설을 들려주셨을까요?',
        options: "['신', '아이', '용', '바람']",
        answer: 1,
    },
];