// fgme-network.js

// Nodo y fases definidas
const phases = [
  {
    id: "phase0",
    title: "Fase 0 — Preparación / Sandbox",
    nodes: ["USA", "MEX", "GER", "JPN", "IND"],
    description: [
      "Crear nodos espejo independientes (virtuales y físicos)",
      "Instalar módulos HSM / TPM para claves raíz",
      "Montar red de laboratorio con topología mallada de prueba",
      "Definir scripts de despliegue inmutable",
      "Implementar monitoreo inicial con IA básica"
    ]
  },
  {
    id: "phase1",
    title: "Fase 1 — Hardware y Embebidos",
    nodes: [],
    description: [
      "Activar nodos y sistemas embebidos",
      "Configurar comunicación M2M segura (MQTT/gRPC)",
      "Instalar kernel y drivers necesarios",
      "Validar acceso seguro a nodos regionales"
    ]
  },
  {
    id: "phase2",
    title: "Fase 2 — Robótica Social y IA Física",
    nodes: [],
    description: [
      "Instalar software Hanson Robotics auditado",
      "Configurar IA física y aprendizaje local federado",
      "Integrar percepción y control adaptativo",
      "Pruebas unitarias de interacción humano-máquina"
    ]
  },
  {
    id: "phase3",
    title: "Fase 3 — Red Multinodo",
    nodes: [],
    description: [
      "Topología global de 195 nodos",
      "IP rotativas y desentlalizadas",
      "Cifrado híbrido TLS + PQC",
      "Sincronización temporal segura (NTP/PTP autenticado)",
      "Validación M2M con IA federada"
    ]
  },
  {
    id: "phase4",
    title: "Fase 4 — Motor Matemático / Defensa",
    nodes: [],
    description: [
      "Simulación Monte Carlo 100,000 iteraciones",
      "Matrices Laplacianas para 195 nodos",
      "Cálculo de riesgo y respuesta adaptativa",
      "Activación de control adaptativo de firewall y aislamiento"
    ]
  },
  {
    id: "phase5",
    title: "Fase 5 — DevSecOps Criptográfico",
    nodes: [],
    description: [
      "GitHub / GitLab rotativo y descentralizado",
      "Verificación de commits y firma HSM",
      "Escaneo SAST / DAST obligatorio",
      "Generación de SBOM y hash SHA-3",
      "Despliegue inmutable en nodos productivos"
    ]
  },
  {
    id: "phase6",
    title: "Fase 6 — Integración Final",
    nodes: [],
    description: [
      "Despliegue completo en red productiva controlada",
      "Pruebas de ataque simuladas (APT, DDoS, sabotaje IA)",
      "Evaluación KPIs: tiempo de reacción, estabilidad, resiliencia",
      "Ajuste de parámetros del motor matemático",
      "Activación del “modo autónomo controlado”"
    ]
  }
];

// Función para inicializar interactividad
function initFGME() {
  phases.forEach(phase => {
    const phaseEl = document.getElementById(phase.id);
    if (!phaseEl) return;

    // Crear contenedor de nodos
    const nodeContainer = document.createElement("div");
    phase.nodes.forEach(n => {
      const nodeEl = document.createElement("span");
      nodeEl.className = "node";
      nodeEl.textContent = n;
      nodeEl.addEventListener("click", () => alert(`Nodo ${n} seleccionado`));
      nodeContainer.appendChild(nodeEl);
    });
    phaseEl.appendChild(nodeContainer);

    // Añadir hover para mostrar descripción completa
    phaseEl.addEventListener("mouseenter", () => {
      const desc = phase.description.join("\n• ");
      console.log(`Descripción de ${phase.title}:\n• ${desc}`);
    });
  });

  console.log("FGME Red interactiva inicializada ✅");
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", initFGME);
