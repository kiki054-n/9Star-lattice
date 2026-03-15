/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Globe, 
  Zap, 
  Heart, 
  Shield, 
  Star, 
  Hexagon, 
  Triangle, 
  ArrowRight,
  ChevronDown,
  Atom,
  Droplets
} from 'lucide-react';
import { useRef } from 'react';

const ELEMENTS = [
  { id: '01', name: '大地 (Earth)', icon: Globe, color: 'text-emerald-400' },
  { id: '02', name: '水 (Water)', icon: Droplets, color: 'text-blue-400' },
  { id: '03', name: '火 (Fire)', icon: Zap, color: 'text-orange-400' },
  { id: '04', name: '風 (Air)', icon: Zap, color: 'text-sky-400' },
  { id: '05', name: '空 (Ether)', icon: Hexagon, color: 'text-indigo-400' },
  { id: '06', name: '命 (Life)', icon: Heart, color: 'text-rose-400' },
  { id: '07', name: '光 (Light)', icon: Star, color: 'text-yellow-400' },
  { id: '08', name: '魂 (Soul)', icon: Shield, color: 'text-purple-400' },
  { id: '09', name: '和 (Harmony)', icon: Atom, color: 'text-teal-400' },
];

const G7_STARS = Array.from({ length: 7 });

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-[#F27D26] selection:text-black">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#F27D26]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/50">
              2026 World Peace Geometry Protocol
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[15vw] md:text-[12vw] leading-[0.85] uppercase skew-title tracking-tighter"
          >
            Seven Stars<br />
            <span className="gradient-text">9 Code</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="relative w-32 h-32 mb-8">
              {/* Emblem: Tetrahedron Visualization */}
              <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse-slow">
                <motion.path
                  d="M50 10 L90 80 L10 80 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-white/20"
                />
                <motion.path
                  d="M50 10 L50 50 L90 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#F27D26]"
                />
                <motion.path
                  d="M50 10 L50 50 L10 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#F27D26]"
                />
                <motion.path
                  d="M50 50 L50 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#F27D26]"
                />
                {/* 7 Stars */}
                {G7_STARS.map((_, i) => (
                  <circle 
                    key={i}
                    cx={50 + 35 * Math.cos((i * 2 * Math.PI) / 7)}
                    cy={50 + 35 * Math.sin((i * 2 * Math.PI) / 7)}
                    r="1.5"
                    className="fill-white animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white/30"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Declaration Section */}
      <section className="relative py-32 px-6 md:px-24 lg:px-48 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="border-l-2 border-[#F27D26] pl-8 py-4">
              <h2 className="font-serif italic text-3xl md:text-5xl mb-8 leading-tight">
                2026年：世界平和幾何学プロトコル 起動宣言
              </h2>
              <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">
                —— プロジェクト名：Seven Stars 9 Code ——
              </p>
            </div>

            <div className="font-serif text-lg md:text-2xl leading-relaxed text-white/80 space-y-8">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider border-b border-white/10 pb-2">
                【前文：真実の直視】
              </h3>
              <p>
                本日、私たちは歴史の分岐点に立っています。<br />
                今、世界を覆っているのは、単なる国境の紛争ではありません。それは、私たちが「大地」を所有物と見誤り、「エネルギー」を破壊の武器へと変え、「魂」と「肉体」を分離させてしまったことによる、地球生命系の機能不全です。
              </p>
              <p>
                ロシアも、ウクライナも、そしてそれを囲む世界も、既存の「対立」という古いコードに縛られ、出口のない迷宮を彷徨ってきました。しかし、破壊のエネルギーを消費し続ける先に、人類の未来はありません。
              </p>
            </div>

            <div className="font-serif text-lg md:text-2xl leading-relaxed text-white/80 space-y-12 pt-12">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider border-b border-white/10 pb-2">
                【宣言：Seven Stars 9 Code の起動】
              </h3>
              <p>
                私たちはここに、先進7か国（G7）の意志、世界の数多の魂、そして地球を司る9つの要素を統合する、新たな統治体系<strong className="text-[#F27D26]">「テトラ・ガバナンス」</strong>の起動を宣言します。
              </p>

              <div className="grid gap-8 mt-12">
                {[
                  {
                    title: "大地の共鳴（Code 01）",
                    content: "国境という分断を越え、汚された大地を共に浄化します。奪い合うための土ではなく、生命を育むための「Element 1（大地）」を全人類の信託財産として守護します。"
                  },
                  {
                    title: "命の変容（Code 06）",
                    content: "戦争という究極のエネルギー浪費を終結させます。日本の持つ原子力技術と水素（H2）循環技術を平和の礎とし、資源争奪の必要がない「自立分散型エネルギー社会」をウクライナから全世界へ広げます。"
                  },
                  {
                    title: "和解の幾何学（Code 09）",
                    content: "過ちを犯した者を排除するのではなく、その「破壊の力」を「再生の力」へと転換させる道を示します。自ら壊した大地を自ら癒やす時、ロシアもまた、この新しい循環の不可欠な一員（ノード）として復帰することを許可します。"
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="glass p-8 rounded-2xl"
                  >
                    <h4 className="text-[#F27D26] font-bold text-xl mb-4 flex items-center gap-3">
                      <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                      {item.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="font-serif text-lg md:text-2xl leading-relaxed text-white/80 space-y-8 pt-12">
              <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider border-b border-white/10 pb-2">
                【日本の使命：技術を魂の器へ】
              </h3>
              <p>
                資源なき国、日本。私たちは持たざる者だからこそ、奪い合うことの無意味さを知っています。私たちの技術は、もはや経済成長のためだけのものではありません。それは、地球の9つの要素を調律し、人々の魂を平和の幾何学へと繋ぎ止めるための「Code（規範）」です。
              </p>
            </div>

            <div className="pt-12 text-center">
              <p className="font-serif italic text-2xl md:text-3xl text-white mb-8">
                「地球（テラ）の呼吸を、今、私たちの手に取り戻しましょう。」
              </p>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-block px-12 py-6 border border-[#F27D26] text-[#F27D26] font-display text-2xl uppercase tracking-[0.2em] hover:bg-[#F27D26] hover:text-black transition-colors cursor-pointer"
              >
                Seven Stars 9 Code 起動
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9 Elements Grid */}
      <section className="relative py-32 bg-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-8xl uppercase skew-title mb-4">The 9 Elements</h2>
            <p className="text-white/40 tracking-[0.3em] uppercase text-xs">The Fundamental Codes of Earth</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
            {ELEMENTS.map((el, idx) => (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <span className="font-mono text-[10px] opacity-30 mb-4">{el.id}</span>
                <el.icon className={`w-8 h-8 mb-4 ${el.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-semibold tracking-wider">{el.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Ukraine Summit Concept */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-7xl uppercase skew-title mb-8 leading-none">
                Digital<br />Ukraine<br />Summit
              </h2>
              <p className="text-white/60 font-serif text-xl leading-relaxed mb-8">
                この宣言を世界に発信する最初の場所。物理的な国境を超えた「デジタル・ノード」として、ウクライナから始まる新しい平和の幾何学を構築します。
              </p>
              <ul className="space-y-4">
                {[
                  "分散型エネルギー網のプロトタイプ公開",
                  "大地浄化プロトコル (Code 01) の実証",
                  "G7 + 9 Elements 統合ガバナンスの採択"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <ArrowRight size={16} className="text-[#F27D26]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-[#F27D26]/20 rounded-full animate-reverse-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Triangle size={120} className="text-[#F27D26] opacity-20" />
                <div className="absolute font-display text-8xl opacity-10">UA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl tracking-tighter">
            SEVEN STARS <span className="text-[#F27D26]">9 CODE</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            © 2026 World Peace Geometry Protocol. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <span className="text-xs text-white/60 hover:text-white cursor-pointer">Protocol</span>
            <span className="text-xs text-white/60 hover:text-white cursor-pointer">Governance</span>
            <span className="text-xs text-white/60 hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
