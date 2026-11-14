import Villain from '../model/Villain.js'

class VillainController {
    constructor() {
        this.villain = new Villain();
    }

    all = async (req, res) => {
        try {
            const villains = await this.villain.all();
            return res.status(200).render('villains', { villains });
        } catch (error) {
            console.error('Erro ao listar vilões:', error);
            return res.status(500).send('Não foi possível carregar a lista de vilões.');
        }
    }

    show = async (req, res) => {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({ erro: 'ID inválido.' });
        }

        try {
            const villain = await this.villain.show(id);
            if (!villain) {
                return res.status(404).json({ erro: 'Vilão não encontrado.' });
            }
            return res.status(200).json(villain);
        } catch (error) {
            console.error('Erro ao buscar vilão:', error);
            return res.status(500).json({ erro: 'Não foi possível buscar o vilão.' });
        }
    }

    create = async (req, res) => {
        const villain = await this.villain.create(req.body);
        res.status(201).json(villain);
    }

    update = async (req, res) => {
        const villain = await this.villain.update(req.params.id, req.body);
        res.status(201).json(villain);
    }

    delete = async (req, res) => {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({ erro: 'ID inválido.' });
        }

        try {
            const villain = await this.villain.delete(id);
            return res.status(200).json(villain);
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ erro: 'Vilão não encontrado.' });
            }
            console.error('Erro ao excluir vilão:', error);
            return res.status(500).json({ erro: 'Não foi possível excluir o vilão.' });
        }
    }
}

export default new VillainController();