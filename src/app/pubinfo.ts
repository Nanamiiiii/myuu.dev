type Author = {
  name: string
  myname: boolean
}

export type Publication = {
  title: string
  author: Author[]
  publishedTo: string
  publishedOn: string
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
  },
  {
    title: 'Parallel Verification in RISC-V Secure Boot',
    author: [saiki_en, uyiromo_en, kimura_en],
    publishedOn: 'Dec 2023',
    publishedTo:
      '16th IEEE International Symposium on Embedded Multicore/Manycore SoCs (MCSoC-2023)',
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
  },
  {
    title:
      'セキュアな VM 上で GPGPU を利用する際のデータ転送オーバーヘッドの評価',
    author: [uranami_jp, saiki_jp, kimura_jp],
    publishedOn: 'Mar 2025',
    publishedTo:
      '組込み技術とネットワークに関するワークショップ ETNET2025 (IEICE CPSY)',
  },
  {
    title:
      'Enhancing Memory Pool Management for Efficient Data Transfer between Host and Enclave',
    author: [ding_en, saiki_en, kimura_en],
    publishedOn: 'Jul 2024',
    publishedTo:
      'Summer United Workshops on Parallel, Distributed and Cooperative Processing SWoPP2024 (IEICE CPSY)',
  },
  {
    title:
      'Keystone Enclaveにおける高効率でセキュアなHost-Enclave間での大規模データ授受手法',
    author: [saiki_jp, kimura_jp],
    publishedOn: 'Mar 2024',
    publishedTo:
      '組込み技術とネットワークに関するワークショップ ETNET2024 (IEICE CPSY)',
  },
  {
    title: 'RISC-V KeystoneにおけるEnclaveアプリケーションキャッシュ機能の拡張',
    author: [ume_jp, saiki_jp, kimura_jp],
    publishedOn: 'Aug 2023',
    publishedTo:
      '並列/分散/協調処理に関するサマー・ワークショップ (SWoPP 2023)',
  },
  {
    title: 'RISC-V SoCにおけるSecure Bootの実装と検証の高速化に向けた評価',
    author: [saiki_jp, uyiromo_jp, kimura_jp],
    publishedOn: 'Mar 2023',
    publishedTo: '組込み技術とネットワークに関するワークショップ ETNET2023',
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
