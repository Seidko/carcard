export interface Coins {
  cp?: number
  sp?: number
  ep?: number
  gp?: number
  pp?: number
}

export interface Weapon {
  id: string
  name: string
  type: 'melee' | 'ranged'
  category: 'simple' | 'martial' // 武器类别
  damage: string 
  range?: [number, number]
  properties?: string[]
  mastery: string // 精通
}

export interface Armor {
  id: string
  name: string
  type: 'light' | 'medium' | 'heavy' | 'shield'
  ac: number
  stealthDisadvantage?: boolean
  strengthRequirement?: number
}

export interface Tools {
  id: string
  name: string
  description?: string
}

export const weapons: Weapon[] = [
  {
    id: 'club',
    name: '短棒',
    type: 'melee',
    category: 'simple',
    damage: '1d4',
    properties: ['轻型'],
    mastery: '缓速',
  },
  {
    id: 'dagger',
    name: '匕首',
    type: 'melee',
    category: 'simple',
    damage: '1d4',
    range: [20, 60], // 投掷射程
    properties: ['灵巧', '轻型', '投掷'],
    mastery: '迅击',
  },
  {
    id: 'greatclub',
    name: '巨棒',
    type: 'melee',
    category: 'simple',
    damage: '1d8',
    properties: ['双手'],
    mastery: '推离',
  },
  {
    id: 'handaxe',
    name: '手斧',
    type: 'melee',
    category: 'simple',
    damage: '1d6',
    range: [20, 60], // 投掷射程
    properties: ['轻型', '投掷'],
    mastery: '侵扰',
  },
  {
    id: 'javelin',
    name: '标枪',
    type: 'melee',
    category: 'simple',
    damage: '1d6',
    range: [30, 120], // 投掷射程
    properties: ['投掷'],
    mastery: '缓速',
  },
  {
    id: 'light hammer',
    name: '轻锤',
    type: 'melee',
    category: 'simple',
    damage: '1d4',
    range: [20, 60], // 投掷射程
    properties: ['轻型', '投掷'],
    mastery: '迅击',
  },
  {
    id: 'mace',
    name: '硬头锤',
    type: 'melee',
    category: 'simple',
    damage: '1d6',
    properties: [],
    mastery: '削弱',
  },
  {
    id: 'quarterstaff',
    name: '长棍',
    type: 'melee',
    category: 'simple',
    damage: '1d6',
    properties: ['失衡', '多用（1d8）'],
    mastery: '失衡',
  },
  {
    id: 'sickle',
    name: '镰刀',
    type: 'melee',
    category: 'simple',
    damage: '1d4',
    properties: ['轻型'],
    mastery: '迅击',
  },
  {
    id: 'spear',
    name: '矛',
    type: 'melee',
    category: 'simple',
    damage: '1d6',
    range: [20, 60], // 投掷射程
    properties: ['投掷', '多用（1d8）'],
    mastery: '削弱',
  },
  {
    id: 'dart',
    name: '飞镖',
    type: 'ranged',
    category: 'simple',
    damage: '1d4',
    range: [20, 60],
    properties: ['灵巧', '投掷'],
    mastery: '侵扰',
  },
  {
    id: 'light crossbow',
    name: '轻弩',
    type: 'ranged',
    category: 'simple',
    damage: '1d8',
    range: [80, 320],
    properties: ['弹药（弩矢）', '装填', '双手'],
    mastery: '缓速',
  },
  {
    id: 'shortbow',
    name: '短弓',
    type: 'ranged',
    category: 'simple',
    damage: '1d6',
    range: [80, 320],
    properties: ['弹药（箭矢）', '双手'],
    mastery: '侵扰',
  },
  {
    id: 'sling',
    name: '投石索',
    type: 'ranged',
    category: 'simple',
    damage: '1d4',
    range: [30, 120],
    properties: ['弹药（子弹）'],
    mastery: '缓速',
  },
  {
    id: 'battleaxe',
    name: '战斧',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: ['多用（1d10）'],
    mastery: '失衡',
  },
  {
    id: 'flail',
    name: '链枷',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: [],
    mastery: '削弱',
  },
  {
    id: 'glaive',
    name: '长柄刀',
    type: 'melee',
    category: 'martial',
    damage: '1d10',
    properties: ['重型', '触及', '双手'],
    mastery: '擦掠',
  },
  {
    id: 'greataxe',
    name: '巨斧',
    type: 'melee',
    category: 'martial',
    damage: '1d12',
    properties: ['重型', '双手'],
    mastery: '横扫',
  },
  {
    id: 'greatsword',
    name: '巨剑',
    type: 'melee',
    category: 'martial',
    damage: '2d6',
    properties: ['重型', '双手'],
    mastery: '擦掠',
  },
  {
    id: 'halberd',
    name: '戟',
    type: 'melee',
    category: 'martial',
    damage: '1d10',
    properties: ['重型', '触及', '双手'],
    mastery: '横扫',
  },
  {
    id: 'lance',
    name: '骑枪',
    type: 'melee',
    category: 'martial',
    damage: '1d10',
    properties: ['重型', '触及', '双手（骑乘时除外）'],
    mastery: '失衡',
  },
  {
    id: 'longsword',
    name: '长剑',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: ['多用（1d10）'],
    mastery: '削弱',
  },
  {
    id: 'maul',
    name: '巨锤',
    type: 'melee',
    category: 'martial',
    damage: '2d6',
    properties: ['重型', '双手'],
    mastery: '失衡',
  },
  {
    id: 'morningstar',
    name: '钉头锤',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: [],
    mastery: '削弱',
  },
  {
    id: 'pike',
    name: '长矛',
    type: 'melee',
    category: 'martial',
    damage: '1d10',
    properties: ['重型', '触及', '双手'],
    mastery: '推离',
  },
  {
    id: 'rapier',
    name: '刺剑',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: ['灵巧'],
    mastery: '侵扰',
  },
  {
    id: 'scimitar',
    name: '弯刀',
    type: 'melee',
    category: 'martial',
    damage: '1d6',
    properties: ['灵巧', '轻型'],
    mastery: '迅击',
  },
  {
    id: 'shortsword',
    name: '短剑',
    type: 'melee',
    category: 'martial',
    damage: '1d6',
    properties: ['灵巧', '轻型'],
    mastery: '侵扰',
  },
  {
    id: 'trident',
    name: '三叉戟',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    range: [20, 60], // 投掷射程
    properties: ['投掷', '多用（1d10）'],
    mastery: '失衡',
  },
  {
    id: 'warpick',
    name: '战镐',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: ['多用（1d10）'],
    mastery: '削弱',
  },
  {
    id: 'warhammer',
    name: '战锤',
    type: 'melee',
    category: 'martial',
    damage: '1d8',
    properties: ['多用（1d10）'],
    mastery: '推离',
  },
  {
    id: 'whip',
    name: '鞭',
    type: 'melee',
    category: 'martial',
    damage: '1d4',
    properties: ['灵巧', '触及'],
    mastery: '缓速',
  },
  {
    id: 'blowgun',
    name: '吹箭筒',
    type: 'ranged',
    category: 'martial',
    damage: '1',
    range: [25, 100],
    properties: ['弹药（吹矢）', '装填'],
    mastery: '侵扰',
  },
  {
    id: 'hand crossbow',
    name: '手弩',
    type: 'ranged',
    category: 'martial',
    damage: '1d6',
    range: [30, 120],
    properties: ['弹药（弩矢）', '轻型', '装填'],
    mastery: '侵扰',
  },
  {
    id: 'heavy crossbow',
    name: '重弩',
    type: 'ranged',
    category: 'martial',
    damage: '1d10',
    range: [100, 400],
    properties: ['弹药（弩矢）', '重型', '装填', '双手'],
    mastery: '推离',
  },
  {
    id: 'longbow',
    name: '长弓',
    type: 'ranged',
    category: 'martial',
    damage: '1d8',
    range: [150, 600],
    properties: ['弹药（箭矢）', '重型', '双手'],
    mastery: '缓速',
  },
  {
    id: 'musket',
    name: '火铳',
    type: 'ranged',
    category: 'martial',
    damage: '1d12',
    range: [40, 120],
    properties: ['弹药（子弹）', '装填', '双手'],
    mastery: '缓速',
  },
  {
    id: 'pistol',
    name: '手铳',
    type: 'ranged',
    category: 'martial',
    damage: '1d10',
    range: [30, 90],
    properties: ['弹药（子弹）', '装填'],
    mastery: '侵扰',
  },
];

