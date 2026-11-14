import Villain from '../model/Villain.js'

class VillainController {
    constructor() {
        this.villain = new Villain();
    }

    all = async (req, res) => {
        const villains = await this.villain.all();
        res.status(200).json(villains);
    }

    show = async (req, res) => {
        const villain = await this.villain.show(req.params.id);
        res.status(200).json(villain);
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
        const villain = await this.villain.delete(req.params.id);
        res.status(200).json(villain);
    }
}

export default new VillainController();