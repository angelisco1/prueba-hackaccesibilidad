// Algo de este estilo:
// - Un puerta de salida con una llave.
// - La llave estaría en una caja fuerte.
// - La caja fuerte estaría escondida detrás de un cuadro.
// - La caja fuerte tendría una combinación.
// - La combinación estaría en una hucha en forma de cerdito.
// - La hucha estaría escondida en un armario.
// - En el armario además habría un libro (para despistar).
// - En el armario habría también una caja de herramientas.
// - En la caja de herramientas habría una lupa (para despistar).
// - En la caja de herramientas habría un martillo.
// - La hucha se rompe con el martillo.


export const ElementosDeLaHabitacion = {
  armario: {
    id: 'armario',
    nombre: 'Armario',
    acciones: [
      { evento: 'mirar', mensaje: 'Un armario enorme. Parece que podemos abrirlo.', objetosNecesarios: [] },
      { evento: 'abrir', mensaje: 'El armario se ha abierto.', objetosNecesarios: [] },
      { evento: 'cerrar', mensaje: 'El armario se ha cerrado.', objetosNecesarios: [] },
    ],
    cerrado: true,
  },
  puerta: {
    id: 'puerta',
    nombre: 'Puerta',
    acciones: [
      { evento: 'mirar', mensaje: 'La puerta está cerrada. Parece que necesitamos una llave para abrirla.', objetosNecesarios: [] },
      { evento: 'abrir', mensaje: 'La puerta se ha abierto.', objetosNecesarios: ['llave'] },
      { evento: 'cerrar', mensaje: 'La puerta se ha cerrado.', objetosNecesarios: ['llave'] },
    ],
    cerrado: true,
  },
  cuadro: {
    id: 'cuadro',
    nombre: 'Cuadro',
    acciones: [
      { evento: 'mirar', mensaje: 'Parece que hay algo detrás del cuadro.', objetosNecesarios: [] },
      { evento: 'descolgar', mensaje: 'Has dejado el cuadro en el suelo.', objetosNecesarios: [] },
      { evento: 'colgar', mensaje: 'Has colgado el cuadro en la pared.', objetosNecesarios: [] },
    ],
    colgado: true,
  },
  'caja-fuerte': {
    id: 'caja-fuerte',
    nombre: 'Caja fuerte',
    acciones: [
      { evento: 'mirar', mensaje: 'Es una caja fuerte. Parece que necesitamos un código de 4 números para abrirla.', objetosNecesarios: [] },
      { evento: 'abrir', mensaje: 'Has abierto la caja.', objetosNecesarios: ['postit'] },
      { evento: 'cerrar', mensaje: 'Has cerrado la caja.', objetosNecesarios: [] },
    ],
    cerrado: true,
  },
  'caja-herramientas': {
    id: 'caja-herramientas',
    nombre: 'Caja herramientas',
    acciones: [
      { evento: 'mirar', mensaje: 'Es una caja de herramientas. Parece que podemos abrirla.', objetosNecesarios: [] },
      { evento: 'abrir', mensaje: 'Has abierto la caja.', objetosNecesarios: [] },
      { evento: 'cerrar', mensaje: 'Has cerrado la caja.', objetosNecesarios: [] },
    ],
    cerrado: true,
  },
  hucha: {
    id: 'hucha',
    nombre: 'Hucha',
    acciones: [
      { evento: 'mirar', mensaje: 'Es una hucha con forma de cerdito. Parece muy fragil.', objetosNecesarios: [] },
      { evento: 'golpear', mensaje: 'Has roto la hucha.', objetosNecesarios: ['martillo'] },
    ],
    intacto: true,
  },
  martillo: {
    id: 'martillo',
    nombre: 'Martillo',
    acciones: [
      { evento: 'mirar', mensaje: 'Un martillo un poco viejo. Cuidado no vayas a romper algo frágil.' },
      { evento: 'coger', mensaje: 'Has cogido un martillo.' },
    ],
  },
  lupa: {
    id: 'lupa',
    nombre: 'Lupa',
    acciones: [
      { evento: 'mirar', mensaje: 'Una lupa. ¿Para que la podré utilizar?' },
      { evento: 'coger', mensaje: 'Has cogido una lupa.' },
    ],
  },
  libro: {
    id: 'libro',
    nombre: 'Libro',
    acciones: [
      { evento: 'mirar', mensaje: 'Un libro de criptografía. Quizás me pueda servir para algo.' },
      { evento: 'coger', mensaje: 'Has cogido un libro.' },
    ],
  },
  postit: {
    id: 'postit',
    nombre: 'Post-it',
    acciones: [
      { evento: 'mirar', mensaje: 'Un papel con el número 1234 escrito. ¿Abrirá algo?' },
      { evento: 'coger', mensaje: 'Has cogido el post-it.' },
    ],
  },
  llave: {
    id: 'llave',
    nombre: 'Llave',
    acciones: [
      { evento: 'mirar', mensaje: 'Una llave escondida. Parece que abre una puerta.' },
      { evento: 'coger', mensaje: 'Has cogido una llave.' },
    ],
  },
}