export const armors: Armor[] = [
  {
    id: 'padded',
    name: '布甲',
    type: 'light',
    ac: 11,
    stealthDisadvantage: true,
  },
  {
    id: 'leather', 
    name: '皮甲',
    type: 'light',
    ac: 11,
    stealthDisadvantage: false,
  },
  {
    id: 'studded leather', 
    name: '镶钉皮甲',
    type: 'light',
    ac: 12,
    stealthDisadvantage: false,
  },
  {
    id: 'hide', 
    name: '兽皮甲',
    type: 'medium',
    ac: 12,
    stealthDisadvantage: false,
  },
  {
    id: 'chain shirt', 
    name: '链甲衫',
    type: 'medium',
    ac: 13,
    stealthDisadvantage: false,
  },
  {
    id: 'scale mail', 
    name: '鳞甲',
    type: 'medium',
    ac: 14,
    stealthDisadvantage: true,
  },
  {
    id: 'breastplate', 
    name: '胸甲',
    type: 'medium',
    ac: 14,
    stealthDisadvantage: false,
  },
  {
    id: 'half plate', 
    name: '半身板甲',
    type: 'medium',
    ac: 15,
    stealthDisadvantage: true,
  },
  {
    id: 'ring mail', 
    name: '环甲',
    type: 'heavy',
    ac: 14,
    stealthDisadvantage: true,
  },
  {
    id: 'chain mail', 
    name: '链甲',
    type: 'heavy',
    ac: 16,
    stealthDisadvantage: true,
    strengthRequirement: 13,
  },
  {
    id: 'splint mail', 
    name: '板条甲',
    type: 'heavy',
    ac: 17,
    stealthDisadvantage: true,
    strengthRequirement: 15,
  },
  {
    id: 'plate mail', 
    name: '板甲',
    type: 'heavy',
    ac: 18,
    stealthDisadvantage: true,
    strengthRequirement: 15,
  },
  {
    id: 'shield', 
    name: '盾牌',
    type: 'shield',
    ac: 2,
  },
]

