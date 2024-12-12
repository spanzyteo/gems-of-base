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
    title:
      "BlackRock's Bitcoin ETF Drops Most in 4 Months Amid Quantum Computing FUD",
    description: 'IBIT drops 5.3% (Skitterphoto/Pixabay)',
    date: 'Tue, 10 Dec 2024 10:21:08 GMT',
  },
  {
    id: 1,
    name: 'Cointelegraph',
    title:
      'Crypto custodian BitGo enables institutional Bitcoin yield with Core',
    description:
      'BitGo, a crypto custodian offering various Bitcoin staking options, now allows institutional clients to secure extra BTC rewards with Core’s dual staking model.',
    date: 'Tue, 10 Dec 2024 10:06:04 GMT',
  },
  {
    id: 2,
    name: 'Cointelegraph',
    title:
      'Could quantum computing threaten Satoshi Nakamoto’s 1 million Bitcoin?',
    description:
      'Quantum computing raises concerns over the security of Satoshi Nakamoto’s 1 million Bitcoin, sparking debates on freezing vulnerable holdings to safeguard the network’s future.',
    date: 'Tue, 10 Dec 2024 09:28:47 GMT',
  },
]
