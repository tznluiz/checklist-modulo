// Endereços recuperados das conversas e dos materiais locais dos clientes.
const accountAddresses={
 'Fada dos Florais':'Não contém endereço físico.',
 'Amuleto Bar':'Center Kan — Estrada João Antônio da Silveira, 1335, Restinga, Porto Alegre/RS.',
 'Artezano':'Av. Sertório, 6799, Porto Alegre/RS.',
 'Forster Pisos':'Av. Sertório, 4271, Jardim São Pedro, Porto Alegre/RS.',
 'Galeto':'Av. Getúlio Vargas, 828, Menino Deus, Porto Alegre/RS.',
 'Saichi':'Viva Open Mall, Porto Alegre/RS. Rua, número e loja: confirmação pendente.',
 'Sobrado Sushi':'Av. Duque de Caxias, 257, Centro, Espumoso/RS.',
 'Villa Café':'Rua Silveira Martins, 37, Centro, Novo Hamburgo/RS.',
 'Porto a Lenha':'Rua Sarmento Leite, 826, Cidade Baixa, Porto Alegre/RS.'
};
function addressFor(name){return accountAddresses[name]||'Endereço não localizado nas conversas consultadas. Confirmação pendente.'}
function addressHTML(name){return `<section class="hours-info" aria-label="Endereço de ${escape(name)}"><strong>Endereço</strong><div>${escape(addressFor(name))}</div></section>`}

