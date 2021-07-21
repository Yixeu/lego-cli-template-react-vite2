/*
 * @Author:
 * @Date: 2021-07-16 18:41:11
 * @LastEditors:
 * @LastEditTime: 2021-07-21 14:06:44
 * @Description:
 */
const clearStringImpurity = (str: string) =>
/**
     * @description: 字符串去空格转化为小写，常用于搜索
     * @param {*}
     * @return {*}
     */
  str.replace(/\s*/g, '').toLowerCase();
export { clearStringImpurity };
