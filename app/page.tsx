"use client";

import { motion } from "framer-motion";

export default function Home() {
  const section = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2,0.9,0.2,1] } }
  };

  const card = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    visible: (i:number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.08 * i } })
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden">

      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[80%] glass rounded-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgba(139,92,246,0.18)] to-transparent flex items-center justify-center">
              <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple-400 to-indigo-500 shadow-sm" />
            </div>
            <h1 className="font-extrabold tracking-wider">NOVAFLOW</h1>
          </div>

          <div className="hidden md:flex items-center gap-6 text-zinc-300">
            <a href="#about" className="hover:text-white transition">О нас</a>
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
            <a href="https://t.me/novafl0wmanager" target="_blank" rel="noreferrer" className="ml-4 px-4 py-2 rounded-lg glow">Связаться</a>
          </div>

        </div>
      </nav>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={section} className="relative min-h-[80vh] flex items-center justify-center text-center px-6 pt-24">

        <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(139,92,246,0.14),transparent)]" />

        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-zinc-400 mb-4">Social Media Growth Agency</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Мы развиваем социальные сети, которые приносят результат
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-7 mb-8">
            NovaFlow — команда специалистов по продвижению социальных сетей. Мы давно работаем в этой сфере и помогаем брендам, блогерам и компаниям масштабировать аудиторию и увеличивать прибыль.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://t.me/novafl0wmanager" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-black font-semibold shadow-lg hover:scale-[1.02] transition-transform">Связаться</a>
            <a href="https://t.me/novafl0w" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition">Telegram канал</a>
          </div>
        </div>
      </motion.section>

      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-purple-400 uppercase tracking-widest mb-3">Кто мы</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NovaFlow — команда специалистов по развитию медиа и брендов</h2>
            <p className="text-zinc-400">Мы создаем стратегии, которые превращают контент в стабильный поток аудитории, заявок и продаж.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Надежность","Опыт","Современные методы","Поддержка клиентов","Быстрая связь"].map((t, i) => (
              <motion.div key={t} custom={i} variants={card} className="col-span-1 glass rounded-2xl p-6 card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="white" opacity="0.9"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t}</h4>
                    <p className="text-zinc-400 text-sm mt-1">Короткое описание преимущества и почему это важно для вашего проекта.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-purple-400 uppercase tracking-widest mb-2">Наши услуги</p>
          <h3 className="text-2xl md:text-3xl font-bold">Чем мы занимаемся</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {title: 'Instagram', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeOpacity="0.9" strokeWidth="1.2"/></svg>), desc: 'Продвижение аккаунтов, Reels-стратегии, контент-планы.'},
            {title: 'YouTube', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L16 12L10 16V8Z" fill="white"/></svg>), desc: 'Shorts, сценарии, SEO и рост канала.'},
            {title: 'Telegram канал', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12l16-7-4 17-3.5-6L8 11l-4- -" fill="white"/></svg>), desc: 'Создание и продвижение Telegram-каналов.'},
            {title: 'TikTok', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10a3 3 0 1 0 3 3h3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>), desc: 'Вирусный контент и работа с алгоритмами.'},
            {title: 'Создание сайтов', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2"/></svg>), desc: 'Дизайн, сборка и оптимизация под продажи.'},
          ].map((s, i) => (
            <motion.div key={s.title} custom={i} variants={card} className="glass rounded-2xl p-6 card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">{s.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{s.title}</h4>
                  <p className="text-zinc-400 text-sm mt-1">{s.desc}</p>
                  <div className="mt-3 text-sm text-zinc-300 font-medium">Цена договорная</div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={section} className="max-w-5xl mx-auto px-6 py-24">
        <div className="glass rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Свяжитесь с нами</h3>
          <p className="text-zinc-300 mb-6">Готовы масштабировать ваш бренд? Напишите прямо в Telegram.</p>
          <a href="https://t.me/novafl0wmanager" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-black font-semibold shadow-lg">t.me/novaflowmanager</a>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto px-6 py-16">
        <div className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-lg">Telegram канал</h4>
            <p className="text-zinc-300 text-sm">Полезные советы, кейсы, новости и фишки по продвижению социальных сетей.</p>
          </div>
          <a href="https://t.me/novafl0w" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-zinc-700">t.me/novafl0w</a>
        </div>
      </motion.section>

      <footer className="text-center text-zinc-500 py-8">© {new Date().getFullYear()} NovaFlow</footer>

    </main>
  );
}