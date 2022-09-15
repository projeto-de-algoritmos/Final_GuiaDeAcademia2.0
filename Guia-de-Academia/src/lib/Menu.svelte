<script>
    import { mostrar_sequencia } from '../store';
    import { exercicios_selecionados } from '../store';
    import { abdominal } from '../store'
    import { afundo_barra } from '../store'
    import { agachamento_barra } from '../store'
    import { alongamento } from '../store'
    import { barra_fixa } from '../store'
    import { bicicleta } from '../store'
    import { corrida } from '../store'
    import { desenvolvimento_halteres_ombro } from '../store'
    import { desenvolvimento_ombros_barra } from '../store'
    import { elevacao_frontal_barra } from '../store'
    import { elevacao_lateral_halteres } from '../store'
    import { elevacao_panturrilha } from '../store'
    import { elevacao_pelvica } from '../store'
    import { flexao_bracos } from '../store'
    import { leg_45 } from '../store'
    import { levantamento_halteres_biceps } from '../store'
    import { levantamento_terra } from '../store'
    import { pular_corda } from '../store'
    import { puxada_alta } from '../store'
    import { puxada_unilateral } from '../store'
    import { rosca_concentrada } from '../store'
    import { rosca_invertida_antebraco } from '../store'
    import { supino_barra } from '../store'
    import { supino_inclinado_halteres } from '../store'

</script>

