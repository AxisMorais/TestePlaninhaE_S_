var Url = "https://docs.google.com/spreadsheets/d/19Gdi6UVK97fNQQyvfqJTTx5TB19P06fZAGggNmYPbVo/edit#gid=0"

function FormManutencoessolicitadas(){

var Guia = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ID");
//status
var List = Guia.getRange(990, 1,Guia.getRange("A990").getDataRegion().getLastRow(),1).getValues();
//setor responsavel
var List2 = Guia.getRange(996, 1,Guia.getRange("A996").getDataRegion().getLastRow(),1).getValues();
//natureza do serviço
var List3 = Guia.getRange(1002, 1,Guia.getRange("A1002").getDataRegion().getLastRow(),1).getValues();
//nome equipamento
var List4 = Guia.getRange(1151, 1,Guia.getRange("A1151").getDataRegion().getLastRow(),1).getValues();
//nome popular
var List5 = Guia.getRange(1018, 1,Guia.getRange("A1018").getDataRegion().getLastRow(),1).getValues();
//Endereço
var List6 = Guia.getRange(990, 2,Guia.getRange("B990").getDataRegion().getLastRow(),1).getValues();
//Tipo equipamento
var List7 = Guia.getRange(990, 3,Guia.getRange("C990").getDataRegion().getLastRow(),1).getValues();

var Form = HtmlService.createTemplateFromFile("FormManutencoessolicitadas")

Form.List = List.map(function(r){ return r[0]; });
Form.List2 = List2.map(function(r){ return r[0]; });
Form.List3 = List3.map(function(r){ return r[0]; });
Form.List4 = List4.map(function(r){ return r[0]; });
Form.List5 = List5.map(function(r){ return r[0]; });
Form.List6 = List6.map(function(r){ return r[0]; });
Form.List7 = List7.map(function(r){ return r[0]; });

var MostrarForm = Form.evaluate();

MostrarForm.setTitle("Cadastro - Manutenções").setHeight(550).setWidth(950);

SpreadsheetApp.getUi().showModalDialog(MostrarForm, "Cadastro - Dados Manutenções");

}

//Início Nome do equipamento
function Regional11(Local11){

  var Planilha11 = SpreadsheetApp.openByUrl(Url);
  var Guia11 = Planilha11.getSheetByName("ID");
  var LocalPesquisa11 = Guia11.getRange(1970, 1, 1, Guia11.getLastColumn()).getValues()[0];

  var Resultado11 = LocalPesquisa11.Pesquisa11(Local11);

  if (Resultado11 !=-1){

    var Coluna11 = Resultado11 + 1
    
    Guia11.getRange(1970, Coluna11).activate();
    Guia11.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha11 = Guia11.getCurrentCell().getRow();
    var QtdLinha11 = QtdLinha11 - 1970
    //Nome Popular
    var Dados11 = Guia11.getRange(1971, Coluna11, QtdLinha11).getValues();

        //Logger.log(Dados)

        return Dados11;

  }else {

    return 'Local não encontrado'

  }


}
Array.prototype.Pesquisa11 = function(Procura11){

  if(Procura11 == "") return false;

  for (var Linha11= 0; Linha11<this.length; Linha11 ++ )

  if (this[Linha11]==Procura11) return Linha11;

  return -1

}
//Fim Nome do equipamento

