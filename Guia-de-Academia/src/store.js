import { writable } from "svelte/store";

export let mostrar_sequencia = writable(false)
export let exercicios_selecionados = writable([])
export let sequencia_resultado = writable([])

export const abdominal = {
    name: 'Abdominal',
    icon: "../icons/abdominal.png",
    id: 0

}
export const afundo_barra = {
    name: 'Afundo de Barra',
    icon: "../icons/afundo_barra.png",
    id: 1
}
export const agachamento_barra = {
    name: 'Agachamento de Barra',
    icon: "../icons/agachamento_barra.png",
    id: 2
}
export const alongamento = {
    name: 'Alongamento',
    icon: "../icons/alongamento.png",
    id: 3
}
export const barra_fixa = {
    name: 'Barra Fixa',
    icon: "../icons/barra_fixa.png",
    id: 4
}
export const bicicleta = {
    name: 'Bicileta',
    icon: "../icons/bicicleta.png",
    id: 5
}
export const corrida = {
    name: 'Corrida',
    icon: "../icons/corrida.png",
    id: 6
}
export const desenvolvimento_halteres_ombro ={
    name: 'Desenvolvimento com Halteres para Ombro',
    icon: "../icons/desenvolvimento_halteres_ombro.png",
    id: 7
}
export const desenvolvimento_ombros_barra = {

    name: 'Desenvolvimento de Ombros com Barra',
    icon: "../icons/desenvolvimento_ombros_barra.png",
    id: 8
}
export const elevacao_frontal_barra = {
    name: 'Elevação Frontal com Barra',
    icon: "../icons/elevacao_frontal_barra.png",
    id: 9
}
export const elevacao_lateral_halteres = {
    name: 'Elevação Lateral com Halteres',
    icon: "../icons/elevacao_lateral_halteres.png",
    id: 10
}
export const elevacao_panturrilha = {
    name: 'Elevação de Panturrilha',
    icon: "../icons/elevacao_panturrilha.png",
    id: 11
}
export const elevacao_pelvica = {
    name: 'Elevação Pélvica',
    icon: "../icons/elevacao_pelvica.png",
    id: 12
}
export const flexao_bracos = {
    name: 'Flexão de Braços',
    icon: "../icons/flexao_bracos.png",
    id: 13
}
export const leg_45 = {
    name: 'Leg 45°',
    icon: "../icons/leg_45.png",
    id: 14
}
export const levantamento_halteres_biceps = {
    name: 'Levantamento com Halteres para Bíceps',
    icon: "../icons/levantamento_halteres_biceps.png",
    id: 15
}
export const levantamento_terra = {
    name: 'Levantamento Terra',
    icon: "../icons/levantamento_terra.png",
    id: 16
}
export const pular_corda = {
    name: 'Pular Corda',
    icon: "../icons/pular_corda.png",
    id: 17
}
export const puxada_alta = {
    name: 'Puxada Alta',
    icon: "../icons/puxada_alta.png",
    id: 18
}
export const puxada_unilateral= {
    name: 'Puxada Unilateral',
    icon: "../icons/puxada_unilateral.png",
    id: 19
}
export const rosca_concentrada ={
    name: 'Rosca Concentrada',
    icon: "../icons/rosca_concentrada.png",
    id: 20
}
export const rosca_invertida_antebraco = {
    name: 'Rosca Invertida com Antebraço',
    icon: "../icons/rosca_invertida_antebraco.png",
    id: 21
}
export const  supino_barra = {
    name: 'Supino na Barra',
    icon: "../icons/supino_barra.png",
    id: 22
}
export const supino_inclinado_halteres = {
    name: 'Supino Inclinado com Halteres',
    icon: "../icons/supino_inclinado_halteres.png",
    id: 23
}

export const vertices = [
    abdominal, afundo_barra, agachamento_barra, alongamento, 
    barra_fixa, bicicleta, corrida, desenvolvimento_halteres_ombro,
    desenvolvimento_ombros_barra, elevacao_frontal_barra, elevacao_lateral_halteres,
    elevacao_panturrilha, elevacao_pelvica, flexao_bracos, leg_45, 
    levantamento_halteres_biceps, levantamento_terra, pular_corda, puxada_alta, 
    puxada_unilateral, rosca_concentrada, rosca_invertida_antebraco, supino_barra,
    supino_inclinado_halteres
]