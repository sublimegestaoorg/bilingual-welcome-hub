import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function MotorControlDiagram() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [energized, setEnergized] = useState(false);
  const [thermalTrip, setThermalTrip] = useState(false);

  const isRunning = energized && !thermalTrip;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-primary">
            {isPt
              ? "COMANDOS ELÉTRICOS · SIMULAÇÃO INTERATIVA"
              : "ELECTRICAL CONTROLS · INTERACTIVE SIMULATION"}
          </span>
          <h3 className="font-display text-base font-bold">
            {isPt
              ? "Simulador de Comando Elétrico — Partida Direta com Selo (K1)"
              : "Control Circuit Simulator — Direct-On-Line Starter with Latch (K1)"}
          </h3>
        </div>
        <div className="flex gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              if (!thermalTrip) setEnergized(true);
            }}
            className="rounded bg-primary px-3 py-1 font-semibold text-primary-foreground"
          >
            S1 ({isPt ? "Ligar" : "Start"})
          </button>
          <button
            type="button"
            onClick={() => setEnergized(false)}
            className="rounded border border-border bg-secondary px-3 py-1 text-foreground"
          >
            S0 ({isPt ? "Desligar" : "Stop"})
          </button>
          <button
            type="button"
            onClick={() => {
              const next = !thermalTrip;
              setThermalTrip(next);
              if (next) setEnergized(false);
            }}
            className={`rounded border px-3 py-1 ${
              thermalTrip
                ? "border-destructive bg-destructive text-destructive-foreground"
                : "border-border bg-background text-muted-foreground"
            }`}
          >
            FT1 (95-96): {thermalTrip ? "TRIP" : "OK"}
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded border border-border/70 bg-background/60 p-4 font-mono text-xs">
        <div>
          <span className="text-muted-foreground">220 VCA (L1)</span> →{" "}
          <span className={thermalTrip ? "text-destructive line-through" : "text-primary"}>
            FT1 (95-96 NF)
          </span>{" "}
          → <span>S0 (1-2 NF)</span> →{" "}
          <span className={isRunning ? "text-primary font-bold" : "text-muted-foreground"}>
            [S1 (3-4 NA) ∥ Selo K1 (13-14 NA)]
          </span>{" "}
          →{" "}
          <span className={isRunning ? "text-primary font-bold" : "text-muted-foreground"}>
            Bobina K1 (A1-A2)
          </span>
        </div>
        <span
          className={`rounded-full px-3 py-1 font-bold ${
            isRunning
              ? "bg-primary text-primary-foreground"
              : thermalTrip
                ? "bg-destructive/20 text-destructive"
                : "bg-secondary text-muted-foreground"
          }`}
        >
          {isRunning
            ? isPt
              ? "K1 ATRACADO · MOTOR LIGADO"
              : "K1 ENERGIZED · MOTOR RUNNING"
            : thermalTrip
              ? isPt
                ? "FALHA TÉRMICA FT1 (95-96 ABERTO)"
                : "THERMAL TRIP FT1 (95-96 OPEN)"
              : isPt
                ? "K1 DESENERGIZADO · PARADO"
                : "K1 DE-ENERGIZED · STOPPED"}
        </span>
      </div>
    </div>
  );
}

