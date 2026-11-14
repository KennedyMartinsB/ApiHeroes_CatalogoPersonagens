import { prisma } from "../config/prisma.js";

export default class Villain {

    all() {
        const villains = prisma.villain.findMany();
        return villains;
    }

    show(id) {
        const villain = prisma.villain.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return villain;
    }

    create(body) {
        const villain = prisma.villain.create({
            data: {
                nome: body.nome,
                poderes: body.poderes,
                categoria: body.categoria,
                idade: parseInt(body.idade)
            }
        });
        return villain;
    }

    update(id, body) {
        const villain = prisma.villain.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nome: body.nome,
                poderes: body.poderes,
                categoria: body.categoria,
                idade: parseInt(body.idade)
            }
        });
        return villain
    }

    delete(id) {
        const villain = prisma.villain.delete({
            where: {
                id: parseInt(id)
            }
        });
        return villain;
    }
}
