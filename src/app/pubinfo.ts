type Author = {
  name: string
  myname: boolean
}

export type Publication = {
  title: string
  author: Author[]
  publishedTo: string
  publishedOn: string
  url?: string
}

const saiki_en = {
  name: 'Akihiro Saiki',
  myname: true,
}

const saiki_jp = {
  name: '齊木昭大',
  myname: true,
}

const uyiromo_en = {
  name: 'Yu Omori',
  myname: false,
}

const uyiromo_jp = {
  name: '大森侑',
  myname: false,
}

const kimura_en = {
  name: 'Keiji Kimura',
  myname: false,
}

const kimura_jp = {
  name: '木村啓二',
  myname: false,
}

const ume_en = {
  name: 'Takumu Umezawa',
  myname: false,
}

const ume_jp = {
  name: '梅澤拓夢',
  myname: false,
}

const uranami_jp = {
  name: '浦浪英俊',
  myname: false,
}

const ding_en = {
  name: 'Jianxuan Ding',
  myname: false,
}

export const reviewedPub: Publication[] = [
  {
    title: 'Enclave Application Cache for RISC-V Keystone',
    author: [ume_en, saiki_en, kimura_en],
    publishedOn: 'Jul 2025',
    publishedTo:
      '8th Workshop on System Software for Trusted Execution (SysTEX 2025)',
    url: 'https://systex-workshop.github.io/2025/papers/systex25-final91.pdf',
  },
  {
    title: 'Parallel Verification in RISC-V Secure Boot',
    author: [saiki_en, uyiromo_en, kimura_en],
    publishedOn: 'Dec 2023',
    publishedTo:
      '16th IEEE International Symposium on Embedded Multicore/Manycore SoCs (MCSoC-2023)',
    url: 'https://ieeexplore.ieee.org/abstract/document/10387877',
  },
]

export const noreviewPub: Publication[] = [
  {
    title:
      'RISC-V Keystone における Enclave キャッシュのキャッシュ管理機構の改良',
    author: [ume_jp, saiki_jp, kimura_jp],
    publishedOn: 'Mar 2025',
    publishedTo:
      '組込み技術とネットワークに関するワークショップ ETNET2025 (IEICE CPSY)',
    url: 'https://app.box.com/s/av47b7m0zjhclvrnw6j95rrcggqg2d92',
  },
  {
    title:
      'セキュアな VM 上で GPGPU を利用する際のデータ転送オーバーヘッドの評価',
    author: [uranami_jp, saiki_jp, kimura_jp],
    publishedOn: 'Mar 2025',
    publishedTo:
      '組込み技術とネットワークに関するワークショップ ETNET2025 (IEICE CPSY)',
    url: 'https://app.box.com/s/cwwi6nc7gbpa1ilhvm9vma1r9ys7cuno',
  },
  {
    title:
      'Enhancing Memory Pool Management for Efficient Data Transfer between Host and Enclave',
    author: [ding_en, saiki_en, kimura_en],
    publishedOn: 'Jul 2024',
    publishedTo:
      'Summer United Workshops on Parallel, Distributed and Cooperative Processing SWoPP2024 (IEICE CPSY)',
    url: 'https://ipsj.ixsq.nii.ac.jp/records/237617',
  },
  {
    title:
      'Keystone Enclaveにおける高効率でセキュアなHost-Enclave間での大規模データ授受手法',
    author: [saiki_jp, kimura_jp],
    publishedOn: 'Mar 2024',
    publishedTo:
      '組込み技術とネットワークに関するワークショップ ETNET2024 (IEICE CPSY)',
    url: 'https://www.kasahara.cs.waseda.ac.jp/achieve/pdf/y2023/IPSJ-ARC24256033.pdf',
  },
  {
    title: 'RISC-V KeystoneにおけるEnclaveアプリケーションキャッシュ機能の拡張',
    author: [ume_jp, saiki_jp, kimura_jp],
    publishedOn: 'Aug 2023',
    publishedTo:
      '並列/分散/協調処理に関するサマー・ワークショップ (SWoPP 2023)',
    url: 'https://www.kasahara.cs.waseda.ac.jp/achieve/pdf/y2023/IPSJ-ARC23254013.pdf',
  },
  {
    title: 'RISC-V SoCにおけるSecure Bootの実装と検証の高速化に向けた評価',
    author: [saiki_jp, uyiromo_jp, kimura_jp],
    publishedOn: 'Mar 2023',
    publishedTo: '組込み技術とネットワークに関するワークショップ ETNET2023',
    url: 'https://www.kasahara.cs.waseda.ac.jp/achieve/pdf/y2022/IPSJ-ARC23252016.pdf',
  },
]

export const journalPub: Publication[] = []

export const thesisPub: Publication[] = [
  {
    title:
      'RISC-V SoCにおけるSecure Boot高速化及びKeystone Enclaveにおける大規模データ授受手法の改善',
    author: [saiki_jp],
    publishedOn: 'Jan 2024',
    publishedTo: 'Master Thesis',
  },
  {
    title: 'RISC-V SoCにおけるSecure Bootの実装と検証の高速化に向けた評価',
    author: [saiki_jp],
    publishedOn: 'Jan 2023',
    publishedTo: 'Graduation Thesis',
  },
]
