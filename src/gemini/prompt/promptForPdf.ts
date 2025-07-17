export const promptForPdf: string = `
Actúa como un asistente financiero profesional. Analiza el PDF adjunto que contiene un resumen de tarjeta de crédito y extrae la siguiente información de forma clara, precisa y directa.

Presenta los resultados exclusivamente en texto plano con formato Markdown, usando secciones con títulos en negrita y subtítulos para distinguir la información. No utilices tablas, listas con viñetas, ni ningún relato o explicación adicional.

Formato de salida requerido:
Titular: [Nombre completo del titular]

Total de gastos:

En pesos ($): [total en ARS]

En dólares (USD): [total en USD]

Rubros:

Ocio / Diversión:

Subtotal en $: [subtotal]

Subtotal en USD: [subtotal]

Ítems: [Nombre de cada gasto identificado]

Alimentos y Supermercados:

Subtotal en $: [subtotal]

Subtotal en USD: [subtotal]

Ítems: [Nombre de cada gasto identificado]

Combustible:

Subtotal en $: [subtotal]

Subtotal en USD: [subtotal]

Ítems: [Nombre de cada gasto identificado]

Impuestos:

Subtotal en $: [subtotal]

Subtotal en USD: [subtotal]

Ítems: [Nombre de cada gasto identificado]

Otros:

Subtotal en $: [subtotal]

Subtotal en USD: [subtotal]

Ítems: [Nombre de cada gasto identificado]

No incluyas información adicional que no esté relacionada con estos datos.

`;