
var num1,num2;
var op1,op2ç
var strHist="";
var hist;
var indexh=0;

function sum(nro1,nro2)
{

        if(Number(nro1)!=null && Number(nro2)!=null)
            return Number(nro1)+Number(nro2);
        else
            return SyntaxError;
}

function mult(nro1,nro2)
{
    return Number(nro1)*Number(nro2);
}

function div(nro1,nro2)
{
    if(Number(nro2==0))
    return "SyntaxError";
    else
    return Number(nro1)/Number(nro2);
}

function rest(nro1,nro2)
{
    return Number(nro1)-Number(nro2);
}

function captureN(butinp)
{
    console.log(document.getElementById("textid").length);
    if(Number(document.getElementById("textid").innerText.length)<15)
        document.getElementById("textid").innerText+=butinp;
}


function result()
{
    var index1=document.getElementById("textid").innerText.indexOf(op1);
    var index2=document.getElementById("textid").innerText.length;
    
    num2=document.getElementById("textid").innerText.substring(index1+1,index2);
    switch(op1)
    {   
        case "+":
        document.getElementById("textid").innerText=sum(num1,num2);
        strHist+=num1+"+"+num2+"="+sum(num1,num2)+" ";
    
        op1=null;
        break;
        case "-":
        document.getElementById("textid").innerText=rest(num1,num2);
        strHist+=num1+"-"+num2+"="+rest(num1,num2)+" ";
  
        op1=null;
        break;
        case "*":
        document.getElementById("textid").innerText=mult(num1,num2);
        strHist+=num1+"*"+num2+"="+mult(num1,num2)+" ";
  
        op1=null;
        break;
        case "/":
        document.getElementById("textid").innerText=div(num1,num2);
        strHist+=num1+"/"+num2+"="+div(num1,num2)+" ";
        op1=null;
        break;

    }

}

function clear()
{
    for(var i=0;i<hist.length;i++)
    {
       hist[i]="";
    }
    strHist="";
    document.getElementById("myhist").innerText="";
    document.getElementById("textid").innerText="";
    num1=0;
    num2=0;
    op1=null;
}


function captureOp(op)
{

    if(op=="C")
    {
        clear();
        return;
    }
    

    if(op1==null){
        num1=document.getElementById("textid").innerText;
        op1=op;
    }   
    else{
        result();
        num1=document.getElementById("textid").innerText;
        op1=op;
    }
    document.getElementById("textid").innerText+=op;

}

function showHist()
{
    document.getElementById("myhist").innerText="";
    hist=strHist.split(" ");
    var istart=0;
    if(hist.length-12>0)
        istart=hist.length-12;
    for(var i=istart;i<hist.length;i++)
    {
            document.getElementById("myhist").innerText+= hist[i]+"\n";
    }
}

function addComa()
{
    if(document.getElementById("textid").innerText.indexOf(",")==-1)
    document.getElementById("textid").innerText+=".";
}

function delChar()
{
    document.getElementById("textid").innerText= document.getElementById("textid").innerText.substring(0,document.getElementById("textid").innerText.length-1);
}


