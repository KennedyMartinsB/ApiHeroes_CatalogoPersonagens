import { prisma } from "../config/prisma.js";

export default class Hero {

    all() {
        const heroes = prisma.hero.findMany();
        return heroes;
    }

    show(id) {
        const hero = prisma.hero.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return hero;
    }

    create(body) {
        const hero = prisma.hero.create({
            data: {
                nome: body.nome,
                poderes: body.poderes,
                categoria: body.categoria,
                idade: parseInt(body.idade)
            }
        })
        return hero;
    }

    update(id, body) {
        const hero = prisma.hero.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nome: body.nome,
                poderes: body.poderes,
                categoria: body.categoria,
                idade: parseInt(body.idade)
            }
        })
        return hero;
    }

    delete(id) {
        const hero = prisma.hero.delete({
            where: {
                id: parseInt(id)
            }
        })
        return hero;
    }

}
