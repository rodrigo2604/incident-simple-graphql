const incidents = [
  {
    id: 1,
    name: 'Equipo no enciende', // Ordenador tipo 1, Impresora tipo 2
    priority: 0
  },
  {
    id: 3,
    name: 'Aplicación falla', // Reservas tipo 3, Intranet tipo 4
    priority: 1
  },
  {
    id: 4,
    name: 'Conexión caída', // Teléfono 5, Email tipo 6
    priority: 0
  },
];

const equimpent = [
  {
    id: 1,
    incidentId: 1,
    name: 'Ordenador',
    description: 'Ordenador de mesa tipo Dell'
  },
  {
    id: 2,
    incidentId: 1,
    name: 'Impresora',
    description: 'Impresoras de tóner a color'
  },
  {
    id: 3,
    incidentId: 2,
    name: 'Reservas',
    description: 'Aplicación de reservas de salas para reuniones'
  },
  {
    id: 4,
    incidentId: 2,
    name: 'Intranet mobile',
    description: 'App móvil para entrar en la intranet de la compañía'
  },
  {
    id: 5,
    incidentId: 3,
    name: 'Teléfono',
    description: 'Red telefónica de la compañía'
  },
  {
    id: 6,
    incidentId: 3,
    name: 'Email',
    description: 'IRed de mensajería electrónica de la compaía'
  },
];

const solutions = [
  {
    id: 1,
    equipmentId: 1,
    incidentId: 1,
    description: 'Asegúrese que el equipo está enchufado. Si lo está mire el estado del cable. Si sigue sin encenderse conacte con ordenadores@bot.com',
    contact: 'incidencias@bot.com'
  },
  {
    id: 2,
    equipmentId: 2,
    incidentId: 1,
    description: 'La impresora no está en la red o le falta tinta. Vamos al procesar la incidencia, un compañero bajará a ver qué ocurre.',
    contact: 'impresoras@bot.com'
  },
  {
    id: 3,
    equipmentId: 3,
    incidentId: 2,
    description: 'Si obtiene un código 500, espere unos minutos que vamos a repararlo. Si aparece un código 403, envía un mail a seguridad para que den de alta su usuario, ¿desea que lo envía yo en su lugar?',
    contact: 'reservas@bot.com'
  },
  {
    id: 4,
    equipmentId: 4,
    incidentId: 2,
    description: 'Si recibe un error 503 estamos actualizando los recursos. En breves momentos estará disponible',
    contact: 'intranet@bot.com'
  },
  {
    id: 5,
    equipmentId: 5,
    incidentId: 3,
    description: 'Asegúrese de que el teléfono está conectado a la red. Si lo está dígame qué mensaje aparece en el teléfono y lo solucionares a la mayor brevedad posible',
    contact: 'telefono@bot.com'
  },
  {
    id: 6,
    equipmentId: 6,
    incidentId: 3,
    description: 'Asegúrese de que no ha cambiado la DNS de su equipo. ¿Dese que un compañero vaya a repararlo?',
    contact: 'email@bot.com'
  },
];

module.exports = {
  incidents,
  equimpent,
  solutions,
};
