import Image from "next/image";

export default function Parceiros() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex flex-col items-center px-0">
      <section className="w-full max-w-6xl flex flex-col items-center py-20 px-4 gap-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-primary dark:text-zinc-50 leading-tight drop-shadow-lg mb-4">Nossos Parceiros</h1>
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mb-8">Trabalhamos com empresas e plataformas que elevam o padrão de tecnologia, atendimento e confiança para nossos clientes.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center justify-center">
          <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <Image src="/logonovolinking-1.png" alt="Agência Linking" width={120} height={80} className="mb-4" />
            <span className="font-bold text-blue-600 dark:text-cyan-400 mb-2">Agência Linking</span>
            <span className="text-zinc-600 dark:text-zinc-300 text-center text-sm">Desenvolvimento web, marketing digital e performance para negócios digitais.</span>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <Image src="/selo.jpg" alt="Selo Reclame Aqui" width={90} height={90} className="mb-4" />
            <span className="font-bold text-blue-600 dark:text-cyan-400 mb-2">Reclame Aqui</span>
            <span className="text-zinc-600 dark:text-zinc-300 text-center text-sm">Selo de reputação e confiança, excelência no atendimento ao cliente.</span>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <Image src="/parceiro-banco.png" alt="Banco Parceiro" width={120} height={60} className="mb-4" />
            <span className="font-bold text-blue-600 dark:text-cyan-400 mb-2">Banco Parceiro</span>
            <span className="text-zinc-600 dark:text-zinc-300 text-center text-sm">Integração bancária, soluções financeiras e facilidades para clientes PJ.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