export const artisanTools: Tools[] = [
  {
    id: 'alchemist', 
    name: '炼金工具',
    description: '**属性：** 智力\n**重量：** 8磅\n**操作：** 辨析一种物质（DC15），或生起一场火（DC15）\n**制造：** 强酸、炽火胶、材料包、燃油、纸张、香水',
  },
  {
    id: 'brewer', 
    name: '酿酒工具',
    description: '**属性：** 智力\n**重量：** 9磅\n**操作：** 检测饮品是否下毒（DC15），或辨识酒精（DC10）\n**制造：** 抗毒剂',
  },
  {
    id: 'calligrapher', 
    name: '书法工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 以华丽的字迹撰写文字防止造假（DC15）\n**制造：** 墨水、法术卷轴',
  },
  {
    id: 'carpenter', 
    name: '木匠工具',
    description: '**属性：** 力量\n**重量：** 6磅\n**操作：** 封死或撬开一扇门或一个容器（DC20）\n**制造：** 短棒、巨棒、长棍、木桶、箱子、梯子、长杆、便携式攻城锤、火把',
  },
  {
    id: 'cartographer', 
    name: '制图工具',
    description: '**属性：** 感知\n**重量：** 6磅\n**操作：** 为一小片区域绘制地图（DC15）\n**制造：** 地图',
  },
  {
    id: 'cobbler', 
    name: '鞋匠工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 改造足具来为穿戴者的下一次敏捷（特技）检定提供优势（DC10）\n**制造：** 攀爬工具',
  },
  {
    id: 'cook', 
    name: '厨师工具',
    description: '**属性：** 感知\n**重量：** 8磅\n**操作：** 改善食物风味（DC10），检查食物是否腐坏或有毒（DC15）\n**制造：** 口粮',
  },
  {
    id: 'glassblower', 
    name: '玻璃匠工具',
    description: '**属性：** 智力\n**重量：** 5磅\n**操作：** 判断一个玻璃物件在过去24小时内盛过什么内容物（DC15）\n**制造：** 玻璃瓶、放大镜、望远镜、小瓶',
  },
  {
    id: 'jeweler', 
    name: '珠宝匠工具',
    description: '**属性：** 智力\n**重量：** 2磅\n**操作：** 判断珠宝价值（DC15）\n**制造：** 奥术法器、圣徽',
  },
  {
    id: 'leatherworker', 
    name: '皮匠工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 对一个皮制品进行图案设计（DC10）\n**制造：** 投石索、鞭子、兽皮甲、皮甲、镶钉皮甲、背包、弩矢匣、地图或卷轴匣、羊皮纸、小包、箭袋、水袋',
  },
  {
    id: 'mason', 
    name: '石匠工具',
    description: '**属性：** 力量\n**重量：** 8磅\n**操作：** 在石头上凿出一个符号标志或一个洞（DC10）\n**制造：** 滑轮组',
  },
  {
    id: 'painter', 
    name: '画家工具',
    description: '**属性：** 感知\n**重量：** 5磅\n**操作：** 画出你所见过的某个事物的可辨图像（DC10）\n**制造：** 德鲁伊法器、圣徽',
  },
  {
    id: 'potter', 
    name: '陶匠工具',
    description: '**属性：** 智力\n**重量：** 3磅\n**操作：** 判断一个陶瓷物件在过去24小时内盛过什么内容物（DC15）\n**制造：** 壶、灯',
  },
  {
    id: 'smith', 
    name: '铁匠工具',
    description: '**属性：** 力量\n**重量：** 8磅\n**操作：** 撬开一扇门或容器（DC20）\n**制造：** 任意近战武器（除了短棒，巨棒，长棍和鞭子）、中甲（除了兽皮甲）、重甲、滚珠、吊桶、铁蒺藜、链条、撬棍、枪械子弹、爪钩、铁壶、铁钉、投石索子弹',
  },
  {
    id: 'tinker', 
    name: '修补工具',
    description: '**属性：** 敏捷\n**重量：** 10磅\n**操作：** 用废料组装出一个微型物品，这个物品会在一分钟后散架。（DC20）\n**制造：** 火铳、手铳、铃铛、牛眼提灯、扁瓶、附盖提灯、捕猎陷阱、锁、镣铐、镜子、铲子、信号笛、火绒盒',
  },
  {
    id: 'weaver', 
    name: '织布工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 修补衣服上的破口（DC10），或是缝制一个微型图案（DC10）\n**制造：** 布甲、篮子、铺盖、毯子、高档服装、捕网、长袍、绳索、麻袋、细绳、帐篷、旅行服装',
  },
  {
    id: 'woodcarver', 
    name: '木雕工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 在木头上雕刻图案（DC10）\n**制造：** 短棒、巨棒、长棍、远程武器（除了手铳、火铳和投石索）、奥术法器、箭矢、弩矢、德鲁伊法器、箭袋、水袋吹矢',
  },
]

