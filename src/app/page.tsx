import Link from "next/link";
import { ArrowRight, LayoutDashboard, Database, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800/30 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-800/30 lg:p-4 lg:dark:bg-zinc-800/30">
          GOLDBACKBOND AGENCY
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://goldbackbond.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <span className="font-bold text-gold-500">GoldbackBond</span>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-gold-400 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-gold-200 after:via-gold-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-gold-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-600 drop-shadow-sm sm:text-8xl">
          CRM <br /> SUITE
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            <Users className="w-6 h-6 text-gold-500" />
            Clients
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Manage client relationships, profiles, and history in one secure vault.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-gold-500" />
            Deals
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Track pipelines, deal stages, and revenue forecasts with precision.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            <Database className="w-6 h-6 text-gold-500" />
            Assets
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Organize digital assets, contracts, and agency resources.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-bold rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,165,35,0.3)]">
          Enter Dashboard <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
}
