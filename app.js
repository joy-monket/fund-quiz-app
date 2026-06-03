const subjects = window.FUND_QUIZ_SUBJECTS || [
  {
    id: "s1",
    code: "科目一",
    title: "基金基础知识与法律法规",
    chapters: [
      {
        id: "s1-c1",
        title: "第1章 金融市场、资产管理与投资基金",
        summary: "金融市场功能、资产管理行业定位、投资基金基本分类。",
        questions: [
          {
            id: "s1-c1-q1",
            point: "金融市场功能",
            difficulty: "基础",
            stem: "金融市场最核心的功能是下列哪一项？",
            options: ["调节企业内部人事安排", "实现资金供求双方的资金融通", "替代政府进行宏观调控", "保证所有投资者获得固定收益"],
            answer: 1,
            explanation: "金融市场连接资金供给者和需求者，核心功能是资金融通，同时也具有价格发现、风险管理等功能。",
            trap: "不要把金融市场的辅助功能误认为核心功能。"
          },
          {
            id: "s1-c1-q2",
            point: "资产管理本质",
            difficulty: "理解",
            stem: "关于资产管理业务，下列说法正确的是？",
            options: ["资产管理人通常承诺保本保收益", "资产管理强调受托管理和风险自担", "资产管理业务不需要信息披露", "资产管理只适用于银行存款产品"],
            answer: 1,
            explanation: "资产管理业务体现受人之托、代人理财，收益和风险通常由投资者承担，管理人不得违规承诺保本保收益。",
            trap: "看到“承诺收益”“无需披露”通常要警惕。"
          },
          {
            id: "s1-c1-q3",
            point: "投资基金分类",
            difficulty: "基础",
            stem: "证券投资基金按照运作方式通常可以分为？",
            options: ["公司型和契约型", "开放式和封闭式", "股票型和债券型", "境内型和境外型"],
            answer: 1,
            explanation: "按运作方式分类，基金可以分为开放式基金和封闭式基金。",
            trap: "公司型/契约型是按组织形式划分。"
          }
        ]
      },
      {
        id: "s1-c2",
        title: "第2章 证券投资基金概述",
        summary: "基金法律形式、基金当事人、基金运作环节。",
        questions: [
          {
            id: "s1-c2-q1",
            point: "基金当事人",
            difficulty: "基础",
            stem: "契约型基金的主要当事人通常不包括下列哪一项？",
            options: ["基金份额持有人", "基金管理人", "基金托管人", "基金评级机构"],
            answer: 3,
            explanation: "契约型基金的主要当事人包括基金份额持有人、基金管理人和基金托管人。",
            trap: "评级机构可能提供服务，但不是契约型基金的主要当事人。"
          },
          {
            id: "s1-c2-q2",
            point: "基金运作",
            difficulty: "理解",
            stem: "基金托管人的主要职责更接近下列哪一项？",
            options: ["决定基金投资组合", "保管基金财产并监督基金管理人运作", "向投资者承诺最低收益", "负责基金销售人员绩效考核"],
            answer: 1,
            explanation: "托管人负责基金财产保管、资金清算、会计复核，并依法监督管理人的投资运作。",
            trap: "投资决策职责属于基金管理人。"
          },
          {
            id: "s1-c2-q3",
            point: "开放式基金",
            difficulty: "基础",
            stem: "开放式基金区别于封闭式基金的重要特征是？",
            options: ["只能投资股票", "基金份额总额通常固定不变", "投资者可按规则申购和赎回", "无需托管人"],
            answer: 2,
            explanation: "开放式基金份额通常不固定，投资者可以在开放日按规则进行申购和赎回。",
            trap: "封闭式基金份额在存续期内通常固定。"
          }
        ]
      },
      {
        id: "s1-c3",
        title: "第3章 基金法规与监管",
        summary: "监管体系、法律责任、公开募集基金基本规则。",
        questions: [
          {
            id: "s1-c3-q1",
            point: "监管目标",
            difficulty: "基础",
            stem: "基金监管的重要目标之一是？",
            options: ["保证基金每日盈利", "保护投资人合法权益", "替代基金管理人进行投资", "取消市场风险"],
            answer: 1,
            explanation: "基金监管强调保护投资人合法权益，维护市场秩序，促进基金行业健康发展。",
            trap: "监管不能消除市场风险，也不会保证盈利。"
          },
          {
            id: "s1-c3-q2",
            point: "信息披露",
            difficulty: "理解",
            stem: "基金信息披露应当遵循的基本要求是？",
            options: ["真实、准确、完整、及时", "只披露有利信息", "只向大额投资者披露", "由销售机构自由决定披露口径"],
            answer: 0,
            explanation: "基金信息披露应当真实、准确、完整、及时，不得误导或遗漏重大信息。",
            trap: "选择题中出现“只”“自由决定”等绝对表述要谨慎。"
          },
          {
            id: "s1-c3-q3",
            point: "自律管理",
            difficulty: "基础",
            stem: "基金业协会在行业管理中主要承担的是？",
            options: ["司法审判职责", "行业自律管理职责", "替代投资者下单", "统一确定基金收益率"],
            answer: 1,
            explanation: "基金业协会承担行业自律管理职责，包括登记备案、从业人员管理和自律规则建设等。",
            trap: "协会不是司法机关，也不决定基金收益。"
          }
        ]
      },
      {
        id: "s1-c4",
        title: "第4章 职业道德与执业规范",
        summary: "忠实义务、勤勉尽责、客户利益优先和合规底线。",
        questions: [
          {
            id: "s1-c4-q1",
            point: "客户利益优先",
            difficulty: "场景",
            stem: "基金从业人员发现个人利益与客户利益冲突时，正确做法是？",
            options: ["优先保障个人利益", "优先保障客户合法利益并按制度处理冲突", "隐瞒冲突继续办理", "让客户自行承担全部后果"],
            answer: 1,
            explanation: "职业道德要求客户利益优先，遇到利益冲突应及时披露并按公司制度处理。",
            trap: "隐瞒利益冲突属于高频违规场景。"
          },
          {
            id: "s1-c4-q2",
            point: "勤勉尽责",
            difficulty: "理解",
            stem: "下列哪项最能体现基金从业人员的勤勉尽责？",
            options: ["未经核实传播市场传闻", "基于职责审慎履职并持续学习", "只关注销售业绩不关注适当性", "向客户夸大产品收益"],
            answer: 1,
            explanation: "勤勉尽责要求从业人员以专业、审慎、负责的态度履行职责。",
            trap: "夸大宣传、忽视适当性都违反执业要求。"
          },
          {
            id: "s1-c4-q3",
            point: "保密义务",
            difficulty: "基础",
            stem: "关于客户信息，下列做法正确的是？",
            options: ["可以随意转发给朋友", "可用于任何营销活动", "依法依规保密并限于授权用途使用", "离职后可继续使用原客户信息"],
            answer: 2,
            explanation: "从业人员应依法保护客户隐私和商业秘密，按授权范围使用信息。",
            trap: "离职后继续使用客户资料通常存在合规风险。"
          }
        ]
      }
    ]
  },
  {
    id: "s3",
    code: "科目三",
    title: "私募股权投资基金基础知识",
    chapters: [
      {
        id: "s3-c1",
        title: "第1章 股权投资基金概述",
        summary: "股权投资基金特点、作用、分类和生命周期。",
        questions: [
          {
            id: "s3-c1-q1",
            point: "股权投资基金特点",
            difficulty: "基础",
            stem: "股权投资基金通常具有的特点是？",
            options: ["高流动性、每日赎回", "投资期限较长、流动性较低", "只投资货币市场工具", "不得参与企业价值提升"],
            answer: 1,
            explanation: "股权投资基金多投资非公开交易股权，期限较长，流动性较低，并通过投后管理促进价值提升。",
            trap: "不要把公募开放式基金的流动性特征套到股权投资基金上。"
          },
          {
            id: "s3-c1-q2",
            point: "基金生命周期",
            difficulty: "理解",
            stem: "股权投资基金的典型运作流程可以概括为？",
            options: ["存、贷、汇、兑", "募、投、管、退", "申购、赎回、清算、分红", "发行、上市、退市、破产"],
            answer: 1,
            explanation: "股权投资基金运作常被概括为募集、投资、管理、退出。",
            trap: "这是科目三的主线，后续章节基本围绕这四步展开。"
          },
          {
            id: "s3-c1-q3",
            point: "创业投资基金",
            difficulty: "基础",
            stem: "创业投资基金主要投资对象通常是？",
            options: ["早期或成长性的未上市创业企业", "已到期银行存款", "国债逆回购", "交易所上市的货币基金"],
            answer: 0,
            explanation: "创业投资基金重点支持创业企业，尤其是早期、成长性企业。",
            trap: "看清“创业投资”与二级市场工具的区别。"
          }
        ]
      },
      {
        id: "s3-c2",
        title: "第2章 股权投资基金管理人",
        summary: "管理人职责、登记、内部治理和合规要求。",
        questions: [
          {
            id: "s3-c2-q1",
            point: "管理人职责",
            difficulty: "基础",
            stem: "股权投资基金管理人的核心职责通常是？",
            options: ["代替投资者承担全部亏损", "负责基金募集、投资、投后管理和退出安排", "保证基金上市", "决定监管处罚结果"],
            answer: 1,
            explanation: "管理人负责基金运作管理，包括募集协助、投资决策、投后管理、退出和信息披露等。",
            trap: "管理人不能保证收益或承担全部投资亏损。"
          },
          {
            id: "s3-c2-q2",
            point: "内部控制",
            difficulty: "理解",
            stem: "管理人建立内部控制制度的主要目的不包括？",
            options: ["防范利益冲突", "规范投资决策流程", "提高合规经营水平", "确保每个项目必然盈利"],
            answer: 3,
            explanation: "内控制度用于规范运作、防范风险和利益冲突，但不能确保项目必然盈利。",
            trap: "任何“必然盈利”的表述都不符合投资业务规律。"
          },
          {
            id: "s3-c2-q3",
            point: "适格人员",
            difficulty: "基础",
            stem: "私募基金管理人从业人员管理中，较为重要的要求是？",
            options: ["无需任何专业能力", "符合从业规范并履行诚信合规义务", "只需销售能力无需合规意识", "可以代客户签署风险揭示书"],
            answer: 1,
            explanation: "私募基金从业人员应符合自律规则要求，具备诚信、专业和合规意识。",
            trap: "代签风险揭示文件属于明显不当行为。"
          }
        ]
      },
      {
        id: "s3-c3",
        title: "第3章 基金产品、募集与设立",
        summary: "基金组织形式、合格投资者、募集流程和备案。",
        questions: [
          {
            id: "s3-c3-q1",
            point: "合格投资者",
            difficulty: "重点",
            stem: "私募股权投资基金募集时，面向对象应当是？",
            options: ["任意自然人", "合格投资者", "所有银行储户", "未成年人"],
            answer: 1,
            explanation: "私募基金应当向合格投资者募集，并依法履行适当性、风险揭示等程序。",
            trap: "私募基金不能面向不特定对象公开募集。"
          },
          {
            id: "s3-c3-q2",
            point: "基金组织形式",
            difficulty: "理解",
            stem: "有限合伙型基金中，通常负责执行合伙事务的是？",
            options: ["普通合伙人", "所有有限合伙人", "基金托管人", "基金销售平台"],
            answer: 0,
            explanation: "有限合伙型基金通常由普通合伙人执行合伙事务，有限合伙人以认缴出资额为限承担责任。",
            trap: "有限合伙人通常不执行合伙事务。"
          },
          {
            id: "s3-c3-q3",
            point: "风险揭示",
            difficulty: "场景",
            stem: "募集私募基金时，投资者签署风险揭示书的目的主要是？",
            options: ["保证本金安全", "确认投资者充分了解产品风险", "免除管理人所有责任", "让基金不再需要备案"],
            answer: 1,
            explanation: "风险揭示书用于提示并确认投资者了解基金风险，但不能免除管理人依法应承担的责任。",
            trap: "风险揭示不是免责工具，也不等于保本。"
          }
        ]
      },
      {
        id: "s3-c4",
        title: "第4章 投资、投后管理与退出",
        summary: "尽职调查、估值谈判、投后赋能、退出方式。",
        questions: [
          {
            id: "s3-c4-q1",
            point: "尽职调查",
            difficulty: "重点",
            stem: "股权投资基金进行尽职调查的主要目的是什么？",
            options: ["替代企业日常经营", "识别投资风险并支持投资决策", "保证项目上市", "避免所有信息披露"],
            answer: 1,
            explanation: "尽职调查用于了解目标企业真实情况，识别法律、财务、业务等风险，为投资决策提供依据。",
            trap: "尽调不能保证项目成功，只是降低信息不对称。"
          },
          {
            id: "s3-c4-q2",
            point: "投后管理",
            difficulty: "理解",
            stem: "下列哪项属于投后管理常见内容？",
            options: ["完全放弃对被投企业的关注", "跟踪经营情况并提供增值服务", "承诺企业股价上涨", "禁止企业进行任何经营决策"],
            answer: 1,
            explanation: "投后管理包括经营跟踪、治理参与、资源支持、风险监控和退出准备等。",
            trap: "投后管理是赋能和监督，不是替代企业经营。"
          },
          {
            id: "s3-c4-q3",
            point: "退出方式",
            difficulty: "基础",
            stem: "股权投资基金常见退出方式不包括？",
            options: ["上市退出", "股权转让", "并购退出", "每日开放赎回"],
            answer: 3,
            explanation: "股权投资基金常见退出包括上市、并购、股权转让、回购等，每日开放赎回不是典型退出方式。",
            trap: "再次区分私募股权基金与开放式公募基金。"
          }
        ]
      }
    ]
  }
];

