export interface NftsItem {
  id: number
  avatar: string
  title: string
  status: string
  mintDate: string
  website: string
  twitter: string
  telegram: string
  discord: string
  info: string
}

export const nfts: NftsItem[] = [
  {
    id: 0,
    avatar: '/mindea.jpg',
    title: 'Mindea',
    website: 'https://mindea-community.io/',
    twitter: 'https://x.com/Mindea_xyz',
    telegram: 'https://t.me/BoopBase',
    discord: 'https://discord.com/invite/wAjZSZBWNQ',
    info: '',
    status: 'Private Sale',
    mintDate: '2024-12-16',
  },
]
