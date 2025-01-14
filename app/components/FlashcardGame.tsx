"use client"; 
import React, { useState, useEffect  } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, Trophy, Sun, Moon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const flashcardsData = [
    {
    word: "功能",
    pinyin: "gōng néng",
    translation: "function, capability",
    example: "这个手机有很多功能。 (This phone has many functions.)"
    },
    {
    word: "礼轻情意重",
    pinyin: "lǐ qīng qíng yì zhòng",
    translation: "The gift is small but the thought behind it is profound",
    example: "虽然只是一张贺卡，但是礼轻情意重。 (Although it's just a greeting card, the sentiment is what matters.)"
    },
    {
    word: "最后胜利",
    pinyin: "zuì hòu shèng lì",
    translation: "final victory",
    example: "经过努力，我们终于取得了最后胜利。 (After hard work, we finally achieved the final victory.)"
    },
    {
    word: "借刀杀人",
    pinyin: "jiè dāo shā rén",
    translation: "to get someone else to do your dirty work",
    example: "他在背后借刀杀人，让别人当替罪羊。 (He manipulated others to do his dirty work, making them scapegoats.)"
    },
    {
    word: "偶尔",
    pinyin: "ǒu ěr",
    translation: "occasionally, sometimes",
    example: "我偶尔会去那家餐厅。 (I occasionally go to that restaurant.)"
    },
    {
    word: "基本上",
    pinyin: "jī běn shàng",
    translation: "basically, fundamentally",
    example: "我基本上同意你的观点。 (I basically agree with your point of view.)"
    },
    {
    word: "习以平常",
    pinyin: "xí yǐ píng cháng",
    translation: "to become accustomed to",
    example: "住在这里久了，就习以平常了。 (After living here for a long time, I've become accustomed to it.)"
    },
    {
    word: "在意",
    pinyin: "zài yì",
    translation: "to care about, to mind",
    example: "别太在意别人的看法。 (Don't care too much about what others think.)"
    },
    {
    word: "蔚为风尚",
    pinyin: "wèi wéi fēng shàng",
    translation: "to become fashionable/popular",
    example: "这种穿搭最近蔚为风尚。 (This style of dress has recently become fashionable.)"
    },
    {
    word: "精致化",
    pinyin: "jīng zhì huà",
    translation: "refinement, becoming more sophisticated",
    example: "现代生活越来越精致化。 (Modern life is becoming increasingly refined.)"
    },
    {
    word: "应有尽有",
    pinyin: "yīng yǒu jìn yǒu",
    translation: "to have everything that should be there",
    example: "这个商场应有尽有。 (This mall has everything you could want.)"
    },
    {
    word: "奢华",
    pinyin: "shē huá",
    translation: "luxurious, extravagant",
    example: "这家酒店非常奢华。 (This hotel is very luxurious.)"
    },
    {
    word: "澡堂",
    pinyin: "zǎo táng",
    translation: "bathhouse, public bath",
    example: "日本的澡堂文化很有特色。 (Japanese bathhouse culture is very distinctive.)"
    },
    {
    word: "神仙般的生活",
    pinyin: "shén xiān bān de shēng huó",
    translation: "life like an immortal (idyllic life)",
    example: "退休后过着神仙般的生活。 (Living an idyllic life after retirement.)"
    },
    {
    word: "人应该过的生活",
    pinyin: "rén yīng gāi guò de shēng huó",
    translation: "the life one should live",
    example: "这就是人应该过的生活。 (This is how people should live.)"
    },
    {
    word: "卫生",
    pinyin: "wèi shēng",
    translation: "hygiene, sanitary",
    example: "保持良好的卫生习惯很重要。 (Maintaining good hygiene habits is important.)"
    },
    {
    word: "天体营",
    pinyin: "tiān tǐ yíng",
    translation: "nudist camp",
    example: "欧洲有很多天体营。 (There are many nudist camps in Europe.)"
    },
    {
    word: "裸体海滩",
    pinyin: "luǒ tǐ hǎi tān",
    translation: "nude beach",
    example: "这是一个著名的裸体海滩。 (This is a famous nude beach.)"
    },
    {
    word: "解放",
    pinyin: "jiě fàng",
    translation: "liberation, emancipation",
    example: "思想的解放带来进步。 (The liberation of thought brings progress.)"
    },
    {
        word: "阵营",
        pinyin: "zhèn yíng",
        translation: "camp, faction",
        example: "两个阵营之间的对抗日益激烈。 (The confrontation between the two camps is intensifying.)"
    },
    {
        word: "为主",
        pinyin: "wéi zhǔ",
        translation: "to take as the main thing, predominantly",
        example: "这个餐厅以海鲜为主。 (This restaurant mainly serves seafood.)"
    },
    {
        word: "成立",
        pinyin: "chéng lì",
        translation: "to establish, to set up",
        example: "这家公司成立于2010年。 (This company was established in 2010.)"
    },
    {
        word: "倾向于",
        pinyin: "qīng xiàng yú",
        translation: "tend to, be inclined to",
        example: "他倾向于选择安全的投资。 (He tends to choose safe investments.)"
    },
    {
        word: "新生",
        pinyin: "xīn shēng",
        translation: "new born, new student",
        example: "新生需要时间来适应大学生活。 (New students need time to adapt to college life.)"
    },
    {
        word: "坚持",
        pinyin: "jiān chí",
        translation: "to persist, to insist",
        example: "他坚持每天锻炼。 (He persists in exercising every day.)"
    },
    {
        word: "独立自主",
        pinyin: "dú lì zì zhǔ",
        translation: "independent and autonomous",
        example: "我们要保持独立自主的态度。 (We need to maintain an independent attitude.)"
    },
    {
        word: "马首是瞻",
        pinyin: "mǎ shǒu shì zhān",
        translation: "to follow blindly",
        example: "不要总是马首是瞻，要有自己的想法。 (Don't always follow blindly, have your own thoughts.)"
    },
    {
        word: "十分依赖于苏联",
        pinyin: "shí fēn yī lài yú sū lián",
        translation: "heavily dependent on the Soviet Union",
        example: "那时的工业发展十分依赖于苏联。 (Industrial development at that time was heavily dependent on the Soviet Union.)"
    },
    {
        word: "悠久",
        pinyin: "yōu jiǔ",
        translation: "long-standing, age-old",
        example: "中国有悠久的历史。 (China has a long-standing history.)"
    },
    {
        word: "过分",
        pinyin: "guò fèn",
        translation: "excessive, too much",
        example: "他的要求有点过分。 (His demands are a bit excessive.)"
    },
    {
        word: "寻求",
        pinyin: "xún qiú",
        translation: "to seek, to look for",
        example: "我们正在寻求解决方案。 (We are seeking solutions.)"
    },
    {
        word: "对头",
        pinyin: "duì tóu",
        translation: "correct, right",
        example: "你说的很对头。 (What you said is quite right.)"
    },
    {
        word: "看好",
        pinyin: "kàn hǎo",
        translation: "to be optimistic about, to think highly of",
        example: "专家很看好这个行业的发展。 (Experts are optimistic about this industry's development.)"
    },
    {
        word: "意识形态",
        pinyin: "yì shi xíng tài",
        translation: "ideology",
        example: "不同的意识形态导致了分歧。 (Different ideologies led to divergence.)"
    },
    {
        word: "搞笑",
        pinyin: "gǎo xiào",
        translation: "funny, humorous",
        example: "这部电影很搞笑。 (This movie is very funny.)"
    },
    {
        word: "考量",
        pinyin: "kǎo liáng",
        translation: "to consider, to weigh",
        example: "我们需要全面考量这个问题。 (We need to consider this issue comprehensively.)"
    },
    {
        word: "利益",
        pinyin: "lì yì",
        translation: "benefit, profit, interest",
        example: "要平衡各方利益。 (We need to balance the interests of all parties.)"
    },
    {
        word: "战争",
        pinyin: "zhàn zhēng",
        translation: "war",
        example: "战争给人民带来灾难。 (War brings disaster to people.)"
    },
    {
        word: "抗美援朝",
        pinyin: "kàng měi yuán cháo",
        translation: "War to Resist US Aggression and Aid Korea",
        example: "抗美援朝战争发生在1950年代。 (The War to Resist US Aggression and Aid Korea occurred in the 1950s.)"
    },
    {
        word: "整个世界",
        pinyin: "zhěng gè shì jiè",
        translation: "the whole world",
        example: "整个世界都在关注这个问题。 (The whole world is paying attention to this issue.)"
    },
    {
        word: "侧目",
        pinyin: "cè mù",
        translation: "to look askance at, to view with suspicion",
        example: "他的行为引人侧目。 (His behavior draws suspicious glances.)"
    },
    {
        word: "军事实力",
        pinyin: "jūn shì shí lì",
        translation: "military strength",
        example: "这个国家的军事实力很强大。 (This country's military strength is powerful.)"
    },
    {
        word: "绝对的胜利",
        pinyin: "jué duì de shèng lì",
        translation: "absolute victory",
        example: "这场战争取得了绝对的胜利。 (This war achieved an absolute victory.)"
    },
    {
        word: "牺牲",
        pinyin: "xī shēng",
        translation: "sacrifice",
        example: "为了和平付出了巨大牺牲。 (Great sacrifices were made for peace.)"
    },
    {
        word: "说明",
        pinyin: "shuō míng",
        translation: "to explain, to illustrate",
        example: "请说明你的想法。 (Please explain your thoughts.)"
    },
    {
        word: "调整",
        pinyin: "tiáo zhěng",
        translation: "to adjust, to regulate",
        example: "需要调整计划。 (The plan needs to be adjusted.)"
    },
    {
        word: "思想",
        pinyin: "sī xiǎng",
        translation: "thought, thinking",
        example: "他的思想很开放。 (His thinking is very open.)"
    },
    {
        word: "大规模",
        pinyin: "dà guī mó",
        translation: "large-scale",
        example: "进行大规模的改革。 (Carry out large-scale reforms.)"
    },
    {
        word: "支援",
        pinyin: "zhī yuán",
        translation: "to support, to aid",
        example: "我们要支援灾区重建。 (We need to support disaster area reconstruction.)"
    },
    {
        word: "重工业",
        pinyin: "zhòng gōng yè",
        translation: "heavy industry",
        example: "发展重工业是当时的重点。 (Developing heavy industry was the focus at that time.)"
    },
    {
        word: "承接",
        pinyin: "chéng jiē",
        translation: "to undertake, to accept",
        example: "公司承接了这个项目。 (The company undertook this project.)"
    },
    {
        word: "领导人",
        pinyin: "lǐng dǎo rén",
        translation: "leader",
        example: "两国领导人举行了会谈。 (The leaders of both countries held talks.)"
    },
    {
        word: "霸权国家",
        pinyin: "bà quán guó jiā",
        translation: "hegemonic power",
        example: "反对霸权国家的压迫。 (Oppose the oppression of hegemonic powers.)"
    },
    {
        word: "中苏交恶",
        pinyin: "zhōng sū jiāo è",
        translation: "Sino-Soviet split",
        example: "中苏交恶影响了两国关系。 (The Sino-Soviet split affected relations between the two countries.)"
    },
    {
        word: "经济危机",
        pinyin: "jīng jì wēi jī",
        translation: "economic crisis",
        example: "全球经济危机影响深远。 (The global economic crisis has far-reaching effects.)"
    },
    {
        word: "团队",
        pinyin: "tuán duì",
        translation: "team",
        example: "我们有一个优秀的团队。 (We have an excellent team.)"
    },
    {
        word: "结果",
        pinyin: "jié guǒ",
        translation: "result, outcome",
        example: "等待考试结果。 (Waiting for the exam results.)"
    },
    {
        word: "主角",
        pinyin: "zhǔ jué",
        translation: "protagonist, main character",
        example: "他是这部电影的主角。 (He is the protagonist of this movie.)"
    },
    {
        word: "进口",
        pinyin: "jìn kǒu",
        translation: "to import",
        example: "这些商品都是进口的。 (These goods are all imported.)"
    },
    {
        word: "城市化",
        pinyin: "chéng shì huà",
        translation: "urbanization",
        example: "城市化进程不断加快。 (The process of urbanization is accelerating.)"
    },
    {
        word: "小农耕作",
        pinyin: "xiǎo nóng gēng zuò",
        translation: "small-scale farming",
        example: "传统的小农耕作方式正在改变。 (Traditional small-scale farming methods are changing.)"
    },
    {
        word: "经历",
        pinyin: "jīng lì",
        translation: "experience, to experience",
        example: "他经历了很多困难。 (He has experienced many difficulties.)"
    },
    {
        word: "文革",
        pinyin: "wén gé",
        translation: "Cultural Revolution",
        example: "文革给中国带来了深重灾难。 (The Cultural Revolution brought severe disasters to China.)"
    },
    {
        word: "上山下乡",
        pinyin: "shàng shān xià xiāng",
        translation: "to go to mountainous areas and countryside (movement in Cultural Revolution)",
        example: "很多知青参加了上山下乡运动。 (Many educated youth participated in the Up to the Mountains and Down to the Countryside Movement.)"
    },
    {
        word: "村里",
        pinyin: "cūn lǐ",
        translation: "in the village",
        example: "村里的生活很平静。 (Life in the village is very peaceful.)"
    },
    {
        word: "农村",
        pinyin: "nóng cūn",
        translation: "rural area, countryside",
        example: "农村的面貌在改变。 (The countryside's appearance is changing.)"
    },
    {
        word: "种地",
        pinyin: "zhòng dì",
        translation: "to farm",
        example: "老人一辈子都在种地。 (The old man has been farming all his life.)"
    },
    {
        word: "由俭入奢易，由奢入俭难",
        pinyin: "yóu jiǎn rù shē yì, yóu shē rù jiǎn nán",
        translation: "it's easy to go from thrifty to luxurious, but hard to go from luxurious to thrifty",
        example: "这句古话说明了由俭入奢易，由奢入俭难的道理。 (This ancient saying illustrates the principle that it's easy to go from thrifty to luxurious, but hard to go from luxurious to thrifty.)"
    },
    {
        word: "得不到",
        pinyin: "dé bù dào",
        translation: "cannot obtain, cannot get",
        example: "得不到的东西不要强求。 (Don't force things you cannot obtain.)"
    },
    {
        word: "进行",
        pinyin: "jìn xíng",
        translation: "to carry out, to conduct",
        example: "会议正在进行中。 (The meeting is in progress.)"
    },
    {
        word: "禁运",
        pinyin: "jìn yùn",
        translation: "embargo",
        example: "对该国实施禁运。 (Impose an embargo on that country.)"
    },
    {
        word: "疫情",
        pinyin: "yì qíng",
        translation: "epidemic situation",
        example: "疫情影响了全球经济。 (The epidemic situation has affected the global economy.)"
    },
    {
        word: "废物",
        pinyin: "fèi wù",
        translation: "waste, useless person/thing",
        example: "要正确处理废物。 (Waste should be disposed of properly.)"
    },
    {
        word: "运行",
        pinyin: "yùn xíng",
        translation: "to operate, to run",
        example: "系统正常运行。 (The system is operating normally.)"
    },
    {
        word: "种田",
        pinyin: "zhòng tián",
        translation: "to farm (crops)",
        example: "他一辈子都在种田。 (He has been farming all his life.)"
    },
    {
        word: "大饥荒",
        pinyin: "dà jī huāng",
        translation: "great famine",
        example: "大饥荒造成了严重的后果。 (The great famine caused serious consequences.)"
    },
    {
        word: "非黑即白",
        pinyin: "fēi hēi jí bái",
        translation: "black and white thinking, to see things as absolutely right or wrong",
        example: "问题不能非黑即白地看。 (Problems cannot be viewed in black and white terms.)"
    },
    {
        word: "到底是什么",
        pinyin: "dào dǐ shì shén me",
        translation: "what exactly is it",
        example: "这到底是什么问题？ (What exactly is the problem?)"
    },
    {
        word: "发展",
        pinyin: "fā zhǎn",
        translation: "to develop, development",
        example: "经济正在快速发展。 (The economy is developing rapidly.)"
    },
    {
        word: "整体",
        pinyin: "zhěng tǐ",
        translation: "whole, overall",
        example: "要从整体角度考虑问题。 (Consider issues from an overall perspective.)"
    },
    {
        word: "灾难性的后果",
        pinyin: "zāi nàn xìng de hòu guǒ",
        translation: "disastrous consequences",
        example: "这个决定带来了灾难性的后果。 (This decision led to disastrous consequences.)"
    },
    {
        word: "此时此刻",
        pinyin: "cǐ shí cǐ kè",
        translation: "at this very moment",
        example: "此时此刻，我们应该团结一致。 (At this very moment, we should unite.)"
    },
    {
        word: "莫名其妙",
        pinyin: "mò míng qí miào",
        translation: "inexplicable, bizarre",
        example: "他莫名其妙地生气了。 (He got angry for no apparent reason.)"
    },
    {
        word: "防范",
        pinyin: "fáng fàn",
        translation: "to guard against, to prevent",
        example: "要防范各种风险。 (We must guard against various risks.)"
    },
    {
        word: "路程",
        pinyin: "lù chéng",
        translation: "journey, distance",
        example: "还有很长的路程要走。 (There is still a long journey ahead.)"
    },
    {
        word: "冥想",
        pinyin: "míng xiǎng",
        translation: "meditation",
        example: "每天早上进行冥想。 (Meditate every morning.)"
    },
    {
        word: "流浪汉",
        pinyin: "liú làng hàn",
        translation: "homeless person, vagrant",
        example: "他看见一个流浪汉在街上。 (He saw a homeless person on the street.)"
    },
    {
        word: "旅程",
        pinyin: "lǚ chéng",
        translation: "journey, trip",
        example: "祝你旅程愉快。 (Have a pleasant journey.)"
    },
    {
        word: "互动",
        pinyin: "hù dòng",
        translation: "interaction",
        example: "观众与演员有很多互动。 (There was a lot of interaction between the audience and actors.)"
    },
    {
        word: "探索",
        pinyin: "tàn suǒ",
        translation: "to explore, exploration",
        example: "科学家正在探索宇宙的奥秘。 (Scientists are exploring the mysteries of the universe.)"
    },
    {
        word: "深刻",
        pinyin: "shēn kè",
        translation: "profound, deep",
        example: "这给我留下了深刻的印象。 (This left a profound impression on me.)"
    },
    {
        word: "景点",
        pinyin: "jǐng diǎn",
        translation: "scenic spot, tourist attraction",
        example: "这是本市最著名的景点。 (This is the city's most famous tourist attraction.)"
    },
    {
        word: "浮潜",
        pinyin: "fú qián",
        translation: "snorkeling",
        example: "我们去海边浮潜。 (We went snorkeling at the beach.)"
    },
    {
        word: "讨厌",
        pinyin: "tǎo yàn",
        translation: "to dislike, annoying",
        example: "我讨厌下雨天。 (I hate rainy days.)"
    },
    {
        word: "导游",
        pinyin: "dǎo yóu",
        translation: "tour guide",
        example: "导游给我们介绍了这个地方的历史。 (The tour guide introduced us to the history of this place.)"
    },
    {
        word: "好烦啊",
        pinyin: "hǎo fán a",
        translation: "so annoying",
        example: "这个问题好烦啊！ (This problem is so annoying!)"
    },
    {
        word: "回忆",
        pinyin: "huí yì",
        translation: "memory, to recall",
        example: "童年的回忆很美好。 (Childhood memories are beautiful.)"
    },
    {
        word: "海龟",
        pinyin: "hǎi guī",
        translation: "sea turtle",
        example: "我们在海滩上看到了海龟。 (We saw sea turtles on the beach.)"
    },
    {
        word: "纪念价值",
        pinyin: "jì niàn jià zhí",
        translation: "commemorative value",
        example: "这枚徽章有重要的纪念价值。 (This badge has important commemorative value.)"
    },
    {
        word: "态度",
        pinyin: "tài du",
        translation: "attitude",
        example: "他的态度很积极。 (His attitude is very positive.)"
    },
    {
        word: "友善",
        pinyin: "yǒu shàn",
        translation: "friendly, kind",
        example: "邻居们都很友善。 (The neighbors are all very friendly.)"
    },
    {
        word: "晓得",
        pinyin: "xiǎo de",
        translation: "to know, to understand",
        example: "我晓得这件事。 (I know about this matter.)"
    },
    {
        word: "礼貌",
        pinyin: "lǐ mào",
        translation: "politeness, courtesy",
        example: "要对长辈有礼貌。 (Be polite to your elders.)"
    },
    {
        word: "键盘侠",
        pinyin: "jiàn pán xiá",
        translation: "keyboard warrior",
        example: "不要做键盘侠。 (Don't be a keyboard warrior.)"
    },
    {
        word: "稍微",
        pinyin: "shāo wēi",
        translation: "slightly, a little",
        example: "稍微等一下。 (Wait a little bit.)"
    },
    {
        word: "沟通",
        pinyin: "gōu tōng",
        translation: "to communicate, communication",
        example: "良好的沟通很重要。 (Good communication is important.)"
    },
    {
        word: "女士",
        pinyin: "nǚ shì",
        translation: "lady, madam",
        example: "这位女士很优雅。 (This lady is very elegant.)"
    },
    {
        word: "女生",
        pinyin: "nǚ shēng",
        translation: "girl, female student",
        example: "班上有十个女生。 (There are ten girls in the class.)"
    },
    {
        word: "女人",
        pinyin: "nǚ rén",
        translation: "woman",
        example: "她是个独立的女人。 (She is an independent woman.)"
    },
    {
        word: "糗",
        pinyin: "qiǔ",
        translation: "embarrassing",
        example: "这件事真糗。 (This thing is really embarrassing.)"
    },
    {
        word: "性价比",
        pinyin: "xìng jià bǐ",
        translation: "price-performance ratio, value for money",
        example: "这个产品性价比很高。 (This product has good value for money.)"
    }
];