const APP_VERSION = "20260603-v3";
const STORAGE_KEY = `fundQuizProgress:${APP_VERSION}`;
const reasons = ["没记住", "概念混淆", "题干陷阱", "法规/流程不熟"];

let state = loadState();
let activeSubjectId = subjects[0].id;
let practiceMode = "ordered";
let session = null;
let wrongFilters = { subject: "all", chapter: "all", type: "all" };

const el = (id) => document.getElementById(id);
const allQuestions = () => subjects.flatMap((subject) => subject.chapters.flatMap((chapter) => chapter.questions.map((question) => ({ ...question, subject, chapter }))));
const findSubject = (id) => subjects.find((subject) => subject.id === id);
const findQuestion = (id) => allQuestions().find((question) => question.id === id);

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [], wrong: {} };
  } catch {
    return { attempts: [], wrong: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showView(name) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  el(`view-${name}`).classList.add("active");
  document.querySelectorAll(".bottom-nav button").forEach((button) => button.classList.toggle("active", button.dataset.nav === name));
  if (name === "subjects") renderSubjects();
  if (name === "wrongbook") renderWrongbook();
  if (name === "analysis") renderAnalysis();
}

function getQuestionStats(questionId) {
  const attempts = state.attempts.filter((attempt) => attempt.questionId === questionId);
  const correct = attempts.filter((attempt) => attempt.correct).length;
  return {
    attempts: attempts.length,
    correct,
    wrong: attempts.length - correct,
    accuracy: attempts.length ? Math.round((correct / attempts.length) * 100) : 0,
    avgTime: attempts.length ? Math.round(attempts.reduce((sum, item) => sum + item.timeSpent, 0) / attempts.length / 1000) : 0
  };
}

function getChapterStats(chapter) {
  const ids = chapter.questions.map((question) => question.id);
  const attempts = state.attempts.filter((attempt) => ids.includes(attempt.questionId));
  const correct = attempts.filter((attempt) => attempt.correct).length;
  const wrongIds = ids.filter((id) => state.wrong[id] && !state.wrong[id].removedFromFocus);
  const reasonCounts = attempts.filter((attempt) => !attempt.correct).reduce((acc, item) => {
    acc[item.reason] = (acc[item.reason] || 0) + 1;
    return acc;
  }, {});
  const topReason = Object.entries(reasonCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "暂无";
  return {
    attempts: attempts.length,
    correct,
    wrong: attempts.length - correct,
    wrongIds,
    accuracy: attempts.length ? Math.round((correct / attempts.length) * 100) : 0,
    avgTime: attempts.length ? Math.round(attempts.reduce((sum, item) => sum + item.timeSpent, 0) / attempts.length / 1000) : 0,
    topReason
  };
}

function getSubjectStats(subject) {
  const ids = subject.chapters.flatMap((chapter) => chapter.questions.map((question) => question.id));
  const attempts = state.attempts.filter((attempt) => ids.includes(attempt.questionId));
  const correct = attempts.filter((attempt) => attempt.correct).length;
  const wrongCount = ids.filter((id) => state.wrong[id] && !state.wrong[id].removedFromFocus).length;
  return {
    attempts: attempts.length,
    correct,
    wrongCount,
    accuracy: attempts.length ? Math.round((correct / attempts.length) * 100) : 0
  };
}

function renderSubjects() {
  el("subjectGrid").innerHTML = subjects.map((subject) => {
    const stats = getSubjectStats(subject);
    const questionCount = subject.chapters.reduce((sum, chapter) => sum + chapter.questions.length, 0);
    return `
      <button class="subject-card" type="button" data-subject="${subject.id}">
        <span class="subject-code">${subject.code}</span>
        <h3>${subject.title}</h3>
        <p class="card-meta">按官方大纲编写 · ${subject.chapters.length} 个章节，${questionCount} 道练习题。后续可按同一结构扩充题库。</p>
        <div class="stat-row">
          <span class="pill">已刷 ${stats.attempts}</span>
          <span class="pill">正确率 ${stats.accuracy}%</span>
          <span class="pill">错题 ${stats.wrongCount}</span>
        </div>
      </button>
    `;
  }).join("");
}

function renderChapters() {
  const subject = findSubject(activeSubjectId);
  el("chapterSubjectMeta").textContent = `${subject.code} · ${subject.title}`;
  el("chapterList").innerHTML = subject.chapters.map((chapter) => {
    const stats = getChapterStats(chapter);
    return `
      <article class="chapter-item">
        <div>
          <h3>${chapter.title}</h3>
          <p>${chapter.summary}</p>
          <div class="chapter-metrics">
            <span class="pill">题量 ${chapter.questions.length}</span>
            <span class="pill">已刷 ${stats.attempts}</span>
            <span class="pill">正确率 ${stats.accuracy}%</span>
            <span class="pill">错题 ${stats.wrongIds.length}</span>
          </div>
        </div>
        <button class="primary-button" type="button" data-start-chapter="${chapter.id}">开始刷题</button>
      </article>
    `;
  }).join("");
  showView("chapters");
}

function startPractice({ subjectId, chapterId, questionIds, title, mode = practiceMode }) {
  const subject = findSubject(subjectId);
  const chapter = chapterId ? subject.chapters.find((item) => item.id === chapterId) : null;
  let questions = questionIds ? questionIds.map(findQuestion).filter(Boolean) : chapter.questions.map((question) => ({ ...question, subject, chapter }));
  if (mode === "random") questions = [...questions].sort(() => Math.random() - 0.5);
  session = {
    title: title || chapter?.title || "错题复刷",
    subjectId,
    chapterId,
    questions,
    index: 0,
    answers: {},
    startedAt: Date.now(),
    questionStartedAt: Date.now(),
    resultWrongIds: []
  };
  renderPractice();
  showView("practice");
}

function renderPractice() {
  const question = session.questions[session.index];
  const answered = session.answers[question.id];
  el("practiceTitle").textContent = session.title;
  el("questionCounter").textContent = `${session.index + 1}/${session.questions.length}`;
  el("progressBar").style.width = `${((session.index + 1) / session.questions.length) * 100}%`;
  el("questionDifficulty").textContent = question.difficulty;
  el("questionPoint").textContent = question.point;
  el("questionText").textContent = question.stem;
  el("optionList").innerHTML = question.options.map((option, index) => {
    const classes = ["option-button"];
    if (answered?.selected === index) classes.push("selected");
    if (answered && index === question.answer) classes.push("correct");
    if (answered && answered.selected === index && !answered.correct) classes.push("wrong");
    return `<button class="${classes.join(" ")}" type="button" data-option="${index}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${option}</button>`;
  }).join("");
  el("answerPanel").hidden = !answered;
  if (answered) {
    el("answerStatus").textContent = answered.correct ? "答对了" : `答错了，正确答案是 ${String.fromCharCode(65 + question.answer)}`;
    el("answerStatus").style.color = answered.correct ? "var(--green)" : "var(--red)";
    el("answerExplain").textContent = question.explanation;
    el("mistakeNote").textContent = question.trap;
    el("mistakeReasonWrap").style.display = answered.correct ? "none" : "flex";
    el("mistakeReason").value = answered.reason || "没记住";
  }
  el("prevQuestion").disabled = session.index === 0;
  el("nextQuestion").textContent = session.index === session.questions.length - 1 ? "查看结果" : "下一题";
}

function answerQuestion(optionIndex) {
  const question = session.questions[session.index];
  if (session.answers[question.id]) return;
  const correct = optionIndex === question.answer;
  const timeSpent = Date.now() - session.questionStartedAt;
  const answer = { selected: optionIndex, correct, timeSpent, reason: correct ? "" : "没记住" };
  session.answers[question.id] = answer;
  recordAttempt(question, answer);
  renderPractice();
}

function recordAttempt(question, answer) {
  state.attempts.push({
    questionId: question.id,
    subjectId: question.subject.id,
    chapterId: question.chapter.id,
    point: question.point,
    correct: answer.correct,
    timeSpent: answer.timeSpent,
    reason: answer.reason,
    at: Date.now()
  });

  const wrong = state.wrong[question.id];
  if (!answer.correct) {
    session.resultWrongIds.push(question.id);
    state.wrong[question.id] = {
      questionId: question.id,
      subjectId: question.subject.id,
      chapterId: question.chapter.id,
      point: question.point,
      wrongCount: (wrong?.wrongCount || 0) + 1,
      correctStreak: 0,
      mastered: false,
      removedFromFocus: false,
      reason: answer.reason,
      lastSeenAt: Date.now()
    };
  } else if (wrong) {
    const nextStreak = (wrong.correctStreak || 0) + 1;
    state.wrong[question.id] = {
      ...wrong,
      correctStreak: nextStreak,
      mastered: true,
      removedFromFocus: nextStreak >= 2,
      lastSeenAt: Date.now()
    };
  }
  saveState();
}

function updateMistakeReason(reason) {
  const question = session.questions[session.index];
  const answer = session.answers[question.id];
  if (!answer || answer.correct) return;
  answer.reason = reason;
  const attempt = [...state.attempts].reverse().find((item) => item.questionId === question.id);
  if (attempt) attempt.reason = reason;
  if (state.wrong[question.id]) state.wrong[question.id].reason = reason;
  saveState();
}

function finishPractice() {
  const answered = Object.values(session.answers);
  const correct = answered.filter((item) => item.correct).length;
  const wrongIds = [...new Set(session.resultWrongIds)];
  const accuracy = answered.length ? Math.round((correct / answered.length) * 100) : 0;
  const avgTime = answered.length ? Math.round(answered.reduce((sum, item) => sum + item.timeSpent, 0) / answered.length / 1000) : 0;
  el("resultGrid").innerHTML = [
    ["正确率", `${accuracy}%`],
    ["答对", `${correct}/${session.questions.length}`],
    ["本次错题", `${wrongIds.length}`],
    ["平均用时", `${avgTime}s`]
  ].map(([label, value]) => `<div class="metric-card"><strong>${value}</strong><span>${label}</span></div>`).join("");

  const recommendation = buildRecommendation();
  el("recommendPanel").innerHTML = `<strong>复习建议</strong><br>${recommendation}`;
  el("retryWrongBtn").disabled = wrongIds.length === 0;
  el("retryWrongBtn").dataset.ids = wrongIds.join(",");
  showView("result");
}

function buildRecommendation() {
  const chapterRows = subjects.flatMap((subject) => subject.chapters.map((chapter) => ({ subject, chapter, stats: getChapterStats(chapter) })));
  const weak = chapterRows
    .filter((row) => row.stats.attempts > 0)
    .sort((a, b) => (b.stats.wrongIds.length - a.stats.wrongIds.length) || (a.stats.accuracy - b.stats.accuracy))[0];
  if (!weak) return "先完成至少一个章节练习，系统会根据错题和正确率给出更具体的复刷建议。";
  if (weak.stats.wrongIds.length === 0 && weak.stats.accuracy >= 85) return "当前练习状态不错，可以进入随机模式巩固，或开始补充下一批章节题。";
  return `优先复刷${weak.subject.code}${weak.chapter.title.replace(/^第/, "第")}，当前正确率 ${weak.stats.accuracy}%，重点关注「${weak.stats.topReason}」类问题。`;
}

function renderWrongbook() {
  const wrongItems = Object.values(state.wrong).map((item) => ({ ...item, question: findQuestion(item.questionId) })).filter((item) => item.question);
  el("wrongSubjectFilter").innerHTML = `<option value="all">全部科目</option>${subjects.map((subject) => `<option value="${subject.id}">${subject.code}</option>`).join("")}`;
  el("wrongSubjectFilter").value = wrongFilters.subject;
  const selectedSubject = wrongFilters.subject;
  const chapters = selectedSubject === "all" ? subjects.flatMap((subject) => subject.chapters) : findSubject(selectedSubject).chapters;
  el("wrongChapterFilter").innerHTML = `<option value="all">全部章节</option>${chapters.map((chapter) => `<option value="${chapter.id}">${chapter.title}</option>`).join("")}`;
  if (!chapters.some((chapter) => chapter.id === wrongFilters.chapter)) wrongFilters.chapter = "all";
  el("wrongChapterFilter").value = wrongFilters.chapter;
  el("wrongTypeFilter").value = wrongFilters.type;
  const subjectFilter = wrongFilters.subject;
  const chapterFilter = wrongFilters.chapter;
  const typeFilter = wrongFilters.type;
  const filtered = wrongItems.filter((item) => {
    if (subjectFilter !== "all" && item.subjectId !== subjectFilter) return false;
    if (chapterFilter !== "all" && item.chapterId !== chapterFilter) return false;
    if (typeFilter === "focus" && item.removedFromFocus) return false;
    if (typeFilter === "high" && item.wrongCount < 2) return false;
    if (typeFilter === "mastered" && !item.mastered) return false;
    return true;
  }).sort((a, b) => b.wrongCount - a.wrongCount || b.lastSeenAt - a.lastSeenAt);

  if (!filtered.length) {
    el("wrongList").innerHTML = `<div class="empty-state">暂无符合条件的错题。</div>`;
    return;
  }
  el("wrongList").innerHTML = filtered.map((item) => {
    const status = item.removedFromFocus ? "已移出重点" : item.mastered ? "已掌握" : "重点错题";
    return `
      <article class="wrong-card">
        <header>
          <div>
            <p class="eyebrow">${item.question.subject.code} · ${item.question.chapter.title}</p>
            <h3>${item.question.stem}</h3>
          </div>
          <span class="pill">${status}</span>
        </header>
        <p>${item.question.explanation}</p>
        <div class="tag-list">
          <span class="pill">考点 ${item.point}</span>
          <span class="pill">错 ${item.wrongCount} 次</span>
          <span class="pill">连对 ${item.correctStreak || 0} 次</span>
          <span class="pill">${item.reason}</span>
        </div>
        <div class="stat-row">
          <button class="secondary-button" type="button" data-review-one="${item.questionId}">复刷此题</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderAnalysis() {
  const totalAttempts = state.attempts.length;
  const correct = state.attempts.filter((attempt) => attempt.correct).length;
  const activeWrong = Object.values(state.wrong).filter((item) => !item.removedFromFocus).length;
  const accuracy = totalAttempts ? Math.round((correct / totalAttempts) * 100) : 0;
  el("analysisSummary").innerHTML = [
    ["总正确率", `${accuracy}%`],
    ["已刷题次", `${totalAttempts}`],
    ["重点错题", `${activeWrong}`],
    ["复习建议", activeWrong ? "先清错题" : "继续推进章节"]
  ].map(([label, value]) => `<div class="metric-card"><strong>${value}</strong><span>${label}</span></div>`).join("");

  const rows = subjects.flatMap((subject) => subject.chapters.map((chapter) => ({ subject, chapter, stats: getChapterStats(chapter) })));
  el("analysisList").innerHTML = rows.map((row) => {
    const pointCounts = state.attempts.filter((attempt) => attempt.chapterId === row.chapter.id && !attempt.correct).reduce((acc, item) => {
      acc[item.point] = (acc[item.point] || 0) + 1;
      return acc;
    }, {});
    const topPoint = Object.entries(pointCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "暂无";
    return `
      <article class="analysis-card">
        <header>
          <div>
            <p class="eyebrow">${row.subject.code}</p>
            <h3>${row.chapter.title}</h3>
          </div>
          <span class="pill">正确率 ${row.stats.accuracy}%</span>
        </header>
        <p>已刷 ${row.stats.attempts} 题次，错题率 ${row.stats.attempts ? 100 - row.stats.accuracy : 0}%，平均用时 ${row.stats.avgTime}s。</p>
        <div class="tag-list">
          <span class="pill">常错考点 ${topPoint}</span>
          <span class="pill">常见错因 ${row.stats.topReason}</span>
          <span class="pill">重点错题 ${row.stats.wrongIds.length}</span>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.subject) {
    activeSubjectId = target.dataset.subject;
    renderChapters();
  }
  if (target.dataset.startChapter) {
    startPractice({ subjectId: activeSubjectId, chapterId: target.dataset.startChapter });
  }
  if (target.dataset.option) answerQuestion(Number(target.dataset.option));
  if (target.id === "prevQuestion" && session.index > 0) {
    session.index -= 1;
    session.questionStartedAt = Date.now();
    renderPractice();
  }
  if (target.id === "nextQuestion") {
    if (session.index === session.questions.length - 1) finishPractice();
    else {
      session.index += 1;
      session.questionStartedAt = Date.now();
      renderPractice();
    }
  }
  if (target.id === "leavePractice") renderChapters();
  if (target.id === "backToSubjects") showView("subjects");
  if (target.id === "backToChaptersFromResult") renderChapters();
  if (target.id === "retryWrongBtn") {
    const ids = target.dataset.ids.split(",").filter(Boolean);
    if (ids.length) startPractice({ subjectId: activeSubjectId, questionIds: ids, title: "本次错题复刷", mode: "ordered" });
  }
  if (target.dataset.reviewOne) {
    const question = findQuestion(target.dataset.reviewOne);
    startPractice({ subjectId: question.subject.id, questionIds: [question.id], title: "错题复刷", mode: "ordered" });
  }
  if (target.dataset.nav) showView(target.dataset.nav);
  if (target.id === "resetDataBtn" && confirm("确定清空所有练习记录和错题本吗？")) {
    state = { attempts: [], wrong: {} };
    saveState();
    showView("subjects");
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "mistakeReason") updateMistakeReason(event.target.value);
  if (event.target.id === "wrongSubjectFilter") {
    wrongFilters.subject = event.target.value;
    wrongFilters.chapter = "all";
    renderWrongbook();
  }
  if (event.target.id === "wrongChapterFilter") {
    wrongFilters.chapter = event.target.value;
    renderWrongbook();
  }
  if (event.target.id === "wrongTypeFilter") {
    wrongFilters.type = event.target.value;
    renderWrongbook();
  }
});

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    practiceMode = button.dataset.mode;
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
  });
});

renderSubjects();
