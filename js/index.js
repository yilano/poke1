window.onload=function(){
	
			
	var html = document.getElementsByTagName('html')[0];
	var pageWidth = html.getBoundingClientRect().width;
	html.style.fontSize = pageWidth / 16 + 'px';
	
	
	var oList=document.getElementById("list");
	var aLi=oList.getElementsByTagName("li");
	var iW=document.documentElement.clientWidth;
	var aNav=document.getElementById("tabImageBtn").children;
	var iTouchStartX=0;
	var iStartX=0;
	var iNow=0;
	var body = document.getElementsByTagName("body")[0];
	body.addEventListener("touchstart",function(e){
    	scroll_start = e.changedTouches[0].clientX;
	});
	oList.innerHTML+=oList.innerHTML;
	oList.style.width=aLi.length*100+"%";
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].style.width=1/aLi.length*100+"%";
	}
	var oScroll=new MScroll("tabImage","x",false,false);
	oScroll.onscrollstart=function()
	{
		if(iNow==0)
		{
			iNow=aNav.length;
			this.iScroll=-iNow*iW;
			this.setCss();
		}
		if(iNow==aLi.length-1)
		{
			iNow=aNav.length-1;
			this.iScroll=-iNow*iW;
			this.setCss();
		}
	};
	oScroll.onscrollend=function()
	{
		var iDis=(this.iScroll-this.iStartT);
		if(Math.abs(iDis)>=iW/2)
		{
			iDis>0?iNow--:iNow++;
		}
		var iLeft=-iNow*iW;
		clearInterval(this.timer);
		this.tweenMove(iLeft-this.iScroll,"easeOut");
		for(var i=0;i<aNav.length;i++)
		{
			aNav[i].className="";
		}
		aNav[iNow%aNav.length].className="active";
	};
};