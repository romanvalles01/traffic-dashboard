# 🔍 Traffic Dashboard – Análisis de Tráfico en Tiempo Real

Proyecto desarrollado con Node.js y Socket.IO para visualizar tráfico de red en tiempo real desde un entorno local. Ideal para prácticas de análisis de red, visualización de protocolos y primeros pasos en ciberseguridad defensiva.

---

## ⚙️ Tecnologías utilizadas

- **Node.js** – Backend y manejo de procesos
- **tcpdump** – Captura de tráfico de red (requiere permisos)
- **Socket.IO** – Comunicación en tiempo real entre servidor y cliente
- **Tailwind CSS** – Estilos en modo oscuro
- **Chart.js** (en progreso) – Visualización de datos en frontend

---

## 🖥️ Funcionalidades

- Captura de paquetes en vivo usando `tcpdump`
- Envío de datos en tiempo real al cliente
- Interfaz visual dark mode con actualización instantánea
- Simulación de tráfico si no se puede capturar real (modo alternativo)

---

## 📦 Instalación

```bash
git clone https://github.com/romanvalles01/traffic-dashboard.git
cd traffic-dashboard
npm install

🚀 Uso

1. sudo node server.js
2. Abrí tu navegador en http://localhost:3000 para ver el dashboard. *tcpdump requiere permisos de superusuario. Asegurate de tenerlo instalado (en macOS viene por defecto).

*Este proyecto es educativo y no debe utilizarse para monitorear redes sin autorización explícita.
