
var player = 1;
var flag = true;
var xo;
var count = 0;
var filled = false;
function clicked(idname){
	if( xo == 'X')
	{
		$(idname).html("X");
		$(idname).css("fontSize","45px");
		xo = 'O';
	}
	else
	{
		$(idname).html("O");
		xo = 'X';	
		$(idname).css("fontSize","45px");
	}
}

function playerturn(){
	if (player == 1)
	{
		$("#player").html(2);
		player = 2;
	}
		
	else
	{
		$("#player").html(1);
		player = 1;	
	}
}

function reset(){
	$("#again").css("display","block");
	
	$("#again").click(function(){
		$("#r11").html(1);
		$("#r12").html(2);
		$("#r13").html(3);
		$("#r21").html(4);
		$("#r22").html(5);
		$("#r23").html(6);
		$("#r31").html(7);
		$("#r32").html(8);
		$("#r33").html(9);
		$("td").css("fontSize","0");
		$("#result").html("Player <span id ='player'> 1</span>'s turn");
		$("#again").css("display","none");
		$("#xo1").html("");
		$("#xo2").html("");
		flag = true;
		count = 0;
		player =1;
	});
}

function misclick(){
	alert("this box already has value");
	
}

$("td").click(function(){
	if (flag){
		xo = $("#dropdown").val();
		if (xo == "X")
		{
			$("#xo1").html("X");
			$("#xo2").html("O");
		}
		else
		{
			$("#xo1").html("O");
			$("#xo2").html("X");
		}
		
		flag=false;
	}
	
	if( $.isNumeric($(this).html()) == false)
		misclick();
	else	
	{
		count++;
		clicked(this);
	
		if( $("#r11").html() == $("#r12").html() && $("#r11").html() ==  $("#r13").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r11").html() == $("#r21").html() && $("#r11").html() ==  $("#r31").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r31").html() == $("#r32").html() && $("#r31").html() ==  $("#r33").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r13").html() == $("#r23").html() && $("#r13").html() ==  $("#r33").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r11").html() == $("#r22").html() && $("#r11").html() ==  $("#r33").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r31").html() == $("#r22").html() && $("#r31").html() ==  $("#r13").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r21").html() == $("#r22").html() && $("#r21").html() ==  $("#r23").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if( $("#r12").html() == $("#r22").html() && $("#r12").html() ==  $("#r32").html())
		{
			$("#result").html("Player " + player + " Won");
			reset();
		}
		
		else if(count == 9)
		{
			$("#result").html("Match Tied!");
			reset();
		}
			
	
		playerturn();
		
	}
	
	
});





