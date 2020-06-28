// 提供 setData，getData 配置
const initList = [
		{
			"id": 1,
			"name": "李白",
			"birth_year": "701",
			"death_year": "762",
			"life_time": "61",
			"brief_introduction": "李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。",
			"period_id": 48,
			"author_img": "http://img.gushiwen.org/authorImg/libai.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 247,
			"source_url": "http://so.gushiwen.org/author_247.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 2,
			"name": "白居易",
			"birth_year": "772",
			"death_year": "846",
			"life_time": "74",
			"brief_introduction": "白居易（772年－846年），字乐天，号香山居士，又号醉吟先生，祖籍太原，到其曾祖父时迁居下邽，生于河南新郑。是唐代伟大的现实主义诗人，唐代三大诗人之一。白居易与元稹共同倡导新乐府运动，世称“元白”，与刘禹锡并称“刘白”。白居易的诗歌题材广泛，形式多样，语言平易通俗，有“诗魔”和“诗王”之称。官至翰林学士、左赞善大夫。公元846年，白居易在洛阳逝世，葬于香山。有《白氏长庆集》传世，代表诗作有《长恨歌》、《卖炭翁》、《琵琶行》等。",
			"period_id": 48,
			"author_img": "http://img.gushiwen.org/authorImg/baijuyi.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 665,
			"source_url": "http://so.gushiwen.org/author_665.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 3,
			"name": "杜甫",
			"birth_year": "712",
			"death_year": "770",
			"life_time": "58",
			"brief_introduction": "杜甫（712－770），字子美，自号少陵野老，世称“杜工部”、“杜少陵”等，汉族，河南府巩县（今河南省巩义市）人，唐代伟大的现实主义诗人，杜甫被世人尊为“诗圣”，其诗被称为“诗史”。杜甫与李白合称“李杜”，为了跟另外两位诗人李商隐与杜牧即“小李杜”区别开来，杜甫与李白又合称“大李杜”。他忧国忧民，人格高尚，他的约1400余首诗被保留了下来，诗艺精湛，在中国古典诗歌中备受推崇，影响深远。759-766年间曾居成都，后世有杜甫草堂纪念。",
			"period_id": 48,
			"author_img": "http://img.gushiwen.org/authorImg/dufu.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 474,
			"source_url": "http://so.gushiwen.org/author_474.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 4,
			"name": "苏轼",
			"birth_year": "1037",
			"death_year": "1101",
			"life_time": "64",
			"brief_introduction": "苏轼（1037－1101），北宋文学家、书画家、美食家。字子瞻，号东坡居士。汉族，四川人，葬于颍昌（今河南省平顶山市郏县）。一生仕途坎坷，学识渊博，天资极高，诗文书画皆精。其文汪洋恣肆，明白畅达，与欧阳修并称欧苏，为“唐宋八大家”之一；诗清新豪健，善用夸张、比喻，艺术表现独具风格，与黄庭坚并称苏黄；词开豪放一派，对后世有巨大影响，与辛弃疾并称苏辛；书法擅长行书、楷书，能自创新意，用笔丰腴跌宕，有天真烂漫之趣，与黄庭坚、米芾、蔡襄并称宋四家；画学文同，论画主张神似，提倡“士人画”。著有《苏东坡全集》和《东坡乐府》等。",
			"period_id": 65,
			"author_img": "http://img.gushiwen.org/authorImg/sushi.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 183,
			"source_url": "http://so.gushiwen.org/author_183.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 5,
			"name": "辛弃疾",
			"birth_year": "1140",
			"death_year": "1207",
			"life_time": "67",
			"brief_introduction": "辛弃疾（1140－1207），南宋词人。原字坦夫，改字幼安，别号稼轩，汉族，历城（今山东济南）人。出生时，中原已为金兵所占。21岁参加抗金义军，不久归南宋。历任湖北、江西、湖南、福建、浙东安抚使等职。一生力主抗金。曾上《美芹十论》与《九议》，条陈战守之策。其词抒写力图恢复国家统一的爱国热情，倾诉壮志难酬的悲愤，对当时执政者的屈辱求和颇多谴责；也有不少吟咏祖国河山的作品。题材广阔又善化用前人典故入词，风格沉雄豪迈又不乏细腻柔媚之处。由于辛弃疾的抗金主张与当政的主和派政见不合，后被弹劾落职，退隐江西带湖。",
			"period_id": 66,
			"author_img": "http://img.gushiwen.org/authorImg/xinqiji.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 217,
			"source_url": "http://so.gushiwen.org/author_217.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 6,
			"name": "刘禹锡",
			"birth_year": "772",
			"death_year": "842",
			"life_time": "70",
			"brief_introduction": "刘禹锡（772－842），字梦得，汉族，中国唐朝彭城（今徐州）人，祖籍洛阳，唐朝文学家，哲学家，自称是汉中山靖王后裔，曾任监察御史，是王叔文政治改革集团的一员。唐代中晚期著名诗人，有“诗豪”之称。他的家庭是一个世代以儒学相传的书香门第。政治上主张革新，是王叔文派政治革新活动的中心人物之一。后来永贞革新失败被贬为朗州司马（今湖南常德）。据湖南常德历史学家、收藏家周新国先生考证刘禹锡被贬为朗州司马其间写了著名的“汉寿城春望”。",
			"period_id": 48,
			"author_img": "http://img.gushiwen.org/authorImg/liuyuxi.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 197,
			"source_url": "http://so.gushiwen.org/author_197.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 7,
			"name": "李清照",
			"birth_year": "1084",
			"death_year": "3",
			"life_time": "-1081",
			"brief_introduction": "李清照（1084年3月13日～1155年5月12日）号易安居士，汉族，山东省济南章丘人。宋代（南北宋之交）女词人，婉约词派代表，有“千古第一才女”之称。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。论词强调协律，崇尚典雅，提出词“别是一家”之说，反对以作诗文之法作词。能诗，留存不多，部分篇章感时咏史，情辞慷慨，与其词风不同。有《易安居士文集》《易安词》，已散佚。后人有《漱玉词》辑本。今有《李清照集校注》。",
			"period_id": 8,
			"author_img": "http://img.gushiwen.org/authorImg/liqingzhao.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 536,
			"source_url": "http://so.gushiwen.org/author_536.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 8,
			"name": "王维",
			"birth_year": "701",
			"death_year": "761",
			"life_time": "60",
			"brief_introduction": "王维（701年－761年，一说699年—761年），字摩诘，汉族，河东蒲州（今山西运城）人，祖籍山西祁县，唐朝诗人，有“诗佛”之称。苏轼评价其：“味摩诘之诗，诗中有画；观摩诘之画，画中有诗。”开元九年（721年）中进士，任太乐丞。王维是盛唐诗人的代表，今存诗400余首，重要诗作有《相思》《山居秋暝》等。王维精通佛学，受禅宗影响很大。佛教有一部《维摩诘经》，是王维名和字的由来。王维诗书画都很有名，非常多才多艺，音乐也很精通。与孟浩然合称“王孟”。",
			"period_id": 48,
			"author_img": "http://img.gushiwen.org/authorImg/wangwei.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 515,
			"source_url": "http://so.gushiwen.org/author_515.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 9,
			"name": "李商隐",
			"birth_year": "不详",
			"death_year": "不详",
			"life_time": "50",
			"brief_introduction": "李商隐，字义山，号玉溪（谿）生、樊南生，唐代著名诗人，祖籍河内（今河南省焦作市）沁阳，出生于郑州荥阳。他擅长诗歌写作，骈文文学价值也很高，是晚唐最出色的诗人之一，和杜牧合称“小李杜”，与温庭筠合称为“温李”，因诗文与同时期的段成式、温庭筠风格相近，且三人都在家族里排行第十六，故并称为“三十六体”。其诗构思新奇，风格秾丽，尤其是一些爱情诗和无题诗写得缠绵悱恻，优美动人，广为传诵。但部分诗歌过于隐晦迷离，难于索解，至有“诗家总爱西昆好，独恨无人作郑笺”之说。因处于牛李党争的夹缝之中，一生很不得志。死后葬于家乡沁阳（今河南焦作市沁阳与博爱县交界之处）。作品收录为《李义山诗集》。",
			"period_id": 0,
			"author_img": "http://img.gushiwen.org/authorImg/lishangyin.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 204,
			"source_url": "http://so.gushiwen.org/author_204.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		},
		{
			"id": 10,
			"name": "纳兰性德",
			"birth_year": "1655",
			"death_year": "1685",
			"life_time": "30",
			"brief_introduction": "纳兰性德（1655－1685），满洲人，字容若，号楞伽山人，清代最著名词人之一。其诗词“纳兰词”在清代以至整个中国词坛上都享有很高的声誉，在中国文学史上也占有光采夺目的一席。他生活于满汉融合时期，其贵族家庭兴衰具有关联于王朝国事的典型性。虽侍从帝王，却向往经历平淡。特殊的生活环境背景，加之个人的超逸才华，使其诗词创作呈现出独特的个性和鲜明的艺术风格。流传至今的《木兰花令·拟古决绝词》——“人生若只如初见，何事秋风悲画扇？等闲变却故人心，却道故人心易变。”富于意境，是其众多代表作之一。",
			"period_id": 72,
			"author_img": "http://img.gushiwen.org/authorImg/nalanxingde.jpg",
			"author_stars": 5,
			"source": 1,
			"source_id": 188,
			"source_url": "http://so.gushiwen.org/author_188.aspx",
			"create_time": "2017-09-02 08:38:20",
			"update_time": "2017-09-02 08:38:20"
		}
	];

module.exports = (function() {
  var _data = initList;

  const setData = function(data) {
    _data = data;
    return _data;
  }

  const getData = function() {
    return _data;
  }

  const appendData = function(data) {
		_data = _data.concat(data)
    return _data;
  }

	return {
		setData,
		getData,
		appendData
	}
})();