const allToy = [
  {
    id: 1,
    name: '木馬',
    level: 20,
    base: '木馬馬鞍',
    item: '柚木 10 羊皮 20 金屬蝎卡',
    doll: '金屬蝎娃娃',
    petsRelated: '金屬蝎',
    dollLimit: 5,
    statusLimit: 25,
    map: ['空中宮殿1F'],
  },
  {
    id: 2,
    name: '豪華木馬',
    level: 40,
    base: '豪華馬鞍',
    item: '紅檜 10 牛皮 20 木鳩獸卡',
    doll: '木鳩獸娃娃',
    petsRelated: '木鳩獸',
    dollLimit: 7,
    statusLimit: 35,
    map: ['卡拉斯空域', '大盜巢穴B1'],
  },
  {
    id: 3,
    name: '黃金木馬',
    level: 60,
    base: '黃金馬鞍',
    item: '紫杉 10 鹿皮 20 窩木蟲卡',
    doll: '窩木蟲娃娃',
    petsRelated: '窩木蟲',
    dollLimit: 9,
    statusLimit: 45,
    map: ['哈啾島', '魔幣寵'],
  },
  {
    id: 4,
    name: '大砲',
    level: 20,
    base: '普通砲管',
    item: '鐵塊 4 鹿皮 6 土Q獸卡',
    doll: '土Q獸娃娃',
    petsRelated: '土Q獸',
    dollLimit: 5,
    statusLimit: 25,
    map: ['空中宮殿1F'],
  },
  {
    id: 5,
    name: '紅星大砲',
    level: 40,
    base: '紅星砲管',
    item: '銀塊 5 貂皮 8 守護天使卡',
    doll: '守護天使娃娃',
    petsRelated: '守護天使',
    dollLimit: 7,
    statusLimit: 35,
    map: ['大盜巢穴B2'],
  },
  {
    id: 6,
    name: '黃金大砲',
    level: 60,
    base: '黃金砲管',
    item: '金塊 6 犀牛皮 10 熱血波里卡',
    doll: '熱血波里娃娃',
    petsRelated: '熱血波里',
    dollLimit: 9,
    statusLimit: 45,
    map: ['哈啾島'],
  },
  {
    id: 7,
    name: '玩具兵',
    level: 20,
    base: '玩具步槍',
    item: '黑檀木 4 鱷魚皮 3 光Q獸卡',
    doll: '光Q獸娃娃',
    petsRelated: '光Q獸',
    dollLimit: 5,
    statusLimit: 25,
    map: ['空中宮殿2F'],
  },
  {
    id: 8,
    name: '衛兵隊長',
    level: 40,
    base: '火紅步槍',
    item: '鐵杉 6 虎皮 5 妮莎駱駝卡',
    doll: '妮莎駱駝娃娃',
    petsRelated: '妮莎駱駝',
    dollLimit: 7,
    statusLimit: 35,
    map: ['大盜巢穴B3'],
  },
  {
    id: 9,
    name: '黃金士兵',
    level: 60,
    base: '黃金步槍',
    item: '紅豆杉 8 龍鱗 7 土瓢蟲卡',
    doll: '土瓢蟲娃娃',
    petsRelated: '土瓢蟲',
    dollLimit: 9,
    statusLimit: 45,
    map: ['椰子島'],
  },
  {
    id: 10,
    name: '汽車',
    level: 20,
    base: '汽車引擎',
    item: '鋼塊 1 牛皮 10 闇影蝎卡',
    doll: '闇影蝎娃娃',
    petsRelated: '闇影蝎',
    dollLimit: 5,
    statusLimit: 25,
    map: ['空中宮殿2F'],
  },
  {
    id: 11,
    name: '跑車',
    level: 40,
    base: '跑車引擎',
    item: '鋼條 2 鹿皮 12 激戰蜥蜴卡',
    doll: '激戰蜥蜴娃娃',
    petsRelated: '激戰蜥蜴',
    dollLimit: 7,
    statusLimit: 35,
    map: ['巴斯密洞B1'],
  },
  {
    id: 12,
    name: '黃金跑車',
    level: 60,
    base: '黃金引擎',
    item: '合金鋼 3 貂皮 14 正港黑豬卡',
    doll: '正港黑豬娃娃',
    petsRelated: '正港黑豬',
    dollLimit: 9,
    statusLimit: 45,
    map: ['椰子島'],
  },
  {
    id: 13,
    name: '芭蕾娃娃',
    level: 20,
    base: '芭蕾舞鞋',
    item: '竹子 20 羊皮 20 麻辣駱駝卡',
    doll: '麻辣駱駝娃娃',
    petsRelated: '麻辣駱駝',
    dollLimit: 5,
    statusLimit: 25,
    map: ['空中宮殿3F'],
  },
  {
    id: 14,
    name: '芭蕾公主',
    level: 40,
    base: '紅舞鞋',
    item: '藤條 20 牛皮 20 攀岩雪怪卡',
    doll: '攀岩雪怪娃娃',
    petsRelated: '攀岩雪怪',
    dollLimit: 7,
    statusLimit: 35,
    map: ['巴斯密洞B1'],
  },
  {
    id: 15,
    name: '黃金舞者',
    level: 60,
    base: '黃金舞鞋',
    item: '白楊木 20 鹿皮 20 潛水羊卡',
    doll: '潛水羊娃娃',
    petsRelated: '潛水羊',
    dollLimit: 9,
    statusLimit: 45,
    map: ['鬱金香島'],
  },
  {
    id: 16,
    name: '陀螺',
    level: 20,
    base: '陀螺轉軸',
    item: '柚木 10 犀牛皮 4 火旺卡',
    doll: '火旺娃娃',
    petsRelated: '火旺',
    dollLimit: 5,
    statusLimit: 25,
    map: ['尼克草原'],
  },
  {
    id: 17,
    name: '搖滾陀螺',
    level: 40,
    base: '搖滾轉軸',
    item: '紅檜 10 鱷魚皮 6 三月兔卡',
    doll: '三月兔娃娃',
    petsRelated: '三月兔',
    dollLimit: 7,
    statusLimit: 35,
    map: ['羅比特平原'],
  },
  {
    id: 18,
    name: '黃金陀螺',
    level: 60,
    base: '黃金轉軸',
    item: '紫杉 10 虎皮 8 閃光龍卡',
    doll: '閃光龍娃娃',
    petsRelated: '閃光龍',
    dollLimit: 9,
    statusLimit: 45,
    map: ['鬱金香島'],
  },
  {
    id: 19,
    name: '炸彈',
    level: 20,
    base: '引爆器',
    item: '青銅塊 5 鱷魚皮 3 水兔兔卡',
    doll: '水兔兔娃娃',
    petsRelated: '水兔兔',
    dollLimit: 5,
    statusLimit: 25,
    map: ['米夏島'],
  },
  {
    id: 20,
    name: '致命炸彈',
    level: 40,
    base: '致命引爆器',
    item: '銅塊 7 虎皮 5 白玫瑰卡',
    doll: '白玫瑰娃娃',
    petsRelated: '白玫瑰',
    dollLimit: 7,
    statusLimit: 35,
    map: ['東迷路森林'],
  },
  {
    id: 21,
    name: '黃金炸彈',
    level: 60,
    base: '黃金引爆器',
    item: '鐵塊 10 龍鱗 7 大眼熊卡',
    doll: '大眼熊娃娃',
    petsRelated: '大眼熊',
    dollLimit: 9,
    statusLimit: 45,
    map: ['聽說島'],
  },
  {
    id: 22,
    name: '幽浮',
    level: 20,
    base: '發光體',
    item: 'K金 2 貂皮 5 竹蜻蜓卡',
    doll: '竹蜻蜓娃娃',
    petsRelated: '竹蜻蜓',
    dollLimit: 5,
    statusLimit: 25,
    map: ['米夏島'],
  },
  {
    id: 23,
    name: '飛碟',
    level: 40,
    base: '神秘發光體',
    item: '鋼塊 2 犀牛皮 7 金海馬卡',
    doll: '金海馬娃娃',
    petsRelated: '金海馬',
    dollLimit: 7,
    statusLimit: 35,
    map: ['史蓋窩克海'],
  },
  {
    id: 24,
    name: '黃金飛碟',
    level: 60,
    base: '黃金發光體',
    item: '鋼條 3 鱷魚皮 9 泥娃娃卡',
    doll: '泥娃娃娃娃',
    petsRelated: '泥娃娃',
    dollLimit: 9,
    statusLimit: 45,
    map: ['聽說島'],
  },
  {
    id: 25,
    name: '骰子',
    level: 20,
    base: '骰子模型',
    item: '鐵塊 4 鹿皮 10 駱駝卡',
    doll: '駱駝娃娃',
    petsRelated: '駱駝',
    dollLimit: 5,
    statusLimit: 25,
    map: ['迦蘭谷地'],
  },
  {
    id: 26,
    name: '鑲金骰子',
    level: 40,
    base: '鑲金骰子模型',
    item: '銀塊 5 貂皮 10 爬木蝎卡',
    doll: '爬木蝎娃娃',
    petsRelated: '爬木蝎',
    dollLimit: 7,
    statusLimit: 35,
    map: ['以利暗沙漠'],
  },
  {
    id: 27,
    name: '黃金骰子',
    level: 60,
    base: '黃金骰子模型',
    item: '金塊 6 犀牛皮 10 老實牛卡',
    doll: '老實牛娃娃',
    petsRelated: '老實牛',
    dollLimit: 9,
    statusLimit: 45,
    map: ['咕嚕島'],
  },
  {
    id: 28,
    name: '迷你衛星',
    level: 20,
    base: '迷你電腦',
    item: '鋼塊 1 牛皮 10 水鳩獸卡',
    doll: '水鳩獸娃娃',
    petsRelated: '水鳩獸',
    dollLimit: 5,
    statusLimit: 25,
    map: ['迦蘭谷地', '卡拉斯山區', '卡拉斯空域', '秘密古墓B1'],
  },
  {
    id: 29,
    name: '人造衛星',
    level: 40,
    base: '衛星電腦',
    item: '鋼條 2 鹿皮 10 法亞象卡',
    doll: '法亞象娃娃',
    petsRelated: '法亞象',
    dollLimit: 7,
    statusLimit: 35,
    map: ['以利暗沙漠', '秘密古墓B1', '秘密古墓B2', '試煉洞窟B3'],
  },
  {
    id: 30,
    name: '黃金衛星',
    level: 60,
    base: '黃金電腦',
    item: '合金鋼 3 鱷魚皮 10 火箭豬卡',
    doll: '火箭豬娃娃',
    petsRelated: '火箭豬',
    dollLimit: 9,
    statusLimit: 45,
    map: ['咕嚕島'],
  },
  {
    id: 31,
    name: '棒球',
    level: 30,
    base: '棒球塑材',
    item: '柚木 10 羊皮 20 黃金象卡',
    doll: '黃金象娃娃',
    petsRelated: '黃金象',
    dollLimit: 6,
    statusLimit: 30,
    map: ['禿禿島', '大盜巢穴B3'],
  },
  {
    id: 32,
    name: '足球',
    level: 50,
    base: '足球塑材',
    item: '紅檜 10 牛皮 20 花木豹卡',
    doll: '花木豹娃娃',
    petsRelated: '花木豹',
    dollLimit: 8,
    statusLimit: 40,
    map: ['彩花田'],
  },
  {
    id: 33,
    name: '籃球',
    level: 70,
    base: '籃球塑材',
    item: '紫杉 10 鹿皮 20 惡鬼卡',
    doll: '惡鬼娃娃',
    petsRelated: '惡鬼',
    dollLimit: 10,
    statusLimit: 50,
    map: ['斷頭谷'],
  },
  {
    id: 34,
    name: '拖鞋',
    level: 30,
    base: '拖鞋面底',
    item: '鐵塊 4 鹿皮 6 金Q獸卡',
    doll: '金Q獸娃娃',
    petsRelated: '金Q獸',
    dollLimit: 6,
    statusLimit: 30,
    map: ['秘密古墓B2', '秘密古墓B3'],
  },
  {
    id: 35,
    name: '木屐',
    level: 50,
    base: '木屐鞋底',
    item: '銀塊 5 貂皮 8 赤尾鳥卡',
    doll: '赤尾鳥娃娃',
    petsRelated: '赤尾鳥',
    dollLimit: 8,
    statusLimit: 40,
    map: ['陽光森林'],
  },
  {
    id: 36,
    name: '高跟鞋',
    level: 70,
    base: '高跟鞋鞋跟',
    item: '金塊 6 犀牛皮 10 金錢豹卡',
    doll: '金錢豹娃娃',
    petsRelated: '金錢豹',
    dollLimit: 10,
    statusLimit: 50,
    map: ['斷頭谷'],
  },
  {
    id: 37,
    name: '哈密瓜',
    level: 30,
    base: '哈密瓜籽',
    item: '黑檀木 4 鱷魚皮 3 冰蝎卡',
    doll: '冰蝎娃娃',
    petsRelated: '冰蝎',
    dollLimit: 6,
    statusLimit: 30,
    map: ['禿禿島'],
  },
  {
    id: 38,
    name: '小玉西瓜',
    level: 50,
    base: '西瓜籽',
    item: '鐵杉 6 虎皮 5 蘆葦草人卡',
    doll: '蘆葦草人娃娃',
    petsRelated: '蘆葦草人',
    dollLimit: 8,
    statusLimit: 40,
    map: ['陽光森林'],
  },
  {
    id: 39,
    name: '南瓜',
    level: 70,
    base: '南瓜籽',
    item: '紅豆杉 8 龍鱗 7 火焰祭司卡',
    doll: '火焰祭司娃娃',
    petsRelated: '火焰祭司',
    dollLimit: 10,
    statusLimit: 50,
    map: ['斷頭谷'],
  },
  {
    id: 40,
    name: '小蛋糕',
    level: 30,
    base: '小蛋糕模型',
    item: '鋼塊 1 牛皮 10 沙土巨魔卡',
    doll: '沙土巨魔娃娃',
    petsRelated: '沙土巨魔',
    dollLimit: 6,
    statusLimit: 30,
    map: ['秘密古墓B2', '秘密古墓B3'],
  },
  {
    id: 41,
    name: '生日蛋糕',
    level: 50,
    base: '蛋糕模型',
    item: '鋼條 2 鹿皮 12 鋼鐵機器人卡',
    doll: '鋼鐵機器人娃娃',
    petsRelated: '鋼鐵機器人',
    dollLimit: 8,
    statusLimit: 40,
    map: ['陽光森林'],
  },
  {
    id: 42,
    name: '結婚蛋糕',
    level: 70,
    base: '大蛋糕模型',
    item: '合金鋼 3 貂皮 14 黃銅機器人卡',
    doll: '黃銅機器人娃娃',
    petsRelated: '黃銅機器人',
    dollLimit: 10,
    statusLimit: 50,
    map: ['斷頭谷'],
  },
  {
    id: 43,
    name: '甜甜圈',
    level: 30,
    base: '麵粉圈',
    item: '竹子 20 羊皮 20 閃光精靈卡',
    doll: '閃光精靈娃娃',
    petsRelated: '閃光精靈',
    dollLimit: 6,
    statusLimit: 30,
    map: ['秘密古墓B3'],
  },
  {
    id: 44,
    name: '呼拉圈',
    level: 50,
    base: '塑膠圈',
    item: '藤條 20 牛皮 20 木獼猴卡',
    doll: '木獼猴娃娃',
    petsRelated: '木獼猴',
    dollLimit: 8,
    statusLimit: 40,
    map: ['百花谷'],
  },
  {
    id: 45,
    name: '天使光環',
    level: 70,
    base: '光圈',
    item: '白楊木 20 鹿皮 20 生啤酒卡',
    doll: '生啤酒娃娃',
    petsRelated: '生啤酒',
    dollLimit: 10,
    statusLimit: 50,
    map: ['坦林平原'],
  },
  {
    id: 46,
    name: '香蕉',
    level: 30,
    base: '食用香蕉籽',
    item: '柚木 10 犀牛皮 4 貪心駱駝卡',
    doll: '貪心駱駝娃娃',
    petsRelated: '貪心駱駝',
    dollLimit: 6,
    statusLimit: 30,
    map: ['秘密古墓B3'],
  },
  {
    id: 47,
    name: '剝皮香蕉',
    level: 50,
    base: '野生香蕉籽',
    item: '紅檜 10 鱷魚皮6 水雷河豚卡',
    doll: '水雷河豚娃娃',
    petsRelated: '水雷河豚',
    dollLimit: 8,
    statusLimit: 40,
    map: ['百花谷'],
  },
  {
    id: 48,
    name: '一串蕉',
    level: 70,
    base: '稀有香蕉籽',
    item: '紫杉 10 虎皮 8 痞子鱷魚卡',
    doll: '痞子鱷魚娃娃',
    petsRelated: '痞子鱷魚',
    dollLimit: 10,
    statusLimit: 50,
    map: ['黑森林北面'],
  },
  {
    id: 49,
    name: '蘋果梗',
    level: 30,
    base: '蘋果核',
    item: '青銅塊 5 鱷魚皮 3 闇Q獸卡',
    doll: '闇Q獸娃娃',
    petsRelated: '闇Q獸',
    dollLimit: 6,
    statusLimit: 30,
    map: ['大盜巢穴B2', '秘密古墓B3'],
  },
  {
    id: 50,
    name: '青蘋果',
    level: 50,
    base: '青蘋果核',
    item: '銅塊 7 虎皮 5 殺手鱷魚卡',
    doll: '殺手鱷魚娃娃',
    petsRelated: '殺手鱷魚',
    dollLimit: 8,
    statusLimit: 40,
    map: ['百花谷'],
  },
  {
    id: 51,
    name: '紅蘋果',
    level: 70,
    base: '紅蘋果核',
    item: '鐵塊 10 龍鱗 7 藍眼雀卡',
    doll: '藍眼雀娃娃',
    petsRelated: '藍眼雀',
    dollLimit: 10,
    statusLimit: 50,
    map: ['黑森林北面'],
  },
  {
    id: 52,
    name: '骨頭',
    level: 30,
    base: '豬骨',
    item: 'k金 2 貂皮 5 黃飛猴卡',
    doll: '黃飛猴娃娃',
    petsRelated: '黃飛猴',
    dollLimit: 6,
    statusLimit: 30,
    map: ['彩花村'],
  },
  {
    id: 53,
    name: '帶骨肉',
    level: 50,
    base: '牛骨',
    item: '鋼塊 2 犀牛皮 7 跑路鱷魚卡',
    doll: '跑路鱷魚娃娃',
    petsRelated: '跑路鱷魚',
    dollLimit: 8,
    statusLimit: 40,
    map: ['百花谷'],
  },
  {
    id: 54,
    name: '骷髏頭',
    level: 70,
    base: '黑色旗',
    item: '鋼條 3 鱷魚皮 9 粉紅豹卡',
    doll: '粉紅豹娃娃',
    petsRelated: '粉紅豹',
    dollLimit: 10,
    statusLimit: 50,
    map: ['黑森林北面'],
  },
  {
    id: 55,
    name: '星星',
    level: 30,
    base: '星星發光裝置',
    item: '鐵塊 4 鹿皮 10 稻草包卡',
    doll: '稻草包娃娃',
    petsRelated: '稻草包',
    dollLimit: 6,
    statusLimit: 30,
    map: ['彩色田'],
  },
  {
    id: 56,
    name: '月亮',
    level: 50,
    base: '月亮發光裝置',
    item: '鋼塊 2 犀牛皮 7 楓葉菇卡',
    doll: '楓葉菇娃娃',
    petsRelated: '楓葉菇',
    dollLimit: 8,
    statusLimit: 40,
    map: ['夢奇地51~60區'],
  },
  {
    id: 57,
    name: '太陽',
    level: 70,
    base: '太陽發光裝置',
    item: '鋼條 3 鱷魚皮 9 金針菇卡',
    doll: '金針菇娃娃',
    petsRelated: '金針菇',
    dollLimit: 10,
    statusLimit: 50,
    map: ['夢奇地71~80區'],
  },
  {
    id: 58,
    name: '白雲',
    level: 15,
    base: '飄雲裝置',
    item: '柚木 10 羊皮 20 雞蛋布丁卡',
    doll: '雞蛋布丁娃娃',
    petsRelated: '雞蛋布丁',
    dollLimit: 5,
    statusLimit: 25,
    map: ['罐頭地道B1'],
  },
  {
    id: 59,
    name: '烏雲',
    level: 35,
    base: '降雨裝置',
    item: '紅檜 10 牛皮 20 天白冬菇卡',
    doll: '天白冬菇娃娃',
    petsRelated: '天白冬菇',
    dollLimit: 7,
    statusLimit: 35,
    map: ['罐頭地道B2'],
  },
  {
    id: 60,
    name: '雷電雲',
    level: 55,
    base: '打雷裝置',
    item: '紫杉 10 鹿皮 20 金屬蜻蜓卡',
    doll: '金屬蜻蜓娃娃',
    petsRelated: '金屬蜻蜓',
    dollLimit: 9,
    statusLimit: 45,
    map: ['夢奇地61~70區'],
  },
  {
    id: 61,
    name: '小雞',
    level: 15,
    base: '小雞模型',
    item: '鐵塊 4 鹿皮 6 牛奶布丁卡',
    doll: '牛奶布丁娃娃',
    petsRelated: '牛奶布丁',
    dollLimit: 5,
    statusLimit: 25,
    map: ['夢奇地31~40區'],
  },
  {
    id: 62,
    name: '母雞',
    level: 35,
    base: '母雞模型',
    item: '銀塊 5 貂皮 8 綠蜻蜓卡',
    doll: '綠蜻蜓娃娃',
    petsRelated: '綠蜻蜓',
    dollLimit: 7,
    statusLimit: 35,
    map: ['罐頭地道B2'],
  },
  {
    id: 63,
    name: '公雞',
    level: 55,
    base: '公雞模型',
    item: '金塊 6 犀牛皮 10 梅子布丁卡',
    doll: '梅子布丁娃娃',
    petsRelated: '梅子布丁',
    dollLimit: 9,
    statusLimit: 45,
    map: ['夢奇地61~70區'],
  },
  {
    id: 64,
    name: '塑膠鴨子',
    level: 15,
    base: '鴨子模型',
    item: '黑檀木 4 鱷魚皮 3 點水蜻蜓卡',
    doll: '點水蜻蜓娃娃',
    petsRelated: '點水蜻蜓',
    dollLimit: 5,
    statusLimit: 25,
    map: ['罐頭地道B1'],
  },
  {
    id: 65,
    name: '塑膠鵝',
    level: 35,
    base: '鵝模型',
    item: '鐵杉 6 虎皮 5 藍莓布丁卡',
    doll: '藍莓布丁娃娃',
    petsRelated: '藍莓布丁',
    dollLimit: 7,
    statusLimit: 35,
    map: ['拇指花園'],
  },
  {
    id: 66,
    name: '塑膠天鵝',
    level: 55,
    base: '天鵝模型',
    item: '紅豆杉 8 龍鱗 7 鮑魚菇卡',
    doll: '鮑魚菇娃娃',
    petsRelated: '鮑魚菇',
    dollLimit: 9,
    statusLimit: 45,
    map: ['荷花池塘'],
  },
  {
    id: 67,
    name: '貓咪布偶',
    level: 15,
    base: '貓咪布偶設計圖',
    item: '鋼塊 1 牛皮 10 熱情司瓦諾卡',
    doll: '熱情司瓦諾娃娃',
    petsRelated: '熱情司瓦諾',
    dollLimit: 5,
    statusLimit: 25,
    map: ['夢奇地31~40區'],
  },
  {
    id: 68,
    name: '老虎布偶',
    level: 35,
    base: '老虎布偶設計圖',
    item: '鋼條 2 鹿皮 12 草莓布丁卡',
    doll: '草莓布丁娃娃',
    petsRelated: '草莓布丁',
    dollLimit: 7,
    statusLimit: 35,
    map: ['夢奇地41~50區'],
  },
  {
    id: 69,
    name: '獅子布偶',
    level: 55,
    base: '獅子布偶設計圖',
    item: '合金鋼 3 貂皮 14 陽光司瓦諾卡',
    doll: '陽光司瓦諾娃娃',
    petsRelated: '陽光司瓦諾',
    dollLimit: 9,
    statusLimit: 45,
    map: ['荷花池塘'],
  },
  {
    id: 70,
    name: '古董不倒翁',
    level: 15,
    base: '古董不倒翁底座',
    item: '竹子 20 羊皮 20 蘑菇卡',
    doll: '蘑菇娃娃',
    petsRelated: '蘑菇',
    dollLimit: 5,
    statusLimit: 25,
    map: ['夢奇地31~40區'],
  },
  {
    id: 71,
    name: '摩登不倒翁',
    level: 35,
    base: '摩登不倒翁底座',
    item: '藤條 20 牛皮 20 樸實司瓦諾卡',
    doll: '樸實司瓦諾娃娃',
    petsRelated: '樸實司瓦諾',
    dollLimit: 7,
    statusLimit: 35,
    map: ['夢奇地41~50區'],
  },
  {
    id: 72,
    name: '可愛不倒翁',
    level: 55,
    base: '可愛不倒翁底座',
    item: '白楊木 20 鹿皮 20 化石獨角仙卡',
    doll: '化石獨角仙娃娃',
    petsRelated: '化石獨角仙',
    dollLimit: 9,
    statusLimit: 45,
    map: ['荷花池塘'],
  },
  {
    id: 73,
    name: '發條把手',
    level: 15,
    base: '把手模型',
    item: '柚木 10 犀牛皮 4 螢光蜻蜓卡',
    doll: '螢光蜻蜓娃娃',
    petsRelated: '螢光蜻蜓',
    dollLimit: 5,
    statusLimit: 25,
    map: ['罐頭地道B1'],
  },
  {
    id: 74,
    name: '方向盤',
    level: 35,
    base: '方向盤轉軸',
    item: '紅檜 10 鱷魚皮 6 正義司瓦諾卡',
    doll: '正義司瓦諾娃娃',
    petsRelated: '正義司瓦諾',
    dollLimit: 7,
    statusLimit: 35,
    map: ['夢奇地41~50區'],
  },
  {
    id: 75,
    name: '螺旋槳',
    level: 55,
    base: '螺旋槳轉軸',
    item: '紫杉 10 虎皮 8 恆星獨角仙卡',
    doll: '恆星獨角仙娃娃',
    petsRelated: '恆星獨角仙',
    dollLimit: 9,
    statusLimit: 45,
    map: ['夢奇地51~60區'],
  },
  {
    id: 76,
    name: '單眼望遠鏡',
    level: 15,
    base: '單眼鏡管',
    item: '青銅塊 5 鱷魚皮 3 黑洞獨角仙卡',
    doll: '黑洞獨角仙娃娃',
    petsRelated: '黑洞獨角仙',
    dollLimit: 5,
    statusLimit: 25,
    map: ['罐頭地道B2'],
  },
  {
    id: 77,
    name: '雙眼望遠鏡',
    level: 35,
    base: '雙眼鏡管',
    item: '銅塊 7 虎皮 5 闇夜蜻蜓卡',
    doll: '闇夜蜻蜓娃娃',
    petsRelated: '闇夜蜻蜓',
    dollLimit: 7,
    statusLimit: 35,
    map: ['拇指花園'],
  },
  {
    id: 78,
    name: '單眼相機',
    level: 55,
    base: '單眼鏡頭',
    item: '鐵塊 10 龍鱗 7 香菇卡',
    doll: '香菇娃娃',
    petsRelated: '香菇',
    dollLimit: 9,
    statusLimit: 45,
    map: ['夢奇地61~70區'],
  },
  {
    id: 79,
    name: '衝浪板',
    level: 25,
    base: '防水漆',
    item: 'K金 2 貂皮 5 土蜻蜓卡',
    doll: '土蜻蜓娃娃',
    petsRelated: '土蜻蜓',
    dollLimit: 6,
    statusLimit: 30,
    map: ['夢奇地51~60區'],
  },
  {
    id: 80,
    name: '風帆',
    level: 50,
    base: '風帆帆布',
    item: '鋼塊 2 犀牛皮 7 芒果布丁卡',
    doll: '芒果布丁娃娃',
    petsRelated: '芒果布丁',
    dollLimit: 8,
    statusLimit: 40,
    map: ['夢奇地71~80區'],
  },
  {
    id: 81,
    name: '帆船',
    level: 65,
    base: '帆船帆布',
    item: '鈦合金 2 龍鱗 7 暴走貓卡',
    doll: '暴走貓娃娃',
    petsRelated: '暴走貓',
    dollLimit: 10,
    statusLimit: 50,
    map: ['南貓咪森林', '魔幣寵'],
  },
  {
    id: 82,
    name: '小船',
    level: 25,
    base: '划船木槳',
    item: '柚木 12 貂皮 8 水蛙卡',
    doll: '水蛙娃娃',
    petsRelated: '水蛙',
    dollLimit: 6,
    statusLimit: 30,
    map: ['玫瑰湖', '青蛙沼澤'],
  },
  {
    id: 83,
    name: '快艇',
    level: 45,
    base: '快艇引擎',
    item: '鐵杉 7 鱷魚皮 10 發呆哥布林卡',
    doll: '發呆哥布林娃娃',
    petsRelated: '發呆哥布林',
    dollLimit: 8,
    statusLimit: 40,
    map: ['風之谷'],
  },
  {
    id: 84,
    name: '遊艇',
    level: 65,
    base: '遊艇引擎',
    item: '紅豆杉 3 虎皮 8 神秘寶箱卡',
    doll: '神秘寶箱娃娃',
    petsRelated: '神秘寶箱',
    dollLimit: 10,
    statusLimit: 50,
    map: ['沙漠地城B1'],
  },
  {
    id: 85,
    name: '卡車',
    level: 25,
    base: '卡車引擎',
    item: 'k金 6 鹿皮 12 木頭鷹卡',
    doll: '木頭鷹娃娃',
    petsRelated: '木頭鷹',
    dollLimit: 6,
    statusLimit: 30,
    map: ['史來姆迷宮3F', '白雪森林'],
  },
  {
    id: 86,
    name: '貨車',
    level: 45,
    base: '貨車引擎',
    item: '合金鋼 3 犀牛皮 11 叢林劍妖卡',
    doll: '叢林劍妖娃娃',
    petsRelated: '叢林劍妖',
    dollLimit: 8,
    statusLimit: 40,
    map: ['羊角村'],
  },
  {
    id: 87,
    name: '貨櫃車',
    level: 65,
    base: '貨櫃車引擎',
    item: '紅豆杉 3 鱷魚皮 12 藍天劍妖卡',
    doll: '藍天劍妖娃娃',
    petsRelated: '藍天劍妖',
    dollLimit: 10,
    statusLimit: 50,
    map: ['沙漠地城B1'],
  },
  {
    id: 88,
    name: '推土機',
    level: 25,
    base: '鏟刀',
    item: '柚木 12 牛皮 14 愛水虎卡',
    doll: '愛水虎娃娃',
    petsRelated: '愛水虎',
    dollLimit: 6,
    statusLimit: 30,
    map: ['西迷路森林'],
  },
  {
    id: 89,
    name: '挖土機',
    level: 45,
    base: '挖斗',
    item: '合金鋼 3 虎皮 8 阿波羅獅卡',
    doll: '阿波羅獅娃娃',
    petsRelated: '阿波羅獅',
    dollLimit: 8,
    statusLimit: 40,
    map: ['椰子島'],
  },
  {
    id: 90,
    name: '鑽孔機',
    level: 65,
    base: '鑽孔',
    item: '鎢合金 1 鱷魚皮 10 火焰劍妖卡',
    doll: '火焰劍妖娃娃',
    petsRelated: '火焰劍妖',
    dollLimit: 10,
    statusLimit: 50,
    map: ['狂風沙漠'],
  },
  {
    id: 91,
    name: '單翼螺旋槳飛機',
    level: 25,
    base: '單翼螺旋槳',
    item: '銀塊 8 鹿皮 10 金度鳥卡',
    doll: '金度鳥娃娃',
    petsRelated: '金度鳥',
    dollLimit: 6,
    statusLimit: 30,
    map: ['門之迷宮B1'],
  },
  {
    id: 92,
    name: '雙翼螺旋槳飛機',
    level: 45,
    base: '雙翼螺旋槳',
    item: '黑檀木 8 犀牛皮 12 石像劍妖卡',
    doll: '石像劍妖娃娃',
    petsRelated: '石像劍妖',
    dollLimit: 8,
    statusLimit: 40,
    map: ['風之谷'],
  },
  {
    id: 93,
    name: '零式戰鬥機',
    level: 65,
    base: '零式螺旋槳',
    item: '鎢合金 1 虎皮 10 紅龜卡',
    doll: '紅龜娃娃',
    petsRelated: '紅龜',
    dollLimit: 10,
    statusLimit: 50,
    map: ['吃人島'],
  },
  {
    id: 94,
    name: '蒸氣火車頭',
    level: 25,
    base: '燃煤鍋爐',
    item: '白楊木 20 羊皮 16 白貓卡',
    doll: '白貓娃娃',
    petsRelated: '白貓',
    dollLimit: 6,
    statusLimit: 30,
    map: ['門之迷宮B2'],
  },
  {
    id: 95,
    name: '電車',
    level: 45,
    base: '電動引擎',
    item: '白金塊 4 鱷魚皮 10 水鈴蘭卡',
    doll: '水鈴蘭娃娃',
    petsRelated: '水鈴蘭',
    dollLimit: 8,
    statusLimit: 40,
    map: ['莫名其妙花叢'],
  },
  {
    id: 96,
    name: '子彈列車',
    level: 65,
    base: '磁浮引擎',
    item: '紅豆杉 3 龍鱗 7 勇敢哥布林卡',
    doll: '勇敢哥布林娃娃',
    petsRelated: '勇敢哥布林',
    dollLimit: 10,
    statusLimit: 50,
    map: ['沙漠地城B1'],
  },
  {
    id: 97,
    name: '子彈',
    level: 25,
    base: '子彈火藥',
    item: '銀塊 8 牛皮 14 幽靈卡',
    doll: '幽靈娃娃',
    petsRelated: '幽靈',
    dollLimit: 6,
    statusLimit: 30,
    map: ['白雪森林', '沉睡湖'],
  },
  {
    id: 98,
    name: '飛彈',
    level: 45,
    base: '飛彈燃料',
    item: '合金鋼 3 龍鱗 7 木菊卡',
    doll: '木菊娃娃',
    petsRelated: '木菊',
    dollLimit: 8,
    statusLimit: 40,
    map: ['莫名其妙花叢'],
  },
  {
    id: 99,
    name: '火箭',
    level: 65,
    base: '火箭燃料',
    item: '鈦合金 6 貂皮 8 白銀劍妖卡',
    doll: '白銀劍妖娃娃',
    petsRelated: '白銀劍妖',
    dollLimit: 10,
    statusLimit: 50,
    map: ['沙漠地城B1'],
  },
  {
    id: 100,
    name: '手榴彈',
    level: 25,
    base: '傳統炸藥',
    item: '鐵塊 12 鹿皮 16 綿綿狗卡',
    doll: '綿綿狗娃娃',
    petsRelated: '綿綿狗',
    dollLimit: 6,
    statusLimit: 30,
    map: ['東迷路森林'],
  },
  {
    id: 101,
    name: '深水炸彈',
    level: 45,
    base: '黃色炸藥',
    item: '白金塊 4 鱷魚皮 10 抹茶麻糬卡',
    doll: '抹茶麻糬娃娃',
    petsRelated: '抹茶麻糬',
    dollLimit: 8,
    statusLimit: 40,
    map: ['鬱金香島'],
  },
  {
    id: 102,
    name: '原子彈',
    level: 65,
    base: '濃縮鈾',
    item: '鈦合金 2 虎皮 8 光烏賊卡',
    doll: '光烏賊娃娃',
    petsRelated: '光烏賊',
    dollLimit: 10,
    statusLimit: 50,
    map: ['吃人島'],
  },
  {
    id: 103,
    name: '裝甲車',
    level: 25,
    base: '裝甲車履帶',
    item: 'k金 6 牛皮 14 邪惡激鬥蛙卡',
    doll: '邪惡激鬥蛙娃娃',
    petsRelated: '邪惡激鬥蛙',
    dollLimit: 6,
    statusLimit: 30,
    map: ['神秘洞窟'],
  },
  {
    id: 104,
    name: '坦克車',
    level: 45,
    base: '坦克車履帶',
    item: '鐵杉 7 犀牛皮 14 微笑貓咪卡',
    doll: '微笑貓咪娃娃',
    petsRelated: '微笑貓咪',
    dollLimit: 8,
    statusLimit: 40,
    map: ['羅比特平原'],
  },
  {
    id: 105,
    name: '自走砲',
    level: 65,
    base: '自走砲履帶',
    item: '黑檀木 8 龍鱗 8 火鳥卡',
    doll: '火鳥娃娃',
    petsRelated: '火鳥',
    dollLimit: 10,
    statusLimit: 50,
    map: ['北貓咪森林'],
  },
];

export default allToy;