const FlashcardGame = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  //const [isShuffled, setIsShuffled] = useState(false);
  const [cards, setCards] = useState(flashcardsData.map(card => ({ ...card, score: 0, attempts: 0 })));
  const [showScore, setShowScore] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [mastered, setMastered] = useState(0);
  const [theme, setTheme] = useState('dark');

  // Initialize theme from system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    //setIsShuffled(true);
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setShowScore(false);
    }
  };

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setShowScore(false);
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowScore(true);
    }
  };

  const rateCard = (rating: number) => {
    const updatedCards = [...cards];
    const card = updatedCards[currentCardIndex];
    card.attempts += 1;
    card.score = ((card.score * (card.attempts - 1)) + rating) / card.attempts;
    setCards(updatedCards);
    
    // Update total score and mastered count
    const newTotalScore = updatedCards.reduce((sum, card) => sum + card.score, 0) / updatedCards.length;
    setTotalScore(newTotalScore);
    
    const newMastered = updatedCards.filter(card => card.score >= 4).length;
    setMastered(newMastered);
    
    // Automatically move to next card after rating
    setTimeout(() => {
      if (currentCardIndex < cards.length - 1) {
        nextCard();
      }
    }, 500);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto p-4 min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-200">
      {/* Theme Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

      {/* Progress Section */}
      <div className="w-full text-center space-y-2">
        <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Card {currentCardIndex + 1} of {cards.length}
          </span>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mastered: {mastered}/{cards.length}
            </span>
          </div>
        </div>
        <Progress 
          value={(totalScore / 5) * 100} 
          className="w-full dark:bg-gray-700"
        />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Overall Progress: {Math.round((totalScore / 5) * 100)}%
        </div>
      </div>
      
      {/* Flashcard */}
      <Card 
        className="w-full aspect-[3/2] max-h-80 cursor-pointer perspective-1000 dark:bg-gray-800 dark:border-gray-700 sm:h-64"
        onClick={toggleFlip}
      >
        <CardContent className="h-full flex items-center justify-center p-4 sm:p-6 text-center">
          {!isFlipped ? (
            <div className="text-2xl sm:text-3xl font-bold dark:text-white">
              {cards[currentCardIndex].word}
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400">
                {cards[currentCardIndex].pinyin}
              </p>
              <p className="text-base sm:text-lg font-medium dark:text-gray-200">
                {cards[currentCardIndex].translation}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {cards[currentCardIndex].example}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Rating Buttons */}
      {showScore && (
        <div className="space-y-2 w-full">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            How well did you know this word?
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant={cards[currentCardIndex].score >= rating ? "default" : "outline"}
                onClick={() => rateCard(rating)}
                className="w-10 h-10 sm:w-12 sm:h-12 dark:border-gray-700"
              >
                {rating}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-md gap-2 sm:gap-4 mt-auto">
        <Button 
          variant="outline"
          onClick={previousCard}
          disabled={currentCardIndex === 0}
          className="dark:border-gray-700"
        >
          <ChevronLeft className="h-4 w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <Button
          variant="outline"
          onClick={shuffleCards}
          className="dark:border-gray-700"
        >
          <RotateCcw className="h-4 w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Shuffle</span>
        </Button>

        <Button
          variant="outline"
          onClick={nextCard}
          disabled={currentCardIndex === cards.length - 1}
          className="dark:border-gray-700"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4 ml-1 sm:ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default FlashcardGame;