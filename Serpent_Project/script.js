window.onload = function ()
{
    var canvas;
    var ctx;
    var delay = 10;
    var blockSize = 30;
    var canvasWidth = 700;
    var canvasHeight = 400;
    var snakee;
    initData();
    //refreshCanvas();
    
    function initData()
    {
        canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "2px double rgb(100,102,0)";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        snakee = new snake([[4, 4], [5, 4], [6, 4]]);
        refreshCanvas();
        

              
    }
    
    function refreshCanvas()
    {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        snakee.draw();
        snakee.advance();
        setTimeout( refreshCanvas, delay);
    }
    function drawBlock( ctx, position){
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    function snake (body)
    {
        
        this.body = body;
        this.draw = function ()
        {   
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i = 0; i < this.body.length; i++)
            {
            //console.log(this.body[i]);
            drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            nextPosition[0] +=0.1;
            this.body.unshift(nextPosition);
            this.body.pop();
        };
    }
}