export const gamingSets: Tools[] = ([
  {
    id: 'dice', 
    name: '骰子',
  },
  {
    id: 'dragon chess', 
    name: '龙棋',
  },
  {
    id: 'playing cards', 
    name: '纸牌',
  },
  {
    id: 'three dragon ante', 
    name: '三龙牌',
  },
] as Tools[]).map(i => {
  i.description = '**属性：** 感知\n**重量：** —\n**操作：** 判断某人是否作弊（DC10），或赢取游戏（DC20）'
  return i
})

export const musicalInstruments: Tools[] = ([
  {
    id: 'bagpipes', 
    name: '风笛',
  },
  {
    id: 'drum', 
    name: '鼓',
  },
  {
    id: 'dulcimer', 
    name: '扬琴',
  },
  {
    id: 'flute', 
    name: '长笛',
  },
  {
    id: 'horn', 
    name: '号角',
  },
  {
    id: 'lute', 
    name: '鲁特琴',
  },
  {
    id: 'lyre', 
    name: '里拉琴',
  },
  {
    id: 'pan flute', 
    name: '排箫',
  },
  {
    id: 'shawm', 
    name: '芦笛',
  },
  {
    id: 'viol', 
    name: '提琴',
  },
] as Tools[]).map(i => {
  i.description = '**属性：** 魅力\n**操作：** 演奏一个熟知的曲调（DC10），或是演奏一首即兴的乐曲（DC15）'
  return i
})

export const otherTools: Tools[] = [
  {
    id: 'disguise kit', 
    name: '易容工具',
    description: '**属性：** 魅力\n**重量：** 3磅\n**操作：** 化妆（DC10）\n**制造：** 戏服',
  },
  {
    id: 'forgery kit', 
    name: '文书伪造工具',
    description: '**属性：** 敏捷\n**重量：** 5磅\n**操作：** 模仿其他人的笔迹，至多10个单词（DC15），或伪造一份火漆（DC20）',
  },
  {
    id: 'herbalism kit', 
    name: '草药工具',
    description: '**属性：** 智力\n**重量：** 3磅\n**操作：** 辨认植物（DC10）\n**制造：** 抗毒剂、蜡烛、医疗包、治疗药水',
  },
  {
    id: 'navigator\'s tools', 
    name: '领航工具',
    description: '**属性：** 感知\n**重量：** 2磅\n**操作：** 计划路线（DC10），或通过观星判断位置（DC15）',
  },
  {
    id: 'poisoner\'s kit', 
    name: '毒药工具',
    description: '**属性：** 智力\n**重量：** 2磅\n**操作：** 侦测有毒物件（DC10）\n**制造：** 基础毒药',
  },
  {
    id: 'thieves\' tools', 
    name: '盗贼工具',
    description: '**属性：** 敏捷\n**重量：** 1磅\n**操作：** 撬锁（DC15），或解除陷阱（DC15）',
  },
]

