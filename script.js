const images = [
        { src: './images/2025-10-26.jpg', name: '北卡罗来纳州的南瓜农场, 美国 (© Matthew H Irvin/Getty Images)' },
        { src: './images/2025-10-25.jpg', name: '马蒂莫阿帕沼泽保护区泥炭地鸟瞰图, 芬兰 (© romikatarina/Shutterstock)' },
        { src: './images/2025-10-24.jpg', name: '玛丽皇后号邮轮的夜景, 长滩, 加利福尼亚州, 美国 (© Kit Leong/Shutterstock)' },
        { src: './images/2025-10-23.jpg', name: '雪豹和她的幼崽, 斯皮提谷, 寒冷沙漠生物圈保护区, 印度 (© Oriol Alamany/naturepl.com)' },
        { src: './images/2025-10-22.jpg', name: '贝洛格拉齐克石林，保加利亚 (© EvaL Miko/Shutterstock)' },
        { src: './images/2025-10-21.jpg', name: '哥斯达黎加的厚嘴巨嘴鸟 (© Juan Carlos Vindas/Getty Images)' },
        { src: './images/2025-10-20.jpg', name: '霍氏树懒，厄瓜多尔 (© Murray Cooper/Minden Pictures)' },
        { src: './images/2025-10-19.jpg', name: '即将收获的苹果，明尼苏达州，美国 (© Tammi Mild/Getty Images)' },
        { src: './images/2025-10-18.jpg', name: '西尔布利山的新石器时代遗址，蒂尔斯黑德，威尔特郡，英国 (© dbstockphotoa/Getty Images)' },
        { src: './images/2025-10-17.jpg', name: '罗克河瀑布，上半岛，密歇根州，美国 (© Matt Anderson Photography/Getty Images)' },
        { src: './images/2025-10-16.jpg', name: '欧亚猞猁，西伯利亚 (© Mario Plechaty Photograph/Shutterstock)' },
        { src: './images/2025-10-15.jpg', name: '紫蜡蘑，西贝克，华盛顿州，美国 (© Danita Delimont/Shutterstock)' },
        { src: './images/2025-10-14.jpg', name: '伊亚镇，圣托里尼岛，希腊 (© f9photos/Getty Images)' },
        { src: './images/2025-10-13.jpg', name: '温巴赫峡谷瀑布，巴伐利亚州，德国 (© EyeEm Mobile GmbH/Getty Images)' },
        { src: './images/2025-10-12.jpg', name: '萨拉纳克湖村，阿迪朗达克山脉，纽约州，美国 (© DenisTangneyJr/Getty Images)' },
        { src: './images/2025-10-11.jpg', name: '林鸳鸯，美国 (© ps50ace/iStock/Getty Images)' },
        { src: './images/2025-10-10.jpg', name: '莫努里基岛周边的珊瑚礁，玛玛努卡群岛，斐济 (© David Wall/SuperStock)' },
        { src: './images/2025-10-09.jpg', name: '‌詹姆斯·韦伯太空望远镜观测的创生之柱 (© NASA)' },
        { src: './images/2025-10-08.jpg', name: '白日章鱼, 毛伊岛, 夏威夷, 美国 (© Dave Fleetham/plainpicture)' },
        { src: './images/2025-10-07.jpg', name: '里奇韦附近斯内弗尔斯山脚下的秋色, 科罗拉多州, 美国 (© Grant Ordelheide/TANDEM Stills + Motion)' },
        { src: './images/2025-10-06.jpg', name: '安顺桥中秋灯展，成都，中国 (© Philippe LEJEANVRE/Getty Images)' },
        { src: './images/2025-10-05.jpg', name: '中欧森林里的鬼鸮 (© Ondrej Prosicky/Alamy)' },
        { src: './images/2025-10-04.jpg', name: '从SpaceX载人龙飞船“奋进号”视角看到的国际空间站主太阳能电池阵列 (© NASA)' },
        { src: './images/2025-10-03.jpg', name: '布里特尔峡谷里生长的帚石楠花, 斯凯岛, 苏格兰 (© Adam Mowery/TANDEM Stills + Motion)' },
        { src: './images/2025-10-02.jpg', name: '蛇河上的牛轭湖, 大提顿国家公园, 怀俄明州, 美国 (© DanitaDelimont.com/AWL Images/SuperStock)' },
        { src: './images/2025-10-01.jpg', name: '克拉克山脉, 内华达山脉, 约塞米蒂国家公园, 加利福尼亚州, 美国 (© Robb Hirsch/TANDEM Stills + Motion)' },
        { src: './images/2025-09-30.jpg', name: '桉树上的考拉, 大奥特维国家公园, 澳大利亚 (© Jamie Lamb - elusive-images.co.uk/Getty Images)' },
        { src: './images/2025-09-29.jpg', name: '豪滕镇的彩虹屋, 荷兰 (© George Pachantouris/Getty Images)' },
        { src: './images/2025-09-28.jpg', name: '托斯卡纳的皮恩扎镇, 意大利 (© zpagistock/Getty Images)' },
        { src: './images/2025-09-27.jpg', name: '坦克湖 (Tank Lakes), 高山湖泊荒野区, 华盛顿州, 美国 (© Austin Trigg/TANDEM Stills + Motion)' },
        { src: './images/2025-09-26.jpg', name: '最小花栗鼠, 库特奈国家公园, 蒙大拿州, 美国 (© Donald M. Jones/Minden Pictures)' },
        { src: './images/2025-09-25.jpg', name: '奇陶尔加尔堡, 拉贾斯坦邦, 印度 (© chetansoni/Shutterstock)' },
        { src: './images/2025-09-24.jpg', name: '魔鬼塔国家纪念碑, 怀俄明州，美国 (© Laura Hedien/Getty Images)' },
        { src: './images/2025-09-23.jpg', name: '航拍中国江苏省常州翠竹公园 (© Xu Changyu/Getty images)' },
        { src: './images/2025-09-22.jpg', name: '秋日的白杨树，鱼湖国家森林，犹他州，美国 (© Danita Delimont/Getty Images)' },
        { src: './images/2025-09-21.jpg', name: '海獭，威廉王子湾，阿拉斯加州，美国 (© Gerald Corsi/Getty Images)' },
        { src: './images/2025-09-20.jpg', name: '慕尼黑啤酒节上的旋转木马，慕尼黑，巴伐利亚，德国 (© LOOK-foto/Alamy)' },
        { src: './images/2025-09-19.jpg', name: '千岛群岛地区，圣劳伦斯河，美加边境 (© benedek/Getty Images)' },
        { src: './images/2025-09-18.jpg', name: '邓金码头的蛇形楼梯, 凯里郡, 爱尔兰 (© Hugh O\'Connor/Getty Images)' },
        { src: './images/2025-09-17.jpg', name: '迪纳利国家公园中的一头年轻雄性驼鹿, 阿拉斯加, 美国 (© Grant Ordelheide/TANDEM Stills + Motion)' },
        { src: './images/2025-09-16.jpg', name: '从地球上空225英里处俯瞰墨西哥湾沿岸各州的夜间景象 (© Stocktrek Images/Getty Images)' },
        { src: './images/2025-09-15.jpg', name: '黑翅长脚鹬, 法国 (© Antonio Sementa/500px/Getty Images)' },
        { src: './images/2025-09-14.jpg', name: '奥林匹克国家公园的瀑布, 华盛顿, 美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2025-09-13.jpg', name: '烟囱岩, 雷斯岬国家海岸, 加利福尼亚州, 美国 (© Enrique Aguirre Aves/Getty Images)' },
        { src: './images/2025-09-12.jpg', name: '红海中的飞旋海豚群, 阿拉姆港, 埃及 (© Franco Banfi/Nature Picture Library)' },
        { src: './images/2025-09-11.jpg', name: '蒙弗拉圭国家公园塔霍河畔的猎鹰岩，西班牙 (© Daniel Viñé Garcia/Getty Images)' },
        { src: './images/2025-09-10.jpg', name: '干草捆，北约克郡，英格兰 (© Nick Brundle Photography/Getty Images)' },
        { src: './images/2025-09-09.jpg', name: '一只雌性欧亚红松鼠正在搬运苔藓，瑞士 (© Jean-Luc and Francoise Ziegler/Minden Pictures)' },
        { src: './images/2025-09-08.jpg', name: '乌节图书馆，新加坡 (© Darwin Fan/Getty Images)' },
        { src: './images/2025-09-07.jpg', name: '位于莫特拉瓦河河畔的格但斯克市，波兰 (© Oscar Dominguez/TANDEM Stills + Motion)' },
        { src: './images/2025-09-06.jpg', name: '棕煌蜂鸟，旧金山金门公园，加利福尼亚州，美国 (© jeremyborkat/Getty Images)' },
        { src: './images/2025-09-05.jpg', name: '太平洋公园，圣莫妮卡州立海滩，加利福尼亚州，美国 (© EXTREME-PHOTOGRAPHER/Getty Images)' },
        { src: './images/2025-09-04.jpg', name: '灰熊摔跤, 卡特迈国家公园及自然保护区, 阿拉斯加, 美国 (© Cavan Images/Adobe Stock)' },
        { src: './images/2025-09-03.jpg', name: '边界水域独木舟区荒野区, 明尼苏达州, 美国 (© s.tomas/Shutterstock)' },
        { src: './images/2025-09-02.jpg', name: '骆驼刺树, 死亡谷, 纳米布-诺克卢福国家公园, 纳米比亚 (© Inge Johnsson/Alamy Stock Photo)' },
        { src: './images/2025-09-01.jpg', name: '凯撒施图尔，巴登-符腾堡，德国 (© EyeEM Mobile GmbH/Getty Images)' },
        { src: './images/2025-08-31.jpg', name: '杰灵的斯科茨布拉夫国家纪念碑‌, 内布拉斯加州,美国 (© Hawk Buckman/Getty Images)' },
        { src: './images/2025-08-30.jpg', name: '阿里夫达鲁环礁海岸的鲸鲨, 马尔代夫 (© Bachir Moukarzel/Amazing Aerial Agency)' },
        { src: './images/2025-08-29.jpg', name: '马约尔广场鸟瞰图, 马德里, 西班牙 (© AirPano LLC/Amazing Aerial Agency)' },
        { src: './images/2025-08-28.jpg', name: '大白鹭，匈牙利 (© Markus Varesvuo/Nature Picture Library)' },
        { src: './images/2025-08-27.jpg', name: '瑟沃格湖，瓦加尔岛，法罗群岛 (© Anton Petrus/Getty Images)' },
        { src: './images/2025-08-26.jpg', name: '阿尔贝罗贝洛的特鲁洛建筑，普利亚大区，意大利 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-08-25.jpg', name: '方解石温泉区和黄石河，黄石国家公园，怀俄明州，美国 (© Rebecca L. Latson/Getty Images)' },
        { src: './images/2025-08-24.jpg', name: '欧洲黇鹿‌，英格兰 (© Enrique Aguirre Aves/Getty Images)' },
        { src: './images/2025-08-23.jpg', name: '秋季九寨沟国家公园里的诺日朗瀑布, 四川省, 中国 (© tawatchaiprakobkit/Getty images)' },
        { src: './images/2025-08-22.jpg', name: '帕卢斯连绵起伏的丘陵，华盛顿州，美国 (© svetlana57/Getty Images)' },
        { src: './images/2025-08-21.jpg', name: '穗䳭和盛开的帚石楠，峰区国家公园，英格兰 (© Ben Hall/Nature Picture Library)' },
        { src: './images/2025-08-20.jpg', name: '博尼法乔城堡，科西嘉岛南部，法国 (© Marc Dozier/Getty Images)' },
        { src: './images/2025-08-19.jpg', name: '祖马亚的复理层，巴斯克地区，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-08-18.jpg', name: '雪崩湖步道，阿迪朗达克高峰区，纽约州，美国 (© Posnov/Getty Images)' },
        { src: './images/2025-08-17.jpg', name: '灵维格灯塔，维泽桑讷，丹麦 (© Caroline Brundle Bugge/Getty Images)' },
        { src: './images/2025-08-16.jpg', name: '色彩斑斓的蜂巢, 意大利 (© Roberto Caucino/Shutterstock)' },
        { src: './images/2025-08-15.jpg', name: '斑点鹞鲼，圣克里斯托瓦尔岛‌，‌加拉帕戈斯群岛，厄瓜多尔 (© Tui De Roy/Minden Pictures)' },
        { src: './images/2025-08-14.jpg', name: '皮兹奈尔山缆车站, 格劳宾登州, 瑞士 (© Roberto Moiola/Alamy)' },
        { src: './images/2025-08-13.jpg', name: '一名男子从摩押附近的科罗纳拱门索降, 美国 (© Grant Ordelheide/TANDEM Stills + Motion)' },
        { src: './images/2025-08-12.jpg', name: '非洲象群, 安博塞利国家公园, 肯尼亚 (© Chase Dekker/Minden Pictures)' },
        { src: './images/2025-08-11.jpg', name: '圣玛格达莱娜, 多洛米蒂山, 意大利 (© Sakrapee Nopparat/Getty Images)' },
        { src: './images/2025-08-10.jpg', name: '马赛马拉国家保护区的雌狮,肯尼亚 (© Tandem Stock/Adobe Stock)' },
        { src: './images/2025-08-09.jpg', name: '陶波湖上的 Ngātoroirangi 矿湾毛利石刻, 新西兰 (© Joppi/Getty Images)' },
        { src: './images/2025-08-08.jpg', name: '伊瓜苏瀑布的三火枪瀑布, 阿根廷 (© Mark Meredith/Getty Images)' },
        { src: './images/2025-08-07.jpg', name: '加斯帕里拉岛灯塔后导标灯, 博卡格兰德, 佛罗里达州, 美国 (© Wiltser/Getty Images)' },
        { src: './images/2025-08-06.jpg', name: '环尾狐猴幼崽在玩自己的尾巴‌, 马达加斯加 (© Andy Rouse/Nature Picture Library)' },
        { src: './images/2025-08-05.jpg', name: '拉霍亚的潮汐池‌, 加利福尼亚州, 美国 (© Andrew Shoemaker/DanitaDelimont.com)' },
        { src: './images/2025-08-04.jpg', name: '巢中的乌林鸮, 芬兰 (© imageBROKER.com/Alamy Stock Photo)' },
        { src: './images/2025-08-03.jpg', name: '夏天田野里盛开的向日葵 (© Arsgera/Shutterstock)' },
        { src: './images/2025-08-02.jpg', name: '圆顶礁国家公园弗鲁塔附近的岩画, 犹他州, 美国 (© Nicolas VINCENT/Adobe Stock)' },
        { src: './images/2025-08-01.jpg', name: '皇家英里大道, 爱丁堡, 苏格兰 (© MEDITERRANEAN/Getty Images)' },
        { src: './images/2025-07-31.jpg', name: '纳帕利海岸的卡拉劳海滩, 可爱岛, 夏威夷, 美国 (© Russ Bishop/DanitaDelimont.com)' },
        { src: './images/2025-07-30.jpg', name: '里瓦德塞利亚，阿斯图里亚斯，西班牙 (© Agnieszka Glowala/Getty Images)' },
        { src: './images/2025-07-29.jpg', name: '雌性孟加拉虎，坎哈国家公园，印度 (© Axel Gomille/Nature Picture Library)' },
        { src: './images/2025-07-28.jpg', name: '蒙古草原上的蒙古包 (© Michel Arnault/Shutterstock)' },
        { src: './images/2025-07-27.jpg', name: '黑鳍梭鱼群，鲨鱼礁，拉斯穆罕默德国家公园，西奈半岛，埃及 (© Alex Mustard/Nature Picture Library)' },
        { src: './images/2025-07-26.jpg', name: '黄昏时的红树林，瓦拉基里海滩，松巴岛，印度尼西亚 (© Boonchet Ch./Getty Images)' },
        { src: './images/2025-07-25.jpg', name: '大加那利岛拉斯帕尔马斯色彩缤纷的房屋鸟瞰图，西班牙 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-07-24.jpg', name: '栖息在树枝上的灰燕鵙家族 (© Captain Skyhigh/Getty Images)' },
        { src: './images/2025-07-23.jpg', name: '梵蒂冈城与圣彼得大教堂，罗马，意大利 (© RudyBalasko/Getty Images)' },
        { src: './images/2025-07-22.jpg', name: '夏季的赛里木湖，博尔塔拉蒙古自治州博乐县, 中国新疆维吾尔自治区 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-07-21.jpg', name: '浅海中的鹿角珊瑚 (© blue-sea.cz/Shutterstock)' },
        { src: './images/2025-07-20.jpg', name: '望远镜下的月球表面照片 (© Sergey Kuznetsov/Getty Images)' },
        { src: './images/2025-07-19.jpg', name: '幽鹤国家公园的伯吉斯山和翡翠湖, 不列颠哥伦比亚省, 加拿大 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-07-18.jpg', name: '塞里雅兰瀑布日落美景，冰岛 (© Tom Mackie/AWL/plainpicture)' },
        { src: './images/2025-07-17.jpg', name: '瓦朗索勒高原的薰衣草田，法国 (© zpagistock/Getty Images)' },
        { src: './images/2025-07-16.jpg', name: '菲莱神庙 (aka Temple of Isis), 阿斯旺, 埃及 (© Ratnakorn Piyasirisorost/Getty Images)' },
        { src: './images/2025-07-15.jpg', name: '英仙座流星雨和一棵古老刺果松，大盆地国家公园，内华达州，美国 (© Wirestock Creators/Shutterstock)' },
        { src: './images/2025-07-14.jpg', name: '加利西亚海域游弋的幼年大青鲨，西班牙 (© Damocean/Getty Images)' },
        { src: './images/2025-07-13.jpg', name: '卡尔夫沙马尔斯维克湾玄武岩柱，斯卡吉半岛，冰岛 (© Arterra Picture Library/Alamy Stock Photo)' },
        { src: './images/2025-07-12.jpg', name: '汤氏瞪羚母亲和小鹿，马赛马拉，肯尼亚 (© Gallo Images/DanitaDelimont.com)' },
        { src: './images/2025-07-11.jpg', name: '日出时的东京，日本 (© pongnathee kluaythong/Getty Images)' },
        { src: './images/2025-07-10.jpg', name: '巴哈马的绿松石色水域 (© BlueOrange Studio/Adobe Stock)' },
        { src: './images/2025-07-09.jpg', name: '宪法火车站，布宜诺斯艾利斯，阿根廷 (© Grafissimo/Getty Images)' },
        { src: './images/2025-07-08.jpg', name: '塞切达，多洛米蒂山脉的山峰，南蒂罗尔，意大利 (© Kalyakan/Adobe Stock)' },
        { src: './images/2025-07-07.jpg', name: '潜水捕鱼的北方鲣鸟，设得兰群岛，苏格兰 (© Richard Shucksmith/Minden Pictures)' },
        { src: './images/2025-07-06.jpg', name: '死亡谷国家公园的梅斯基特平原沙丘，加利福尼亚州，美国 (© Bryan Jolley/TANDEM Stills + Motion)' },
        { src: './images/2025-07-05.jpg', name: 'Cize-Bolozon viaduct crossing the Ain gorge, France (© Leonid Andronov/Getty Images)' },
        { src: './images/2025-07-04.jpg', name: '奥罗塞，撒丁岛，意大利 (© EyeEm Mobile GmbH/Getty Images)' },
        { src: './images/2025-07-03.jpg', name: '彩虹泉州立公园的彩虹河，佛罗里达州，美国 (© Michel Roggo/Minden Pictures)' },
        { src: './images/2025-07-02.jpg', name: '被泡尖海葵包围的刺颊海葵鱼，米尔恩湾，巴布亚新几内亚 (© Fred Bavendam/Nature Picture Library)' },
        { src: './images/2025-07-01.jpg', name: 'Tilting渔村, 福戈岛 , 纽芬兰和拉布拉多省, 加拿大 (© FedevPhoto/Getty Images)' },
        { src: './images/2025-06-30.jpg', name: '沃尔夫溪陨石坑, 澳大利亚 (© Abstract Aerial Art/Getty Images)' },
        { src: './images/2025-06-29.jpg', name: 'Pulau Ay蓝色泻湖, 班达群岛, 印度尼西亚 (© fabio lamanna/Alamy Stock Photo)' },
        { src: './images/2025-06-28.jpg', name: '曼海姆水塔, 德国 (© no limit pictures/Getty Images)' },
        { src: './images/2025-06-27.jpg', name: 'Knuthöjdsmossen自然保护区, 海勒福什市, 瑞典 (© Sven Halling/DEEPOL/plainpicture)' },
        { src: './images/2025-06-26.jpg', name: '马头岩上空的银河, 新南威尔士州, 澳大利亚 (© Philip Thurston/Getty Images)' },
        { src: './images/2025-06-25.jpg', name: '格拉斯顿伯里托尔上的圣迈克尔塔, 格拉斯顿伯里, 萨默塞特郡, 英格兰 (© Gavin Hellier/Getty Images)' },
        { src: './images/2025-06-24.jpg', name: '精致拱门, 拱门国家公园, 犹他州, 美国 (© mmac72/Getty Images)' },
        { src: './images/2025-06-23.jpg', name: '德累斯顿易北河谷, 德国 (© Sean Pavone/Getty Images)' },
        { src: './images/2025-06-22.jpg', name: '亚马逊雨林，厄瓜多尔 (© Mark Fox/Getty Images)' },
        { src: './images/2025-06-21.jpg', name: '雾中莲花，中国佛山 (© huoguangliang/Getty Images)' },
        { src: './images/2025-06-20.jpg', name: '一只马赛长颈鹿妈妈正在给小长颈鹿梳理毛发, 塞伦盖蒂,坦桑尼亚 (© Alberto Cassani/Getty Images)' },
        { src: './images/2025-06-19.jpg', name: '圣卡塔琳娜州的海滩, 巴西 (© CaioCarvalhoPhotography/Getty Images)' },
        { src: './images/2025-06-18.jpg', name: '红花石蒜上的柑橘凤蝶 (© lzh/Getty Images)' },
        { src: './images/2025-06-17.jpg', name: '坎伯兰岛国家海岸的海滨森林，乔治亚州，美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2025-06-16.jpg', name: '海龟，费尔南多·迪诺罗尼亚群岛，巴西 (© João Vianna/Getty Images)' },
        { src: './images/2025-06-15.jpg', name: '雄性小美洲鸵与幼鸟，托雷斯德尔潘恩国家公园，巴塔哥尼亚，智利 (© Ignacio Yufera/Minden Pictures)' },
        { src: './images/2025-06-14.jpg', name: '五塔峰，多洛米蒂山脉，科尔蒂纳丹佩佐，贝卢诺省，意大利威尼托大区 (© usabin/Getty Images)' },
        { src: './images/2025-06-13.jpg', name: '维拉弗兰卡岛，圣米格尔岛，亚速尔群岛，葡萄牙 (© ARoxo/Getty Images)' },
        { src: './images/2025-06-12.jpg', name: '奇索斯山脉，大弯国家公园，德克萨斯州，美国 (© Dean Fikar/Getty Images)' },
        { src: './images/2025-06-11.jpg', name: '大红鹳，吕德里茨，纳米比亚 (© Karine Aigner/TANDEM Stills + Motion)' },
        { src: './images/2025-06-10.jpg', name: '大沼泽地国家公园的鸟瞰图，佛罗里达州，美国 (© Robert DelVecchio - OcuDrone/Getty Images)' },
        { src: './images/2025-06-09.jpg', name: '达尔马提亚的杜布罗夫尼克古城，克罗地亚 (© bluejayphoto/Getty Images)' },
        { src: './images/2025-06-08.jpg', name: '北海狮, 温哥华岛, 不列颠哥伦比亚省, 加拿大 (© Steve Woods Photography/Getty Images)' },
        { src: './images/2025-06-07.jpg', name: '松山顶峰, 洛杉矶国家森林公园, 加利福尼亚州, 美国 (© Matthew Kuhns/TANDEM Stills + Motion)' },
        { src: './images/2025-06-06.jpg', name: '诺曼底的阿罗芒什莱班 , 法国 (© Horia Merla/Getty Images)' },
        { src: './images/2025-06-05.jpg', name: '福玛萨瀑布，迪亚曼蒂纳，巴西 (© Pulsar Images/Alamy)' },
        { src: './images/2025-06-04.jpg', name: '卡拉卢纳海滩, 撒丁岛, 意大利 (© guenterguni/Getty Images)' },
        { src: './images/2025-06-03.jpg', name: '乌得勒支桥上的自行车，荷兰 (© George Pachantouris/Getty Images)' },
        { src: './images/2025-06-02.jpg', name: '一只停在紫锥菊上的灰蝶，洛克菲勒州立公园，纽约 (© Marianne A. Campolongo/Alamy)' },
        { src: './images/2025-06-01.jpg', name: '格朗特尔岛附近的堡礁，法属新喀里多尼亚 (© Karsten Wrobel/Getty Images)' },
        { src: './images/2025-05-31.jpg', name: '用彩色丝线串成的香囊，端午节前夕的庙会上，吉林省吉林市，中国 (© Visual China Group/Getty Images)' },
        { src: './images/2025-05-30.jpg', name: '小鸽子河，大雾山国家公园，田纳西州, 美国 (© GreenStock/Getty Images)' },
        { src: './images/2025-05-29.jpg', name: '米拉韦特，埃布罗河，加泰罗尼亚塔，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-05-28.jpg', name: '一只海獭漂浮在阿拉斯加海洋国家野生动物保护区的海藻床上，美国 (© Gerry Ellis/Minden Pictures)' },
        { src: './images/2025-05-27.jpg', name: '梦娜维尔岩池，悉尼，澳大利亚 (© jamenpercy/Getty Images)' },
        { src: './images/2025-05-26.jpg', name: '沿着岚山保津川行驶的火车，京都，日本 (© Alvin Huang/Getty Images)' },
        { src: './images/2025-05-25.jpg', name: '布伦特伍德湾的布查特花园，不列颠哥伦比亚省，加拿大 (© 2009fotofriends/Shutterstock)' },
        { src: './images/2025-05-24.jpg', name: '挪威尤通黑门山国家公园 (© Marisa Estivill/Shutterstock)' },
        { src: './images/2025-05-23.jpg', name: '停在黄头侧颈龟鼻子上的茱莉亚蝶，亚马逊地区，厄瓜多尔 (© Westend61/Getty Images)' },
        { src: './images/2025-05-22.jpg', name: '日落时分的猴面包树，猴面包树大道，马达加斯加 (© Framalicious/Shutterstock)' },
        { src: './images/2025-05-21.jpg', name: '杨家塘村茶园，松阳县，中国 (© feng xu/Getty Images)' },
        { src: './images/2025-05-20.jpg', name: '薰衣草上的蜜蜂 (© Anthony Brown/Alamy Stock Photo)' },
        { src: './images/2025-05-19.jpg', name: '汉密尔顿山, 旧金山湾区, 加利福尼亚, 美国 (© Jeffrey Lewis/TANDEM Stills + Motion)' },
        { src: './images/2025-05-18.jpg', name: '加龙河对面的圣皮埃尔桥，图卢兹，法国 (© Image Professionals GmbH/Alamy)' },
        { src: './images/2025-05-17.jpg', name: '威尼斯潟湖中的三角洲, 意大利 (© Dimitri Weber/Amazing Aerial Agency)' },
        { src: './images/2025-05-16.jpg', name: '大绿金刚鹦鹉, 墨西哥 (© Ondrej Prosicky/Shutterstock)' },
        { src: './images/2025-05-15.jpg', name: '大本钟和国会大厦, 威斯敏斯特宫, 伦敦, 英国 (© Puthipong Worasaran/Getty Images)' },
        { src: './images/2025-05-14.jpg', name: '弗拉维亚港, 苏尔西斯-伊格莱西恩特, 撒丁岛, 意大利 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-05-13.jpg', name: '百内国家公园, 巴塔哥尼亚, 智利 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-05-12.jpg', name: '东京的鸢尾花园, 日本 (© M.Arai/Getty Images)' },
        { src: './images/2025-05-11.jpg', name: '豹妈妈正在梳理她的幼崽，Jao保护区，博茨瓦纳 (© Suzi Eszterhas/Minden Pictures)' },
        { src: './images/2025-05-10.jpg', name: '巴尔德纳斯雷亚尔斯自然公园的卡斯蒂尔德蒂拉，纳瓦拉，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-05-09.jpg', name: '普通变色龙 (© Photostock-Israel/SPL/Getty Images)' },
        { src: './images/2025-05-08.jpg', name: 'Rhyolite附近山谷中的驴子，内华达州，美国 (© Moelyn Photos/Getty Images)' },
        { src: './images/2025-05-07.jpg', name: '邓路斯城堡，安特里姆郡，北爱尔兰 (© DieterMeyrl/Getty Images)' },
        { src: './images/2025-05-06.jpg', name: '一架超轻型飞机飞越纳米比亚沙漠 (© Burt Johnson/Alamy Stock Photo)' },
        { src: './images/2025-05-05.jpg', name: '日出时分，美丽的喀斯特山脉鸟瞰图，中国桂林 (© zhaojiankang/Getty Images)' },
        { src: './images/2025-05-04.jpg', name: '西班牙广场，塞维利亚，西班牙 (© Horia Merla/Getty Images)' },
        { src: './images/2025-05-03.jpg', name: '拱门国家公园双拱门映衬下的银河，犹他州，美国 (© Adventure_Photo/Getty Images)' },
        { src: './images/2025-05-02.jpg', name: '维多利亚睡莲上的绿鹭，潘塔纳尔 ，巴西 (© Gerald Corsi/Getty Images)' },
        { src: './images/2025-05-01.jpg', name: '鸡蛋花，夏威夷，美国 (© Miranda Jans/Getty Images)' },
        { src: './images/2025-04-30.jpg', name: '从巴拉那州看到的伊瓜苏瀑布, 巴西 (© agustavop/Getty Images)' },
        { src: './images/2025-04-29.jpg', name: '维朗德里城堡，卢瓦尔河谷，法国 (© Mint Images/Getty Images)' },
        { src: './images/2025-04-28.jpg', name: '莫雷米野生动物保护区的高角羚，博茨瓦纳 (© Paul Souders/Getty Images)' },
        { src: './images/2025-04-27.jpg', name: '红木国家公园和州立公园, 加利福尼亚州, 美国 (© Bob Pool/Getty Images)' },
        { src: './images/2025-04-26.jpg', name: '印第安头湾, 布鲁斯半岛国家公园, 安大略, 加拿大 (© Maurice Prokaziuk/Getty Images)' },
        { src: './images/2025-04-25.jpg', name: '麦哲伦企鹅, 志愿者角, 福克兰群岛 (© imageBROKER/Matthias Graben/Getty Images)' },
        { src: './images/2025-04-24.jpg', name: '阿拉斯加基奈峡湾国家公园尖顶湾, 阿拉斯加州苏厄德, 美国 (© Wander Photography/Getty Images)' },
        { src: './images/2025-04-23.jpg', name: '海利根港斯坦沃德海滩上的沙滩椅，石勒苏益格-荷尔斯泰因州，德国 (© Frank Lukasseck/eStock Photo)' },
        { src: './images/2025-04-22.jpg', name: '大棱镜彩泉，黄石国家公园，怀俄明州，美国 (© Ajith Kumar/Getty Images)' },
        { src: './images/2025-04-21.jpg', name: '银河下的约书亚树，加利福尼亚州，美国 (© Chao Zhang/Getty Images)' },
        { src: './images/2025-04-20.jpg', name: '春天里的野生小兔子 (© Fiona McAllister Photography/Getty Images)' },
        { src: './images/2025-04-19.jpg', name: '锡安国家公园，犹他州，美国 (© Simon Dannhauer/Getty Images)' },
        { src: './images/2025-04-18.jpg', name: '卡帕多西亚格雷梅国家公园上空的热气球，土耳其 (© Anton Petrus/Getty Images)' },
        { src: './images/2025-04-17.jpg', name: '安第斯动冠伞鸟，厄瓜多尔 (© Kit Day/Alamy Stock Photo)' },
        { src: './images/2025-04-16.jpg', name: '卡奇纳桥，天然桥国家区，犹他州，美国 (© Alan Majchrowicz/Getty Images)' },
        { src: './images/2025-04-15.jpg', name: '卡拉奥拉城堡，格拉纳达，西班牙 (© Ugo Mellone/eStock Photo)' },
        { src: './images/2025-04-14.jpg', name: '圣玛丽亚岛附近的大西洋细吻海豚，亚速尔群岛，葡萄牙 (© Jordi Chias/Minden Pictures)' },
        { src: './images/2025-04-13.jpg', name: '班克鲁特的唐赛寺，泰国 (© Ratnakorn Piyasirisorost/Getty Images)' },
        { src: './images/2025-04-12.jpg', name: '从国际空间站穹顶俯瞰南太平洋 (© NASA)' },
        { src: './images/2025-04-11.jpg', name: '郁金香，荷兰 (© 1111IESPDJ/Getty Images)' },
        { src: './images/2025-04-10.jpg', name: '靠近巢穴的红狐幼崽 (© WildMedia/Shutterstock)' },
        { src: './images/2025-04-09.jpg', name: '纳克索斯岛的蓝色时刻，基克拉泽斯群岛，希腊 (© Sizun Eye/Getty Images)' },
        { src: './images/2025-04-08.jpg', name: '春天的水仙花在清晨绽放 (© LedyX/Shutterstock)' },
        { src: './images/2025-04-07.jpg', name: '美洲海狸, Moran, 怀俄明州, 美国 (© Enrique Aguirre Aves/Getty Images)' },
        { src: './images/2025-04-06.jpg', name: '碎片大厦，伦敦 (© Dennis Fischer Photography/Moment/Getty Images)' },
        { src: './images/2025-04-05.jpg', name: '日落时分的加兹特鲁加特岛 , 巴斯克地区, 西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-04-04.jpg', name: '苏州古镇风景，江苏省，中国 (© gyn9038/Getty Images)' },
        { src: './images/2025-04-03.jpg', name: '沃森峰上空的彩虹, 巨人柱国家公园, 亚利桑那州, 美国 (© Frank Staub/Getty Images)' },
        { src: './images/2025-04-02.jpg', name: '凯恩维尔附近荒地的砂岩地层, 犹他州, 美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2025-04-01.jpg', name: '树蛙, 哥斯达黎加 (© Ondrej Prosicky/Shutterstock)' },
        { src: './images/2025-03-31.jpg', name: '黄昏下的奥斯图尼, 普利亚, 意大利 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-03-30.jpg', name: '悉尼港鸟瞰图，新南威尔士州，澳大利亚 (© jamenpercy/Getty Images)' },
        { src: './images/2025-03-29.jpg', name: '卡里佐平原国家纪念碑的超级花期，加利福尼亚州，美国 (© Robb Hirsch/TANDEM Stills + Motion)' },
        { src: './images/2025-03-28.jpg', name: '正在筑巢的雌性黑枕王鹟 (© komkrit tonusin/Alamy)' },
        { src: './images/2025-03-27.jpg', name: '希罗德·阿提库斯剧场，雅典卫城，希腊 (© f11photo/Getty Images)' },
        { src: './images/2025-03-26.jpg', name: '水晶河的海牛，佛罗里达州，美国 (© Stephen Frink/Getty Images)' },
        { src: './images/2025-03-25.jpg', name: '向日葵田里的红额金翅雀，德国 (© Juniors Bildarchiv GmbH/Alamy)' },
        { src: './images/2025-03-24.jpg', name: '沙漠象与小象在高高的草丛中觅食，纳米比亚 (© Christophe Courteau/Minden Pictures)' },
        { src: './images/2025-03-23.jpg', name: '鲍曼附近日落时分的闪电和风暴云，布拉斯加州，美国 (© john finney photography/Getty Images)' },
        { src: './images/2025-03-22.jpg', name: '尼特哈天然井水面上的睡莲，图卢姆，墨西哥 (© Franco Banfi/NPL/Minden)' },
        { src: './images/2025-03-21.jpg', name: '低地雨林上空的薄雾，丹浓谷，沙巴，婆罗洲，马来西亚 (© Nick Garbutt/Alamy)' },
        { src: './images/2025-03-20.jpg', name: '美丽盛开的樱花，杭州的春天，中国 (© zhang shuang/Getty Images)' },
        { src: './images/2025-03-19.jpg', name: '黑鹭捕鱼，乔贝国家公园，博茨瓦纳 (© Paul Souders/Minden PIctures)' },
        { src: './images/2025-03-18.jpg', name: '红色岩层，塞多纳，亚利桑那州，美国 (© Jim Ekstrand/Alamy Stock Photo)' },
        { src: './images/2025-03-17.jpg', name: '塞缪尔·贝克特桥, 都柏林, 爱尔兰 (© Colm Keating/Tandem Stills + Motion)' },
        { src: './images/2025-03-16.jpg', name: '雪地里的大熊猫宝宝，中国 (© Cheryl Schneider/Alamy Stock Photo)' },
        { src: './images/2025-03-15.jpg', name: '罗马广场上的罗马萨图尔诺农神庙，罗马，意大利 (© Nico De Pasquale Photography/Getty Images)' },
        { src: './images/2025-03-14.jpg', name: '索尔吉奈特克斯的巨石墓，巴斯克地区，阿拉瓦省，西班牙 (© David Herraez Calzada/plainpicture)' },
        { src: './images/2025-03-13.jpg', name: '洒红节庆祝活动，斋浦尔，印度 (© powerofforever/Getty Images)' },
        { src: './images/2025-03-12.jpg', name: '卢瓦尔河畔叙利城堡, 卢瓦尔中心省, 法国 (© StockPhotoAstur/Shutterstock)' },
        { src: './images/2025-03-11.jpg', name: '努沙佩尼达岛的破碎海滩, 巴厘岛, 印度尼西亚 (© joakimbkk/Getty Images)' },
        { src: './images/2025-03-10.jpg', name: '在伊沙沙区里正在睡觉的狮子，伊丽莎白女王国家公园，乌干达 (© Gunter Nuyts/Getty Images)' },
        { src: './images/2025-03-09.jpg', name: '圣马可钟楼，威尼斯，意大利 (© scaliger/Getty Images)' },
        { src: './images/2025-03-08.jpg', name: '石勒苏益格-荷尔斯泰因州瓦登海国家公园，德国 (© 3quarks/Getty Images)' },
        { src: './images/2025-03-07.jpg', name: '中国的梅花 (© zhikun sun/Getty Images)' },
        { src: './images/2025-03-06.jpg', name: '沙漠大角羊，内华达州火焰谷州立公园，美国 (© Rachid Dahnoun/Cavan Images)' },
        { src: './images/2025-03-05.jpg', name: '俯瞰拷索山林国家公园，素叻府，泰国 (© Peetatham Kongkapech/Getty Images)' },
        { src: './images/2025-03-04.jpg', name: '杰克逊广场，新奥尔良，路易斯安那州，美国 (© SeanPavonePhoto/Getty Images)' },
        { src: './images/2025-03-03.jpg', name: '南黄弯嘴犀鸟，克鲁格国家公园 ，南非 (© Richard Du Toit/Minden Pictures)' },
        { src: './images/2025-03-02.jpg', name: '桉树，梅加龙谷，蓝山山脉国家公园，新南威尔士州，澳大利亚 (© Andrew Peacock/TANDEM Stills + Motion)' },
        { src: './images/2025-03-01.jpg', name: '玛琳湖精灵岛上空的北极光，贾斯珀国家公园，加拿大 (© Mumemories/Getty Images)' },
        { src: './images/2025-02-28.jpg', name: '虎穴寺，不丹 (© Baron Reznik/Getty Images)' },
        { src: './images/2025-02-27.jpg', name: '北极熊幼崽，丘吉尔，马尼托巴省，加拿大 (© Eric Baccega/NPL/Minden Pictures)' },
        { src: './images/2025-02-26.jpg', name: '莱奇湖上的斯托克尔城堡，阿盖尔郡，苏格兰 (© WLDavies/Getty Images)' },
        { src: './images/2025-02-25.jpg', name: '砂岩石柱，布莱斯峡谷国家公园，犹他州，美国 (© Stephen Matera/TANDEM Stills + Motion)' },
        { src: './images/2025-02-24.jpg', name: '斯潘塞湾的一群伞膜乌贼, 怀阿拉,南澳大利亚 (© Gary Bell/Minden Pictures)' },
        { src: './images/2025-02-23.jpg', name: '日出时分的富士山, 河口湖, 日本 (© Twenty47studio/Getty Images)' },
        { src: './images/2025-02-22.jpg', name: '圣路易斯拱门, 密苏里州, 美国 (© f11photo/Getty Images)' },
        { src: './images/2025-02-21.jpg', name: '希莫加附近的 Champaka Sarasi 池塘，卡纳塔克邦，印度 (© Amith Nag Photography/Getty Images)' },
        { src: './images/2025-02-20.jpg', name: '马鹿，加拿大 (© Delbars/Getty Images)' },
        { src: './images/2025-02-19.jpg', name: '欧亚水獭，莱利斯塔德，荷兰 (© Ernst Dirksen/Minden Pictures)' },
        { src: './images/2025-02-18.jpg', name: '大蓝洞，伯利兹 (© JamiesOnAMission/Shutterstock)' },
        { src: './images/2025-02-17.jpg', name: 'Coll d\'Ares，加泰罗尼亚比利牛斯​​山脉 (© CRISTIAN IONUT ZAHARIA/Shutterstock)' },
        { src: './images/2025-02-16.jpg', name: '座头鲸妈妈和宝宝，汤加 (© Chase Dekker/Minden Pictures)' },
        { src: './images/2025-02-15.jpg', name: '三十槌冰柱，秩父市，日本 (© watayu0821/shutterstock)' },
        { src: './images/2025-02-14.jpg', name: '两只麦哲伦企鹅，福克兰群岛 (© Vicki Jauron, Babylon and Beyond Photography/Getty Images)' },
        { src: './images/2025-02-13.jpg', name: '泰瑞尔湖，维多利亚州，澳大利亚 (© Monica Bertolazzi/Getty Images)' },
        { src: './images/2025-02-12.jpg', name: '上海豫园的灯会，元宵节，上海市，中国 (© atiger/Shutterstock)' },
        { src: './images/2025-02-11.jpg', name: '云冈石窟，大同，山西省，中国 (© Eric Yang/Getty Images)' },
        { src: './images/2025-02-10.jpg', name: '雨伞艺术装置，博罗市场，伦敦，英国 (© Malcolm P Chapman/Getty Images)' },
        { src: './images/2025-02-09.jpg', name: '阿尔斯特罗姆角，鲍威尔湖，犹他州，美国 (© T.M. Schultze/TANDEM Stills + Motion)' },
        { src: './images/2025-02-08.jpg', name: '梅斯蒂亚的中世纪塔楼，上斯瓦涅季，格鲁吉亚 (© photoaliona/Getty Images)' },
        { src: './images/2025-02-07.jpg', name: '特隆赫姆的蓝色时刻，挪威 (© Jeanny Mueller/Getty Images)' },
        { src: './images/2025-02-06.jpg', name: '拱门群岛，瓦拉里基海滩，南岛，新西兰 (© Francesco Vaninetti/AWL/plainpicture)' },
        { src: './images/2025-02-05.jpg', name: '拱门群岛，瓦拉里基海滩，南岛，新西兰 (© Francesco Vaninetti/AWL/plainpicture)' },
        { src: './images/2025-02-04.jpg', name: '金桥，巴拿山，岘港，越南 (© Hien Phung Thu/Shutterstock)' },
        { src: './images/2025-02-03.jpg', name: '盛开的樱花树上的红头长尾山雀 (© Haitong Yu/Getty Images)' },
        { src: './images/2025-02-02.jpg', name: '年幼的高山土拨鼠 (© Jonas Fichtner-Pflaum/Getty Images)' },
        { src: './images/2025-02-01.jpg', name: '国王岩堡垒 , 瑞士撒克逊, 德国 (© Bildagentur-online/Exss/Alamy)' },
        { src: './images/2025-01-31.jpg', name: '日出时的平原斑马，莫卡拉国家公园，南非 (© EcoPrint/Shutterstock)' },
        { src: './images/2025-01-30.jpg', name: '罗兰多山口，奥德萨和佩迪多山国家公园，西班牙 (© Inaki Relanzon/Nature Picture Library/Alamy Stock Photo)' },
        { src: './images/2025-01-29.jpg', name: '南京夫子庙的春节许愿牌，江苏省，中国 (© lazy dragon/Shutterstock)' },
        { src: './images/2025-01-28.jpg', name: '夜空中的烟花表演，长沙，湖南省，中国 (© Sino Images/Getty Images)' },
        { src: './images/2025-01-27.jpg', name: '琐罗亚斯德神庙，大峡谷国家公园，亚利桑那州，美国 (© Nick Lake/Tandem Stills + Motion)' },
        { src: './images/2025-01-26.jpg', name: '比利时的欧洲山毛榉森林 (© Philippe Moes/Minden Pictures)' },
        { src: './images/2025-01-25.jpg', name: '波尔图，葡萄牙 (© Starcevic/Getty Images)' },
        { src: './images/2025-01-24.jpg', name: '冰岛的史托克间歇泉 (© John and Tina Reid/Getty Images)' },
        { src: './images/2025-01-23.jpg', name: '黄昏时的鹿谷，帕克城，犹他州，美国 (© Adventure_Photo/Getty Images)' },
        { src: './images/2025-01-22.jpg', name: '代尔修道院，佩特拉，约旦 (© Punnawit Suwuttananun/Getty Images)' },
        { src: './images/2025-01-21.jpg', name: '俯瞰那不勒斯湾和维苏威火山，意大利 (© ezypix/Getty Images)' },
        { src: './images/2025-01-20.jpg', name: '欧亚红松鼠与毒蘑菇 (© Edwin Giesbers/Minden Pictures)' },
        { src: './images/2025-01-19.jpg', name: '海王星石窟，撒丁岛， 意大利 (© Carlo Murenu/Getty Images)' },
        { src: './images/2025-01-18.jpg', name: '白沙国家公园的日落，新墨西哥州，美国 (© Image Professionals GmbH/Alamy Stock Photo)' },
        { src: './images/2025-01-17.jpg', name: '褐鹈鹕，圣地亚哥，加利福尼亚州，美国 (© Arthur Morris/BIRDS AS ART/Getty Images)' },
        { src: './images/2025-01-16.jpg', name: '尖峰国家公园的高峰步道，圣贝尼托县，加利福尼亚州，美国 (© yhelfman/Getty Images)' },
        { src: './images/2025-01-15.jpg', name: 'Pointe du Diable，圣皮埃尔，留尼汪岛 (© MONTICO Lionel/Alamy)' },
        { src: './images/2025-01-14.jpg', name: 'Village of Zahara de la Sierra, Cádiz province, Spain (© SEN LI/Getty Images)' },
        { src: './images/2025-01-13.jpg', name: '小屋和特尔莫尔灯塔，兰德温岛，威尔士，英国 (© Westend61 on Offset/Shutterstock)' },
        { src: './images/2025-01-12.jpg', name: '大堡礁的宝石大眼鲷鱼，澳大利亚 (© Fred Bavendam/Minden Pictures)' },
        { src: './images/2025-01-11.jpg', name: '梅克内斯的Heri es-Swani，摩洛哥 (© Calin Stan/Shutterstock)' },
        { src: './images/2025-01-10.jpg', name: '亚伯拉罕湖，阿尔伯塔省，加拿大 (© Basic Elements Photography/Getty Images)' },
        { src: './images/2025-01-09.jpg', name: '苏丝斯黎沙丘，纳米布沙漠，纳米比亚 (© Airpano/Amazing Aerial Agency)' },
        { src: './images/2025-01-08.jpg', name: '被雪覆盖的长城，中国 (© View Stock/Alamy Stock Photo)' },
        { src: './images/2025-01-07.jpg', name: '日落时的摩拉基大圆石，南岛，新西兰 (© Douglas Pearson/eStock Photo)' },
        { src: './images/2025-01-06.jpg', name: '被水淹没的地下室，圣弗朗西斯大教堂，拉文纳，意大利 (© Andrea Pucci/Getty Images)' },
        { src: './images/2025-01-05.jpg', name: '希莫加的紫红头鹦鹉，卡纳塔克邦，印度 (© Hira Punjabi/Alamy Stock Photo)' },
        { src: './images/2025-01-04.jpg', name: '归春河上的板约-德天瀑布，中国与越南边境 (© Shane P. White/Minden Pictures)' },
        { src: './images/2025-01-03.jpg', name: '英国拉德克里夫图书馆和万灵学院，牛津大学，英格兰 (© atiger/Shutterstock)' },
        { src: './images/2025-01-02.jpg', name: '阿尔德兹村上空的星轨，格劳宾登州，瑞士 (© Roberto Moiola/Getty Images)' },
        { src: './images/2025-01-01.jpg', name: '在北极玩耍的北极熊 (© Ondrej Prosicky/Shutterstock)' },
        { src: './images/2024-12-31.jpg', name: '国会山上空的烟花，渥太华，加拿大 (© naibank/Getty Images)' },
        { src: './images/2024-12-30.jpg', name: '多布森湖附近的塔斯马尼亚雪胶和班达尼植物，费尔德山国家公园，塔斯马尼亚，澳大利亚 (© Whitworth Images/Getty Images)' },
        { src: './images/2024-12-29.jpg', name: '婆罗浮屠大佛寺，爪哇岛，印度尼西亚 (© Robertharding/Shutterstock)' },
        { src: './images/2024-12-28.jpg', name: '一只绿海龟在太平洋中游泳，法国海外属地新喀里多尼亚 (© Damsea/Shutterstock)' },
        { src: './images/2024-12-27.jpg', name: '布莱德湖，斯洛文尼亚 (© Kesu01/Getty Images)' },
        { src: './images/2024-12-26.jpg', name: '莫斯霍尔港的圣诞灯饰，康沃尔，英格兰 (© ianwool/Getty Images)' },
        { src: './images/2024-12-25.jpg', name: '科瓦东加湖，阿斯图里亚斯，西班牙 (© Carlos Fernandez/Getty Images)' },
        { src: './images/2024-12-24.jpg', name: '德国圣诞市场 (© Cyril Gosselin/Getty Images)' },
        { src: './images/2024-12-23.jpg', name: '钏路的两只丹顶鹤，北海道，日本 (© Wirestock, Inc./Alamy Stock Photo)' },
        { src: './images/2024-12-22.jpg', name: '水晶码头的圣诞树，太平洋海滩，加利福尼亚州，美国 (© SamAntonioPhotography/Getty Images)' },
        { src: './images/2024-12-21.jpg', name: '满拉水库的雪景，日喀则，中国西藏自治区 (© Zhang Zhenqi/VCG via Getty Images)' },
        { src: './images/2024-12-20.jpg', name: '罗瓦涅米圣诞老人村，拉普兰，芬兰 (© Smelov/Shutterstock)' },
        { src: './images/2024-12-19.jpg', name: '锡比乌圣诞市场，罗马尼亚 (© Calin Stan/Alamy Stock Photo)' },
        { src: './images/2024-12-18.jpg', name: '印度吉姆科比特国家公园的大象，印度 (© ABHILASH VISWA PICASSO/Shutterstock)' },
        { src: './images/2024-12-17.jpg', name: '传统红色渔民小屋，雷讷峡湾岸边，挪威 (© Pilat666/Getty Images)' },
        { src: './images/2024-12-16.jpg', name: '萨尔茨堡，奥地利 (© bluejayphoto/Getty Images)' },
        { src: './images/2024-12-15.jpg', name: '米苏里纳湖，多洛米蒂山脉，意大利 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2024-12-14.jpg', name: '猛鸮，加拿大 (© pchoui/Getty Images)' },
        { src: './images/2024-12-13.jpg', name: '圣诞市场，圣斯蒂芬大教堂，布达佩斯，匈牙利 (© Calin Stan/Shutterstock)' },
        { src: './images/2024-12-12.jpg', name: '一品红或圣诞花 (© David Hosking/NPL/Minden Pictures)' },
        { src: './images/2024-12-11.jpg', name: '拉瓦雷多三峰山,意大利 (© Daniel Maran/Getty Images)' },
        { src: './images/2024-12-10.jpg', name: '被雪覆盖的康沃尔天涯海角小径，康沃尔郡兰德恩德，英格兰 (© Josef FitzGerald-Patrick/Getty Images)' },
        { src: './images/2024-12-09.jpg', name: '两只原驼,托雷斯德尔帕恩国家公园 , 智利 (© Floris van Breugel/NPL/Minden Pictures)' },
        { src: './images/2024-12-08.jpg', name: '巴黎圣母院，巴黎，法国 (© Julien Fromentin/Getty Images)' },
        { src: './images/2024-12-07.jpg', name: '里约热内卢州的阿拉亚尔多卡博，巴西 (© Derson Santana/Shutterstock)' },
        { src: './images/2024-12-06.jpg', name: '鸟瞰冰封的大海和悬崖上的灯塔，大连泊霞湾公园，辽宁省，中国 (© zhengshun tang/Getty Images)' },
        { src: './images/2024-12-05.jpg', name: '莫诺湖的石灰华地层，加利福尼亚州，美国 (© Susanna Patras/TANDEM Stills + Motion)' },
        { src: './images/2024-12-04.jpg', name: '雄性白犀，纳库鲁湖，肯尼亚 (© Ingo Arndt/Minden Pictures)' },
        { src: './images/2024-12-03.jpg', name: 'Sattais Katcheri，琥珀堡，拉贾斯坦邦，印度 (© Yury Taranik/Shutterstock)' },
        { src: './images/2024-12-02.jpg', name: '雌性驼鹿，德纳里国家公园，阿拉斯加州，美国 (© Cavan Images/Alamy Stock Photo)' },
        { src: './images/2024-12-01.jpg', name: '南极洲的冰山 (© Art Wolfe/DanitaDelimont.com)' },
        { src: './images/2024-11-30.jpg', name: '基尔亨城堡倒映在奥湖中，阿盖尔-比特郡，苏格兰 (© Tom Mackie/plainpicture)' },
        { src: './images/2024-11-29.jpg', name: '圣米歇尔山，诺曼底，法国 (© Captain Skyhigh/Getty Images)' },
        { src: './images/2024-11-28.jpg', name: '日落时分风暴渐渐消散，阿西尼博因山省立公园，加拿大 (© Jeff Lewis/TANDEM Stills + Motion)' },
        { src: './images/2024-11-27.jpg', name: '秋天的巨人之墓，布永市，比利时 (© David Briard/Getty)' },
        { src: './images/2024-11-26.jpg', name: '橄榄树林，伊特里亚山谷，普利亚，意大利 (© Massimo Santi/Shutterstock)' },
        { src: './images/2024-11-25.jpg', name: '马赛长颈鹿，安波塞利国家公园，肯尼亚 (© Art Wolfe/DanitaDelimont.com)' },
        { src: './images/2024-11-24.jpg', name: '州立公园，索诺玛海岸，美国加利福尼亚州 (© Rachid Dahnoun/Tandem Stills + Motion)' },
        { src: './images/2024-11-23.jpg', name: '多叶芦荟，袋鼠岛，澳大利亚 (© Michael Melford/Alamy)' },
        { src: './images/2024-11-22.jpg', name: '萨夫拉城堡，瓜达拉哈拉省，西班牙 (© Eduard Gene/Getty Images)' },
        { src: './images/2024-11-21.jpg', name: '日出时的两只小狮子，南非 (© Ruan Springorum/Getty Images)' },
        { src: './images/2024-11-20.jpg', name: '皮埃尔桥，波尔多，法国 (© SergiyN/Getty Images)' },
        { src: './images/2024-11-19.jpg', name: '塔斯曼拱门，塔斯马尼亚州，澳大利亚 (© Gary Bell/Minden Pictures)' },
        { src: './images/2024-11-18.jpg', name: '波斯考尔灯塔，南威尔士，英国 (© Leighton Collins/Alamy)' },
        { src: './images/2024-11-17.jpg', name: '加里东林中的马鹿，阿夫力谷，苏格兰高地 (© Terry Whittaker/Alamy)' },
        { src: './images/2024-11-16.jpg', name: '瓦登海沿岸，莫德加特附近，弗里斯兰，荷兰 (© Ron ter Burg/Minden Pictures)' },
        { src: './images/2024-11-15.jpg', name: '义蓬灯节 ，清迈，泰国 (© tampatra/Getty Images)' },
        { src: './images/2024-11-14.jpg', name: '马纳罗拉，五渔村国家公园，利古里亚，意大利 (© John_Silver/Shutterstock)' },
        { src: './images/2024-11-13.jpg', name: '巨型海藻森林中的加州海狮，下加利福尼亚，墨西哥 (© Claudio Contreras/Minden Pictures)' },
        { src: './images/2024-11-12.jpg', name: '透过海湾拱门看到双拱门，拱门国家公园，犹他州，美国 (© Jeff Foott/Minden Pictures)' },
        { src: './images/2024-11-11.jpg', name: '班夫国家公园的日落，阿尔伯塔省，加拿大 (© fywPhoto 云卷云舒/Getty Images)' },
        { src: './images/2024-11-10.jpg', name: '加勒比火烈鸟，尤卡坦半岛，墨西哥 (© Claudio Contreras/NPL/Minden Pictures)' },
        { src: './images/2024-11-09.jpg', name: '银河，阿伊特本哈杜杜，摩洛哥 (© Cavan Images/Getty Images)' },
        { src: './images/2024-11-08.jpg', name: '冰岛冰川河流鸟瞰图 (© rybarmarekk/Shutterstock)' },
        { src: './images/2024-11-07.jpg', name: '金色的松树，坝上草原，中国 (© MelindaChan/Getty Images)' },
        { src: './images/2024-11-06.jpg', name: '奥林匹克国家公园石狮海滩，华盛顿州，美国 (© T.M. Schultze/TANDEM Stills + Motion)' },
        { src: './images/2024-11-05.jpg', name: '马拉赫塞斯国家公园，马拉尼昂州,巴西 (© thanosquest/Shutterstock)' },
        { src: './images/2024-11-04.jpg', name: '坎布里亚湖区，格拉斯米尔，英格兰 (© Thomas Molyneux/Getty Images)' },
        { src: './images/2024-11-03.jpg', name: '巢中的加勒比火烈鸟蛋，里奥拉加托斯自然保护区，尤卡坦州，墨西哥 (© Claudio Contreras/Minden Pictures)' },
        { src: './images/2024-11-02.jpg', name: '黄石国家公园的美洲野牛，怀俄明州，美国 (© Ian Shive/TANDEM Stills + Motion)' },
        { src: './images/2024-11-01.jpg', name: '秋季葡萄园的鸟瞰图，瓦恩哈尔特，黑森林，德国 (© Sabine Gerold/Amazing Aerial Agency)' },
        { src: './images/2024-10-31.jpg', name: '巴黎圣母院的奇美拉，法国 (© scaliger/Getty Images)' },
        { src: './images/2024-10-30.jpg', name: '从苏格兰教堂墓地眺望爱丁堡城堡，英国 (© Chris Dorney/Alamy Stock Photo)' },
        { src: './images/2024-10-29.jpg', name: '大雕鸮 (© Mark Newman/Getty Images)' },
        { src: './images/2024-10-28.jpg', name: '南瓜田，维多利亚，不列颠哥伦比亚省，加拿大 (© Shaun Cunningham/Alamy Stock Photo)' },
        { src: './images/2024-10-27.jpg', name: '北极熊与幼崽，丘吉尔，曼尼托巴，加拿大 (© Design Pics/plainpicture)' },
        { src: './images/2024-10-26.jpg', name: '幽灵森林，宁哈根，梅克伦堡-西波美拉尼亚，德国 (© mauritius images GmbH/Alamy Stock Photo)' },
        { src: './images/2024-10-25.jpg', name: '沙莫尼的勃朗峰，法国 (© Simon Schöpf/Getty Images)' },
        { src: './images/2024-10-24.jpg', name: '博迪州立历史公园，莫诺县，加利福尼亚州，美国 (© Julien McRoberts/Tetra Images, LLC/Alamy Stock Photo)' },
        { src: './images/2024-10-23.jpg', name: '雪莉夫人森林和古堡遗迹，新罕布什尔州，美国 (© yggdrasill/Shutterstock)' },
        { src: './images/2024-10-22.jpg', name: '祖卡里宫，罗马，意大利 (© Photon-Photos/Getty Images)' },
        { src: './images/2024-10-21.jpg', name: '乔治·史密斯州立公园的柏树，佐治亚州，美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2024-10-20.jpg', name: '哥斯达黎加的三趾树懒 (© Harry Collins/Getty Images)' },
        { src: './images/2024-10-19.jpg', name: '哈索尔神庙，邓德拉神庙群，基纳，埃及 (© Nick Brundle Photography/Getty Images)' },
        { src: './images/2024-10-18.jpg', name: '曼哈顿中央公园的秋天，纽约，美国 (© mapman/Shutterstock)' },
        { src: './images/2024-10-17.jpg', name: '地肤草，茨城县，日本 (© DigiPub/Getty Images)' },
        { src: './images/2024-10-16.jpg', name: '侏罗纪海岸的箭石和菊石化石，多塞特郡，英国 (© Nature Picture Library/Alamy Stock Photo)' },
        { src: './images/2024-10-15.jpg', name: '马拉河的角马大迁徙，肯尼亚 (© Ayzenstayn/Getty Images)' },
        { src: './images/2024-10-14.jpg', name: '可可海滩上的渔船，果阿邦，印度 (© Abhinav Sah/Shutterstock)' },
        { src: './images/2024-10-13.jpg', name: '塞维利亚王宫少女庭院，西班牙 (© Danny Lehman/Getty Images)' },
        { src: './images/2024-10-12.jpg', name: '林鸳鸯，魁北克省，加拿大 (© Maxime Riendeau/Getty Images)' },
        { src: './images/2024-10-11.jpg', name: '黄山云海，安徽省，中国 (© yangyang1991/Getty Images)' },
        { src: './images/2024-10-10.jpg', name: '索拉诺，托斯卡纳，意大利 (© Luigi Vaccarella/eStock Photo)' },
        { src: './images/2024-10-09.jpg', name: '马布尔附近的白杨树，科罗拉多州，美国 (© Jason Hatfield/TANDEM Stills + Motion)' },
        { src: './images/2024-10-08.jpg', name: '索拉诺，托斯卡纳，意大利 (© Luigi Vaccarella/eStock Photo)' },
        { src: './images/2024-10-07.jpg', name: '法属波利尼西亚波拉波拉岛的鸟瞰图 (© GLF Media/Shutterstock)' },
        { src: './images/2024-10-06.jpg', name: '郊狼峡谷拱门中的白杨树，格兰峡谷休闲区，犹他州，美国 (© Stephen Matera/TANDEM Stills + Motion)' },
        { src: './images/2024-10-05.jpg', name: '东察沃国家公园的非洲象，肯尼亚 (© Neil Bowman/Minden Pictures)' },
        { src: './images/2024-10-04.jpg', name: '木星的冰卫星木卫二 (© NASA/JPL-Caltech/SETI Institute)' },
        { src: './images/2024-10-03.jpg', name: '阿格拉的泰姬陵，安拉阿巴德，印度 (© Tanarch/Getty Images)' },
        { src: './images/2024-10-02.jpg', name: '温德河，布鲁克斯山脉，北极国家野生动物保护区，阿拉斯加州，美国 (© Design Pics/DanitaDelimont)' },
        { src: './images/2024-10-01.jpg', name: '禾木村的风景，新疆，中国 (© snvv18870020330/Shutterstock)' },
        { src: './images/2024-09-30.jpg', name: '斯匹次卑尔根岛北部的海象群，斯瓦尔巴群岛，挪威 (© AWL Images/DanitaDelimont)' },
        { src: './images/2024-09-29.jpg', name: '横跨胡萨托尼克河的西康沃尔廊桥，康涅狄格州，美国 (© pabradyphoto/Getty Images)' },
        { src: './images/2024-09-28.jpg', name: '日出时的海滩，海湾岛国家海岸，佛罗里达，美国 (© Tim Fitzharris/Minden Pictures)' },
        { src: './images/2024-09-27.jpg', name: '大运河和安康圣母教堂的鸟瞰图，威尼斯，意大利 (© Bachir Moukarzel/Amazing Aerial Agency)' },
        { src: './images/2024-09-26.jpg', name: '蓝斑巨嘴鸟，洛斯戈查尔斯国家公园，哥斯达黎加 (© Oscar Dominguez/Tandem Stills + Motion)' },
        { src: './images/2024-09-25.jpg', name: '巨型红杉，红杉国家公园，加利福尼亚州，美国 (© Galyna Andrushko/Shutterstock)' },
        { src: './images/2024-09-24.jpg', name: '斯卡夫塔山的瀑布，瓦特纳冰川国家公园，冰岛 (© Nopasorn Kowathanakul/Getty Images)' },
        { src: './images/2024-09-23.jpg', name: '海獭，威廉王子湾,阿拉斯加州,美国 (© Gerald Corsi/Getty Images)' },
        { src: './images/2024-09-22.jpg', name: '巴特米尔湖，湖区国家公园，英格兰，英国 (© Alan Novelli/Alamy Stock Photo)' },
        { src: './images/2024-09-21.jpg', name: 'Oktoberfest in Munich at sunset (© AllesSuper21/iStock/Getty Images)' },
        { src: './images/2024-09-20.jpg', name: '奥克拉科克岛上的奥克拉科克灯塔，北卡罗来纳州，美国 (© Chansak Joe/Getty Images)' },
        { src: './images/2024-09-19.jpg', name: '埃尔博河上空的银河，阿尔伯塔省，加拿大 (© Alan Dyer/Getty Images)' },
        { src: './images/2024-09-18.jpg', name: '郡上八幡城，岐阜县，日本 (© ta2funk ito/500px/Getty Images)' },
        { src: './images/2024-09-17.jpg', name: '月圆之夜的豫园，上海，中国 (© zyxeos30/Gettyimages)' },
        { src: './images/2024-09-16.jpg', name: '日出时的小袋鼠，阿德莱德河，北领地，澳大利亚 (© Jeremy Woodhouse/Getty Images)' },
        { src: './images/2024-09-15.jpg', name: '阿科马尼奥海滩，卡拉布里亚，意大利 (© Alessio de Cicco/Getty Images)' },
        { src: './images/2024-09-14.jpg', name: '阿胡汤加里基的日出，拉帕·努伊国家公园，复活节岛，智利 (© Piriya Photography/Getty Images)' },
        { src: './images/2024-09-13.jpg', name: '雷耶斯角国家海岸灯塔，加利福尼亚州，美国 (© RMB Images/Photography by Robert Bowman/Getty Images)' },
        { src: './images/2024-09-12.jpg', name: '留尼汪岛附近的海豚群，印度洋，法国海外省 (© Joost van Uffelen/Shutterstock)' },
        { src: './images/2024-09-11.jpg', name: '埃尔茨城堡，德国 (© Allard Schager/Alamy)' },
        { src: './images/2024-09-10.jpg', name: '瓦斯科·达·伽马大桥，里斯本，葡萄牙 (© Achim Thomae/Getty Images)' },
        { src: './images/2024-09-09.jpg', name: '阿根廷和巴西边境的伊瓜苏瀑布 (© AirPano LLC/Amazing Aerial Agency)' },
        { src: './images/2024-09-08.jpg', name: '加泰罗尼亚北部的圣马丁杜卡尼古修道院 ，法国 (© Cyril Gosselin/Getty Images)' },
        { src: './images/2024-09-07.jpg', name: '朱红蜂鸟，圣克鲁斯，加利福尼亚州，美国 (© yhelfman/Getty Images)' },
        { src: './images/2024-09-06.jpg', name: '古老山毛榉树，格莱纳里夫森林公园，安特里姆郡，北爱尔兰 (© Dawid K Photography/Shutterstock)' },
        { src: './images/2024-09-05.jpg', name: '多伦多城市天际线,加拿大 (© Roberto Machado Noa/Getty Images)' },
        { src: './images/2024-09-04.jpg', name: '乌雕鸮，巴基斯坦 (© zahoor salmi/Getty Images)' },
        { src: './images/2024-09-03.jpg', name: '迷人的水晶湖，高山湖泊，华盛顿州，美国 (© Mitch Pittman/Tandem Stills + Motion)' },
        { src: './images/2024-09-02.jpg', name: '红绿金刚鹦鹉，南马托格罗索州，巴西 (© Ellen Goff/Danita Delimont)' },
        { src: './images/2024-09-01.jpg', name: '泰晤士河，伦敦，英国 (© Puthipong Worasaran/Getty Images)' },
        { src: './images/2024-08-31.jpg', name: '撒哈拉沙漠的岩层和沙丘，贾奈特，阿尔及利亚 (© Airpano/Amazing Aerial Agency)' },
        { src: './images/2024-08-30.jpg', name: '鸟头湾的鲸鲨，西巴布亚，印度尼西亚 (© Andy Lerner/Tandem Stills + Motion)' },
        { src: './images/2024-08-29.jpg', name: '富利特堡-德拉罗卡，加泰罗尼亚，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2024-08-28.jpg', name: '蒙马特和圣心大教堂，巴黎，法国 (© Tuul & Bruno Morandi/Getty Images)' },
        { src: './images/2024-08-27.jpg', name: '黑色凯门鳄幼崽，坦博帕塔国家保护区，秘鲁 (© Maxime Aliaga/Minden Pictures)' },
        { src: './images/2024-08-26.jpg', name: '巴尔米拉环礁国家野生动物保护区，中太平洋 (© Ian Shive/Tandem Stills + Motion)' },
        { src: './images/2024-08-25.jpg', name: '急流湖的日出，冰川国家公园，蒙大拿州，美国 (© Jason Savage/Tandem Stills + Motion)' },
        { src: './images/2024-08-24.jpg', name: '卡塔丁森林和水域国家纪念碑，佩诺布斯科特县，缅因州，美国 (© Cavan Images/Alamy Stock Photo)' },
        { src: './images/2024-08-23.jpg', name: '帕侬蓝寺，武里南府，泰国 (© Banjongseal324/Getty Images)' },
        { src: './images/2024-08-22.jpg', name: '海洋城日出时的鸟瞰图，马里兰州，美国 (© Kevin Olson/Amazing Aerial Agency)' },
        { src: './images/2024-08-21.jpg', name: '纳斯卡鲣鸟，沃尔夫岛，加拉帕戈斯群岛，厄瓜多尔 (© Tui De Roy/Minden Pictures)' },
        { src: './images/2024-08-20.jpg', name: '大提顿国家公园日出,怀俄明州,美国 (© Kurt Budliger/TANDEM Stills + Motion)' },
        { src: './images/2024-08-19.jpg', name: 'Bufadero de la Garita，大加那利岛，西班牙 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2024-08-18.jpg', name: '日落时的亨廷顿海滩码头，加利福尼亚州，美国 (© Stan Moniz Photography/TANDEM Stills + Motion)' },
        { src: './images/2024-08-17.jpg', name: '阿尔凡齐纳灯塔，阿尔加维，葡萄牙 (© Andreas Kunz/Getty Images)' },
        { src: './images/2024-08-16.jpg', name: '长岛温泉乐园的过山车，三重县，日本 (© Japanese amateur photographer/Getty Images)' },
        { src: './images/2024-08-15.jpg', name: '韩松洞，风牙者榜国家公园，越南 (© Geng Xu/Getty Images)' },
        { src: './images/2024-08-14.jpg', name: '澳洲魔蜥，瓦塔卡国家公园，澳大利亚 (© Yva Momatiuk and John Eastcott/Minden Pictures)' },
        { src: './images/2024-08-13.jpg', name: '特拉斯契卡自然公园悬崖，杜吉奥托克岛，克罗地亚 (© Ilija Ascic/Shutterstock)' },
        { src: './images/2024-08-12.jpg', name: '非洲象，肯尼亚安博塞利国家公园 (© Ruzdi Ekenheim/Getty Images)' },
        { src: './images/2024-08-11.jpg', name: '通往肯尼迪湖的木板路，温哥华岛，加拿大不列颠哥伦比亚省 (© EB Adventure Photography/Shutterstock)' },
        { src: './images/2024-08-10.jpg', name: '约书亚树国家公园，加利福尼亚州，美国 (© Chris Moore - Exploring Light Photography/TANDEM Stills + Motion)' },
        { src: './images/2024-08-09.jpg', name: '库斯科附近的萨克塞华曼印加遗址，秘鲁 (© SL_Photography/Getty Images)' },
        { src: './images/2024-08-08.jpg', name: '横斑腹小鸮，曼谷，泰国 (© Tfilm/Getty Images)' },
        { src: './images/2024-08-07.jpg', name: '圣约瑟夫北码头内灯和外灯，密歇根州，美国 (© Kenneth Keifer/Getty Images)' },
        { src: './images/2024-08-06.jpg', name: '莫洛基尼，毛伊岛，夏威夷，美国 (© Douglas Peebles/eStock Photo)' },
        { src: './images/2024-08-05.jpg', name: '薰衣草田，赫特福德郡 ，英格兰，英国 (© George W Johnson/Getty Images)' },
        { src: './images/2024-08-04.jpg', name: '黑斑羚和红嘴牛椋鸟，南非 (© Matrishva Vyas/Getty Images)' },
        { src: './images/2024-08-03.jpg', name: '天生三桥，重庆武隆岩溶国家地质公园，中国 (© Pav-Pro Photography Ltd/Shutterstock)' },
        { src: './images/2024-08-02.jpg', name: '象鼻湾，维尔京群岛国家公园，圣约翰岛 (© wheatley/Getty Images)' },
        { src: './images/2024-08-01.jpg', name: '卡普泰湖水上市场，兰加马蒂，孟加拉 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-07-31.jpg', name: '石林，日落点，布莱斯峡谷国家公园，犹他州，美国 (© Tim Fitzharris/Minden Pictures)' },
        { src: './images/2024-07-30.jpg', name: '圣吉米尼亚诺，锡耶纳，托斯卡纳大区，意大利亚 (© MNStudio/Shutterstock)' },
        { src: './images/2024-07-29.jpg', name: '科贝国家公园的老虎兄弟，北阿坎德邦，印度 (© Sourabh Bharti/Getty Images)' },
        { src: './images/2024-07-28.jpg', name: '斯科讷省海滩上的浴场小屋，瑞典 (© Martin Wahlborg/Getty Images)' },
        { src: './images/2024-07-27.jpg', name: '摩泽尔河谷的葡萄园，莱茵兰-法尔茨，德国 (© Jorg Greuel/Getty Images)' },
        { src: './images/2024-07-26.jpg', name: '塞纳河上的新桥，巴黎，法国 (© f11photo/Getty Images)' },
        { src: './images/2024-07-25.jpg', name: '大烟山国家公园的森林小道，田纳西州，美国 (© putmanphoto/Getty Images)' },
        { src: './images/2024-07-24.jpg', name: '北约克郡的黑面羊羊群，英格兰 (© R A Kearton/Getty Images)' },
        { src: './images/2024-07-23.jpg', name: '迈索尼城堡，麦西尼亚州，希腊 (© Andrew Mayovskyy/Shutterstock)' },
        { src: './images/2024-07-22.jpg', name: '树上的中国小熊猫, 成都, 四川省, 中国 (© Jackyenjoyphotography/Getty Images)' },
        { src: './images/2024-07-21.jpg', name: '肯杜瓦村的木制渔船，桑给巴尔，坦桑尼亚 (© Lubos Paukeje/Alamy Stock Photo)' },
        { src: './images/2024-07-20.jpg', name: '月球 (© Victor Blum/Getty Images)' },
        { src: './images/2024-07-19.jpg', name: '河岸上的一只年轻美洲虎，潘塔纳尔，巴西 (© Tambako the Jaguar/Getty Images)' },
        { src: './images/2024-07-18.jpg', name: 'Coral reef in the Indian Ocean, Mayotte, France (© Gabriel Barathieu/Minden Pictures)' },
        { src: './images/2024-07-17.jpg', name: '德国中世纪城市罗滕堡 (© kanuman/Getty Images)' },
        { src: './images/2024-07-16.jpg', name: '斯卡拉布雷的新石器时代遗迹,奥克尼群岛,苏格兰 (© Paul Williams - FunkyStock/Getty Images)' },
        { src: './images/2024-07-15.jpg', name: '立石公园，神奈川县，日本 (© blew_s/Shutterstock)' },
        { src: './images/2024-07-14.jpg', name: '女王花园群岛的镰形真鲨，古巴 (© Christian Vizl/Tandem Stills + Motion)' },
        { src: './images/2024-07-13.jpg', name: '卡帕多西亚的童话烟囱和窑洞，土耳其 (© Storm Is Me/Shutterstock)' },
        { src: './images/2024-07-12.jpg', name: '雷尼尔山国家公园的野花，华盛顿州，美国 (© RomanKhomlyak/Getty Images)' },
        { src: './images/2024-07-11.jpg', name: '甘吉，西西里岛，意大利 (© Andrea Caruso/Amazing Aerial Agency)' },
        { src: './images/2024-07-10.jpg', name: '领簇舌巨嘴鸟，哥斯达黎加 (© Juan Carlos Vindas/Getty Images)' },
        { src: './images/2024-06-09.jpg', name: '阿根廷拉里奥哈省塔兰帕亚国家公园 (© Gonzalo Azumendi/Getty Images)' },
        { src: './images/2024-06-08.jpg', name: '野生蓝莓 (© Baac3nes/Getty Images)' },
        { src: './images/2024-06-07.jpg', name: '越南安沛省木仓寨的水稻梯田 (© Kiatanan Sugsompian/Getty Images)' },
        { src: './images/2024-06-06.jpg', name: '从康威河眺望康威城堡，威尔士 (© David Chapman/Alamy Stock Photo)' },
        { src: './images/2024-06-05.jpg', name: '丹翠雨林的诺亚海滩，昆士兰州，澳大利亚 (© bjeayes/Getty Images)' },
        { src: './images/2024-06-04.jpg', name: '扎哈拉德拉谢拉，安达卢西亚，西班牙 (© Francesco Carovillano/eStock Photo)' },
        { src: './images/2024-06-03.jpg', name: '猫鼬家族 (© anetapics/Shutterstock)' },
        { src: './images/2024-07-02.jpg', name: '意大利卡，桑蒂蓬塞的一座古罗马城市，塞维利亚，安达卢西亚，西班牙 (© Moses Palermo/Amazing Aerial Agency)' },
        { src: './images/2024-07-01.jpg', name: '菲斯加德灯塔，埃斯奎莫尔特港，科尔伍德，不列颠哥伦比亚省，加拿大 (© davemantel/Getty Images)' },
        { src: './images/2024-06-30.jpg', name: '乌布寺庙的石雕,巴厘岛,印度尼西亚 (© R. Schönebaum/plainpicture)' },
        { src: './images/2024-06-29.jpg', name: '宁哈根的山毛榉林，梅克伦堡-前波美拉尼亚州，德国 (© Martin Ruegner/Getty Images)' },
        { src: './images/2024-06-28.jpg', name: '诺曼底海岸的绍塞群岛，法国 (© Tuul & Bruno Morandi/Getty Images)' },
        { src: './images/2024-06-27.jpg', name: '黄昏时分的圣母百花大教堂，佛罗伦萨，意大利 (© Elena Pueyo/Getty Images)' },
        { src: './images/2024-06-26.jpg', name: '考氏鳍竺鲷与海葵，蓝碧海峡，北苏拉威西，印度尼西亚 (© Constantinos Petrinos/NPL/Minden Pictures)' },
        { src: './images/2024-06-25.jpg', name: '火浪岩层，火焰谷州立公园，内华达州，美国 (© Clint Losee/Tandem Stills + Motion)' },
        { src: './images/2024-06-24.jpg', name: '克里穆图的火山口湖，弗洛勒斯岛，印度尼西亚 (© Shane P. White/Minden Pictures)' },
        { src: './images/2024-06-23.jpg', name: '达卡环形交叉路口的鸟瞰图，孟加拉国 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-06-22.jpg', name: '亚马逊雨林，巴西 (© Claus Meyer/plainpicture)' },
        { src: './images/2024-06-21.jpg', name: '蓝色水面上的渔船航拍图，郴州市，湖南省，中国 (© Haitong Yu/Getty images)' }
    ];

