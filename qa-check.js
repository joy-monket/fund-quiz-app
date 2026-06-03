global.window = global;
require("./data-full.js");

const subjects = window.FUND_QUIZ_SUBJECTS;
const stemMap = new Map();
const idMap = new Map();
const failures = [];
const chapterReports = [];
const typeCounts = new Map();
const warnings = [];
const templateSignals = [
  "关于「",
  "下列哪项属于",
  "客户询问「",
  "如果业务流程涉及",
  "围绕「",
  "从考试角度看",
  "某基金机构办理与",
  "某管理人在落实",
  "下列关于「",
  "判断「",
  "学习「",
  "在投资者保护视角下"
];
const minUniqueByWindowSize = {
  3: 2,
  4: 3,
  5: 4,
  6: 4
};

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

for (const subject of subjects) {
  for (const chapter of subject.chapters) {
    const questions = chapter.questions;
    const points = questions.map((question) => question.point);
    const firstSixTypes = questions.slice(0, 6).map((question) => question.difficulty);
    const pointCount = new Set(points).size;
    let adjacentRepeats = 0;
    let badWindows = 0;
    let repeatedTopicRounds = 0;
    const templateCount = questions.filter((question) => templateSignals.some((signal) => question.stem.includes(signal))).length;

    for (let index = 1; index < points.length; index += 1) {
      if (points[index] === points[index - 1]) adjacentRepeats += 1;
    }

    for (const size of [3, 4, 5, 6]) {
      if (questions.length < size) continue;
      for (let start = 0; start <= questions.length - size; start += 1) {
        const uniqueInWindow = new Set(points.slice(start, start + size)).size;
        const expected = Math.min(minUniqueByWindowSize[size], pointCount);
        if (uniqueInWindow < expected) badWindows += 1;
      }
    }

    if (pointCount > 1) {
      const rounds = [];
      for (let start = 0; start < questions.length; start += pointCount) {
        const round = points.slice(start, start + pointCount);
        if (round.length === pointCount) rounds.push(round.join("|"));
      }
      for (let index = 1; index < rounds.length; index += 1) {
        if (rounds[index] === rounds[index - 1]) repeatedTopicRounds += 1;
      }
    }

    for (const question of questions) {
      if (!question.id || !question.point || !question.difficulty || !question.stem || !question.explanation || !question.trap) {
        fail(`${subject.code} ${chapter.title}: empty required field in ${question.id || "unknown id"}`);
      }
      typeCounts.set(question.difficulty, (typeCounts.get(question.difficulty) || 0) + 1);
      if (!Array.isArray(question.options) || question.options.length !== 4) {
        fail(`${subject.code} ${chapter.title}: options length is not 4 in ${question.id}`);
      } else if (new Set(question.options).size !== 4) {
        fail(`${subject.code} ${chapter.title}: duplicate options in ${question.id}`);
      }
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 3) {
        fail(`${subject.code} ${chapter.title}: invalid answer index in ${question.id}`);
      }

      if (!stemMap.has(question.stem)) stemMap.set(question.stem, []);
      stemMap.get(question.stem).push(question.id);

      if (!idMap.has(question.id)) idMap.set(question.id, []);
      idMap.get(question.id).push(`${subject.code} ${chapter.title}`);
    }

    if (adjacentRepeats > 0) fail(`${subject.code} ${chapter.title}: ${adjacentRepeats} adjacent repeated topic(s)`);
    if (badWindows > 0) fail(`${subject.code} ${chapter.title}: ${badWindows} weak sliding topic window(s)`);
    if (repeatedTopicRounds > 0) fail(`${subject.code} ${chapter.title}: ${repeatedTopicRounds} repeated topic round(s)`);
    if (new Set(firstSixTypes).size < 3) fail(`${subject.code} ${chapter.title}: first six questions lack type variety`);
    for (let index = 1; index < firstSixTypes.length; index += 1) {
      if (firstSixTypes[index] === firstSixTypes[index - 1]) {
        fail(`${subject.code} ${chapter.title}: adjacent repeated type in first six`);
        break;
      }
    }
    if (templateCount / questions.length > 0.65) warn(`${subject.code} ${chapter.title}: template-style stems ${templateCount}/${questions.length}`);

    chapterReports.push({
      subject: subject.code,
      chapter: chapter.title,
      questions: questions.length,
      topics: pointCount,
      repeatedTopicRounds,
      templateCount,
      firstSixTypes,
      firstSixTopics: points.slice(0, 6)
    });
  }
}

for (const [stem, ids] of stemMap.entries()) {
  if (ids.length > 1) fail(`duplicate stem "${stem}" in ${ids.join(", ")}`);
}

for (const [id, owners] of idMap.entries()) {
  if (owners.length > 1) fail(`duplicate id "${id}" in ${owners.join(", ")}`);
}

console.log(`Subjects: ${subjects.length}`);
console.log(`Chapters: ${chapterReports.length}`);
console.log(`Questions: ${[...idMap.keys()].length}`);
console.log(`Unique stems: ${stemMap.size}`);
console.log(`Types: ${[...typeCounts.entries()].map(([type, count]) => `${type}=${count}`).join(", ")}`);
console.log("");

for (const report of chapterReports) {
  console.log(`${report.subject} ${report.chapter}: ${report.questions}题 / ${report.topics}考点`);
  console.log(`  前6题考点: ${report.firstSixTopics.join(" / ")}`);
  console.log(`  前6题型: ${report.firstSixTypes.join(" / ")}`);
  console.log(`  循环轮次: ${report.repeatedTopicRounds} / 模板腔题干: ${report.templateCount}`);
}

if (warnings.length) {
  console.log("");
  console.log("QA warnings:");
  for (const message of warnings) console.log(`- ${message}`);
}

if (failures.length) {
  console.error("");
  console.error("QA failed:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("");
console.log("QA passed: no duplicate stems, invalid answers, adjacent topic repeats, weak 3-6 question topic windows, or repeated topic rounds.");
