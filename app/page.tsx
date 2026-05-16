export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-widest">
            NOVAFLOW
          </h1>

          <div className="hidden md:flex gap-8 text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              О нас
            </a>

            <a href="#services" className="hover:text-white transition">
              Услуги
            </a>

            <a href="#contact" className="hover:text-white transition">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-black to-black" />

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Social Media Growth Agency
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Развитие
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}социальных сетей{" "}
            </span>
            нового поколения
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-8 mb-10">
            Мы помогаем брендам, блогерам и бизнесу масштабировать Instagram,
            TikTok, YouTube и Telegram с помощью контент-стратегий,
            AI-инструментов и современных систем продвижения.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

            <a
              href="https://t.me/novaflowmanager"
              target="_blank"
              className="bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Связаться с менеджером
            </a>

            <a
              href="https://t.me/novaflow"
              target="_blank"
              className="border border-zinc-700 px-10 py-5 rounded-2xl hover:bg-zinc-900 transition"
            >
              Telegram канал
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-32"
      >
        <div className="grid md:grid-cols-2 gap-20">

          <div>
            <p className="text-purple-400 uppercase tracking-[0.3em] mb-6">
              Кто мы
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              NovaFlow — команда специалистов по развитию медиа и брендов
            </h2>
          </div>

          <div className="text-zinc-400 text-lg leading-9 space-y-6">

            <p>
              Мы создаем современные системы продвижения для Instagram,
              TikTok, YouTube и Telegram. Наша цель — превращать контент
              в стабильный поток аудитории, заявок и продаж.
            </p>

            <p>
              NovaFlow объединяет креатив, аналитику, AI-технологии и
              стратегии роста. Мы работаем как с личными брендами,
              так и с бизнесами, которые хотят масштабировать свое
              присутствие в социальных сетях.
            </p>

            <p>
              Мы анализируем тренды, создаем вирусные контент-стратегии,
              оптимизируем воронки и помогаем проектам выделяться
              среди конкурентов.
            </p>

            <p>
              Наша команда использует современные AI-инструменты,
              автоматизацию и глубокую аналитику для достижения
              максимального результата.
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Наши услуги
          </p>

          <h2 className="text-5xl font-bold">
            Чем мы занимаемся
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-5">
              Instagram
            </h3>

            <p className="text-zinc-400 leading-8">
              Продвижение аккаунтов, Reels-стратегии,
              оформление профиля, контент-планы
              и рост охватов.
            </p>

          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-5">
              TikTok
            </h3>

            <p className="text-zinc-400 leading-8">
              Создание вирусного контента,
              работа с алгоритмами TikTok
              и быстрый рост аудитории.
            </p>

          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-5">
              YouTube
            </h3>

            <p className="text-zinc-400 leading-8">
              Shorts, SEO-оптимизация,
              сценарии, удержание аудитории
              и развитие каналов.
            </p>

          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-5">
              Telegram
            </h3>

            <p className="text-zinc-400 leading-8">
              Развитие Telegram-каналов,
              контент-системы, прогревы
              и автоматизация.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <h2 className="text-5xl font-bold mb-8">
          Готовы масштабировать ваш бренд?
        </h2>

        <p className="text-zinc-400 text-xl leading-8 mb-12">
          Свяжитесь с нами и мы поможем выстроить стратегию роста
          для ваших социальных сетей.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">

          <a
            href="https://t.me/novafl0w"
            target="_blank"
            className="bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Telegram канал
          </a>

          <a
            href="https://t.me/novaflowmanager"
            target="_blank"
            className="border border-zinc-700 px-10 py-5 rounded-2xl hover:bg-zinc-900 transition"
          >
            Менеджер для связи
          </a>

        </div>

      </section>

    </main>
  );
}