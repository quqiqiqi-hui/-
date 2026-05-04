// 水族文化历法 - 主应用逻辑

// ==================== 数据管理 ====================
const DataManager = {
    // 初始化默认数据
    init() {
        if (!localStorage.getItem('shuiFestivals')) {
            const defaultFestivals = [
                { 
                    id: 1, 
                    name: '端节', 
                    month: 11, 
                    day: 1, 
                    desc: '水族最盛大的传统节日，相当于汉族的春节，庆祝丰收和新年',
                    origin: '端节起源于水族古代农耕文明，相传在水族迁徙途中，先祖为纪念丰收和祈求来年风调雨顺而设立。水历以九月为岁首，端节在水历年底至次年年初分批举行，历时 49 天，是世界上历时最长的年节。',
                    customs: '端节期间，水族人民会穿上盛装，举行祭祖仪式、赛马活动、对歌跳舞、品尝鱼包韭菜等传统美食。家家户户打扫庭院，张贴对联，燃放鞭炮，亲朋好友互相拜访祝福。',
                    legends: '传说远古时期，水族先祖在迁徙途中遭遇饥荒，一位名叫"端"的英雄带领族人开垦荒地、种植水稻，最终获得丰收。为纪念这位英雄，水族人民将丰收之日定为"端节"，世代传承至今。',
                    images: [],
                    color: '#EF4444',
                    tags: ['新年', '丰收', '祭祖', '赛马']
                },
                { 
                    id: 2, 
                    name: '卯节', 
                    month: 4, 
                    day: 5, 
                    desc: '青年男女对歌择偶的节日，又称"水族情人节"',
                    origin: '卯节源于水族古代青年男女自由恋爱的传统习俗。"卯"在水语中意为"唱歌"，节日期间青年男女聚集在山坡上对歌传情，寻找心仪的对象。',
                    customs: '卯节当天，未婚青年男女身着盛装，携带糯米饭、彩蛋等礼物，相约到山坡或河边对歌。通过对歌交流感情，若双方情投意合，便互赠信物定情。',
                    legends: '相传古时有一对相爱的青年男女，因家族反对无法结合，两人相约在四月五日对歌倾诉爱意，最终感动族人，成就美满姻缘。此后这一天便成为水族青年对歌择偶的传统节日。',
                    images: [],
                    color: '#EC4899',
                    tags: ['爱情', '对歌', '青年', '交友']
                },
                { 
                    id: 3, 
                    name: '苏宁喜节', 
                    month: 1, 
                    day: 13, 
                    desc: '祭祀祖先和祈求平安的传统节日',
                    origin: '苏宁喜节是水族重要的祭祀节日，"苏宁"在水语中意为"吃新米"，"喜"意为"祭祀"。节日旨在祭祀祖先、感谢神灵保佑，祈求村寨平安、人畜兴旺。',
                    customs: '节日期间，每户人家准备糯米、鸡肉、鱼肉等祭品，由族长或水书先生主持祭祀仪式。祭祀后全家共进团圆饭，晚上举行铜鼓舞、芦笙舞等庆祝活动。',
                    legends: '传说水族先祖迁徙途中，得到神灵指引找到安居之地并获得丰收。为感恩神灵和祖先的庇佑，水族人民设立苏宁喜节，世代祭祀不忘根本。',
                    images: [],
                    color: '#F59E0B',
                    tags: ['祭祀', '祖先', '平安', '团圆']
                },
                { 
                    id: 4, 
                    name: '敬霞节', 
                    month: 5, 
                    day: 6, 
                    desc: '祭祀水神，祈求风调雨顺、五谷丰登',
                    origin: '敬霞节是水族祭祀水神的传统节日。"霞"在水语中指水神，水族依水而居，认为水神掌管降雨和河流，直接影响农业收成和生活安康。',
                    customs: '节日当天，村民聚集在河边或井边，由水书先生主持祭水神仪式，献上鱼、糯米、酒等祭品。祭祀后举行划龙舟、捕鱼比赛等水上活动。',
                    legends: '相传古时大旱三年，水族先民虔诚祭祀水神，感动天神降下甘霖，解救万物。从此每年五月六日，水族人民都要举行敬霞节，感恩水神赐予生命之源。',
                    images: [],
                    color: '#3B82F6',
                    tags: ['水神', '祈雨', '龙舟', '丰收']
                },
                { 
                    id: 5, 
                    name: '借端', 
                    month: 10, 
                    day: 10, 
                    desc: '水族传统的庆丰收节日，预祝来年风调雨顺',
                    origin: '"借端"在水语中意为"过小年"，是水族人民在正式端节前的预热庆典。相传古代水族先民为了测试年节准备是否充分，提前举行小型庆典，逐渐演变为独立节日。',
                    customs: '借端期间，家家户户准备丰盛饭菜，邀请亲友聚餐，举行小型赛马和对歌活动。人们还会提前置办年货，为正式端节做准备。',
                    legends: '传说水族先祖在确定端节日期前，曾多次尝试不同时间举行庆典，最终发现十月十日最为吉利，便将此日定为"借端"，作为端节的预演。',
                    images: [],
                    color: '#F97316',
                    tags: ['小年', '丰收', '聚餐', '预热']
                },
                { 
                    id: 6, 
                    name: '借卯', 
                    month: 3, 
                    day: 3, 
                    desc: '青年男女踏青交友的春季节日',
                    origin: '"借卯"是卯节的前奏，意为"小卯节"。春季万物复苏，水族青年借此机会外出踏青、结识朋友，为正式卯节的对歌择偶做准备。',
                    customs: '借卯这天，青年男女结伴到郊外游玩，采集野花，制作花环佩戴。大家围坐一起聊天、对歌，增进彼此了解。',
                    legends: '相传古时一位水族姑娘在三月三日外出采花时遇见心上人，两人由此结缘。后人便将此日定为借卯，希望青年男女都能找到美好姻缘。',
                    images: [],
                    color: '#10B981',
                    tags: ['踏青', '春游', '交友', '花环']
                },
                { 
                    id: 7, 
                    name: '吃新节', 
                    month: 6, 
                    day: 15, 
                    desc: '品尝新收获稻谷的感恩节日',
                    origin: '吃新节是水族农耕文化的重要体现。当夏季新稻成熟时，水族人民采摘新谷煮饭，首先祭祀祖先和天地，然后全家品尝，表达对自然恩赐的感激之情。',
                    customs: '节日当天，农户收割少量新稻，脱壳后煮成新米饭。先供奉祖先和神灵，然后全家老小围坐品尝。席间长辈讲述农耕知识，教育晚辈珍惜粮食。',
                    legends: '传说水族迁徙到新家园后，第一年庄稼长势良好，收获时族长带领全族举行盛大祭祀，感谢天地祖先保佑。此后每年新谷成熟时都要举行吃新节。',
                    images: [],
                    color: '#84CC16',
                    tags: ['新米', '感恩', '农耕', '祭祀']
                },
                { 
                    id: 8, 
                    name: '拜树节', 
                    month: 2, 
                    day: 2, 
                    desc: '祭祀古树、祈求村寨平安的生态节日',
                    origin: '水族崇尚自然，认为古树是村寨的守护神。拜树节源于水族古老的树木崇拜，表达对自然的敬畏和对生态环境的保护意识。',
                    customs: '节日清晨，村民聚集在村寨的古树下，由水书先生主持祭祀仪式，献上糯米、酒水等祭品。众人绕树三圈祈福，然后在树下聚餐联谊。',
                    legends: '相传某水族村寨曾遭遇瘟疫，一位老人梦见古树显灵，告知用树叶煮水可治病。村民照做后果然痊愈，从此将古树奉为保护神，设立拜树节世代祭祀。',
                    images: [],
                    color: '#22C55E',
                    tags: ['古树', '生态', '自然', '祈福']
                },
                { 
                    id: 9, 
                    name: '迎春节', 
                    month: 0, 
                    day: 1, 
                    desc: '水族历法新年伊始的迎春庆典',
                    origin: '水族历法以正月为一年之始，迎春节是迎接新春、祈求全年吉祥如意的传统节日。这一天水族人民举行各种庆祝活动，期盼新的一年风调雨顺、五谷丰登。',
                    customs: '正月初一凌晨，家家户户燃放鞭炮迎接新春。人们穿上节日盛装，走亲访友互相拜年。村寨举行舞龙舞狮、踩高跷等传统表演，热闹非凡。',
                    legends: '传说水族先祖根据天文观测确定正月一日为岁首，这一天阳气初生、万物复苏。为庆祝新年到来，先祖设立迎春节，代代相传成为重要节日。',
                    images: [],
                    color: '#DC2626',
                    tags: ['新春', '拜年', '舞龙', '喜庆']
                },
                { 
                    id: 10, 
                    name: '祭祖节', 
                    month: 7, 
                    day: 15, 
                    desc: '缅怀祖先、传承家族记忆的重要节日',
                    origin: '水族重视家族传承，祭祖节是表达对祖先敬意和怀念的传统节日。相传水族先祖迁徙过程中历经艰辛，后人为铭记祖先功德，设立此节世代祭祀。',
                    customs: '节日当天，各家族在祠堂或祖坟前举行祭祀仪式，摆供品、烧香烛、诵读祭文。祭祀后全族聚餐，长辈讲述家族历史，增强后代认同感。',
                    legends: '传说水族有一位德高望重的祖先，临终前嘱咐子孙要团结互助、勤劳致富。后人为纪念这位祖先，在其忌日举行祭祀，逐渐演变为全族共同的祭祖节。',
                    images: [],
                    color: '#7C3AED',
                    tags: ['祖先', '祭祀', '家族', '传承']
                },
                { 
                    id: 11, 
                    name: '丰收节', 
                    month: 8, 
                    day: 20, 
                    desc: '庆祝秋季丰收、感谢天地恩赐的节日',
                    origin: '丰收节是水族农耕文化的集中体现。秋季作物收获完毕，水族人民举行盛大庆典，感谢天地神灵和祖先的庇佑，分享丰收的喜悦。',
                    customs: '节日期间，村寨举办丰收展览，展示各类农产品。举行歌舞表演、体育竞赛等活动。家家户户设宴款待亲友，共同庆祝丰收。',
                    legends: '相传古时水族地区连年灾荒，后来在一位智者的指导下改进耕作技术，终于获得大丰收。为纪念这一转折，水族人民设立丰收节，感恩自然馈赠。',
                    images: [],
                    color: '#EA580C',
                    tags: ['丰收', '展览', '歌舞', '感恩']
                },
                { 
                    id: 12, 
                    name: '送火神节', 
                    month: 9, 
                    day: 9, 
                    desc: '驱除火灾隐患、祈求村寨平安的民俗节日',
                    origin: '水族村寨多为木质建筑，防火至关重要。送火神节源于水族古老的火神崇拜，通过祭祀仪式祈求火神远离村寨，保佑平安。',
                    customs: '节日傍晚，村民手持火把聚集在村口，由水书先生主持送神仪式。随后将火把投入河中，象征送走火神。人们敲锣打鼓返回村寨，庆祝平安。',
                    legends: '传说某年水族村寨发生大火，损失惨重。一位水书先生梦见火神告知，只要诚心祭祀便会保佑平安。从此水族人民每年举行送火神节，祈求无灾无难。',
                    images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/1409329/pexels-photo-1409329.jpeg?auto=compress&cs=tinysrgb&w=1200'],
                    color: '#EF4444',
                    tags: ['火神', '平安', '驱灾', '祭祀']
                }
            ];
            localStorage.setItem('shuiFestivals', JSON.stringify(defaultFestivals));
        }

        if (!localStorage.getItem('shuiCulture')) {
            const defaultCulture = [
                {
                    id: 1,
                    title: '水族端节',
                    category: 'festival',
                    image: '',
                    content: '端节是水族最隆重的传统节日，在水历十二月至二月间举行。节日期间，水族人民会穿上盛装，举行祭祖、赛马、对歌、跳舞等丰富多彩的活动，庆祝丰收迎接新年。'
                },
                {
                    id: 2,
                    title: '水书文化',
                    category: 'art',
                    image: '',
                    content: '水书是水族古老的文字系统，被誉为"活着的象形文字"。水书先生世代相传，记录着水族的天文历法、宗教信仰、民俗习惯等珍贵文化知识。'
                },
                {
                    id: 3,
                    title: '马尾绣',
                    category: 'art',
                    image: '',
                    content: '马尾绣是水族独特的刺绣工艺，用马尾毛缠绕丝线后在布料上绣制图案。这项技艺已有千年历史，图案精美，色彩艳丽，是国家级非物质文化遗产。'
                },
                {
                    id: 4,
                    title: '水族鱼包韭菜',
                    category: 'food',
                    image: '',
                    content: '鱼包韭菜是水族传统名菜，将鱼肉与韭菜一起包裹蒸制而成。这道菜寓意年年有余、生机勃勃，是端节等重要节日必备的美食。'
                },
                {
                    id: 5,
                    title: '铜鼓舞',
                    category: 'art',
                    image: '',
                    content: '铜鼓舞是水族传统舞蹈，舞者围绕铜鼓翩翩起舞，动作刚劲有力，节奏明快。铜鼓在水族文化中象征着权力和财富，是重要的礼器。'
                },
                {
                    id: 6,
                    title: '水族婚俗',
                    category: 'custom',
                    image: '',
                    content: '水族婚姻习俗独特，有"抢婚"、"对歌择偶"等传统。婚礼仪式隆重，新娘要穿传统服饰，佩戴银饰，整个过程充满浓郁的民族特色。'
                }
            ];
            localStorage.setItem('shuiCulture', JSON.stringify(defaultCulture));
        }
    },

    getFestivals() {
        return JSON.parse(localStorage.getItem('shuiFestivals') || '[]');
    },

    saveFestivals(festivals) {
        localStorage.setItem('shuiFestivals', JSON.stringify(festivals));
    },

    getCulture() {
        return JSON.parse(localStorage.getItem('shuiCulture') || '[]');
    },

    saveCulture(culture) {
        localStorage.setItem('shuiCulture', JSON.stringify(culture));
    }
};

