import React, { useState } from "react";

const CodeTerminal = () => {
  const [activeTab, setActiveTab] = useState<"python" | "sql">("python");

  return (
    <div className="w-full max-w-lg rounded-2xl border border-[var(--white-icon-tr)] bg-[#0d0d0d] shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
      {/* Barra superior de la ventana */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-[#ffffff10]">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56] inline-block"></span>
          <span className="size-3 rounded-full bg-[#ffbd2e] inline-block"></span>
          <span className="size-3 rounded-full bg-[#27c93f] inline-block"></span>
        </div>

        {/* Pestañas intercambiables */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setActiveTab("python")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "python"
                ? "bg-[#222] text-[var(--sec)] font-semibold border border-white/10"
                : "text-[var(--white-icon)] hover:text-white"
            }`}
          >
            pipeline.py
          </button>
          <button
            onClick={() => setActiveTab("sql")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "sql"
                ? "bg-[#222] text-[var(--sec)] font-semibold border border-white/10"
                : "text-[var(--white-icon)] hover:text-white"
            }`}
          >
            query.sql
          </button>
        </div>
      </div>

      {/* Contenido del editor de código */}
      <div className="p-5 text-left overflow-x-auto leading-relaxed min-h-[220px]">
        {activeTab === "python" ? (
          <div>
            <p className="text-gray-500"># Modelado analítico y transformación</p>
            <p>
              <span className="text-purple-400">import</span>{" "}
              <span className="text-blue-300">pandas</span>{" "}
              <span className="text-purple-400">as</span>{" "}
              <span className="text-yellow-200">pd</span>
            </p>
            <p>
              <span className="text-purple-400">from</span>{" "}
              <span className="text-blue-300">scipy</span>{" "}
              <span className="text-purple-400">import</span>{" "}
              <span className="text-yellow-200">stats</span>
            </p>
            <br />
            <p>
              <span className="text-blue-400">dataset</span> = pd.
              <span className="text-yellow-300">read_sql</span>(
              <span className="text-emerald-400">"SELECT * FROM metrics"</span>,
              conn)
            </p>
            <p>
              <span className="text-blue-400">model</span> = stats.
              <span className="text-yellow-300">pearsonr</span>(dataset[
              <span className="text-emerald-400">'var_a'</span>], dataset[
              <span className="text-emerald-400">'var_b'</span>])
            </p>
            <br />
            <p className="text-emerald-400">
              <span className="text-gray-500">[Output] </span>p-value &lt; 0.001 | Significación estadística validada ✓
            </p>
          </div>
        ) : (
          <div>
            <p className="text-gray-500">-- Extracción y consolidación relacional</p>
            <p>
              <span className="text-purple-400 font-bold">SELECT</span>{" "}
              m.dim_category,
            </p>
            <p className="pl-4">
              <span className="text-yellow-300">COUNT</span>(m.record_id){" "}
              <span className="text-purple-400">AS</span> total_records,
            </p>
            <p className="pl-4">
              <span className="text-yellow-300">ROUND</span>(
              <span className="text-yellow-300">AVG</span>(m.score), 2){" "}
              <span className="text-purple-400">AS</span> avg_metric
            </p>
            <p>
              <span className="text-purple-400 font-bold">FROM</span>{" "}
              analytics_schema.metrics m
            </p>
            <p>
              <span className="text-purple-400 font-bold">GROUP BY</span>{" "}
              m.dim_category
            </p>
            <p>
              <span className="text-purple-400 font-bold">ORDER BY</span>{" "}
              total_records <span className="text-purple-400 font-bold">DESC</span>;
            </p>
            <br />
            <p className="text-emerald-400">
              <span className="text-gray-500">[Query OK] </span>Filas procesadas e indexadas en 14ms ✓
            </p>
          </div>
        )}
      </div>

      {/* Barra de estado inferior */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#121212] border-t border-[#ffffff08] text-[10px] text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-400"></span>
          UTF-8
        </span>
        <span>{activeTab === "python" ? "Python 3.11" : "PostgreSQL Engine"}</span>
      </div>
    </div>
  );
};

export default CodeTerminal;