//Nome popular Início
function Regional12(Local12){

  var Planilha12 = SpreadsheetApp.openByUrl(Url);
  var Guia12 = Planilha12.getSheetByName("ID");
  var LocalPesquisa12 = Guia12.getRange(2774, 1, 1, Guia12.getLastColumn()).getValues()[0];

  var Resultado12 = LocalPesquisa12.Pesquisa12(Local12);

  if (Resultado12 !=-1){

    var Coluna12 = Resultado12 + 1
    
    Guia12.getRange(2774, Coluna12).activate();
    Guia12.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha12 = Guia12.getCurrentCell().getRow();
    var QtdLinha12 = QtdLinha12 - 2774
    //Nome do equipamento
    var Dados12 = Guia12.getRange(2775, Coluna12, QtdLinha12).getValues();

        //Logger.log(Dados)

        return Dados12;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa12 = function(Procura12){

  if(Procura12 == "") return false;

  for (var Linha12= 0; Linha12<this.length; Linha12 ++ )

  if (this[Linha12]==Procura12) return Linha12;

  return -1

}
//Fim Nome Popular

//Aqui começa a função de endereço vinculada ao nome do equipamento
function Regional13(Local13){

  var Planilha13 = SpreadsheetApp.openByUrl(Url);
  var Guia13 = Planilha13.getSheetByName("ID");
  var LocalPesquisa13 = Guia13.getRange(3581, 1, 1, Guia13.getLastColumn()).getValues()[0];

  var Resultado13 = LocalPesquisa13.Pesquisa13(Local13);

  if (Resultado13 !=-1){

    var Coluna13 = Resultado13 + 1
    
    Guia13.getRange(3581, Coluna13).activate();
    Guia13.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha13 = Guia13.getCurrentCell().getRow();
    var QtdLinha13 = QtdLinha13 - 3581
    //Nome do equipamento
    var Dados13 = Guia13.getRange(3582, Coluna13, QtdLinha13).getValues();

        //Logger.log(Dados)

        return Dados13;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa13 = function(Procura13){

  if(Procura13 == "") return false;

  for (var Linha13= 0; Linha13<this.length; Linha13 ++ )

  if (this[Linha13]==Procura13) return Linha13;

  return -1

}
//Fim da função de endereço vinculada ao nome do euipamento

//Aqui começa a função de endereço vinculada ao nome popular
function Regional14(Local14){

  var Planilha14 = SpreadsheetApp.openByUrl(Url);
  var Guia14 = Planilha14.getSheetByName("ID");
  var LocalPesquisa14 = Guia14.getRange(4391, 1, 1, Guia14.getLastColumn()).getValues()[0];

  var Resultado14 = LocalPesquisa14.Pesquisa14(Local14);

  if (Resultado14 !=-1){

    var Coluna14 = Resultado14 + 1
    
    Guia14.getRange(4391, Coluna14).activate();
    Guia14.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha14 = Guia14.getCurrentCell().getRow();
    var QtdLinha14 = QtdLinha14 - 4391
    //Nome popular
    var Dados14 = Guia14.getRange(4392, Coluna14, QtdLinha14).getValues();

        //Logger.log(Dados)

        return Dados14;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa14 = function(Procura14){

  if(Procura14 == "") return false;

  for (var Linha14= 0; Linha14<this.length; Linha14 ++ )

  if (this[Linha14]==Procura14) return Linha14;

  return -1

}
//Fim da função de endereço vinculada ao nome popular

//Início função nome do equipamento vinculada ao endereço
function Regional15(Local15){

  var Planilha15 = SpreadsheetApp.openByUrl(Url);
  var Guia15 = Planilha15.getSheetByName("ID");
  var LocalPesquisa15 = Guia15.getRange(5198, 1, 1, Guia15.getLastColumn()).getValues()[0];

  var Resultado15 = LocalPesquisa15.Pesquisa15(Local15);

  if (Resultado15 !=-1){

    var Coluna15 = Resultado15 + 1
    
    Guia15.getRange(5198, Coluna15).activate();
    Guia15.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha15 = Guia15.getCurrentCell().getRow();
    var QtdLinha15 = QtdLinha15 - 5198
    //Endereço
    var Dados15 = Guia15.getRange(5199, Coluna15, QtdLinha15).getValues();

        //Logger.log(Dados)

        return Dados15;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa15 = function(Procura15){

  if(Procura15 == "") return false;

  for (var Linha15= 0; Linha15<this.length; Linha15 ++ )

  if (this[Linha15]==Procura15) return Linha15;

  return -1

}
//Fim função nome do equipamento vinculada ao endereço

//Início função nome popular vinculada ao endereço
function Regional16(Local16){

  var Planilha16 = SpreadsheetApp.openByUrl(Url);
  var Guia16 = Planilha16.getSheetByName("ID");
  var LocalPesquisa16 = Guia16.getRange(6001, 1, 1, Guia16.getLastColumn()).getValues()[0];

  var Resultado16 = LocalPesquisa16.Pesquisa16(Local16);

  if (Resultado16 !=-1){

    var Coluna16 = Resultado16 + 1
    
    Guia16.getRange(6001, Coluna16).activate();
    Guia16.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha16 = Guia16.getCurrentCell().getRow();
    var QtdLinha16 = QtdLinha16 - 6001
    //Endereço
    var Dados16 = Guia16.getRange(6002, Coluna16, QtdLinha16).getValues();

        //Logger.log(Dados)

        return Dados16;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa16 = function(Procura16){

  if(Procura16 == "") return false;

  for (var Linha16= 0; Linha16<this.length; Linha16 ++ )

  if (this[Linha16]==Procura16) return Linha16;

  return -1

}
//Fim função nome popular vinculada ao endereço

//Início função tipo de equipamento vinculada ao nome do equipamento
function Regional17(Local17){

  var Planilha17 = SpreadsheetApp.openByUrl(Url);
  var Guia17 = Planilha17.getSheetByName("ID");
  var LocalPesquisa17 = Guia17.getRange(6811, 1, 1, Guia17.getLastColumn()).getValues()[0];

  var Resultado17 = LocalPesquisa17.Pesquisa17(Local17);

  if (Resultado17 !=-1){

    var Coluna17 = Resultado17 + 1
    
    Guia17.getRange(6811, Coluna17).activate();
    Guia17.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha17 = Guia17.getCurrentCell().getRow();
    var QtdLinha17 = QtdLinha17 - 6811
    //Nome Equipamento
    var Dados17 = Guia17.getRange(6812, Coluna17, QtdLinha17).getValues();

        //Logger.log(Dados)

        return Dados17;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa17 = function(Procura17){

  if(Procura17 == "") return false;

  for (var Linha17= 0; Linha17<this.length; Linha17 ++ )

  if (this[Linha17]==Procura17) return Linha17;

  return -1

}
//Fim função tipo de equipamento vinculada ao nome do equipamento

//Início função tipo de equipamento vinculada ao nome popular
function Regional18(Local18){

  var Planilha18 = SpreadsheetApp.openByUrl(Url);
  var Guia18 = Planilha18.getSheetByName("ID");
  var LocalPesquisa18 = Guia18.getRange(8051, 1, 1, Guia18.getLastColumn()).getValues()[0];

  var Resultado18 = LocalPesquisa18.Pesquisa18(Local18);

  if (Resultado18 !=-1){

    var Coluna18 = Resultado18 + 1
    
    Guia18.getRange(8051, Coluna18).activate();
    Guia18.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha18 = Guia18.getCurrentCell().getRow();
    var QtdLinha18 = QtdLinha18 - 8051
    //Nome Equipamento
    var Dados18 = Guia18.getRange(8052, Coluna18, QtdLinha18).getValues();

        //Logger.log(Dados)

        return Dados18;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa18 = function(Procura18){

  if(Procura18 == "") return false;

  for (var Linha18= 0; Linha18<this.length; Linha18 ++ )

  if (this[Linha18]==Procura18) return Linha18;

  return -1

}
//Fim função tipo de equipamento vinculada ao nome popular

//Início função nome popular vinculada ao tipo de equipamento
function Regional19(Local19){

  var Planilha19 = SpreadsheetApp.openByUrl(Url);
  var Guia19 = Planilha19.getSheetByName("ID");
  var LocalPesquisa19 = Guia19.getRange(8890, 1, 1, Guia19.getLastColumn()).getValues()[0];

  var Resultado19 = LocalPesquisa19.Pesquisa18(Local19);

  if (Resultado19 !=-1){

    var Coluna19 = Resultado19 + 1
    
    Guia19.getRange(8890, Coluna19).activate();
    Guia19.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

    var QtdLinha19 = Guia19.getCurrentCell().getRow();
    var QtdLinha19 = QtdLinha19 - 8890
    //Nome Equipamento
    var Dados19 = Guia19.getRange(8891, Coluna19, QtdLinha19).getValues();

        //Logger.log(Dados)

        return Dados19;

  }else {

    return 'Local não encontrado'

  }

}

Array.prototype.Pesquisa19 = function(Procura19){

  if(Procura19 == "") return false;

  for (var Linha19= 0; Linha19<this.length; Linha19 ++ )

  if (this[Linha19]==Procura19) return Linha19;

  return -1

}
//Fim função nome popular vinculada ao tipo de equipamento

function RegistrarManutencoessolicitadas (Dados) {

var Plan = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Manutenções solicitadas");

  Plan.getActiveCell();
  Plan.getRange(4, 1).setValue(" ");
  Plan.getRange('A4').activate();

  Plan.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();

  Plan.getActiveCell().offset(1, 0).activate();

var Linha = Plan.getCurrentCell().getRow();

  Plan.getRange(Linha, 1).setValue([Dados.Data]);
  //Plan.getRange(Linha, 2).setValue([Dados.CodSmel]);
  Plan.getRange(Linha, 3).setValue([Dados.NomeEquipamento]);
  Plan.getRange(Linha, 4).setValue([Dados.NomePopular]);
  Plan.getRange(Linha, 5).setValue([Dados.NaturezaServico]);
  Plan.getRange(Linha, 6).setValue([Dados.SetorResponsavel]);
  Plan.getRange(Linha, 7).setValue([Dados.Status]);
  Plan.getRange(Linha, 8).setValue([Dados.DataSolicitacao]);
  Plan.getRange(Linha, 9).setValue([Dados.Solicitante]);
  Plan.getRange(Linha, 10).setValue([Dados.OrigemDemanda]);
  Plan.getRange(Linha, 11).setValue([Dados.DescricaoSolicitacao]);
  Plan.getRange(Linha, 12).setValue([Dados.EndEquipamento]);
  Plan.getRange(Linha, 13).setValue([Dados.Observacao]);
  Plan.getRange(Linha, 14).setValue([Dados.AcaoRealizada]);
  Plan.getRange(Linha, 15).setValue([Dados.MateriaisUtilizados]);
  Plan.getRange(Linha, 16).setValue([Dados.DataConclusao]);
  Plan.getRange(Linha, 17).setValue([Dados.TipoEquip]);

}