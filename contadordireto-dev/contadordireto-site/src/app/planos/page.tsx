import Link from "next/link";

export default function Planos() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-black flex flex-col items-center px-0">
      <section className="w-full max-w-6xl flex flex-col items-center py-20 px-4 gap-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-primary dark:text-zinc-50 leading-tight drop-shadow-lg mb-4">Planos sob medida</h1>
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mb-8">Escolha o plano ideal para sua empresa, com atendimento consultivo, tecnologia e economia real.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-200 dark:border-cyan-900 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Essencial</h2>
            <span className="text-4xl font-extrabold mb-2 text-primary">R$ 199<span className="text-lg font-normal">/mês</span></span>
            <ul className="text-zinc-600 dark:text-zinc-300 text-left mb-4 mt-2 space-y-1">
              <li>✔️ Abertura de empresa grátis</li>
              <li>✔️ Contabilidade digital completa</li>
              <li>✔️ Suporte por WhatsApp</li>
              <li>✔️ Emissão de notas fiscais</li>
              <li>✔️ Relatórios mensais</li>
            </ul>
            <Link href="/contato" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors mt-2">Quero Essencial</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center border-4 border-cyan-400 dark:border-blue-600 scale-105 z-10 relative hover:scale-110 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-blue-400">Premium</h2>
            <span className="text-4xl font-extrabold mb-2 text-primary">R$ 299<span className="text-lg font-normal">/mês</span></span>
            <ul className="text-zinc-600 dark:text-zinc-300 text-left mb-4 mt-2 space-y-1">
              <li>✔️ Tudo do Essencial</li>
              <li>✔️ Consultoria tributária personalizada</li>
              <li>✔️ Planejamento fiscal avançado</li>
              <li>✔️ Atendimento prioritário</li>
              <li>✔️ Suporte para internacionalização</li>
            </ul>
            <Link href="/contato" className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors mt-2">Quero Premium</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-200 dark:border-cyan-900 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Empresarial</h2>
            <span className="text-4xl font-extrabold mb-2 text-primary">Sob consulta</span>
            <ul className="text-zinc-600 dark:text-zinc-300 text-left mb-4 mt-2 space-y-1">
              <li>✔️ Soluções para médias e grandes empresas</li>
              <li>✔️ BPO financeiro e folha</li>
              <li>✔️ Consultoria estratégica</li>
              <li>✔️ Atendimento dedicado</li>
              <li>✔️ Integração com sistemas</li>
            </ul>
            <Link href="/contato" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors mt-2">Solicitar Proposta</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center">
          <Link href="/servicos" className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 font-semibold text-lg shadow-lg transition-colors">Ver Serviços</Link>
        </div>
      </section>
    </main>
  );
}
