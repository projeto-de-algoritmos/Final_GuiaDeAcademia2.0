import { writable } from "svelte/store";

export let mostrar_sequencia = writable(false)
export let exercicios_selecionados = writable([])
export let sequencia_resultado = writable([])

export let abdominal = {
    name: 'Abdominal',
    icon: "../icons/abdominal.png",
    rendimento: 1

}
export let afundo_barra = {
    name: 'Afundo de Barra',
    icon: "../icons/afundo_barra.png",
    rendimento: 2
}
export let agachamento_barra = {
    name: 'Agachamento de Barra',
    icon: "../icons/agachamento_barra.png",
    rendimento: 3
}
export let alongamento = {
    name: 'Alongamento',
    icon: "../icons/alongamento.png",
    rendimento: 5
}
export let barra_fixa = {
    name: 'Barra Fixa',
    icon: "../icons/barra_fixa.png",
    rendimento: 8
}
export let bicicleta = {
    name: 'Bicileta',
    icon: "../icons/bicicleta.png",
    rendimento: 13
}
export let corrida = {
    name: 'Corrida',
    icon: "../icons/corrida.png",
    rendimento: 21
}
export let desenvolvimento_halteres_ombro ={
    name: 'Desenvolvimento com Halteres para Ombro',
    icon: "../icons/desenvolvimento_halteres_ombro.png",
    rendimento: 34
}
export let desenvolvimento_ombros_barra = {

    name: 'Desenvolvimento de Ombros com Barra',
    icon: "../icons/desenvolvimento_ombros_barra.png",
    rendimento: 55
}
export let elevacao_frontal_barra = {
    name: 'Elevação Frontal com Barra',
    icon: "../icons/elevacao_frontal_barra.png",
    rendimento: 89
}
export let elevacao_lateral_halteres = {
    name: 'Elevação Lateral com Halteres',
    icon: "../icons/elevacao_lateral_halteres.png",
    rendimento: 144
}
export let elevacao_panturrilha = {
    name: 'Elevação de Panturrilha',
    icon: "../icons/elevacao_panturrilha.png",
    rendimento: 233
}
export let elevacao_pelvica = {
    name: 'Elevação Pélvica',
    icon: "../icons/elevacao_pelvica.png",
    rendimento: 377
}
export let flexao_bracos = {
    name: 'Flexão de Braços',
    icon: "../icons/flexao_bracos.png",
    rendimento: 610
}
export let leg_45 = {
    name: 'Leg 45°',
    icon: "../icons/leg_45.png",
    rendimento: 987
}
export let levantamento_halteres_biceps = {
    name: 'Levantamento com Halteres para Bíceps',
    icon: "../icons/levantamento_halteres_biceps.png",
    rendimento: 1597
}
export let levantamento_terra = {
    name: 'Levantamento Terra',
    icon: "../icons/levantamento_terra.png",
    rendimento: 2584
}
export let pular_corda = {
    name: 'Pular Corda',
    icon: "../icons/pular_corda.png",
    rendimento: 4181
}
export let puxada_alta = {
    name: 'Puxada Alta',
    icon: "../icons/puxada_alta.png",
    rendimento: 6765
}
export let puxada_unilateral= {
    name: 'Puxada Unilateral',
    icon: "../icons/puxada_unilateral.png",
    rendimento: 10946
}
export let rosca_concentrada ={
    name: 'Rosca Concentrada',
    icon: "../icons/rosca_concentrada.png",
    rendimento: 17711
}
export let rosca_invertida_antebraco = {
    name: 'Rosca Invertida com Antebraço',
    icon: "../icons/rosca_invertida_antebraco.png",
    rendimento: 28657
}
export let  supino_barra = {
    name: 'Supino na Barra',
    icon: "../icons/supino_barra.png",
    rendimento: 46368
}
export let supino_inclinado_halteres = {
    name: 'Supino Inclinado com Halteres',
    icon: "../icons/supino_inclinado_halteres.png",
    rendimento: 75025
}

export let exercicios = [
    abdominal, afundo_barra, agachamento_barra, alongamento, 
    barra_fixa, bicicleta, corrida, desenvolvimento_halteres_ombro,
    desenvolvimento_ombros_barra, elevacao_frontal_barra, elevacao_lateral_halteres,
    elevacao_panturrilha, elevacao_pelvica, flexao_bracos, leg_45, 
    levantamento_halteres_biceps, levantamento_terra, pular_corda, puxada_alta, 
    puxada_unilateral, rosca_concentrada, rosca_invertida_antebraco, supino_barra,
    supino_inclinado_halteres
]