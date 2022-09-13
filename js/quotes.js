const quotelist = [
    {
        quote: "우리는 기대하는 수준까지 올라가는 게 아니라, 훈련한 수준까지 떨어진다.",
        author: "고대 그리스 시인 아르킬로코스"
    },
    {
        quote: "빨리 가는 유일한 방법은 제대로 가는 것이다.",
        author: "Robert C. Martin <Clean Code>"
    },
    {
        quote: "모든 사람은 평등하게 태어났고 창조주로부터 양도할 수 없는 생명권, 자유권, 행복의 추구권을 부여받았다.",
        author: "토머스 제퍼슨, 미국의 독립선언문"
    },
    {
        quote: "책은 우리 마음 안에 있는 얼어붙은 바다를 깨는 도끼여야 한다.",
        author: "프란츠 카프카"
    },
    {
        quote: "악의 어머니는 지식일 수 없고, 정의는 무지함의 딸일 수 없다.",
        author: "Agrippa D'Aubigne'"
    },
    {
        quote: "지금의 작은 안전을 위해서 자유를 포기하는 사람은 둘 다 가질 권리가 없고 둘 다 잃게 될 것이다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "자신 그대로의 모습으로 살아가는 데 용기와 강인함을 지니고 자아를 철저하게 긍정해야 한다.",
        author: "자유로부터의 도피 / 에리히 프롬"
    },
    {
        quote: "부란 인생을 충분히 경험할 수 있는 능력이다.",
        author: "헨리 데이비드 소로"
    },
    {
        quote: "사람은 오직 강점을 통해서만 성과를 거둘 수 있다.",
        author: "피터 드러커"
    },
    {
        quote: "자신에게 잘 맞는 일을 찾아서 그 일을 수행할 기회를 잡는 것, 그것이 바로 행복을 여는 열쇠다.",
        author: "존 듀이"
    },
    {
        quote: "Dilige et fac quod vis. 사랑하라. 그리고 네가 하고 싶은 것을 하라.",
        author: "아우구스티누스"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotelist[Math.floor(Math.random() * quotelist.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;