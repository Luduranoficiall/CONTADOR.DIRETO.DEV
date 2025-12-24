import Link from "next/link";
import Image from "next/image";

export default function Servicos() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex flex-col items-center px-0">
      <section className="w-full max-w-6xl flex flex-col items-center py-20 px-4 gap-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-primary dark:text-zinc-50 leading-tight drop-shadow-lg mb-4">Serviços Contábeis Premium</h1>
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mb-8">Soluções completas para empresas de tecnologia, profissionais de TI, autônomos e startups. Atendimento consultivo, tecnologia de ponta e processos digitais.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-abertura.png" alt="Abertura de Empresa" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Abertura de Empresa</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Abertura de CNPJ, alteração contratual, regularização e enquadramento tributário ideal para devs e startups.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-fiscal.png" alt="Gestão Fiscal" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Gestão Fiscal & Tributária</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Apuração de impostos, planejamento tributário, emissão de notas fiscais e obrigações acessórias.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-pessoal.png" alt="Departamento Pessoal" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Departamento Pessoal</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Folha de pagamento, pró-labore, admissões, demissões, obrigações trabalhistas e eSocial.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-consultoria.png" alt="Consultoria Contábil" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Consultoria Contábil</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Orientação estratégica, análise de contratos, suporte para internacionalização e dúvidas fiscais.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-regularizacao.png" alt="Regularização" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Regularização & Compliance</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Certidões negativas, parcelamentos, defesa fiscal, compliance e adequação à LGPD.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/servico-tec.png" alt="Tecnologia e Integração" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-cyan-400">Tecnologia & Integração</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">Plataforma online, integração com bancos, dashboard financeiro e atendimento por WhatsApp.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center">
          <Link href="/contato" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg shadow-lg transition-colors">Solicitar Proposta</Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold text-lg shadow-lg transition-colors flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-2.2 6.2c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-.6.6a.5.5 0 0 0 0 .7l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-1.1 1.1c-.8.8-2.1.8-2.9 0l-2.1-2.1c-.8-.8-.8-2.1 0-2.9l1.1-1.1Z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