<main class="container">
    <button on:click={() => mostrar_sequencia.set(true)}>
        Mostrar Sequência de Treino
    </button>
    <div>
        <img src={abdominal.icon} alt={abdominal.name} width=10%/>
        <label>
            <input type="checkbox" value={abdominal} bind:group={$exercicios_selecionados}>
            {abdominal.name}
        </label>
        <img src={afundo_barra.icon} alt={afundo_barra.name} width=10%/>
        <label>
            <input type="checkbox" value={afundo_barra} bind:group={$exercicios_selecionados}>
            {afundo_barra.name}
        </label>
        <img src={agachamento_barra.icon} alt={agachamento_barra.name} width=10%/>
        <label>
            <input type="checkbox" value={agachamento_barra} bind:group={$exercicios_selecionados}>
            {agachamento_barra.name}
        </label>
        <img src={alongamento.icon} alt={alongamento.name} width=10%/>
        <label>
            <input type="checkbox" value={alongamento} bind:group={$exercicios_selecionados}>
            {alongamento.name}
        </label>
        <img src={barra_fixa.icon} alt={barra_fixa.name} width=10%/>
        <label>
            <input type="checkbox" value={barra_fixa} bind:group={$exercicios_selecionados}>
            {barra_fixa.name} 
        </label>
        <img src={bicicleta.icon} alt={bicicleta.name} width=10%/>
        <label>
            <input type="checkbox" value={bicicleta} bind:group={$exercicios_selecionados}>
            {bicicleta.name}
        </label>
        <img src={corrida.icon} alt={corrida.name} width=10%/>
        <label>
            <input type="checkbox" value={corrida} bind:group={$exercicios_selecionados}>
            {corrida.name}
        </label>
        <img src={desenvolvimento_halteres_ombro.icon} alt={desenvolvimento_halteres_ombro.name} width=10%/>
        <label>
            <input type="checkbox" value={desenvolvimento_halteres_ombro} bind:group={$exercicios_selecionados}>
            {desenvolvimento_halteres_ombro.name}
        </label>
        <img src={desenvolvimento_ombros_barra.icon} alt={desenvolvimento_ombros_barra.name} width=10%/>
        <label>
            <input type="checkbox" value={desenvolvimento_ombros_barra} bind:group={$exercicios_selecionados}>
            {desenvolvimento_ombros_barra.name}
        </label>
        <img src={elevacao_frontal_barra.icon} alt={elevacao_frontal_barra.name} width=10%/>
        <label>
            <input type="checkbox" value={elevacao_frontal_barra} bind:group={$exercicios_selecionados}>
            {elevacao_frontal_barra.name}
        </label>
        <img src={elevacao_lateral_halteres.icon} alt={elevacao_lateral_halteres.name} width=10%/>
        <label>
            <input type="checkbox" value={elevacao_lateral_halteres} bind:group={$exercicios_selecionados}>
            {elevacao_lateral_halteres.name}
        </label>
        <img src={elevacao_panturrilha.icon} alt={elevacao_panturrilha.name} width=10%/>
        <label>
            <input type="checkbox" value={elevacao_panturrilha} bind:group={$exercicios_selecionados}>
            {elevacao_panturrilha.name}
        </label>
        <img src={elevacao_pelvica.icon} alt={elevacao_pelvica.name} width=10%/>
        <label>
            <input type="checkbox" value={elevacao_pelvica} bind:group={$exercicios_selecionados}>
            {elevacao_pelvica.name}
        </label>
        <img src={flexao_bracos.icon} alt={flexao_bracos.name} width=10%/>
        <label>
            <input type="checkbox" value={flexao_bracos} bind:group={$exercicios_selecionados}>
            {flexao_bracos.name}
        </label>
        <img src={leg_45.icon} alt={leg_45.name} width=10%/>
        <label>
            <input type="checkbox" value={leg_45} bind:group={$exercicios_selecionados}>
            {leg_45.name}
        </label>
        <img src={levantamento_halteres_biceps.icon} alt={levantamento_halteres_biceps.name} width=10%/>
        <label>
            <input type="checkbox" value={levantamento_halteres_biceps} bind:group={$exercicios_selecionados}>
            {levantamento_halteres_biceps.name}
        </label>
        <img src={levantamento_terra.icon} alt={levantamento_terra.name} width=10%/>
        <label>
            <input type="checkbox" value={levantamento_terra} bind:group={$exercicios_selecionados}>
            {levantamento_terra.name}
        </label>
        <img src={pular_corda.icon} alt={pular_corda.name} width=10%/>
        <label>
            <input type="checkbox" value={pular_corda} bind:group={$exercicios_selecionados}>
            {pular_corda.name}
        </label>
        <img src={puxada_alta.icon} alt={puxada_alta.name} width=10%/>
        <label>
            <input type="checkbox" value={puxada_alta} bind:group={$exercicios_selecionados}>
            {puxada_alta.name}
        </label>
        <img src={puxada_unilateral.icon} alt={puxada_unilateral.name} width=10%/>
        <label>
            <input type="checkbox" value={puxada_unilateral} bind:group={$exercicios_selecionados}>
            {puxada_unilateral.name}
        </label>
        <img src={rosca_concentrada.icon} alt={rosca_concentrada.name} width=10%/>
        <label>
            <input type="checkbox" value={rosca_concentrada} bind:group={$exercicios_selecionados}>
            {rosca_concentrada.name}
        </label>
        <img src={rosca_invertida_antebraco.icon} alt={rosca_invertida_antebraco.name} width=10%/>
        <label>
            <input type="checkbox" value={rosca_invertida_antebraco} bind:group={$exercicios_selecionados}>
            {rosca_invertida_antebraco.name}
        </label>
        <img src={supino_barra.icon} alt={supino_barra.name} width=10%/>
        <label>
            <input type="checkbox" value={supino_barra} bind:group={$exercicios_selecionados}>
            {supino_barra.name}
        </label>
        <img src={supino_inclinado_halteres.icon} alt={supino_inclinado_halteres.name} width=10%/>
        <label>
            <input type="checkbox" value={supino_inclinado_halteres} bind:group={$exercicios_selecionados}>
            {supino_inclinado_halteres.name}
        </label>
    </div>
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        gap: 30px;
        background-color: coral;
        border-radius: 0.5em;
        border: 2px solid rgba(255, 62, 0, 0);
    }

    button {
        font-family: fantasy;
        font-size: medium;
        padding: 1em 2em;
        color: black;
        background-color: #ff3e00;
        border-radius: 2em;
        border: 2px solid rgba(255, 62, 0, 0);
        outline: none;
        width: 200px;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
    }

    button:focus {
        border: 2px solid #ff3e00;
    }

    button:active {
        background-color: rgba(255, 62, 0, 0.2);
    }

    div {
        font-family: fantasy;
        font-size: medium;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        color: black;
        background-color: #ff3e00;
        border-radius: 0.5em;
        border: 2px solid rgba(255, 62, 0, 0);
        padding: 1em 2em;
    }

    label {
        display: flex;
        justify-content: flex-start;
        outline: none;
        width: 23%;
    }

    input {
        padding: 1em 2em;
    }

</style>