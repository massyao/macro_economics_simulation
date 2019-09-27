
export function random_str () {
  return Math.random().toString(36).slice(-8)
}

export function deep_copy (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function getConstructorName(obj) {
  return obj instanceof Object ? obj.constructor.toString().split(' ')[1].replace(/[^a-zA-Z_\d]/g, '') : null
}

function genCanvasContext(canvasOrContainer, canvas_width = 1000, canvs_height = 1000) {
  let canvas
  let isCanvas = getConstructorName(canvasOrContainer) === 'HTMLCanvasElement'
  let isDiv = getConstructorName(canvasOrContainer) === 'HTMLDivElement'
  if (isCanvas) {
    canvas = canvasOrContainer
  } else {
    canvas = document.createElement('canvas')
    canvas.width = canvas_width
    canvas.height = canvs_height
    if (isDiv) {
      canvasOrContainer.appendChild(canvas)
    } else {
      document.body.appendChild(canvas)
    }
  }
  return canvas.getContext("2d")
}

export function plot({ data = [], canvas, x_start = 0, x_step = 20, bar_ratio = 0.8, color = 'red', canvas_width = 10000, canvs_height = 1000}) {
  // const canvas = document.getElementById('canvas')
  // const context = canvas.getContext("2d")
  // const canvas_width = 10000
  // const canvs_height = 1000

  const context = genCanvasContext(canvas, canvas_width, canvs_height)

  // x-oxis
  context.beginPath();       // Start a new path
  context.moveTo(0, canvs_height/2);    // Move the pen to (30, 50)
  context.lineTo(canvas_width, canvs_height/2);  // Draw a line to (150, 100)
  context.stroke();   

  let max = Math.max(...data)
  let min = Math.min(...data)
  let max_abs = Math.ceil(Math.max(Math.abs(max), Math.abs(min)))

  // console.log('data', data)
  let normalize_arr = data.map(y => y / max_abs * canvs_height/2)
  normalize_arr.forEach((y, x) => {
    // plot(year * 10, doposit/5, 'red', year)
    context.fillStyle = color
    if (y > 0) {
      context.fillRect(x_start + x * x_step, canvs_height/2 - y, bar_ratio * x_step, y)
    } else {
      context.fillRect(x_start + x * x_step, canvs_height/2 , bar_ratio * x_step, 0 - y)
    }

    context.textAlign = "start";
    context.textBaseline = "bottom";
    context.font = '14px serif';
    context.fillStyle = '#333';
    context.fillText(x_start + x + '', x * x_step, canvs_height/2 + 10)

    context.fillStyle = 'blue';
    if (y > 0) {
      // context.fillRect(x * x_step, canvs_height/2 - y, 0.8 * x_step, y)
      context.fillText(y.toFixed(2), x_start + x * x_step, canvs_height/2 - y - 10)
    } else {
      // context.fillRect(x * x_step, canvs_height/2 , 0.8 * x_step, 0 - y)
      context.fillText(y.toFixed(1), x_start + x * x_step, canvs_height/2 - y + 10)
    }
  })

  // y-oxis
  context.beginPath();       // Start a new path
  context.moveTo(0.5, 0);    // Move the pen to (30, 50)
  context.lineTo(0, canvs_height);  // Draw a line to (150, 100)
  context.stroke();
  
  context.textAlign = "start";
  context.textBaseline = "bottom";
  context.font = '14px serif';
  context.fillStyle = 'blue';
  context.fillText('+' + max_abs, 0 ,20)
  context.fillText('-' + max_abs, 0 ,canvs_height - 20)
}
