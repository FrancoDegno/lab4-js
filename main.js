
var num1,num2;

function sum(nro1,nro2)
{
    return (Number(nro1)+Number(nro2)).toString();
}

function mult(nro1,nro2)
{
    return (Number(nro1)*Number(nro2)).toString();
}

function div(nro1,nro2)
{
    return (Number(nro1)/Number(nro2)).toString();
}

function rest(nro1,nro2)
{
    return (Number(nro1)-Number(nro2)).toString();
}

function captureN(butinp)
{
    document.getElementById("textid").innerText+=butinp;
}



function captureOp()
{

}

document.getElementById("1id").addEventListener("click",capture1,false);


