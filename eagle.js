k=1;




lineTo=function(x_,y_){
	canvas.lineTo(k*x_,k*y_);
	x=x_;
	y=y_;
}



moveTo=function(x_,y_){
	canvas.moveTo(k*x_,k*y_);
	x=x_;
	y=y_;
}


line=function(dx,coef){
	x=x+dx;
	y=y+dx*coef;
	lineTo(x,y);
}

move=function(dx,coef){
	x=x+dx;
	y=y+dx*coef;
	moveTo(x,y);
}


line_=function(c){
	return function(dx,coef){
		line(dx*c,coef*c);
	};
}

wing=function(x0,y0,c){
	var line1=line_(c);
	var move1=function(dx,coef){
		move(dx*c,coef*c);
	}
	var line2=function(dx,a){
		line1(dx,a);
		move1(-dx,a);
		}


	canvas.beginPath();
	canvas.strokeStyle="#000000";

	moveTo(x0,y0);
	var y1=14+top1;
	var coef1=38/61;
	line1((y1-y0)/coef1,coef1);
	line1(113,0);
	var coef2=35/36;
	line1(27,coef2);
	x2=x;
	y2=y;
	move1(6,-0.2);
	line1(-30,coef2);
	lineTo(x0,y0);
	
	
	
	moveTo(xCentre-c*147,20.49+top1);
	line1(76,0);
	
	moveTo(xCentre-c*131,31.89+top1);
	line1(66,0);
	
	moveTo(xCentre-c*112.2,41.89+top1);
	line1(58,0);

	moveTo(xCentre-c*45.2,50.49+top1);
	line1(-48,0);

	canvas.stroke();
	
	xT=xCentre-c*15.14;
	yT=63.79+top1;

	var tail=function(color){	
		canvas.beginPath();
		canvas.strokeStyle=color;
		var alpha=1.29;
		var n=9;
		var y0=-52+top1;
		var r=148;
		alpha_delta=(-2*alpha+Math.PI)/n;
		for(var i=0;i<=n;i++){
			var a=alpha+alpha_delta*i;
			var x=xCentre+Math.cos(a)*r;
			var y=y0+Math.sin(a)*r;
			canvas.moveTo(x,y);
			canvas.lineTo(xCentre,50+top1);
		}
		canvas.arc(xCentre,y0,r,alpha,-alpha+Math.PI);
		canvas.stroke();
	}

	tail("#000000");
	canvas.strokeStyle="#000000";
	canvas.beginPath();
	canvas.stroke();
	canvas.beginPath();
	
	if(c==1){
		canvas.arc(xCentre,-193+top1,260,0.9,1.21);
	}
	else{
		canvas.arc(xCentre,-193+top1,260,-1.21+Math.PI,-0.9+Math.PI);
	}
	canvas.stroke();
	
}


top1=30;


rest_of_wing=function(left){
	canvas.beginPath();
	if(left==1){
		var a_begin=-0.36+Math.PI;
		var a_end=-1.4+Math.PI;
	}
	else{
		var a_begin=0.36;
		var a_end=1.4;
	}
	var R=80;
	var r=43;
	var y0=-15+top1;
	var N=5;
	var delta_a=(a_end-a_begin)/N;
	for(var i=1;i<=N;i++){
		var a=a_begin+delta_a*i;
		moveTo(xCentre+R*Math.cos(a),y0+R*Math.sin(a));
		lineTo(xCentre+r*Math.cos(a),y0+12+(r+i*3.5)*Math.sin(a));
	}
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(xCentre*k,y0*k,R*k,Math.min(a_begin,a_end),Math.max(a_begin,a_end));
	canvas.stroke();	
}





