<html>

<head>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-    +C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />

</head>


<body>

<div class = "objeto">

      <div class="row">
        
        <div class="input-field col s4">
          <i class="material-icons prefix">date_range</i>
          <input id="Data" type="text" class="validate">
          <label for="Data">Mês/Ano</label>
        </div>

        <div class="col s4">
          <label>Tipo Equipamento</label>
          <select id = "TipoEquip" class="browser-default">
          <option value="" disabled selected>Tipo Equipamento</option>
          <? for(var i=0;i<13; i++){?>
          <option><?=List7[i];?>
          </option>
          <?}?>
          </select>
        </div>

        <div class="col s4">
          <label>Nome Equipamento</label>
          <select id = "NomeEquipamento" class="browser-default">
          <option value="" disabled selected>Nome Equipamento</option>
          <? for(var i=0;i<798; i++){?>
          <option><?=List4[i];?>
          </option>
          <?}?>
          </select>
        </div>
        
        <div class="input-field col s12">
        </div>

        <div class="col s4">
          <label>Nome Popular</label>
          <select id = "NomePopular" class="browser-default">
          <option value="" disabled selected>Nome Popular</option>
          <? for(var i=0;i<121; i++){?>
          <option><?=List5[i];?>
          </option>
          <?}?>
          </select>
        </div>
        
        <div class="col s4">
          <label>Endereço Equipamento</label>
          <select id = "EndEquipamento" class="browser-default">
          <option value="" disabled selected>Endereço Equipamento</option>
          <? for(var i=0;i<798; i++){?>
          <option><?=List6[i];?>
          </option>
          <?}?>
          </select>
        </div>

        <div class="col s4">
          <label>Natureza do Servico</label>
          <select id = "NaturezaServico" class="browser-default">
          <option value="" disabled selected>Natureza do Serviço</option>
          <? for(var i=0;i<13; i++){?>
          <option><?=List3[i];?>
          </option>
          <?}?>
          </select>
        </div>

        <div class="input-field col s12">
        </div>

        <div class="col s4">
          <label>Setor Responsável</label>
          <select id = "SetorResponsavel" class="browser-default">
          <option value="" disabled selected>Setor Responsável</option>
          <? for(var i=0;i<4; i++){?>
          <option><?=List2[i];?>
          </option>
          <?}?>
          </select>
        </div>
              
        <div class="col s4">
          <label>Status</label>
          <select id = "Status" class="browser-default">
          <option value="" disabled selected>Status</option>
          <? for(var i=0;i<4; i++){?>
          <option><?=List[i];?>
          </option>
          <?}?>
          </select>
        </div>        

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">people</i>-->
          <input id="DataSolicitacao" type="text" class="validate">
          <label for="DataSolicitacao">DATA DA SOLICITAÇÃO</label>
        </div>

        <div class="input-field col s12">
        </div>

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">woman</i>-->
          <input id="Solicitante" type="text" class="validate">
          <label for="Solicitante">SOLICITANTE</label>
        </div>       

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">accessible_forward</i>-->
          <input id="OrigemDemanda" type="text" class="validate">
          <label for="OrigemDemanda">ORIGEM DA DEMANDA</label>
        </div>        

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">accessible</i>-->
          <input id="DescricaoSolicitacao" type="text" class="validate">
          <label for="DescricaoSolicitacao">DESCRIÇÃO DA SOLICITAÇÃO</label>
        </div> 

        <div class="input-field col s12">
        </div>               

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">people_outline</i>-->
          <input id="Observacao" type="text" class="validate">
          <label for="Observacao">OBSERVAÇÃO</label>
        </div>

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">people_outline</i>-->
          <input id="AcaoRealizada" type="text" class="validate">
          <label for="AcaoRealizada">AÇÃO REALIZADA</label>
        </div>

        <div class="input-field col s4">
          <!--<i class="material-icons prefix">people_outline</i>-->
          <input id="MateriaisUtilizados" type="text" class="validate">
          <label for="MateriaisUtilizados">MATERIAIS UTILIZADOS</label>
        </div>

        <div class="input-field col s12">
        </div>
       
        <div class="input-field col s4">
          <!--<i class="material-icons prefix">people_outline</i>-->
          <input id="DataConclusao" type="text" class="validate">
          <label for="DataConclusao">DATA DE CONCLUSÃO</label>
        </div>

        <div class="input-field col s12">

          <button class="btn waves-effect green" id = "btn" >Salvar
          <i class="material-icons right">send</i>
          </button>

      </div>
      </div>

</div>


    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script>
