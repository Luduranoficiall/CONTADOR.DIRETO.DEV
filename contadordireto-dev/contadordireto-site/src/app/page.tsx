import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex flex-col items-center px-0">
      {/* HERO */}
      <section className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between py-20 px-4 gap-10">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary dark:text-zinc-50 leading-tight drop-shadow-lg">
            A 1ª Contabilidade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-cyan-400 dark:to-blue-600">pensada pra DEV</span>
          </h1>
          <p className="text-2xl text-zinc-700 dark:text-zinc-300 max-w-xl">
            Especialistas em Profissionais de TI. Atendimento humanizado, tecnologia de ponta, abertura de empresa rápida e suporte consultivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/planos" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors">Conheça os Planos</Link>
            <Link href="/contato" className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors">Fale com um Especialista</Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="rounded-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-semibold shadow transition-colors flex items-center gap-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-2.2 6.2c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-.6.6a.5.5 0 0 0 0 .7l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-1.1 1.1c-.8.8-2.1.8-2.9 0l-2.1-2.1c-.8-.8-.8-2.1 0-2.9l1.1-1.1Z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/contadordireto/" target="_blank" rel="noopener" className="rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-2 font-semibold shadow transition-colors flex items-center gap-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
              Instagram
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src="/hero-devs.png" alt="Contador Direto Devs" width={480} height={480} className="rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-zinc-800 animate-fade-in" priority />
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <span className="text-5xl mb-4">⚡</span>
          <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Agilidade</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-center">Abertura de empresa rápida, processos digitais e atendimento sem burocracia.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <span className="text-5xl mb-4">🤝</span>
          <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Atendimento Humano</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-center">Equipe consultiva, suporte por WhatsApp, telefone, e-mail e call.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <span className="text-5xl mb-4">🔒</span>
          <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Segurança</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-center">Tecnologia de ponta, dados protegidos, backup diário e transparência total.</p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-zinc-50">Sobre o Contador Direto</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">Com um time especializado em profissionais de TI, garantimos assessoria completa para você crescer e expandir seus negócios. Transparência, experiência e atendimento personalizado.</p>
          <Link href="/sobre" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Saiba mais</Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src="/cdd-banner.png" alt="Banner Contador Direto" width={400} height={300} className="rounded-2xl shadow-xl border-2 border-blue-100 dark:border-zinc-800" />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary dark:text-zinc-50">Depoimentos de quem confia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/IsHlrzju08Q" title="Depoimento Matheus Taveiros" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mb-4"></iframe>
            <p className="text-zinc-700 dark:text-zinc-300 text-center text-sm">“Toda parte de emissão de Notas, criação do meu CNPJ, tudo foi feito por eles, inclusive o preço é muito acessível.”</p>
            <span className="font-bold mt-2 text-blue-600 dark:text-cyan-400">Matheus Taveiros - Desenvolvedor</span>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/fFHz-jvh-SI" title="Depoimento Daniel Gândara" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mb-4"></iframe>
            <p className="text-zinc-700 dark:text-zinc-300 text-center text-sm">“Se você é Dev, se tem empresa de tecnologia, recomendo de olhos fechados.”</p>
            <span className="font-bold mt-2 text-blue-600 dark:text-cyan-400">Daniel Gândara - Fundador GuaráSoft</span>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/RZXgotoX2v8" title="Depoimento Lucas Marques" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mb-4"></iframe>
            <p className="text-zinc-700 dark:text-zinc-300 text-center text-sm">“Utilizar a plataforma do Contador Direto foi uma das melhores escolhas que fiz.”</p>
            <span className="font-bold mt-2 text-blue-600 dark:text-cyan-400">Lucas Marques - Desenvolvedor</span>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/hWnpJrprA_w" title="Depoimento Igor" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mb-4"></iframe>
            <p className="text-zinc-700 dark:text-zinc-300 text-center text-sm">“Reduziu impostos, facilitou a burocracia do CNPJ e me ajudou no exterior.”</p>
            <span className="font-bold mt-2 text-blue-600 dark:text-cyan-400">Igor - Desenvolvedor</span>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary dark:text-zinc-50">Blog & Conteúdo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/blog1.png" alt="Blog 1" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Como abrir empresa sendo DEV?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Guia prático para profissionais de TI que querem empreender.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/blog2.png" alt="Blog 2" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">PJ x CLT: O que vale mais a pena?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Entenda as diferenças e vantagens para devs e empresas.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <Image src="/blog3.png" alt="Blog 3" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Como pagar menos imposto legalmente?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Dicas de planejamento tributário para profissionais de tecnologia.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full max-w-3xl mx-auto py-16 px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary dark:text-zinc-50">Receba novidades e dicas exclusivas</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={e => { e.preventDefault(); alert('Assinatura realizada!'); }}>
            <input type="text" name="nome" placeholder="Seu nome" required className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" />
            <input type="email" name="email" placeholder="Seu e-mail" required className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" />
            <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors">Assinar Newsletter</button>
            <span className="text-xs text-zinc-500 mt-2">Prometemos não enviar spam.</span>
          </form>
        </div>
      </section>

      {/* PARCEIROS & SELO */}
      <section className="w-full max-w-6xl py-16 px-4 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-zinc-50">Parceiros & Selo de Confiança</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <a href="https://www.reclameaqui.com.br/empresa/contador-direto/" target="_blank" rel="noopener" className="flex flex-col items-center">
            <Image src="/selo.jpg" alt="Selo Reclame Aqui" width={90} height={90} className="rounded-xl mb-2" />
            <span className="text-xs text-zinc-500">Reclame Aqui</span>
          </a>
          <a href="https://agencialinking.com.br/" target="_blank" rel="noopener" className="flex flex-col items-center">
            <Image src="/logonovolinking-1.png" alt="Agência Linking" width={120} height={80} className="rounded-xl mb-2" />
            <span className="text-xs text-zinc-500">Desenvolvido por Agência Linking</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-900 text-zinc-100 py-10 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image src="/logo-cdd-branco.png" alt="Contador Direto" width={120} height={40} className="mb-2" />
            <span className="text-sm">R. das Esmeraldas, 387 - Jardim, Santo André - SP</span>
            <span className="text-sm">CNPJ: 38.320.761/0001-01 | CRC: 2SP042348/O-5</span>
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            <Link href="/servicos" className="nav-link text-zinc-100">Serviços</Link>
            <Link href="/planos" className="nav-link text-zinc-100">Planos</Link>
            <Link href="/parceiros" className="nav-link text-zinc-100">Parceiros</Link>
            <Link href="/blog" className="nav-link text-zinc-100">Blog</Link>
            <Link href="/contato" className="nav-link text-zinc-100">Contato</Link>
            <Link href="/cliente" className="nav-link text-zinc-100">Área do Cliente</Link>
          </nav>
          <div className="flex flex-col gap-2 items-center md:items-end">
            <div className="flex gap-3 mb-2">
              <a href="https://www.instagram.com/contadordireto/" target="_blank" rel="noopener" aria-label="Instagram">
                <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/company/contador-direto/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://www.facebook.com/contadordireto" target="_blank" rel="noopener" aria-label="Facebook">
                <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.youtube.com/@contadordireto5244" target="_blank" rel="noopener" aria-label="YouTube">
                <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
              </a>
            </div>
            <span className="text-xs">&copy; {new Date().getFullYear()} Contador Direto. Todos os direitos reservados.</span>
            <Link href="/politica" className="text-xs underline text-zinc-400 hover:text-zinc-200">Política de Privacidade</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
