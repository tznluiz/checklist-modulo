// Horários de atendimento, não horários de execução de regras. Consulta: 27/10/2026.
const accountHours={
 'Amuleto Bar':['Almoço: segunda a sexta; horários não informados.','Noite: terça a domingo, a partir das 18h; fechamento não informado.','Segunda: somente almoço.'],
 'Artezano':['Segunda a sábado: 11h30–14h30.','Domingo: fechado.'],
 'Forster Pisos':['Showroom: segunda a sexta, 08h–12h e 13h–18h.','Fim de semana: não informado.'],
 'Galeto':['Almoço: segunda a sexta, 11h30–14h30; sábado, 11h30–15h30; domingo, 11h30–16h.','Jantar: segunda a sábado, 19h–23h; domingo fechado.','Delivery: mesmos horários, conforme orientação do usuário.'],
 'Onna Sushi':['Terça-feira: fechado.','Quarta-feira: 18h–22h30.','Quinta-feira: 18h–22h30.','Sexta-feira: 18h–22h30.','Sábado: 18h–22h30.','Domingo: 18h–22h30.','Segunda-feira: 18h–22h30 (registro anterior; não incluída na atualização).'],
 'Saichi':['Delivery / jantar: todos os dias, 17h–23h.','Almoço geral: 11h30–14h30; dias e horário específico dos executivos pendentes.','Horário limite de pedidos do delivery a confirmar.'],
 'Sobrado Sushi':['Quarta a domingo: 19h–23h.','Segunda e terça: fechado.'],
 'Villa Café':['Casa: terça a sábado, 10h–19h30.','Domingos, segundas e feriados: fechado.','Horário específico do delivery / iFood a confirmar.'],
 'Porto a Lenha':['Domingo a quinta: 18h–23h.','Sexta e sábado: 18h–23h30.','Abertura às segundas informada no briefing; substitui a bio antiga.']
};
function hoursFor(name){return accountHours[name]||['Horário de atendimento não informado nas conversas consultadas.']}
function hoursHTML(name){return `<section class="hours-info" aria-label="Horários de atendimento de ${escape(name)}"><strong>Horários de atendimento</strong>${hoursFor(name).map(line=>`<div>${escape(line)}</div>`).join('')}</section>`}

