const socket = io();

const ctx = document.getElementById("trafficChart").getContext("2d");

const protocols = ["TCP", "UDP", "ICMP", "Other"];
const counts = [0, 0, 0, 0];

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: protocols,
    datasets: [
      {
        label: "Paquetes por protocolo",
        data: counts,
        backgroundColor: ["#4f46e5", "#06b6d4", "#10b981", "#f59e0b"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#fff" },
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
  },
});

const packetList = document.getElementById("packetList");

socket.on("packet", (data) => {
  const line = data.toString();

  // Clasifica protocolo
  let proto = "Other";
  if (line.includes("TCP")) proto = "TCP";
  else if (line.includes("UDP")) proto = "UDP";
  else if (line.includes("ICMP")) proto = "ICMP";

  // Actualiza conteo
  const index = protocols.indexOf(proto);
  if (index >= 0) counts[index]++;
  chart.update();

  // Muestra línea en lista
  const li = document.createElement("li");
  li.textContent = line;
  packetList.prepend(li);
  if (packetList.childElementCount > 20)
    packetList.removeChild(packetList.lastChild);
});
