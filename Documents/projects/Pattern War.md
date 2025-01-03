# Pattern War

## Game Demo

### Overview

这是一款类吸血鬼幸存者+塔防的策略游戏。

玩家操作一个圆柱体保护在地图中央的`核心`，通过击杀敌人获得`结晶`、通过摧毁地图中特定的目标获得`碎片`。通过累积的结晶可以学习新技能或升级已有的技能（类似吸血鬼幸存者游戏），掉落的`碎片`则可以到核心购买、升级建筑物（城墙，工厂，等）。玩家需要防御不断袭来的敌人，同时积累自己的武装力量，待到时机成熟时主动出击寻找并歼灭敌军的核心。当一个区块的敌人均被消灭之后，玩家可以前往另一个区块（下一个更高难度的关卡）。

玩家的目的很简单，在这个星球上收集资源，修复核心使其可以重新发射到太空。修复核心的材料在不同区块中，每一次修复（升级）都可以修建新的建筑物，增强玩家的战力。

只要核心还在，玩家就可以复活，但是可能会缺少部分技能和升级，当解锁新的关卡之后可能可以修复这个问题。

当核心被消灭之后，敌人会变强！！（似乎是学习了你们的科技？甚至能发射子弹了！）

### 游戏的隐藏故事线

玩家是这个星球的入侵者（或者说是不小心在这个星球坠机）！刚抵达这个星球时，原住民谨慎且好奇，在玩家周围试探。他们没有攻击性，玩家可以轻而易举的击杀他们获得结晶（食物），摧毁他们的建筑获得碎片。玩家在游戏前期在核心附近随意掠杀这个星球上的原住民，很快玩家所在的国家（部落）采取了行动，组织了一次又一次进攻试图打败玩家，奈何科技实力的差距根本打不过，人员伤亡不断扩大。虽然可以击杀玩家，但只要核心还存在，就无法彻底杀死玩家，因为玩家会一次又一次的复活，虽然每一次复活单体实力都有所减弱，但很快又能卷土重来实力甚至比之前更强。很快，这个国家崩坏了，再也无法组织起有效的进攻了。紧接着，这个星球最强大的国家接手了这场战争。

玩家的目的很简单，在这个星球上收集资源，修复核心使其可以重新发射到太空。修复核心的材料在游戏地图中的各个地方，每一次修复（升级）都可以修建新的建筑物，增强玩家的战力。

> 隐藏成就：和平使者——玩家降落在一个荒芜人烟的地方，不主动进攻，采集足够的碎片后维修好核心返回太空。

### 名次解释

#### 结晶

* 击杀敌人掉落的战利品，用于学习新技能或升级已有的技能。
* 按照颜色分为不同等级的晶体。

#### 碎片

* 获得方式
  * 摧毁敌方建筑获得
  * 玩家自己挖矿，或生产矿物机器人自动挖矿

#### 核心

* 提供多种用途
  * 发布任务
  * 修建建筑
* 限制机器人的上限
  * 通过升级核心提高上限

#### 机器人

* 每个机器人必定会有一个编码进行区分
* 机器人可以自定义命名，但编码依然存在
* 当没有指派具体任务时什么都能做，但是效率较低

* 可以通过指定建筑指派机器人为专一机器人，效率高，可升级

* 机器人分类：
  * 通用机器人——可以指派到任何建筑物
    * 战斗机器人
    * 物流机器人
    * 维修机器人
    * 医疗机器人
  * 专业机器人——只能指派到单个建筑物
    * 矿场机器人

#### 建筑物

* 可以像城市天际线一样划一个范围用于该建筑的管理区域
  * 如矿场，可以放在矿山附近，划分一个区域用于采矿。范围太大会影响效率，因为采出的矿石需要收集到矿场统一运输。
* 任何通用机器人都可以指派到该建筑之下
  * 以矿场为例，战斗机器人当发现敌人后首要任务是保护矿场；物流机器人首要任务是将开采出的矿物运输到矿场；维修机器人首要任务是维修矿场；
* 可以定量指派机器人，也可以指派指定机器人
  * 以矿场为例，战斗机器人指派3人，其中#0001必须在其中。
* 建筑物包括：
  * 核心
  * 矿场
  * 物流仓库
  * 防御塔

#### 围墙

* 在损坏之前均不可穿过
* 可以用于阻挡敌人的进攻
* 通过颜色区分等级

#### 能量围墙

* 仅玩家一方可穿过
* 强度相比于围墙差很多

#### 穹顶防护罩（测试）

* 仅玩家一方可穿过
* 通过消耗碎片形成
* 强度整体强度很高，但是当集中攻击一个区域时，很容易暴露缺陷

#### 玩家

* 由一个圆柱体表示
* 

### 游戏框架

#### 游戏主视角

* 鼠标
  * 鼠标左键：攻击键
  * 鼠标右键：
  * 鼠标滚轮：缩放视角大小
  * 按下滚轮+滑动鼠标：调整视角角度
  * 按下滚轮+方向键：脱离玩家移动
* 键盘m：放大缩小小地图
* 键盘q：
* 键盘e：
* 键盘r：
* 键盘shift：
* 键盘1:使用技能1
* 键盘2:使用技能2
* 键盘3:使用技能3

### 技能

#### 基础

子弹技能

* 提高攻速
* 提高准确率
* 每次发射增加一颗子弹（伤害降低）
* 提高伤害
* 子弹穿透
* 子弹弹射
* 子弹爆炸
* 子弹中毒/流血
* 提高暴击率
* 提高暴击伤害
* 子弹属性
  * 火——燃烧效果，持续扣血，如果紧挨邻近pawn，会传导燃烧效果
    * 与冰互斥
    * 燃烧强度
      * 燃烧时间
      * 燃烧伤害
      * 传播时间
    * 子弹使用时间
    * 子弹恢复速度
  * 冰——降低移动速度，短时间收到持续伤害会冻结
    * 与火互斥
    * 冰冻强度
      * 持续时间
      * 降低移速强度——当降低到一定阈值后就会被冻结
    * 子弹使用时间
    * 子弹恢复速度
  * 毒——持续大幅度伤害，可能会使得敌军相互攻击，无法锁定玩家等效果
    * 中毒强度——越强，需要子弹达到特殊效果需要的子弹越少
    * 中毒时间
    * 子弹使用时间
    * 子弹恢复速度
  * 电——造成一定区域的连锁伤害，使得敌人短暂停顿一段时间。可以打断敌军技能。
    * 强度——越强，可以连锁电到更多更远的敌人
    * 子弹使用时间
    * 子弹恢复速度

玩家技能

* 提升血量
* 提升移动速度

闪现

* 连续闪现次数
* 单次闪现最远距离
* 闪现冷却时常

能量罩

* 能量恢复速率
* 最大抵挡伤害
* 能量恢复时间间隔
* 

> 技能提升与升级采用抽卡形式如何？每次必须前往核心升级。从不同价格的抽奖池中抽取技能，或者花费很高的费用直接购买某个技能或是升级。

