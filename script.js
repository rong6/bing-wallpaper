document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const loader = document.getElementById('loader');
    const images = [
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
        { src: './images/2025-02-17.jpg', name: 'Coll d'Ares，加泰罗尼亚比利牛斯​​山脉 (© CRISTIAN IONUT ZAHARIA/Shutterstock)' },
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

    const createImageElement = (image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        const img = document.createElement('img');
        img.alt = image.name;
        img.dataset.src = image.src;

        const name = document.createElement('div');
        name.classList.add('image-name');
        name.textContent = image.name;

        item.appendChild(img);
        item.appendChild(name);
        gallery.appendChild(item);

        // 灯箱
        img.addEventListener('click', () => {
            openLightbox(image);
        });
    };

    images.forEach((image, index) => createImageElement(image, index));

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const downloadLink = document.getElementById('download-link');
    const closeBtn = document.querySelector('.close');

    const openLightbox = (image) => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        caption.textContent = image.name;
        downloadLink.href = image.src;
        downloadLink.download = image.name;
    };

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // 使用 Canvas API 压缩图片
    const compressImage = (url, width, height) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    resolve(URL.createObjectURL(blob));
                }, 'image/jpeg', 0.7); // 压缩质量设置为 0.7
            };
            img.src = url;
        });
    };

    // 懒加载
    const lazyLoad = () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            if (isInViewport(img) && !img.src) {
                compressImage(img.dataset.src, 300, 200).then(compressedSrc => {
                    img.src = compressedSrc;
                });
            }
        });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    // 显示footer和隐藏loader
    window.addEventListener('load', () => {
        document.getElementById('footer').style.display = 'block';
        loader.style.display = 'none';
        lazyLoad(); // 初始加载
    });
});