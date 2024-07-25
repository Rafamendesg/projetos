const canvasEl = document.querySelector('canvas') // Variaveis para mapear e manipular o Dom 
 const canvasCtx = canvasEl.getContext('2d')
 const linewidth = 15

function setup() {                                 // Para defenir as propriedades de altura e largura
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    canvasCtx.width = window.innerWidth
    canvasCtx.height = window.innerHeight
}


function draw() { //Função onde é definido o quer queremos desenhar na tela
    canvasCtx.fillStyle = '#286047'   
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight) // Desenhar o campo
    canvasCtx.fillStyle = '#fff'

    const x = window.innerWidth / 2 - linewidth / 2
    const y = 0
    const w = linewidth
    const h = window.innerHeight
                                    //Desenha a linha central
   
    canvasCtx.fillRect(x, y, w, h)

    //Dsenha a raquete esquerda
    canvasCtx.fillRect(10, 100, linewidth, 200)

    //Desenha a raquete esquerda
    canvasCtx.fillRect(window.innerWidth - linewidth - 10, 200, linewidth, 200)

    //Desenha a bola
    canvasCtx.beginPath()
    canvasCtx.arc(200, 300, 20, 0, 2 *Math.PI, false)
    canvasCtx.fill()

    //Desenha o placar
    canvasCtx.font = 'bold 72px Arial'
    canvasCtx.textAlign = 'center' 
    canvasCtx.textBaseline = 'top'
    canvasCtx.fillStyle = '#01341D'
    canvasCtx.fillText('3', window.innerWidth / 4, 50)
    canvasCtx.fillText('1', window.innerWidth / 4 + window.innerWidth / 2, 50)
}

setup()
draw()        //Chamando as funções