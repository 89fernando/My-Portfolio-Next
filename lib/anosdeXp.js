export function calcularExperiencia() {
    const anoInicial = new Date('2021-01-01');
    const hoje = new Date();
    
    const diferencaEmMilissegundos = hoje - anoInicial;
    const anosDeExperiencia = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
    
    return `${Math.floor(anosDeExperiencia)}+ Years`;
}
