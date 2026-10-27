// ============================================================================
// 語言訓練百寶箱 — 獨立題庫與圖片設定檔 (questions.js)
// 以後你想換圖片、改文字、或者加新題目，只需要修改呢個檔案！
// ============================================================================

// 防快取版本號：每次你換咗新圖片，將呢個數字 +1 (例如改做 2、3...)，手機就會立即更新圖片！
window.IMAGE_VERSION = 1;

window.QUESTION_BANK = {

  // ==========================================================================
  // 第一部分：「因為 … 所以 …」題庫 (共 8 題，可自由複製增加)
  // ==========================================================================
  causal: [
    {
      id: "c1",
      cause:  { cantonese: "出面落大雨", written: "外面下大雨", img: "images/rain_cause.jpg",  sceneKey: "rain_cause" },
      effect: { cantonese: "出街要擔遮", written: "出門要撐傘", img: "images/rain_effect.jpg", sceneKey: "rain_effect" },
      distractors: [
        { cantonese: "對住鏡刷牙", written: "對著鏡刷牙", img: "images/dist_brush.jpg",  sceneKey: "dist_brush" },
        { cantonese: "喺草地踢波", written: "在草地踢球", img: "images/dist_soccer.jpg", sceneKey: "dist_soccer" }
      ]
    },
    {
      id: "c2",
      cause:  { cantonese: "肚仔好餓", written: "肚子很餓", img: "images/hungry_cause.jpg",  sceneKey: "hungry_cause" },
      effect: { cantonese: "要食飯", written: "要吃飯", img: "images/hungry_effect.jpg", sceneKey: "hungry_effect" },
      distractors: [
        { cantonese: "地毯砌積木", written: "地毯砌積木", img: "images/dist_blocks.jpg", sceneKey: "dist_blocks" },
        { cantonese: "蠟筆畫彩虹", written: "蠟筆畫彩虹", img: "images/dist_draw.jpg",   sceneKey: "dist_draw" }
      ]
    },
    {
      id: "c3",
      cause:  { cantonese: "隻手同塊面污糟咗", written: "手和面弄髒了", img: "images/dirty_cause.jpg",  sceneKey: "dirty_cause" },
      effect: { cantonese: "要洗手同洗面",     written: "要洗手和洗面", img: "images/dirty_effect.jpg", sceneKey: "dirty_effect" },
      distractors: [
        { cantonese: "喺草地踢波", written: "在草地踢球", img: "images/dist_soccer.jpg", sceneKey: "dist_soccer" },
        { cantonese: "蠟筆畫彩虹", written: "蠟筆畫彩虹", img: "images/dist_draw.jpg",   sceneKey: "dist_draw" }
      ]
    },
    {
      id: "c4",
      cause:  { cantonese: "天氣好熱流晒汗", written: "天氣很熱流汗", img: "images/hot_cause.jpg",  sceneKey: "hot_cause" },
      effect: { cantonese: "食凍冰冰嘅雪糕", written: "吃冰涼的雪糕", img: "images/hot_effect.jpg", sceneKey: "hot_effect" },
      distractors: [
        { cantonese: "地毯砌積木", written: "地毯砌積木", img: "images/dist_blocks.jpg", sceneKey: "dist_blocks" },
        { cantonese: "對住鏡刷牙", written: "對著鏡刷牙", img: "images/dist_brush.jpg",  sceneKey: "dist_brush" }
      ]
    },
    {
      id: "c5",
      cause:  { cantonese: "夜晚好眼瞓", written: "晚上很想睡", img: "images/sleepy_cause.jpg",  sceneKey: "sleepy_cause" },
      effect: { cantonese: "上床去瞓覺", written: "上床去睡覺", img: "images/sleepy_effect.jpg", sceneKey: "sleepy_effect" },
      distractors: [
        { cantonese: "喺草地踢波", written: "在草地踢球", img: "images/dist_soccer.jpg", sceneKey: "dist_soccer" },
        { cantonese: "蠟筆畫彩虹", written: "蠟筆畫彩虹", img: "images/dist_draw.jpg",   sceneKey: "dist_draw" }
      ]
    },
    {
      id: "c6",
      cause:  { cantonese: "喺公園跌親擦損咗", written: "在公園跌倒擦傷了", img: "images/fall_cause.jpg",  sceneKey: "fall_cause" },
      effect: { cantonese: "要貼膠布",     written: "要貼膠布",     img: "images/fall_effect.jpg", sceneKey: "fall_effect" },
      distractors: [
        { cantonese: "對住鏡刷牙", written: "對著鏡刷牙", img: "images/dist_brush.jpg",  sceneKey: "dist_brush" },
        { cantonese: "地毯砌積木", written: "地毯砌積木", img: "images/dist_blocks.jpg", sceneKey: "dist_blocks" }
      ]
    },
    {
      id: "c7",
      cause:  { cantonese: "心愛嘅玩具爛咗", written: "心愛的玩具破了", img: "images/toy_cause.jpg",  sceneKey: "toy_cause" },
      effect: { cantonese: "好傷心喺度喊",   written: "很傷心地哭泣",   img: "images/toy_effect.jpg", sceneKey: "toy_effect" },
      distractors: [
        { cantonese: "喺草地踢波", written: "在草地踢球", img: "images/dist_soccer.jpg", sceneKey: "dist_soccer" },
        { cantonese: "蠟筆畫彩虹", written: "蠟筆畫彩虹", img: "images/dist_draw.jpg",   sceneKey: "dist_draw" }
      ]
    },
    {
      id: "c8",
      cause:  { cantonese: "幫手執好玩具", written: "幫忙收拾玩具", img: "images/tidy_cause.jpg",  sceneKey: "tidy_cause" },
      effect: { cantonese: "老師讚賞派貼紙",   written: "老師讚賞派貼紙",   img: "images/tidy_effect.jpg", sceneKey: "tidy_effect" },
      distractors: [
        { cantonese: "對住鏡刷牙", written: "對著鏡刷牙", img: "images/dist_brush.jpg",  sceneKey: "dist_brush" },
        { cantonese: "地毯砌積木", written: "地毯砌積木", img: "images/dist_blocks.jpg", sceneKey: "dist_blocks" }
      ]
    }
  ],

  // ==========================================================================
  // 第二部分：「首先 … 跟住 … 然後 … 最後 …」題庫 (共 8 題，可自由複製增加)
  // ==========================================================================
  sequence: [
    {
      id: "seq1",
      title: "洗手抹面四部曲",
      steps: [
        { cantonese: "開水喉整濕手",     written: "開水龍頭弄濕手",   img: "images/s1_1.jpg", sceneKey: "s1_1" },
        { cantonese: "搽番梘起泡泡",     written: "塗肥皂起泡泡",     img: "images/s1_2.jpg", sceneKey: "s1_2" },
        { cantonese: "沖乾淨啲泡泡",     written: "沖乾淨泡沫",       img: "images/s1_3.jpg", sceneKey: "s1_3" },
        { cantonese: "用毛巾抹手同抹面", written: "用毛巾抹手和抹面", img: "images/s1_4.jpg", sceneKey: "s1_4" }
      ]
    },
    {
      id: "seq2",
      title: "朝早起身準備返學",
      steps: [
        { cantonese: "朝早醒咗起身", written: "早上睡醒起床", img: "images/s2_1.jpg", sceneKey: "s2_1" },
        { cantonese: "刷牙同埋抹面", written: "刷牙和抹面",   img: "images/s2_2.jpg", sceneKey: "s2_2" },
        { cantonese: "換好整齊校服", written: "換好整齊校服", img: "images/s2_3.jpg", sceneKey: "s2_3" },
        { cantonese: "孭住書包返學", written: "背著書包上學", img: "images/s2_4.jpg", sceneKey: "s2_4" }
      ]
    },
    {
      id: "seq3",
      title: "種植小盆栽",
      steps: [
        { cantonese: "喺泥土挖個窿", written: "在泥土挖一個洞", img: "images/s3_1.jpg", sceneKey: "s3_1" },
        { cantonese: "放粒種子落去", written: "把種子放進去",   img: "images/s3_2.jpg", sceneKey: "s3_2" },
        { cantonese: "淋水同曬太陽", written: "澆水和曬太陽",   img: "images/s3_3.jpg", sceneKey: "s3_3" },
        { cantonese: "開出靚靚花朵", written: "開出漂亮花朵",   img: "images/s3_4.jpg", sceneKey: "s3_4" }
      ]
    },
    {
      id: "seq4",
      title: "自己整果醬三文治",
      steps: [
        { cantonese: "攞兩塊白麵包", written: "拿兩片白麵包",     img: "images/s4_1.jpg", sceneKey: "s4_1" },
        { cantonese: "用刀仔搽果醬", written: "用小刀塗果醬",     img: "images/s4_2.jpg", sceneKey: "s4_2" },
        { cantonese: "將兩塊包夾埋", written: "把兩片麵包合起來", img: "images/s4_3.jpg", sceneKey: "s4_3" },
        { cantonese: "大啖食三文治", written: "大口吃三文治",     img: "images/s4_4.jpg", sceneKey: "s4_4" }
      ]
    },
    {
      id: "seq5",
      title: "正確刷牙四部曲",
      steps: [
        { cantonese: "擠牙膏落牙刷", written: "擠牙膏在牙刷上", img: "images/s5_1.jpg", sceneKey: "s5_1" },
        { cantonese: "上上下下刷牙", written: "上上下下刷牙",   img: "images/s5_2.jpg", sceneKey: "s5_2" },
        { cantonese: "飲啖水𠺘乾淨", written: "喝口水漱乾淨",   img: "images/s5_3.jpg", sceneKey: "s5_3" },
        { cantonese: "牙齒白雪雪笑", written: "牙齒潔白地笑",   img: "images/s5_4.jpg", sceneKey: "s5_4" }
      ]
    },
    {
      id: "seq6",
      title: "去公園玩瀡滑梯",
      steps: [
        { cantonese: "排隊行上樓梯",   written: "排隊走上樓梯",   img: "images/s6_1.jpg", sceneKey: "s6_1" },
        { cantonese: "坐穩喺滑梯頂",   written: "坐穩在滑梯頂部", img: "images/s6_2.jpg", sceneKey: "s6_2" },
        { cantonese: "雙手放好瀡落嚟", written: "雙手放好滑下來", img: "images/s6_3.jpg", sceneKey: "s6_3" },
        { cantonese: "開心安全着地",   written: "開心安全着地",   img: "images/s6_4.jpg", sceneKey: "s6_4" }
      ]
    },
    {
      id: "seq7",
      title: "食飯前後好習慣",
      steps: [
        { cantonese: "食飯前去洗手",   written: "吃飯前去洗手",   img: "images/s7_1.jpg", sceneKey: "s7_1" },
        { cantonese: "坐定定食晒飯",   written: "坐好把飯吃完",   img: "images/s7_2.jpg", sceneKey: "s7_2" },
        { cantonese: "自己執好碗筷",   written: "自己收拾碗筷",   img: "images/s7_3.jpg", sceneKey: "s7_3" },
        { cantonese: "用毛巾抹乾淨嘴", written: "用毛巾抹乾淨嘴", img: "images/s7_4.jpg", sceneKey: "s7_4" }
      ]
    },
    {
      id: "seq8",
      title: "畫一幅靚靚圖畫",
      steps: [
        { cantonese: "攤開一張白紙", written: "攤開一張白紙", img: "images/s8_1.jpg", sceneKey: "s8_1" },
        { cantonese: "用鉛筆畫線條", written: "用鉛筆畫線條", img: "images/s8_2.jpg", sceneKey: "s8_2" },
        { cantonese: "用蠟筆填顏色", written: "用蠟筆塗顏色", img: "images/s8_3.jpg", sceneKey: "s8_3" },
        { cantonese: "貼堂展示畫作", written: "貼堂展示畫作", img: "images/s8_4.jpg", sceneKey: "s8_4" }
      ]
    }
  ]
};