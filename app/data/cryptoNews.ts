export interface CryptoNewsData {
  id: number
  name: string
  title: string
  description: string
  date: string
}

export const cryptoNews: CryptoNewsData[] = [
  {
    id: 0,
    name: 'CoinDesk',
    title: '受量子计算 FUD 影响，贝莱德比特币 ETF 跌幅为 4 个月来最大',
    description: 'IBIT 下跌 5.3%（Skitterphoto/Pixabay）',
    date: '2024 年 12 月 10 日星期二 10:21:08 GMT',
  },
  {
    id: 1,
    name: 'Cointelegraph',
    title: '加密托管商 BitGo 通过 Core 实现机构比特币收益',
    description:
      'BitGo 是一家提供各种比特币质押选项的加密货币托管机构，现在允许机构客户通过 Core 的双重质押模型获得额外的 BTC 奖励。',
    date: '2024 年 12 月 10 日星期二 10:06:04 GMT',
  },
  {
    id: 2,
    name: 'Cointelegraph',
    title: '量子计算能否威胁到中本聪的 100 万比特币？',
    description:
      '量子计算引发了人们对中本聪 (Satoshi Nakamoto) 100 万比特币安全性的担忧，并引发了关于冻结易受攻击的资产以保障网络未来的争论。',
    date: '2024 年 12 月 10 日星期二 09:28:47 GMT',
  },
]
