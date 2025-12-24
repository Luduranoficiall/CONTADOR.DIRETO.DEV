import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex flex-col items-center px-0">
      <section className="w-full max-w-6xl flex flex-col items-center py-20 px-4 gap-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-primary dark:text-zinc-50 leading-tight drop-shadow-lg mb-4">Blog & Conteúdo</h1>
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mb-8">Dicas, novidades e conteúdos exclusivos para profissionais de tecnologia, empresas e autônomos.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/blog1.png" alt="Blog 1" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Como abrir empresa sendo DEV?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Guia prático para profissionais de TI que querem empreender.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/blog2.png" alt="Blog 2" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">PJ x CLT: O que vale mais a pena?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Entenda as diferenças e vantagens para devs e empresas.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image src="/blog3.png" alt="Blog 3" width={320} height={180} className="rounded-xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Como pagar menos imposto legalmente?</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm mb-2">Dicas de planejamento tributário para profissionais de tecnologia.</p>
            <Link href="/blog" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow transition-colors w-fit">Ler artigo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