// ==================== 历法计算 ====================
const CalendarCalculator = {
    // 水族历法起始年份（传说纪元）
    SHUI_EPOCH: 1644,

    // 生肖数组
    zodiacs: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],

    // 月份名称
    monthNames: ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'],

    // 天干
    heavenlyStems: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],

    // 地支
    earthlyBranches: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],

    // 二十四节气
    solarTerms: ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
                 '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'],

    // 每日宜忌数据（简化版，按日期循环）
    dailyYiJi: [
        { yi: ['祭祀', '祈福', '求嗣'], ji: ['开市', '动土', '安葬'] },
        { yi: ['嫁娶', '出行', '订盟'], ji: ['入宅', '移徙', '破土'] },
        { yi: ['开市', '交易', '立券'], ji: ['嫁娶', '安床', '探病'] },
        { yi: ['动土', '修造', '安门'], ji: ['出行', '祈福', '纳采'] },
        { yi: ['纳采', '订盟', '嫁娶'], ji: ['开市', '安葬', '伐木'] },
        { yi: ['祈福', '斋醮', '塑绘'], ji: ['结婚', '入宅', '安床'] },
        { yi: ['出行', '搬家', '入宅'], ji: ['动土', '破土', '安葬'] },
        { yi: ['结婚', '订婚', '领证'], ji: ['开工', '开业', '动土'] },
        { yi: ['开工', '开业', '交易'], ji: ['结婚', '搬家', '入宅'] },
        { yi: ['动土', '修造', '装修'], ji: ['出行', '安葬', '祈福'] },
        { yi: ['祭祀', '沐浴', '扫舍'], ji: ['嫁娶', '开市', '安床'] },
        { yi: ['破土', '启钻', '安葬'], ji: ['结婚', '出行', '入宅'] },
        { yi: ['解除', '沐浴', '整手足甲'], ji: ['开市', '动土', '嫁娶'] },
        { yi: ['求医', '治病', '破屋'], ji: ['开市', '出行', '安床'] },
        { yi: ['馀事勿取'], ji: ['诸事不宜'] },
        { yi: ['诸事不宜'], ji: ['馀事勿取'] },
        { yi: ['祭祀', '祈福', '求嗣'], ji: ['开市', '动土', '安葬'] },
        { yi: ['嫁娶', '出行', '订盟'], ji: ['入宅', '移徙', '破土'] },
        { yi: ['开市', '交易', '立券'], ji: ['嫁娶', '安床', '探病'] },
        { yi: ['动土', '修造', '安门'], ji: ['出行', '祈福', '纳采'] },
        { yi: ['纳采', '订盟', '嫁娶'], ji: ['开市', '安葬', '伐木'] },
        { yi: ['祈福', '斋醮', '塑绘'], ji: ['结婚', '入宅', '安床'] },
        { yi: ['出行', '搬家', '入宅'], ji: ['动土', '破土', '安葬'] },
        { yi: ['结婚', '订婚', '领证'], ji: ['开工', '开业', '动土'] },
        { yi: ['开工', '开业', '交易'], ji: ['结婚', '搬家', '入宅'] },
        { yi: ['动土', '修造', '装修'], ji: ['出行', '安葬', '祈福'] },
        { yi: ['祭祀', '沐浴', '扫舍'], ji: ['嫁娶', '开市', '安床'] },
        { yi: ['破土', '启钻', '安葬'], ji: ['结婚', '出行', '入宅'] },
        { yi: ['解除', '沐浴', '整手足甲'], ji: ['开市', '出行', '安床'] },
        { yi: ['求医', '治病', '破屋'], ji: ['开市', '出行', '安床'] }
    ],

    // 转换为水族年份
    toShuiYear(gregorianYear) {
        return gregorianYear - this.SHUI_EPOCH + 1;
    },

    // 获取生肖
    getZodiac(year) {
        return this.zodiacs[(year - 4) % 12];
    },

    // 获取天干地支纪年
    getGanZhiYear(year) {
        const stemIndex = (year - 4) % 10;
        const branchIndex = (year - 4) % 12;
        return `${this.heavenlyStems[stemIndex]}${this.earthlyBranches[branchIndex]}`;
    },

    // 生成祝福语
    generateBlessing(shuiYear, zodiac) {
        const blessings = [
            `水历${shuiYear}年${zodiac}年，愿您如水般灵动，生活顺遂安康！`,
            `${zodiac}年大吉，水族文化保佑您阖家幸福，万事如意！`,
            `水历新岁，${zodiac}呈祥，祝您事业如鱼得水，家庭和睦美满！`,
            `传承水族智慧，${zodiac}年行大运，平安喜乐常相伴！`
        ];
        return blessings[Math.floor(Math.random() * blessings.length)];
    },

    // 获取节气（简化版，根据月份估算）
    getSolarTerm(month, day) {
        const termIndex = Math.floor((month * 2 + (day >= 15 ? 1 : 0)) % 24);
        return this.solarTerms[termIndex];
    },

    // 获取每日宜忌
    getYiJi(day) {
        return this.dailyYiJi[(day - 1) % this.dailyYiJi.length];
    },

    // 水族历日辰（简化版，用地支表示）
    getShuiDayChen(day) {
        return this.earthlyBranches[(day - 1) % 12];
    },

    // 公历转水族历（完整信息）
    convert(gregorianDate) {
        const date = new Date(gregorianDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const shuiYear = this.toShuiYear(year);
        const shuiMonth = this.monthNames[month];
        const shuiDay = this.getLunarDay(day);
        const zodiac = this.getZodiac(year);
        const ganZhi = this.getGanZhiYear(year);
        const shuiChen = this.getShuiDayChen(day);
        const solarTerm = this.getSolarTerm(month, day);
        const yiJi = this.getYiJi(day);
        const blessing = this.generateBlessing(shuiYear, zodiac);

        return {
            shuiYear,
            shuiMonth,
            shuiDay,
            zodiac,
            ganZhi,
            shuiChen,
            solarTerm,
            yiJi,
            blessing,
            gregorianDate: `${year}年${month + 1}月${day}日`,
            weekDay: this.getWeekDay(date.getDay())
        };
    },

    // 获取星期
    getWeekDay(day) {
        const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        return weeks[day];
    },

    // 简化的农历日期计算（实际应使用专业库）
    getLunarDay(day) {
        const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                          '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                          '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
        return lunarDays[Math.min(day - 1, 29)];
    },

    // 获取完整日期信息（用于日历点击展示）
    getFullDateInfo(year, month, day) {
        const date = new Date(year, month, day);
        const shuiYear = this.toShuiYear(year);
        const shuiMonth = this.monthNames[month];
        const shuiDay = this.getLunarDay(day);
        const zodiac = this.getZodiac(year);
        const ganZhi = this.getGanZhiYear(year);
        const shuiChen = this.getShuiDayChen(day);
        const solarTerm = this.getSolarTerm(month, day);
        const yiJi = this.getYiJi(day);
        const weekDay = this.getWeekDay(date.getDay());

        return {
            gregorian: `${year}年${month + 1}月${day}日`,
            weekDay,
            shuiYear: `水历${shuiYear}年`,
            shuiMonth,
            shuiDay,
            shuiChen,
            zodiac,
            ganZhi: `${ganZhi}年`,
            solarTerm,
            yi: yiJi.yi.join('、'),
            ji: yiJi.ji.join('、')
        };
    }
};

