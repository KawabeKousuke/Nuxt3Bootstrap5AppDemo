export const useKyoryu = () => useState('Kyoryu', () => {
  return {
      title: "ティラノサウルス",

      explanation: "説明",

      info: [
          { text: "全長:13m" },
          { text: "体重:9トン" },
          { text: "白亜紀後期に北米（アメリカ・カナダ）に現れた最強の肉食恐竜です。" },
      ],
      
      feature: "特徴",

      features: [
          { text: "獲物をかみ砕く強力なアゴと大きくて鋭い歯が武器。"},
          { text: "がっしりとした足だけど体重のせいで走るのが遅かったようです。"},
      ]
  }
})