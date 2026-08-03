const flow = ["Mensaje entrante", "Detección de intención", "Agente de IA", "Automatización ejecutada", "Lead clasificado", "Métrica actualizada"];

export function AutomationFlow() {
  return <div className="flow-card" aria-label="Representación conceptual de un flujo automatizado">
    <div className="flow-head"><span>Flujo conceptual</span><span className="status"><i /> En operación</span></div>
    <div className="flow-body">
      <div className="flow-line" aria-hidden="true" />
      {flow.map((item, index) => <div className="flow-row" key={item}><span className="flow-node">{String(index + 1).padStart(2, "0")}</span><span>{item}</span>{index === 2 && <em>IA</em>}{index === 5 && <span className="mini-bars" aria-hidden="true"><i/><i/><i/><i/></span>}</div>)}
    </div>
    <p className="flow-note">Visualización ilustrativa · Sin datos reales</p>
  </div>;
}
