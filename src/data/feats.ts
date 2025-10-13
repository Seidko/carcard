import type { FeatType, NTuple6 } from '@/types'

export interface Feat {
  id: string
  name: string
  type: FeatType  
  description: string
  from: string | string[]
  ability?: NTuple6
  repeatable?: boolean
}

/*
**属性值提升 Ability Score Improvement  
**_通用专长（先决：等级4+）  
_你选择的一项属性提升2，或者你选择的两项属性各提升1。你无法依靠本专长令某个属性值超出20。  
**复选Repeatable。**你可多次选择本专长。

**演员 Actor  
**_通用专长（先决：等级4+，魅力13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的魅力提升1，至多提升至20。
    
*   **伪装Impersonation。**伪装成某个虚构或真实的个体的情况下，你为使别人相信你就是那个个体所做的魅力（欺瞒或表演）检定具有优势。
    
*   **拟声Mimicry。**你可以模仿出另一个生物的语音，甚至包括它的说话方式。听见你的拟声的生物必须通过一次感知（洞悉）检定才能发觉这种拟声是由他人伪造的（DC等于8+你的魅力调整值+你的熟练加值）。
    

**运动精英 Athlete  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **攀爬速度Climb Speed。**你获得等同于你速度的攀爬速度。
    
*   **鲤鱼打挺Hop Up。**处于倒地状态的情况下，你可以仅消耗5尺移动力来站起来。
    
*   **跳跃Jumping。**你只需移动5尺距离便能进行一次助跑跳远或一次助跑跳高。
    

**冲锋手 Charger  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **进阶疾走Improved Dash。**当你执行疾走动作时，对该动作而言，你的速度提升了10尺。
    
*   **冲锋攻击Charge Attack。**使用攻击动作中的近战攻击检定命中目标时，若你在此次攻击前立即向着目标直线移动了10+尺，你可以为这次攻击增添以下其中一个效应：此次攻击的伤害掷骰获得1d8的加值；将目标推离10尺，前提是目标体型不比你大超过一级。你只能在每个你自己的回合使用一次此增益。
    

**大厨 Chef  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的体质或感知提升1，至多提升至20。
    
*   **厨师工具Cook's Utensils。**如果你没有厨师工具的熟练，你获得之。
    
*   **大补食膳Replenishing Meal。**作为短休的一部分，只要你手上有食材和厨师工具，你就可以烹饪一顿特别的美食。你可以为数个生物准备足够的此类食物，其数量等于4+你的熟练加值。在这一次短休结束时，任何吃了这些食物且花费了生命骰来恢复生命值的生物都能额外恢复1d8的生命值。
    
*   **应急零嘴Bolstering Treats。**如果你手上有食材和厨师工具，你可以花费一小时的时间，或在完成一次长休时，烹饪出一定份数的零嘴，其数量等于你熟练加值。这些特别的小零嘴在做好后能保存八小时。一个生物可以使用一个附赠动作来吃掉其中一份零嘴，并获得等同于你熟练加值的临时生命值。
    

**强弩专家 Crossbow Expert  
**_通用专长（先决：等级4+，敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。
    
*   **无视装填Ignore Loading。**你无视手弩、重弩和轻弩的装填词条（在这个专长里统称弩）。如果你正手持着一把弩，你即使没有空手也能够为它装填一发弹药。
    
*   **抵近射击Firing in Melee。**你用弩进行的攻击检定不会因你在敌人的5尺内而具有劣势。
    
*   **双持射击Dual Wielding。**当你发动由轻型词条所提供的额外的攻击时，如果这次追加攻击是由一把具有轻型词条的弩所发动的，且你原本无法在伤害中加入属性调整值，你就可以改为可以将你的属性调整值加入本次伤害中。
    

**粉碎者 Crusher  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或体质提升1，至多提升至20。
    
*   **推动Push。**每回合一次，当你以造成钝击伤害的一次攻击命中了一个生物时，只要这个生物的体型不比你大超过一级，你就能将它移动5尺至一处未占据空间中。
    
*   **强化重击Enhanced Critical。**当你掷出一次重击命中一名生物并对其造成钝击伤害后，直到你的下个回合开始前，任何以该生物为目标的攻击检定都会具有优势。
    

**防御式决斗 Defensive Duelist  
**_通用专长（先决：等级4+，敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。
    
*   **招架Parry。**如果其他生物的近战攻击命中你时你正握着一把灵巧武器，则你可以执行反应来将你的熟练加值加入到你的护甲等级中，此举可能导致本次攻击变为未命中。那之后，直到你的下一回合开始前，你的AC在面对近战攻击时都将具有相同的加值。
    

**双持客 Dual Wielder  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **强化双持Enhanced Dual Wielding。**当你在自己的回合中执行了攻击动作，并使用具有轻型词条的武器发动了一次攻击后，你可以在同一回合中，以一个附赠动作发动一次额外的攻击\*。这次额外的攻击必须由另一把不具有双手词条的近战武器发动。额外的攻击的伤害无法加入你的属性调整值（除非该调整值为负数）。  
    \*译注：因为WSZ的文字游戏，此效果难以被准确翻译，简而言之：此效果的攻击属于“因使用具有轻型词条的武器而发动的额外的攻击”；但不属于“由轻型词条提供的额外的攻击”
    
*   **快速拔刀Quick Draw。**拔出或入鞘武器时，你可以同时拔出或入鞘两把不具有双手词条的武器，而非通常情况下的一把。
    

**耐性 Durable**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的体质提升1，至多提升至20。
    
*   **悍不畏死Defy Death。**你进行的死亡豁免具有优势。
    
*   **高速恢复Speedy Recovery。**以一个附赠动作，你可以消耗并投掷一枚生命骰，来恢复与投掷结果相等的生命值。
    

**元素掌控 Elemental Adept  
**_通用专长（先决：等级4+，施法或契约魔法特性）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1点，至多提升至20。
    
*   **能量掌控Energy Mastery。**选择以下伤害类型之一：强酸、寒冷、火焰、闪电、雷鸣。你施展的法术无视所选伤害类型的抗性。此外，当你为你施展的造成该类型伤害的法术投掷伤害时，你可以将伤害骰中骰出的1都视为2。
    

**复选Repeatable。**你可多次选取本专长，但每次选取时都必须为能量掌控增益选择一个不同的伤害类型。

**妖精触碰 Fey-Touched  
**_通用专长（先决：等级4+）  
_暴露在**妖精荒野Feywild**的魔法之下给予你以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **妖精魔法Fey Magic。**选择一道预言或惑控学派的一环法术。你始终准备着你选择的这道法术与_迷踪步Misty Step_。你可以无需法术位地施展每道法术各一次，当你完成长休时，你重获以此法施展这些法术的能力。你也能够以你拥有的合适环阶的法术位施展这些法术。  
    你这些法术的施法属性是你以此专长提升的属性。
    

**擒抱者 Grappler  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **连擒带打Punch and Grab。**你的回合中，当你用攻击动作中的一次徒手打击命中了一个生物，你可以同时进行擒抱和造成伤害两个选项。你每回合只能使用这个增益一次。
    
*   **优势攻击Attack Advantage。**你攻击受擒于你的生物时进行的攻击检定具有优势。
    
*   **高速拖行Fast Wrestler。**你无需为移动受擒于你的生物而花费额外的移动力，前提是这名生物的体型与你相同或更小。
    

**巨武器大师 Great Weapon Master  
**_通用专长（先决：等级4+，力量13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量提升1，至多提升至20。
    
*   **重武器掌握Heavy Weapon Master。**在你的回合内，你的攻击动作中，当你用具有重型词条的武器命中了一名生物时，你可以让这把武器对目标额外造成一定的伤害，额外伤害等同于你的熟练加值。
    
*   **顺势斩Hew。**当你使用近战武器掷出一次重击时，或当你用其将一个生物的生命值降低至0时，你可以立即使用你的附赠动作用同一把武器发动一次攻击。
    

**重甲运用 Heavily Armored  
**_通用专长（先决：等级4+，中甲受训）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的体质或力量提升1，至多提升至20。
    
*   **护甲受训Armor Training。**你获得重甲受训。
    

**重甲大师 Heavy Armor Master  
**_通用专长（先决：等级4+，重甲受训）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的体质或力量提升1，至多提升至20。
    
*   **伤害减免Damage Reduction。**穿着重甲期间，当你被一次攻击命中时，该次攻击对你造成的任何钝击伤害、穿刺伤害与挥砍伤害均减去你的熟练加值。
    

**领袖之证 Inspiring Leader  
**_通用专长（先决：等级4+，感知或魅力13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的感知或魅力提升1，至多提升至20。
    
*   **激励演出Bolstering Performance。**每当你的短休/长休结束时，你可以做一场激励人心的表演：一次演讲、一首歌曲或一支舞蹈。当你这么做时，选择至多6名在周围30尺内观看你表演的盟友（亦可包括你自己）。每个被选中的生物都可以获得一定临时生命值，其数值等于你的角色等级+你用本专长提升的属性的调整值。
    

**敏锐心灵 Keen Mind  
**_通用专长（先决：等级4+，智力13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力提升1，至多提升至20。
    
*   **轶闻知识Lore Knowledge。**选择下列技能之一：奥秘、历史、调查、自然、宗教。如果你不具有所选技能的熟练，则你获得其熟练；如果你已有熟练，则你获得其专精。
    
*   **快速研究Quick Study。**你可以用附赠动作执行研究动作。
    

**轻甲运用 Lightly Armored  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1点，至多提升至20。
    
*   **护甲受训Armor Training。**你获得轻甲和盾牌受训。
    

**巫师杀手 Mage Slayer  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **专注中断手Concentration Breaker。**当你对一名正处于专注中的生物造成伤害时，该生物为维持本次专注所做的豁免检定时具有劣势。
    
*   **审慎护心Guarded Mind。**当你的智力、感知或魅力豁免失败时，你可以将其改为成功。此增益一经使用，直到完成短休或长休前你都无法再次使用。
    

**军用武器训练 Martial Weapon Training  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **武器熟练Weapon Proficiency。**你获得军用武器熟练。
    

**中甲大师 Medium Armor Master  
**_通用专长（先决：等级4+，中甲受训）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **灵敏着装Dexterous Wearer。**穿着中甲期间，若你的敏捷在16或更高，你可以在AC中加入3点敏捷调整值，而非原本的2点。
    

**中甲运用 Moderately Armored  
**_通用专长（先决：等级4+，轻甲受训）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **护甲受训Armor Training。**你获得中甲受训。
    

**骑乘战斗 Mounted Combatant  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量、敏捷或感知提升1，至多提升至20。
    
*   **骑乘突击Mounted Strike。**骑乘期间，你对位于你坐骑5尺内的、体型比你坐骑至少小一级的、且未被骑乘的生物所进行的攻击检定具有优势。
    
*   **侧跃躲闪Leap Aside。**当你的坐骑受某效应影响而需要进行敏捷豁免时，如果此次豁免成功只受到一半伤害，那么它豁免成功时不受伤害，豁免失败只承受一半伤害。为享受此增益，你必须骑乘着你的坐骑，且你与坐骑均不能处于失能状态。
    
*   **我身作盾Veer。**当你骑乘时，只要你不处于失能状态，你就可以强制让命中了你的坐骑的攻击改为命中你自己。
    

**观察力 Observant  
**_通用专长（先决：等级4+，智力或感知13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力或感知提升1，至多提升至20。
    
*   **敏锐观察Keen Observer。**选择以下技能之一：洞悉、调查或察觉。如果你不具有所选技能的熟练，则你获得其熟练；如果你已有熟练，则你获得其专精。
    
*   **快速搜索Quick Search。**你可以用附赠动作进行搜索动作。
    

**穿刺者 Piercer  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **穿透伤Puncture。**每回合一次，当你用造成穿刺伤害的攻击命中一个生物时，你可以重骰这次攻击伤害的其中一枚伤害骰。但你必须采用新的掷骰结果。
    
*   **强化重击Enhanced Critical。**当你用造成穿刺伤害的攻击命中一个生物并且掷出重击时，你可以在计算额外的穿刺伤害时多投一个伤害骰。
    

**毒师 Poisoner  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷或智力提升1，至多提升至20。
    
*   **强效毒素Potent Poison。**你造成毒素伤害的伤害掷骰无视对方的毒素伤害抗性。
    
*   **酿毒Brew Poison。**你获得毒药工具的熟练。你可以花费一小时的时间与价值50GP的材料，来使用毒药工具制造一定数量的毒药，其剂数等同于你的熟练加值。你能够以一个附赠动作为一把武器或一枚弹药涂上一剂毒药。涂用后，此种毒药的毒性能维持一分钟，毒性也会在你用此涂毒物品造成伤害后会被消耗。当一名生物受到来自此种涂毒物品的伤害时，该生物必须成功通过一次体质豁免（DC等于8+你以本专长提升的属性的调整值+你的熟练加值），否则将受到2d8毒素伤害并陷入中毒状态，持续至你的下回合结束。
    

**长柄武器大师 Polearm Master  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷或力量提升1，至多提升至20。
    
*   **长柄打击Pole Strike。**在你执行攻击动作并使用长棍、矛或同时具有重型词条与触及词条的武器攻击后，你可以立刻用附赠动作，使用该武器的另一端发动一次近战攻击。在这次攻击中，该武器的伤害骰改为d4，其伤害类型改为钝击伤害。
    
*   **反应打击Reactive Strike。**在你持握长棍、矛或同时具有重型词条与触及词条的武器期间，生物进入你触及范围时，你能够以反应，使用该武器对该生物发动一次近战攻击。
    

**强健身心 Resilient  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**选择你不具有其豁免熟练的一项属性，该属性提升1，至多提升至20。
    
*   **豁免熟练Saving Throw Proficiency。**你获得所选属性的豁免熟练。
    

**仪式施法者 Ritual Caster  
**_通用专长（先决：等级4+，智力、感知或魅力13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **仪式魔法Ritual Spells。**你选择数道具有仪式标签的一环法术，其具体数量等于你的熟练加值。你始终准备着这几道法术，并可以用你拥有的任何法术位去施展它们。施展它们的施法属性为你用此专长提升的属性。此后，每当你的熟练加值提升时，你可以通过这个特性多获得一道始终准备的、带有仪式标签的一环法术。
    
*   **快速仪式Quick Ritual。**你可以用通常的施法时间来施展一道仪式法术，而不需要仪式的延长施法时间。这么做不会花费你的法术位。一旦你通过这种方式施展了一道法术，直到完成一次长休前你都不能再使用这个增益。
    

**哨兵 Sentinel  
**_通用专长（先决：等级4+，力量或敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **守护者Guardian。**当位于你5尺范围内的生物执行撤离动作后，或当它的攻击命中了除你以外的目标后，你可以立刻对该生物进行一次借机攻击。
    
*   **阻拦Halt。**你的借机攻击命中一名生物时，该生物的速度在当前回合剩余时间内变为0。
    

**影界触碰 Shadow Touched  
**_通用专长（先决：等级4+）  
_暴露在**堕影冥界Shadowfell**的魔法之下给予你以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **暗影魔法Shadow Magic。**选择一道幻术或死灵学派的一环法术。你始终准备着你选择的这道法术与_隐形术Invisibility_。你可以无需法术位地施展每道法术各一次，当你完成长休时，你重获以此法施展这些法术的能力。你也能够以你拥有的合适环阶的法术位施展这些法术。  
    这些法术的施法属性是你以此专长提升的属性。
    

**神射手 Sharpshooter  
**_通用专长（先决：等级4+，敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。
    
*   **绕过掩体Bypass Cover。**你使用武器发动的远程攻击无视半身掩护和四分之三掩护。
    
*   **抵近射击Firing in Melee。**位于一个敌人5尺范围内的情况下，你使用远程武器发动的攻击检定不会因此具有劣势。
    
*   **百步穿杨Long Shots。**使用远程武器攻击超出常规射程的目标时，你的攻击检定不会因此具有劣势。
    

**盾牌大师 Shield Master  
**_通用专长（先决：等级4+，盾牌受训）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量提升1，至多提升至20。
    
*   **盾击Shield Bash。**当你通过攻击动作中的，由近战武器发动的一次攻击命中了位于你5尺内的生物时，如果你装备着盾牌\*，你就可以立即使用它来击打目标，迫使目标进行一次力量豁免检定（DC等于8+你的力量调整值+你的熟练加值）。如果豁免失败，目标将被你推离5尺远或因此陷入倒地状态（由你选择）。在每个你的回合中，此增益只能被使用一次。  
    \*译注：PHB的所有专长中，只有这一条增益要求“装备着盾牌”，其余均为“持握着盾牌”
    
*   **介入盾牌Interpose Shield。**当你受某效应影响而需要进行敏捷豁免来“只受一半伤害”时，若你豁免检定成功并正持握着一面盾牌，你就可以用反应来使你自己免受此次伤害。
    

**技艺专家 Skill Expert  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你选择的一项属性提升1，至多提升至20。
    
*   **技能熟练Skill Proficiency。**你自选一个技能并获得其熟练。
    
*   **专精Expertise。**你选择一个拥有其熟练但不具备相应专精的技能，并获得其专精。
    

**隐伏者 Skulker  
**_通用专长（先决：等级4+，敏捷13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。
    
*   **盲视Blindsight。**你获得10尺距离的盲视。
    
*   **战争迷雾Fog of War。**你善于利用战斗中的混乱。你在战斗中通过执行躲藏动作时所做的任何敏捷（隐匿）检定都具有优势。
    
*   **狙击手Sniper。**如果你在躲藏中进行了攻击检定，但该次攻击未命中时，这次攻击将不会暴露你的位置。
    

**劈砍者 Slasher  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **伤筋Hamstring。**每回合一次，当你用造成挥砍伤害的攻击命中一个生物时，你可以使其速度降低10尺，持续至你的下回合开始。
    
*   **强化重击Enhanced Critical。**当你掷出重击并对一个生物造成挥砍伤害时，该生物进行的所有攻击检定都将具有劣势，持续至你的下回合开始为止。
    

**飙速跑者 Speedy  
**_通用专长（先决：等级4+，敏捷或体质13+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的敏捷或体质提升1，至多提升至20。
    
*   **速度提升Speed Increase。**你的速度提升10尺。
    
*   **险地疾行Dash Over Difficult Terrain。**当你在自己的回合执行疾走动作时，在这个回合余下的时间里，困难地形不再会额外消耗你的移动力。
    
*   **灵活移动Agile Movement。**对你发动的借机攻击都具有劣势。
    

**法术射手 Spell Sniper  
**_通用专长（先决：等级4+，施法或契约魔法特性）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **绕过掩体Bypass Cover。**你为法术进行的攻击检定无视半身掩护和四分之三掩护。
    
*   **抵近施法Casting in Melee。**位于一个敌人5尺范围内的情况下，你用法术进行的攻击检定不会因此具有劣势。
    
*   **法术增距Increased Range。**当你施展一道具有至少10尺施法距离，且需要你进行一次攻击检定的法术时，这道法术的施法距离增加60尺。
    

**念动力 Telekinetic  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **次级心灵遥控Minor Telekinesis。**你习得戏法_法师之手Mage Hand_。你施展这道戏法时，你无需言语成分与姿势成分，且可以让这只灵体手隐形，还可以令它的施法距离以及其可远离你的最大距离均提升30尺。你该法术的施法属性是你以此专长提升的属性。
    
*   **念力推撞Telekinetic Shove。**以一个附赠动作，你可以尝试以念动力推撞一个位于你30尺内的你可见的生物。当你这样做时，目标必须通过一次力量豁免（DC等于8+你用此专长提升的属性的调整值+你的熟练加值）否则将被你拉近或推离5尺。
    

**心灵感应 Telepathic  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。
    
*   **传心呢喃Telepathic Utterance。**你可以和位于你60尺内任何你可见的生物用心灵感应进行交流。你的传心呢喃以一种你已知的语言进行，且该生物必须懂得这门语言才能理解你。你的主动沟通并不会给予该生物以心灵感应的形式回复你的能力。
    
*   **侦测思想Detect Thoughts。**你始终准备着法术_侦测思想Detect Thought_。你可以无需法术位且无需法术成分地施展该法术。当你完成长休时，你重获以此法施展该法术的能力。你也能够以你拥有的合适环阶的法术位施展该法术。你这些法术的施法属性是你以此专长提升的属性。
    

**战地施法者 War Caster  
**_通用专长（先决：等级4+，施法或契约魔法特性）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20
    
*   **专注Concentration。**你为维持专注的所做的体质豁免具有优势。
    
*   **响应法术Reactive Spell。**当一个生物因离开你的触及范围而引发你的借机攻击时，你能使用你的反应来对这个生物施展一道法术，而非发动一次借机攻击。这道法术的施法时间必须为动作，且必须将该生物选为法术的唯一目标。
    
*   **姿势成分Somatic Components。**即使你的一只手或双手上都有武器/盾牌，你也能满足法术的姿势成分要求。
    

**武器大师 Weapon Master  
**_通用专长（先决：等级4+）  
_你获得以下增益：

*   **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。
    
*   **精通词条Mastery Property。**你对武器的训练让你能够使用你自选的一种简单或军用武器的精通词条，前提是你熟练于该种武器。每当你完成一次长休，你能将所选的武器种类替换为你熟练的另一种武器。
*/
export const generalFeatsData: Feat[] = [
  {
    id: 'ability score improvement',
    name: '属性值提升 Ability Score Improvement',
    from: ['PHB2014', 'PHB2024'],
    type: 'general',
    description: `你的一个属性提升2，或两个属性各提升1，至多提升至20。`,
    // str, dex, con, int, wis, cha
    ability: [1, 1, 1, 1, 1, 1],
    repeatable: true
  },
  {
    id: 'actor',
    name: '演员 Actor',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的魅力提升1，至多提升至20。\n\n* **戏剧表演Dramatic Performance。**你在表演（戏剧）检定中具有优势。\n\n* **模仿Impersonation。**你可以模仿其他人的声音和说话方式。只要你听过某人的声音，你就可以通过一次感知（察觉）检定（DC等于8+该生物的魅力调整值+该生物的熟练加值）来辨别出你所听到的声音是否为该生物的真实声音。如果你成功通过了这次检定，那么你就能以一次动作来模仿该生物的声音和说话方式，持续时间为10分钟。模仿的声音必须在你听到该声音后的24小时内进行。你在模仿时所做的任何检定都具有劣势，且如果你在模仿期间与该生物进行交流，该生物可以通过一次感知（察觉）检定（DC等于8+你的魅力调整值+你的熟练加值）来识破你的伪装。',
    ability: [0, 0, 0, 0, 0, 1],
  },
  {
    id: 'athlete',
    name: '运动精英 Athlete',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **攀爬速度Climb Speed。**你获得等同于你速度的攀爬速度。\n\n* **鲤鱼打挺Hop Up。**处于倒地状态的情况下，你可以仅消耗5尺移动力来站起来。\n\n* **跳跃Jumping。**你只需移动5尺距离便能进行一次助跑跳远或一次助跑跳高。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'charger',
    name: '冲锋手 Charger',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **进阶疾走Improved Dash。**当你执行疾走动作时，对该动作而言，你的速度提升了10尺。\n\n* **冲锋攻击Charge Attack。**使用攻击动作中的近战攻击检定命中目标时，若你在此次攻击前立即向着目标直线移动了10+尺，你可以为这次攻击增添以下其中一个效应：此次攻击的伤害掷骰获得1d8的加值；将目标推离10尺，前提是目标体型不比你大超过一级。你只能在每个你自己的回合使用一次此增益。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'chef',
    name: '大厨 Chef',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的体质或感知提升1，至多提升至20。\n\n* **厨师工具Cook\'s Utensils。**如果你没有厨师工具的熟练，你获得之。\n\n* **大补食膳Replenishing Meal。**作为短休的一部分，只要你手上有食材和厨师工具，你就可以烹饪一顿特别的美食。你可以为数个生物准备足够的此类食物，其数量等于4+你的熟练加值。在这一次短休结束时，任何吃了这些食物且花费了生命骰来恢复生命值的生物都能额外恢复1d8的生命值。\n\n* **应急零嘴Bolstering Treats。**如果你手上有食材和厨师工具，你可以花费一小时的时间，或在完成一次长休时，烹饪出一定份数的零嘴，其数量等于你熟练加值。这些特别的小零嘴在做好后能保存八小时。一个生物可以使用一个附赠动作来吃掉其中一份零嘴，并获得等同于你熟练加值的临时生命值。',
    ability: [0, 0, 1, 0, 1, 0]
  },
  {
    id: 'crossbow expert',
    name: '强弩专家 Crossbow Expert',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。\n\n* **无视装填Ignore Loading。**你无视手弩、重弩和轻弩的装填词条（在这个专长里统称弩）。如果你正手持着一把弩，你即使没有空手也能够为它装填一发弹药。\n\n* **抵近射击Firing in Melee。**你用弩进行的攻击检定不会因你在敌人的5尺内而具有劣势。\n\n* **双持射击Dual Wielding。**当你发动由轻型词条所提供的额外的攻击时，如果这次追加攻击是由一把具有轻型词条的弩所发动的，且你原本无法在伤害中加入属性调整值，你就可以改为可以将你的属性调整值加入本次伤害中。',
    ability: [0, 1, 0, 0, 0, 0]
  },
  {
    id: 'crusher',
    name: '粉碎者 Crusher',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或体质提升1，至多提升至20。\n\n* **推动Push。**每回合一次，当你以造成钝击伤害的一次攻击命中了一个生物时，只要这个生物的体型不比你大超过一级，你就能将它移动5尺至一处未占据空间中。\n\n* **强化重击Enhanced Critical。**当你掷出一次重击命中一名生物并对其造成钝击伤害后，直到你的下个回合开始前，任何以该生物为目标的攻击检定都会具有优势。',
    ability: [1, 0, 1, 0, 0, 0]
  },
  {
    id: 'dual wielder',
    name: '双持客 Dual Wielder',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **强化双持Enhanced Dual Wielding。**当你在自己的回合中执行了攻击动作，并使用具有轻型词条的武器发动了一次攻击后，你可以在同一回合中，以一个附赠动作发动一次额外的攻击*。这次额外的攻击必须由另一把不具有双手词条的近战武器发动。额外的攻击的伤害无法加入你的属性调整值（除非该调整值为负数）。\n*译注：因为WSZ的文字游戏，此效果难以被准确翻译，简而言之：此效果的攻击属于“因使用具有轻型词条的武器而发动的额外的攻击”；但不属于“由轻型词条提供的额外的攻击”\n\n* **快速拔刀Quick Draw。**拔出或入鞘武器时，你可以同时拔出或入鞘两把不具有双手词条的武器，而非通常情况下的一把。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'durable',
    name: '耐性 Durable',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的体质提升1，至多提升至20。\n\n* **悍不畏死Defy Death。**你进行的死亡豁免具有优势。\n\n* **高速恢复Speedy Recovery。**以一个附赠动作，你可以消耗并投掷一枚生命骰，来恢复与投掷结果相等的生命值。',
    ability: [0, 0, 1, 0, 0, 0]
  },
  {
    id: 'elemental adept',
    name: '元素掌控 Elemental Adept',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1点，至多提升至20。\n\n* **能量掌控Energy Mastery。**选择以下伤害类型之一：强酸、寒冷、火焰、闪电、雷鸣。你施展的法术无视所选伤害类型的抗性。此外，当你为你施展的造成该类型伤害的法术投掷伤害时，你可以将伤害骰中骰出的1都视为2。\n\n**复选Repeatable。**你可多次选取本专长，但每次选取时都必须为能量掌控增益选择一个不同的伤害类型。',
    ability: [0, 0, 0, 1, 1, 1],
    repeatable: true
  },
  {
    id: 'fey-touched',
    name: '妖精触碰 Fey-Touched',
    from: 'PHB2024',
    type: 'general',
    description: '暴露在妖精荒野Feywild的魔法之下给予你以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **妖精魔法Fey Magic。**选择一道预言或惑控学派的一环法术。你始终准备着你选择的这道法术与迷踪步Misty Step。你可以无需法术位地施展每道法术各一次，当你完成长休时，你重获以此法施展这些法术的能力。你也能够以你拥有的合适环阶的法术位施展这些法术。\n你这些法术的施法属性是你以此专长提升的属性。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'grappler',
    name: '擒抱者 Grappler',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **连擒带打Punch and Grab。**你的回合中，当你用攻击动作中的一次徒手打击命中了一个生物，你可以同时进行擒抱和造成伤害两个选项。你每回合只能使用这个增益一次。\n\n* **优势攻击Attack Advantage。**你攻击受擒于你的生物时进行的攻击检定具有优势。\n\n* **高速拖行Fast Wrestler。**你无需为移动受擒于你的生物而花费额外的移动力，前提是这名生物的体型与你相同或更小。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'great weapon master',
    name: '巨武器大师 Great Weapon Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量提升1，至多提升至20。\n\n* **重武器掌握Heavy Weapon Master。**在你的回合内，你的攻击动作中，当你用具有重型词条的武器命中了一名生物时，你可以让这把武器对目标额外造成一定的伤害，额外伤害等同于你的熟练加值。\n\n* **顺势斩Hew。**当你使用近战武器掷出一次重击时，或当你用其将一个生物的生命值降低至0时，你可以立即使用你的附赠动作用同一把武器发动一次攻击。',
    ability: [1, 0, 0, 0, 0, 0]
  },
  {
    id: 'heavily armored',
    name: '重甲运用 Heavily Armored',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的体质或力量提升1，至多提升至20。\n\n* **护甲受训Armor Training。**你获得重甲受训。',
    ability: [1, 0, 1, 0, 0, 0]
  },
  {
    id: 'heavy armor master',
    name: '重甲大师 Heavy Armor Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的体质或力量提升1，至多提升至20。\n\n* **伤害减免Damage Reduction。**穿着重甲期间，当你被一次攻击命中时，该次攻击对你造成的任何钝击伤害、穿刺伤害与挥砍伤害均减去你的熟练加值。',
    ability: [1, 0, 1, 0, 0, 0]
  },
  {
    id: 'inspiring leader',
    name: '领袖之证 Inspiring Leader',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的感知或魅力提升1，至多提升至20。\n\n* **激励演出Bolstering Performance。**每当你的短休/长休结束时，你可以做一场激励人心的表演：一次演讲、一首歌曲或一支舞蹈。当你这么做时，选择至多6名在周围30尺内观看你表演的盟友（亦可包括你自己）。每个被选中的生物都可以获得一定临时生命值，其数值等于你的角色等级+你用本专长提升的属性的调整值。',
    ability: [0, 0, 0, 0, 1, 1]
  },
  {
    id: 'keen mind',
    name: '敏锐心灵 Keen Mind',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力提升1，至多提升至20。\n\n* **轶闻知识Lore Knowledge。**选择下列技能之一：奥秘、历史、调查、自然、宗教。如果你不具有所选技能的熟练，则你获得其熟练；如果你已有熟练，则你获得其专精。\n\n* **快速研究Quick Study。**你可以用附赠动作执行研究动作。',
    ability: [0, 0, 0, 1, 0, 0]
  },
  {
    id: 'lightly armored',
    name: '轻甲运用 Lightly Armored',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1点，至多提升至20。\n\n* **护甲受训Armor Training。**你获得轻甲和盾牌受训。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'mage slayer',
    name: '巫师杀手 Mage Slayer',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **专注中断手Concentration Breaker。**当你对一名正处于专注中的生物造成伤害时，该生物为维持本次专注所做的豁免检定时具有劣势。\n\n* **审慎护心Guarded Mind。**当你的智力、感知或魅力豁免失败时，你可以将其改为成功。此增益一经使用，直到完成短休或长休前你都无法再次使用。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'martial weapon training',
    name: '军用武器训练 Martial Weapon Training',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **武器熟练Weapon Proficiency。**你获得军用武器熟练。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'medium armor master',
    name: '中甲大师 Medium Armor Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **灵敏着装Dexterous Wearer。**穿着中甲期间，若你的敏捷在16或更高，你可以在AC中加入3点敏捷调整值，而非原本的2点。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'moderately armored',
    name: '中甲运用 Moderately Armored',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **护甲受训Armor Training。**你获得中甲受训。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'mounted combatant',
    name: '骑乘战斗 Mounted Combatant',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量、敏捷或感知提升1，至多提升至20。\n\n* **骑乘突击Mounted Strike。**骑乘期间，你对位于你坐骑5尺内的、体型比你坐骑至少小一级的、且未被骑乘的生物所进行的攻击检定具有优势。\n\n* **侧跃躲闪Leap Aside。**当你的坐骑受某效应影响而需要进行敏捷豁免时，如果此次豁免成功只受到一半伤害，那么它豁免成功时不受伤害，豁免失败只承受一半伤害。为享受此增益，你必须骑乘着你的坐骑，且你与坐骑均不能处于失能状态。\n\n* **我身作盾Veer。**当你骑乘时，只要你不处于失能状态，你就可以强制让命中了你的坐骑的攻击改为命中你自己。',
    ability: [1, 1, 0, 0, 1, 0]
  },
  {
    id: 'observant',
    name: '观察力 Observant',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力或感知提升1，至多提升至20。\n\n* **敏锐观察Keen Observer。**选择以下技能之一：洞悉、调查或察觉。如果你不具有所选技能的熟练，则你获得其熟练；如果你已有熟练，则你获得其专精。\n\n* **快速搜索Quick Search。**你可以用附赠动作进行搜索动作。',
    ability: [0, 0, 0, 1, 1, 0]
  },
  {
    id: 'piercer',
    name: '穿刺者 Piercer',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **穿透伤Puncture。**每回合一次，当你用造成穿刺伤害的攻击命中一个生物时，你可以重骰这次攻击伤害的其中一枚伤害骰。但你必须采用新的掷骰结果。\n\n* **强化重击Enhanced Critical。**当你用造成穿刺伤害的攻击命中一个生物并且掷出重击时，你可以在计算额外的穿刺伤害时多投一个伤害骰。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'poisoner',
    name: '毒师 Poisoner',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷或智力提升1，至多提升至20。\n\n* **强效毒素Potent Poison。**你造成毒素伤害的伤害掷骰无视对方的毒素伤害抗性。\n\n* **酿毒Brew Poison。**你获得毒药工具的熟练。你可以花费一小时的时间与价值50GP的材料，来使用毒药工具制造一定数量的毒药，其剂数等同于你的熟练加值。你能够以一个附赠动作为一把武器或一枚弹药涂上一剂毒药。涂用后，此种毒药的毒性能维持一分钟，毒性也会在你用此涂毒物品造成伤害后会被消耗。当一名生物受到来自此种涂毒物品的伤害时，该生物必须成功通过一次体质豁免（DC等于8+你以本专长提升的属性的调整值+你的熟练加值），否则将受到2d8毒素伤害并陷入中毒状态，持续至你的下回合结束。',
    ability: [0, 1, 0, 1, 0, 0]
  },
  {
    id: 'polearm master',
    name: '长柄武器大师 Polearm Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷或力量提升1，至多提升至20。\n\n* **长柄打击Pole Strike。**在你执行攻击动作并使用长棍、矛或同时具有重型词条与触及词条的武器攻击后，你可以立刻用附赠动作，使用该武器的另一端发动一次近战攻击。在这次攻击中，该武器的伤害骰改为d4，其伤害类型改为钝击伤害。\n\n* **反应打击Reactive Strike。**在你持握长棍、矛或同时具有重型词条与触及词条的武器期间，生物进入你触及范围时，你能够以反应，使用该武器对该生物发动一次近战攻击。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'resilient',
    name: '强健身心 Resilient',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**选择你不具有其豁免熟练的一项属性，该属性提升1，至多提升至20。\n\n* **豁免熟练Saving Throw Proficiency。**你获得所选属性的豁免熟练。',
    ability: [1, 1, 1, 1, 1, 1]
  },
  {
    id: 'ritual caster',
    name: '仪式施法者 Ritual Caster',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **仪式魔法Ritual Spells。**你选择数道具有仪式标签的一环法术，其具体数量等于你的熟练加值。你始终准备着这几道法术，并可以用你拥有的任何法术位去施展它们。施展它们的施法属性为你用此专长提升的属性。此后，每当你的熟练加值提升时，你可以通过这个特性多获得一道始终准备的、带有仪式标签的一环法术。\n\n* **快速仪式Quick Ritual。**你可以用通常的施法时间来施展一道仪式法术，而不需要仪式的延长施法时间。这么做不会花费你的法术位。一旦你通过这种方式施展了一道法术，直到完成一次长休前你都不能再使用这个增益。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'sentinel',
    name: '哨兵 Sentinel',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **守护者Guardian。**当位于你5尺范围内的生物执行撤离动作后，或当它的攻击命中了除你以外的目标后，你可以立刻对该生物进行一次借机攻击。\n\n* **阻拦Halt。**你的借机攻击命中一名生物时，该生物的速度在当前回合剩余时间内变为0。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'shadow touched',
    name: '影界触碰 Shadow Touched',
    from: 'PHB2024',
    type: 'general',
    description: '暴露在堕影冥界Shadowfell的魔法之下给予你以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **暗影魔法Shadow Magic。**选择一道幻术或死灵学派的一环法术。你始终准备着你选择的这道法术与隐形术Invisibility。你可以无需法术位地施展每道法术各一次，当你完成长休时，你重获以此法施展这些法术的能力。你也能够以你拥有的合适环阶的法术位施展这些法术。\n这些法术的施法属性是你以此专长提升的属性。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'sharpshooter',
    name: '神射手 Sharpshooter',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。\n\n* **绕过掩体Bypass Cover。**你使用武器发动的远程攻击无视半身掩护和四分之三掩护。\n\n* **抵近射击Firing in Melee。**位于一个敌人5尺范围内的情况下，你使用远程武器发动的攻击检定不会因此具有劣势。\n\n* **百步穿杨Long Shots。**使用远程武器攻击超出常规射程的目标时，你的攻击检定不会因此具有劣势。',
    ability: [0, 1, 0, 0, 0, 0]
  },
  {
    id: 'shield master',
    name: '盾牌大师 Shield Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量提升1，至多提升至20。\n\n* **盾击Shield Bash。**当你通过攻击动作中的，由近战武器发动的一次攻击命中了位于你5尺内的生物时，如果你装备着盾牌*，你就可以立即使用它来击打目标，迫使目标进行一次力量豁免检定（DC等于8+你的力量调整值+你的熟练加值）。如果豁免失败，目标将被你推离5尺远或因此陷入倒地状态（由你选择）。在每个你的回合中，此增益只能被使用一次。\n*译注：PHB的所有专长中，只有这一条增益要求“装备着盾牌”，其余均为“持握着盾牌”\n\n* **介入盾牌Interpose Shield。**当你受某效应影响而需要进行敏捷豁免来“只受一半伤害”时，若你豁免检定成功并正持握着一面盾牌，你就可以用反应来使你自己免受此次伤害。',
    ability: [1, 0, 0, 0, 0, 0]
  },
  {
    id: 'skill expert',
    name: '技艺专家 Skill Expert',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你选择的一项属性提升1，至多提升至20。\n\n* **技能熟练Skill Proficiency。**你自选一个技能并获得其熟练。\n\n* **专精Expertise。**你选择一个拥有其熟练但不具备相应专精的技能，并获得其专精。',
    ability: [1, 1, 1, 1, 1, 1]
  },
  {
    id: 'skulker',
    name: '隐伏者 Skulker',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷提升1，至多提升至20。\n\n* **盲视Blindsight。**你获得10尺距离的盲视。\n\n* **战争迷雾Fog of War。**你善于利用战斗中的混乱。你在战斗中通过执行躲藏动作时所做的任何敏捷（隐匿）检定都具有优势。\n\n* **狙击手Sniper。**如果你在躲藏中进行了攻击检定，但该次攻击未命中时，这次攻击将不会暴露你的位置。',
    ability: [0, 1, 0, 0, 0, 0]
  },
  {
    id: 'slasher',
    name: '劈砍者 Slasher',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **伤筋Hamstring。**每回合一次，当你用造成挥砍伤害的攻击命中一个生物时，你可以使其速度降低10尺，持续至你的下回合开始。\n\n* **强化重击Enhanced Critical。**当你掷出重击并对一个生物造成挥砍伤害时，该生物进行的所有攻击检定都将具有劣势，持续至你的下回合开始为止。',
    ability: [1, 1, 0, 0, 0, 0]
  },
  {
    id: 'speedy',
    name: '飙速跑者 Speedy',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的敏捷或体质提升1，至多提升至20。\n\n* **速度提升Speed Increase。**你的速度提升10尺。\n\n* **险地疾行Dash Over Difficult Terrain。**当你在自己的回合执行疾走动作时，在这个回合余下的时间里，困难地形不再会额外消耗你的移动力。\n\n* **灵活移动Agile Movement。**对你发动的借机攻击都具有劣势。',
    ability: [0, 1, 1, 0, 0, 0]
  },
  {
    id: 'spell sniper',
    name: '法术射手 Spell Sniper',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **绕过掩体Bypass Cover。**你为法术进行的攻击检定无视半身掩护和四分之三掩护。\n\n* **抵近施法Casting in Melee。**位于一个敌人5尺范围内的情况下，你用法术进行的攻击检定不会因此具有劣势。\n\n* **法术增距Increased Range。**当你施展一道具有至少10尺施法距离，且需要你进行一次攻击检定的法术时，这道法术的施法距离增加60尺。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'telekinetic',
    name: '念动力 Telekinetic',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **次级心灵遥控Minor Telekinesis。**你习得戏法法师之手Mage Hand。你施展这道戏法时，你无需言语成分与姿势成分，且可以让这只灵体手隐形，还可以令它的施法距离以及其可远离你的最大距离均提升30尺。你该法术的施法属性是你以此专长提升的属性。\n\n* **念力推撞Telekinetic Shove。**以一个附赠动作，你可以尝试以念动力推撞一个位于你30尺内的你可见的生物。当你这样做时，目标必须通过一次力量豁免（DC等于8+你用此专长提升的属性的调整值+你的熟练加值）否则将被你拉近或推离5尺。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'telepathic',
    name: '心灵感应 Telepathic',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20。\n\n* **传心呢喃Telepathic Utterance。**你可以和位于你60尺内任何你可见的生物用心灵感应进行交流。你的传心呢喃以一种你已知的语言进行，且该生物必须懂得这门语言才能理解你。你的主动沟通并不会给予该生物以心灵感应的形式回复你的能力。\n\n* **侦测思想Detect Thoughts。**你始终准备着法术侦测思想Detect Thought。你可以无需法术位且无需法术成分地施展该法术。当你完成长休时，你重获以此法施展该法术的能力。你也能够以你拥有的合适环阶的法术位施展该法术。你这些法术的施法属性是你以此专长提升的属性。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'war caster',
    name: '战地施法者 War Caster',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的智力、感知或魅力提升1，至多提升至20\n\n* **专注Concentration。**你为维持专注的所做的体质豁免具有优势。\n\n* **响应法术Reactive Spell。**当一个生物因离开你的触及范围而引发你的借机攻击时，你能使用你的反应来对这个生物施展一道法术，而非发动一次借机攻击。这道法术的施法时间必须为动作，且必须将该生物选为法术的唯一目标。\n\n* **姿势成分Somatic Components。**即使你的一只手或双手上都有武器/盾牌，你也能满足法术的姿势成分要求。',
    ability: [0, 0, 0, 1, 1, 1]
  },
  {
    id: 'weapon master',
    name: '武器大师 Weapon Master',
    from: 'PHB2024',
    type: 'general',
    description: '你获得以下增益：\n\n* **属性值提升Ability Score Increase。**你的力量或敏捷提升1，至多提升至20。\n\n* **精通词条Mastery Property。**你对武器的训练让你能够使用你自选的一种简单或军用武器的精通词条，前提是你熟练于该种武器。每当你完成一次长休，你能将所选的武器种类替换为你熟练的另一种武器。',
    ability: [1, 1, 0, 0, 0, 0]
  }
]

