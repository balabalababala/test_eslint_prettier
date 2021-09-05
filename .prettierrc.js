module.exports = {
  "extends":[
    // "airbnb",
    // "prettier",
    // "prettier/react",
  ],
  printWidth: 100, // 指定代码长度，超出换行
  tabWidth: 2, // tab 键的宽度
  useTabs: false, // 不使用tab
  // semi: true, // 结尾加上分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，'consistent': 保持一致 , preserve: 不限制，想用就用)
  jsxSingleQuote: true, // jsx 语法中使用单引号
  trailingComma: 'es5', // 确保对象的最后一个属性后有逗号
  bracketSpacing: true, // 大括号有空格 { name: 'rose' }
  jsxBracketSameLine: false, // 在多行JSX元素的最后一行追加 >
  arrowParens: 'always', // 箭头函数，单个参数添加括号
  requirePragma: false, // 是否严格按照文件顶部的特殊注释格式化代码
  insertPragma: false, // 是否在格式化的文件顶部插入Pragma标记，以表明该文件被prettier格式化过了
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: 'ignore', // html文件的空格敏感度，控制空格是否影响布局
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  disableLanguages:['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  eslintIntegration: false, // 不让prettier使用eslint的代码格式进行校验
  ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中

  // 使能每一种语言默认格式化规则
  '[html]': { 'editor.defaultFormatter': 'esbenp.prettier-vscode' },
  '[css]': { 'editor.defaultFormatter': 'esbenp.prettier-vscode' },
  '[less]': { 'editor.defaultFormatter': 'esbenp.prettier-vscode' },
  '[javascript]': { 'editor.defaultFormatter': 'esbenp.prettier-vscode' },


  jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  // parser: 'babylon', // 格式化的解析器，默认是babylon   加上这条，会导致末尾的分号加不上去
  requireConfig: false, // Require a 'prettierconfig' to format prettier
  stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验 }
}
