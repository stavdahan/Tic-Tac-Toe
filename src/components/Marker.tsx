
const Marker = () => { 
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    if (canvas) { 
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.stroke();
    }
    }

    return <canvas id="myCanvas" width="200" height="200"></canvas>;
}

export default Marker