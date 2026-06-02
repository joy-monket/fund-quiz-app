(function () {
  const sourceLinks = {
    s1: "https://www.amac.org.cn/xwfb/tzgg/202509/P020250919537331992092.pdf",
    s3: "https://www.amac.org.cn/fwdt/wyb/rygl/cyks/cyksjcdg/jcksdg/202509/P020250919537333321860.pdf"
  };

  const mistakeTraps = {
    "掌握": "掌握类考点要能在场景题里判断责任主体、流程顺序和禁止行为。",
    "理解": "理解类考点不要死背标题，要能区分相邻概念和适用场景。",
    "了解": "了解类考点抓关键词即可，注意不要把辅助概念误认为核心规则。"
  };

  const distractors = [
    "管理人可以向投资者承诺本金安全和固定收益",
    "相关规则只适用于机构投资者，不适用于自然人",
    "只要投资者同意，就可以不履行信息披露和风险揭示",
    "基金业务可以脱离监管、自律规则和内部控制独立开展",
    "销售规模优先于适当性、合规和客户利益保护",
    "托管、估值、信息披露等职责可以完全由销售人员自行决定"
  ];

  const pickDistractors = (seed, count = 3) => {
    const start = seed % distractors.length;
    return Array.from({ length: count }, (_, index) => distractors[(start + index) % distractors.length]);
  };

  function makeQuestions(subjectCode, chapterIndex, chapterTitle, sectionIndex, section) {
    const prefix = `${subjectCode}-c${chapterIndex}-q${sectionIndex}`;
    const level = section.level || "理解";
    const base = section.base || section.point;
    const why = section.why || `${base}是本章的重要考点，考试通常会结合主体责任、流程节点或禁止行为进行考查。`;
    const trap = section.trap || mistakeTraps[level];
    const wrong = pickDistractors(chapterIndex * 7 + sectionIndex);
    return [
      {
        id: `${prefix}-a`,
        point: section.point,
        difficulty: level,
        stem: `关于「${section.point}」，下列说法正确的是？`,
        options: [wrong[0], `应重点把握${base}`, wrong[1], wrong[2]],
        answer: 1,
        explanation: why,
        trap
      },
      {
        id: `${prefix}-b`,
        point: section.point,
        difficulty: "场景",
        stem: `某从业人员在处理「${section.point}」相关业务时，最合规的做法是？`,
        options: [wrong[1], wrong[2], `围绕${base}履行相应程序、留痕并保护投资者合法权益`, wrong[0]],
        answer: 2,
        explanation: `场景题通常考查能否把「${section.point}」落到具体行为上，合规做法应以规则、程序、披露和投资者保护为基础。`,
        trap: "场景题不要被“客户同意”“行业惯例”“提高效率”等表述带偏。"
      },
      {
        id: `${prefix}-c`,
        point: section.point,
        difficulty: "易错",
        stem: `下列哪一项最容易与「${section.point}」的正确要求相冲突？`,
        options: [`按${base}进行判断和执行`, "保留必要记录并接受监督", wrong[3] || wrong[0], "按照适当性和信息披露要求处理投资者关系"],
        answer: 2,
        explanation: `与「${section.point}」相冲突的选项通常包含规避监管、弱化责任、承诺收益或跳过必要程序等问题。`,
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
          questions: chapter.sections.flatMap((section, sectionOffset) =>
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
