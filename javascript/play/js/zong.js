			var flag=false;
			var btn1=document.querySelectorAll("input")[0];
			var btn2=document.querySelectorAll("input")[1];
			var box = document.getElementById("box");
			var timeId;
			
			//创建地鼠
			function creatMouse(){
				var mouseImg = document.createElement("img");
				mouseImg.setAttribute("src","img/mouse.png");
				mouseImg.style.width="100px";
				mouseImg.style.height="100px";
				mouseImg.style.position="absolute";
				//移除地鼠
				mouseImg.onclick=function(){
				this.parentElement.removeChild(this);
				}
				return mouseImg;
			}
			
			//产生随机位置
			function randomInt(m,n){
				return parseInt(Math.random()*(n-m+1)+m);
			}
			
			
			//判断是否结束
			function judgeGameOver(){
				var mousecount = box.childElementCount;
				if(mousecount>=10){
					window.clearInterval(timeId);
					timeId=0;
					
				for(var i = 0;i<mousecount;i++){
					box.removeChild(box.children[0]);
				}
				var endImg = document.createElement("img");
				endImg.style.position="absolute";
				endImg.style.width="700px"
				endImg.style.height="400px"
				endImg.src="img/end.png";
				endImg.style.left="160px"
				box.appendChild(endImg);
				flag=true;
				//如果游戏已经结束，则将button1设置为重新开始
				btn1.value="重新开始";
				
			}
		}
			
			//定时产生地鼠
			function rePeatCreatMouse(){
				timeId=setInterval(function(){
				var mouse = creatMouse();
				var left = randomInt(0,700);
				var top = randomInt(0,400);
				mouse.style.left=left+"px";
				mouse.style.top=top+"px";
				box.appendChild(mouse);
				judgeGameOver();
				},500);
			}
			
			//开始按钮
			btn1.onclick=function(){
				if(timeId){
					return;
				}
				
				if(btn1.value=="重新开始"){
					rePeatCreatMouse();
					btn1.value="开始";
					box.removeChild(box.children[0]);
				}else if(btn1.value=="开始"){
					
					rePeatCreatMouse();
					btn1.value="重新开始";
					box.removeChild(box.children[0]);
				}
				
				
			}
			
			//暂停按钮
			btn2.onclick=function(){
				if(flag){
					flag=false;
					return;
				}
				if(btn2.value=="暂停"){
					btn2.value="继续";	
					clearInterval(timeId);
				}else if(btn2.value=="继续"){
					btn2.value="暂停";
					rePeatCreatMouse();
				}
				
			}
