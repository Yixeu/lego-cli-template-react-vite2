const clearStringImpurity = (str: string) =>
/**
     * @description: 字符串去空格转化为小写，常用于搜索
     * @param {*}
     * @return {*}
     */
  str.replace(/\s*/g, '').toLowerCase();
export { clearStringImpurity };