// ==================== 日历渲染 ====================
let currentYear = 2024;
let currentMonth = 0;

function renderCalendar(year, month) {
    const grid = document.getElementById('calendar-grid');
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const festivals = DataManager.getFestivals();

    let html = '';
    
    // 填充空白
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="p-2"></div>';
    }

    // 填充日期
    for (let day = 1; day <= daysInMonth; day++) {
        const dayFestivals = festivals.filter(f => f.month === month && f.day === day);
        const hasFestival = dayFestivals.length > 0;
        const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        
        let className = 'calendar-day p-3 rounded-xl text-center cursor-pointer transition-all duration-200 bg-white hover:bg-blue-50 relative';
        if (hasFestival && !isToday) {
            className = 'calendar-day p-3 rounded-xl text-center cursor-pointer transition-all duration-200 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-300';
        }
        if (isToday) {
            className = 'calendar-day p-3 rounded-xl text-center cursor-pointer transition-all duration-200 water-flow text-white font-bold shadow-lg';
        }

        // 生成节日标记点
        let festivalDots = '';
        if (hasFestival) {
            festivalDots = '<div class="flex justify-center gap-1 mt-1">';
            dayFestivals.forEach(f => {
                festivalDots += `<div class="w-2 h-2 rounded-full" style="background-color: ${f.color || '#EF4444'}" title="${f.name}"></div>`;
            });
            festivalDots += '</div>';
        }

        html += `<div class="${className}" onclick="showDayDetail(${year}, ${month}, ${day})">
            <div class="text-lg font-bold">${day}</div>
            ${festivalDots}
        </div>`;
    }

    grid.innerHTML = html;
    renderFestivalInfo(month);
}

