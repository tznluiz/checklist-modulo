// Verbas recuperadas das conversas em 26/10/2026. Não representam gasto auditado.
const accountBudgets={
 'Artezano':{daily:'R$ 15,00/dia',monthly:'R$ 450,00/mês',source:'Confirmação direta do usuário'},
 'Pólen':{daily:'R$ 150,00/dia',monthly:'R$ 4.500,00/mês',source:'Confirmação direta do usuário'},
 'Amuleto Bar':{daily:'R$ 45,00/dia',monthly:'R$ 1.350,00/mês',source:'Confirmação direta do usuário'},
 'Sobrado Sushi':{daily:'R$ 40,00/dia',monthly:'R$ 1.200,00/mês',source:'Confirmação direta do usuário'},
 'Fogo Poa':{daily:'R$ 26,66/dia',monthly:'R$ 800,00/mês',source:'Confirmação direta do usuário'},
 'Onna Sushi':{daily:'R$ 46,66/dia',monthly:'R$ 1.400,00/mês',source:'Confirmação direta do usuário (Onnah)'},
 'Porto a Lenha':{daily:'R$ 106,66/dia',monthly:'R$ 3.200,00/mês',source:'Confirmação direta do usuário'},
 'Forster Pisos':{daily:'R$ 96,66/dia',monthly:'R$ 2.900,00/mês',detail:'Valores antes do desconto de 12,5%, confirmados pelo usuário.',source:'Confirmação direta do usuário, 26/10/2026'},
 'Fada dos Florais':{daily:'R$ 20,00/dia',monthly:'R$ 600,00/mês',detail:'Verba confirmada pelo usuário. Referência: R$ 600 ÷ 30 dias = R$ 20/dia. Nível do orçamento e período efetivo pendentes; ajustar a distribuição em meses com duração diferente se o limite mensal permanecer R$ 600.',source:'Confirmação direta do usuário'},
 'Galeto':{daily:'R$ 20,00/dia',monthly:'R$ 600,00 / 30 dias (equivalente)',detail:'Delivery: 2 conjuntos de R$ 10,00/dia (ABO). R$ 20 × 30 = R$ 600. Mensal calculado, não verba mensal aprovada. Período efetivo pendente.',source:'Galeto, 22/10/2026'},
 'Saichi':{daily:'R$ 26,67/dia (média equivalente)',monthly:'R$ 800,00/mês',detail:'R$ 800 ÷ 30 = R$ 26,666…; média arredondada. Verba compartilhada: não duplicar entre almoço e delivery. Divisão vigente e período efetivo pendentes; ABO proposto.',source:'Saichi Sushi, contexto de 20–22/10/2026'},
 'Villa Café':{daily:'R$ 50,00/dia',monthly:'R$ 1.500,00/mês (base 30 dias)',detail:'R$ 1.500 ÷ 30 = R$ 50. Divisão informada: iFood R$ 22 + perfil R$ 18 + campanha atual R$ 10/dia. Novas frentes em ABO; nível da atual pendente. Confirmar ajuste em meses com duração diferente.',source:'Villa Café, 23/10/2026'},
 'Ulbra':{daily:'R$ 20,00/dia',monthly:'R$ 600,00/mês',detail:'Verba exclusiva confirmada: R$ 600 ÷ 30 dias = R$ 20/dia. Nível do orçamento e período efetivo pendentes; ajustar a distribuição em meses com duração diferente se o limite mensal permanecer R$ 600.',source:'Confirmação direta do usuário, 26/10/2026'}
};
function budgetFor(name){return accountBudgets[name]||{daily:'Não informado',monthly:'Não informado',detail:'Pendente: verba aprovada, período e nível do orçamento. Gasto realizado não equivale ao orçamento.',source:['Fogo Poa','Sobrado Sushi','Porto a Lenha'].includes(name)?'Sem conversa específica localizada; relatórios consultados sem verba aprovada.':'Conversa consultada sem verba aprovada.'}}
const taxTotals={'Artezano':450,'Pólen':4500,'Amuleto Bar':1350,'Sobrado Sushi':1200,'Fogo Poa':800,'Onna Sushi':1400,'Porto a Lenha':3200,'Forster Pisos':2900,'Galeto':600,'Saichi':800,'Villa Café':1500,'Ulbra':600,'Fada dos Florais':600};
const money=value=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const dailyOverrides={'Forster Pisos':96.66,'Fogo Poa':26.66,'Onna Sushi':46.66,'Porto a Lenha':106.66};
function taxedBudget(name){const base=taxTotals[name];return base?{daily:money((dailyOverrides[name]??base/30)*0.875)+'/dia',monthly:money(base*0.875)+(name==='Galeto'?' / 30 dias':'/mês')}:{daily:'Não informado',monthly:'Não informado'}}
function budgetHTML(name){const b=taxedBudget(name);return `<section class="budget-info" aria-label="Orçamento de ${escape(name)}"><div><strong>Diária líquida (−12,5%)</strong><span>${escape(b.daily)}</span></div><div><strong>Mês líquido (−12,5% · 30 dias)</strong><span>${escape(b.monthly)}</span></div></section>`}