// 配置
const config = {
    itemsPerLoad: 12,
    thumbnailSize: 400,
    currentIndex: 0
};

// DOM 元素
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('load-more');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawerImage = document.getElementById('drawer-image');
const drawerTitle = document.getElementById('drawer-title');
const downloadBtn = document.getElementById('download-btn');
const shareBtn = document.getElementById('share-btn');
const drawerClose = document.querySelector('.drawer-close');
const themeBtn = document.getElementById('theme-btn');

// 主题切换
let isDarkTheme = true;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    themeBtn.textContent = isDarkTheme ? '🌙' : '☀️';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkTheme = savedTheme === 'dark';
        document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
        themeBtn.textContent = isDarkTheme ? '🌙' : '☀️';
    }
}

// 获取缩略图 URL
function getThumbnailUrl(originalSrc, width) {
    const baseUrl = window.location.origin + window.location.pathname;
    const absolutePath = new URL(originalSrc, baseUrl).href;
    return `https://i0.wp.com/${absolutePath.replace(/^https?:\/\//, '')}?w=${width}&quality=85`;
}

// 加载图片
function loadImages() {
    const startIndex = config.currentIndex;
    const endIndex = Math.min(startIndex + config.itemsPerLoad, images.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const image = images[i];
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = i;
        
        const img = document.createElement('img');
        img.src = getThumbnailUrl(image.src, config.thumbnailSize);
        img.alt = image.name;
        img.loading = 'lazy';
        
        // 图片加载完成后添加动画
        img.onload = () => {
            setTimeout(() => {
                galleryItem.style.opacity = '1';
                galleryItem.style.transform = 'translateY(0)';
            }, (i - startIndex) * 50);
        };
        
        galleryItem.addEventListener('click', () => openDrawer(i));
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    }
    
    config.currentIndex = endIndex;
    
    if (config.currentIndex >= images.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// 打开抽屉
function openDrawer(index) {
    const image = images[index];
    
    drawerImage.src = image.src;
    drawerTitle.textContent = image.name;
    downloadBtn.href = image.src;
    downloadBtn.download = `bing-wallpaper-${index + 1}.jpg`;
    
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭抽屉
function closeDrawer() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
}

// 分享功能
function shareImage() {
    const currentImage = drawerImage.src;
    const currentTitle = drawerTitle.textContent;
    
    if (navigator.share) {
        navigator.share({
            title: 'Bing每日壁纸',
            text: currentTitle,
            url: currentImage
        });
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(currentImage).then(() => {
            alert('图片链接已复制到剪贴板');
        });
    }
}

// 事件监听器
themeBtn.addEventListener('click', toggleTheme);
loadMoreBtn.addEventListener('click', loadImages);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
shareBtn.addEventListener('click', shareImage);

// 键盘事件
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDrawer();
    }
});

// 触摸手势支持（移动端下拉关闭抽屉）
let startY = 0;
let currentY = 0;
let isDragging = false;

drawer.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
});

drawer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    
    if (deltaY > 0) {
        const drawerContent = drawer.querySelector('.drawer-content');
        drawerContent.style.transform = `scale(1) translateY(${deltaY}px)`;
    }
});

drawer.addEventListener('touchend', () => {
    if (!isDragging) return;
    
    const deltaY = currentY - startY;
    const drawerContent = drawer.querySelector('.drawer-content');
    
    if (deltaY > 100) {
        closeDrawer();
    } else {
        drawerContent.style.transform = 'scale(1) translateY(0)';
    }
    
    isDragging = false;
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // 添加初始动画样式
    const style = document.createElement('style');
    style.textContent = `
        .gallery-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    loadImages();
});
