import Image from "next/image";

export default function Contato() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-black flex flex-col items-center px-0">
      <section className="w-full max-w-3xl flex flex-col items-center py-20 px-4 gap-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-primary dark:text-zinc-50 leading-tight drop-shadow-lg mb-4">Fale com um Especialista</h1>
        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mb-8">Tire dúvidas, solicite proposta ou agende uma consultoria gratuita. Atendimento rápido e humanizado.</p>
        <form className="w-full flex flex-col gap-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8" onSubmit={e => { e.preventDefault(); alert('Mensagem enviada!'); }}>
          <input type="text" name="nome" placeholder="Seu nome" required className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" />
          <input type="email" name="email" placeholder="Seu e-mail" required className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" />
          <input type="tel" name="telefone" placeholder="Seu telefone" className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" />
          <textarea name="mensagem" placeholder="Como podemos ajudar?" required className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 min-h-[120px]" />
          <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-colors">Enviar Mensagem</button>
        </form>
        <div className="flex flex-col md:flex-row gap-6 mt-8 items-center justify-center">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold text-lg shadow-lg transition-colors flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-2.2 6.2c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-.6.6a.5.5 0 0 0 0 .7l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6c.2-.2.45-.2.65 0l1.3 1.3c.2.2.2.45 0 .65l-1.1 1.1c-.8.8-2.1.8-2.9 0l-2.1-2.1c-.8-.8-.8-2.1 0-2.9l1.1-1.1Z"/></svg>
            WhatsApp
          </a>
          <span className="text-zinc-500 text-sm">Ou envie um e-mail para <a href="mailto:contato@contadordireto.com.br" className="underline">contato@contadordireto.com.br</a></span>
        </div>
      </section>
    </main>
  );
}
