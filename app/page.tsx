import Image from 'next/image';

// LINE CTAボタンコンポーネント
function LineCTA({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const baseClass = "flex items-center justify-center gap-3 w-full py-4 rounded-lg font-medium transition-all duration-300";
  const variantClass = variant === 'primary' 
    ? "bg-[#06C755] text-white hover:bg-[#05b34d] shadow-lg hover:shadow-xl" 
    : "bg-white text-[#06C755] border-2 border-[#06C755] hover:bg-[#06C755] hover:text-white";
  
  return (
    <a href="#" className={`${baseClass} ${variantClass}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
      <span className="text-lg">無料でLINE相談する</span>
    </a>
  );
}

export default function Home() {
  const worries = [
    {
      title: 'シミ・くすみが目立つ',
      description: '30代までは気にならなかったシミが、40代になって急に増えた気がする...',
    },
    {
      title: 'ハリ・弾力の低下',
      description: '朝起きると枕の跡がなかなか消えない。頬のたるみも気になる...',
    },
    {
      title: '乾燥がひどくなった',
      description: '保湿しても夕方にはカサカサ。化粧ノリも悪くなってきた...',
    },
  ];

  const solutions = [
    {
      number: '01',
      title: '肌診断で原因を特定',
      description: '経験豊富な専門スタッフが、あなたの肌状態を丁寧に診断。悩みの根本原因を明らかにします。',
    },
    {
      number: '02',
      title: 'オーダーメイドのケア提案',
      description: '診断結果に基づき、あなたに最適なスキンケアプランをご提案。無理な押し売りは一切ありません。',
    },
    {
      number: '03',
      title: '継続サポートで効果実感',
      description: 'LINEでいつでも相談OK。肌の変化に合わせてケア方法を調整し、理想の肌へ導きます。',
    },
  ];

  const results = [
    { label: '相談実績', value: '5,000', unit: '件以上' },
    { label: '満足度', value: '98.2', unit: '%' },
    { label: '平均改善期間', value: '3', unit: 'ヶ月' },
  ];

  const reviews = [
    {
      name: 'M.K様',
      age: '45歳',
      title: '諦めていたシミが薄くなりました',
      comment: '40代になってから急にシミが増え、ファンデーションで隠す毎日でした。無料相談で自分に合ったケア方法を教えていただき、3ヶ月で明らかに肌が明るくなりました。',
      before: 'シミ・くすみ',
      after: 'トーンアップ',
    },
    {
      name: 'Y.S様',
      age: '48歳',
      title: '朝の化粧ノリが全然違います',
      comment: '乾燥とハリのなさで化粧が崩れやすかったのですが、教えていただいた保湿方法を続けたところ、肌がふっくらしてきました。今では薄化粧で外出できるように。',
      before: '乾燥・化粧崩れ',
      after: 'うるおい肌',
    },
    {
      name: 'A.T様',
      age: '52歳',
      title: '同窓会���「若くなった」と言われました',
      comment: '年齢肌に悩み、何を使っても効果を感じられなかった私ですが、肌診断で自分に本当に必要なケアがわかりました。継続サポートのおかげで、自信を取り戻せました。',
      before: '年齢肌',
      after: 'ハリ・弾力UP',
    },
  ];

  const faqs = [
    {
      question: '本当に無料で相談できますか？',
      answer: 'はい、初回のLINE相談は完全無料です。肌の悩みをお聞きし、一般的なアドバイスをお伝えします。商品の無理な押し売りは一切ありませんのでご安心ください。',
    },
    {
      question: '相談後にしつこく営業されませんか？',
      answer: 'いいえ、ありません。必要な情報をお伝えした後は、ご希望がない限りこちらから連絡することはありません。',
    },
    {
      question: 'どんな悩みでも相談できますか？',
      answer: 'シミ、シワ、たるみ、乾燥、毛穴など、40代以降の肌悩み全般についてご相談いただけます。',
    },
    {
      question: '相談にはどのくらい時間がかかりますか？',
      answer: 'LINEでのやり取りなので、お好きなタイミングでご返信いただけます。通常、初回のヒアリングは5〜10分程度です。',
    },
  ];

  return (
    <main className="w-full bg-white min-h-screen font-sans">
      {/* ファーストビュー */}
      <section className="w-full bg-white">
        <div className="max-w-lg mx-auto px-5 pt-6 pb-10">
          {/* ロゴ */}
          <div className="text-center mb-6">
            <span className="text-lg tracking-widest text-slate-600 font-light">SKIN CARE LAB</span>
          </div>

          {/* 1. 悩み：ターゲットの痛みを突く */}
          <div className="text-center mb-6">
            <p className="inline-block bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full mb-4">
              40代女性の87%が実感
            </p>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight mb-3">
              シミ・くすみ・たるみ<br />
              <span className="text-primary">もう隠すの、疲れた。</span>
            </h1>
            <p className="text-slate-500 text-sm">
              30代までは気にならなかったのに...
            </p>
          </div>

          {/* メインビジュアル */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/hero-woman.jpg"
              alt="40代からの美肌ケア"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 2. 結果：具体的なベネフィット */}
          <div className="bg-gradient-to-r from-primary/5 to-teal-50 rounded-2xl p-6 mb-6">
            <p className="text-center text-sm text-slate-600 mb-3">たった3ヶ月で</p>
            <h2 className="text-center text-3xl font-bold text-slate-800 mb-2">
              見た目年齢 <span className="text-primary text-4xl">-5</span>歳
            </h2>
            <p className="text-center text-sm text-slate-600 mb-4">
              を実現した方が続出しています
            </p>
            
            {/* 実績バッジ */}
            <div className="flex justify-center gap-4 text-center">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xl font-bold text-primary">98.2%</p>
                <p className="text-xs text-slate-500">満足度</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xl font-bold text-primary">5,000+</p>
                <p className="text-xs text-slate-500">相談実績</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xl font-bold text-primary">15年</p>
                <p className="text-xs text-slate-500">運営実績</p>
              </div>
            </div>
          </div>

          {/* 3. 行動理由：今すぐ行動する理由 */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">今だけ</span>
              <span className="text-red-600 font-bold text-sm">4月限定キャンペーン</span>
            </div>
            <p className="text-center text-slate-700 text-sm">
              <span className="font-bold">先着30名様</span>に<br />
              通常5,000円の肌診断を<span className="text-red-600 font-bold text-lg">無料</span>でご提供
            </p>
            <p className="text-center text-xs text-slate-500 mt-2">
              ※ 残り枠わずか
            </p>
          </div>

          {/* CTA 1（強調） */}
          <div className="mb-3">
            <a href="#" className="flex items-center justify-center gap-3 w-full py-5 bg-[#06C755] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] animate-pulse-slow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span>無料でLINE相談する</span>
            </a>
          </div>
          
          {/* 安心要素 */}
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              完全無料
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              営業一切なし
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30秒で完了
            </span>
          </div>
          
          {/* 相談者数リアルタイム風 */}
          <p className="text-center text-xs text-slate-400">
            本日 <span className="text-primary font-bold">23名</span> が相談を開始しました
          </p>
        </div>
      </section>

      {/* 悩み共感セクション（NEW） */}
      <section className="w-full bg-slate-50 py-12">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-lg text-slate-700 font-medium leading-relaxed">
              こんな経験、ありませんか？
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="text-slate-800 font-medium">「何をしても変わらない」</span><br />
                高い化粧品を試しても、エステに通っても、結局同じ...
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="text-slate-800 font-medium">「年齢だから仕方ない」</span><br />
                40代になったら諦めるしかないと思っていた...
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="text-slate-800 font-medium">「誰に相談していいかわからない」</span><br />
                友達には言いづらいし、お店では売り込まれそう...
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/10 rounded-full px-6 py-3">
              <p className="text-primary font-medium text-sm">
                その気持ち、よくわかります。
              </p>
            </div>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              私たちは5,000人以上の<br />
              同じ悩みを持つ方をサポートしてきました。
            </p>
          </div>
        </div>
      </section>

      {/* 悩みセクション */}
      <section className="w-full bg-white py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-widest mb-2">WORRIES</p>
            <h2 className="text-xl text-slate-800 font-medium">
              こんなお悩み<br />ありませんか？
            </h2>
          </div>

          <div className="space-y-4">
            {worries.map((worry, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✓</span>
                  <div>
                    <h3 className="text-slate-800 font-medium mb-1">{worry.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{worry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 text-sm mb-2">これらの悩み、</p>
            <p className="text-xl text-slate-800 font-medium">
              正しいケアで<span className="text-primary">改善できます</span>
            </p>
          </div>
        </div>
      </section>

      {/* 解決セクション */}
      <section className="w-full bg-slate-50 py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-widest mb-2">SOLUTION</p>
            <h2 className="text-xl text-slate-800 font-medium">
              私たちが<br />解決をサポートします
            </h2>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-primary">{solution.number}</span>
                  <div>
                    <h3 className="text-slate-800 font-medium mb-2">{solution.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績セクション（信頼要素） */}
      <section className="w-full bg-primary py-12">
        <div className="max-w-lg mx-auto px-5">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            {results.map((result, index) => (
              <div key={index}>
                <p className="text-3xl font-light mb-1">
                  {result.value}<span className="text-lg">{result.unit}</span>
                </p>
                <p className="text-xs opacity-80">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 信頼要素（メディア・資格・保証） */}
      <section className="w-full bg-white py-12">
        <div className="max-w-lg mx-auto px-5">
          {/* メディア掲載 */}
          <div className="text-center mb-10">
            <p className="text-xs text-slate-500 mb-4">メディア掲載実績</p>
            <div className="flex items-center justify-center gap-6 opacity-60">
              <span className="text-slate-400 text-sm font-medium">美ST</span>
              <span className="text-slate-400 text-sm font-medium">MAQUIA</span>
              <span className="text-slate-400 text-sm font-medium">VOCE</span>
              <span className="text-slate-400 text-sm font-medium">ar</span>
            </div>
          </div>

          {/* 資格・保証バッジ */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs text-slate-700 font-medium">国家資格</p>
              <p className="text-xs text-slate-500">保有者在籍</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-xs text-slate-700 font-medium">個人情報</p>
              <p className="text-xs text-slate-500">厳重管理</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xs text-slate-700 font-medium">満足保証</p>
              <p className="text-xs text-slate-500">効果がなければ返金</p>
            </div>
          </div>

          {/* 安心メッセージ */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-medium">「売り込まれたらどうしよう...」</span><br />
              <span className="text-slate-600">ご安心ください。無理な勧誘は一切行いません。</span><br />
              <span className="text-slate-600">合わないと思ったら、いつでもブロックOKです。</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA 2（中間） */}
      <section className="w-full bg-white py-12">
        <div className="max-w-lg mx-auto px-5">
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <p className="text-slate-600 text-sm mb-3">まずは気軽に相談してみませんか？</p>
            <h3 className="text-lg text-slate-800 font-medium mb-4">
              専門スタッフが<br />あなたの肌悩みに寄り添います
            </h3>
            
            {/* 不安を消す一言 */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 mb-5 text-left">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-primary font-medium">ご安心ください：</span>
                相談後に商品を購入する必要はありません。「まだ決められない」でも大丈夫。あなたのペースでお考えください。
              </p>
            </div>
            
            <LineCTA />
            <p className="text-xs text-slate-500 mt-4">
              24時間受付・平均返信時間30分以内
            </p>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="w-full bg-slate-50 py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-widest mb-2">VOICE</p>
            <h2 className="text-xl text-slate-800 font-medium">
              実際に相談された方の声
            </h2>
          </div>

          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                {/* 星評価 */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                
                {/* タイトル */}
                <h3 className="text-slate-800 font-medium mb-3">{review.title}</h3>
                
                {/* Before/After */}
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{review.before}</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{review.after}</span>
                </div>
                
                {/* コメント */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{review.comment}</p>
                
                {/* プロフィール */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-500 text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 専門性アピール */}
      <section className="w-full bg-white py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-widest mb-2">EXPERTISE</p>
            <h2 className="text-xl text-slate-800 font-medium">
              選ばれる3つの理由
            </h2>
          </div>

          <div className="space-y-6">
            <div className="text-center p-6 border border-slate-200 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-slate-800 font-medium mb-2">国家資格保有スタッフ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                美容師・管理栄養士など有資格者が<br />科学的根拠に基づいてアドバイス
              </p>
            </div>

            <div className="text-center p-6 border border-slate-200 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-slate-800 font-medium mb-2">15年以上の実績</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                5,000件以上の相談実績で<br />あらゆる肌悩みに対応
              </p>
            </div>

            <div className="text-center p-6 border border-slate-200 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-slate-800 font-medium mb-2">LINEで気軽に相談</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                24時間いつでも相談OK<br />対面が苦手な方も安心
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-slate-50 py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-widest mb-2">FAQ</p>
            <h2 className="text-xl text-slate-800 font-medium">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-primary font-medium">Q.</span>
                  <h3 className="text-slate-800 font-medium">{faq.question}</h3>
                </div>
                <div className="flex items-start gap-3 pl-6">
                  <span className="text-slate-400 font-medium">A.</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="w-full bg-white py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-8 text-center text-white">
            <p className="text-sm opacity-90 mb-2">まずは無料相談から</p>
            <h2 className="text-2xl font-medium mb-4 leading-tight">
              あなたの肌悩み、<br />一緒に解決しましょう
            </h2>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              専門スタッフがあなたに合った<br />
              スキンケア方法をお伝えします
            </p>
            
            {/* 不安を消す一言 */}
            <div className="bg-white/15 backdrop-blur rounded-lg p-3 mb-6 text-left">
              <p className="text-xs text-white/90 leading-relaxed">
                <span className="font-medium">よくある不安：</span>
                「LINEを登録したら、しつこく連絡が来るのでは？」<br />
                → いいえ。必要な情報をお伝えした後は、ご連絡しません。いつでもブロックOKです。
              </p>
            </div>
            
            <a href="#" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-[#06C755] rounded-lg font-medium hover:bg-slate-50 transition-all duration-300 shadow-lg mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-lg">無料でLINE相談する</span>
            </a>
            
            <div className="flex items-center justify-center gap-4 text-xs opacity-80">
              <span>相談無料</span>
              <span>•</span>
              <span>24時間受付</span>
              <span>•</span>
              <span>営業なし</span>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="w-full bg-slate-900 text-white py-10">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center mb-8">
            <span className="text-lg tracking-widest font-light">SKIN CARE LAB</span>
          </div>
          
          <div className="flex justify-center gap-6 text-xs text-slate-400 mb-8">
            <a href="#" className="hover:text-white transition">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition">特定商取引法</a>
            <a href="#" className="hover:text-white transition">お問い合わせ</a>
          </div>
          
          <p className="text-center text-xs text-slate-500">
            © 2024 SKIN CARE LAB. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 固定CTAバー（モバイル） */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 pb-4 md:hidden z-50 shadow-lg">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xs text-slate-500">無理な勧誘なし</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500">いつでもブロックOK</span>
        </div>
        <a href="#" className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#06C755] text-white rounded-lg font-medium shadow-md">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <span>今すぐ無料で相談する</span>
        </a>
      </div>
    </main>
  );
}
