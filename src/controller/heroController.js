import Hero from "../model/Hero";

class HeroController {
    constructor() {
        this.hero = new Hero();
    }

    all = async (req, res) => {
        const heroes = await this.hero.all();
        res.status(200).json(heroes);
    }

    show = async (req, res) => {
        const hero = await this.hero.show(req.params.id);
        res.status(200).json(hero);
    }

    create = async (req, res) => {
        const newHero = await this.hero.create(req.body);
        res.status(201).json(newHero);
    }

    update = async (req, res) => {
        const hero = await this.hero.update(req.id, req.body);
        res.status(201).json(hero);
    }

    delete = async (req, res) => {
        const hero = await this.hero.delete(req.id);
        res.status(200).json(hero);
    }
}

export default new HeroController();