function renderFestivalInfo(month) {
    const festivals = DataManager.getFestivals();
    const monthFestivals = festivals.filter(f => f.month === month);
    const container = document.getElementById('festival-info');

    if (monthFestivals.length === 0) {
        container.innerHTML = '<p class="text-gray-500">本月暂无重要节日</p>';
        return;
    }

    container.innerHTML = monthFestivals.map(f => `
        <div class="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer" onclick="showFestivalDetailModalById(${f.id})">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, ${f.color || '#EF4444'}, ${f.color || '#EF4444'}80)">
                <i class="fas fa-gift text-white text-lg"></i>
            </div>
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-text">${f.name}</h4>
                    <div class="flex gap-1">
                        ${(f.tags || []).slice(0, 3).map(tag => `<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
                <p class="text-sm text-gray-600 mt-1 line-clamp-2">${f.desc}</p>
                <div class="flex items-center justify-between mt-2">
                    <p class="text-xs" style="color: ${f.color || '#EF4444'}"><i class="fas fa-calendar mr-1"></i>${CalendarCalculator.monthNames[f.month]}${f.day}日</p>
                    <span class="text-xs text-gray-400"><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

function changeYear(delta) {
    currentYear += delta;
    document.getElementById('current-year').textContent = `${currentYear}年`;
    renderCalendar(currentYear, currentMonth);
}

function selectMonth(month) {
    currentMonth = month;
    document.querySelectorAll('.month-btn').forEach((btn, index) => {
        if (index === month) {
            btn.classList.remove('bg-white', 'hover:bg-blue-100');
            btn.classList.add('bg-blue-100');
        } else {
            btn.classList.add('bg-white', 'hover:bg-blue-100');
            btn.classList.remove('bg-blue-100');
        }
    });
    renderCalendar(currentYear, month);
}

function showDayDetail(year, month, day) {
    const festivals = DataManager.getFestivals();
    const festival = festivals.find(f => f.month === month && f.day === day);
    
    if (festival) {
        showFestivalDetailModal(festival);
    } else {
        const dateInfo = CalendarCalculator.getFullDateInfo(year, month, day);
        showEnhancedDayInfoModal(dateInfo);
    }
}

// ==================== 节日详情弹窗 ====================
function showFestivalDetailModalById(id) {
    const festivals = DataManager.getFestivals();
    const festival = festivals.find(f => f.id === id);
    if (festival) {
        showFestivalDetailModal(festival);
    }
}

function showFestivalDetailModal(festival) {
    const modal = document.getElementById('festival-detail-modal');
    const content = document.getElementById('festival-detail-content');
    
    const imagesHtml = festival.images && festival.images.length > 0 
        ? festival.images.map(img => `<div class="w-full h-48 bg-cover bg-center rounded-xl" style="background-image: url('${img}')"></div>`).join('')
        : '<div class="w-full h-48 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center"><i class="fas fa-image text-4xl text-gray-400"></i></div>';
    
    const color = festival.color || '#EF4444';
    const tags = festival.tags || [];
    
    content.innerHTML = `
        <div class="space-y-6">
            <!-- 头部封面 -->
            <div class="relative">
                ${festival.images && festival.images.length > 0 ? `
                    <div class="w-full h-56 bg-cover bg-center rounded-2xl" style="background-image: url('${festival.images[0]}')"></div>
                ` : `
                    <div class="w-full h-56 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, ${color}, ${color}80)">
                        <i class="fas fa-gift text-white text-6xl opacity-50"></i>
                    </div>
                `}
                <div class="absolute -bottom-4 left-6 flex items-end">
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style="background: ${color}">
                        <i class="fas fa-gift text-white text-2xl"></i>
                    </div>
                    <div class="ml-4 mb-1">
                        <h3 class="text-2xl font-bold text-text drop-shadow-sm">${festival.name}</h3>
                        <p class="text-sm" style="color: ${color}"><i class="fas fa-calendar mr-1"></i>${CalendarCalculator.monthNames[festival.month]}${festival.day}日</p>
                    </div>
                </div>
            </div>
            
            <!-- 标签 -->
            ${tags.length > 0 ? `
            <div class="flex flex-wrap gap-2 pt-6">
                ${tags.map(tag => `<span class="px-3 py-1 rounded-full text-sm font-medium" style="background: ${color}20; color: ${color}">${tag}</span>`).join('')}
            </div>
            ` : ''}
            
            <!-- 简介 -->
            <div class="p-5 rounded-2xl" style="background: ${color}15">
                <p class="text-gray-700 leading-relaxed">${festival.desc}</p>
            </div>
            
            <!-- 节日起源 -->
            <div>
                <h4 class="text-lg font-bold text-text mb-3 flex items-center">
                    <i class="fas fa-history mr-2" style="color: ${color}"></i>节日起源
                </h4>
                <div class="p-4 bg-gray-50 rounded-xl">
                    <p class="text-gray-600 leading-relaxed">${festival.origin || '暂无详细信息'}</p>
                </div>
            </div>
            
            <!-- 传统习俗 -->
            <div>
                <h4 class="text-lg font-bold text-text mb-3 flex items-center">
                    <i class="fas fa-users mr-2" style="color: ${color}"></i>传统习俗
                </h4>
                <div class="p-4 bg-gray-50 rounded-xl">
                    <p class="text-gray-600 leading-relaxed">${festival.customs || '暂无详细信息'}</p>
                </div>
            </div>
            
            <!-- 传说故事 -->
            <div>
                <h4 class="text-lg font-bold text-text mb-3 flex items-center">
                    <i class="fas fa-book-open mr-2" style="color: ${color}"></i>传说故事
                </h4>
                <div class="p-4 bg-gray-50 rounded-xl">
                    <p class="text-gray-600 leading-relaxed">${festival.legends || '暂无详细信息'}</p>
                </div>
            </div>
            
            <!-- 节日图片 -->
            ${festival.images && festival.images.length > 1 ? `
            <div>
                <h4 class="text-lg font-bold text-text mb-3 flex items-center">
                    <i class="fas fa-images mr-2" style="color: ${color}"></i>节日图集
                </h4>
                <div class="grid grid-cols-2 gap-3">
                    ${festival.images.slice(1).map(img => `
                        <div class="aspect-video bg-cover bg-center rounded-xl cursor-pointer hover:opacity-90 transition-all" style="background-image: url('${img}')" onclick="window.open('${img}', '_blank')"></div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function showEnhancedDayInfoModal(dateInfo) {
    const modal = document.getElementById('day-info-modal');
    
    const content = `
        <div class="space-y-4">
            <!-- 公历日期 -->
            <div class="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div class="flex items-center space-x-3 mb-3">
                    <i class="fas fa-calendar-alt text-primary text-xl"></i>
                    <span class="text-gray-600">公历日期</span>
                </div>
                <p class="text-xl font-bold text-text ml-8">${dateInfo.gregorian}</p>
                <p class="text-sm text-gray-500 ml-8 mt-1">${dateInfo.weekDay}</p>
            </div>
            
            <!-- 水族历法 -->
            <div class="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <div class="flex items-center space-x-3 mb-3">
                    <i class="fas fa-water text-cta text-xl"></i>
                    <span class="text-gray-600">水族历法</span>
                </div>
                <div class="ml-8 space-y-2">
                    <p class="text-lg font-bold text-text">${dateInfo.shuiYear} ${dateInfo.shuiMonth} ${dateInfo.shuiDay}</p>
                    <p class="text-sm text-gray-600">日辰：${dateInfo.shuiChen}日 · 生肖：${dateInfo.zodiac}</p>
                </div>
            </div>
            
            <!-- 干支纪年 -->
            <div class="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                <div class="flex items-center space-x-3 mb-3">
                    <i class="fas fa-book text-green-600 text-xl"></i>
                    <span class="text-gray-600">干支纪年</span>
                </div>
                <p class="text-xl font-bold text-text ml-8">${dateInfo.ganZhi}</p>
            </div>
            
            <!-- 节气与宜忌 -->
            <div class="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                <div class="flex items-center space-x-3 mb-3">
                    <i class="fas fa-sun text-yellow-600 text-xl"></i>
                    <span class="text-gray-600">节气时令</span>
                </div>
                <div class="ml-8 space-y-2">
                    <p class="text-lg font-bold text-text">节气：${dateInfo.solarTerm}</p>
                    <div class="grid grid-cols-2 gap-3 mt-3">
                        <div class="bg-green-100 p-2 rounded-lg">
                            <p class="text-xs text-green-700 font-bold mb-1"><i class="fas fa-check-circle mr-1"></i>宜</p>
                            <p class="text-sm text-gray-700">${dateInfo.yi || '无'}</p>
                        </div>
                        <div class="bg-red-100 p-2 rounded-lg">
                            <p class="text-xs text-red-700 font-bold mb-1"><i class="fas fa-times-circle mr-1"></i>忌</p>
                            <p class="text-sm text-gray-700">${dateInfo.ji || '无'}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="pt-4">
                <p class="text-center text-gray-500 text-sm">点击其他日期查看详情，或关闭此窗口</p>
            </div>
        </div>
    `;
    
    document.getElementById('day-info-modal').querySelector('.glass').innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-text">日期详情</h3>
            <button onclick="closeDayInfoModal()" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all flex items-center justify-center">
                <i class="fas fa-times text-gray-600"></i>
            </button>
        </div>
        ${content}
    `;
    
    modal.classList.remove('hidden');
}

// 保留原函数兼容性
function showDayInfoModal(year, month, day, lunarDay) {
    const dateInfo = CalendarCalculator.getFullDateInfo(year, month, day);
    showEnhancedDayInfoModal(dateInfo);
}

function closeFestivalDetailModal() {
    document.getElementById('festival-detail-modal').classList.add('hidden');
}

function closeDayInfoModal() {
    document.getElementById('day-info-modal').classList.add('hidden');
}

// ==================== 文化内容渲染 ====================
function renderCulture(filter = 'all') {
    const culture = DataManager.getCulture();
    const container = document.getElementById('culture-grid');
    
    const filtered = filter === 'all' ? culture : culture.filter(c => c.category === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">暂无相关内容</div>';
        return;
    }

    container.innerHTML = filtered.map(c => `
        <div class="cultural-card glass rounded-2xl overflow-hidden shadow-lg">
            <div class="h-48 bg-cover bg-center" style="background-image: url('${c.image || 'https://via.placeholder.com/400x300?text=水族文化'}')"></div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-lg font-bold text-text">${c.title}</h3>
                    <span class="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full">${getCategoryName(c.category)}</span>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">${c.content}</p>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const names = {
        festival: '节日庆典',
        custom: '民俗习惯',
        art: '传统艺术',
        food: '特色美食'
    };
    return names[category] || category;
}

function filterCulture(category) {
    document.querySelectorAll('.culture-filter').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-white', 'hover:bg-blue-100');
    });
    event.target.classList.remove('bg-white', 'hover:bg-blue-100');
    event.target.classList.add('bg-blue-600', 'text-white');
    renderCulture(category);
}

// ==================== 互动体验 ====================
function convertCalendar() {
    const dateInput = document.getElementById('gregorian-date');
    const date = dateInput.value;

    if (!date) {
        alert('请选择您的生日日期');
        return;
    }

    const result = CalendarCalculator.convert(date);
    
    document.getElementById('shui-year').textContent = `水历${result.shuiYear}年`;
    document.getElementById('shui-month').textContent = result.shuiMonth;
    document.getElementById('shui-day').textContent = result.shuiDay;
    document.getElementById('shui-zodiac').textContent = result.zodiac;
    document.getElementById('shui-blessing').textContent = result.blessing;

    document.getElementById('conversion-result').classList.remove('hidden');

    // 更新海报
    document.getElementById('poster-date').textContent = `${result.gregorianDate} → 水历${result.shuiYear}年 ${result.shuiMonth} ${result.shuiDay}`;
    document.getElementById('poster-blessing').textContent = result.blessing;
    document.getElementById('poster-preview').classList.remove('hidden');
}

function downloadPoster() {
    const posterElement = document.querySelector('#poster-preview .water-flow');
    
    if (!posterElement) {
        alert('海报未生成，请先进行历法转换');
        return;
    }

    // 显示加载状态
    const originalText = event.target.innerHTML;
    event.target.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>生成中...';
    event.target.disabled = true;

    // 使用 html2canvas 生成图片
    html2canvas(posterElement, {
        scale: 2, // 提高分辨率
        backgroundColor: null,
        useCORS: true, // 允许跨域图片
        logging: false,
        width: posterElement.offsetWidth,
        height: posterElement.offsetHeight
    }).then(canvas => {
        // 转换为 blob
        canvas.toBlob(blob => {
            if (!blob) {
                alert('海报生成失败，请重试');
                resetButton();
                return;
            }

            // 获取当前日期信息用于文件名
            const dateInput = document.getElementById('gregorian-date').value;
            const date = new Date(dateInput);
            const fileName = `水族历法祝福_${date.getFullYear()}${date.getMonth() + 1}月${date.getDate()}日.png`;

            // 创建下载链接
            const link = document.createElement('a');
            link.download = fileName;
            link.href = URL.createObjectURL(blob);
            link.click();
            
            // 清理 URL
            setTimeout(() => {
                URL.revokeObjectURL(link.href);
            }, 100);

            resetButton();
        }, 'image/png');
    }).catch(err => {
        console.error('海报生成失败:', err);
        alert('海报生成失败，请重试');
        resetButton();
    });

    function resetButton() {
        event.target.innerHTML = originalText;
        event.target.disabled = false;
    }
}

// ==================== 管理后台 ====================
function renderFestivalList() {
    const festivals = DataManager.getFestivals();
    const container = document.getElementById('festival-list');

    if (festivals.length === 0) {
        container.innerHTML = '<div class="text-center py-8 text-gray-500">暂无节日数据</div>';
        return;
    }

    container.innerHTML = festivals.map(f => `
        <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
            <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-gift text-orange-500"></i>
                </div>
                <div>
                    <h4 class="font-bold text-text">${f.name}</h4>
                    <p class="text-sm text-gray-600">${CalendarCalculator.monthNames[f.month]}${f.day}日</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button onclick="editFestival(${f.id})" class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-primary rounded-lg cursor-pointer transition-all">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteFestival(${f.id})" class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-500 rounded-lg cursor-pointer transition-all">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderCultureList() {
    const culture = DataManager.getCulture();
    const container = document.getElementById('culture-list');

    if (culture.length === 0) {
        container.innerHTML = '<div class="text-center py-8 text-gray-500">暂无文化条目</div>';
        return;
    }

    container.innerHTML = culture.map(c => `
        <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
            <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-book text-primary"></i>
                </div>
                <div>
                    <h4 class="font-bold text-text">${c.title}</h4>
                    <p class="text-sm text-gray-600">${getCategoryName(c.category)}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button onclick="editCulture(${c.id})" class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-primary rounded-lg cursor-pointer transition-all">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteCulture(${c.id})" class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-500 rounded-lg cursor-pointer transition-all">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(btn => {
        btn.classList.remove('tab-active', 'bg-gray-100');
        btn.classList.add('hover:bg-gray-100');
    });
    document.getElementById(`admin-${tab}`).classList.add('tab-active');
    document.getElementById(`admin-${tab}`).classList.remove('hover:bg-gray-100');

    document.querySelectorAll('.admin-panel').forEach(panel => panel.classList.add('hidden'));
    document.getElementById(`admin-${tab}-panel`).classList.remove('hidden');
}

let editingFestivalId = null;

function showAddFestivalModal() {
    editingFestivalId = null;
    document.getElementById('festival-form').reset();
    document.getElementById('festival-modal-title').textContent = '添加新节日';
    document.getElementById('add-festival-modal').classList.remove('hidden');
}

function closeAddFestivalModal() {
    document.getElementById('add-festival-modal').classList.add('hidden');
    editingFestivalId = null;
}

function addFestival(event) {
    event.preventDefault();
    const festivals = DataManager.getFestivals();
    
    const festivalData = {
        name: document.getElementById('festival-name').value,
        month: parseInt(document.getElementById('festival-month').value),
        day: parseInt(document.getElementById('festival-day').value),
        desc: document.getElementById('festival-desc').value,
        origin: document.getElementById('festival-origin').value,
        customs: document.getElementById('festival-customs').value,
        legends: document.getElementById('festival-legends').value,
        images: document.getElementById('festival-images').value.split(',').map(url => url.trim()).filter(url => url)
    };
    
    if (editingFestivalId) {
        const index = festivals.findIndex(f => f.id === editingFestivalId);
        if (index !== -1) {
            festivals[index] = { ...festivals[index], ...festivalData };
        }
    } else {
        festivalData.id = Date.now();
        festivals.push(festivalData);
    }
    
    DataManager.saveFestivals(festivals);
    closeAddFestivalModal();
    renderFestivalList();
    renderCalendar(currentYear, currentMonth);
    alert(editingFestivalId ? '节日更新成功！' : '节日添加成功！');
}

function editFestival(id) {
    const festivals = DataManager.getFestivals();
    const festival = festivals.find(f => f.id === id);
    
    if (!festival) return;
    
    editingFestivalId = id;
    document.getElementById('festival-modal-title').textContent = '编辑节日';
    document.getElementById('festival-name').value = festival.name;
    document.getElementById('festival-month').value = festival.month;
    document.getElementById('festival-day').value = festival.day;
    document.getElementById('festival-desc').value = festival.desc || '';
    document.getElementById('festival-origin').value = festival.origin || '';
    document.getElementById('festival-customs').value = festival.customs || '';
    document.getElementById('festival-legends').value = festival.legends || '';
    document.getElementById('festival-images').value = festival.images ? festival.images.join(', ') : '';
    
    document.getElementById('add-festival-modal').classList.remove('hidden');
}

function deleteFestival(id) {
    if (confirm('确定要删除这个节日吗？')) {
        const festivals = DataManager.getFestivals().filter(f => f.id !== id);
        DataManager.saveFestivals(festivals);
        renderFestivalList();
        renderCalendar(currentYear, currentMonth);
    }
}



function showAddCultureModal() {
    document.getElementById('add-culture-modal').classList.remove('hidden');
}

function closeAddCultureModal() {
    document.getElementById('add-culture-modal').classList.add('hidden');
    document.getElementById('culture-title').value = '';
    document.getElementById('culture-content').value = '';
}

function addCulture(event) {
    event.preventDefault();
    const culture = DataManager.getCulture();
    const newCulture = {
        id: Date.now(),
        title: document.getElementById('culture-title').value,
        category: document.getElementById('culture-category').value,
        image: document.getElementById('culture-image').value,
        content: document.getElementById('culture-content').value
    };
    culture.push(newCulture);
    DataManager.saveCulture(culture);
    closeAddCultureModal();
    renderCultureList();
    renderCulture();
    alert('文化条目添加成功！');
}

function deleteCulture(id) {
    if (confirm('确定要删除这个条目吗？')) {
        const culture = DataManager.getCulture().filter(c => c.id !== id);
        DataManager.saveCulture(culture);
        renderCultureList();
        renderCulture();
    }
}

function editCulture(id) {
    alert('编辑功能演示：在实际应用中，这里会打开编辑表单预填数据。');
}

// ==================== 页面切换 ====================
function switchTab(tab) {
    // 检查管理后台权限
    if (tab === 'admin' && !AuthManager.isAdmin()) {
        showToast('⚠️ 仅限管理员访问管理后台', 'error');
        return;
    }

    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.getElementById(`${tab}-section`).classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active');
        btn.classList.add('hover:bg-blue-100');
    });
    document.getElementById(`tab-${tab}`).classList.add('tab-active');
    document.getElementById(`tab-${tab}`).classList.remove('hover:bg-blue-100');

    // 刷新对应内容
    if (tab === 'calendar') {
        renderCalendar(currentYear, currentMonth);
    } else if (tab === 'culture') {
        renderCulture();
    } else if (tab === 'admin') {
        renderFestivalList();
        renderCultureList();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    DataManager.init();
    renderCalendar(currentYear, currentMonth);
    renderCulture();
    
    // 设置默认日期为今天
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('gregorian-date').value = today;
    
    // 更新移动端登录状态
    if (typeof updateMobileLoginStatus === 'function') {
        updateMobileLoginStatus();
    }
});