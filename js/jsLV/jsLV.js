// JavaScript Document
$(function(){
	/*第以界面*/
			$("#div21 .span1").click(function(){
				$("#div6").toggle(2000)
			})
			/*4个按钮点击切换背景图片*/
			$("#RadioGroup1_0").click(function(){
				$("#div8").css("backgroundImage","url(image/imageLV/a2c40d37ea713617e0be377a6ef1586586a8ba17.jpg)")
				$("#RadioGroup1_0").css("backgroundColor","#F70274")
			})
			$("#RadioGroup1_1").click(function(){
				$("#div8").css("backgroundImage","url(image/imageLV/8c83f78db5a86576c1f625b5be4495d2cb83f323.jpg)")
			})
			$("#RadioGroup1_2").click(function(){
				$("#div8").css("backgroundImage","url(image/imageLV/b42d5e10f843f111fb95bd4ebb0da6eeb6b36e2a.jpg)")
			})
			$("#RadioGroup1_3").click(function(){
				$("#div8").css("backgroundImage","url(image/imageLV/ee05b528b7a285335809cf55556df046f1268abb.jpg)")
			})
			/*点击8张背景进行来回切换*/
			var int=7
			$("#div4a").click(function(){
				int=int+1
				var k=int%8
				switch(k){
					case 0:
						$("#div13").css("backgroundImage","url(image/imageLV/role-1.png)")
						break;
					case 1:
						$("#div13").css("backgroundImage","url(image/imageLV/role-8.png)")
						break;
					case 2:
						$("#div13").css("backgroundImage","url(image/imageLV/role-7.png)")
						break;
					case 3:
						$("#div13").css("backgroundImage","url(image/imageLV/role-6.png)")
						break;
					case 4:
						$("#div13").css("backgroundImage","url(image/imageLV/role-5.png)")
						break;
					case 5:
						$("#div13").css("backgroundImage","url(image/imageLV/role-4.png)")
						break;
					case 6:
						$("#div13").css("backgroundImage","url(image/imageLV/role-3.png)")
						break;
					case 7:
						$("#div13").css("backgroundImage","url(image/imageLV/role-2.png)")
						break;
				}
			})
			$("#div4b").click(function(){
				int=int+1
				var k=int%8
				switch(k){
					case 0:
						$("#div13").css("backgroundImage","url(image/imageLV/role-1.png)")
						break;
					case 1:
						$("#div13").css("backgroundImage","url(image/imageLV/role-2.png)")
						break;
					case 2:
						$("#div13").css("backgroundImage","url(image/imageLV/role-3.png)")
						break;
					case 3:
						$("#div13").css("backgroundImage","url(image/imageLV/role-4.png)")
						break;
					case 4:
						$("#div13").css("backgroundImage","url(image/imageLV/role-5.png)")
						break;
					case 5:
						$("#div13").css("backgroundImage","url(image/imageLV/role-6.png)")
						break;
					case 6:
						$("#div13").css("backgroundImage","url(image/imageLV/role-7.png)")
						break;
					case 7:
						$("#div13").css("backgroundImage","url(image/imageLV/role-8.png)")
						break;
				}
			})
			/*第二界面*/
			$("#div25 p .a1").click(function(){
			$("#div25 p .a1").css("color","#F1DA09")
			$("#div25 p .a2").css("color","black")
			$("#div25 p .a3").css("color","black")
			$("#div25 p .a4").css("color","black")
			$("#div25 .ul1").css("display","block")
			$("#div25 .ul2").css("display","none")
			$("#div25 .ul3").css("display","none")
			$("#div25 .ul4").css("display","none")
			
		})
		$("#div25 p .a2").click(function(){
			$("#div25 p .a2").css("color","#F1DA09")
			$("#div25 p .a1").css("color","black")
			$("#div25 p .a3").css("color","black")
			$("#div25 p .a4").css("color","black")
			$("#div25 .ul1").css("display","none")
			$("#div25 .ul2").css("display","block")
			$("#div25 .ul3").css("display","none")
			$("#div25 .ul4").css("display","none")
			
		})
		$("#div25 p .a3").click(function(){
			$("#div25 p .a3").css("color","#F1DA09")
			$("#div25 p .a1").css("color","black")
			$("#div25 p .a2").css("color","black")
			$("#div25 p .a4").css("color","black")
			$("#div25 .ul1").css("display","none")
			$("#div25 .ul2").css("display","none")
			$("#div25 .ul3").css("display","block")
			$("#div25 .ul4").css("display","none")
		})
		$("#div25 p .a4").click(function(){
			$("#div25 p .a4").css("color","#F1DA09")
			$("#div25 p .a1").css("color","black")
			$("#div25 p .a2").css("color","black")
			$("#div25 p .a3").css("color","black")
			$("#div25 .ul1").css("display","none")
			$("#div25 .ul2").css("display","none")
			$("#div25 .ul3").css("display","none")
			$("#div25 .ul4").css("display","block")
		})
		/*第三界面*/
		$("#div28 ul .li1").click(function(){
			$("#div28 ul .li1 a").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div28 ul .li2 a").css("backgroundImage","none")
			$("#div28 ul .li3 a").css("backgroundImage","none")
			$("#div29").css("display","block")
			$("#div37").css("display","none")
			$("#div38").css("display","none")
			$("#div27").css("height","auto")
		})
		$("#div28 ul .li2").click(function(){
			$("#div28 ul .li2 a").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div28 ul .li1 a").css("backgroundImage","none")
			$("#div28 ul .li3 a").css("backgroundImage","none")
			$("#div29").css("display","none")
			$("#div37").css("display","block")
			$("#div38").css("display","none")
			$("#div27").css("height","1080px")
		})
			$("#div28 ul .li3").click(function(){
			$("#div28 ul .li3 a").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div28 ul .li1 a").css("backgroundImage","none")
			$("#div28 ul .li2 a").css("backgroundImage","none")
			$("#div29").css("display","none")
			$("#div37").css("display","none")
			$("#div38").css("display","block")
			$("#div27").css("height","auto")
		})
	    $("#div30 .ul1 li .a1").click(function(){
			$("#div30 .ul1 li .a1").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a2").css("backgroundImage","none")
			$("#div30 .ul1 li .a3").css("backgroundImage","none")
			$("#div30 .ul1 li .a4").css("backgroundImage","none")
			$("#div30 .ul1 li .a5").css("backgroundImage","none")
			$("#div30 .ul1 li .a6").css("backgroundImage","none")
			$("#div31").css("display","block")
			$("#div32").css("display","none")
			$("#div33").css("display","none")
			$("#div34").css("display","none")
			$("#div35").css("display","none")
			$("#div36").css("display","none")
		})
		$("#div30 .ul1 li .a2").click(function(){
			$("#div30 .ul1 li .a2").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a1").css("backgroundImage","none")
			$("#div30 .ul1 li .a3").css("backgroundImage","none")
			$("#div30 .ul1 li .a4").css("backgroundImage","none")
			$("#div30 .ul1 li .a5").css("backgroundImage","none")
			$("#div30 .ul1 li .a6").css("backgroundImage","none")
			$("#div31").css("display","none")
			$("#div32").css("display","block")
			$("#div33").css("display","none")
			$("#div34").css("display","none")
			$("#div35").css("display","none")
			$("#div36").css("display","none")
		})
		$("#div30 .ul1 li .a3").click(function(){
			$("#div30 .ul1 li .a3").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a1").css("backgroundImage","none")
			$("#div30 .ul1 li .a2").css("backgroundImage","none")
			$("#div30 .ul1 li .a4").css("backgroundImage","none")
			$("#div30 .ul1 li .a5").css("backgroundImage","none")
			$("#div30 .ul1 li .a6").css("backgroundImage","none")
			$("#div31").css("display","none")
			$("#div32").css("display","none")
			$("#div33").css("display","block")
			$("#div34").css("display","none")
			$("#div35").css("display","none")
			$("#div36").css("display","none")
		})
		$("#div30 .ul1 li .a4").click(function(){
			$("#div30 .ul1 li .a4").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a1").css("backgroundImage","none")
			$("#div30 .ul1 li .a3").css("backgroundImage","none")
			$("#div30 .ul1 li .a2").css("backgroundImage","none")
			$("#div30 .ul1 li .a5").css("backgroundImage","none")
			$("#div30 .ul1 li .a6").css("backgroundImage","none")
			$("#div31").css("display","none")
			$("#div32").css("display","none")
			$("#div33").css("display","none")
			$("#div34").css("display","block")
			$("#div35").css("display","none")
			$("#div36").css("display","none")
		})
		$("#div30 .ul1 li .a5").click(function(){
			$("#div30 .ul1 li .a5").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a1").css("backgroundImage","none")
			$("#div30 .ul1 li .a3").css("backgroundImage","none")
			$("#div30 .ul1 li .a4").css("backgroundImage","none")
			$("#div30 .ul1 li .a2").css("backgroundImage","none")
			$("#div30 .ul1 li .a6").css("backgroundImage","none")
			$("#div31").css("display","none")
			$("#div32").css("display","none")
			$("#div33").css("display","none")
			$("#div34").css("display","none")
			$("#div35").css("display","block")
			$("#div36").css("display","none")
		})
		$("#div30 .ul1 li .a6").click(function(){
			$("#div30 .ul1 li .a6").css("backgroundImage","url(image/imageLV/bg-navsub-active.png)")
			$("#div30 .ul1 li .a1").css("backgroundImage","none")
			$("#div30 .ul1 li .a3").css("backgroundImage","none")
			$("#div30 .ul1 li .a4").css("backgroundImage","none")
			$("#div30 .ul1 li .a5").css("backgroundImage","none")
			$("#div30 .ul1 li .a2").css("backgroundImage","none")
			$("#div31").css("display","none")
			$("#div32").css("display","none")
			$("#div33").css("display","none")
			$("#div34").css("display","none")
			$("#div35").css("display","none")
			$("#div36").css("display","block")
		})
})