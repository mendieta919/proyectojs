function mostrar()
{
    let item1=document.getElementById('prod1');
    let item2=document.getElementById('prod2');
    let item3=document.getElementById('prod3');
    let adic=0;

    if(item1.selectedIndex==0)
    {
        document.getElementById('desc01').value="";
        document.getElementById('vau01').value=0;
        document.getElementById('cant01').value=0;
        document.getElementById('vat01').value=0;
    }

    if(item1.selectedIndex==1)
    {
        document.getElementById('desc01').value="computador mesa";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);

    }
    if(item1.selectedIndex==2)
    {
        document.getElementById('desc01').value="computador gamer";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)|| 0).toFixed(0);

    }
    if(item1.selectedIndex==3)
    {
        document.getElementById('desc01').value="computador portatil";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);
    }
    if(item1.selectedIndex==1)
    {
        document.getElementById('desc01').value="celular samsung A25";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);

    }
    if(item1.selectedIndex==2)
    {
        document.getElementById('desc01').value="celular oppo 12 reno";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed(0);

    }
    if(item1.selectedIndex==3)
    {
        document.getElementById('desc01').value="celular iphone 16 pro max";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);
    }
    if(item1.selectedIndex==1)
    {
        document.getElementById('desc01').value="mouse inalambrico";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);

    }
    if(item1.selectedIndex==2)
    {
        document.getElementById('desc01').value="cargador de iphone";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed(0);

    }
    if(item1.selectedIndex==3)
    {
        document.getElementById('desc01').value="audifonos inalambricos";
        document.getElementById('vau01').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);
    }

    //Asignar el valor total
    document.getElementById('adic0').value = totaldic0;

    //calcular valor subtotal
    document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)|| 0).toFixed(0);
    //calcular iva
    document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19 || 0).toFixed(0);
    //calcular descuento
    if(document.getElementById('radio1').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10 || 0).toFixed(0);
    } else if(document.getElementById('radio2').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00 || 0).toFixed(0);
    } else if (document.getElementById('radio3').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00 || 0).toFixed(0);
    }
     //calcular neto
     document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)|| 0).toFixed(0);

    }
    function enviar(){
        swal("ESTIMADO CLIENTE","SU PEDIDO ESTA EN PROCESO... ESPERE AL LLAMADO DE SU TURNO...","success");
    }