# 基金从业章节刷题工具

这是一个静态网页刷题工具，适合部署到 GitHub Pages、Vercel、Netlify 或任意静态网站服务器。

## 使用方式

- 打开网页后选择科目一或科目三。
- 按章节刷题，答错的题会自动进入错题本。
- 底部“错题”里可以复刷错题。
- 底部“分析”里可以查看自己的正确率、薄弱章节和常错考点。

## 数据如何记录

当前版本不需要账号，也没有后台数据库。

每个使用者的练习记录、错题本、学习分析都会保存在他自己的浏览器本地存储中。

这意味着：

- 朋友打开同一个网址后，可以看到自己的刷题进度。
- 你不会看到朋友的数据。
- 朋友换电脑、换浏览器，数据不会自动同步。
- 如果朋友清理浏览器缓存或本地数据，记录可能会被清空。

## 部署方式

部署时上传整个 `fund-quiz-app` 文件夹内的文件：

- `index.html`
- `styles.css`
- `app.js`
- `data-full.js`
- `preview.png` 可选

### GitHub Pages

1. 新建一个 GitHub 仓库。
2. 上传本文件夹内的所有文件。
3. 在仓库 Settings -> Pages 中启用 GitHub Pages。
4. 选择部署分支和根目录。
5. GitHub 会生成一个可分享的网址。

### Vercel

1. 新建 Vercel 项目。
2. 导入包含这些文件的 GitHub 仓库。
3. Framework Preset 选择 Other。
4. 不需要构建命令。
5. 发布后分享 Vercel 生成的网址。

### Netlify

1. 新建 Netlify Site。
2. 上传整个文件夹，或连接 GitHub 仓库。
3. 不需要构建命令。
4. 发布后分享 Netlify 生成的网址。

## 全新访问链接

如果之前浏览器里有旧题库缓存或旧练习记录，可以使用带版本号的链接打开：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-fresh
```

当前版本使用新的本地记录空间 `fundQuizProgress:20260603-fresh`，不会沿用旧版 `fundQuizProgressV1` 的错题和进度。

本轮全库去模板化版本链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v2
```

该版本使用新的本地记录空间 `fundQuizProgress:20260603-v2`。

章节内考点交错排序版本链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v3
```

该版本使用新的本地记录空间 `fundQuizProgress:20260603-v3`。

章节内轮次打散版本链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v4
```

该版本使用新的本地记录空间 `fundQuizProgress:20260603-v4`。

题干去模板腔版本链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v5
```

该版本使用新的本地记录空间 `fundQuizProgress:20260603-v5`。

全章贪心分布排序版本链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v6
```

该版本使用新的本地记录空间 `fundQuizProgress:20260603-v6`。

考试题型混合版链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v8
```

该版本加入普通单选、组合单选、材料题三类题型，使用新的本地记录空间 `fundQuizProgress:20260603-v8`。

题型交错版链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v9
```

该版本让章节前几题也混入普通单选、组合单选、材料题，使用新的本地记录空间 `fundQuizProgress:20260603-v9`。

题型逐题交错版链接：

```text
https://joy-monket.github.io/fund-quiz-app/?v=20260603-v10
```

该版本让题型按普通单选、组合单选、材料题交错出现，使用新的本地记录空间 `fundQuizProgress:20260603-v10`。

## 题库说明

题库文件是 `data-full.js`。

当前版本按基金从业人员资格考试 2025 年度修订大纲组织，用于 2026 年科目一、科目三备考。题目是按大纲考点编写的练习题，不是官方原题：

- 科目一：8 章，162 道练习题
- 科目三：9 章，177 道练习题

如需增加题目，只需要继续按 `data-full.js` 中的章节和考点结构扩展。

## 题库检查

修改题库后可以运行：

```bash
node qa-check.js
```

检查内容包括：重复题干、重复题目 ID、答案索引、空字段、相邻考点重复、任意连续 3-6 题是否被少数考点占满、整轮考点顺序是否重复，以及模板腔题干比例。
