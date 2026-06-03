(function () {
  const sourceLinks = {
    s1: "https://www.amac.org.cn/xwfb/tzgg/202509/P020250919537331992092.pdf",
    s3: "https://www.amac.org.cn/fwdt/wyb/rygl/cyks/cyksjcdg/jcksdg/202509/P020250919537333321860.pdf"
  };

  const mistakeTraps = {
    "掌握": "掌握类考点常考责任主体、流程顺序、禁止行为和场景判断，要避免只记关键词。",
    "理解": "理解类考点常考概念边界、相邻制度差异和适用场景，不要把相似表述混用。",
    "了解": "了解类考点重点抓定位、作用和基本方向，通常不要求展开复杂计算或细节推导。"
  };

  const wrongOptionPools = {
    guarantee: [
      "只要完成销售，管理人即可承诺固定收益",
      "投资者购买后本金和收益均应由销售机构兜底",
      "产品备案或披露完成后，即代表监管机构保证收益",
      "历史业绩较好时，可以向投资者承诺未来业绩"
    ],
    disclosure: [
      "只向大额投资者披露风险，小额投资者可以不披露",
      "投资者签字后，管理人可以不再履行信息披露义务",
      "为了提高效率，可以省略风险揭示和资料留痕",
      "不利信息可以等到产品结束后再统一说明"
    ],
    role: [
      "销售人员可以替代投资决策委员会作出投资决定",
      "托管人可以直接决定基金投资组合和收益分配",
      "投资者适当性由投资者自行判断，机构无需核验",
      "外包服务机构可以替代管理人承担全部受托责任"
    ],
    process: [
      "只要结果有利于投资者，就可以跳过规定程序",
      "内部审批可以在业务完成后长期不补充记录",
      "募集、投资、披露和备案之间没有先后要求",
      "出现重大事项时，可以不报告也不更新资料"
    ],
    concept: [
      "该考点只适用于银行存款，不适用于基金业务",
      "该考点的核心是取消投资风险和市场波动",
      "该考点意味着基金可以脱离监管规则独立运作",
      "该考点要求所有投资者承担完全相同的投资结果"
    ],
    market: [
      "一级市场是已经发行证券的集中流通市场",
      "资本市场只交易一年以内的短期金融工具",
      "货币市场主要交易未上市企业控制权",
      "金融市场的价格发现功能等同于保证价格永远正确"
    ]
  };

  const directStemTemplates = [
    ({ point }) => `下列哪一项最符合「${point}」的基本含义？`,
    ({ point }) => `关于「${point}」，下列理解正确的是？`,
    ({ point }) => `学习「${point}」时，最应把握的核心是？`,
    ({ point }) => `下列哪项属于「${point}」通常考查的内容？`,
    ({ point }) => `从考试角度看，「${point}」最可能要求考生掌握什么？`,
    ({ point }) => `下列关于「${point}」的表述，哪一项更准确？`,
    ({ point }) => `围绕「${point}」，下列哪项属于正确判断？`,
    ({ point }) => `下列哪一项与「${point}」的制度定位最一致？`
  ];

  const scenarioStemTemplates = [
    ({ point }) => `某基金机构办理与「${point}」有关的业务时，较合规的做法是？`,
    ({ point }) => `在「${point}」相关场景中，从业人员首先应避免哪类做法？`,
    ({ point }) => `客户询问「${point}」相关安排时，销售人员的正确回应是？`,
    ({ point }) => `某管理人在落实「${point}」要求时，下列做法更恰当的是？`,
    ({ point }) => `如果业务流程涉及「${point}」，下列处理方式更符合规范的是？`,
    ({ point }) => `围绕「${point}」发生争议时，判断合规性的关键依据是？`,
    ({ point }) => `某产品运作中涉及「${point}」，管理人应重点做到什么？`,
    ({ point }) => `在投资者保护视角下，「${point}」相关业务更应强调什么？`
  ];

  const errorStemTemplates = [
    ({ point }) => `关于「${point}」，下列哪一项说法错误？`,
    ({ point }) => `下列哪项最可能违反「${point}」的要求？`,
    ({ point }) => `围绕「${point}」，哪一项属于常见误区？`,
    ({ point }) => `下列哪种表述最容易造成对「${point}」的误解？`,
    ({ point }) => `考查「${point}」时，哪个选项通常应被排除？`,
    ({ point }) => `下列哪项与「${point}」的正确要求相冲突？`,
    ({ point }) => `判断「${point}」相关选项时，最需要警惕哪种说法？`,
    ({ point }) => `下列关于「${point}」的理解，哪一项不恰当？`
  ];

  const directCorrectTemplates = [
    ({ base }) => base,
    ({ base }) => `以${base}为判断重点`,
    ({ base }) => `围绕${base}理解其制度作用`,
    ({ base }) => `结合${base}判断主体责任和流程要求`,
    ({ base }) => `把${base}作为区分相似概念的关键`
  ];

  const scenarioCorrectTemplates = [
    ({ base }) => `围绕${base}履行必要程序，并保留业务记录`,
    ({ base }) => `充分说明${base}相关风险和限制，避免误导投资者`,
    ({ base }) => `按照${base}判断职责边界，不作收益或本金承诺`,
    ({ base }) => `结合${base}完成适当性、披露或内部审批要求`,
    ({ base }) => `发现异常时依据${base}及时报告、整改并留痕`
  ];

  const errorCorrectTemplates = [
    ({ point }) => `把「${point}」理解成保本保收益安排`,
    ({ point }) => `以销售便利为由弱化「${point}」相关程序`,
    ({ point }) => `认为「${point}」只需要口头说明，无需记录和监督`,
    ({ point }) => `将「${point}」与相邻概念混同，忽视适用边界`,
    ({ point }) => `认为投资者同意后即可不执行「${point}」相关规则`
  ];

  const pick = (items, seed) => items[Math.abs(seed) % items.length];

  const pickWrongOptions = (seed, count = 3) => {
    const poolNames = Object.keys(wrongOptionPools);
    const start = seed % poolNames.length;
    const selected = [];
    for (let i = 0; selected.length < count && i < poolNames.length * 2; i += 1) {
      const pool = wrongOptionPools[poolNames[(start + i) % poolNames.length]];
      const option = pool[(seed + i) % pool.length];
      if (!selected.includes(option)) selected.push(option);
    }
    return selected;
  };

  const withAnswer = (correct, wrongs, seed) => {
    const answer = seed % 4;
    const options = [];
    let wrongIndex = 0;
    for (let index = 0; index < 4; index += 1) {
      options.push(index === answer ? correct : wrongs[wrongIndex++]);
    }
    return { options, answer };
  };

  const customQuestionBanks = {
    "s1-c1": [
      {
        id: "s1-c1-q1",
        point: "金融市场的功能和分类",
        difficulty: "基础",
        stem: "下列哪一项最能体现金融市场的资金融通功能？",
        options: ["企业通过发行债券向投资者筹集资金", "企业调整内部岗位职责", "投资者阅读基金宣传材料", "监管机构发布行业统计数据"],
        answer: 0,
        explanation: "资金融通是金融市场最基础的功能，表现为资金从盈余方流向短缺方，例如发行股票、债券或基金份额募集资金。",
        trap: "不要把信息披露、监管统计等辅助活动误认为资金融通本身。"
      },
      {
        id: "s1-c1-q2",
        point: "金融市场的功能和分类",
        difficulty: "理解",
        stem: "证券交易价格持续反映投资者对上市公司未来盈利的判断，这主要体现了金融市场的哪项功能？",
        options: ["价格发现", "强制担保", "行政审批", "固定收益承诺"],
        answer: 0,
        explanation: "金融资产交易价格会汇集市场参与者对风险、收益和信息的判断，因此体现价格发现功能。",
        trap: "价格发现不等于价格一定正确，也不等于保证收益。"
      },
      {
        id: "s1-c1-q3",
        point: "金融市场的功能和分类",
        difficulty: "易错",
        stem: "按金融工具期限划分，通常期限在一年以内的金融市场称为？",
        options: ["货币市场", "资本市场", "一级市场", "衍生品市场"],
        answer: 0,
        explanation: "按期限划分，货币市场通常交易一年以内的短期金融工具；资本市场交易中长期金融工具。",
        trap: "一级市场/二级市场是按发行和流通环节划分，不是按期限划分。"
      },
      {
        id: "s1-c1-q4",
        point: "资产管理行业的本质",
        difficulty: "基础",
        stem: "资产管理业务中，管理人和投资者之间更接近哪种关系？",
        options: ["受托管理关系", "雇佣劳动关系", "本金担保关系", "行政隶属关系"],
        answer: 0,
        explanation: "资产管理体现受人之托、代人理财，管理人按照合同和法规为投资者管理资产。",
        trap: "受托管理不代表管理人可以承诺本金或收益。"
      },
      {
        id: "s1-c1-q5",
        point: "资产管理行业的本质",
        difficulty: "场景",
        stem: "销售人员向客户介绍基金产品时，哪种表述最符合资产管理业务的基本要求？",
        options: ["本产品收益稳定，不会亏损", "过往业绩优秀，所以未来收益可以保证", "产品存在投资风险，收益由投资结果决定", "只要长期持有，就一定高于银行存款"],
        answer: 2,
        explanation: "资产管理产品的收益取决于投资结果，投资者应自担风险，销售人员不得承诺保本保收益。",
        trap: "题干中出现“一定”“保证”“不会亏损”，通常是违规或错误表述。"
      },
      {
        id: "s1-c1-q6",
        point: "资产管理行业的本质",
        difficulty: "易错",
        stem: "关于资产管理人的职责，下列说法正确的是？",
        options: ["应按合同约定和勤勉尽责原则管理资产", "应在产品亏损时用自有资金补足投资者本金", "可以为了扩大规模弱化风险揭示", "可以把投资决策完全交给销售人员"],
        answer: 0,
        explanation: "资产管理人应依法合规、勤勉尽责地管理资产，但不能违规承诺或补足收益。",
        trap: "管理人承担管理责任，不等于承担投资结果的兜底责任。"
      },
      {
        id: "s1-c1-q7",
        point: "居民理财与财富管理需求",
        difficulty: "基础",
        stem: "居民财富管理需求增长，对基金行业最直接的影响是？",
        options: ["推动专业化、长期化的资产配置需求增加", "取消投资者风险承受能力差异", "使所有基金都变成保本产品", "让基金销售不再需要适当性管理"],
        answer: 0,
        explanation: "居民财富管理需求提升，会推动公募基金、养老投资、长期资产配置等专业化服务发展。",
        trap: "理财需求增加不等于风险消失，也不等于可以跳过适当性。"
      },
      {
        id: "s1-c1-q8",
        point: "居民理财与财富管理需求",
        difficulty: "理解",
        stem: "投资者把资金全部投入单一高波动资产，最可能忽视了财富管理中的哪项原则？",
        options: ["分散配置和风险匹配", "每日交易原则", "刚性兑付原则", "收益固定原则"],
        answer: 0,
        explanation: "财富管理强调根据目标、期限、风险承受能力进行资产配置，分散风险并匹配投资者需求。",
        trap: "财富管理不是追逐单一高收益资产，更不是刚性兑付。"
      },
      {
        id: "s1-c1-q9",
        point: "居民理财与财富管理需求",
        difficulty: "易错",
        stem: "下列哪项最符合长期投资理念？",
        options: ["根据目标和风险承受能力进行持续配置", "每天追逐短期热点并频繁满仓切换", "只购买承诺高收益的产品", "亏损时要求销售机构刚性兑付"],
        answer: 0,
        explanation: "长期投资强调基于目标、期限和风险承受能力进行配置，而不是依赖短期热点和收益承诺。",
        trap: "长期投资不等于永远不调整，而是避免非理性的短期追涨杀跌。"
      },
      {
        id: "s1-c1-q10",
        point: "投资基金的定义和特点",
        difficulty: "基础",
        stem: "投资基金“集合投资”的含义是？",
        options: ["将众多投资者资金集中起来进行投资运作", "由单个投资者独立决定全部投资", "所有投资者必须获得同一固定收益", "基金管理人把自有资金全部投入基金"],
        answer: 0,
        explanation: "集合投资是投资基金的重要特点，即将众多投资者资金汇集，由专业机构进行组合投资。",
        trap: "集合投资强调资金汇集和共同参与，不等于固定收益。"
      },
      {
        id: "s1-c1-q11",
        point: "投资基金的定义和特点",
        difficulty: "理解",
        stem: "基金通过持有多种证券来降低单一证券波动影响，主要体现了哪项特点？",
        options: ["组合投资", "行政管理", "刚性兑付", "单一资产投资"],
        answer: 0,
        explanation: "组合投资通过配置多种资产分散个别资产风险，是基金区别于单一证券投资的重要特点。",
        trap: "分散风险只能降低部分非系统性风险，不能消除所有风险。"
      },
      {
        id: "s1-c1-q12",
        point: "投资基金的定义和特点",
        difficulty: "易错",
        stem: "“利益共享、风险共担”在基金中通常指？",
        options: ["投资者按基金合同约定分享收益并承担投资风险", "管理人保证投资者本金不受损失", "托管人决定基金最终收益率", "销售机构承担全部市场波动"],
        answer: 0,
        explanation: "基金投资结果由基金财产承担，投资者按照份额分享收益并承担风险。",
        trap: "利益共享、风险共担不是保本保收益，也不是销售机构兜底。"
      },
      {
        id: "s1-c1-q13",
        point: "投资基金的主要类别",
        difficulty: "基础",
        stem: "主要投资于公开交易证券的基金，一般属于哪类基金？",
        options: ["证券投资基金", "股权投资基金", "房地产开发项目", "商业银行表内贷款"],
        answer: 0,
        explanation: "证券投资基金主要投资于股票、债券、货币市场工具等公开交易证券。",
        trap: "股权投资基金通常投资非公开交易股权，流动性和期限特征不同。"
      },
      {
        id: "s1-c1-q14",
        point: "投资基金的主要类别",
        difficulty: "理解",
        stem: "私募股权投资基金与公募证券投资基金相比，通常更突出的特征是？",
        options: ["投资期限较长、流动性较低", "每日开放申购赎回", "必须承诺固定收益", "只能投资货币市场工具"],
        answer: 0,
        explanation: "私募股权投资基金多投资未上市企业股权，投资期限较长、退出不确定、流动性较低。",
        trap: "不要把开放式公募基金的每日申赎特征套到私募股权基金上。"
      },
      {
        id: "s1-c1-q15",
        point: "投资基金的主要类别",
        difficulty: "易错",
        stem: "下列哪项最可能属于货币市场基金的投资对象？",
        options: ["短期高流动性货币市场工具", "未上市创业企业股权", "长期控股型并购项目", "艺术品实物资产"],
        answer: 0,
        explanation: "货币市场基金主要投资短期、高流动性的货币市场工具。",
        trap: "货币基金强调短期和流动性，不等于没有风险。"
      },
      {
        id: "s1-c1-q16",
        point: "基金业在金融体系中的作用",
        difficulty: "基础",
        stem: "基金业服务实体经济的常见方式是？",
        options: ["通过投资股票、债券、股权等为企业融资和发展提供资金支持", "替企业决定所有经营事项", "保证所有企业融资零成本", "代替监管机构审批企业上市"],
        answer: 0,
        explanation: "基金通过资本市场和股权投资等方式把社会资金导向企业和项目，支持实体经济发展。",
        trap: "基金提供资本支持和治理促进，不等于替代企业经营或监管审批。"
      },
      {
        id: "s1-c1-q17",
        point: "基金业在金融体系中的作用",
        difficulty: "理解",
        stem: "基金产品为普通投资者提供专业管理和分散投资工具，主要体现了基金业的哪项价值？",
        options: ["普惠理财和专业资产配置", "强制所有投资者盈利", "取消投资者教育需求", "替代银行存款保险制度"],
        answer: 0,
        explanation: "基金业能够让普通投资者以较低门槛参与专业化、组合化投资，是普惠金融和财富管理的重要组成部分。",
        trap: "普惠理财不代表无风险，更不代表收益保证。"
      },
      {
        id: "s1-c1-q18",
        point: "基金业在金融体系中的作用",
        difficulty: "易错",
        stem: "关于基金业作用，下列说法错误的是？",
        options: ["基金业可以保证投资者在任何市场环境下盈利", "基金业有助于优化资源配置", "基金业有助于居民财富管理", "基金业可以通过资本市场支持实体经济"],
        answer: 0,
        explanation: "基金业能够发挥资源配置、财富管理和服务实体经济作用，但不能保证投资者在任何市场环境下盈利。",
        trap: "凡是把基金业作用表述成“保证盈利”“消除风险”的选项，一般都是错误的。"
      }
    ],
    "s3-c1": [
      {
        id: "s3-c1-q1",
        point: "股权投资基金的概念和特点",
        difficulty: "基础",
        stem: "股权投资基金通常主要投资于哪类资产？",
        options: ["非公开交易的企业股权", "每日可赎回的货币市场工具", "银行活期存款", "标准化短期票据"],
        answer: 0,
        explanation: "股权投资基金通常投资未上市企业或非公开交易股权，通过企业成长、并购或上市退出实现收益。",
        trap: "不要把私募股权基金和开放式货币基金混淆。"
      },
      {
        id: "s3-c1-q2",
        point: "股权投资基金的概念和特点",
        difficulty: "理解",
        stem: "股权投资基金通常流动性较低，主要原因是？",
        options: ["投资标的多为非公开交易股权，退出需要较长周期", "法律规定基金份额不得转让", "所有项目都必须每日估值交易", "基金管理人必须每日开放赎回"],
        answer: 0,
        explanation: "非公开股权缺少连续公开交易市场，退出通常依赖上市、并购、转让或回购，因此周期较长、流动性较低。",
        trap: "流动性低是资产和退出机制决定的，不是每日开放申赎。"
      },
      {
        id: "s3-c1-q3",
        point: "股权投资基金的概念和特点",
        difficulty: "易错",
        stem: "关于股权投资基金，下列说法错误的是？",
        options: ["通常可以向不特定公众公开募集", "投资期限通常较长", "投资收益具有不确定性", "可能参与被投企业价值提升"],
        answer: 0,
        explanation: "私募股权投资基金不得向不特定对象公开募集，应面向合格投资者非公开募集。",
        trap: "看到“公开募集”“不特定公众”要特别警惕。"
      },
      {
        id: "s3-c1-q4",
        point: "股权投资基金的功能和作用",
        difficulty: "基础",
        stem: "股权投资基金支持创新创业，主要体现在哪个方面？",
        options: ["为早期或成长型企业提供长期资本", "替企业免除全部经营风险", "保证企业一定上市", "让企业不再需要治理结构"],
        answer: 0,
        explanation: "股权投资基金通过提供长期资本和管理赋能，支持创业企业成长和产业升级。",
        trap: "资本支持不等于保证上市或消除经营风险。"
      },
      {
        id: "s3-c1-q5",
        point: "股权投资基金的功能和作用",
        difficulty: "理解",
        stem: "股权投资基金参与被投企业治理和资源整合，主要目的通常是？",
        options: ["促进企业价值提升并创造退出条件", "取代企业所有日常经营人员", "避免披露任何经营信息", "承诺投资者固定收益"],
        answer: 0,
        explanation: "投后管理和资源整合有助于提升企业价值，为后续退出创造条件。",
        trap: "投后赋能不是替代企业经营，也不是保本收益安排。"
      },
      {
        id: "s3-c1-q6",
        point: "股权投资基金的功能和作用",
        difficulty: "易错",
        stem: "下列哪项不是股权投资基金的典型作用？",
        options: ["保证投资者随时按净值赎回", "促进创新资本形成", "支持企业规范治理", "推动产业整合和升级"],
        answer: 0,
        explanation: "股权投资基金通常不具备开放式基金随时赎回的特征，其退出依赖项目退出和基金安排。",
        trap: "把“每日赎回”放进股权投资基金题目里，多数情况下是干扰项。"
      },
      {
        id: "s3-c1-q7",
        point: "股权投资基金发展概况",
        difficulty: "了解",
        stem: "我国股权投资基金行业发展过程中，监管趋势更强调哪一项？",
        options: ["规范募集运作和保护投资者", "取消合格投资者要求", "允许公开承诺收益", "放弃行业自律管理"],
        answer: 0,
        explanation: "随着行业发展，监管和自律规则更强调登记备案、合格投资者、信息披露和投资者保护。",
        trap: "行业发展不等于监管放松到无规则。"
      },
      {
        id: "s3-c1-q8",
        point: "股权投资基金发展概况",
        difficulty: "理解",
        stem: "股权投资基金行业走向规范化，对管理人的直接要求是？",
        options: ["建立合规内控并持续履行信息报送义务", "只关注募资规模即可", "不再需要登记备案", "可以不识别投资者风险承受能力"],
        answer: 0,
        explanation: "规范化发展要求管理人具备合规内控能力，履行登记备案、持续信息报送和投资者保护义务。",
        trap: "规模扩张不能替代合规和风险管理。"
      },
      {
        id: "s3-c1-q9",
        point: "股权投资基金发展概况",
        difficulty: "易错",
        stem: "关于行业自律管理，下列说法正确的是？",
        options: ["自律管理是行政监管之外的重要约束机制", "自律规则没有任何约束力", "登记备案等于监管对收益作出保证", "备案完成后无需持续合规"],
        answer: 0,
        explanation: "行业自律管理通过规则、登记备案、信息报送、检查和纪律处分等方式约束市场主体。",
        trap: "备案不是收益背书，也不是合规责任的终点。"
      },
      {
        id: "s3-c1-q10",
        point: "募投管退运作流程",
        difficulty: "基础",
        stem: "股权投资基金的典型运作流程通常概括为？",
        options: ["募、投、管、退", "申购、赎回、分红、清盘", "开户、下单、成交、交割", "存款、贷款、汇款、结算"],
        answer: 0,
        explanation: "股权投资基金围绕募集、投资、投后管理和退出四个环节展开。",
        trap: "申购赎回是开放式基金常见表述，不是股权投资基金运作主线。"
      },
      {
        id: "s3-c1-q11",
        point: "募投管退运作流程",
        difficulty: "理解",
        stem: "尽职调查和投资决策主要属于“募投管退”中的哪个环节？",
        options: ["投", "募", "管", "退"],
        answer: 0,
        explanation: "项目筛选、尽职调查、估值谈判、投资决策和交易交割主要属于投资环节。",
        trap: "投后跟踪属于“管”，上市或股权转让属于“退”。"
      },
      {
        id: "s3-c1-q12",
        point: "募投管退运作流程",
        difficulty: "场景",
        stem: "基金管理人跟踪被投企业经营情况，并帮助其引入战略资源，这主要属于哪个环节？",
        options: ["管", "募", "投", "基金设立"],
        answer: 0,
        explanation: "跟踪经营、治理参与、资源支持和风险处置属于投后管理环节。",
        trap: "投后管理是股权投资基金价值创造的重要环节。"
      },
      {
        id: "s3-c1-q13",
        point: "创业投资与并购投资",
        difficulty: "基础",
        stem: "创业投资基金通常更关注哪类企业？",
        options: ["早期或成长性的创新创业企业", "只购买国债的企业", "已经清算终止的企业", "没有成长需求的成熟存款机构"],
        answer: 0,
        explanation: "创业投资基金通常投资早期或成长性创新创业企业，关注企业成长潜力。",
        trap: "创业投资不等于短期低风险理财。"
      },
      {
        id: "s3-c1-q14",
        point: "创业投资与并购投资",
        difficulty: "理解",
        stem: "并购基金与创业投资基金相比，通常更强调？",
        options: ["通过控制权或重大影响推动整合和价值提升", "只投资银行活期存款", "每日开放赎回", "不得参与企业治理"],
        answer: 0,
        explanation: "并购基金常通过取得控制权或重大影响，对企业进行整合、重组和价值提升。",
        trap: "并购投资往往更重视控制、整合和运营改善。"
      },
      {
        id: "s3-c1-q15",
        point: "创业投资与并购投资",
        difficulty: "易错",
        stem: "下列关于创业投资和并购投资的说法，错误的是？",
        options: ["二者都必须承诺投资者固定收益", "创业投资更常投向早期成长企业", "并购投资可能涉及控制权安排", "二者都属于股权投资的重要类型"],
        answer: 0,
        explanation: "创业投资和并购投资都具有投资风险，不能承诺固定收益。",
        trap: "“固定收益承诺”在私募股权题目中通常是错误选项。"
      },
      {
        id: "s3-c1-q16",
        point: "股权投资基金风险特征",
        difficulty: "基础",
        stem: "股权投资基金风险较高的重要原因之一是？",
        options: ["被投企业成长和退出结果存在较大不确定性", "所有投资都有政府兜底", "基金份额每天在交易所活跃交易", "管理人必须保证本金"],
        answer: 0,
        explanation: "股权投资基金收益依赖企业成长、估值变化和退出机会，存在较高不确定性。",
        trap: "风险较高不等于不能投资，而是需要合格投资者和充分风险揭示。"
      },
      {
        id: "s3-c1-q17",
        point: "股权投资基金风险特征",
        difficulty: "理解",
        stem: "估值不确定性在股权投资基金中更突出，主要因为？",
        options: ["非上市企业缺少连续公开市场价格", "所有项目都有统一挂牌价格", "基金管理人可以任意确定收益", "投资者每天可以按净值赎回"],
        answer: 0,
        explanation: "非上市企业通常没有连续公开交易价格，估值需要结合财务、业务、行业和交易条款判断。",
        trap: "估值不确定不代表可以随意估值，仍需遵循估值方法和程序。"
      },
      {
        id: "s3-c1-q18",
        point: "股权投资基金风险特征",
        difficulty: "易错",
        stem: "面向投资者介绍股权投资基金风险时，最合规的表述是？",
        options: ["项目退出存在不确定性，投资者应充分了解并承担风险", "管理人会保证项目上市退出", "亏损时由销售机构补足本金", "只要持有满一年就不会亏损"],
        answer: 0,
        explanation: "股权投资基金应充分揭示投资期限、流动性、估值和退出不确定等风险，不得承诺收益或兜底。",
        trap: "风险揭示不能写成营销承诺。"
      }
    ]
  };

  function makeQuestions(subjectCode, chapterIndex, chapterTitle, sectionIndex, section) {
    const prefix = `${subjectCode}-c${chapterIndex}-q${sectionIndex}`;
    const level = section.level || "理解";
    const base = section.base || section.point;
    const why = section.why || `「${section.point}」需要结合${base}来理解，考试可能从概念识别、职责边界、流程要求或禁止行为角度设问。`;
    const trap = section.trap || mistakeTraps[level];
    const seed = chapterIndex * 17 + sectionIndex * 5 + subjectCode.length;
    const directCorrect = pick(directCorrectTemplates, seed)({ ...section, base });
    const scenarioCorrect = pick(scenarioCorrectTemplates, seed + 2)({ ...section, base });
    const errorCorrect = pick(errorCorrectTemplates, seed + 4)({ ...section, base });
    const direct = withAnswer(directCorrect, pickWrongOptions(seed), seed);
    const scenario = withAnswer(scenarioCorrect, pickWrongOptions(seed + 3), seed + 1);
    const error = withAnswer(errorCorrect, [
      `按${base}进行判断和执行`,
      "保留必要记录并接受内部或外部监督",
      "按照适当性、信息披露和风险控制要求处理业务"
    ], seed + 2);
    return [
      {
        id: `${prefix}-a`,
        point: section.point,
        difficulty: level,
        stem: pick(directStemTemplates, seed)({ ...section, base }),
        options: direct.options,
        answer: direct.answer,
        explanation: why,
        trap
      },
      {
        id: `${prefix}-b`,
        point: section.point,
        difficulty: "场景",
        stem: pick(scenarioStemTemplates, seed + 1)({ ...section, base }),
        options: scenario.options,
        answer: scenario.answer,
        explanation: `场景题不只考记忆，还考能否把「${section.point}」落实到具体行为。正确做法应围绕${base}，同时满足合规、披露、留痕和投资者保护要求。`,
        trap: "场景题里出现“客户同意即可”“先做后补”“保证收益”“省略流程”等表述时，要优先排除。"
      },
      {
        id: `${prefix}-c`,
        point: section.point,
        difficulty: "易错",
        stem: pick(errorStemTemplates, seed + 2)({ ...section, base }),
        options: error.options,
        answer: error.answer,
        explanation: `易错题通常把「${section.point}」和保本承诺、职责混同、流程省略或概念边界混淆放在一起考。应回到${base}判断。`,
        trap: "看到“完全”“必然”“无需”“只要同意即可”等绝对化表述，要优先警惕。"
      }
    ];
  }

  function buildSubject(subject) {
    return {
      id: subject.id,
      code: subject.code,
      title: subject.title,
      source: subject.source,
      chapters: subject.chapters.map((chapter, chapterOffset) => {
        const chapterIndex = chapterOffset + 1;
        return {
          id: `${subject.id}-c${chapterIndex}`,
          title: `第${chapterIndex}章 ${chapter.title}`,
          summary: chapter.summary,
          questions: customQuestionBanks[`${subject.id}-c${chapterIndex}`] ||
            chapter.sections.flatMap((section, sectionOffset) =>
              makeQuestions(subject.id, chapterIndex, chapter.title, sectionOffset + 1, section)
            )
        };
      })
    };
  }

  const outline = [
    {
      id: "s1",
      code: "科目一",
      title: "基金基础知识与法律法规",
      source: sourceLinks.s1,
      chapters: [
        {
          title: "金融市场、资产管理与投资基金",
          summary: "金融市场功能、资产管理行业定位、投资基金基本属性和分类。",
          sections: [
            { point: "金融市场的功能和分类", level: "理解", base: "资金融通、价格发现、风险管理和资源配置" },
            { point: "资产管理行业的本质", level: "掌握", base: "受人之托、代人理财、风险自担" },
            { point: "居民理财与财富管理需求", level: "了解", base: "居民财富管理需求与长期投资理念" },
            { point: "投资基金的定义和特点", level: "掌握", base: "组合投资、专业管理、利益共享、风险共担" },
            { point: "投资基金的主要类别", level: "理解", base: "证券投资基金、股权投资基金和其他资管产品的区别" },
            { point: "基金业在金融体系中的作用", level: "了解", base: "服务实体经济、优化资源配置和普惠理财" }
          ]
        },
        {
          title: "证券投资基金概述",
          summary: "证券投资基金法律形式、运作方式、参与主体和产品类型。",
          sections: [
            { point: "证券投资基金的概念和特征", level: "掌握", base: "集合投资、独立托管、组合投资和专业管理" },
            { point: "契约型基金与公司型基金", level: "理解", base: "法律形式、权利义务和治理结构差异" },
            { point: "开放式基金与封闭式基金", level: "掌握", base: "份额变动、申赎安排和交易场所差异" },
            { point: "公募基金与私募基金", level: "掌握", base: "募集对象、信息披露和监管要求差异" },
            { point: "基金管理人、托管人与份额持有人", level: "掌握", base: "主要当事人的权利义务和职责边界" },
            { point: "基金产品类型", level: "理解", base: "股票基金、债券基金、混合基金、货币市场基金等分类" },
            { point: "基金运作流程", level: "理解", base: "募集、备案、投资运作、估值、申赎、清算" }
          ]
        },
        {
          title: "基金法规体系与监管体系",
          summary: "法律法规、自律规则、监管目标、监管机构和行业自律。",
          sections: [
            { point: "基金法律法规体系", level: "理解", base: "法律、行政法规、部门规章、规范性文件和自律规则" },
            { point: "基金监管目标和原则", level: "掌握", base: "保护投资者、维护市场秩序、防范系统性风险" },
            { point: "中国证监会及派出机构监管职责", level: "理解", base: "行政监管、检查、处罚和规则制定" },
            { point: "基金业协会自律管理", level: "掌握", base: "登记备案、从业人员管理、自律规则和纪律处分" },
            { point: "信息披露监管要求", level: "掌握", base: "真实、准确、完整、及时、公平" },
            { point: "违法违规法律责任", level: "理解", base: "行政责任、民事责任和刑事责任的基本区分" }
          ]
        },
        {
          title: "基金市场参与主体及从业人员法规要求",
          summary: "管理人、托管人、销售机构、服务机构和从业人员行为规范。",
          sections: [
            { point: "基金管理人职责", level: "掌握", base: "投资管理、信息披露、风险控制和维护持有人利益" },
            { point: "基金托管人职责", level: "掌握", base: "资产保管、资金清算、估值复核和投资监督" },
            { point: "基金销售机构职责", level: "掌握", base: "适当性、风险揭示、销售行为合规和资料保存" },
            { point: "基金服务机构职责", level: "理解", base: "登记、估值、会计、评价、信息技术等服务边界" },
            { point: "从业人员资格和执业要求", level: "掌握", base: "诚信、专业、合规、勤勉尽责" },
            { point: "投资者适当性管理", level: "掌握", base: "了解客户、了解产品、风险匹配和持续管理" },
            { point: "利益冲突管理", level: "理解", base: "识别、披露、隔离和妥善处理利益冲突" }
          ]
        },
        {
          title: "基金活动法规要求",
          summary: "募集、销售、投资运作、估值、费用、信息披露和清算要求。",
          sections: [
            { point: "基金募集和备案要求", level: "掌握", base: "募集程序、备案材料、合同生效和禁止违规募集" },
            { point: "基金销售行为规范", level: "掌握", base: "禁止误导宣传、承诺收益和不当诱导" },
            { point: "基金投资运作限制", level: "掌握", base: "投资范围、比例限制、关联交易和禁止行为" },
            { point: "基金估值和净值披露", level: "理解", base: "估值原则、净值计算、复核和披露" },
            { point: "基金费用和收益分配", level: "理解", base: "管理费、托管费、销售费用和分红安排" },
            { point: "基金信息披露文件", level: "掌握", base: "基金合同、招募说明书、公告、定期报告和临时报告" },
            { point: "基金份额申购、赎回与转换", level: "理解", base: "开放日、申赎价格、费用和巨额赎回处理" },
            { point: "基金终止和清算", level: "了解", base: "终止事由、清算程序和剩余财产分配" }
          ]
        },
        {
          title: "基金合规管理、风险管理与内部控制",
          summary: "合规文化、风险识别、内控制度、反洗钱和信息技术管理。",
          sections: [
            { point: "合规管理目标和原则", level: "掌握", base: "依法合规、全员合规、独立客观和持续改进" },
            { point: "合规管理职责分工", level: "理解", base: "董事会、管理层、合规负责人和业务部门职责" },
            { point: "风险管理框架", level: "掌握", base: "风险识别、评估、控制、监测和报告" },
            { point: "内部控制目标和要素", level: "掌握", base: "控制环境、风险评估、控制活动、信息沟通和监督" },
            { point: "反洗钱和反恐怖融资要求", level: "理解", base: "客户身份识别、可疑交易报告和资料保存" },
            { point: "信息技术和数据安全", level: "了解", base: "系统安全、权限管理、备份恢复和信息保护" },
            { point: "员工行为和廉洁从业管理", level: "掌握", base: "禁止利益输送、非公平交易和利用未公开信息交易" }
          ]
        },
        {
          title: "基金职业道德",
          summary: "忠诚、专业、审慎、客户利益优先、保密和公平对待客户。",
          sections: [
            { point: "守法合规", level: "掌握", base: "遵守法律法规、自律规则和公司制度" },
            { point: "诚实守信", level: "掌握", base: "真实陈述、不误导、不欺诈、不隐瞒重大信息" },
            { point: "专业审慎", level: "掌握", base: "以专业能力和审慎态度履行职责" },
            { point: "客户至上", level: "掌握", base: "客户利益优先和公平对待客户" },
            { point: "忠诚尽责", level: "理解", base: "忠实履职、勤勉尽责和避免利益冲突" },
            { point: "保守秘密", level: "掌握", base: "客户隐私、商业秘密和未公开信息保护" },
            { point: "基金职业道德教育", level: "了解", base: "职业道德养成、持续培训和文化建设" }
          ]
        },
        {
          title: "基金行业文化",
          summary: "行业文化理念、合规文化、信义义务、长期主义和投资者保护。",
          sections: [
            { point: "基金行业文化内涵", level: "了解", base: "合规、诚信、专业、稳健和长期主义" },
            { point: "信义义务和受托责任", level: "掌握", base: "忠实义务、勤勉义务和客户利益优先" },
            { point: "投资者保护理念", level: "掌握", base: "公平对待、充分披露、适当性和风险教育" },
            { point: "长期投资和价值投资", level: "理解", base: "长期导向、理性投资和服务实体经济" },
            { point: "廉洁从业文化", level: "理解", base: "反商业贿赂、反利益输送和廉洁执业" },
            { point: "行业声誉和责任", level: "了解", base: "维护行业公信力和市场秩序" }
          ]
        }
      ]
    },
    {
      id: "s3",
      code: "科目三",
      title: "私募股权投资基金基础知识",
      source: sourceLinks.s3,
      chapters: [
        {
          title: "股权投资基金概述",
          summary: "股权投资基金特点、作用、发展、运作逻辑和生命周期。",
          sections: [
            { point: "股权投资基金的概念和特点", level: "掌握", base: "非公开股权投资、期限较长、流动性较低和专业管理" },
            { point: "股权投资基金的功能和作用", level: "理解", base: "支持创新创业、促进产业升级和优化资源配置" },
            { point: "股权投资基金发展概况", level: "了解", base: "行业发展、监管完善和市场化运作" },
            { point: "募投管退运作流程", level: "掌握", base: "募集、投资、投后管理和退出" },
            { point: "创业投资与并购投资", level: "理解", base: "投资阶段、投资对象和价值创造方式差异" },
            { point: "股权投资基金风险特征", level: "掌握", base: "高风险、长周期、估值不确定和退出不确定" }
          ]
        },
        {
          title: "股权投资基金参与主体",
          summary: "投资者、管理人、托管人、服务机构和监管自律主体。",
          sections: [
            { point: "股权投资基金投资者", level: "掌握", base: "合格投资者、风险识别能力和风险承担能力" },
            { point: "股权投资基金管理人", level: "掌握", base: "基金募集、投资决策、投后管理、退出和信息披露" },
            { point: "基金托管和财产保管", level: "理解", base: "财产独立、资金划付、监督和安全保管" },
            { point: "基金服务机构", level: "理解", base: "销售、份额登记、估值、外包、法律和审计服务" },
            { point: "政府监管与行业自律主体", level: "了解", base: "证监会、派出机构、基金业协会和相关部门" },
            { point: "参与主体权责边界", level: "掌握", base: "各主体依法履责、不得混同职责或转嫁责任" }
          ]
        },
        {
          title: "股权投资基金分类",
          summary: "按组织形式、投资阶段、投资策略、资金性质和币种分类。",
          sections: [
            { point: "公司型、合伙型与契约型基金", level: "掌握", base: "组织形式、治理结构、责任承担和决策机制差异" },
            { point: "创业投资基金", level: "掌握", base: "投资早期或成长性创业企业" },
            { point: "并购基金", level: "理解", base: "通过控制权或重大影响实现整合和价值提升" },
            { point: "母基金", level: "理解", base: "以投资其他基金为主要投资方式" },
            { point: "人民币基金与外币基金", level: "了解", base: "币种、投资者结构和监管安排差异" },
            { point: "基金分类与适用规则", level: "理解", base: "不同类型基金在募集、投资、备案和税务方面存在差异" }
          ]
        },
        {
          title: "股权投资基金的募集与设立",
          summary: "合格投资者、募集流程、风险揭示、基金合同、组织设立和备案。",
          sections: [
            { point: "合格投资者要求", level: "掌握", base: "投资门槛、风险识别能力和风险承担能力" },
            { point: "私募基金募集方式", level: "掌握", base: "非公开募集、不得公开宣传和不得变相公开募集" },
            { point: "投资者适当性和风险揭示", level: "掌握", base: "了解客户、风险匹配、冷静期和回访等程序" },
            { point: "基金合同和核心条款", level: "掌握", base: "投资范围、费用、收益分配、退出、信息披露和争议解决" },
            { point: "基金组织设立流程", level: "理解", base: "公司、合伙、契约不同组织形式的设立安排" },
            { point: "基金备案要求", level: "掌握", base: "募集完成后依法履行备案程序和信息报送" },
            { point: "募集禁止行为", level: "掌握", base: "公开宣传、承诺收益、误导销售和代签风险文件" }
          ]
        },
        {
          title: "股权投资基金的投资",
          summary: "项目来源、尽职调查、估值、投资决策、交易文件和投资交割。",
          sections: [
            { point: "项目开发和筛选", level: "理解", base: "行业研究、项目来源、初筛和立项" },
            { point: "尽职调查", level: "掌握", base: "业务、财务、法律和管理团队调查" },
            { point: "投资估值方法", level: "掌握", base: "相对估值、收益法、成本法和估值调整" },
            { point: "投资决策流程", level: "掌握", base: "立项、尽调、投委会审议、决策和授权" },
            { point: "投资协议主要条款", level: "掌握", base: "估值、交割、陈述保证、对赌、回购、优先权和反稀释" },
            { point: "投资交割和资金划付", level: "理解", base: "交割条件、工商变更、资金支付和资料归档" },
            { point: "投资风险控制", level: "掌握", base: "信息不对称、估值偏差、法律瑕疵和治理风险控制" }
          ]
        },
        {
          title: "股权投资基金的投资后管理",
          summary: "投后跟踪、治理参与、增值服务、风险监控和信息披露。",
          sections: [
            { point: "投后管理目标", level: "掌握", base: "保护投资权益、提升企业价值和推动退出" },
            { point: "被投企业经营跟踪", level: "理解", base: "财务、经营、重大事项和关键指标监控" },
            { point: "公司治理参与", level: "掌握", base: "董事会、股东会、重大事项决策和保护性条款" },
            { point: "增值服务", level: "理解", base: "战略、融资、人才、市场、管理和资源支持" },
            { point: "投后风险识别和处置", level: "掌握", base: "业绩不达标、合规风险、资金风险和治理风险" },
            { point: "投后信息披露和报告", level: "理解", base: "向投资者报告基金和项目运作情况" }
          ]
        },
        {
          title: "股权投资基金的项目退出",
          summary: "上市、并购、股权转让、回购、清算和退出收益分配。",
          sections: [
            { point: "退出方式概述", level: "掌握", base: "上市、并购、股权转让、回购和清算" },
            { point: "上市退出", level: "理解", base: "IPO、上市后减持安排和锁定期要求" },
            { point: "并购退出", level: "理解", base: "通过战略买方或财务买方收购实现退出" },
            { point: "股权转让退出", level: "掌握", base: "协议转让、产权交易、份额转让和受让方安排" },
            { point: "回购退出", level: "掌握", base: "触发条件、回购义务人、价格机制和法律风险" },
            { point: "清算退出", level: "了解", base: "项目失败或基金终止时的清算程序" },
            { point: "退出收益分配", level: "理解", base: "本金返还、门槛收益、业绩报酬和分配顺序" }
          ]
        },
        {
          title: "股权投资基金的内部管理",
          summary: "基金治理、投资者关系、估值核算、费用分配、信息披露和档案管理。",
          sections: [
            { point: "基金治理机制", level: "掌握", base: "投资决策委员会、咨询委员会、合伙人会议和授权机制" },
            { point: "基金估值和会计核算", level: "理解", base: "公允价值、估值程序、财务报表和审计" },
            { point: "基金费用和收益分配", level: "掌握", base: "管理费、托管费、运营费用、业绩报酬和分配瀑布" },
            { point: "投资者关系管理", level: "理解", base: "信息沟通、会议、报告和重大事项通知" },
            { point: "基金信息披露", level: "掌握", base: "定期报告、临时报告、重大事项和真实完整披露" },
            { point: "档案和信息管理", level: "了解", base: "募集、投资、投后、退出和合规资料保存" },
            { point: "利益冲突和关联交易管理", level: "掌握", base: "识别、披露、回避、审批和公平交易" }
          ]
        },
        {
          title: "股权投资基金的政府监管与行业自律",
          summary: "登记备案、持续信息报送、募集监管、投资运作监管和自律处分。",
          sections: [
            { point: "私募基金监管原则", level: "掌握", base: "适度监管、风险导向、投资者保护和信息透明" },
            { point: "管理人登记", level: "掌握", base: "主体资格、人员、制度、出资和持续合规要求" },
            { point: "基金备案和信息报送", level: "掌握", base: "基金备案、重大事项变更、定期更新和报送义务" },
            { point: "募集行为监管", level: "掌握", base: "非公开募集、合格投资者、风险揭示和禁止宣传" },
            { point: "投资运作监管", level: "理解", base: "资金投向、关联交易、利益冲突和信息披露" },
            { point: "行业自律规则和纪律处分", level: "掌握", base: "自律检查、异常经营、失信记录和纪律处分" },
            { point: "法律责任和风险处置", level: "理解", base: "行政监管措施、自律处分、民事责任和刑事风险" }
          ]
        }
      ]
    }
  ];

  window.FUND_QUIZ_META = {
    version: "2026-official-outline-v1",
    description: "按基金从业人员资格考试 2025 年度修订大纲组织，服务 2026 年科目一与科目三章节刷题。"
  };
  window.FUND_QUIZ_SUBJECTS = outline.map(buildSubject);
})();
