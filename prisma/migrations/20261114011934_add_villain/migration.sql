/*
  Warnings:

  - You are about to drop the `vilain` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `vilain`;

-- CreateTable
CREATE TABLE `Villain` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `poderes` TEXT NOT NULL,
    `categoria` VARCHAR(50) NOT NULL,
    `idade` INTEGER NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
