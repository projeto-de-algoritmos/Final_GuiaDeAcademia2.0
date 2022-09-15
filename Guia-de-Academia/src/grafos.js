import { vertices } from './store'
import { abdominal } from './store'
import { afundo_barra } from './store'
import { agachamento_barra } from './store'
import { alongamento } from './store'
import { barra_fixa } from './store'
import { bicicleta } from './store'
import { corrida } from './store'
import { desenvolvimento_halteres_ombro } from './store'
import { desenvolvimento_ombros_barra } from './store'
import { elevacao_frontal_barra } from './store'
import { elevacao_lateral_halteres } from './store'
import { elevacao_panturrilha } from './store'
import { elevacao_pelvica } from './store'
import { flexao_bracos } from './store'
import { leg_45 } from './store'
import { levantamento_halteres_biceps } from './store'
import { levantamento_terra } from './store'
import { pular_corda } from './store'
import { puxada_alta } from './store'
import { puxada_unilateral } from './store'
import { rosca_concentrada } from './store'
import { rosca_invertida_antebraco } from './store'
import { supino_barra } from './store'
import { supino_inclinado_halteres } from './store'
import { exercicios_selecionados } from './store'
import { sequencia_resultado } from './store'

class Graph {
    
    constructor() {
        this.vertices = [];
        this.adjacent = [];
        //this.edges = 0;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v.id] = [];
    }

    addEdge(v, w) {
        this.adjacent[v.id].push(w);
        this.adjacent[w.id].push(v);
        //this.edges++;
    }


    bfs(goal, root) {
        let adj = this.adjacent;

        const queue = [];
        queue.push(root);

        const discovered = [];
        discovered[root.id] = true;

        // const edges = [];
        // edges[root.id] = 0;

        const predecessors = [];
        predecessors[root.id] = null;

        const buildPath = (goal, root, predecessors) => {
            const stack = [];
            stack.push(goal);

            let u = predecessors[goal.id];

            while(u != root) {
                stack.push(u);
                u = predecessors[u.id];
            }

            stack.push(root);

            let path = stack.reverse()

            return path;
        }
    

        while(queue.length) {
            let v = queue.shift();

            if (v === goal) {
                return buildPath(goal, root, predecessors)
                // return { 
                //     distance: edges[goal.id],
                //     path: buildPath(goal, root, predecessors)
                // };
            }

            for (let i = 0; i < adj[v.id].length; i++) {
                if (!discovered[adj[v.id][i]]) {
                    discovered[adj[v.id][i]] = true;
                    queue.push(adj[v.id][i]);
                    // edges[adj[v.id][i]] = edges[v.id] + 1;
                    predecessors[adj[v.id][i]] = v;
                }
            }
        }

        return []
    }
}

let grafo_exercicios = new Graph();

for (let i = 0; i < 24; i++) grafo_exercicios.addVertex(vertices[i])

grafo_exercicios.addEdge(alongamento, barra_fixa)
grafo_exercicios.addEdge(alongamento, desenvolvimento_ombros_barra)
grafo_exercicios.addEdge(barra_fixa, puxada_unilateral)
grafo_exercicios.addEdge(barra_fixa, abdominal)
grafo_exercicios.addEdge(abdominal, elevacao_frontal_barra)
grafo_exercicios.addEdge(abdominal, levantamento_terra)
grafo_exercicios.addEdge(levantamento_terra, elevacao_panturrilha)
grafo_exercicios.addEdge(levantamento_terra, leg_45)
grafo_exercicios.addEdge(levantamento_terra, levantamento_halteres_biceps)
grafo_exercicios.addEdge(elevacao_panturrilha, leg_45)
grafo_exercicios.addEdge(leg_45, afundo_barra)
grafo_exercicios.addEdge(afundo_barra, supino_inclinado_halteres)
grafo_exercicios.addEdge(supino_inclinado_halteres, supino_barra)
grafo_exercicios.addEdge(supino_barra, desenvolvimento_halteres_ombro)
grafo_exercicios.addEdge(desenvolvimento_halteres_ombro, rosca_invertida_antebraco)
grafo_exercicios.addEdge(desenvolvimento_halteres_ombro, elevacao_lateral_halteres)
grafo_exercicios.addEdge(desenvolvimento_halteres_ombro, elevacao_frontal_barra)
grafo_exercicios.addEdge(desenvolvimento_halteres_ombro, corrida)
grafo_exercicios.addEdge(rosca_invertida_antebraco, elevacao_lateral_halteres)
grafo_exercicios.addEdge(levantamento_halteres_biceps, rosca_concentrada)
grafo_exercicios.addEdge(levantamento_halteres_biceps, elevacao_pelvica)
grafo_exercicios.addEdge(puxada_alta, elevacao_pelvica)
grafo_exercicios.addEdge(puxada_alta, rosca_concentrada)
grafo_exercicios.addEdge(corrida, desenvolvimento_ombros_barra)
grafo_exercicios.addEdge(corrida, bicicleta)
grafo_exercicios.addEdge(agachamento_barra, desenvolvimento_ombros_barra)
grafo_exercicios.addEdge(agachamento_barra, flexao_bracos)
grafo_exercicios.addEdge(pular_corda, bicicleta)
grafo_exercicios.addEdge(pular_corda, flexao_bracos)

export default grafo_exercicios