head=function(left){
	eye=function(left){
		moveTo(xCentre-left*40.2,57+top1);
		lineTo(xCentre-left*37.2,52+top1);
		lineTo(xCentre-left*46.2,54+top1);
		lineTo(xCentre-left*42.2,55+top1);
		lineTo(xCentre-left*41.2,53+top1);
		canvas.stroke();
	}

	fedder=function(x_,y_){
		moveTo(x_,y_+top1);
		lineTo(x_+4,y_+4+top1);
		lineTo(x_,y_+4+top1);
		canvas.stroke();
	}


	back=function(left){
	    /*moveTo(x2,y2);
	    move(15*left,-0.2*left);
	    move(13*left,0.15*left);
	    alert(y);*/
	    canvas.beginPath();
	    moveTo(xCentre+left*12.22105263157896,39.2+top1);
	    canvas.strokeStyle="#000000";
	    line(-13*left,0.15*left);
	    line(-15*left,-0.2*left);
	    canvas.stroke();
	}


	var neck_chain=function(){
		line(left*15,-left*0.4);
		lineTo(xCentre+left*12.22105263157896,39.2+top1);
	}


	canvas.fillStyle="#ffffff";


	canvas.beginPath();
	canvas.strokeStyle="rgba(0,0,0,1)";
	moveTo(xCentre-left*49.2,63+top1);
	lineTo(xCentre-left*44.2,64+top1);
	line(left*44,0);
	neck_chain();
	

	
	line(-13*left,0.15*left);
	line(-15*left,-0.2*left);
	

	
	lineTo(xCentre-left*45.2,50+top1);
	lineTo(xCentre-left*55.2,55+top1);
	lineTo(xCentre-left*58.2,60+top1);
	lineTo(xCentre-left*58.2,65+top1);
	lineTo(xCentre-left*57.2,67+top1);
	lineTo(xCentre-left*55.2,64+top1);
	lineTo(xCentre-left*51.2,62+top1);
	lineTo(xCentre-left*43.2,61+top1);

	moveTo(xCentre-left*49.2,63+top1);
	lineTo(xCentre-left*44.2,64+top1);
	line(left*44,0);
	

	canvas.closePath();
	canvas.stroke();
	canvas.fill();

	fedder(xCentre-left*32.2,58);
	fedder(xCentre-left*22.2,58);
	fedder(xCentre-left*12.2,58);
	fedder(xCentre-left*6.2,52);
	fedder(xCentre-left*2.2,46);

	

	eye(left);




	canvas.beginPath();
	canvas.strokeStyle="rgba(255,255,255,1)";
	canvas.lineWidth=1;
	moveTo(xCentre-left*0.2,64);
	neck_chain();
	canvas.stroke();
	canvas.lineWidth=1;


	var foot=function(c){
		var line1=line_(c);
		canvas.beginPath();
		canvas.strokeStyle="#000000";
		canvas.fillStyle="#ffff00";
		var xT=xCentre-c*15.14;
		moveTo(xT,69.10+top1);
		for(var i=0;i<3;i++){
			line1(0.4,20);
			line1(1.5,1);
			line1(1.5,-1);
			line1(0.4,-20);
		}
		canvas.closePath();
		canvas.stroke();
		canvas.fill();
	};

	foot(-1);
	foot(1);
	

}











drawEagle=function(){


	wing(xCentre-left*162.2,10+top1,left);

	rest_of_wing(-left);
	rest_of_wing(left);
	wing(xCentre+left*162.2,10+top1,-left);
	var breast=function(){
		canvas.beginPath();
		canvas.strokeStyle="#000000";
		canvas.moveTo(xCentre,74+top1);
		canvas.lineTo(xCentre-left*16,64+top1);
		canvas.lineTo(xCentre,40+top1);
		canvas.lineTo(xCentre+left*16,64+top1);
		canvas.closePath();
		canvas.stroke();
		canvas.fill();
	}
	breast();
	head(left);
}


clear=function(screen,canvas){
	canvas.fillStyle="#ffffff";
	canvas.fillRect(0,0,screen.width,screen.height);
}


