<script>

    import { mostrar_sequencia } from '../store';
    import { exercicios_selecionados } from '../store';
    import { sequencia_resultado } from '../store';
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
    // create a graph class
    class Graph {
        // defining vertex array and
        // adjacent list
        constructor(noOfVertices)
        {
            this.noOfVertices = noOfVertices;
            this.AdjList = new Map();
        }
    
        // functions to be implemented
    
        // addVertex(v)
        // addEdge(v, w)
        // printGraph()
    
        // bfs(v)
        // dfs(v)
        addVertex(v)
        {
            // initialize the adjacent list with a
            // null array
            this.AdjList.set(v, []);
        }
        // add edge to the graph
        addEdge(v, w)
        {
            // get the list for vertex v and put the
            // vertex w denoting edge between v and w
            this.AdjList.get(v).push(w);
        
            // Since graph is undirected,
            // add an edge from w to v also
            this.AdjList.get(w).push(v);
        }
        
        bfs(nodes)
        {
        
            // create a visited object
            var visited = [];
        
            // Create an object for queue
            var q = [];

            // add the starting node to the queue
            visited[nodes[0].id] = true;
            q.push(nodes[0]);
        
            // loop until queue is empty
            while (q.length!=0) {
                // get the element from the queue
                var getQueueElement = q.pop();
        
                // get the adjacent list for current vertex
                var get_List = this.AdjList.get(getQueueElement);
        
                // loop through the list and add the element to the
                // queue if it is not processed yet
                for (var i in get_List) {
                    var neigh = get_List[i];
        
                    if (!visited[neigh.id]) {
                        visited[neigh.id] = true;
                        q.push(neigh);
                        for(var j in nodes) {
                            if (neigh==j) {$sequencia_resultado = [...$sequencia_resultado, neigh]}
                        }
                    }
                }
            }
        }
    }
    
    let grafo_exercicios = new Graph(23)

    let vertices = [$abdominal, $afundo_barra, $agachamento_barra, $alongamento, 
    $barra_fixa, $bicicleta, $corrida, $desenvolvimento_halteres_ombro,
    $desenvolvimento_ombros_barra, $elevacao_frontal_barra, $elevacao_lateral_halteres,
    $elevacao_panturrilha, $elevacao_pelvica, $flexao_bracos, $leg_45, 
    $levantamento_halteres_biceps, $levantamento_terra, $pular_corda, $puxada_alta, 
    $puxada_unilateral, $rosca_concentrada, $rosca_invertida_antebraco, $supino_barra,
    $supino_inclinado_halteres]

    grafo_exercicios.addVertex(vertices[0])
    grafo_exercicios.addVertex(vertices[1])
    grafo_exercicios.addVertex(vertices[2])
    grafo_exercicios.addVertex(vertices[3])
    grafo_exercicios.addVertex(vertices[4])
    grafo_exercicios.addVertex(vertices[5])
    grafo_exercicios.addVertex(vertices[6])
    grafo_exercicios.addVertex(vertices[7])
    grafo_exercicios.addVertex(vertices[8])
    grafo_exercicios.addVertex(vertices[9])
    grafo_exercicios.addVertex(vertices[10])
    grafo_exercicios.addVertex(vertices[11])
    grafo_exercicios.addVertex(vertices[12])
    grafo_exercicios.addVertex(vertices[13])
    grafo_exercicios.addVertex(vertices[14])
    grafo_exercicios.addVertex(vertices[15])
    grafo_exercicios.addVertex(vertices[16])
    grafo_exercicios.addVertex(vertices[17])
    grafo_exercicios.addVertex(vertices[18])
    grafo_exercicios.addVertex(vertices[19])
    grafo_exercicios.addVertex(vertices[20])
    grafo_exercicios.addVertex(vertices[21])
    grafo_exercicios.addVertex(vertices[22])
    grafo_exercicios.addVertex(vertices[23])

    grafo_exercicios.addEdge($alongamento, $barra_fixa)
    grafo_exercicios.addEdge($alongamento, $desenvolvimento_ombros_barra)
    grafo_exercicios.addEdge($barra_fixa, $puxada_unilateral)
    grafo_exercicios.addEdge($barra_fixa, $abdominal)
    grafo_exercicios.addEdge($abdominal, $elevacao_frontal_barra)
    grafo_exercicios.addEdge($abdominal, $levantamento_terra)
    grafo_exercicios.addEdge($levantamento_terra, $elevacao_panturrilha)
    grafo_exercicios.addEdge($levantamento_terra, $leg_45)
    grafo_exercicios.addEdge($levantamento_terra, $levantamento_halteres_biceps)
    grafo_exercicios.addEdge($elevacao_panturrilha, $leg_45)
    grafo_exercicios.addEdge($leg_45, $afundo_barra)
    grafo_exercicios.addEdge($afundo_barra, $supino_inclinado_halteres)
    grafo_exercicios.addEdge($supino_inclinado_halteres, $supino_barra)
    grafo_exercicios.addEdge($supino_barra, $desenvolvimento_halteres_ombro)
    grafo_exercicios.addEdge($desenvolvimento_halteres_ombro, $rosca_invertida_antebraco)
    grafo_exercicios.addEdge($desenvolvimento_halteres_ombro, $elevacao_lateral_halteres)
    grafo_exercicios.addEdge($desenvolvimento_halteres_ombro, $elevacao_frontal_barra)
    grafo_exercicios.addEdge($desenvolvimento_halteres_ombro, $corrida)
    grafo_exercicios.addEdge($rosca_invertida_antebraco, $elevacao_lateral_halteres)
    grafo_exercicios.addEdge($levantamento_halteres_biceps, $rosca_concentrada)
    grafo_exercicios.addEdge($levantamento_halteres_biceps, $elevacao_pelvica)
    grafo_exercicios.addEdge($puxada_alta, $elevacao_pelvica)
    grafo_exercicios.addEdge($puxada_alta, $rosca_concentrada)
    grafo_exercicios.addEdge($corrida, $desenvolvimento_ombros_barra)
    grafo_exercicios.addEdge($corrida, $bicicleta)
    grafo_exercicios.addEdge($agachamento_barra, $desenvolvimento_ombros_barra)
    grafo_exercicios.addEdge($agachamento_barra, $flexao_bracos)
    grafo_exercicios.addEdge($pular_corda, $bicicleta)
    grafo_exercicios.addEdge($pular_corda, $flexao_bracos)

    grafo_exercicios.bfs($exercicios_selecionados) 

</script>

<main class="container">
    <button on:click={() => mostrar_sequencia.set(false)}>
        Voltar para o Menu
    </button>
    <div>
        {#each $sequencia_resultado as exer, i}
            <img src={exer.icon} alt={exer.name} width=10%/>
            <item>
                {i+1}° {exer.name}
            </item>
        {/each}
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
</style>