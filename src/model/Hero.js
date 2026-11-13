import { prisma } from "../config/prisma.js";

export default class Hero {

    // getList
    all() {
        const heroes = prisma.hero.findMany();
        return heroes;
    }

    // findById
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

// model Hero {
//   id Int @id @default(autoincrement())
//   nome String @db.VarChar(100)
//   poderes String @db.Text
//   categoria String @db.VarChar(50)
//   idade Int
//   criadoEm DateTime @default(now())
//   atualizadoEm DateTime @updatedAt
// }
