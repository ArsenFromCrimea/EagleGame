drawHammer=function(canvas){
	var xCentre=crimean_screen.width/2;

	var random_color=function(){
		switch (Math.floor(Math.random()*3)){
			case 0:return "black";
			case 1:return "white";
			case 2:return "yellow";
		}
	}


	var start=[0,0,1,1,1,1,0,0,0,1,3,5,6,6];
	var stop=[1,3,4,4,4,4,4,4,4,4,6,7,7,7];
	var M=8;
	var N=start.length;
	var top_y=0;
	var x_=100;
	var y_=80;
	var xx=x_/N;
	var yy=y_/M;
	
	for(var i=0;i<M;i++){
		for(var j=0;j<N;j++){
			if((i<M-start[j])&&(i>=M-stop[j]-1)){
			    canvas.beginPath();
			    canvas.strokeStyle="black";
			    canvas.fillStyle=random_color();
			    canvas.moveTo(xCentre+j*xx-i*xx*2,top_y+i*yy+j*yy/2);
			    canvas.lineTo(xCentre+(j+1)*xx-i*xx*2,top_y+i*yy+(j+1)*yy/2);
			    canvas.lineTo(xCentre+(j+1)*xx-(i+1)*xx*2,top_y+(i+1)*yy+(j+1)*yy/2);
			    canvas.lineTo(xCentre+j*xx-(i+1)*xx*2,top_y+(i+1)*yy+j*yy/2);
			    canvas.closePath();
			    canvas.fill();
			    canvas.stroke();
			    //lineTo(xCentre+j*xx-i*xx*2,top_y+i*yy+j*yy/2);
			}
		}
	}
}