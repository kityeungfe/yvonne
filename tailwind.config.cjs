/*
 * @Author: kityeungfe kityeungfe@outlook.com
 * @Date: 2022-08-23 03:23:44
 * @LastEditors: kityeungfe kityeungfe@outlook.com
 * @LastEditTime: 2022-08-23 04:18:28
 * @FilePath: \yvonne\tailwind.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}