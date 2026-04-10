import Image from 'next/image';

// LINE CTAボタンコンポーネント
function LineCTA({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const baseClass = "flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold transition-all duration-300";
  const variantClass = variant === 'primary' 
    ? "bg-gradient-to-r from-[#06C755] to-[#00B900] text-white shadow-[0_4px_20px_rgba(6,199,85,0.4)] hover:shadow-[0_6px_25px_rgba(6,199,85,0.5)] hover:scale-[1.02]" 
    : "bg-white text-[#06C755] border-2 border-[#06C755] hover:bg-[#06C755] hover:text-white";
  
  return (
    <a href="#" className={`${baseClass} ${variantClass}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
      <span className="text-lg">LINEで無料相談する（30秒）</span>
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
    { label: '相談実績', value: '5,847', unit: '件' },
    { label: '満足度', value: '98.2', unit: '%' },
    { label: '平均改善期間', value: '2.8', unit: 'ヶ月' },
    { label: 'リピート率', value: '94.5', unit: '%' },
  ];

  const reviews = [
    {
      name: 'M.K様',
      age: '45歳・会社員',
      location: '東京都',
      period: '相談から3ヶ月',
      title: '正直、最初は半信半疑でした',
      comment: '「無料相談」って怪しいかも...と思いながらLINE登録しました。でも、押し売りも一切なく、私の生活習慣や肌質を丁寧に聞いてくれて。教えてもらった朝晩の洗顔方法を変えただけで、2週間で肌のザラつきが減ったんです。今では会社の同僚に「最近肌キレイになったね」と言われるように。',
      before: 'シミ・くすみ・毛穴',
      after: '肌トーン改善',
    },
    {
      name: 'Y.S様',
      age: '48歳・主婦',
      location: '神奈川県',
      period: '相談から2ヶ月',
      title: '夫に「化粧品変えた？」と聞かれました',
      comment: '子育てと仕事で自分の肌ケアは後回し。気づいたら頬のたるみとほうれい線が...。相談したら「今のスキンケア、実は肌に合ってないかも」とのこと。高い化粧品をやめて、自分に合った方法に変えたら、むしろコストも下がって効果も出て。もっと早く相談すればよかったです。',
      before: 'たるみ・ほうれい線',
      after: 'ハリ感アップ',
    },
    {
      name: 'H.N様',
      age: '51歳・パート',
      location: '埼玉県',
      period: '相談から4ヶ月',
      title: '娘と一緒に写真を撮るのが嫌じゃなくなりました',
      comment: '娘の結婚式を控え、写真に写る自分の顔が本当に嫌でした。藁にもすがる思いで相談。最初のカウンセリングで「諦めないでください。まだ間に関います」と言われて泣きそうに。結婚式では「お母さんキレイ!」と言ってもらえて、相談して本当によかったです。',
      before: '年齢肌・自信喪失',
      after: '自信回復',
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
          <div className="bg-gradient-to-br from-red-50 to-amber-50 border-2 border-red-200 rounded-xl p-5 mb-6 relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
            
            <div className="relative">
              {/* 緊急性ヘッダー */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">緊急</span>
                <span className="text-red-600 font-bold">4月の無料枠</span>
              </div>
              
              {/* 残り枠数（大きく表示） */}
              <div className="text-center mb-3">
                <span className="text-slate-600 text-sm">残り</span>
                <span className="text-red-600 text-5xl font-bold mx-2">5</span>
                <span className="text-slate-600 text-sm">名様</span>
              </div>
              
              {/* 通常価格との比較 */}
              <div className="bg-white rounded-lg p-3 mb-3 text-center">
                <p className="text-xs text-slate-500 mb-1">通常価格 <span className="line-through">5,000円</span></p>
                <p className="text-red-600 font-bold text-xl">今だけ無料</p>
              </div>
              
              {/* 損失回避メッセージ */}
              <p className="text-center text-xs text-slate-600 leading-relaxed">
                このページを閉じると、次回は<span className="font-bold text-red-600">通常料金</span>になる可能性があります。<br />
                <span className="font-medium">今すぐ枠を確保することをおすすめします。</span>
              </p>
            </div>
          </div>

          {/* CTA上部テキスト */}
          <div className="text-center mb-3">
            <p className="text-xs text-primary font-medium">
              ＼ 初回限定特典あり ／
            </p>
          </div>
          
          {/* CTA 1（強調） */}
          <div className="mb-3">
            <a href="#" className="group flex flex-col items-center justify-center w-full py-5 bg-gradient-to-r from-[#06C755] to-[#00B900] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(6,199,85,0.4)] hover:shadow-[0_12px_40px_rgba(6,199,85,0.5)] hover:scale-[1.02] relative overflow-hidden">
              {/* 光るエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="flex items-center gap-3 relative">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                <span>LINEで無料相談する（30秒）</span>
              </div>
            </a>
          </div>
          
          {/* 満足度・予約案内 */}
          <div className="text-center mb-4">
            <p className="text-sm text-slate-700 font-medium mb-1">
              満足度98%の美肌ケア
            </p>
            <p className="text-xs text-slate-500">
              ご予約枠が埋まりやすいため、お早めにご相談ください
            </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
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
          <div className="bg-gradient-to-br from-slate-50 to-primary/5 rounded-2xl p-6 text-center border border-slate-200">
            {/* 特典テキスト */}
            <p className="text-xs text-primary font-medium mb-4">
              ＼ 初回限定特典あり ／
            </p>
            
            <LineCTA />
            
            {/* 満足度・予約案内 */}
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-700 font-medium mb-1">
                満足度98%の美肌ケア
              </p>
              <p className="text-xs text-slate-500">
                ご予約枠が埋まりやすいため、お早めにご相談ください
              </p>
            </div>
            
            {/* 行動を促す一文 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                「もう少し考えてから...」と思っていませんか？<br />
                <span className="font-medium text-amber-700">でも、肌の悩みは待ってくれません。</span><br />
                今日の一歩が、3ヶ月後のあなたを変えます。
              </p>
            </div>
            
            <LineCTA />
            <p className="text-xs text-slate-500 mt-4">
              30秒で完了・24時間受付・営業一切なし
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
                {/* 星評価と期間 */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{review.period}</span>
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
                    <p className="text-sm text-slate-700">{review.name} <span className="text-slate-400">|</span> <span className="text-slate-500">{review.age}</span></p>
                    <p className="text-xs text-slate-500">{review.location}</p>
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
                5,000件以上の相談実績��<br />あらゆる肌悩みに対応
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
      <section className="w-full bg-slate-900 py-16">
        <div className="max-w-lg mx-auto px-5">
          <div className="text-center text-white mb-8">
            <p className="text-slate-400 text-sm mb-2">最後にお伝えしたいこと</p>
            <h2 className="text-2xl font-medium mb-4 leading-tight">
              「あの時、相談していれば...」<br />
              <span className="text-primary">そう後悔しないために。</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-6 text-center text-white relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* 特典テキスト */}
              <p className="text-xs opacity-90 mb-4">
                ＼ 初回限定特典あり ／
              </p>
              
              {/* CTAボタン */}
              <a href="#" className="group flex items-center justify-center gap-3 w-full py-5 bg-white text-[#06C755] rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06C755]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-7 h-7 relative" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                <span className="relative">LINEで無料相談する（30秒）</span>
              </a>
              
              {/* 満足度・予約案内 */}
              <p className="text-sm font-medium opacity-95 mb-1">
                満足度98%の美肌ケア
              </p>
              <p className="text-xs opacity-80">
                ご予約枠が埋まりやすいため、お早めにご相談ください
              </p>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 pb-5 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-xs text-slate-600">満足度98%</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500">予約枠が埋まりやすいためお早めに</span>
        </div>
        <a href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#06C755] to-[#00B900] text-white rounded-xl font-bold shadow-[0_4px_20px_rgba(6,199,85,0.4)] active:scale-[0.98] transition-transform">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <span>LINEで無料相談する（30秒）</span>
        </a>
      </div>
    </main>
  );
}
