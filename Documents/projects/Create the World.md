# Create the World

一个游戏设想，名字叫"Create the World"。

游戏模式是这样的，在命令行输入游戏指令，比如

```
create world name_world1
```

那么游戏界面就会生成一个“世界”。

```
create planet name_planet1 in name_world1
```

那么游戏界面就会在这个“世界”生成一个“星球”。

这就是面向对象的编程。类型是`planet`，对象是`name_planet1`。

可以基于planet类型，编写其他代码，增添planet的功能。

```
add 100 trees in name_planet1
```

即在“星球”上种植100棵树木。



在这个游戏中，你通过代码成为造世主（上帝），甚至可以通过代码编写一个物种（基因），物种（基因）会繁衍后代，基于遗传规律，发生变异and染色体交换……或者说每一个动物、植物、乃至一个星球都是由一个基因模版控制。



## 基因的设想

每一个类其实就是一个基因，比如tree“类”就是一个基础的基因，它是显示现实“树”的模版，但事实上，tree类应当是一个抽象类，因为更具体的有”松树“、”桦树“……当然如果为了省事，直接create tree也没问题。



## 逼近现实的玩法

通过ai自动创建”基因“，比如游戏中本来没有”原子弹“这个基因（就是完完全全没有编写这段代码），但是游戏中高智商的小人可以自己创造出这段”基因“代码。



## 游戏的拓展

可以类似python的包，其他开发者可以创建一个包，在本地下载好这个包然后直接导入就可以使用这个包中的所有内容。

## 编程环境

可以将代码一次性编译完，也可以像jupyter一样，一行行解释。

# God World

## 游戏玩法

玩家是上帝，游戏开始操纵一个文明（种族，不一定是一个国家，因为不同国家可以只相信一个信仰），不过不像其他策略游戏是直接操作游戏中的小人，而需要依靠间接手段带领你的文明走上胜利。

## 游戏机制

有一个数值衡量小人对上帝的“信仰”，这个“信仰”需要给小人们种植一个上帝的观念，给小人们一场大灾难，当他们祈求复苏时适当给一点恩惠，让他们相信有上帝指引他们，慢慢形成宗教观念。小人的教皇可以直接与你交互，即这个教皇就是你在人间的代言。但是请注意，过度宗教话虽然能让小人听你的话，通过教皇按你的命令做事，但这也容易导致腐败，不利于文明的发展。反之，如果小人们信仰科学多一点，那么你就只能眼睁睁的看着你文明的小人自己发展，只能干看着。也许发展的非常快，比其他文明快出许多，然后发明了原子弹，最终不受控制毁灭了世界……

### 举例

* 你的文明出现了一个天才科学家，但这个科学家不相信地心说，这会让大量小人不相信上帝的真实，不利于教会的统治，不再听教皇的指挥，使得整个种族不按照你的想法发展，你可以命令教皇绞杀这个科学家（教会也可能擅作主张直接绞杀），后果是：1、很多天才科学家不敢提出创新观点，科学家出现的概率降低；2、对上帝信任更加牢固，你有更多的操作空间（发动宗教战争）；3、人民的革命、反抗思想增强，更有可能推翻这个暴政！
* 你的文明发展非常迅速，但你的操作起不到任何作用（比如攻打一个国家，但小人们就是不打）。你可以设计一个灾难，让他们知道上帝的厉害，后果是：1、文明发展停滞甚至因为灾难倒退；2、小人们需要一个信仰领袖带领他们走出困境，你拥有更多的操作空间。


