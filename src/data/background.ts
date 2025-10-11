import type { Feat, NTuple6 } from '@/types'
import type { Equipments } from './equipments'
import type { Skill } from './skills'

export interface Background {
  id: string
  name: string
  description: string
  from: string | string[]
  ability: NTuple6,
  equipments: Equipments[]
  toolsProficiency: string[]
  skillsProficiency: Skill[]
  feats: Feat
}

/*
### 侍僧 Acolyte

**属性值：**智力、感知、魅力  
**专长：**魔法学徒（牧师）（见第五章）  
**技能熟练：**洞悉与宗教  
**工具熟练：**书法工具  
**装备：**选择A或B：(A)书法工具、书籍（祈祷文）、圣徽、羊皮纸（10张）、长袍、8GP；或(B)50GP。

你在一座寺庙中全心全意的侍奉，或是挂单在城镇中，或是幽居在圣所。你在那里执掌祭仪崇敬一位神祇或是众神。多亏了你的祭司教导和你的虔诚，你也掌握了如何引导一点点神力来为你的崇敬祈祷和在那里祷告的人们提供司教服务。

### 农民 Farmer

**属性值：**力量、体质、感知  
**专长：**健壮（见第五章）  
**技能熟练：**驯兽和自然  
**工具熟练：**木匠工具  
**装备：**选择A或B：(A)镰刀、木匠工具、医疗包、铁壶、铲子、旅行者的衣服、30GP；或(B)50GP

你从小就生在农家地，长在农家地。多年照料动物和耕种土地回报你以耐心和一个倍儿棒的健康身体。你对大自然的甘霖充满感激之情，也对自然之怒抱以敬畏之心。

### 向导 Guide

**属性值：**敏捷、体质、感知  
**专长：**魔法学徒（德鲁伊）（见第五章）  
**技能熟练：**隐匿和求生  
**工具熟练：**制图工具  
**装备：**选择A或B：(A)短弓、20支箭、制图工具、铺盖、箭袋、帐篷、旅行者服装、3GP；或(B)50GP

你在野外长大，远离定居区。你的家就在你决定打开铺盖的任何地方。荒野中自有奇妙之处——奇特的怪物、原始的森林和溪流；如今杂草丛生的、曾被巨人踏过的大殿废墟。在探索它们的过程中你学会了保护自己。而时不时的，你会遇到亲爱的自然祭司，他们会指导你掌握怎样运用荒野的魔法。

### 商人 Merchant

**属性值：**体质、智力、魅力  
**专长：**幸运（见第五章）  
**技能熟练：**驯兽和游说  
**工具熟练：**领航工具  
**装备：**选择A或B：(A)领航工具、2个小包、旅行者服装、22GP；或(B)50GP

你曾作为一名学徒学习着商业的基础知识，你的师傅是一名商贩、商队的领队或是某位商铺的店主。你旅行八方，靠着买入和卖出工匠们所需的原材料和这些工匠的制品赚钱谋生。你可能曾在多地之间运输过不少货物（通过船、货车、商队之类的），又或是从旅行商人那里订货，然后在自己店里销售。

### 士兵 Soldier

**属性值：**力量、敏捷、体质  
**专长：**凶蛮打手（见第五章）  
**技能熟练：**运动和威吓  
**工具熟练：**选择一种赌具（见第六章）  
**装备：**选择A或B：(A)矛、短弓、20支箭、赌具（同上所选）、医疗包、箭袋、旅行者服装、14GP；或(B)50GP

你从成年开始便接受战阵训练，鲜少有拿起武器之前的生活回忆，战斗已融入你的血液。有时候你会发现自己正在反复操练着最初学会的基本战斗训练。而最终，你会将这些训练运用到战场上，在战争中行使武力，保护你的王国。

### 工匠 Artisan

**属性值：**力量、敏捷、智力  
**专长：**巧匠（见第五章）  
**技能熟练：**调查与游说  
**工具熟练：**选择一种工匠工具（参见第六章）  
**装备：**选择A或B：(A)工匠工具（同上所选）、2小包、旅行者服装、32GP；或(B)50GP。

你在力气足以提起水桶时，就开始于工匠工坊里以拖地和擦洗度日，每天挣那么几个铜板。当你长到成为学徒的年龄时，你学会了自己制作基本的手工艺品，还有面对刁钻客户时该说什么好话。你的买卖也让你对消息琐事有敏锐的洞察力。

### 抄写员 Scribe

**属性值：**敏捷、智力、感知  
**专长：**熟习（见第五章）  
**技能熟练：**调查和察觉  
**工具熟练：**书法工具  
**装备：**选择A或B：(A)书法工具、高档服装、油灯、灯油（3瓶）、羊皮纸（12张）、23GP；或(B)50GP

你成长的时期都在缮写室度过，那是一座致力于保存知识的修道院，或是某个政府机关。你在那里学会了如何书写思维敏锐有逻辑的文字和怎样制作得体的书面文本，有时你会抄录政府文件或是誊抄文献巨著。你可能有一些诗歌写作的技艺、叙事的技巧或是学术上的研究。最重要的是，你对琐碎处的关注很细致。这能帮助你避免在誊录和撰写文稿时出现错误。

### 智者 Sage

**属性值：**体质、智力、感知  
**专长：**魔法学徒（法师）（见第五章）  
**技能熟练：**奥秘和历史  
**工具熟练：**书法工具  
**装备：**选择A或B：(A)长棍、书法工具、书籍（历史）、羊皮纸（8张）、长袍、8GP；或(B)50GP

你长大的岁月便在宅邸和修行院之间的奔波中过去，做着各式各样的零活和服务，以此访问他们的图书馆藏。你花了那么多漫长的夜晚学习书籍和卷册，阅览多元宇宙的见闻，甚至涉猎魔法的本质——而你的心灵正渴望着了解更多。

### 水手 Sailor

**属性值：**力量、敏捷、感知  
**专长：**酒馆斗殴者（见第五章）  
**技能熟练：**特技和察觉  
**工具熟练：**领航工具  
**装备：**选择A或B：(A)匕首、领航工具、绳索、旅行者服装、20GP；或(B)50GP

你作为一名海员生活，背上吹的是海风，脚下站的是摇晃的甲板。你在停泊港总是坐在酒吧的高脚凳上，回忆你曾直面猛烈的风暴，与那些在波涛下生活的人们高谈阔论着过去。

### 流浪者Wayfarer

**属性值：**敏捷、感知、魅力  
**专长：**幸运（见第五章）  
**技能熟练：**洞悉和隐匿  
**工具熟练：**盗贼工具  
**装备：**选择A或B：(A)2匕首、盗贼工具、赌具（任意）、铺盖、2小包、旅行者服装、16GP；或(B)50GP

你在街头长大，身边都是同样命途多舛的孤儿，有些是朋友有些是对头。你露宿街头，只靠着打零工来换取食物。有些时候你会感到饥饿难耐，但却只能以盗窃维生。尽管如此，你从未抛你的自尊，也从未放弃希望。命运还没有就此关上大门。

### 罪犯 Criminal

**属性值：**敏捷、体质、智力  
**专长：**警戒（见第五章）  
**技能熟练：**巧手和隐匿  
**工具熟练：**盗贼工具  
**装备：**选择A或B：(A)2匕首、盗贼工具、撬棍、2小包、旅行者服装、16GP；或(B)50GP

你潜藏在阴暗的小巷里，靠着偷鸡摸狗苟且偷生。也许你曾与一帮称兄道弟的法外狂徒患难与共。又或者，你也许是一个孤勇者，自力更生的同时与当地的盗贼公会乃至更可怕的违法者们明争暗斗。

### 艺人 Entertainer

**属性值：**力量、敏捷、魅力  
**专长：**音乐家（见第五章）  
**技能熟练：**特技和表演  
**工具熟练：**选择一种乐器（见第六章）  
**装备：**选择A或B：(A)乐器（同上所选）、2件表演服装、镜子、香水、旅行者服装、11GP；或(B)50GP

你年轻时大部分时间都在参加巡回演出和嘉年华会，为音乐家和杂技演员们做零工以换取学习的机会。你可能已经学会了如何走钢丝，如何弹奏风格独特的鲁特琴，或是用怎样无可挑剔的发音方式吟诵诗歌。而现如今，你在喝彩声中茁壮成长，渴望登上舞台。

### 警卫 Guard

**属性值：**力量、智力、感知  
**专长：**警戒（见第五章）  
**技能熟练：**运动和察觉  
**工具熟练：**选择一种赌具（见第六章）  
**装备：**选择A或B：(A)矛，轻弩，20弩矢，赌具（同上所选），附盖提灯，镣铐，箭袋（译注：原文如此），旅行者服装，12GP；或(B)50GP。

你脚上的疼痛让你无法忘怀在塔楼驻岗上站班的无数时光。你曾被训练一只眼睛紧盯着墙外，小心提防那附近森林而来的掠夺者，而另一只眼睛则要盯着墙内，细细查探小偷小摸和惹是生非之人。

### 贵族 Noble

**属性值：**力量、智力、魅力  
**专长：**熟习（见第五章）  
**技能熟练：**历史和游说  
**工具熟练：**选择一种赌具（见第六章）  
**装备：**选择A或B：(A)赌具（同上所选）、高档服装、香水、29GP，或(B)50GP

权力、财富还有荣耀伴随你在城堡中长大，你那贵不可言的小家族确保你受到了一流的教育，其中有些教导令你感激，而有些则只让你觉得愤慨。在城堡中的时光，尤其是在长久以来耳濡目染于宫廷中的家族往来，也培养了你足以胜任领袖的许多才能。

### 隐士 Hermit

**属性值：**体质、感知、魅力  
**专长：**医疗师（见第五章）  
**技能熟练：**医药与宗教  
**工具熟练：**草药工具  
**装备：**选择A或B：(A)长棍、草药工具、铺盖、书籍（哲学）、油灯、灯油（3扁瓶）、旅行者服装、16GP；或(B)50GP

你早年住在远离聚集地的、与世隔绝的小屋或是隐修院中。在那些日子里，你唯一的伙伴是森林中的生灵，以及那些偶尔带来给养和外界消息的访客。孤独让你花了很多时间琢磨天道的未解之谜。

### 骗子 Charlatan

**属性值：**敏捷、体质、魅力  
**专长：**熟习（见第五章）  
**技能熟练：**欺瞒和巧手  
**工具熟练：**文书伪造工具  
**装备：**选择A或B：(A)文书伪造工具，表演服装，高档服装，15GP；或(B)50GP

在你长到能买酒的年纪后，你立刻就在家乡方圆十里内的所有酒吧拥有了自己专属的钟意座位。当你在各个酒吧间穿梭时，你学会了如何用善意的谎言去安抚那些需要安慰的可怜人——也许是一剂包治百病的良方或是一份伪造的血统证明。
*/
export const backgroundsData: Background[] = [
  {
    id: 'acolyte',
    name: '侍僧 Acolyte',
    from: 'PHB2024',
    description: `你在一座寺庙中全心全意的侍奉，或是挂单在城镇中，或是幽居在圣所。你在那里执掌祭仪崇敬一位神祇或是众神。多亏了你的祭司教导和你的虔诚，你也掌握了如何引导一点点神力来为你的崇敬祈祷和在那里祷告的人们提供司教服务。`,
    // str, dex, con, int, wis, cha
    ability: [0, 0, 0, 1, 1, 1],
    toolsProficiency: ['calligrapher'],
    skillsProficiency: ['insight', 'religion'],
    feats: { id: 'magic adept priest', type: 'origin'},
    equipments: [
      {
        tools: ['calligrapher'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 8, pp: 0 },
        // other 中的使用中文说明
        other: ['祈祷书', '神圣符号', '小袋（10张羊皮纸）', '长袍']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'farmer',
    name: '农民 Farmer',
    from: 'PHB2024',
    description: `你从小就生在农家地，长在农家地。多年照料动物和耕种土地回报你以耐心和一个倍儿棒的健康身体。你对大自然的甘霖充满感激之情，也对自然之怒抱以敬畏之心。`,
    ability: [1, 0, 1, 0, 1, 0],
    toolsProficiency: ['carpenter'],
    skillsProficiency: ['animal handling', 'nature'],
    feats: { id: 'tough', type: 'origin'},
    equipments: [
      {
        tools: ['carpenter'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 30, pp: 0 },
        other: ['镰刀', '医疗包', '铁壶', '铲子', '旅行者的衣服']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'guide',
    name: '向导 Guide',
    from: 'PHB2024',
    description: `你在野外长大，远离定居区。你的家就在你决定打开铺盖的任何地方。荒野中自有奇妙之处——奇特的怪物、原始的森林和溪流；如今杂草丛生的、曾被巨人踏过的大殿废墟。在探索它们的过程中你学会了保护自己。而时不时的，你会遇到亲爱的自然祭司，他们会指导你掌握怎样运用荒野的魔法。`,
    ability: [0, 1, 1, 0, 1, 0],
    toolsProficiency: ['cartographer'],
    skillsProficiency: ['stealth', 'survival'],
    feats: { id: 'magic adept druid', type: 'origin'},
    equipments: [
      {
        tools: ['cartographer'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 3, pp: 0 },
        other: ['短弓', '20支箭', '铺盖', '箭袋', '帐篷', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'merchant',
    name: '商人 Merchant',
    from: 'PHB2024',
    description: `你曾作为一名学徒学习着商业的基础知识，你的师傅是一名商贩、商队的领队或是某位商铺的店主。你旅行八方，靠着买入和卖出工匠们所需的原材料和这些工匠的制品赚钱谋生。你可能曾在多地之间运输过不少货物（通过船、货车、商队之类的），又或是从旅行商人那里订货，然后在自己店里销售。`,
    ability: [0, 0, 1, 1, 0, 1],
    toolsProficiency: ['navigator'],
    skillsProficiency: ['animal handling', 'persuasion'],
    feats: { id: 'lucky', type: 'origin'},
    equipments: [
      {
        tools: ['navigator'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 22, pp: 0 },
        other: ['2个小包', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'soldier',
    name: '士兵 Soldier',
    from: 'PHB2024',
    description: `你从成年开始便接受战阵训练，鲜少有拿起武器之前的生活回忆，战斗已融入你的血液。有时候你会发现自己正在反复操练着最初学会的基本战斗训练。而最终，你会将这些训练运用到战场上，在战争中行使武力，保护你的王国。`,
    ability: [1, 1, 1, 0, 0, 0],
    toolsProficiency: ['gaming set'],
    skillsProficiency: ['athletics', 'intimidation'],
    feats: { id: 'savage attacker', type: 'origin'},
    equipments: [
      {
        tools: ['gaming set'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 14, pp: 0 },
        other: ['矛', '短弓', '20支箭', '医疗包', '箭袋', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'artisan',
    name: '工匠 Artisan',
    from: 'PHB2024',
    description: `你在力气足以提起水桶时，就开始于工匠工坊里以拖地和擦洗度日，每天挣那么几个铜板。当你长到成为学徒的年龄时，你学会了自己制作基本的手工艺品，还有面对刁钻客户时该说什么好话。你的买卖也让你对消息琐事有敏锐的洞察力。`,
    ability: [1, 1, 0, 1, 0, 0],
    toolsProficiency: ['artisan tools'],
    skillsProficiency: ['investigation', 'persuasion'],
    feats: { id: 'crafter', type: 'origin'},
    equipments: [
      {
        tools: ['artisan tools'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 32, pp: 0 },
        other: ['2小包', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'scribe',
    name: '抄写员 Scribe',
    from: 'PHB2024',
    description: `你成长的时期都在缮写室度过，那是一座致力于保存知识的修道院，或是某个政府机关。你在那里学会了如何书写思维敏锐有逻辑的文字和怎样制作得体的书面文本，有时你会抄录政府文件或是誊抄文献巨著。你可能有一些诗歌写作的技艺、叙事的技巧或是学术上的研究。最重要的是，你对琐碎处的关注很细致。这能帮助你避免在誊录和撰写文稿时出现错误。`,
    ability: [0, 1, 0, 1, 1, 0],
    toolsProficiency: ['calligrapher'],
    skillsProficiency: ['investigation', 'perception'],
    feats: { id: 'skilled', type: 'origin'},
    equipments: [
      {
        tools: ['calligrapher'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 23, pp: 0 },
        other: ['高档服装', '油灯', '灯油（3瓶）', '羊皮纸（12张）']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'sage',
    name: '智者 Sage',
    from: 'PHB2024',
    description: `你长大的岁月便在宅邸和修行院之间的奔波中过去，做着各式各样的零活和服务，以此访问他们的图书馆藏。你花了那么多漫长的夜晚学习书籍和卷册，阅览多元宇宙的见闻，甚至涉猎魔法的本质——而你的心灵正渴望着了解更多。`,
    ability: [0, 0, 1, 1, 1, 0],
    toolsProficiency: ['calligrapher'],
    skillsProficiency: ['arcana', 'history'],
    feats: { id: 'magic adept wizard', type: 'origin'},
    equipments: [
      {
        tools: ['calligrapher'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 8, pp: 0 },
        other: ['长棍', '书籍（历史）', '羊皮纸（8张）', '长袍']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'sailor',
    name: '水手 Sailor',
    from: 'PHB2024',
    description: `你作为一名海员生活，背上吹的是海风，脚下站的是摇晃的甲板。你在停泊港总是坐在酒吧的高脚凳上，回忆你曾直面猛烈的风暴，与那些在波涛下生活的人们高谈阔论着过去。`,
    ability: [1, 1, 0, 0, 1, 0],
    toolsProficiency: ['navigator'],
    skillsProficiency: ['acrobatics', 'perception'],
    feats: { id: 'tavern brawler', type: 'origin'},
    equipments: [
      {
        tools: ['navigator'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 20, pp: 0 },
        other: ['匕首', '绳索', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'wayfarer',
    name: '流浪者 Wayfarer',
    from: 'PHB2024',
    description: `你在街头长大，身边都是同样命途多舛的孤儿，有些是朋友有些是对头。你露宿街头，只靠着打零工来换取食物。有些时候你会感到饥饿难耐，但却只能以盗窃维生。尽管如此，你从未抛你的自尊，也从未放弃希望。命运还没有就此关上大门。`,
    ability: [0, 1, 0, 0, 1, 1],
    toolsProficiency: ['thieves tools'],
    skillsProficiency: ['insight', 'stealth'],
    feats: { id: 'lucky', type: 'origin'},
    equipments: [
      {
        tools: ['thieves tools'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 16, pp: 0 },
        other: ['2匕首', '赌具（任意）', '铺盖', '2小包', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'criminal',
    name: '罪犯 Criminal',
    from: 'PHB2024',
    description: `你潜藏在阴暗的小巷里，靠着偷鸡摸狗苟且偷生。也许你曾与一帮称兄道弟的法外狂徒患难与共。又或者，你也许是一个孤勇者，自力更生的同时与当地的盗贼公会乃至更可怕的违法者们明争暗斗。`,
    ability: [0, 1, 1, 1, 0, 0],
    toolsProficiency: ['thieves tools'],
    skillsProficiency: ['sleight of hand', 'stealth'],
    feats: { id: 'alert', type: 'origin'},
    equipments: [
      {
        tools: ['thieves tools'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 16, pp: 0 },
        other: ['2匕首', '撬棍', '2小包', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'entertainer',
    name: '艺人 Entertainer',
    from: 'PHB2024',
    description: `你年轻时大部分时间都在参加巡回演出和嘉年华会，为音乐家和杂技演员们做零工以换取学习的机会。你可能已经学会了如何走钢丝，如何弹奏风格独特的鲁特琴，或是用怎样无可挑剔的发音方式吟诵诗歌。而现如今，你在喝彩声中茁壮成长，渴望登上舞台。`,
    ability: [1, 1, 0, 0, 0, 1],
    toolsProficiency: ['musical instrument'],
    skillsProficiency: ['acrobatics', 'performance'],
    feats: { id: 'musician', type: 'origin'},
    equipments: [
      {
        tools: ['musical instrument'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 11, pp: 0 },
        other: ['2件表演服装', '镜子', '香水', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'guard',
    name: '警卫 Guard',
    from: 'PHB2024',
    description: `你脚上的疼痛让你无法忘怀在塔楼驻岗上站班的无数时光。你曾被训练一只眼睛紧盯着墙外，小心提防那附近森林而来的掠夺者，而另一只眼睛则要盯着墙内，细细查探小偷小摸和惹是生非之人。`,
    ability: [1, 0, 0, 1, 1, 0],
    toolsProficiency: ['gaming set'],
    skillsProficiency: ['athletics', 'perception'],
    feats: { id: 'alert', type: 'origin'},
    equipments: [
      {
        tools: ['gaming set'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 12, pp: 0 },
        other: ['矛', '轻弩', '20弩矢', '附盖提灯', '镣铐', '箭袋', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'noble',
    name: '贵族 Noble',
    from: 'PHB2024',
    description: `权力、财富还有荣耀伴随你在城堡中长大，你那贵不可言的小家族确保你受到了一流的教育，其中有些教导令你感激，而有些则只让你觉得愤慨。在城堡中的时光，尤其是在长久以来耳濡目染于宫廷中的家族往来，也培养了你足以胜任领袖的许多才能。`,
    ability: [1, 0, 0, 1, 0, 1],
    toolsProficiency: ['gaming set'],
    skillsProficiency: ['history', 'persuasion'],
    feats: { id: 'skilled', type: 'origin'},
    equipments: [
      {
        tools: ['gaming set'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 29, pp: 0 },
        other: ['高档服装', '香水']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'hermit',
    name: '隐士 Hermit',
    from: 'PHB2024',
    description: `你早年住在远离聚集地的、与世隔绝的小屋或是隐修院中。在那些日子里，你唯一的伙伴是森林中的生灵，以及那些偶尔带来给养和外界消息的访客。孤独让你花了很多时间琢磨天道的未解之谜。`,
    ability: [0, 0, 1, 0, 1, 1],
    toolsProficiency: ['herbalism kit'],
    skillsProficiency: ['medicine', 'religion'],
    feats: { id: 'healer', type: 'origin'},
    equipments: [
      {
        tools: ['herbalism kit'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 16, pp: 0 },
        other: ['长棍', '铺盖', '书籍（哲学）', '油灯', '灯油（3扁瓶）', '旅行者服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  },
  {
    id: 'charlatan',
    name: '骗子 Charlatan',
    from: 'PHB2024',
    description: `在你长到能买酒的年纪后，你立刻就在家乡方圆十里内的所有酒吧拥有了自己专属的钟意座位。当你在各个酒吧间穿梭时，你学会了如何用善意的谎言去安抚那些需要安慰的可怜人——也许是一剂包治百病的良方或是一份伪造的血统证明。`,
    ability: [0, 1, 1, 0, 0, 1],
    toolsProficiency: ['forgery kit'],
    skillsProficiency: ['deception', 'sleight of hand'],
    feats: { id: 'skilled', type: 'origin'},
    equipments: [
      {
        tools: ['forgery kit'],
        coins: { cp: 0, sp: 0, ep: 0, gp: 15, pp: 0 },
        other: ['表演服装', '高档服装']
      },
      {
        coins: { cp: 0, sp: 0, ep: 0, gp: 50, pp: 0 },
      },
    ]
  }
]
