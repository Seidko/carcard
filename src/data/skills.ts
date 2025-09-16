export type Skill = 'acrobatics' | 'animal handling' | 'arcana' | 'athletics' | 'deception' | 'history' | 'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' | 'performance' | 'persuasion' | 'religion' | 'sleight of hand' | 'stealth' | 'survival'

export interface SkillDetail {
  id: string
  name: string
  attribute: 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'
  description: string
}

export const skills: SkillDetail[] = [
  {
    id: 'acrobatics',
    name: '特技',
    attribute: 'dexterity',
    description: '在复杂的环境里屹立不倒或是表演杂技特技。'
  },
  {
    id: 'animal handling',
    name: '驯兽',
    attribute: 'wisdom',
    description: '让动物平静下来、训练它们，又或者让它们做某种特定的事。'
  },
  {
    id: 'arcana',
    name: '奥秘',
    attribute: 'intelligence',
    description: '回忆有关于法术、魔法物品和存在位面的知识。'
  },
  {
    id: 'athletics',
    name: '运动',
    attribute: 'strength',
    description: '比平时跳的更远，在汹涌的水面上漂浮或是打碎什么东西。'
  },
  {
    id: 'deception',
    name: '欺瞒',
    attribute: 'charisma',
    description: '撒一个让人信服的谎话或者做出让人深信不疑的伪装。'
  },
  {
    id: 'history',
    name: '历史',
    attribute: 'intelligence',
    description: '回忆有关历史事件、人民、国家和文化传统的知识。'
  },
  {
    id: 'insight',
    name: '洞悉',
    attribute: 'wisdom',
    description: '辨别某人的情绪或意图。'
  },
  {
    id: 'intimidation',
    name: '威吓',
    attribute: 'charisma',
    description: '恫吓他人或胁迫某人去做你想要他做的事。'
  },
  {
    id: 'investigation',
    name: '调查',
    attribute: 'intelligence',
    description: '在书本中寻辨晦涩难懂的信息或推断某些事物是如何运作的。'
  },
  {
    id: 'medicine',
    name: '医药',
    attribute: 'wisdom',
    description: '诊断某种疾病或是确定近期死亡的死者的死因。'
  },
  {
    id: 'nature',
    name: '自然',
    attribute: 'intelligence',
    description: '回忆有关地形、植物、动物和天气的知识。'
  },
  {
    id: 'perception',
    name: '察觉',
    attribute: 'wisdom',
    description: '结合各种感官，注意一些容易忽略的细节。'
  },
  {
    id: 'performance',
    name: '表演',
    attribute: 'charisma',
    description: '演戏、讲述故事、演奏乐曲或翩翩起舞。'
  },
  {
    id: 'persuasion',
    name: '游说',
    attribute: 'charisma',
    description: '真诚且优雅地在某件事上说服他人。'
  },
  {
    id: 'religion',
    name: '宗教',
    attribute: 'intelligence',
    description: '回忆有关神的传说、宗教仪式的学问以及圣徽的知识。'
  },
  {
    id: 'sleight of hand',
    name: '巧手',
    attribute: 'dexterity',
    description: '扒窃口袋，藏起只手可握的小物件或是耍一些手上把戏。'
  },
  {
    id: 'stealth',
    name: '隐匿',
    attribute: 'dexterity',
    description: '通过悄悄地移动和藏在事物后面来躲避别人的注意。'
  },
  {
    id: 'survival',
    name: '求生',
    attribute: 'wisdom',
    description: '跟踪追查、寻找食物、寻觅踪迹或是避免遭遇自然灾害。'
  }
]

export type Ability = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'

