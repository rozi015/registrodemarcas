Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Emissão de Portaria","publishDate":"18/06/2024 09:50:04","pages":[{"id":"698abf1b-b8b1-4ce9-b94e-b507c668f7f6","name":"Emissão de Portaria (Pessoas e Afastamentos)","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Fluxo que descreve as atividades de emiss&atilde;o de portaria pelo Gabinete da Reitoria. </span></p>","mainProcessId":"406bf69e-7743-4881-9c7e-3718bcee4906","version":"1.0","author":"Escritório de Processos","image":"files\\diagrams\\Emissao de Portaria Pessoas e Afastamentos.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"c809df26-b382-4047-8c19-f1a6381e9ef7","name":"Emissão de Portaria (Pessoas e Afastamentos)","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":229.0}],"radius":0.0,"height":1276.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"7c78f20a-69ff-4cb3-bf02-6acad9d4aeab","name":"ENVIAR solicitação de portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Enviar solicita&ccedil;&atilde;o via of&iacute;cio e comunicar por e-mail sobre necessidade de emiss&atilde;o de portaria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":341.0,"y":499.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"b79de0f3-7698-44ca-a270-3c199ab08137","name":"Até 5 dias úteis antes da necessidade da publicação","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Solicitar a publica&ccedil;&atilde;o de portaria dentro do prazo de at&eacute; 5 dias &uacute;teis antes da data a ser publicada. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":481.0,"y":514.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","elementSubType":"IntermediateCatchEvent","properties":[{"id":"TimerEventDefinitionType","name":"Ciclo","value":"R1/P5D","type":"text"}]},{"id":"0d34297a-cde1-4fef-b21a-86aeaed131ba","name":"RECEBER comunicação","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Receber of&iacute;cio e e-mail que tratam da solicita&ccedil;&atilde;o de emiss&atilde;o de portaria.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":598.0,"y":871.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"e051a127-ce82-4078-932c-0311fa619907","name":"      REALIZAR    análise da solicitação","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Analisar motiva&ccedil;&atilde;o e conte&uacute;do da portaria solicitada. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":730.0,"y":871.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"1a79fdf9-9e9c-49e3-bc75-6f8348bec9c8","name":"      IDENTIFICAR necessidade de nova análise","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Verificar diante da mat&eacute;ria e dos termos da solicita&ccedil;&atilde;o, se h&aacute; necessidade de uma nova an&aacute;lise de m&eacute;rito por parte da Assessoria Especial. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":865.0,"y":871.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"a36dd97e-cb34-4276-bd4e-f0ac841c16ac","name":"                            ENVIAR para Assessoria Especial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Enviar para Assessoria Especial para an&aacute;lise de m&eacute;rito e motiva&ccedil;&atilde;o da emiss&atilde;o da portaria. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Caso a Assessoria Especial entenda como correta a emiss&atilde;o de portaria, remeter novamente para o Gabinete da Reitoria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1113.0,"y":1035.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"3f5c4832-0f6d-4bec-85e5-dbd697726a6c","name":"COMUNICAR ao interessado","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrar em contato com o interessado comunicando o motivo da n&atilde;o emiss&atilde;o.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Em algumas situa&ccedil;&otilde;es a assessoria entra em contato diretamente com a unidade solicitante.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1438.0,"y":1116.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"0f0ac600-7ce2-40f7-bc66-1094a3a62b4b","name":"    AUTORIZAR            redação                   da minuta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Autorizar reda&ccedil;&atilde;o da minuta nos modelos estabelecidos no &acirc;mbito do Gabinete da Reitoria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1103.0,"y":776.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"804701d4-c068-4473-a25c-bb49bd77d255","name":"                      COMUNICAR necessidade de portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Comunicar via e-mail a necessidade de emiss&atilde;o de portaria de afastamento e de minuta inclu&iacute;da em pasta compartilhada entre setor de SCDP e Gabinete da Reitoria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":341.0,"y":298.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f693d1e6-afb9-4b04-b7b1-6ef1f881beb4","name":"Até 5 dias úteis antes da necessidade da publicação","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Solicitar a publica&ccedil;&atilde;o de portaria dentro do prazo de at&eacute; 5 dias &uacute;teis antes da data a ser publicada.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":481.0,"y":313.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","elementSubType":"IntermediateCatchEvent","properties":[{"id":"TimerEventDefinitionType","name":"Ciclo","value":"R1/P5D","type":"text"}]},{"id":"8e176282-0889-434f-9b56-05ee90c3caa0","name":"REDIGIR portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Redigir minuta de portaria nos moldes dos modelos predefinidos e verificando a numera&ccedil;&atilde;o estabelecida. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1519.0,"y":867.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"bc87dd37-2fb1-493e-84c9-3bc0dede1028","name":"                          CORRIGIR minuta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Realizar corre&ccedil;&atilde;o de forma e conte&uacute;do da minuta. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Observando crit&eacute;rios ortogr&aacute;ficos, gramaticais e normativos. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1659.0,"y":867.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"d32b71c4-912a-4e16-ba63-1e03e8d9a5d1","name":"  REALIZAR publicação no DOU","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Requerer publica&ccedil;&atilde;o no sistema da Imprensa Nacional (INCom).</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1962.0,"y":933.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"a5802d6a-8331-4662-93dd-1179bad6c532","name":"ENVIAR para assinatura","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Enviar para edi&ccedil;&atilde;o e finaliza&ccedil;&atilde;o da minuta para assinatura da Reitoria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2146.0,"y":873.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"e86fd017-8d3d-4480-a9c3-5b316dd04d7c","name":"EDITAR portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Realizar edi&ccedil;&otilde;es finais deixando o documento em PDF. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2349.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"b7f33ae5-4e26-4405-b4de-e1c42cd537f7","name":"    COLETAR assinatura da Reitoria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Comunicar finaliza&ccedil;&atilde;o da minuta e coletar, junto a chefia de gabinete, a assinatura da portaria.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2471.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"8edd963b-4215-4d7d-83e6-f56db9d16e9f","name":"     LANÇAR na página Boletim Interno","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Publicar instrumento no Boletim Interno da Ufersa. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2595.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"6ac6ff09-c3cf-4e64-bbb7-03dc7cdf8497","name":"   ALTERAR outras portarias no Boletim Ufersa ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Identificar se houve portarias que tiveram seus atos ou efeitos modificados em raz&atilde;o do instrumento publicado e indicar tal altera&ccedil;&atilde;o na publica&ccedil;&atilde;o correspondente no Boletim Interno da UFERSA.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2723.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"d90eadd0-61ab-4220-95cf-9b0ae1da9f63","name":"      ENVIAR para as partes interessadas","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Encaminhar via e-mail para as partes interessadas. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Nos casos em que se trate de mat&eacute;ria de Gest&atilde;o de Pessoas, a portaria deve ser enviada para DAP para inclus&atilde;o no Assentamento Funcional. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Nos casos de portarias voltadas para vac&acirc;ncia, coordena&ccedil;&atilde;o de curso e afastamentos, as mesmas devem ser inclu&iacute;das no processo e remetidos para o setor de origem.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2853.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"c384292a-f765-4203-a6f4-19e8bf787e01","name":"IMPRIMIR portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Imprimir 1 (uma) via impressa para guarda em arquivo da Reitoria. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2984.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"0ecf9cc5-a53d-4138-9f10-580674007e2f","name":"    ALIMENTAR planilha de controle","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Colocar as informa&ccedil;&otilde;es da portaria publicada na planilha de controle compartilhada com a DAP de Fun&ccedil;&otilde;es Gratificadas (FG), Cargos de Dire&ccedil;&atilde;o (CD) e Fun&ccedil;&otilde;es de Coordena&ccedil;&atilde;o de Curso (FCC).</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3116.0,"y":1371.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"e6743343-cbca-4c0b-9630-cf26924c9b45","name":"  CONFERIR publicação no DOU","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Identificar no Di&aacute;rio Oficial da Uni&atilde;o se a publica&ccedil;&atilde;o foi feita em confomidade com o solicitado. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2393.0,"y":807.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"c6364131-0cde-45fc-9c3b-aa67027b8d18","name":"     COMUNICAR Reitoria do andamento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Informar Gabinete da Reitoria do encaminhamento e emiss&atilde;o da portaria solicitada. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2552.0,"y":807.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"0ca28f12-a0d6-48c9-b4ac-099f612a85cb","name":"  PUBLICAR         no Boletim         de Serviço","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Emitir mensalmente no Boletim Ufersa os atos publicados. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3274.0,"y":872.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"00c6634c-8347-4fbe-957e-f19da3c24628","name":"Tutorial INCom","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2012.0,"y":1090.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[{"id":"2579b46f-2cd0-41b5-97ee-f3e6fa36e2ec","name":"Tutorial INCom:","value":"https://www.in.gov.br/tutorial-incom","type":"url","urlText":"","description":""}]},{"id":"d26e1cc8-8993-4028-9a3b-7297651c41ae","name":"SIPAC","description":"","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":371.0,"y":600.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","elementSubType":"DataStoreReference","properties":[{"id":"505c6385-b786-466c-b0e6-5ebc95d9efe9","name":"Link do SIPAC:","value":"https://sipac.ufersa.edu.br/sipac/","type":"url","urlText":"","description":""}]},{"id":"416a26dd-1d32-45f2-9284-2578d7a16c1f","name":"INCom","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":2002.0,"y":1005.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","elementSubType":"DataStoreReference","properties":[{"id":"688b96ee-7c03-4132-9983-7314205f0f47","name":"Link do INCom:","value":"https://incom.in.gov.br/","type":"url","urlText":"","description":""}]},{"id":"e7a738ec-1fd3-46e7-a1ed-f871d3a493d4","name":"REDIGIR portaria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Construir minuta obedecendo modelos pr&eacute; definidos e atendendo a numera&ccedil;&atilde;o pertinente.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Realizar identifica&ccedil;&atilde;o da necessidade da publica&ccedil;&atilde;o em Di&aacute;rio Oficial da Uni&atilde;o.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1519.0,"y":866.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]}]}],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"698abf1b-b8b1-4ce9-b94e-b507c668f7f6","containerName":"Emissão de Portaria (Pessoas e Afastamentos)","isSubprocess":false,"elements":[{"id":"557a0373-196d-4934-b97d-2e9c2cb89847"},{"id":"fe49dec4-c6e3-4c72-a2da-f5694645ef1f","value":""},{"id":"c809df26-b382-4047-8c19-f1a6381e9ef7","value":"Emissão de Portaria (Pessoas e Afastamentos)"},{"id":"30e009af-2ed8-405b-85e2-f37d8851ee7f","value":"Unidade interessada"},{"id":"cb3fea2b-9e3d-4a05-86c3-f83a1eec841a","value":"Gabinete da Reitoria"},{"id":"65c6c393-c514-4454-8134-15a5a49174e3","value":"Recepção do Gabinete da Reitoria"},{"id":"00c6634c-8347-4fbe-957e-f19da3c24628","value":"Tutorial INCom"},{"id":"d26e1cc8-8993-4028-9a3b-7297651c41ae","value":"SIPAC"},{"id":"416a26dd-1d32-45f2-9284-2578d7a16c1f","value":"INCom"},{"id":"64e06e8f-b14c-4071-915d-bd37172a94cf","value":"Início"},{"id":"12c0fe6b-dbe6-475f-9bb1-16dbac2b4980","value":""},{"id":"0f3e0898-6cef-408c-8647-094212e25646","value":""},{"id":"c3646fc8-9636-49bc-a66c-72744d1eb49e","value":"Portaria emitida"},{"id":"91befe24-8a30-405c-9329-1d54a85e4fe0","value":""},{"id":"ac9d84e5-bdda-4c98-bb26-d0b97d7a65e1","value":""},{"id":"804701d4-c068-4473-a25c-bb49bd77d255","value":"                      COMUNICAR necessidade de portaria"},{"id":"7c78f20a-69ff-4cb3-bf02-6acad9d4aeab","value":"ENVIAR solicitação de portaria"},{"id":"0d34297a-cde1-4fef-b21a-86aeaed131ba","value":"RECEBER comunicação"},{"id":"e051a127-ce82-4078-932c-0311fa619907","value":"      REALIZAR    análise da solicitação"},{"id":"1a79fdf9-9e9c-49e3-bc75-6f8348bec9c8","value":"      IDENTIFICAR necessidade de nova análise"},{"id":"0f0ac600-7ce2-40f7-bc66-1094a3a62b4b","value":"    AUTORIZAR            redação                   da minuta"},{"id":"a36dd97e-cb34-4276-bd4e-f0ac841c16ac","value":"                            ENVIAR para Assessoria Especial"},{"id":"e7a738ec-1fd3-46e7-a1ed-f871d3a493d4","value":"REDIGIR portaria"},{"id":"8e176282-0889-434f-9b56-05ee90c3caa0","value":"REDIGIR portaria"},{"id":"bc87dd37-2fb1-493e-84c9-3bc0dede1028","value":"                          CORRIGIR minuta"},{"id":"d32b71c4-912a-4e16-ba63-1e03e8d9a5d1","value":"  REALIZAR publicação no DOU"},{"id":"a5802d6a-8331-4662-93dd-1179bad6c532","value":"ENVIAR para assinatura"},{"id":"e86fd017-8d3d-4480-a9c3-5b316dd04d7c","value":"EDITAR portaria"},{"id":"b7f33ae5-4e26-4405-b4de-e1c42cd537f7","value":"    COLETAR assinatura da Reitoria"},{"id":"8edd963b-4215-4d7d-83e6-f56db9d16e9f","value":"     LANÇAR na página Boletim Interno"},{"id":"c384292a-f765-4203-a6f4-19e8bf787e01","value":"IMPRIMIR portaria"},{"id":"0ca28f12-a0d6-48c9-b4ac-099f612a85cb","value":"  PUBLICAR         no Boletim         de Serviço"},{"id":"d90eadd0-61ab-4220-95cf-9b0ae1da9f63","value":"      ENVIAR para as partes interessadas"},{"id":"b79de0f3-7698-44ca-a270-3c199ab08137","value":"Até 5 dias úteis antes da necessidade da publicação"},{"id":"f693d1e6-afb9-4b04-b7b1-6ef1f881beb4","value":"Até 5 dias úteis antes da necessidade da publicação"},{"id":"6ac6ff09-c3cf-4e64-bbb7-03dc7cdf8497","value":"   ALTERAR outras portarias no Boletim Ufersa "},{"id":"54c8116c-8c59-4a13-bc6a-190a05ba4e68","value":""},{"id":"78309eb0-5140-448a-ae2d-c2f74fd7a011","value":""},{"id":"9642320a-7585-4dd9-b5fa-98b3ce451860","value":"Emissão de portaria encerrada"},{"id":"3f5c4832-0f6d-4bec-85e5-dbd697726a6c","value":"COMUNICAR ao interessado"},{"id":"e6743343-cbca-4c0b-9630-cf26924c9b45","value":"  CONFERIR publicação no DOU"},{"id":"c6364131-0cde-45fc-9c3b-aa67027b8d18","value":"     COMUNICAR Reitoria do andamento"},{"id":"0ecf9cc5-a53d-4138-9f10-580674007e2f","value":"    ALIMENTAR planilha de controle"},{"id":"12c82aaa-cfb6-4ef7-801d-195d5fe16ecf"},{"id":"d20322b0-37f2-44b7-abbc-b16214e78540"},{"id":"c31f17ed-5d43-4759-88de-eb72b9b135f7","value":""}]}]}