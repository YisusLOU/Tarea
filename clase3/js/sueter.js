;
(function (c) {
    c('*****Sueter*****')
    
    const sueter = {
        
        nombre: 'sueter de lana',
        
        tipo: 'lana suave',
        mangas:true,
        decorado:'copos',
        
        calentar: function () {
            c('mi cuerpecito')
        },
        lavar: function (lavadora = 'aguaFria') {
            c(`${this.nombre} lava ${lavadora}`)
        },
        colgar: function (imagen) {
            c('ropero')
            document.write(`<img src="${imagen}">`)
        }
    }
    
    c(
    sueter,
    sueter.nombre,
    sueter.tipo,
    sueter.mangas,
    sueter.decorado
    )
    
    sueter.calentar()
    sueter.lavar()
    sueter.lavar('a mano')
    sueter.colgar('https://http2.mlstatic.com/D_Q_NP_269811-MLA20666262311_042016-Q.jpg')
    
    
})(console.log);

(function (c) {
  
  class Sueter {
   
    constructor (nombre, tipo, mangas, decorado, ) {
      
      this.nombre = nombre
      this.tipo = tipo
      this.mangas = mangas
      this.decorado = decorado
    }


    calentar () {
      c('mi torso')
    }

    lavar(lavadora = 'con agua fria') {
      c(`${this.nombre} lava ${lavadora}`)
    }

    colgar (imagen) {
        c('se cuelga asi:')
      document.write(`<img src="${imagen}">`)
    }
  }

  ''
  const sueterOscuro= new Sueter('sueter oscuro', 'lana', true, 'borlas')

  c(
    sueterOscuro,
    sueterOscuro.nombre,
    sueterOscuro.tipo,
    sueterOscuro.mangas,
    sueterOscuro.decorado,
    
  )

  sueterOscuro.calentar()
  sueterOscuro.lavar()
  sueterOscuro.colgar('https://sc02.alicdn.com/kf/HTB1jL8.QFXXXXcxXXXXq6xXFXXXo/Most-Popular-Special-Material-Hanging-Rope-Computer.jpg')

})(console.log);