//Inicio função nome do equipamento vinculada ao nome popular
document.getElementById("NomeEquipamento").addEventListener("change", Lista11);

    function Lista11(){
      
      var ComboLocais11 = document.getElementById("NomePopular");

      /*
      while (ComboLocais11.length){
         ComboLocais11.remove(0);
      } 
      */
      var Lista11 = document.getElementById("NomePopular");

      var Texto11 = "Escolha o Nome Popular"

      var NovaOpcao11 = document.createElement("option");
      var TextoNovaOpcao11 = document.createTextNode(Texto11);

      NovaOpcao11.appendChild(TextoNovaOpcao11);

      Lista11.insertBefore(NovaOpcao11, Lista11.lastChild);

      document.getElementById("NomePopular").options[0].disabled = true;

      var Local11 = document.getElementById("NomeEquipamento").value;

      google.script.run.withSuccessHandler(Carregar11).Regional11(Local11);

      function Carregar11(Locais11){

      if (Locais11 != "Local não encontrado"){

        var Lista11 = document.getElementById("NomePopular");

        Locais11.forEach(function(r){

        var Texto11 = r[0];

          var NovaOpcao11 = document.createElement("option");
          var TextoNovaOpcao11 = document.createTextNode(Texto11);

          NovaOpcao11.appendChild(TextoNovaOpcao11);

          Lista11.insertBefore(NovaOpcao11, Lista11.lastChild);

        });

      }

      }

    }
    //Fim da função nome do equipamento vinculada ao nome popular

    //Início função nome popular vinculada ao nome do equipamento
    document.getElementById("NomePopular").addEventListener("change", Lista12);

    function Lista12(){
      
      var ComboLocais12 = document.getElementById("NomeEquipamento");

      while (ComboLocais12.length){
      ComboLocais12.remove(0);
      } 
      
      var Lista12 = document.getElementById("NomeEquipamento");

      var Texto12 = "Escolha o Nome do Equipamento"

      var NovaOpcao12 = document.createElement("option");
      var TextoNovaOpcao12 = document.createTextNode(Texto12);

      NovaOpcao12.appendChild(TextoNovaOpcao12);

      Lista12.insertBefore(NovaOpcao12, Lista12.lastChild);

      document.getElementById("NomeEquipamento").options[0].disabled = true;

      var Local12 = document.getElementById("NomePopular").value;

      google.script.run.withSuccessHandler(Carregar12).Regional12(Local12);

      function Carregar12(Locais12){

      if (Locais12 != "Local não encontrado"){

        var Lista12 = document.getElementById("NomeEquipamento");

        Locais12.forEach(function(r){

        var Texto12 = r[0];

          var NovaOpcao12 = document.createElement("option");
          var TextoNovaOpcao12 = document.createTextNode(Texto12);

          NovaOpcao12.appendChild(TextoNovaOpcao12);

          Lista12.insertBefore(NovaOpcao12, Lista12.lastChild);

        });

      }

      }

    }
    //Fim da função nome popular vinculada ao nome do equipamento

    //Aqui começa a função de endereço vinculada ao nome do equipamento
    document.getElementById("EndEquipamento").addEventListener("change", Lista13);

    function Lista13(){
      
      var ComboLocais13 = document.getElementById("NomeEquipamento");

      while (ComboLocais13.length){
      ComboLocais13.remove(0);
      } 
      
      var Lista13 = document.getElementById("NomeEquipamento");

      var Texto13 = "Escolha o Nome do Equipamento"

      var NovaOpcao13 = document.createElement("option");
      var TextoNovaOpcao13 = document.createTextNode(Texto13);

      NovaOpcao13.appendChild(TextoNovaOpcao13);

      Lista13.insertBefore(NovaOpcao13, Lista13.lastChild);

      document.getElementById("NomeEquipamento").options[0].disabled = true;

      var Local13 = document.getElementById("EndEquipamento").value;

      google.script.run.withSuccessHandler(Carregar13).Regional13(Local13);

      function Carregar13(Locais13){

      if (Locais13 != "Local não encontrado"){

        var Lista13 = document.getElementById("NomeEquipamento");

        Locais13.forEach(function(r){

        var Texto13 = r[0];

          var NovaOpcao13 = document.createElement("option");
          var TextoNovaOpcao13 = document.createTextNode(Texto13);

          NovaOpcao13.appendChild(TextoNovaOpcao13);

          Lista13.insertBefore(NovaOpcao13, Lista13.lastChild);

        });

      }

      }

    }
    //Fim da função de endereço vinculada ao nome do equipamento

    //Início da função de endereço vinculada ao nome popular
    document.getElementById("EndEquipamento").addEventListener("change", Lista14);

    function Lista14(){
      
      var ComboLocais14 = document.getElementById("NomePopular");

      while (ComboLocais14.length){
      ComboLocais14.remove(0);
      } 
      
      var Lista14 = document.getElementById("NomePopular");

      var Texto14 = "Escolha o Nome Popular"

      var NovaOpcao14 = document.createElement("option");
      var TextoNovaOpcao14 = document.createTextNode(Texto14);

      NovaOpcao14.appendChild(TextoNovaOpcao14);

      Lista14.insertBefore(NovaOpcao14, Lista14.lastChild);

      document.getElementById("NomePopular").options[0].disabled = true;

      var Local14 = document.getElementById("EndEquipamento").value;

      google.script.run.withSuccessHandler(Carregar14).Regional14(Local14);

      function Carregar14(Locais14){

      if (Locais14 != "Local não encontrado"){

        var Lista14 = document.getElementById("NomePopular");

        Locais14.forEach(function(r){

        var Texto14 = r[0];

          var NovaOpcao14 = document.createElement("option");
          var TextoNovaOpcao14 = document.createTextNode(Texto14);

          NovaOpcao14.appendChild(TextoNovaOpcao14);

          Lista14.insertBefore(NovaOpcao14, Lista14.lastChild);

        });

      }

      }

    }
    //Fim da função de endereço vinculada ao nome popular

    //Início função de nome do equipamento vinculada ao endereço
    document.getElementById("NomeEquipamento").addEventListener("change", Lista15);

    function Lista15(){
      
      var ComboLocais15 = document.getElementById("EndEquipamento");

      while (ComboLocais15.length){
      ComboLocais15.remove(0);
      } 
      
      var Lista15 = document.getElementById("EndEquipamento");

      var Texto15 = "Escolha o Endereço"

      var NovaOpcao15 = document.createElement("option");
      var TextoNovaOpcao15 = document.createTextNode(Texto15);

      NovaOpcao15.appendChild(TextoNovaOpcao15);

      Lista15.insertBefore(NovaOpcao15, Lista15.lastChild);

      document.getElementById("EndEquipamento").options[0].disabled = true;

      var Local15 = document.getElementById("NomeEquipamento").value;

      google.script.run.withSuccessHandler(Carregar15).Regional15(Local15);

      function Carregar15(Locais15){

      if (Locais15 != "Local não encontrado"){

        var Lista15 = document.getElementById("EndEquipamento");

        Locais15.forEach(function(r){

        var Texto15 = r[0];

          var NovaOpcao15 = document.createElement("option");
          var TextoNovaOpcao15 = document.createTextNode(Texto15);

          NovaOpcao15.appendChild(TextoNovaOpcao15);

          Lista15.insertBefore(NovaOpcao15, Lista15.lastChild);

        });

      }

      }

    }
    //Fim função de nome do equipamento vinculada ao endereço
    
    //Início função de nome popular vinculada ao endereço
    document.getElementById("NomePopular").addEventListener("change", Lista16);

    function Lista16(){
      
      var ComboLocais16 = document.getElementById("EndEquipamento");

      while (ComboLocais16.length){
      ComboLocais16.remove(0);
      } 
      
      var Lista16 = document.getElementById("EndEquipamento");

      var Texto16 = "Escolha o Endereço"

      var NovaOpcao16 = document.createElement("option");
      var TextoNovaOpcao16 = document.createTextNode(Texto16);

      NovaOpcao16.appendChild(TextoNovaOpcao16);

      Lista16.insertBefore(NovaOpcao16, Lista16.lastChild);

      document.getElementById("EndEquipamento").options[0].disabled = true;

      var Local16 = document.getElementById("NomePopular").value;

      google.script.run.withSuccessHandler(Carregar16).Regional16(Local16);

      function Carregar16(Locais16){

      if (Locais16 != "Local não encontrado"){

        var Lista16 = document.getElementById("EndEquipamento");

        Locais16.forEach(function(r){

        var Texto16 = r[0];

          var NovaOpcao16 = document.createElement("option");
          var TextoNovaOpcao16 = document.createTextNode(Texto16);

          NovaOpcao16.appendChild(TextoNovaOpcao16);

          Lista16.insertBefore(NovaOpcao16, Lista16.lastChild);

        });

      }

      }

    }
    //Fim função de nome popular vinculada ao endereço

    //Início função de Tipo de equipamento vinculada a nome de equipamento
    document.getElementById("TipoEquip").addEventListener("change", Lista17); //TipoEquip

    function Lista17(){
      
      var ComboLocais17 = document.getElementById("NomeEquipamento");

      while (ComboLocais17.length){
      ComboLocais17.remove(0);
      } 
      
      var Lista17 = document.getElementById("NomeEquipamento");

      var Texto17 = "Escolha o Nome do Equipamento"

      var NovaOpcao17 = document.createElement("option");
      var TextoNovaOpcao17 = document.createTextNode(Texto17);

      NovaOpcao17.appendChild(TextoNovaOpcao17);

      Lista17.insertBefore(NovaOpcao17, Lista17.lastChild);

      document.getElementById("NomeEquipamento").options[0].disabled = true;

      var Local17 = document.getElementById("TipoEquip").value;//TipoEquip

      google.script.run.withSuccessHandler(Carregar17).Regional17(Local17);

      function Carregar17(Locais17){

      if (Locais17 != "Local não encontrado"){

        var Lista17 = document.getElementById("NomeEquipamento");

        Locais17.forEach(function(r){

        var Texto17 = r[0];

          var NovaOpcao17 = document.createElement("option");
          var TextoNovaOpcao17 = document.createTextNode(Texto17);

          NovaOpcao17.appendChild(TextoNovaOpcao17);

          Lista17.insertBefore(NovaOpcao17, Lista17.lastChild);

        });

      }

      }

    }
    //Fim função tipo de equipamento vinculada a nome de equipamento

    //Início função tipo de equipamento vinculada ao nome popular
    document.getElementById("TipoEquip").addEventListener("change", Lista18); //TipoEquip

    function Lista18(){
      
      var ComboLocais18 = document.getElementById("NomePopular");

      while (ComboLocais18.length){
      ComboLocais18.remove(0);
      } 
      
      var Lista18 = document.getElementById("NomePopular");

      var Texto18 = "Escolha o Nome do Equipamento"

      var NovaOpcao18 = document.createElement("option");
      var TextoNovaOpcao18 = document.createTextNode(Texto18);

      NovaOpcao18.appendChild(TextoNovaOpcao18);

      Lista18.insertBefore(NovaOpcao18, Lista18.lastChild);

      document.getElementById("NomePopular").options[0].disabled = true;

      var Local18 = document.getElementById("TipoEquip").value;//TipoEquip

      google.script.run.withSuccessHandler(Carregar18).Regional18(Local18);

      function Carregar18(Locais18){

      if (Locais18 != "Local não encontrado"){

        var Lista18 = document.getElementById("NomePopular");

        Locais18.forEach(function(r){

        var Texto18 = r[0];

          var NovaOpcao18 = document.createElement("option");
          var TextoNovaOpcao18 = document.createTextNode(Texto18);

          NovaOpcao18.appendChild(TextoNovaOpcao18);

          Lista18.insertBefore(NovaOpcao18, Lista18.lastChild);

        });

      }

      }

    }
    //Fim função tipo de euqipamento vinculada ao nome popular

    //Início função nome popular vinculada ao tipo de equipamento
    document.getElementById("NomePopular").addEventListener("change", Lista19); //NomePopular

    function Lista19(){
      
      var ComboLocais19 = document.getElementById("TipoEquip");

      while (ComboLocais19.length){
      ComboLocais19.remove(0);
      } 
      
      var Lista19 = document.getElementById("TipoEquip");

      var Texto19 = "Escolha o Nome do Equipamento"

      var NovaOpcao19 = document.createElement("option");
      var TextoNovaOpcao19 = document.createTextNode(Texto19);

      NovaOpcao19.appendChild(TextoNovaOpcao19);

      Lista19.insertBefore(NovaOpcao19, Lista19.lastChild);

      document.getElementById("TipoEquip").options[0].disabled = true;

      var Local19 = document.getElementById("NomePopular").value; //NomePopular

      google.script.run.withSuccessHandler(Carregar19).Regional19(Local19);

      function Carregar19(Locais19){

      if (Locais19 != "Local não encontrado"){

        var Lista19 = document.getElementById("TipoEquip");

        Locais19.forEach(function(r){

        var Texto19 = r[0];

          var NovaOpcao19 = document.createElement("option");
          var TextoNovaOpcao19 = document.createTextNode(Texto19);

          NovaOpcao19.appendChild(TextoNovaOpcao19);

          Lista19.insertBefore(NovaOpcao19, Lista19.lastChild);

        });

      }

      }

    }
    //Fim função nome popular vinculada ao tipo de equipamento

  var CampoData = document.getElementById("Data");
  // var CampoCodSmel = document.getElementById("CodSmel");
  var CampoNomeEquipamento = document.getElementById("NomeEquipamento");
  var CampoNomePopular = document.getElementById("NomePopular");
  var CampoNaturezaServico = document.getElementById("NaturezaServico");
  var CampoSetorResponsavel = document.getElementById("SetorResponsavel");
  var CampoStatus = document.getElementById("Status");
  var CampoDataSolicitacao = document.getElementById("DataSolicitacao");
  var CampoSolicitante = document.getElementById("Solicitante");
  var CampoOrigemDemanda = document.getElementById("OrigemDemanda");
  var CampoDescricaoSolicitacao = document.getElementById("DescricaoSolicitacao");
  var CampoEndEquipamento = document.getElementById("EndEquipamento");
  var CampoObservacao = document.getElementById("Observacao");
  var CampoAcaoRealizada = document.getElementById("AcaoRealizada");
  var CampoMateriaisUtilizados = document.getElementById("MateriaisUtilizados");
  var CampoDataConclusao = document.getElementById("DataConclusao");
  var CampoTipoEquip = document.getElementById("TipoEquip");

  document.getElementById("btn").addEventListener("click", Salvar);

  function Salvar() {

  var Data = CampoData.value;
  //var CodSmel = CampoCodSmel.value;
  var NomeEquipamento = CampoNomeEquipamento.value;
  var NomePopular = CampoNomePopular.value;
  var NaturezaServico = CampoNaturezaServico.value;
  var SetorResponsavel = CampoSetorResponsavel.value;
  var Status = CampoStatus.value;
  var DataSolicitacao = CampoDataSolicitacao.value;
  var Solicitante = CampoSolicitante.value;
  var OrigemDemanda = CampoOrigemDemanda.value;
  var DescricaoSolicitacao = CampoDescricaoSolicitacao.value;
  var EndEquipamento = CampoEndEquipamento.value;
  var Observacao = CampoObservacao.value;
  var AcaoRealizada = CampoAcaoRealizada.value;
  var MateriaisUtilizados = CampoMateriaisUtilizados.value;
  var DataConclusao = CampoDataConclusao.value;
  var TipoEquip = CampoTipoEquip.value;

  if(Data.trim().length == 0 || NomeEquipamento.trim().length == 0 || NaturezaServico.trim().length == 0 || SetorResponsavel.trim().length == 0 || Status.trim().length == 0 || DataSolicitacao.trim().length == 0 || Solicitante.trim().length == 0 || OrigemDemanda.trim().length == 0 || DescricaoSolicitacao.trim().length == 0){

    M.toast({html: 'Preencher todos os campos!'});

   }else{

    var Dados = {
    
    Data: CampoData.value,
    //CodSmel: CampoCodSmel.value,
    NomeEquipamento: CampoNomeEquipamento.value,
    NomePopular: CampoNomePopular.value,
    NaturezaServico: CampoNaturezaServico.value,
    SetorResponsavel: CampoSetorResponsavel.value,
    Status: CampoStatus.value,
    DataSolicitacao: CampoDataSolicitacao.value,
    Solicitante: CampoSolicitante.value,
    OrigemDemanda: CampoOrigemDemanda.value,
    DescricaoSolicitacao: CampoDescricaoSolicitacao.value,
    EndEquipamento: CampoEndEquipamento.value,
    Observacao: CampoObservacao.value,
    AcaoRealizada: CampoAcaoRealizada.value,
    MateriaisUtilizados: CampoMateriaisUtilizados.value,
    DataConclusao: CampoDataConclusao.value,
    TipoEquip: CampoTipoEquip.value

      };

      google.script.run.RegistrarManutencoessolicitadas(Dados);

      CampoData.value = "";
      //CampoCodSmel.value = "";
      CampoNomeEquipamento.value = "";
      CampoNomePopular.value = "";
      CampoNaturezaServico.value = "";
      CampoSetorResponsavel.value = "";
      CampoStatus.value = "";
      CampoDataSolicitacao.value = "";
      CampoSolicitante.value = "";
      CampoOrigemDemanda.value = "";
      CampoDescricaoSolicitacao.value = "";
      CampoEndEquipamento.value = "";
      CampoObservacao.value = "";
      CampoAcaoRealizada.value = "";
      CampoMateriaisUtilizados.value = "";
      CampoDataConclusao.value = "";
      CampoTipoEquip.value = "";

      M.toast({html: 'Cadastro efetuado com Sucesso!'});

      }

  }


  </script>

</body>

</html>