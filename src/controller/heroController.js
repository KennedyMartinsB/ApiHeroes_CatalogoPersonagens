import Hero from "../model/Hero.js";

class HeroController {
    constructor() {
        this.hero = new Hero();
    }

    all = async (req, res) => {
        try {
            const heroes = await this.hero.all();
            return res.status(200).json(heroes);
        } catch (error) {
            console.error('Erro ao listar heróis:', error);
            return res.status(500).json({ erro: 'Não foi possível carregar os heróis.' });
        }
    }

    show = async (req, res) => {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({ erro: 'ID inválido.' });
        }

        try {
            const hero = await this.hero.show(id);
            if (!hero) {
                return res.status(404).json({ erro: 'Herói não encontrado.' });
            }
            return res.status(200).json(hero);
        } catch (error) {
            console.error('Erro ao buscar herói:', error);
            return res.status(500).json({ erro: 'Não foi possível buscar o herói.' });
        }
    }

    create = async (req, res) => {
        const newHero = await this.hero.create(req.body);
        res.status(201).json(newHero);
    }

    update = async (req, res) => {
        const hero = await this.hero.update(req.params.id, req.body);
        res.status(201).json(hero);
    }

    delete = async (req, res) => {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({ erro: 'ID inválido.' });
        }

        try {
            const hero = await this.hero.delete(id);
            return res.status(200).json(hero);
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ erro: 'Herói não encontrado.' });
            }
            console.error('Erro ao excluir herói:', error);
            return res.status(500).json({ erro: 'Não foi possível excluir o herói.' });
        }
    }
}

export default new HeroController();
