export default {
  eng: {
    screens: {
      home: "Home",
      profile: "Profile",
      experience: "Experience",
      ability: "Ability",
      projects: "Projects",
      contact: "Contact",
      settings: "Settings",
    },
    home: {
      title: "Poyao  Wang",
      subTitle: "This is Poyao's mobile app",
      buttonTitle: "WELCOME",
      btnTextEng: "English",
      btnTextCht: "Chinese",
      btnTextJpn: "Japanese",
    },
    profile: {
      oneLineMsg: "A Self-Taught Programmer",
      aboutMe:
        "I am a mechanical engineer. Working in automobile industry. I started stydying programming since 2019.",
      name: "Poyao Wang",
      details: [
        { title: "Age :", content: "33 years" },
        { title: "Location :", content: "Tokyo, Japan" },
      ],
    },
    experience: {
      educations: {
        title: "Educations",
        data: [
          {
            inst: "Osaka University",
            subInst: "School of Engineering",
            hrefText: "https://www.eng.osaka-u.ac.jp/en",
            jobTitle: "Sphecial Researcher",
            time: "2010 - 2011",
            cont:
              "Takeishi and Komiyama's Laboratory. FrontierLab Program Fall 2010. " +
              "Gas turbine film cooling research.",
          },
          {
            inst: "National Tsing Hua University",
            subInst: "School of Engineering",
            hrefText: "http://pme.site.nthu.edu.tw/index.php?Lang=en",
            jobTitle: "Power of Mechanical Engineering",
            time: "2006 - 2011",
            cont: "Bachelor's degree. Thermo-Fluids Engineering Division",
          },
        ],
      },
      careers: {
        title: "Careers",
        data: [
          {
            inst: "Chassis Brake International",
            subInst: "CBI Japan",
            hrefText: "https://www.chassisbrakes.com/country/japan/",
            jobTitle: "Test Engineer",
            time: "Jul 2019 - Present",
            cont:
              "Responsible for brake units testing. " +
              "Brake performance test, functional tests. " +
              "Test data analysis, summarising, material making. ",
          },
          {
            inst: "Working Holiday in Australia",
            subInst: "Food and Meat Industry",
            hrefText: false,
            jobTitle: "Backpacker",
            time: "Jan 2018 - May 2019",
            cont:
              "Experiencing Australian culture and lifestyle. " +
              "Kitchen hand of Sushi Train (sushi restaurant). " +
              "Production line worker in Australian Country Choice (meat factory).",
          },
          {
            inst: "Daimler AG",
            subInst: "Mitsubishi Fuso",
            hrefText: "https://www.mitsubishi-fuso.com",
            jobTitle: "Test Engineer",
            time: "Apr 2013 - Sep 2016",
            cont:
              "Responsible for heavy duty diesel engine dyno testing. " +
              "Engine performance test, emission test , functional test, and durability test. " +
              "Test data analysis, summarising, material making. " +
              "Test planning, execution. ",
          },
          {
            inst: "Taiwan (R.O.C) Army",
            subInst: "52th Engineering Group",
            hrefText: false,
            jobTitle: "Private First Class",
            time: "Nov 2011 - Oct 2012",
            cont:
              "Military service of ROC citizens. " +
              "Accomplished the daily commands and routines.",
          },
        ],
      },
    },
    ability: {
      skills: {
        title: "Skill",
        data: [
          {
            name: "JavaScript",
            iconName: "language-javascript",
            default: true,
            rate: 4,
          },
          { name: "HTML", iconName: "language-html5", default: true, rate: 3 },
          { name: "CSS", iconName: "language-css3", default: true, rate: 3 },
          { name: "node.js", iconName: "nodejs", default: true, rate: 4 },
          { name: "ReactJS", iconName: "react", default: true, rate: 4 },
          { name: "Git / Github", iconName: "git", default: true, rate: 3 },
          { name: "React Native", iconName: "react", default: false, rate: 4 },
          {
            name: "Python",
            iconName: "language-python",
            default: false,
            rate: 3,
          },
          { name: "Bootstrap", iconName: "bootstrap", default: false, rate: 3 },
          { name: "MongoDb", iconName: "database", default: false, rate: 3 },
          {
            name: "Cmd lines",
            iconName: "code-greater-than",
            default: false,
            rate: 2,
          },
          { name: "VBA", iconName: "file-excel-box", default: false, rate: 3 },
        ],
      },
      tools: {
        title: "Tools",
        data: [
          { name: "Mac", iconName: "apple", default: true, rate: 5 },
          { name: "Windows", iconName: "microsoft", default: true, rate: 5 },
          {
            name: "MS Office",
            iconName: "microsoft-office",
            default: true,
            rate: 5,
          },
          {
            name: "VSCode",
            iconName: "microsoft-visual-studio-code",
            default: true,
            rate: 3,
          },
          {
            name: "Google Drive",
            iconName: "google-drive",
            default: true,
            rate: 3,
          },
          { name: "Google Cloud", iconName: "cloud", default: true, rate: 2 },
          { name: "Adobe Ai", iconName: "adobe", default: false, rate: 3 },
          { name: "Adobe Ps", iconName: "adobe", default: false, rate: 3 },
          { name: "Fusion 360", iconName: "file-cad", default: false, rate: 3 },
          {
            name: "Raspberry Pi",
            iconName: "raspberry-pi",
            default: false,
            rate: 3,
          },
        ],
      },
      languages: {
        title: "Languages",
        data: [
          { name: "Chinese", iconName: "alpha-c-box", default: true, rate: 5 },
          { name: "English", iconName: "alpha-e-box", default: true, rate: 4 },
          { name: "Japanese", iconName: "alpha-j-box", default: true, rate: 4 },
          { name: "German", iconName: "alpha-g-box", default: false, rate: 1 },
        ],
      },
    },
    projects: {
      cards: [
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project1.jpg",
          cardTitleText: "My web app / ReactJS",
          cardText:
            "This webpage is built by reactJS, combined with " +
            "Bootstrap, and deployed on Google Cloud.",
          btnLink: "https://github.com/BoyoWang/my-web-app",
          btnText: "Github Link",
        },
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project2.jpg",
          cardTitleText: "Raspberry Pi / Python",
          cardText:
            "A motor controller, built on Raspberry Pi, " +
            "coding in Python, using Tkinter as GUI.",
          btnLink: "https://github.com/BoyoWang/control-box",
          btnText: "Github Link",
        },
      ],
    },
    contact: {
      text1: "Interested in my work?",
      text2: "Feel free to contact me.",
      linkedin: {
        iconName: "linkedin",
        iconText: "LinkedIn",
        linkContent: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      github: {
        iconName: "github",
        iconText: "GitHub",
        linkContent: "https://github.com/poyao-wang",
      },
      email: {
        iconName: "email",
        iconText: "Email",
        linkContent: "mailto:michael90110@gmail.com",
      },
      website: {
        iconName: "web",
        iconText: "Website",
        linkContent: "https://boyo-web-app.appspot.com/",
      },
      ios: {
        iconName: "apple",
        iconText: "iOS App",
        linkContent: "",
      },
      android: {
        iconName: "android",
        iconText: "Android App",
        linkContent: "",
      },
    },
  },
  cht: {
    screens: {
      home: "首　頁",
      profile: "個人資料",
      experience: "履　歷",
      ability: "能　力",
      projects: "作　品",
      contact: "聯絡方式",
      settings: "設　定",
    },
    home: {
      title: "王 柏 堯",
      subTitle: "這是王柏堯的個人App",
      buttonTitle: "歡　迎",
      btnTextEng: "英　文",
      btnTextCht: "中　文",
      btnTextJpn: "日　文",
    },
    profile: {
      oneLineMsg: "自學程式設計師",
      aboutMe:
        "我是機械工程師。目前在汽車產業就職。我從2019年開始自學程式設計。",
      name: "王 柏 堯",
      details: [
        { title: "年齡 :", content: "33 歲" },
        { title: "地點 :", content: "日本　東京" },
      ],
    },
    experience: {
      educations: {
        title: "教育經歷",
        data: [
          {
            inst: "大阪大學",
            subInst: "工學院",
            hrefText: "https://www.eng.osaka-u.ac.jp/en",
            jobTitle: "特別研究生",
            time: "2010 - 2011",
            cont:
              "武石‧小宮山研究室。FrontierLab計畫2010秋季。" +
              "渦輪引擎氣膜冷卻技術研究。",
          },
          {
            inst: "國立清華大學",
            subInst: "工學院",
            hrefText: "http://pme.site.nthu.edu.tw/index.php?Lang=en",
            jobTitle: "動力機械工程學系",
            time: "2006 - 2011",
            cont: "學士學位。 熱流能源學程",
          },
        ],
      },
      careers: {
        title: "求職經歷",
        data: [
          {
            inst: "泛博制動部件",
            subInst: "CBI 日本",
            hrefText: "https://www.chassisbrakes.com/country/japan/",
            jobTitle: "測試工程師",
            time: "2019年7月 - 現在",
            cont:
              "負責汽車剎車零件測試。" +
              "煞車性能試驗、剎車機能試驗。 " +
              "測試數據分析、整理，測試報告撰寫。",
          },
          {
            inst: "澳洲打工度假",
            subInst: "食品和肉類產業",
            hrefText: false,
            jobTitle: "背包客",
            time: "2018年1月 - 2019年5月",
            cont:
              "體驗澳洲文化與生活。" +
              "Sushi Train（連鎖壽司店）廚房幫手。" +
              "Australian Country Choice（牛肉工廠）生產線員工。",
          },
          {
            inst: "戴姆勒汽車集團",
            subInst: "三菱扶桑卡客車有限公司",
            hrefText: "https://www.mitsubishi-fuso.com",
            jobTitle: "測試工程師",
            time: "2013年4月 - 2016年9月",
            cont:
              "負責大型柴油引擎測試。" +
              "性能試驗、機能試驗、耐久試驗。" +
              "測試數據分析、整理，測試報告撰寫。" +
              "測試行程規劃、執行。",
          },
          {
            inst: "中華民國（台灣）陸軍",
            subInst: "第52工兵團",
            hrefText: false,
            jobTitle: "一等兵",
            time: "2011年11月 - 2012年10月",
            cont: "中華民國（台灣）兵役。執行每日任務與訓練",
          },
        ],
      },
    },
    ability: {
      skills: {
        title: "技　能",
        data: [
          {
            name: "JavaScript",
            iconName: "language-javascript",
            default: true,
            rate: 4,
          },
          { name: "HTML", iconName: "language-html5", default: true, rate: 3 },
          { name: "CSS", iconName: "language-css3", default: true, rate: 3 },
          { name: "node.js", iconName: "nodejs", default: true, rate: 4 },
          { name: "ReactJS", iconName: "react", default: true, rate: 4 },
          { name: "Git / Github", iconName: "git", default: true, rate: 3 },
          { name: "React Native", iconName: "react", default: false, rate: 4 },
          {
            name: "Python",
            iconName: "language-python",
            default: false,
            rate: 3,
          },
          { name: "Bootstrap", iconName: "bootstrap", default: false, rate: 3 },
          { name: "MongoDb", iconName: "database", default: false, rate: 3 },
          {
            name: "Cmd lines",
            iconName: "code-greater-than",
            default: false,
            rate: 2,
          },
          { name: "VBA", iconName: "file-excel-box", default: false, rate: 3 },
        ],
      },
      tools: {
        title: "工　具",
        data: [
          { name: "Mac", iconName: "apple", default: true, rate: 5 },
          { name: "Windows", iconName: "microsoft", default: true, rate: 5 },
          {
            name: "MS Office",
            iconName: "microsoft-office",
            default: true,
            rate: 5,
          },
          {
            name: "VSCode",
            iconName: "microsoft-visual-studio-code",
            default: true,
            rate: 3,
          },
          {
            name: "Google Drive",
            iconName: "google-drive",
            default: true,
            rate: 3,
          },
          { name: "Google Cloud", iconName: "cloud", default: true, rate: 2 },
          { name: "Adobe Ai", iconName: "adobe", default: false, rate: 3 },
          { name: "Adobe Ps", iconName: "adobe", default: false, rate: 3 },
          { name: "Fusion 360", iconName: "file-cad", default: false, rate: 3 },
          {
            name: "Raspberry Pi",
            iconName: "raspberry-pi",
            default: false,
            rate: 3,
          },
        ],
      },
      languages: {
        title: "語　言",
        data: [
          { name: "中　文", iconName: "alpha-c-box", default: true, rate: 5 },
          { name: "英　文", iconName: "alpha-e-box", default: true, rate: 4 },
          { name: "日　文", iconName: "alpha-j-box", default: true, rate: 4 },
          { name: "德　文", iconName: "alpha-g-box", default: false, rate: 1 },
        ],
      },
    },
    projects: {
      cards: [
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project1.jpg",
          cardTitleText: "我的網頁 App / ReactJS",
          cardText:
            "這個網頁使用 ReactJS，並結合 Bootstrap，上傳於 Google Cloud 雲端伺服器。",
          btnLink: "https://github.com/BoyoWang/my-web-app",
          btnText: "Github 連結",
        },
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project2.jpg",
          cardTitleText: "Raspberry Pi / Python",
          cardText:
            "這是一個馬達控制器，使用 Raspberry Pi 為硬體介面，控制邏輯由 Python 寫成，並結合使用者介面 Tkinter 函式庫。",
          btnLink: "https://github.com/BoyoWang/control-box",
          btnText: "Github 連結",
        },
      ],
    },
    contact: {
      text1: "對於我的作品有興趣嗎？",
      text2: "歡迎隨時與我聯繫。",
      linkedin: {
        iconName: "linkedin",
        iconText: "LinkedIn",
        linkContent: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      github: {
        iconName: "github",
        iconText: "GitHub",
        linkContent: "https://github.com/poyao-wang",
      },
      email: {
        iconName: "email",
        iconText: "Email",
        linkContent: "mailto:michael90110@gmail.com",
      },
      website: {
        iconName: "web",
        iconText: "Website",
        linkContent: "https://boyo-web-app.appspot.com/",
      },
      ios: {
        iconName: "apple",
        iconText: "iOS App",
        linkContent: "",
      },
      android: {
        iconName: "android",
        iconText: "Android App",
        linkContent: "",
      },
    },
  },
  jpn: {
    screens: {
      home: "ホーム",
      profile: "プロフィール",
      experience: "履　歴",
      ability: "能　力",
      projects: "作　品",
      contact: "連絡先",
      settings: "設　定",
    },
    home: {
      title: "ワン ポヤオ",
      subTitle: "ワンポヤオのモバイルアプリ",
      buttonTitle: "ようこそ",
      btnTextEng: "英　語",
      btnTextCht: "中国語",
      btnTextJpn: "日本語",
    },
    profile: {
      oneLineMsg: "独学プログラマー",
      aboutMe:
        "現職は自動車産業の機械エンジニア。2019年からプログラミングを習い始めた。",
      name: "ワン　ポヤオ",
      details: [
        { title: "年齢 :", content: "33 歳" },
        { title: "場所 :", content: "日本　東京" },
      ],
    },
    experience: {
      educations: {
        title: "学　歴",
        data: [
          {
            inst: "大阪大学",
            subInst: "工学部",
            hrefText: "https://www.eng.osaka-u.ac.jp/en",
            jobTitle: "特別研究生",
            time: "2010 - 2011",
            cont:
              "武石・小宮山研究室。2010年FrontierLabプログラム。" +
              "ガスタービンのフィルム冷却に関する研究。",
          },
          {
            inst: "国立清華大学",
            subInst: "工学部",
            hrefText: "http://pme.site.nthu.edu.tw/index.php?Lang=en",
            jobTitle: "動力機械工学部",
            time: "2006 - 2011",
            cont: "学士。熱流体力学分野。",
          },
        ],
      },
      careers: {
        title: "職　歴",
        data: [
          {
            inst: "CBI ジャパン",
            subInst: "CBI ジャパン",
            hrefText: "https://www.chassisbrakes.com/country/japan/",
            jobTitle: "テスティングエンジニア",
            time: "2019年7月 - 現在",
            cont:
              "車用ブレーキ試験担当。" +
              "ブレーキ性能試験、ブレーキ機能試験。" +
              "データー解析、まとめ。レポート作成。",
          },
          {
            inst: "オーストラリア",
            subInst: "食品、肉産業",
            hrefText: false,
            jobTitle: "バックパッカー",
            time: "2018年1月 - 2019年5月",
            cont:
              "オーストラリアの文化とライフスタイルの体験。" +
              "Sushi Train（寿司屋）キッチンスタッフ。" +
              "Australian Country Choice（牛肉工場）生産スタッフ。",
          },
          {
            inst: "ダイムラー AG",
            subInst: "三菱ふそうトラック・バス",
            hrefText: "https://www.mitsubishi-fuso.com",
            jobTitle: "開発エンジニア",
            time: "2013年4月 - 2016年9月",
            cont:
              "大型ディーゼルエンジン試験担当。" +
              "性能試験、機能試験、耐久試験。" +
              "データー解析、まとめ。レポート作成。" +
              "試験プランニング、実行。",
          },
          {
            inst: "中華民国（台湾）陸軍",
            subInst: "第52工兵団",
            hrefText: false,
            jobTitle: "一等兵",
            time: "2011年11月 - 2012年10月",
            cont:
              "中華民国（台湾）国民の兵役。毎日のコマンドとルーチンの実行。",
          },
        ],
      },
    },
    ability: {
      skills: {
        title: "技　能",
        data: [
          {
            name: "JavaScript",
            iconName: "language-javascript",
            default: true,
            rate: 4,
          },
          { name: "HTML", iconName: "language-html5", default: true, rate: 3 },
          { name: "CSS", iconName: "language-css3", default: true, rate: 3 },
          { name: "node.js", iconName: "nodejs", default: true, rate: 4 },
          { name: "ReactJS", iconName: "react", default: true, rate: 4 },
          { name: "Git / Github", iconName: "git", default: true, rate: 3 },
          { name: "React Native", iconName: "react", default: false, rate: 4 },
          {
            name: "Python",
            iconName: "language-python",
            default: false,
            rate: 3,
          },
          { name: "Bootstrap", iconName: "bootstrap", default: false, rate: 3 },
          { name: "MongoDb", iconName: "database", default: false, rate: 3 },
          {
            name: "Cmd lines",
            iconName: "code-greater-than",
            default: false,
            rate: 2,
          },
          { name: "VBA", iconName: "file-excel-box", default: false, rate: 3 },
        ],
      },
      tools: {
        title: "ツール",
        data: [
          { name: "Mac", iconName: "apple", default: true, rate: 5 },
          { name: "Windows", iconName: "microsoft", default: true, rate: 5 },
          {
            name: "MS Office",
            iconName: "microsoft-office",
            default: true,
            rate: 5,
          },
          {
            name: "VSCode",
            iconName: "microsoft-visual-studio-code",
            default: true,
            rate: 3,
          },
          {
            name: "Google Drive",
            iconName: "google-drive",
            default: true,
            rate: 3,
          },
          { name: "Google Cloud", iconName: "cloud", default: true, rate: 2 },
          { name: "Adobe Ai", iconName: "adobe", default: false, rate: 3 },
          { name: "Adobe Ps", iconName: "adobe", default: false, rate: 3 },
          { name: "Fusion 360", iconName: "file-cad", default: false, rate: 3 },
          {
            name: "Raspberry Pi",
            iconName: "raspberry-pi",
            default: false,
            rate: 3,
          },
        ],
      },
      languages: {
        title: "語　学",
        data: [
          { name: "中国語", iconName: "alpha-c-box", default: true, rate: 5 },
          { name: "英　語", iconName: "alpha-e-box", default: true, rate: 4 },
          { name: "日本語", iconName: "alpha-j-box", default: true, rate: 4 },
          {
            name: "ドイツ語",
            iconName: "alpha-g-box",
            default: false,
            rate: 1,
          },
        ],
      },
    },
    projects: {
      cards: [
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project1.jpg",
          cardTitleText: "マイウェブアプリ / ReactJS",
          cardText:
            "このウェブサイトは ReactJS で作った。Bootstrap と組み合わせ、GoogleCloud にデプロイされた。",
          btnLink: "https://github.com/BoyoWang/my-web-app",
          btnText: "Github リンク",
        },
        {
          imgSrc: "https://boyo-web-app.appspot.com/assets/Project2.jpg",
          cardTitleText: "Raspberry Pi / Python",
          cardText:
            "Raspberry Pi をハードウェアにしたモーターコントローラー。Python によりコントロールロジックを作成し、Tkinter で GUI を作った。",
          btnLink: "https://github.com/BoyoWang/control-box",
          btnText: "Github リンク",
        },
      ],
    },
    contact: {
      text1: "私の作品に興味があります？",
      text2: "お気軽にご連絡ください。",
      linkedin: {
        iconName: "linkedin",
        iconText: "LinkedIn",
        linkContent: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      github: {
        iconName: "github",
        iconText: "GitHub",
        linkContent: "https://github.com/poyao-wang",
      },
      email: {
        iconName: "email",
        iconText: "Email",
        linkContent: "mailto:michael90110@gmail.com",
      },
      website: {
        iconName: "web",
        iconText: "Website",
        linkContent: "https://boyo-web-app.appspot.com/",
      },
      ios: {
        iconName: "apple",
        iconText: "iOS App",
        linkContent: "",
      },
      android: {
        iconName: "android",
        iconText: "Android App",
        linkContent: "",
      },
    },
  },
};
