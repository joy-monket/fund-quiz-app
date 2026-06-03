global.window = global;
require("./data-full.js");

const subjects = window.FUND_QUIZ_SUBJECTS;
const stemMap = new Map();
const idMap = new Map();
const failures = [];
const chapterReports = [];

function fail(message) {
  failures.push(message);
}

for (const subject of subjects) {
  for (const chapter of subject.chapters) {
    const questions = chapter.questions;
    const points = questions.map((question) => question.point);
    const pointCount = new Set(points).size;
    let adjacentRepeats = 0;
    let badWindows = 0;

    for (let index = 1; index < points.length; index += 1) {
      if (points[index] === points[index - 1]) adjacentRepeats += 1;
    }

    for (const size of [3, 4, 5, 6]) {
      if (questions.length < size) continue;
      for (let start = 0; start <= questions.length - size; start += 1) {
        const uniqueInWindow = new Set(points.slice(start, start + size)).size;
        const expected = Math.min(size, pointCount);
        if (uniqueInWindow < expected) badWindows += 1;
      }
    }

    for (const question of questions) {
      if (!question.id || !question.point || !question.difficulty || !question.stem || !question.explanation || !question.trap) {
        fail(`${subject.code} ${chapter.title}: empty required field in ${question.id || "unknown id"}`);
      }
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

    chapterReports.push({
      subject: subject.code,
      chapter: chapter.title,
      questions: questions.length,
      topics: pointCount,
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
console.log("");

for (const report of chapterReports) {
  console.log(`${report.subject} ${report.chapter}: ${report.questions}题 / ${report.topics}考点`);
  console.log(`  前6题考点: ${report.firstSixTopics.join(" / ")}`);
}

if (failures.length) {
  console.error("");
  console.error("QA failed:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("");
console.log("QA passed: no duplicate stems, invalid answers, adjacent topic repeats, or weak 3-6 question topic windows.");