export const originFeatsData: Feat[] = [
  {
    id: 'alert',
    name: '警戒 Alert',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **先攻熟练Initiative Proficiency。**当你投掷先攻时，你可以将你的熟练加值加入结果。\n\n* **先攻互换Initiative Swap。**当你掷完先攻，你可以立即与处于同一场战斗中的一名自愿的盟友交换先攻。如果你或那个盟友正处于失能状态，则不能进行交换。'
  },
  {
    id: 'crafter',
    name: '巧匠 Crafter',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **工具熟练Tool Proficiency。**你从快速制作表中自选三项不同的工匠工具并获得其熟练。\n\n* **折扣Discount。**你在购买非魔法物品时具有20%的折扣。\n\n* **快速制作Fast Crafting。**当你完成一次长休时，你可以制作一件快速制作栏中的装备。你必须拥有与该物品对应的工匠工具以及与这些工具对应的工具熟练才能尝试制作。造出的物品会持续存在到你下次完成长休，随后该物品解体坏损。\n\n> **快速制作Fast Crafting**\n> \n> |     |     |\n> | --- | --- |\n> | **工匠工具** | **可制造的装备** |\n> | 木匠工具Carpenter\'s Tools | 梯子、火把 |\n> | 皮匠工具Leatherworker\'s Tools | 小箱子、小包 |\n> | 石匠工具Mason\'s Tools | 滑轮组 |\n> | 陶匠工具Potter\'s Tools | 壶、油灯 |\n> | 铁匠工具Smith\'s Tools | 滚珠、桶、铁蒺藜、爪钩、铁壶 |\n> | 修补工具Tinker\'s Tools | 铃铛、铲子、火绒盒 |\n> | 织布工具Weaver\'s Tools | 篮子、绳索、捕网、帐篷 |\n> | 木雕工具Woodcarver\'s Tools | 短棒、巨棒、长棍 |'
  },
  {
    id: 'healer',
    name: '医疗师 Healer',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **战地医师Battle Medic。**如果你有医疗包，以一个操作动作，你可以消耗医疗包的一次使用次数来救治一个位于你5尺内的生物。该生物可以消耗一枚生命骰，然后由你来投掷它，令该生物恢复等于所掷出的点数+你的熟练加值点生命值。\n\n* **治疗重掷Healing Rerolls。**当你掷骰以决定用法术或此专长的战地医师增益所恢复的生命值时，你可以重掷其中掷出1的骰子，但你必须使用重掷的结果。'
  },
  {
    id: 'lucky',
    name: '幸运 Lucky',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **幸运点Lucky Point。**你拥有一些幸运点，其数量等同于你的熟练加值。你可以将点数花在下列的增益上。你在完成一次长休时重新获得所有已消耗的幸运点。\n\n* **优势Advantage。**当你为了一次D20检定而投掷d20时，你可以花费一个幸运点来给予这次检定优势。\n\n* **劣势Disadvantage。**当一个生物为了一次对你发动的攻击检定而投掷d20时，你可以花费一个幸运点来为这次检定施加劣势。'
  },
  {
    id: 'magic initiate cleric',
    name: '魔法学徒（牧师）Magic Initiate Cleric',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **两道戏法Two Cantrips。**你从牧师法术列表中选择两道戏法并习得之。再从智力、感知、魅力中选择一项属性，你从这个专长中习得的法术使用该属性作为施法属性。\n\n* **一环法术Level 1 Spell。**你从牧师法术列表中选择一道一环法术，并始终准备着这道法术。你可以无需法术位地施展该法术一次，并在完成长休后重获以此法施展该法术的能力。你也可以使用你拥有的任何法术位来施展该法术。\n\n* **改变法术Spell Change。**每当你获得一级新等级，你都能将通过本专长习得的一道法术替换为牧师法术列表中同环阶的另一道法术。'
  },
  {
    id: 'magic initiate druid',
    name: '魔法学徒（德鲁伊）Magic Initiate Druid',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **两道戏法Two Cantrips。**你从德鲁伊法术列表中选择两道戏法并习得之。再从智力、感知、魅力中选择一项属性，你从这个专长中习得的法术使用该属性作为施法属性。\n\n* **一环法术Level 1 Spell。**你从德鲁伊法术列表中选择一道一环法术，并始终准备着这道法术。你可以无需法术位地施展该法术一次，并在完成长休后重获以此法施展该法术的能力。你也可以使用你拥有的任何法术位来施展该法术。\n\n* **改变法术Spell Change。**每当你获得一级新等级，你都能将通过本专长习得的一道法术替换为德鲁伊法术列表中同环阶的另一道法术。'
  },
  {
    id: 'magic initiate wizard',
    name: '魔法学徒（法师）Magic Initiate Wizard',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **两道戏法Two Cantrips。**你从法师法术列表中选择两道戏法并习得之。再从智力、感知、魅力中选择一项属性，你从这个专长中习得的法术使用该属性作为施法属性。\n\n* **一环法术Level 1 Spell。**你从法师法术列表中选择一道一环法术，并始终准备着这道法术。你可以无需法术位地施展该法术一次，并在完成长休后重获以此法施展该法术的能力。你也可以使用你拥有的任何法术位来施展该法术。\n\n* **改变法术Spell Change。**每当你获得一级新等级，你都能将通过本专长习得的一道法术替换为法师法术列表中同环阶的另一道法术。'
  },
  {
    id: 'musician',
    name: '音乐家 Musician',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **乐器训练Instrument Training。** 你获得三种自选的乐器的熟练。\n\n* **鼓舞之歌Encouraging Song。**作为你完成短休或长休的一部分，你可以用你熟练的乐器演奏一首歌曲，并令听到这首乐歌的盟友获得英雄激励。以这种方式所能影响的盟友数量最多等于你的熟练加值。'
  },
  {
    id: 'savage attacker',
    name: '凶蛮打手 Savage Attacker',
    from: 'PHB2024',
    type: 'origin',
    description: '你专门训练过如何做出更具破坏性的进攻。每回合一次，当你使用武器命中目标时，你可以掷两次武器的伤害骰，并自选其中一次应用在目标上。'
  },
  {
    id: 'skilled',
    name: '熟习 Skilled',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得共计三项自选的技能和工具熟练。\n\n**复选Repeatable。**你可多次选择本专长。',
    repeatable: true
  },
  {
    id: 'tavern brawler',
    name: '酒馆斗殴者 Tavern Brawler',
    from: 'PHB2024',
    type: 'origin',
    description: '你获得以下增益：\n\n* **强化徒手打击Enhanced Unarmed Strike。**当你使用徒手打击命中并造成伤害时，你可以造成1d4+你力量调整值的钝击伤害，而非徒手打击的原本伤害。\n\n* **伤害重掷Damage Rerolls。**当你为徒手打击掷伤害骰时，你可以重掷其中掷出1的骰子，但你必须使用重掷的结果。\n\n* **临时武器专家Improvised Weaponry。**你拥有临时武器的熟练。\n\n* **推离Push。**在你的回合内，如果你用攻击动作中的一次徒手打击命中了一个生物，你可以在对目标造成伤害的同时将它推离5尺。你每回合只能使用这个增益一次。'
  },
  {
    id: 'tough',
    name: '健壮 Tough',
    from: 'PHB2024',
    type: 'origin',
    description: '获得该专长时，你的生命值上限提升你当前角色等级两倍的数值。并且在你随后每次升级时，你的生命值上限都会额外提升2。'
  }
]

export const featsData = [...generalFeatsData, ...originFeatsData]

export const featsMap  = new Map<string, Feat>(featsData.map(i => [i.id, i]))
